import makeJournalEntryComponent from "./entryComponent.js";

const renderEntries = entries => {
  const container = document.querySelector("#entriesContainer");
  entries.forEach(entry => {
    const innerHTML = makeJournalEntryComponent(entry);
    container.innerHTML += innerHTML;
  });
};

export default renderEntries;
