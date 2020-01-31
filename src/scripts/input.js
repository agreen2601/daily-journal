const submissionsContainer = document.getElementById("submissionsContainer");

document.getElementById("submit").addEventListener("click", event => {
  if (
    document.getElementById("journalDate").value === "" ||
    document.getElementById("entryInput").value === "" ||
    document.getElementById("conceptsInput").value === ""
  ) {
    alert("You must complete the entire form you baffling mumblecrust!");
  } else {
    const journalDate = document.getElementById("journalDate").value;
    const entryInput = document.getElementById("entryInput").value;
    const conceptsInput = document.getElementById("conceptsInput").value;
    const mood = document.getElementById("mood").value;

    submissionsContainer.innerHTML += `
        <hr class="line"></hr>
        <div class="journal-entries">
            <p class="dateOutput"><strong>Date:</strong> ${journalDate}</p>
            </div><div>
            <p class="conceptsOutput"><strong>Concepts covered:</strong> ${conceptsInput}</p>
            </div><div>
            <p class="entryOutput"><strong>Journal Entry:</strong> ${entryInput}.</p>
            </div><div>
            <p class="moodOutput"><strong>Mood:</strong> ${mood}</p>
        </div>
    `;
    document.getElementById("journalDate").value = "";
    document.getElementById("entryInput").value = "";
    document.getElementById("conceptsInput").value = "";
    document.getElementById("submissionsContainer").scrollIntoView();
  }
});
