import Hero from "components/layout/hero/hero";
import Container from "components/layout/container/container";

export default function Home() {
  return (
    <Container>
      <Hero title="Home" description="Welcome to our organization." imageOn/>
    </Container>
  );
}
