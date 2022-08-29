import { Box } from '@mui/system';
import React , {Fragment, useState} from 'react'
import Typography from '@mui/material/Typography';

export function Note() {
    const [over, setBG] = useState(false);
    const bgHandler = () => setBG((prev) => !prev);
    return (
    <Box onMouseOver={bgHandler} onMouseOut={bgHandler} 
        sx={{border: 2, borderColor: 'black',bgcolor: over ? 'gray':'white', 
        borderRadius: 2,margin:4,maxWidth:450}} >

            <Typography variant="h6" sx={{position:'relative',top:2,left:10}}>Note Title</Typography>
            <Typography variant="h6" sx={{position:'relative',top:30,left:10}}>Last edit: 10/10/10 10:10pm</Typography>

            <Box sx={{position:'relative',top:-5,left:322}}>
                <button><img src={process.env.PUBLIC_URL+"archive_120061.png"} width="25" height={25} /></button>
                <button><img src={process.env.PUBLIC_URL+"edit.png"} width="25" height={25} /></button>
                <button><img src={process.env.PUBLIC_URL+"delete-77-512.png"} width="25" height={25} /></button>
            </Box> 
                
    </Box>
    )
}
