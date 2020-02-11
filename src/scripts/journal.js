import API from "./data.js";
import renderEntries from "./entriesDOM.js";
import makeJournalEntryComponent from "./entryComponent.js";

API.getEntries().then(renderEntries);

// Get reference to fields in the form
const entryDateInput = document.querySelector("#journalDate");
const entryConceptsInput = document.querySelector("#conceptsInput");
const entryLongFormInput = document.querySelector("#entryInput");
const entryMoodInput = document.querySelector("#mood");
const entryInstructorInput = document.querySelector("#instructor");
const updateButton = document.querySelector("#update");
const hiddenEntryId = document.querySelector("#entryId");
const heading = document.querySelector("#heading");
const moodRadioButtons = document.getElementsByName("mood");
const searchField = document.querySelector(".search");
const entriesList = document.querySelector("#entriesContainer");


const clearForm = () => {
  hiddenEntryId.value = "";
  entryDateInput.value = "";
  entryConceptsInput.value = "";
  entryLongFormInput.value = "";
  entryMoodInput.value = "King ruling the castle";
  entryInstructorInput.values = "Andy";
  searchField.value = ""
};

// Event listener first checks for no blank fields - then updates entries to the DOM
const updateEntryAddEventListener = () => {
  updateButton.addEventListener("click", () => {
    if (
      entryDateInput.value === "" ||
      entryConceptsInput.value === "" ||
      entryLongFormInput.value === ""
    ) {
      alert("Thou must complete the entire form thou baffling mumblecrust!");
    } else {
      entriesList.innerHTML = "";
      const newJournalEntry = {
        date: entryDateInput.value,
        conceptsCovered: entryConceptsInput.value,
        longForm: entryLongFormInput.value,
        moodId: parseInt(entryMoodInput.value),
        instructorId: parseInt(entryInstructorInput.value)
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
    clearForm();
    const mood = event.target.value;
    if (mood === "Reset") {
      API.getEntries().then(renderEntries);
    } else {
      API.getEntries().then(entries => {
        const selectedMoodArray = entries.filter(entry => entry.mood.label === mood);
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
      alert("The king remembers thy wrong-doing, foolish swine!");
    } else {
      alert("Wise choice friend.");
    }
  } else if (event.target.id.startsWith("editEntry-")) {
    const entryToEdit = event.target.id.split("-")[1];
    API.refillEntryInputsForUpdate(entryToEdit);
    heading.scrollIntoView();
    alert(
      "Speaketh of thyself as thou wish, however thou cannot verily change thy past."
    );
  }
});

// Search keypress listener
searchField.addEventListener("keypress", event => {
  if (event.keyCode === 13) {
    const searchInput = event.target.value;
    API.getEntries().then(entries => {
      entriesList.innerHTML = "";
      entries.forEach(entry => {
        for (const value of Object.values(entry)) {
          if (typeof value === "string" && value.includes(searchInput)) {
            entriesList.innerHTML += makeJournalEntryComponent(entry);
          }
        }
      });
    });
  }
});
