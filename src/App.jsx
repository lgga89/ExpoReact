import React from 'react';
import './index.scss';
import {Cover} from './components/Cover';
import {Menu} from './components/Menu'
 import { Description } from './components/Description';

export function App() {
  return (
    <div>
      <Menu/>
      <Cover/> 
      <Description/>
   
    </div>
  )
}
