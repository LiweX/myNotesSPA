import { Box } from '@mui/system';
import React , {Fragment, useState} from 'react'
import Typography from '@mui/material/Typography';
import { EditNote } from './EditNote';
import DeleteNote from './DeleteNote';
import { ArchiveNote } from './ArchiveNote';

export function Note({note,delNote,editNote,archiveNote}) {
    const {id,title,date,content} = note;
    const [noteTitle, setTitle] = useState(title);
    const [noteDate, setDate] = useState(date);
    const [noteContent, setContent] = useState(content);
    //const [noteID, setID] = useState(id);
    const [over, setBG] = useState(false);
    
    const bgHandler = () => setBG((prev) => !prev);
    //const archiveHandler = () => setArchive(true);
    //noteTitle = "Note Title";
    //noteDate = "Last edit: 10/10/10 10:10pm";

    
    return (
    <Fragment>
        <Box onMouseOver={bgHandler} onMouseOut={bgHandler} 
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