import { Link } from 'react-router-dom';
import { Root } from '../../../types/shared';

import style from './RouterLink.module.scss';

type RouterLinkProps = {
  path: string;
  className?: string;
};

export const RouterLink = ({
  path,
  children,
  className,
}: RouterLinkProps & Root) => {
  return (
    <Link
      to={path}
      className={`${style['router-link']} ${
        className && style[`router-link--${className}`]
      }`}
    >
      {children}
    </Link>
  );
};
