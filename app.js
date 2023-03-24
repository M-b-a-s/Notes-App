// DOM Elements
const addNoteBtn = document.querySelector(".addNoteBtn"),
  homePage = document.querySelector(".container"),
  addNote = document.querySelector(".add-note"),
  saveBtn = document.querySelector(".save-note"),
  backBtn = document.querySelector(".back-btn"),
  noteTitle = document.getElementById("title"),
  noteDescription = document.getElementById("description"),
  notes = document.querySelector(".notes"),
  notesContainer = document.querySelector(".notes"),
  colorsBox = document.querySelector(".colors-box");

// click plus button to go to addnote page
addNoteBtn.addEventListener("click", editPage);

function editPage() {
  homePage.style.display = "none";
  addNote.style.display = "block";
  addNoteBtn.style.display = "none";
}

// click back btn to return to home page
backBtn.addEventListener("click", () => {
  home();
  noteTitle.value = "";
});

function home() {
  // return to home page
  homePage.style.display = "block";
  addNote.style.display = "none";
  addNoteBtn.style.display = "block";
}

// click the save button to save note and append to notes page
saveBtn.addEventListener("click", () => {
  // create note element
  const note = document.createElement("div");

  //   create edit button
  const edit = document.createElement("span");
  edit.innerHTML = '<i class="uil uil-edit"></i>';
  edit.classList.add("edit");

  edit.addEventListener("click", () => {
    saveBtn.removeEventListener(saveBtn, edit);
    const editNote = document.querySelectorAll(".edit");
    editNote.forEach((editbtn) => {
      editbtn.addEventListener("click", () => {
        editPage();
        noteTitle.value = note.textContent;
        noteDescription.value = noteDescription.value;
      });
    });
  });

  // create delete button
  const delNote = document.createElement("span");
  delNote.innerHTML = '<i class="uil uil-trash-alt"></i>';
  delNote.classList.add("trash");

  delNote.addEventListener("click", () => {
    saveBtn.removeEventListener(saveBtn, delNote);
    // remove note
    note.remove();
  });

  notesContainer.append(note);
  note.append(edit);
  note.append(delNote);
  note.append(noteTitle.value);
  note.classList.add("note");
  home();

  //   click on note to take you to the edit page

  noteTitle.value = "";
});
