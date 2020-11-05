import { useLocalObservable } from "mobx-react-lite";
import React from "react";
import { createNoteStore } from "./noteStore";

const NoteContext = React.createContext(null);

export const NoteProvider = ({ children }) => {
  const noteStore = useLocalObservable(createNoteStore);

  return (
    <NoteContext.Provider value={noteStore}>{children}</NoteContext.Provider>
  );
};

export const useNoteStore = () => React.useContext(NoteContext);
