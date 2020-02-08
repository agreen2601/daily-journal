let moodImageSrc = "https://cdn.boldomatic.com/content/post/u3u3bw/Well-that-didn-t-work?size=800"

const makeJournalEntryComponent = journalEntries => {
  if (journalEntries.mood.startsWith("King")) {
    moodImageSrc = 
       "https://thumbs.dreamstime.com/z/cartoon-king-idea-happy-41818993.jpg"
   } else if (journalEntries.mood.startsWith("Duke")) {
     moodImageSrc =
       "https://s3.amazonaws.com/lowres.cartoonstock.com/caricatures-king_of_england-william_the_bastard-battle_of_hastings-monarchy-ruler-gbrn817_low.jpg";
   } else if (journalEntries.mood.startsWith("Groundskeeper")) {
     moodImageSrc =
       "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX38485776.jpg";
   } else if (journalEntries.mood.startsWith("Servant")) {
     moodImageSrc =
       "https://www.jing.fm/clipimg/full/77-772437_butler-holding-tray-servant-free-clipart.png";
   } else if (journalEntries.mood.startsWith("Knight")) {
     moodImageSrc =
       "https://images.freeimages.com/images/premium/previews/4328/43287556-cartoon-knight-in-armor.jpg";
   } else if (journalEntries.mood.startsWith("Peasant")) {
     moodImageSrc =
       "https://thumbs.dreamstime.com/b/farmer-grandfather-adult-rancher-old-age-man-peasant-character-cartoon-villager-isolated-flat-design-vector-illustration-farmer-109192197.jpg";
   } else if (journalEntries.mood.startsWith("Prisoner")) {
     moodImageSrc =
       "https://i.pinimg.com/236x/56/4c/39/564c396ab7e88a28a617eee48d922a5b--royalty-free-clipart-art-medieval.jpg";
   }
  const codeBeforeSrc = `
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
          <p class="moodOutput"><strong>Mood:</strong> ${journalEntries.mood}</p>
          <span><img class="moodImage" src="
          `
  const codeAfterSrc = `"></span></div>`
  return codeBeforeSrc + moodImageSrc + codeAfterSrc;
};

export default makeJournalEntryComponent;