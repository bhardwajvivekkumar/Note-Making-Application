export const getNotes = () => {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  return notes;
};

export const saveNotes = (notes) => {
  localStorage.setItem("notes", JSON.stringify(notes));
};

// i do this change in utils component to learn how to do git push
