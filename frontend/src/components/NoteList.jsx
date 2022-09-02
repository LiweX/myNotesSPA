import React from 'react'
import { Note } from './Note'

export function NoteList({notes}) {
  return (
    <div>
        {notes.map((note)=>(
            <Note note={note}></Note>
        ))}
    </div>
  )
}
