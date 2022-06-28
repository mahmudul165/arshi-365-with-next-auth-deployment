import Meta from "../component/seo/Meta";
// import Showcase from "../component/home/Showcase";
// import ExploreMore from "../component/home/ExploreMore";
// import Products from "../component/home/Products";
// import SliderHome from "../component/home/Slider";
//multiple  DynamicModules.js component:
import dynamic from "next/dynamic";
const SliderHome = dynamic(() => import("../component/home/Slider"), {
  loading: () => <p>Loading...</p>,
});
const Showcase = dynamic(() => import("../component/home/Showcase"), {
  loading: () => <p>Loading...</p>,
});
const ExploreMore = dynamic(() => import("../component/home/ExploreMore"), {
  loading: () => <p>Loading...</p>,
});
const Products = dynamic(() => import("../component/home/Products"), {
  loading: () => <p>Loading...</p>,
});
// const moduleList = {
//   module1: dynamic(() => import("../component/home/Showcase"), {
//     loading: () => <p>Loading...</p>,
//   }),
//   module2: dynamic(() => import("../component/home/ExploreMore"), {
//     loading: () => <p>Loading...</p>,
//   }),
//   module3: dynamic(() => import("../component/home/Products"), {
//     loading: () => <p>Loading...</p>,
//   }),
//   module4: dynamic(() => import("../component/home/Slider"), {
//     loading: () => <p>Loading...</p>,
//   }),
// };
function Home() {
  return (
    <>
      <Meta
        title="Arshi 365 Online Shooping in Bangladesh"
        keywords="ecommerce,product,sewrvices"
        description="Arshi-365-ecommerce cwsgeg gergerg gedgerg degersger egvvesrgeg gwergewgerwghergherh"
        image="test purpose"
      />
      <div className="container">
        <SliderHome />
        <Showcase />
        <ExploreMore />
        <Products />
        {/* {moduleList && (
          <>
            {moduleList.module1}
            {moduleList.module2}
            {moduleList.module3}
            {moduleList.module4}
          </>
        )} */}
      </div>
    </>
  );
}
export default Home;
