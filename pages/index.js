import Meta from "../component/seo/Meta";
import Showcase from "../component/home/Showcase";
import ExploreMore from "../component/home/ExploreMore";
import Products from "../component/home/Products";
import SliderHome from "../component/home/Slider";

function Home() {
  return (
    <>
      <Meta
        title="Arshi-365-ecommerce"
        keywords="ecommerce,product,sewrvices"
        description="Arshi-365-ecommerce cwsgeg gergerg gedgerg degersger egvvesrgeg gwergewgerwghergherh"
        image="test purpose"
      />
      <div className="container">
        <SliderHome />
        <Showcase />
        <ExploreMore />
        <Products />
      </div>
    </>
  );
}
export default Home;
