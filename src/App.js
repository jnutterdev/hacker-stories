import React from 'react';

function getTitle(title) {
  return title;
}

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org',
    author: 'Jordan Wilke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: 'https://redux.js.org',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5, 
    objectID: 1,
  },
];

function App() {

const welcome = {
  greeting: 'Hey',
  title: 'React',
};

  return (
    <div>
      <h1>Hello, {getTitle('React')}</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text"/>
    </div>
  );
}

export default App;