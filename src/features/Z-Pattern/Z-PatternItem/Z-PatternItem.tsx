import { useTranslation } from 'react-i18next';
import style from './Z-PatternItem.module.scss';
import { Wrapper } from '../../UI/Wrapper/Wrapper';
import { useMediaQuery } from '../../../hooks/useMediaQuery';

type ZPatternItemProps = {
  id: number;
  image: string;
  alt: string;
  personal: string;
  video?: string;
};

export const ZPatternItem = ({
  image,
  video,
  alt,
  personal,
}: ZPatternItemProps) => {
  const { t } = useTranslation();
  const matches = useMediaQuery('(max-width: 50rem)');

  return (
    <div className={style['container']}>
      <Wrapper maxWidth={`${matches ? '30rem' : '70rem'}`}>
        <div
          className={`${style['z-pattern-item']} ${
            style[`z-pattern-item--${personal}`]
          }`}
        >
          <div className={style['z-pattern-item__content']}>
            <h2 className={style['z-pattern-item__title']}>
              {t(`zpattern.${personal}.title`)}
            </h2>
            <p className={style['z-pattern-item__description']}>
              {t(`zpattern.${personal}.description`)}
            </p>
          </div>
          <div className={style['z-pattern-item__media']}>
            <img
              src={image}
              alt={alt}
              className={style['z-pattern-item__image']}
            />
            {video && (
              <div className={style['z-pattern-item__video']}>
                <video src={video} autoPlay playsInline muted loop></video>
              </div>
            )}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
