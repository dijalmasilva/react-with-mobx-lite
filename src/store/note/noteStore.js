import { nanoid } from "nanoid";

export function createNoteStore() {
  return {
    // store
    notes: [],
    //actions
    addNote(text) {
      this.notes.push({
        id: nanoid(),
        text: text,
      });
    },
    removeNote(id) {
      this.notes = this.notes.filter((note) => note.id !== id);
    },
    //computeds
    get totalNotes() {
      return this.notes.length;
    },
  };
}
