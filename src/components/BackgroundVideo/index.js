import styles from "./BackgroundVideo.module.scss"

function BackgroundVideo() {
  return (
    <video autoPlay muted loop className={styles.video}>
      <source src="/restaurant-video.mp4" type="video/mp4" />
    </video>
  );
}

export default BackgroundVideo;
