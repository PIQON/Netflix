import { useTranslation } from 'react-i18next';
import { Newsletter } from '../Newsletter/Newsletter';
import { Wrapper } from '../UI/Wrapper/Wrapper';
import style from './FAQ.module.scss';
import { FAQItem } from './FAQItem/FAQItem';

const FAQData = [
  {
    id: 1,
    reference: 'faq-1',
  },
  {
    id: 2,
    reference: 'faq-2',
  },
  {
    id: 3,
    reference: 'faq-3',
  },
  {
    id: 4,
    reference: 'faq-4',
  },
  {
    id: 5,
    reference: 'faq-5',
  },
  {
    id: 6,
    reference: 'faq-6',
  },
];

export const FAQ = () => {
  const { t } = useTranslation();

  return (
    <Wrapper maxWidth="70rem">
      <div className={style['faq']}>
        <h2 className={style['faq__title']}>{t('faq.title')}</h2>
        <div className={style['faq__items']}>
          {FAQData.map((faq) => (
            <FAQItem key={faq.id} {...faq} />
          ))}
        </div>
        <Wrapper maxWidth="55rem">
          <Newsletter />
        </Wrapper>
      </div>
    </Wrapper>
  );
};
