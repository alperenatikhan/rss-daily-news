import React, { useState, useEffect } from 'react';

export default function ClassifyArticles(props) {
  let [titles, setTitles] = useState([]);
  let [authors, setAuthors] = useState([]);
  let [contents, setContents] = useState([]);
  let [links, setLinks] = useState([]);
  let [categories, setCategories] = useState('');

  let titleList = [];
  let authorList = [];
  let contentList = [];
  let linkList = [];
  let categoryList = [];

  let [showSummary, setShowSummary] = useState(false);
  let title = titles[props.index];
  let author = authors[props.index];
  let content = contents[props.index];
  let link = links[props.index];
  let category = categories[props.index];

  const showTitles = () => setTitles(titleList);
  const showAuthors = () => setAuthors(authorList);
  const showContents = () => setContents(contentList);
  const showLinks = () => setLinks(linkList);
  const showCategories = () => {
    setCategories(categoryList);
  };

  const fetchApi = rssUrl => {
    fetch(`https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`)
      .then(res => {
        if (res.ok) {
          console.log(res.status);
          return res.json();
        } else {
          if (res.status === 404) {
            return alert(
              `The currency you typed can not be found in our database`
            );
          }
          alert('Oops, there seems to be an error!');
          throw new Error('You have an error');
        }
      })
      .then(object => {
        [0, 1, 2, 3, 4, 5, 6, 7, 8].map(number => {
          titleList.push(object.items[number].title);
          authorList.push(object.items[number].author);
          contentList.push(object.items[number].content);
          linkList.push(object.items[number].link);
          categoryList.push(object.items[number].categories[0]);
        });
        showTitles();
        showAuthors();
        showContents();
        showLinks();
        showCategories();
      })

      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchApi(
      `https%3A%2F%2Fwww.theguardian.com%2Fworld%2F${props.newsTopic}%2Frss`
    );
  }, [props.newsTopic]);

  const fadeIn = `
    @keyframes fadeIn {
      0%   { opacity: 0; }
      50%  { opacity: 0; }
      100% { opacity: 1; }
    }
  `;

  return (
    <div
      className="card .col-sm-8 .col-md-4 .col-lg-3 .col-xl-2"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignText: 'left',
        margin: '0.5rem',
        padding: '1.5rem 2rem',
        width: '20rem'
      }}
    >
      <div style={{ height: '9rem', textOverflow: 'clip' }}>
        <h4 style={{ fontSize: '1rem' }}> {category} </h4>
        <h2 style={{ fontSize: '1.1rem', fontWeight: '600' }}> {title} </h2>
      </div>
      <img
        src={`https://source.unsplash.com/300x300/?${
          props.newsTopic
        },${category}/${props.index}`}
        style={{ width: '15rem', height: '10rem' }}
      />

      <button id="summary" onClick={() => setShowSummary(!showSummary)}>
        {' '}
        Read the Summary{' '}
      </button>
      {showSummary && (
        <div
          id="out"
          style={{
            width: '18rem',
            padding: '1rem',
            textAlign: 'justify',
            textJustify: 'inter-word'
          }}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
      <button>
        {' '}
        <a
          href={link}
          target="_blank"
          style={{ textDecoration: 'none', color: 'black' }}
        >
          Visit the Source Website{' '}
        </a>{' '}
      </button>
      {showSummary && (
        <button onClick={() => setShowSummary(!summary)}>
          {' '}
          Close the Summary{' '}
        </button>
      )}
    </div>
  );
}
