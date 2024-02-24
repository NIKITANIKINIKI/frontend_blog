import { Skeleton, Stack } from "@mui/material";

import styles from './Post.module.scss'

function SkeletonBlock() {
  return (
    <Stack>
      <Skeleton variant="rectangular" width="100%" height={300} />
      <div className={styles.user}>
        <div>
          <Skeleton variant="circular" width={40} height={40} />
        </div>
        <div>
          <Skeleton variant="text" width={60} height={20} />
          <Skeleton variant="text" width={100} height={15} />
        </div>
      </div>
      <div className={styles.label}>
        <Skeleton variant="text" width="80%" height={45} />
        <div className={styles.tags}>
          <Skeleton variant="text" width={40} height={30} />
          <Skeleton variant="text" width={40} height={30} />
          <Skeleton variant="text" width={40} height={30} />
        </div>
      </div>
    </Stack>
  );
}

export default SkeletonBlock;
