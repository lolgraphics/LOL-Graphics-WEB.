# Use uma imagem base do Ubuntu
FROM ubuntu:latest

# Instale o Git e outras dependências
RUN apt-get update && apt-get install -y git bash

# Crie um diretório de trabalho
WORKDIR /app

# Copie o script de instalação dos hooks para o contêiner
COPY install-hooks.sh /app/install-hooks.sh

# Torne o script executável
RUN chmod +x /app/install-hooks.sh

# Configure o entrypoint para iniciar o shell e permitir interatividade
ENTRYPOINT ["/bin/bash", "-c", "tail -f /dev/null"]
