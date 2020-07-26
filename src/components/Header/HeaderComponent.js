import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { ReactComponent as Clock } from '../../assets/clock.svg';
import './HeaderComponent.component.css'

const HeaderComponent = (props) => {
  return (
    <div className='container'>
          <h2> <Clock style={{ padding: '1px' }} /> Digital Clock</h2>
    </div>
  );
};
export default HeaderComponent;
