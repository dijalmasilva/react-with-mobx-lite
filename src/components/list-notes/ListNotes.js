import { observer } from "mobx-react-lite";
import { useNoteStore } from "../../store/note/noteContext";

export const ListNotes = observer(() => {
  const noteStore = useNoteStore();

  return (
    <>
      <ul>
        {noteStore.notes.map((note) => (
          <li
            key={note.id}
            onClick={() => {
              noteStore.removeNote(note.id);
            }}
          >
            {note.text}
          </li>
        ))}
      </ul>
    </>
  );
});

export default ListNotes;
