import { Box } from '@mui/system';
import React , {useState} from 'react'
import Typography from '@mui/material/Typography';

export function Note() {
    const [over, setBG] = useState(false);
    const bgHandler = () => setBG((prev) => !prev);
    return (
    <Box onMouseOver={bgHandler} onMouseOut={bgHandler} 
        sx={{border: 2, borderColor: 'black',bgcolor: over ? 'gray':'white', borderRadius: 2,margin:4,maxWidth:400}} >
        <Typography variant="h6">Note Title</Typography>
        <Typography variant="h6">Last edit: 10/10/10 10:10pm</Typography>
    </Box>  
    )
}
