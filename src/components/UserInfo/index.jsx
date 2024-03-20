import {Avatar} from "@mui/material";
import styles from './UserInfo.module.scss'


function UserInfo({avatarURL, fullname, createdAt }){
    return(
        <div className={styles.root}>
            <Avatar style={{marginRight:'10px'}} src={avatarURL} alt="photo" />
            <div className={styles.content}>
                <span className={styles.name}>
                    {fullname}
                </span>
                <span className={styles.data}>
                   {createdAt ? createdAt.substring(0,10) : ''}
                </span>
            </div>
        </div>
    )
}

export default UserInfo