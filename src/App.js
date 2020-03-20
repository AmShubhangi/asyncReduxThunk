import React from 'react';
import List from './js/components/List';
import Form from './js/components/Form';
import { Post } from './js/components/posts';

const App = () => (
  <>
    <div className="row container">
      <div className="col col-md-4">
        <h2>Add a new article</h2>
        <Form />
      </div>
      <div className="col col-md-6">
        <h2>Your Articles</h2>
        <List />
      </div>
      <div className="col col-md-2">
        <Post />
      </div>
    </div>
  </>
)

export default App;