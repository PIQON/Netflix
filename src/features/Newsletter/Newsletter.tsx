import { useTranslation } from 'react-i18next';
import { Button } from '../UI/Button/Button';
import { FormElement } from '../UI/FormElement/FormElement';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import { NewsletterData, newsletterSchema } from './Schema';

import style from './Newsletter.module.scss';

export const Newsletter = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterData>({
    resolver: yupResolver(newsletterSchema),
  });

  const handleFormSubmit = (data: NewsletterData) => {
    console.log(data);
    reset();
  };

  const errorMessage =
    errors?.email?.type === 'required'
      ? t('form.emailRequired')
      : t('form.emailValid');

  return (
    <div className={style['newsletter']}>
      <p className={style['newsletter__title']}>{t('newsletter.title')}</p>
      <form
        className={style['newsletter__form']}
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <FormElement
          id="email"
          label="Adres e-mail"
          type="email"
          className="newsletter"
          error={errors?.email && errorMessage}
          {...register('email')}
        />
        <Button type="submit" classNames={['btn', 'btn--newsletter']}>
          {t('newsletter.button')}
        </Button>
      </form>
    </div>
  );
};
