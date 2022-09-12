import { Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, {Fragment,useState} from 'react';
import { CreateNote } from './components/CreateNote';
import { Note } from './components/Note';
import { NoteList } from './components/NoteList';

export function App() {
    const [notes,setNotes] = useState([]);

    const [openCreateMenu, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return <Fragment>
        <Typography variant='h2'>My Notes</Typography>
        <Box sx={{position:'relative',top:-40,left:300}}>
            <button onClick={handleOpen}>Create Note</button>
            <Modal open={openCreateMenu} onClose={handleClose}><CreateNote noteList={notes} addNote={setNotes} closeModal={handleClose}></CreateNote></Modal>
        </Box>
        <Box sx={{position:'relative',top:-61,left:400}}>
            <button >Archived Notes</button>
        </Box>
        <NoteList notes={notes} delNote={setNotes}></NoteList>
    </Fragment> 
    
}
