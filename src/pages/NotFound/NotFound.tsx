import { Logo } from '../../features/UI/Logo/Logo';
import { RouterLink } from '../../features/UI/RouterLink/RouterLink';

import style from './NotFound.module.scss';

export const NotFound = () => {
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
          <h1 className={style['not-found__title']}>Nie ta strona?</h1>
          <p className={style['not-found__description']}>
            Niestety, nie możemy znaleźć tej strony. Na stronie głównej serwisu
            znajdziesz mnóstwo filmów, seriali i programów do obejrzenia.
          </p>
          <RouterLink path="/" className="not-found">
            Strona główna Netflix
          </RouterLink>
          <div className={style['not-found__error']}>
            <span className={style['not-found__error--line']}></span>
            <p className={style['not-found__error--title']}>
              Kod błędu <strong>NSES-404</strong>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};
