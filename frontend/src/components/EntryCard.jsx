import { deleteEntry } from '../fetch-helpers';

const EntryCard = ({ entry, loadEntries }) => {
  const handleDelete = async () => {
    const { error } = await deleteEntry(entry.id);
    if (error) return console.error(error);
    loadEntries();
  };

  return (
    <li className="entry-card">
      <div className="entry-card-header">
        <span className="entry-card-title">{entry.title}</span>
        <span className="entry-card-mood">{entry.mood}</span>
      </div>
      <p className="entry-card-meta">{entry.date}</p>
      <p className="entry-card-content">{entry.content}</p>
      <div className="entry-card-controls">
        <button onClick={handleDelete}>Delete</button>
      </div>
    </li>
  );
};

export default EntryCard;
