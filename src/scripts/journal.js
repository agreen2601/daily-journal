import API from "./data.js";
import renderEntries from "./entriesDOM.js";

API.getEntries().then(renderEntries);

// Get reference to fields in the form
const entriesList = document.querySelector("#entriesContainer");
const entryDateInput = document.querySelector("#journalDate");
const entryConceptsInput = document.querySelector("#conceptsInput");
const entryLongFormInput = document.querySelector("#entryInput");
const entryMoodInput = document.querySelector("#mood");
const updateButton = document.querySelector("#submit");
const hiddenEntryId = document.querySelector("#entryId");
const heading = document.querySelector("#heading");
const moodRadioButtons = document.getElementsByName("mood");

const clearForm = () => {
  hiddenEntryId.value = "";
  entryDateInput.value = "";
  entryConceptsInput.value = "";
  entryLongFormInput.value = "";
  entryMoodInput.value = "King ruling the castle";
};

// Event listener first checks for no blank fields - then updates entries to the DOM
const updateEntryAddEventListener = () => {
  updateButton.addEventListener("click", () => {
    if (
      entryDateInput.value === "" ||
      entryConceptsInput.value === "" ||
      entryLongFormInput.value === ""
    ) {
      alert("You must complete the entire form you baffling mumblecrust!");
    } else {
      entriesList.innerHTML = "";
      const newJournalEntry = {
        date: entryDateInput.value,
        conceptsCovered: entryConceptsInput.value,
        longForm: entryLongFormInput.value,
        mood: entryMoodInput.value
      };

      if (hiddenEntryId.value !== "") {
        newJournalEntry.id = parseInt(hiddenEntryId.value);
        API.updateJournalEntry(newJournalEntry).then(() => {
          API.getEntries()
            .then(renderEntries)
            .then(clearForm);
        });
      } else {
        API.saveJournalEntry(newJournalEntry).then(() => {
          API.getEntries()
            .then(renderEntries)
            .then(clearForm);
        });
      }
    }
  });
};

updateEntryAddEventListener();

// Sort entries by mood

moodRadioButtons.forEach(button =>
  button.addEventListener("click", event => {
    const mood = event.target.value;
    if (mood === "Reset") {
      API.getEntries().then(renderEntries);
    } else {
      API.getEntries().then(entries => {
        const selectedMoodArray = entries.filter(entry => entry.mood === mood);
        entriesList.innerHTML = "";
        renderEntries(selectedMoodArray);
      });
    }
  })
);

// Output buttons - delete and edit

entriesList.addEventListener("click", event => {
  if (event.target.id.startsWith("deleteEntry-")) {
    const check = confirm("Dost thou verily wish to forget thy past?");
    if (check == true) {
      const entryToDelete = event.target.id.split("-")[1];
      API.deleteEntry(entryToDelete)
        .then(API.getEntries)
        .then(renderEntries)
        .then(clearForm);
      alert("The king remembers your wrong-doing, foolish swine!");
    } else {
      alert("Wise choice friend");
    }
  } else if (event.target.id.startsWith("editEntry-")) {
    const entryToEdit = event.target.id.split("-")[1];
    API.refillEntryInputsForUpdate(entryToEdit);
    heading.scrollIntoView();
    alert(
      "Speaketh of thyself as thou wish, however thou cannot verily change thy past"
    );
  }
});
