const handleFetch = async (url, config = {}) => {
  try {
    const response = await fetch(url, config);
    const data = await response.json();
    return {data, error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
};

// Fetches all journal entries from GET /api/entries.
// Returns { data, error } — data is an array of entry objects, error is null on success.
export const fetchEntries = async () => {
  return handleFetch('/api/entries');
};

// Creates a new entry via POST /api/entries.
// entryData should be an object: { title, date, mood, content }
// Returns { data, error } — data is the newly created entry object.
export const createEntry = async (entryData) => {
  return handleFetch('/api/entries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(entryData),
    });
};

// Deletes an entry via DELETE /api/entries/:id.
// Returns { data, error } — data is the deleted entry object.
export const deleteEntry = async (id) => {
  return handleFetch(`/api/entries/${id}`, {
    method: 'DELETE',
  });
};
