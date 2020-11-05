import React from "react";
import { useNoteStore } from "../../store/note/noteContext";

export const FormNewNote = () => {
  const noteStore = useNoteStore();

  const [text, setText] = React.useState("");

  const submit = (e) => {
    e.preventDefault();
    noteStore.addNote(text);
    setText("");
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button typ="submit">Add</button>
    </form>
  );
};
