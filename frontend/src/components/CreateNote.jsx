import { Button, TextField, Typography,Modal } from '@mui/material'
import { Box } from '@mui/system'
import { Fragment, useState } from 'react'
import React from 'react'
import {v4 as uuidv4} from 'uuid';

export function CreateNote({addNote}) {
    
    const [inputTitle, setTitle] = useState("");
    const [inputText, setText] = useState("");
    const [isEmpty, setEmptyState] = useState(true);

    const [openCreateMenu, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const emptyChecker = e => {
        //console.log(`you type ${e.target.value}`)
        if (e.target.value === "") setEmptyState(true);
        else setEmptyState(false);
        setTitle(e.target.value);
    }
    const textAreaChecker = e => {
      //console.log(`you type ${e.target.value}`)
      setText(e.target.value);
  }
  
  const addNoteHandler = () =>{
    addNote((prevNotes) => {
      return [...prevNotes,{id:uuidv4(),title:inputTitle,date:getActualDate(),content:inputText,archived:false}]
    })
    setTitle("");
    setText("");
    setEmptyState(true);
    handleClose();
  }

  function getActualDate(){
    return new Date().toLocaleString();
  }
    
  return (
    <Fragment>
      <button onClick={handleOpen}>Create Note</button>
    <Modal open={openCreateMenu} onClose={handleClose}>
    <Box sx={{border: 5, borderColor: 'black', backgroundColor: 'white' ,
    borderRadius: 2,margin:4,width:620,height:500}}>
        <Typography sx={{position:'relative', top:10,left:10}} variant='h4'>Create note</Typography>
        <Typography sx={{position:'relative', top:42,left:10}} variant='h6'>Title:</Typography>
        <TextField value={inputTitle} onChange={emptyChecker} sx={{position:'relative', top:5,left:100,border:1,borderRadius: 1, width:500, height:40}} size={"small"}></TextField>
        <Typography sx={{position:'relative', top:45,left:10}} variant='h6'>Content:</Typography>
        <textarea value={inputText} onChange={textAreaChecker} style={{width:496,height:250,position:'relative',top:5,left:100,maxHeight:250,maxWidth:496,minHeight:250,minWidth:496}}></textarea>
        <Button onClick={addNoteHandler} variant='contained' sx={{position:'relative',top:50,left:2}} disabled={isEmpty}>Accept</Button>
        <Button onClick={handleClose}variant='outlined'sx={{position:'relative',top:14,left:400}}>Cancel</Button>  
    </Box>
    </Modal>
    </Fragment>
  )
}
