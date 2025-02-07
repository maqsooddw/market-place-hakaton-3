import Blog from "./components/Blog";
import DiscountItem from "./components/DiscountItem";
import Fifthblock from "./components/Fifthblock";
import Firstblock from "./components/Firstblock";
import Forthblock from "./components/Forthblock";
import Secondblock from "./components/Secondblock";
import Thirdblock from "./components/Thirdblock";
import Topcategories from "./components/Topcategories";
import Trandingproducts from "./components/Trandingproducts";
import {images, images2} from "./imgvar"

export default function Home() {


  return (
<div>

<Firstblock/>
<Secondblock />
<Thirdblock images={images}/>
<Thirdblock images={images2}/>
<Forthblock />
<Fifthblock />
<Trandingproducts />

<DiscountItem /> 

<Topcategories />
<Blog />


</div>
  
  );
}
