import React from 'react'; // react library import
import s from './Home.module.scss' // s object import
import { ThisDay } from './ThisDay/ThisDay';
import { ThisDayInfo } from './ThisDayInfo/ThisDayInfo';
import { Days } from './Days/Days';

interface Props { } // 'Props' properties definition
 

export const Home = (props: Props) => { // accepts a props object of type Props, displays the component
  return (
    // s.home == s object key
    <div className={s.home}> 
    <div className={s.wrapper}>
      <ThisDay />
      <ThisDayInfo />
     </div>

     <Days />
    </div> 
  );
}
