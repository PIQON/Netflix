import style from './Main.module.scss';
import { Wrapper } from '../../features/UI/Wrapper/Wrapper';
import { MainNavigation } from './MainNavigation/MainNavigation';
import { useTranslation } from 'react-i18next';
import { Newsletter } from '../../features/Newsletter/Newsletter';

export const Main = () => {
  const { t } = useTranslation();
  return (
    <div className={style['main']}>
      <header className={style['header']}>
        <Wrapper maxWidth="70rem">
          <MainNavigation />
        </Wrapper>
        <Wrapper maxWidth="55rem">
          <div className={style['header__content']}>
            <h1 className={style['header__title']}>{t('main.title')}</h1>
            <p className={style['header__description']}>
              {t('main.description')}
            </p>
            <Newsletter />
          </div>
        </Wrapper>
      </header>
    </div>
  );
};
