import API from "./data.js";
import renderEntries from "./entriesDOM.js";

API.getEntries().then(renderEntries);

const submitEntryAddEventListener = () => {
  const submitButton = document.getElementById("submit");

  submitButton.addEventListener("click", () => {
    if (
      document.getElementById("journalDate").value === "" ||
      document.getElementById("entryInput").value === "" ||
      document.getElementById("conceptsInput").value === ""
    ) {
      alert("You must complete the entire form you baffling mumblecrust!");
    } else {
      document.getElementById("entriesContainer").innerHTML = "";
      const newJournalEntry = {
        date: document.querySelector("#journalDate").value,
        conceptsCovered: document.querySelector("#conceptsInput").value,
        longForm: document.querySelector("#entryInput").value,
        mood: document.querySelector("#mood").value
      };
      API.saveJournalEntry(newJournalEntry).then(() => {
        API.getEntries().then(renderEntries);
      });
    }
  });
};

document.getElementsByName("mood").forEach(button =>
  button.addEventListener("click", event => {
    const mood = event.target.value;
    API.getEntries().then(entries => {
      const selectedMoodArray = entries.filter(entry => entry.mood === mood);
      document.getElementById("entriesContainer").innerHTML = "";
      renderEntries(selectedMoodArray);
    });
  })
);

submitEntryAddEventListener();
