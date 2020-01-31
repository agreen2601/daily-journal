/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/

import API from "./data.js";
import renderEntries from "./entriesDOM.js";
// import submit from "./input.js";

API.getEntries().then(renderEntries);
// submit();