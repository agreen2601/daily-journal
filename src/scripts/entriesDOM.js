import makeJournalEntryComponent from "./entryComponent.js";

const renderEntries = entries => {
  const container = document.querySelector("#entriesContainer");
  container.innerHTML = ""
  entries.forEach(entry => {
    const innerHTML = makeJournalEntryComponent(entry);
    container.innerHTML += innerHTML;
  });
};

export default renderEntries;
