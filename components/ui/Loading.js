import styles from "../../styles/Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.loading_spinner_eclipse}>
        <div className={styles.ldio}>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
