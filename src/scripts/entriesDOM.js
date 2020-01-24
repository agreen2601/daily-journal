// .then(entriesFromAPI => {
//     renderEntries(entriesFromAPI)
// });

const renderEntries = (entries) => {
    const container = document.querySelector("#entriesContainer");
    entries.forEach(entry => {
        const innerHTML = makeJournalEntryComponent(entry)
        container.innerHTML += innerHTML
    });
};

const journalEntryContainer = document.querySelector("#entriesContainer")