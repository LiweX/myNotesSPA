import React from 'react'
import { Note } from './Note'

export function NoteList({notes,delNote,editNote,archiveNote}) {
  return (
    <div>
        {notes.filter((note)=>note.archived === false)
          .map((note)=>(<Note key={note.id} note={note} delNote={delNote} editNote={editNote} archiveNote={archiveNote}></Note>))}
    </div>
  )
}
