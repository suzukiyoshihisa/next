import Hero from "components/layout/hero/hero";
import Container from "components/layout/container/container";
import PostBody from "components/layout/post-body/post-body";

export default function About() {
  return (
    <Container>
      <Hero title="About" description="Learn more about our organization."/>

      <PostBody>
        <p>
          私たちの組織は、1995年に設立されました。以来、地域社会の発展に尽力してきました。
          主な活動は、環境保護、教育支援、高齢者福祉です。毎年、数百人のボランティアが参加し、
          様々なプロジェクトを実施しています。最近では、地域の清掃活動や学習支援プログラムが特に好評です。
          また、高齢者向けのデジタルリテラシー講座も開始しました。
          私たちは、これからも地域の皆様と協力しながら、より良い社会づくりに貢献していきたいと考えています。
        </p>
        <h2>Our Mission</h2>
        <p>
          私たちの使命は、地域社会の発展に貢献することです。私たちは、環境保護、教育支援、高齢者福祉を中心に活動しています。
          これらの分野で、地域の課題を解決し、皆様の生活をより豊かにすることを目指しています。
        </p>
        <h2>Our Vision</h2>
        <p>
          私たちのビジョンは、持続可能な社会の実現です。私たちは、地域の課題に取り組みながら、
          地球環境にも配慮した活動を行っています。私たちの活動が、地域社会の発展と地球環境の保全に貢献することを願っています。
        </p>
        <h3>新しいことへのチャレンジ</h3>
        <p>
          私たちは、常に新しいことに挑戦し、成長し続けることを大切にしています。地域の課題は日々変化していますが、
          私たちは柔軟に対応し、最適なソリューションを提供する努力を惜しまないことをお約束します。
        </p>
      </PostBody>
    </Container>
  );
}
