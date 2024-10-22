import styles from 'components/ui/social/social.module.css';

/* react-iconsの追加 */
import { IoLogoFacebook } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

export default function Social() {
  return (
    <ul className={styles.list}>
      <a href="https://www.facebook.com/">
        <IoLogoFacebook/>
      </a>
      <a href="https://twitter.com/">
        <FaXTwitter/>
      </a>
      <a href="https://www.youtube.com/">
        <FaYoutube/>
      </a>
    </ul>
  )
}