import * as React from 'react';
import s from './ThisDay.module.scss'
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';


interface Props { }

export const ThisDay = (props: Props) => {  

  return (
    <header className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.top__block__wrapper}>
          <div className={s.this__temp}>20°</div>
          <div className={s.this__day_name}>Today</div>
        </div>
        <GlobalSvgSelector id="sun"/>
      </div>
      <div className={s.bottom__block}>
        <div className={s.this__time}>Time: <span>21:54</span></div>
        <div className={s.this__city}>City: <span>Riga</span></div>
      </div>
    </header>
  );
};

