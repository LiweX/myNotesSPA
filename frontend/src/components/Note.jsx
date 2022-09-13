import { Box } from '@mui/system';
import React , {Fragment, useState} from 'react'
import Typography from '@mui/material/Typography';
import { EditNote } from './EditNote';
import DeleteNote from './DeleteNote';
import { ArchiveNote } from './ArchiveNote';
import { Modal } from '@mui/material';

export function Note({note,delNote,editNote,archiveNote}) {
    const {id,title,date,content} = note;
    const [noteTitle, setTitle] = useState(title);
    const [noteDate, setDate] = useState(date);
    const [noteContent, setContent] = useState(content);
    //const [noteID, setID] = useState(id);
    const [over, setBG] = useState(false);
    
    const bgHandler = () => setBG((prev) => !prev);

    const [openCreateMenu, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    
    return (
    <Fragment>
        <Modal open={openCreateMenu} onClose={handleClose}>
        <Box sx={{border: 5, borderColor: 'black', backgroundColor: 'white' ,
            borderRadius: 2,margin:4,width:620,height:500}}>
                <Typography variant="h3" sx={{position:'relative',top:20,left:40}}>{noteTitle}</Typography>
                <textarea value={noteContent} style={{width:496,height:250,position:'relative',top:80,left:50,maxHeight:250,maxWidth:496,minHeight:250,minWidth:496}}></textarea>
            </Box>
        </Modal>
        <Box onClick={handleOpen} onMouseOver={bgHandler} onMouseOut={bgHandler} 
            sx={{border: 2, borderColor: 'black',bgcolor: over ? 'gray':'white', 
            borderRadius: 2,margin:4,maxWidth:450}}>

                <Typography variant="h6" sx={{position:'relative',top:2,left:10}}>{noteTitle}</Typography>
                <Typography variant="h6" sx={{position:'relative',top:30,left:10}}>{noteDate}</Typography>

                <Box sx={{position:'relative',top:-5,left:322}}>
                    <ArchiveNote noteID={id} archiveNote={archiveNote}></ArchiveNote>
                    <EditNote noteID={id} setTitle={setTitle} setContent={setContent} setDate={setDate} note={{noteTitle,noteDate,noteContent}} editNote={editNote}></EditNote>
                    <DeleteNote noteID={id} delNote={delNote}></DeleteNote>
                </Box>      
        </Box>
    </Fragment>
    )
}