import React from 'react';
import './style.css';
import Button from './Button';

export default function App() {
  const button1 = () => {
    alert('i am button 1 clicked');
  };
  const button2 = () => {
    alert('i am button 2 clicked');
  };

  const style1 = {
    color: 'white',
    background: 'red',
  };

  const style2 = {
    color: 'white',
    background: 'blue',
  };

  return (
    <div>
      <h1>Button</h1>
      <Button text="Button 1" onClick={button1} style={style1} />
      <Button text="Button 2" onClick={button2} style={style2} />
    </div>
  );
}
