import Header from "../component/layout/Header";

function About() {
  return <h1>about</h1>;
}

export default About;
About.getLayout = function PageLayout(page) {
  return (
    <>
      <Header />

      {page}
    </>
  );
};
