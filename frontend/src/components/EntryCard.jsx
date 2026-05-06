import { deleteEntry } from '../fetch-helpers';

const EntryCard = () => {
  const handleDelete = async () => {

  };

  return (
    <li className="entry-card">
      <div className="entry-card-header">
        <span className="entry-card-title">Entry Title</span>
        <span className="entry-card-mood">😊</span>
      </div>
      <p className="entry-card-meta">2025-01-01</p>
      <p className="entry-card-content">Entry content goes here.</p>
      <div className="entry-card-controls">
        <button onClick={handleDelete}>Delete</button>
      </div>
    </li>
  );
};

export default EntryCard;
