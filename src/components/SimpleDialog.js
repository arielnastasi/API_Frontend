
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import { orange } from '@material-ui/core/colors';


const useStyles = makeStyles({
  avatar: {
    backgroundColor: orange[100],
    color: orange[600],
  },
});

function SimpleDialog(props) {
    const classes = useStyles();
    const { onClose, selectedValue, open,  questionList} = props;
  
    const handleClose = () => {
      onClose(selectedValue);
    };
  
    const handleListItemClick = (value) => {
      console.log(questionList)
      onClose(value);
    };

   
  
    return (
      <Dialog onClose={handleClose} fullWidth={true} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">Responda las siguientes preguntas</DialogTitle>
        <List>
          {questionList.map((question, index) => (
            <ListItem button onClick={() => handleListItemClick(question.question)} key={index}>
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  <HelpOutlineOutlinedIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={question.question} />
            </ListItem>
          ))}
        </List>
      </Dialog>
    );
  }
  
  SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
  };

export default SimpleDialog;