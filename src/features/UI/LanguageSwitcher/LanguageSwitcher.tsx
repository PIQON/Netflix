import Select from 'react-select';
import { SingleValue } from 'react-select/dist/declarations/src';
import style from './LanguageSwitcher.module.scss';
import { useTranslation } from 'react-i18next';

type Languages = {
  value: string;
  label: string;
};

const languages: Languages[] = [
  {
    value: 'pl',
    label: 'Polski',
  },
  {
    value: 'en',
    label: 'English',
  },
];

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: SingleValue<Languages>) => {
    i18n.changeLanguage(lang?.value);
  };

  return (
    <Select
      options={languages}
      className={style['select']}
      onChange={(lang) => changeLanguage(lang)}
      defaultValue={languages[0]}
    />
  );
};
