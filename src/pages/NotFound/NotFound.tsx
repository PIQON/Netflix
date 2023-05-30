import { useTranslation } from 'react-i18next';
import { Logo } from '../../features/UI/Logo/Logo';
import { RouterLink } from '../../features/UI/RouterLink/RouterLink';

import style from './NotFound.module.scss';

export const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className={style['not-found']}>
      <header className={style['not-found__header']}>
        <RouterLink path="/">
          <Logo />
        </RouterLink>
      </header>
      <main className={style['not-found__content']}>
        <div className={style['not-found__overlay']}></div>
        <div className={style['not-found__typography']}>
          <h1 className={style['not-found__title']}>{t('notFound.title')}</h1>
          <p className={style['not-found__description']}>
            {t('notFound.description')}
          </p>
          <RouterLink path="/" className="not-found">
            {t('notFound.link')}
          </RouterLink>
          <div className={style['not-found__error']}>
            <span className={style['not-found__error--line']}></span>
            <p className={style['not-found__error--title']}>
              {t('notFound.error')} <strong>NSES-404</strong>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};
