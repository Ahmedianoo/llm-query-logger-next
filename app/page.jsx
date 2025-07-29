'use client';

import { useState } from 'react';
import QueryForm from './components/QueryForm';
import QueryList from './components/QueryList';
import Footer from './components/Footer';

export default function HomePage() {
  const [query, setQuery] = useState('');
  const [submittedQueries, setSubmittedQueries] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newQuery = {
      text: query,
      timestamp: new Date().toLocaleString(),
    };
    setSubmittedQueries([...submittedQueries, newQuery]);
    setQuery('');
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  }

  return (
    <div>
      <p className="App-intro">
        This is a simple application to log queries made to LLMs.
      </p>

      <div className="Author">
        <p>By Ahmedianoo</p>
      </div>


      <QueryForm query={query} onChange={handleChange} onSubmit={handleSubmit} />
      <QueryList queries={submittedQueries} />
    </div>
  );
}
