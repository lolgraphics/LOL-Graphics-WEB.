import { ReactNode, FC } from 'react';
import MaterialCard from '@mui/material/Card';
import MaterialCardHeader from '@mui/material/CardHeader';
import MaterialCardContent from '@mui/material/CardContent';
import MaterialCardActions from '@mui/material/CardActions';

interface CardProps {
  title: string;
  children: ReactNode;
  Actions?: FC;
}

export default function Card({ title, children, Actions }: CardProps ){
  return <MaterialCard>
    <MaterialCardHeader>
      {title}
    </MaterialCardHeader>
    <MaterialCardContent>
      {children}
    </MaterialCardContent>
    {Actions && <MaterialCardActions>
      {<Actions />}
    </MaterialCardActions>}
  </MaterialCard>
};