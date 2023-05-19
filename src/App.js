// Create a button in a separate file .
// Using this same button creates two different buttons .
// Pass prop data to button = {
// 	buttonText ,
// 	buttonStyle ,
// 	onClick Function
// }
// Button 1 -/> color white , background red , on click give alert ‘i am button 1 clicked’ .
// Button 2 -/> color white , background blue, on click give alert ‘i am button 2 clicked’ .

import React from 'react';
import './style.css';
import Button from './Button';

export default function App() {
  const text = 'Click';
  return (
    <div>
      <h1>Button</h1>
      <Button
        text="Button 1"
        onClick={() => alert('i am button 1 clicked')}
        style={{ color: 'white', background: 'red' }}
      />
      <Button text="Button 2" onClick={() => alert('i am button 2 clicked')} />
    </div>
  );
}
