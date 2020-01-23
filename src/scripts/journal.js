// const element = (type, content, value) => {
//     return `<${type} class="${value}">${content}</${type}>`
// };

// const makeJournalEntryComponent = (journalEntries) => {
//     return `
//     <hr class="line"></hr>
//         <div>
//             ${element("h2", journalEntries.date, "")}
//             </div><div>
//             ${element("h4", journalEntries.conceptsCovered, "")}
//             </div><div>
//             ${element("aside", journalEntries.longForm, "")}
//             </div><div>
//             ${element("h3", journalEntries.mood, "")}
//         </div>
//         `;
// }

const getEntries = () => {
    const entriesUrl = "http://localhost:3000/journalEntries";
    fetch(entriesUrl)
        .then(resp => resp.json())
        .then(entriesFromAPI => {
            renderEntries(entriesFromAPI)
        });
};

getEntries();

// const renderEntries = (entries) => {
//     const container = document.querySelector("#entries-container");
//     entries.forEach(entry => {
//         const entryAsHTML = makeJournalEntryComponent(entry)
//         container.entryAsHTML += entryAsHTML
//     });
// };



// const journalEntryContainer = document.querySelector("#entries-container")

// for (let i = 0; i < journalEntries.length; i++) {
//     journalEntryContainer.innerHTML += makeJournalEntryComponent(journalEntries[i]);
// }