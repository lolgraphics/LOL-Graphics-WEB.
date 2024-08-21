import { ReactNode } from 'react';

export interface ContainerProps {
  children: ReactNode;
}
export default function Container({ children }: ContainerProps) {
  return <div className="h-screen">{children}</div>;
}
