import { ReactNode } from 'react';

import classnames from 'classnames';

export interface ContainerProps {
  children: ReactNode;
  className: string;
}
export default function Container({ children, className = ""}: ContainerProps) {
  const classNames = classnames('h-screen', className);
  return <div data-testid="layout-container" className={classNames}>{children}</div>;
}
