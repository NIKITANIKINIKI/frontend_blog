import { TextField, Typography } from "@mui/material"
import Paper from "@mui/material/Paper";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import styles from './Registration.module.scss'

function Registration(){
    return(
        <Paper className={styles.content}>
            <Typography className={styles.label} variant="h5">
                Hello! Have a good day! 
            </Typography>
            <div>
                <Avatar sx={{width:100, height:100}}/>
            </div>
            <TextField label='Your fullname' fullWidth/>
            <TextField label='Your email' fullWidth/>
            <TextField label='Your password' fullWidth/>
            <TextField label='Repeat the password' fullWidth/>
            <Button variant="contained" color='success'>
                Sign up
            </Button>
        </Paper>
    )
}

export default Registration