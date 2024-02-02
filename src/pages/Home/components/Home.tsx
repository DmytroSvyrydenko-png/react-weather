import React from 'react'; // react library import
import s from './Home.module.scss' // s object import

interface Props { } // 'Props' properties definition
 

export const Home = (props: Props) => { // accepts a props object of type Props, displays the component
  return (
    <div className={s.home}> Home </div> // s.home == s object key
  );
}
