import './App.css'
import { Box, Button, Container, Modal, Stack, TextField, Typography } from '@mui/material'
import Note from '/src/components/Note/Note.jsx'
import { useState } from 'react'
import data from '/notes.json'

function App() {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: 2
  };
  
  const [notes, setNotes] = useState(data)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [formData, setFormData] = useState({
    anime_name: "",
    song_type: "",
    song_name: "",
    artist: "",
    comment: ""
  })

  const addNote = (e) => {
    e.preventDefault()
    const newNote = {
      anime: formData.anime_name,
      type: formData.song_type,
      song_name: formData.song_name,
      artist: formData.artist,
      comment: formData.comment
    }
    setNotes(prevNotes => [...prevNotes, newNote])
    setOpen(false)
  }

  const deleteNote = (index) => {
    setNotes(prevNotes => [...prevNotes.filter((note, i) => index != i)])
  }

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setFormData(prevFormData => (
      {
        ...prevFormData,
        [name]: value
      }
    ))
  }

  console.log(formData)

  return (
    <Container sx={{height: '100vh'}}>
      <Typography variant="h2">Notes</Typography>
      <Button onClick={handleOpen} variant="contained">Add a note</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <Box component="form" sx={style} autoComplete='off' onSubmit={addNote}>
        <Stack spacing={2}>
          <TextField label="Anime name" name='anime_name' value={formData.anime_name} onChange={handleOnChange} required />
          <TextField label="Song type" name='song_type' value={formData.song_type} onChange={handleOnChange} />
          <TextField label="Song name" name='song_name' value={formData.song_name} onChange={handleOnChange} />
          <TextField label="Artist" name='artist' value={formData.artist} onChange={handleOnChange} />
          <TextField label="Comment" name='comment' value={formData.comment} onChange={handleOnChange}/>
          <Box>
            <Button type='submit' variant="contained">Add notes</Button>
          </Box>
        </Stack>
        
      </Box>
      </Modal>
      {notes.map((note, index) => (
        <Note note={note} deleteNote={() => deleteNote(index)} key={index}/>
      ))}
    </Container>

  )
}

export default App
