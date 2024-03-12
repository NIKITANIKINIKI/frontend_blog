import {Avatar} from "@mui/material";
import styles from './UserInfo.module.scss'


function UserInfo({user}){
    return(
        <div className={styles.root}>
            <Avatar style={{marginRight:'10px'}} src={user.avatarURL} alt="photo" />
            <div className={styles.content}>
                <span className={styles.name}>
                    {user.fullname}
                </span>
                <span className={styles.data}>
                   {/* {user.createdAt.substring(0,10)} */}
                </span>
            </div>
        </div>
    )
}

export default UserInfo