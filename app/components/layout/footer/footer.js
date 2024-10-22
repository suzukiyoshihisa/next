import Logo from "components/ui/logo/logo";
import Container from "components/layout/container/container";
import styles from "components/layout/footer/footer.module.css";
import Social from "components/ui/social/social";

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
          <Social />
        </div>
      </Container>
    </footer>
  );
}