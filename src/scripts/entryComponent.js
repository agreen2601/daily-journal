let moodImageSrc =
  "https://cdn.boldomatic.com/content/post/u3u3bw/Well-that-didn-t-work?size=800";
let instructorImageSrc =
  "https://cdn.boldomatic.com/content/post/u3u3bw/Well-that-didn-t-work?size=800";
let instructorBodySrc =
"https://cdn.boldomatic.com/content/post/u3u3bw/Well-that-didn-t-work?size=800";

const makeJournalEntryComponent = journalEntries => {
  if (journalEntries.mood.id === 1) {
    moodImageSrc = "../pictures/King.png";
    instructorBodySrc = "../pictures/Praising.jpg";
  } else if (journalEntries.mood.id === 2) {
    moodImageSrc = "../pictures/Duke.png";
    instructorBodySrc = "../pictures/Praising.jpg";
  } else if (journalEntries.mood.id === 3) {
    moodImageSrc = "../pictures/Groundskeeper.png";
    instructorBodySrc = "../pictures/ArmsCrossed.png";
  } else if (journalEntries.mood.id === 4) {
    moodImageSrc = "../pictures/Servant.png";
    instructorBodySrc = "../pictures/ArmsCrossed.png";
  } else if (journalEntries.mood.id === 5) {
    moodImageSrc = "../pictures/Knight.png";
    instructorBodySrc = "../pictures/ArmsCrossed.png";
  } else if (journalEntries.mood.id === 6) {
    moodImageSrc = "../pictures/Peasant.png";
    instructorBodySrc = "../pictures/Pointing.jpg";
  } else if (journalEntries.mood.id === 7) {
    moodImageSrc = "../pictures/Prisoner.png";
    instructorBodySrc = "../pictures/Pointing.jpg";
  } if (journalEntries.instructor.id === 1) {
    instructorImageSrc= "../pictures/Andy.png";
  } else if (journalEntries.instructor.id === 2) {
    instructorImageSrc= "../pictures/Kristen.png";
  } else if (journalEntries.instructor.id === 3) {
    instructorImageSrc= "../pictures/Bryan.png";
  }
  const htmlBeforeMoodImg = `
      <hr class="line">
        <div class="journal-entries"></div>
          <div>  
          <p class="dateOutput"><strong>Date:</strong> ${journalEntries.date}
          <span><button class="delete_button" id="deleteEntry-${journalEntries.id}">Conduct removement sorcery</button></span>
          </div><div>
          <p class="conceptsOutput"><strong>Concepts covered:</strong> ${journalEntries.conceptsCovered}
          <span><button class="edit_button" id="editEntry-${journalEntries.id}">Rewrite thy past</button></span>
          </div><div>
          <p class="entryOutput"><strong>Journal Entry:</strong> ${journalEntries.longForm}</p>
          </div><div>
          <p class="moodOutput"><strong>Mood:</strong> ${journalEntries.mood.label}</p>
          <span><img class="moodImage" src="
          `;
  const htmlAfterMoodImg = `"></span><span><img class="instructorBodyImage" src="
          `;
  const htmlAfterInstructorBodyImg = `"></span><span><img class="instructorImage" src="
          `;
  const htmlAfterInstructorImg = `"</span></div>
          <p class="instructorOutput"><strong>Instructor:</strong> ${journalEntries.instructor.name}</p>
          `;
  
  return htmlBeforeMoodImg + moodImageSrc + htmlAfterMoodImg + instructorBodySrc + htmlAfterInstructorBodyImg + instructorImageSrc + htmlAfterInstructorImg
};

export default makeJournalEntryComponent;
