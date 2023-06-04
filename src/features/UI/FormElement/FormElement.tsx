import { forwardRef } from 'react';
import style from './FormElement.module.scss';
import { ErrorLogo } from '../ErrorLogo/ErrorLogo';

type InputType = 'text' | 'password' | 'email';

type FormElementProps = {
  id: string;
  label: string;
  type: InputType;
  placeholder?: string;
  error?: string;
  className?: string;
};

export const FormElement = forwardRef<HTMLInputElement, FormElementProps>(
  ({ id, label, error, className, ...rest }, ref) => {
    return (
      <div
        className={`${style['form-item']} ${style[`form-item--${className}`]}`}
      >
        <input
          className={style['form-item__input']}
          id={id}
          {...rest}
          ref={ref}
        />
        <label htmlFor={id} className={style['form-item__label']}>
          {label}
        </label>
        {error && (
          <p className={style['form-item__error']}>
            <ErrorLogo /> {error}
          </p>
        )}
      </div>
    );
  }
);
