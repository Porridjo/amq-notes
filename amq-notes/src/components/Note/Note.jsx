import { Card, CardActions, CardContent, IconButton, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export default function Note( { note, deleteNote }) {
  return (
    <Card sx={{ my: 2, minWidth: 275}}>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {note.anime}
        </Typography>
        <Typography gutterBottom>
          Opening: {note.type}
        </Typography>
        <Typography gutterBottom>
          Name of the song: {note.song_name}
        </Typography>
        <Typography gutterBottom>
          Artist: {note.artist}
        </Typography>
        <Typography gutterBottom>
          Comment: {note.comment}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={deleteNote}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}
  
