import { Box } from '@mui/system';
import React , {Fragment, useState} from 'react'
import Typography from '@mui/material/Typography';
import { Modal } from '@mui/material';
import { EditNote } from './EditNote';
import DeleteNote from './DeleteNote';

export function Note({note,delNote}) {
    const {id,title,date,content,archived} = note;
    const [noteTitle, setTitle] = useState(title);
    const [noteDate, setDate] = useState(date);
    const [noteContent, setContent] = useState(content);
    //const [noteID, setID] = useState(id);
    const [isArchived, setArchive] = useState(archived);
    const [over, setBG] = useState(false);
    
    const bgHandler = () => setBG((prev) => !prev);
    //const archiveHandler = () => setArchive(true);
    //noteTitle = "Note Title";
    //noteDate = "Last edit: 10/10/10 10:10pm";
    const [openEditMenu, setEditMenuOpen] = useState(false);
    const handleEditMenuOpen = () => setEditMenuOpen(true);
    const handleEditMenuClose = () => setEditMenuOpen(false);
    
    return (
    <Fragment>
        <Modal open={openEditMenu} onClose={handleEditMenuClose}><EditNote closeModal={handleEditMenuClose} setTitle={setTitle} setContent={setContent} setDate={setDate} note={{noteTitle,noteDate,noteContent}}></EditNote></Modal>
        <Box onMouseOver={bgHandler} onMouseOut={bgHandler} 
            sx={{border: 2, borderColor: 'black',bgcolor: over ? 'gray':'white', 
            borderRadius: 2,margin:4,maxWidth:450}}>

                <Typography variant="h6" sx={{position:'relative',top:2,left:10}}>{noteTitle}</Typography>
                <Typography variant="h6" sx={{position:'relative',top:30,left:10}}>{noteDate}</Typography>

                <Box sx={{position:'relative',top:-5,left:322}}>
                    <button><img src={process.env.PUBLIC_URL+"archive_120061.png"} width="25" height={25} /></button>
                    <button onClick={handleEditMenuOpen}><img src={process.env.PUBLIC_URL+"edit.png"} width="25" height={25} /></button>
                    <DeleteNote noteID={id} delNote={delNote}></DeleteNote>
                </Box> 
                    
        </Box>
    </Fragment>
    )
}