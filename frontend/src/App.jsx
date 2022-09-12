import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, {Fragment,useState} from 'react';
import { CreateNote } from './components/CreateNote';
import { NoteList } from './components/NoteList';

export function App() {
    const [notes,setNotes] = useState([]);


    return <Fragment>
        <Typography variant='h2'>My Notes</Typography>
        <Box sx={{position:'relative',top:-40,left:300}}>
            <CreateNote addNote={setNotes}></CreateNote>
        </Box>
        <Box sx={{position:'relative',top:-61,left:400}}>
            <button >Archived Notes</button>
        </Box>
        <NoteList notes={notes} delNote={setNotes} editNote={setNotes} archiveNote={setNotes}></NoteList>
    </Fragment> 
    
}
