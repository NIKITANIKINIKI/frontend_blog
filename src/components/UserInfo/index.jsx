import {Avatar} from "@mui/material";
import styles from './UserInfo.module.scss'


function UserInfo(){
    return(
        <div className={styles.root}>
            <Avatar style={{marginRight:'10px'}} src="https://avatars.mds.yandex.net/i?id=e0256dce8bc09481d1c53db082d6d4309d2ac764-11511205-images-thumbs&n=13" alt="photo" />
            <div className={styles.content}>
                <span className={styles.name}>
                    Nikita
                </span>
                <span className={styles.data}>
                    25.02.2024
                </span>
            </div>
        </div>
    )
}

export default UserInfo