import { Root } from '../../../types/shared';
import style from './Button.module.scss';

type ButtonProps = {
  classNames: string[];
  type: 'submit' | 'button' | 'reset';
  onClick?: () => void;
};

export const Button = ({
  children,
  classNames,
  ...rest
}: Root & ButtonProps) => {
  const styledClassNames = classNames
    .map((className) => style[className])
    .join(' ');

  return (
    <button {...rest} className={styledClassNames}>
      {children}
    </button>
  );
};
