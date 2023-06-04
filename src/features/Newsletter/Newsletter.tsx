import { useTranslation } from 'react-i18next';
import style from './Newsletter.module.scss';
import { Button } from '../UI/Button/Button';
import { FormElement } from '../UI/FormElement/FormElement';

export const Newsletter = () => {
  const { t } = useTranslation();
  return (
    <div className={style['newsletter']}>
      <p className={style['newsletter__title']}>{t('newsletter.title')}</p>
      <form className={style['newsletter__form']}>
        <FormElement
          id="email"
          label="Adres e-mail"
          type="email"
          className="newsletter"
        />
        <Button type="submit" classNames={['btn', 'btn--newsletter']}>
          {t('newsletter.button')}
        </Button>
      </form>
    </div>
  );
};
