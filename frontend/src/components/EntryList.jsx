import EntryCard from './EntryCard';

const EntryList = ({ entries, loadEntries }) => {
  return (
    <section>
      <h2>Past Entries</h2>
      <ul className="entry-list">
        {entries.map((entry) => (<EntryCard key={entry.id} entry={entry} loadEntries={loadEntries}/>))}
      </ul>
    </section>
  );
};

export default EntryList;
