const journalEntries = [
    {
        date: "01/08/2019",
        conceptsCovered: "HTML CSS & Github",
        longForm: "Built a webpage about the Belcourt Theatre and learned an intro to Git",
        mood: "King ruling the castle",
    },
    {
        date: "01/15/2019",
        conceptsCovered: "Finished and presented first group project",
        longForm: "Matt C, Tyler, Cooper, & I finished our CSS/HTML project about Ricky Gervais",
        mood: "Duke gallivanting through the flying buttress",
    },
    {
        date: "01/17/2019",
        conceptsCovered: "Javascript functions & objects",
        longForm: "Practiced javascript functions and objects with an example about the pope blessing Bryan and getting older",
        mood: "Groundskeeper maintaing the manor",
    }
]

const element = (type, content, value) => {
    return `<${type} class="${value}">${content}</${type}>`
};

const makeJournalEntryComponent = (journalEntries) => {
    return `
    <hr class="line"></hr>
        <div>
            ${element("h2", journalEntries.date, "")}
            </div><div>
            ${element("h4", journalEntries.conceptsCovered, "")}
            </div><div>
            ${element("aside", journalEntries.longForm, "")}
            </div><div>
            ${element("h3", journalEntries.mood, "")}
        </div>
        `;
}

const journalEntryContainer = document.querySelector("#container")

for (let i = 0; i < journalEntries.length; i++) {
    journalEntryContainer.innerHTML += makeJournalEntryComponent(journalEntries[i]);
}