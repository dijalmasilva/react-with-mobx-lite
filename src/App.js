import { FormNewNote } from "./components/form-new-note/FormNewNote";
import ListNotes from "./components/list-notes/ListNotes";
import { NoteProvider } from "./store/note/noteContext";

function App() {
  return (
    <NoteProvider>
      <FormNewNote />
      <ListNotes />
    </NoteProvider>
  );
}

export default App;
