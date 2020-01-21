const journalEntryNum1 = {
    date: "01/08/2019",
    conceptsCovered: "HTML CSS & Github",
    longForm: "Built a webpage about the Belcourt Theatre and learned an intro to Git",
    mood: "King ruling the castle",
}

const journalEntryNum2 = {
    date: "01/15/2019",
    conceptsCovered: "Finished and presented first group project",
    longForm: "Matt C, Tyler, Cooper, & I finished our CSS/HTML project about Ricky Gervais",
    mood: "Duke gallivanting through the flying buttress",
}

const journalEntryNum3 = {
    date: "01/17/2019",
    conceptsCovered: "Javascript functions & objects",
    longForm: "Practiced javascript functions and objects with an example about the pope blessing Bryan and getting older",
    mood: "Groundskeeper maintaing the manor",
}

const entries = [];

const addEntry = function (journalEntry) {
    entries.push(journalEntry);
}

addEntry(journalEntryNum1);
addEntry(journalEntryNum2);
addEntry(journalEntryNum3);

console.log(entries);