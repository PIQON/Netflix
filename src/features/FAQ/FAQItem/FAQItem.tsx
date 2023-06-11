import { Button } from '../../UI/Button/Button';
import style from './FAQItem.module.scss';
import iconCheck from './../../../assets/images/icon-check.svg';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

type FAQItemProps = {
  id: number;
  reference: string;
};

export const FAQItem = ({ id, reference }: FAQItemProps) => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  const faqItemId = `faq-item--${id}`;

  console.log(isExpanded);

  return (
    <div
      className={`${style['faq-item']} ${
        isExpanded && style['faq-item--expanded']
      }`}
    >
      <Button
        type="button"
        classNames={['btn', 'btn--faq']}
        aria-expanded={isExpanded}
        aria-controls={faqItemId}
        onClick={() => setIsExpanded((prevExpanded) => !prevExpanded)}
      >
        <span className={style['faq-item__title']}>
          {t(`faq.${reference}.title`)}
        </span>
        <img
          className={style['faq-item__icon']}
          src={iconCheck}
          alt={`${isExpanded ? 'Hide' : 'Show'} faq description`}
        />
      </Button>
      {isExpanded && (
        <div
          className={style['faq-item__description']}
          id={faqItemId}
          role="region"
        >
          <p>{t(`faq.${reference}.description`)}</p>
        </div>
      )}
    </div>
  );
};
