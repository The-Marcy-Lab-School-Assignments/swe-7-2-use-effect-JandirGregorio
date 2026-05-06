import { useState, useEffect } from 'react';
import { fetchEntries } from './fetch-helpers';
import EntryList from './components/EntryList';
import EntryForm from './components/EntryForm';

const defaultEntries = [
  { id: 1, title: 'First day of the bootcamp', date: '2025-01-06', mood: '😊', content: 'Met my cohort today. Everyone seems really kind and eager to learn.' },
  { id: 2, title: 'Debugging for hours', date: '2025-01-07', mood: '😠', content: 'Spent three hours hunting a missing semicolon. I will never forget to check the console first again.' },
  { id: 3, title: 'Things are clicking', date: '2025-01-10', mood: '😂', content: 'Array methods finally make sense! map, filter, and reduce are my new best friends.' },
];

const App = () => {
  const [entries, setEntries] = useState(defaultEntries);

  const loadEntries = async () => {

  };

  return (
    <main>
      <h1>My Journal</h1>
      <EntryForm />
      <EntryList />
    </main>
  );
};

export default App;
