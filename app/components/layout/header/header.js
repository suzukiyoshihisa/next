import Container from "components/layout/container/container";
import Logo from "components/ui/logo/logo";
import Nav from "components/layout/nav/nav";
import styles from "components/layout/header/header.module.css";

export default function Header() {
  return (
    <header>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
          <Nav />
        </div>
      </Container>
    </header>
  );
}