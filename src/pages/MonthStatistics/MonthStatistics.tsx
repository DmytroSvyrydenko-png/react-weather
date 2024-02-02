import React from 'react'; // react library import
import s from './MonthStatistics.module.scss' // s object import

interface Props { } // 'Props' properties definition
 

export const MonthStatistics = (props: Props) => { // accepts a props object of type Props, displays the component
  return (
    <div className={s.home}> MonthStatistics </div> // s.home == s object key
  );
}
