import API from "./data.js";
import renderEntries from "./entriesDOM.js";

API.getEntries().then(renderEntries);

const entriesList = document.querySelector("#entriesContainer");

// First check for no blank fields - then add new entry to the DOM

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
      entriesList.innerHTML = "";
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

submitEntryAddEventListener();

// Sort entries by mood

document.getElementsByName("mood").forEach(button =>
  button.addEventListener("click", event => {
    const mood = event.target.value;
    API.getEntries().then(entries => {
      const selectedMoodArray = entries.filter(entry => entry.mood === mood);
      entriesList.innerHTML = "";
      renderEntries(selectedMoodArray);
    });
  })
);

//Delete entries

entriesList.addEventListener("click", event => {
  var check = confirm("Dost thou verily wish to forget thy past?");
  if (check == true ) {
    if (event.target.id.startsWith("deleteEntry-")) {
      const eventToDelete = event.target.id.split("-")[1];
      API.deleteEntry(eventToDelete)
        .then(API.getEntries)
        .then(renderEntries);
    }
    alert("The king remembers your wrong-doing, foolish swine!");
  } else {
    alert("Wise choice friend")
  }
});
