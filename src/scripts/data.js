const API = {
  getEntries: function() {
    return fetch("http://localhost:3000/journalEntries").then(response =>
      response.json()
    );
  },
  saveJournalEntry(entry) {
    return fetch(`http://localhost:3000/journalEntries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(entry)
    });
  },
  deleteEntry(entryId) {
    return fetch(`http://localhost:3000/journalEntries/${entryId}`, {
      method: "DELETE"
    }).then(response => response.json());
  }
};

export default API;
