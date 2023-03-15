// import { ReactComponent as ElectroLogo } from "../../assests/logo.svg"
//  import Carousels from "../../components/carousel/carousel.component";
import "./home.style.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "../../components/carousel/carousel.component";
import Context from "../../Context-page/context.component";
import Content from "../../content-page/content.component";
import Landing from "../landingpage/landing.component";
import Category from "../../category/category.component";
// import Product from "../../produuct/product.component";
import Footer from "../../footer-page/footer.component";
const Home = () => {
  return (
    <div className="body">
      <Landing />
      
      <div className="carousel-main">
        <Carousel />
      </div>

      <div>
        <Context />
      </div>

      <div>
        <Content />
      </div>
      
      <div>
        <Category/>
      </div>
      {/* <div>
        <Product/>
      </div> */}
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
