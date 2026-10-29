// =====================================================================
// 📝 STICKY NOTE — scripts.js
// Day 14 · MINI CHALLENGE · STARTER · ⏱️ 20 minutes · pairs
//
// THE MISSION 🕵️
//   Build a sticky note that NEVER forgets. Type something, reload the
//   page, and your words are still there.
//
// index.html and styles.css are done. You only write JavaScript.
// Run it: right-click index.html → Open with Live Server.
//
// 💡 You already know everything you need from this morning:
//     localStorage.setItem("key", "value")
//     localStorage.getItem("key")        → null if there's nothing saved
//     localStorage.removeItem("key")
// =====================================================================

// These are grabbed for you already.
const note = document.getElementById("note");
const clearBtn = document.getElementById("clear-btn");
const charCount = document.getElementById("char-count");


// ---------------------------------------------------------------------
// ✏️ TASK 1 · Load the saved note when the page opens
// ---------------------------------------------------------------------
// Read "sticky-note" from localStorage and put it in note.value.
// 💡 Hint: on the first visit there's nothing saved (null).
//          Add || "" so the note doesn't literally say "null".
let stickyNote = localStorage.getItem("sticky-note") || "";


// ---------------------------------------------------------------------
// ✏️ TASK 2 · Save on EVERY keystroke
// ---------------------------------------------------------------------
// Listen for the "input" event on the note.
// Inside, save note.value under the key "sticky-note".
note.addEventListener("input", function () {
    localStorage.setItem("sticky-note", note.value);
    updateCount();
});


// ---------------------------------------------------------------------
// ✏️ TASK 3 · Make the 🗑️ Clear button work
// ---------------------------------------------------------------------
// On click: remove "sticky-note" from localStorage AND empty note.value.
clearBtn.addEventListener("click", function () {
    localStorage.removeItem("sticky-note");
    note.value = "";
    updateCount();
});


// ✅ DONE CHECK
//   [ ] Type something, reload → it's still there
//   [ ] Click Clear, reload → it's empty
//   [ ] DevTools → Application → Local Storage shows "sticky-note"


// =====================================================================
// 🏆 BONUS ROUND (finished early? keep going!)
// =====================================================================

// ✏️ BONUS 1 · Character counter
//   Write a function updateCount() that sets
//     charCount.textContent = note.value.length + " characters";
//   Call it on page load, when typing, and after Clear.
function updateCount() {
    note.value.length++;
    charCount.textContent = note.value.length + " characters";
}


// ✏️ BONUS 2 · Remember the note's color 🟨🩷🟦
//   Each color button has data-color="yellow", "pink" or "blue".
//   1. On page load: note.className = the saved "sticky-color" (or "yellow")
//   2. Grab all buttons:  const colorButtons = document.querySelectorAll(".color-btn");
//   3. Loop over them with for...of and add a click listener to each:
//        - note.className = btn.dataset.color;
//        - save btn.dataset.color under "sticky-color"


//run at load
updateCount();