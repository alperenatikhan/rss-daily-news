import React, { useState, useEffect } from 'react';
import './style.css';
import xml2js from 'xml2js';
import axios from 'axios';
import ClassifyArticles from './ClassifyArticles.jsx';

export default function App() {
  let [newsTopic, setNewsTopic] = useState('world');
  let [displayTheme, setDisplayTheme] = useState('light');

  const handleTopic = string => {
    let titleCaseTopic =
      string[0].toUpperCase() + string.slice(1, string.length);
    if (titleCaseTopic == 'Eu') {
      return 'European Union';
    } else {
      return titleCaseTopic;
    }
  };

  const htmlEl = document.getElementsByTagName('html')[0];
  const handleThemeChange = displayTheme => {
    displayTheme === 'light'
      ? setDisplayTheme('dark')
      : setDisplayTheme('light');

    htmlEl.dataset.theme = displayTheme;
  };

  return (
    <>
      <div className="container">
        <button onClick={() => handleThemeChange(displayTheme)}>
          {' '}
          Change Theme{' '}
        </button>

<div className="button-container container-fluid">
        <button
          
          onClick={() => setNewsTopic('world')}
        >
          {' '}
          World{' '}
        </button>
        <button
          
          onClick={() => setNewsTopic('americas')}
        >
          {' '}
          Americas{' '}
        </button>
        <button onClick={() => setNewsTopic('eu')}>
          {' '}
          Europe{' '}
        </button>
        <button
         
          onClick={() => setNewsTopic('germany')}
        >
          {' '}
          Germany{' '}
        </button>
        <button
         
          onClick={() => setNewsTopic('france')}
        >
          {' '}
          France{' '}
        </button>
        <button
         
          onClick={() => setNewsTopic('spain')}
        >
          {' '}
          Spain{' '}
        </button>
        <button
      
          onClick={() => setNewsTopic('poland')}
        >
          {' '}
          Poland{' '}
        </button>

        <button
         
          onClick={() => setNewsTopic('slovakia')}
        >
          {' '}
          Slovakia{' '}
        </button>
        <button
          
          onClick={() => setNewsTopic('hungary')}
        >
          {' '}
          Hungary{' '}
        </button>
        <button
          
          onClick={() => setNewsTopic('romania')}
        >
          {' '}
          Romania{' '}
        </button>
        <button
          
          onClick={() => setNewsTopic('bulgaria')}
        >
          {' '}
          Bulgaria{' '}
        </button>
        <button
         
          onClick={() => setNewsTopic('greece')}
        >
          {' '}
          Greece{' '}
        </button>
</div>
<div style={{ margin: '2%', padding:"0 15%",textAlign:"center" }}>
        <h2 style={{fontSize:"1.5rem"}} >
          {' '}
          Daily News from <span style={{fontWeight:"600"}}> {handleTopic(newsTopic)} </span>
        </h2>
        </div>
        <div
          className="row"
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center'
          }}
        >
          <ClassifyArticles index="0" newsTopic={newsTopic} />
          <ClassifyArticles index="1" newsTopic={newsTopic} />
          <ClassifyArticles index="2" newsTopic={newsTopic} />
          <ClassifyArticles index="3" newsTopic={newsTopic} />
          <ClassifyArticles index="4" newsTopic={newsTopic} />
          <ClassifyArticles index="5" newsTopic={newsTopic} />
          <ClassifyArticles index="6" newsTopic={newsTopic} />
          <ClassifyArticles index="7" newsTopic={newsTopic} />
          <ClassifyArticles index="8" newsTopic={newsTopic} />
        </div>
      </div>
    </>
  );
}
