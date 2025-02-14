import styles from 'components/layout/hero/hero.module.css';
import Image from "next/legacy/image";

export default function Hero({title, description, imageOn=true}) {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{description}</p>
      </div>
      { imageOn && 
        <figure>
          <Image src="/logo.png" alt="" layout='responsive' priority width={1240} height={900} />
        </figure>
      }
    </div>
  );
}