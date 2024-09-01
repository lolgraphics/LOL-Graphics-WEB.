#!/bin/bash

# Caminho para o diretório de hooks do Git
HOOK_DIR=".git/hooks"

# Verifica se o diretório de hooks existe
if [ ! -d "$HOOK_DIR" ]; then
  echo "Diretório de hooks não encontrado. Certifique-se de estar no diretório do repositório git."
  exit 1
fi

# Cria o hook de commit-msg
echo "Criando o hook de commit-msg..."
cat << 'EOF' > "$HOOK_DIR/commit-msg"
#!/bin/sh

# Get the branch name
branch_name=$(git symbolic-ref --short HEAD)

# Check if the branch name starts with "feature/FEA-", "BUG-",
# or "BUG/BUG-" followed by a number
if [[ ! "$branch_name" =~ ^(feature/FEA-[0-9]+|BUG-[0-9]+|BUG/BUG-[0-9]+)$ ]]; then
  echo "Error: Branch name must follow the format 'feature/FEA-<number_of_task>', 'BUG-<number_of_task>', or 'BUG/BUG-<number_of_task>'."
  exit 1
fi

# Determine the prefix based on the branch name
if [[ "$branch_name" =~ ^feature/FEA-[0-9]+$ ]]; then
  prefix=$(echo "$branch_name" | sed -n 's/^feature\/\(FEA-[0-9]\+\)$/\1/p')
elif [[ "$branch_name" =~ ^BUG-[0-9]+$ ]]; then
  prefix=$(echo "$branch_name" | sed -n 's/^BUG-\([0-9]\+\)$/BUG-\1/p')
elif [[ "$branch_name" =~ ^BUG/BUG-[0-9]+$ ]]; then
  prefix=$(echo "$branch_name" | sed -n 's/^BUG\/\(BUG-[0-9]\+\)$/\1/p')
fi

# Read the commit message
commit_message=$(cat "$1")

# Check if the commit message starts with the prefix
if [[ ! "$commit_message" =~ ^$prefix ]]; then
  echo "Error: The commit message must start with the branch prefix '$prefix'."
  exit 1
fi

# Check for duplicate Signed-off-by lines
if test "" != "$(grep '^Signed-off-by: ' "$1" | sort | uniq -c | sed -e '/^[ 	]*1[ 	]/d')"; then
  echo >&2 "Duplicate Signed-off-by lines."
  exit 1
fi
EOF

# Torna o hook executável
chmod +x "$HOOK_DIR/commit-msg"

echo "Hook de commit-msg instalado com sucesso."
