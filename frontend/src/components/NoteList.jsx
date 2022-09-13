import React from 'react'
import { Note } from './Note'

export function NoteList({notes,delNote,editNote,archiveNote,archivedView}) {
  return (
    <div>
        {notes.filter((note)=>note.archived === archivedView)
          .map((note)=>(<Note key={note.id} note={note} delNote={delNote} editNote={editNote} archiveNote={archiveNote} archivedView={archivedView}></Note>))}
    </div>
  )
}
