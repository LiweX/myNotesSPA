import { Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, {Fragment} from 'react';
import { CreateEditNote } from './components/CreateEditNote';
import { Note } from './components/Note';

export function App() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return <Fragment>
        <Typography variant='h2'>My Notes</Typography>
        <Box sx={{position:'relative',top:-40,left:300}}>
            <button onClick={handleOpen}>Create Note</button>
            <Modal open={open} onClose={handleClose}><CreateEditNote></CreateEditNote></Modal>
        </Box>
        <Box sx={{position:'relative',top:-61,left:400}}>
            <button >Archived Notes</button>
        </Box>
        <Note></Note>
        <Note></Note>
        <Note></Note>
        
    </Fragment> 
    
}