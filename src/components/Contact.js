import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import SmsFailedIcon from '@material-ui/icons/SmsFailed';
import '../css/contact.css';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #3b5998',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      color: '#3b5998',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    icon: {
        textAlign: 'center',
        transform: 'scale(1.5)',
        margin: '30px 0 50px'
    }
  }));

const Contact = () => {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
    const [email, setEmail] = useState('');
    const [emailSuccess, setEmailSuccess] = useState(false);
    const [emailFailure, setEmailFailure] = useState(false);

    const emailPostReq = (e) => {
        e.preventDefault();
        axios.post('https://tiago-monteiro-email.herokuapp.com/api/emails', {email: address, subject: subject, text: body, name: name})
            .then(response => {
                console.log(response);
                if(response) {
                    setEmailSuccess(true);
                }
            })
            .catch(error => {
                console.log(error);
                if(error) {
                    setEmailFailure(true);
                }
            })
    }

    const inputHandler = (e) => {
        e.persist();
        setEmail({...email, [e.target.name]: e.target.value});
    }

    useEffect(() => {
        setName(email.name);
        setAddress(email.address);
        setSubject(email.subject);
        setBody(email.body);
    }, [email])

    const handleClose = () => {
        setEmailSuccess(false);
        setEmailFailure(false);
      };

    return (
        <div className='contactContainer'>
            <div className='contactForm'>
                <center>
                    <form onSubmit={emailPostReq}>
                        <h2 style={{marginBottom: "30px"}}>Send an Email</h2>

                        <label>Name</label> <br />
                        <input id='name' name='name' type='text' onChange={inputHandler} required/>
                        <br />
                        <label>Email</label> <br />
                        <input id='address' name='address' type='text' onChange={inputHandler} required/>
                        <br />
                        <label>Subject</label> <br />
                        <input id='subject' name='subject' type='text' onChange={inputHandler} required/>
                        <br />
                        <label>Message</label> <br />
                        <textarea id='body' name='body' rows='S' onChange={inputHandler} required></textarea>
                        <br />
                        <input type='submit' name='submit' value='Submit'/>
                    </form>
                </center>
            </div> 

            {emailSuccess ? <Modal
                                aria-labelledby="transition-modal-title"
                                aria-describedby="transition-modal-description"
                                className={classes.modal}
                                open={emailSuccess}
                                onClose={handleClose}
                                closeAfterTransition
                                BackdropComponent={Backdrop}
                                BackdropProps={{
                                timeout: 500,
                                }}
                            >
                                <Fade in={emailSuccess}>
                                <div className={classes.paper}>
                                    <div className={classes.icon}>
                                        <CheckCircleOutlineIcon />
                                    </div>
                                    <h2 id="transition-modal-title" style={{margin: '0px 0px 50px'}}>Success!</h2>
                                    <p id="transition-modal-description">Your email has been received and you will be contacted shortly.</p>
                                </div>
                                </Fade>
                            </Modal> : null}

            {emailFailure ? <Modal
                                aria-labelledby="transition-modal-title"
                                aria-describedby="transition-modal-description"
                                className={classes.modal}
                                open={emailFailure}
                                onClose={handleClose}
                                closeAfterTransition
                                BackdropComponent={Backdrop}
                                BackdropProps={{
                                timeout: 500,
                                }}
                            >
                                <Fade in={emailFailure}>
                                <div className={classes.paper}>
                                    <div className={classes.icon}>
                                        <SmsFailedIcon />
                                    </div>
                                    <h2 id="transition-modal-title" style={{margin: '0px 0px 50px'}}>Error!</h2>
                                    <p id="transition-modal-description">Your email was not able to be processed. Please refresh and try again.</p>
                                </div>
                                </Fade>
                            </Modal> : null}
        </div>
    )
}

export default Contact;