import { Button, TextField, Typography , Modal } from '@mui/material'
import { Box } from '@mui/system'
import { Fragment, useState } from 'react'
import React from 'react'

export function EditNote({noteID,setTitle,setDate,setContent,note,editNote}) {
    const [inputTitle, updateTitle] = useState(note.noteTitle);
    const [inputText, updateText] = useState(note.noteContent);
    const [isEmpty, setEmptyState] = useState(false);
    const [openEditMenu, setEditMenuOpen] = useState(false);
    
    const handleEditMenuOpen = () => {
      setEditMenuOpen(true);
      updateTitle(note.noteTitle);
      updateText(note.noteContent);
    }

    const handleEditMenuClose = () => setEditMenuOpen(false);

    const emptyChecker = e => {
        //console.log(`you type ${e.target.value}`)
        if (e.target.value === "") setEmptyState(true);
        else setEmptyState(false);
        updateTitle(e.target.value);
    }
    const textAreaChecker = e => {
      //console.log(`you type ${e.target.value}`)
      updateText(e.target.value);
  }
  
  const editNoteHandler = () =>{
    
    updateTitle(inputTitle);
    updateText(inputText);

    var date = getActualDate()
    setTitle(inputTitle);
    setDate(date);
    setContent(inputText);

    editNote((prevNotes) => {
      for (const obj of prevNotes){
        if (obj.id === noteID){
          obj.title = inputTitle
          obj.date = date
          obj.content = inputText
        }
      }
      return [...prevNotes];
    })
    handleEditMenuClose();
  }
  
  function getActualDate(){
    return new Date().toLocaleString();
  }
    
  return (
    <Fragment>
    <button onClick={handleEditMenuOpen}><img alt='editIcon' src={process.env.PUBLIC_URL+"edit.png"} width="25" height={25} /></button>
    <Modal open={openEditMenu} onClose={handleEditMenuClose}>
    <Box sx={{border: 5, borderColor: 'black', backgroundColor: 'white' ,
    borderRadius: 2,margin:4,width:620,height:500}}>
        <Typography sx={{position:'relative', top:10,left:10}} variant='h4'>Edit note</Typography>
        <Typography sx={{position:'relative', top:42,left:10}} variant='h6'>Title:</Typography>
        <TextField value={inputTitle} onChange={emptyChecker} sx={{position:'relative', top:5,left:100,border:1,borderRadius: 1, width:500, height:40}} size={"small"}></TextField>
        <Typography sx={{position:'relative', top:45,left:10}} variant='h6'>Content:</Typography>
        <textarea value={inputText} onChange={textAreaChecker} style={{width:496,height:250,position:'relative',top:5,left:100,maxHeight:250,maxWidth:496,minHeight:250,minWidth:496}}></textarea>
        <Button onClick={editNoteHandler} variant='contained' sx={{position:'relative',top:50,left:2}} disabled={isEmpty}>Edit</Button>
        <Button onClick={handleEditMenuClose} variant='outlined'sx={{position:'relative',top:14,left:400}}>Cancel</Button>
        
    </Box>
    </Modal>
    </Fragment>
  )
}
