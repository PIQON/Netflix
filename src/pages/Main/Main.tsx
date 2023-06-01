import style from './Main.module.scss';
import { Wrapper } from '../../features/UI/Wrapper/Wrapper';
import { MainNavigation } from './MainNavigation/MainNavigation';

export const Main = () => {
  return (
    <div className={style['main']}>
      <header className={style['main__header']}>
        <Wrapper maxWidth="60rem">
          <MainNavigation />
        </Wrapper>
        <div>
          <h1>Filmy, seriale i wiele więcej bez ograniczeń</h1>
          <p>Oglądaj wszędzie. Anuluj w każdej chwili.</p>
          <p>
            Zaczynamy oglądać? Wprowadź adres e‑mail, aby utworzyć lub odnowić
            konto.
          </p>
        </div>
      </header>
    </div>
  );
};
