import Logo from "components/ui/logo";
import Container from "components/layout/container/container";
import styles from "components/layout/footer/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
          [ソーシャル]
        </div>
      </Container>
    </footer>
  );
}