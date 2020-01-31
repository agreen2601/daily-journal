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

/*  This code could be used to create different elements w different classes/ids

const createElement = (type, content, value) => {
    return `<${type} class="${value}">${content}</${type}>`
};

for (let i = 0; i < journalEntries.length; i++) {
    journalEntryContainer.innerHTML += makeJournalEntryComponent(journalEntries[i]);
}

with this under the return
${createElement("h3", journalEntries.mood, "")}
*/
