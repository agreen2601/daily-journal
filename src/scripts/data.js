// const API = () => {
//     const entriesUrl = "http://localhost:3000/entries";
//     fetch(entriesUrl)
//         .then(resp => resp.json())
//         .then(entriesFromAPI => {
//             renderEntries(entriesFromAPI)
//         });
// };

const API = {
  getEntries: function() {
    return fetch("http://localhost:3000/journalEntries").then(response =>
      response.json()
    );
  }
};

export default API;