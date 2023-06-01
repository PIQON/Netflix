import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../../../features/UI/LanguageSwitcher/LanguageSwitcher';
import { Logo } from '../../../features/UI/Logo/Logo';
import { RouterLink } from '../../../features/UI/RouterLink/RouterLink';
import style from './MainNavigation.module.scss';

export const MainNavigation = () => {
  const { t } = useTranslation();

  return (
    <nav className={style['nav']}>
      <Logo />
      <div className={style['nav__actions']}>
        <LanguageSwitcher />
        <RouterLink path="/login" className="login">
          {t('links.login')}
        </RouterLink>
      </div>
    </nav>
  );
};
