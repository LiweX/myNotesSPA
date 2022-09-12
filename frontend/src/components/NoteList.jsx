import React from 'react'
import { Note } from './Note'

export function NoteList({notes,delNote}) {
  return (
    <div>
        {notes.map((note)=>(
            <Note key={note.id} note={note} delNote={delNote}></Note>
        ))}
    </div>
  )
}
