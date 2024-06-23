import React, { useState } from 'react'
import Home from './src/pages/home'
import AddNote from './src/pages/addNote'
import EditNote from './src/pages/editNote'

const CurrentPageWidget = ({
  currentPage,
  noteList,
  setCurrentPage,
  addNote,
  deleteNote,
  editNote,
  selectedNote,
  setSelectedNote,
}) => {
  switch (currentPage) {
    case 'home':
      return <Home noteList={noteList} setCurrentPage={setCurrentPage} deleteNote={deleteNote} setSelectedNote={setSelectedNote} />
    case 'add':
      // Berikan function "addNote" ke component "AddNote"
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />
    case 'edit':
      return <EditNote setCurrentPage={setCurrentPage} editNote={editNote} note={selectedNote} />
    default:
      return <Home />
  }
}

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedNote, setSelectedNote] = useState(null)

  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;
    setNoteList([
      ...noteList,
      {
        id: id,
        title: title,
        desc: desc,
      },
    ]);
  };

  const deleteNote = (noteId) => {
    const updatedNote = noteList.filter((note) => note.id !== noteId);
    setNoteList(updatedNote);
  };

  const editNote = (newTitle, newDesc, noteId) => {
    setNoteList(prevList =>
      prevList.map(note =>
        note.id === noteId ? { ...note, title: newTitle, desc: newDesc } : note
      )
    );
  };

  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: 'Note pertama',
      desc:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
  ]);

  return (
    <CurrentPageWidget
      currentPage={currentPage}
      noteList={noteList}
      setCurrentPage={setCurrentPage}
      // Berikan function addNote sebagai prop
      addNote={addNote}
      deleteNote={deleteNote}
      editNote={editNote}
      selectedNote={selectedNote}
      setSelectedNote={setSelectedNote}
    />
  );
}

export default App