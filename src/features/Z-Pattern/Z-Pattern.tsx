import { Wrapper } from '../UI/Wrapper/Wrapper';
import { ZPatternItem } from './Z-PatternItem/Z-PatternItem';

import TV from './../../assets/images/tv.png';
import TVVideo from './../../assets/videos/video-tv-0819.mp4';
import Mobile from './../../assets/images/mobile.png';
import DevicePile from './../../assets/images/device-pile.png';
import Devices from './../../assets/videos/video-devices.mp4';
import Kids from './../../assets/images/kids.png';

import style from './Z-Pattern.module.scss';

const ZPatternData = [
  {
    id: 1,
    image: TV,
    alt: 'TV',
    video: TVVideo,
    personal: 'watch',
  },
  {
    id: 2,
    image: Mobile,
    alt: 'Netflix screen with stranger things woman',
    video: '',
    personal: 'download',
  },
  {
    id: 3,
    image: DevicePile,
    alt: 'Hawkins middle school',
    video: Devices,
    personal: 'everywhere',
  },
  {
    id: 3,
    image: Kids,
    alt: 'Kids',
    video: '',
    personal: 'kids',
  },
];

export const ZPattern = () => {
  return (
    <div className={style['z-pattern']}>
      {ZPatternData.map((data) => (
        <ZPatternItem {...data} />
      ))}
    </div>
  );
};
