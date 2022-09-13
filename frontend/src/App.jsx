import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, {Fragment,useState} from 'react';
import { CreateNote } from './components/CreateNote';
import { NoteList } from './components/NoteList';

export function App() {
    const [notes,setNotes] = useState([]);
    const [archivedView, setView] = useState(false);
    const viewHandler = () => {
        setView(prev => !prev);
    }

    return <Fragment>
        <Typography variant='h2'>{archivedView? "Archived Notes" : "My Notes"}</Typography>
        <Box sx={{position:'relative',top:-40,left:400}}>
            {archivedView? null : <CreateNote addNote={setNotes}></CreateNote>}
        </Box>
        <Box sx={{position:'absolute',top:40,left:550}}>
            <button onClick={viewHandler}>{archivedView? "Go back" : "Archived Notes"}</button>
        </Box>
        <NoteList notes={notes} delNote={setNotes} editNote={setNotes} archiveNote={setNotes} archivedView={archivedView}></NoteList>
    </Fragment> 
    
}
