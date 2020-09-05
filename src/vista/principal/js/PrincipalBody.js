import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import '../css/PrincipalBody.css';


const messages = [
  {
    id: 1,
    primary: 'FORMULARIO 001',
    secondary: `Comentario`,
    person: '/src/imagenes/Ari.png',
  },
  {
    id: 2,
    primary: 'FORMULARIO 002',
    secondary: `Comentario`,
    person: '/src/imagenes/Ari.png',
  },
  {
    id: 3,
    primary: 'FORMULARIO 003',
    secondary: `Comentario`,
    person: '/src/imagenes/Ari.png',
  },
  {
    id: 4,
    primary: 'FORMULARIO 004',
    secondary: `Comentario`,
    person: '/src/imagenes/Ari.png',
  },
  {
    id: 5,
    primary: 'FORMULARIO 005',
    secondary: `Comentario`,
    person: '/src/imagenes/Ari.png',
  },
  {
    id: 6,
    primary: 'FORMULARIO 006',
    secondary: `Comentario`,
    person: '/src/imagenes/Ari.png',
  },
  {
    id: 7,
    primary: 'FORMULARIO 007',
    secondary: `Comentario`,
    person: '/src/imagenes/Ari.png',
  },
  {
    id: 8,
    primary: 'FORMULARIO 008',
    secondary: `Comentario`,
    person: ''
  },
];

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));


export default function BottomAppBar() {
  const classes = useStyles();

  return (
      <React.Fragment>
        <CssBaseline/>
        <Paper square className={classes.paper}>
          <Typography className={classes.text} variant="h5" gutterBottom>
            FORMULARIOS
          </Typography>
          <List className={classes.list}>
            {messages.map(({ id, primary, secondary, person }) => (
              <React.Fragment key={id}>
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar alt="Profile Picture" src={person} />
                  </ListItemAvatar>
                  <ListItemText primary={primary} secondary={secondary} />
                </ListItem>
              </React.Fragment>
            ))}
          </List>
        </Paper>
      </React.Fragment>
  );
}