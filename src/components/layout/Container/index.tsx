import { ReactNode } from 'react';

import classnames from 'classnames';

export type ContainerProps = {
  children: ReactNode;
  className: string;
}
export default function Container({ children, className}: Readonly<ContainerProps>) {
  const classNames = classnames('h-screen', className);
  return <div data-testid="layout-container" className={classNames}>{children}</div>;
}
