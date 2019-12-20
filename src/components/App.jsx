import React from 'react';
import variableCSS from './variables.module.css';
import Section from './Feedback/Section';

const App = () => (
  <div className={variableCSS.container}>
    <Section title='Please leave feedback' />
  </div>
);

export default App;
