import { Button, TextareaAutosize, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import React from 'react'

export function CreateEditNote() {
    
    const [inputTitle, setTitle] = useState("");
    const [isEmpty, setEmptyState] = useState(true);

    const emptyChecker = e => {
        //console.log(`you type ${e.target.value}`)
        if (e.target.value == "") setEmptyState(true);
        else setEmptyState(false);
        setTitle(e.target.value);
    }
       
    
  return (
    <Box sx={{border: 5, borderColor: 'black', backgroundColor: 'white' ,
    borderRadius: 2,margin:4,width:620,height:500}}>
        <Typography sx={{position:'relative', top:10,left:10}} variant='h4'>Create/Edit note</Typography>
        <Typography sx={{position:'relative', top:42,left:10}} variant='h6'>Title:</Typography>
        <TextField value={inputTitle} onChange={emptyChecker} sx={{position:'relative', top:5,left:100,border:1,borderRadius: 1, width:500, height:40}} size={"small"}></TextField>
        <Typography sx={{position:'relative', top:45,left:10}} variant='h6'>Content:</Typography>
        <textarea style={{width:496,height:250,position:'relative',top:5,left:100,maxHeight:250,maxWidth:496,minHeight:250,minWidth:496}}></textarea>
        <Button variant='contained' sx={{position:'relative',top:50,left:2}} disabled={isEmpty}>Accept</Button>
        <Button variant='outlined'sx={{position:'relative',top:14,left:400}}>Cancel</Button>
        
    </Box>
  )
}
