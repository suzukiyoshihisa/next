import styles from 'components/layout/hero/hero.module.css';

export default function Hero({title, description, imageOn=true}) {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{description}</p>
      </div>
      { imageOn && <figure>[画像]</figure> }
    </div>
  );
}