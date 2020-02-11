const API = {
  getEntries: function() {
    return fetch("http://localhost:3000/journalEntries?_expand=mood&_expand=instructor").then(response =>
      response.json()
    );
  },
  saveJournalEntry(entry) {
    return fetch(`http://localhost:3000/journalEntries/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(entry)
    });
  },
  refillEntryInputsForUpdate(entryId) {
    const hiddenEntryId = document.querySelector("#entryId");
    const entryDateInput = document.querySelector("#journalDate");
    const entryConceptsInput = document.querySelector("#conceptsInput");
    const entryLongFormInput = document.querySelector("#entryInput");
    const entryMoodInput = document.querySelector("#mood");
     fetch(`http://localhost:3000/journalEntries/${entryId}`)
      .then(resp => resp.json())
      .then(entry => {
        hiddenEntryId.value = entry.id;
        entryDateInput.value = entry.date;
        entryConceptsInput.value = entry.conceptsCovered;
        entryLongFormInput.value = entry.longForm;
        entryMoodInput.value = entry.mood;
      });
  },
  updateJournalEntry(entry) {
    return fetch(`http://localhost:3000/journalEntries/${entry.id}`, {
      method: "PUT",
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
