import Footer from "../component/layout/Footer";
import Meta from "../component/seo/Meta";

function Test() {
  return <h1>test</h1>;
}

export default Test;
Test.getLayout = function PageLayout(page) {
  return (
    <>
      <Meta
        title="Arshi-365-ecommerce"
        keywords="ecommerce,product,sewrvices"
        description="cwsgeg gergerg gedgerg degersger egvvesrgeg gwergewgerwghergherh"
        image="test purpose"
      />
      {page}

      <Footer />
    </>
  );
};
