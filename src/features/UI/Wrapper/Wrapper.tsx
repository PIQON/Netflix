import { Root } from '../../../types/shared';

import style from './Wrapper.module.scss';

type WrapperProps = {
  maxWidth: string;
};

export const Wrapper = ({ children, maxWidth }: Root & WrapperProps) => {
  return (
    <div className={style['wrapper']} style={{ maxWidth }}>
      {children}
    </div>
  );
};
