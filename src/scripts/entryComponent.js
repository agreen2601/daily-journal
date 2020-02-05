const makeJournalEntryComponent = journalEntries => {
  return `
    <hr class="line">
        <div class="journal-entries">
            <p class="dateOutput"><strong>Date:</strong> ${journalEntries.date}</p>
            </div><div>
            <p class="conceptsOutput"><strong>Concepts covered:</strong> ${journalEntries.conceptsCovered}</p>
            </div><div>
            <p class="entryOutput"><strong>Journal Entry:</strong> ${journalEntries.longForm}.</p>
            </div><div>
            <p class="moodOutput"><strong>Mood:</strong> ${journalEntries.mood}</p>
        </div>
        `;
};

export default makeJournalEntryComponent;