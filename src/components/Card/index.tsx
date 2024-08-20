import { ReactNode, FC } from 'react';
import MaterialCard from '@mui/material/Card';
import MaterialCardHeader from '@mui/material/CardHeader';
import MaterialCardContent from '@mui/material/CardContent';
import MaterialCardActions from '@mui/material/CardActions';
import { SxProps, Theme } from '@mui/material/styles';

interface CardProps {
  title: string;
  children: ReactNode;
  Actions?: FC;
  sx?: SxProps<Theme>;
}

export default function Card({ title, children, Actions, sx }: CardProps) {
  return (
    <MaterialCard sx={sx}>
      <MaterialCardHeader>{title}</MaterialCardHeader>
      <MaterialCardContent>{children}</MaterialCardContent>
      {Actions && <MaterialCardActions>{<Actions />}</MaterialCardActions>}
    </MaterialCard>
  );
}
