import CakeView from "./features/cake/CakeView";
import IceCreamView from "./features/icecream/IceCreamView";
import Career from "./features/career/Career";
import { useSelector } from "react-redux";




const App = () => {
  return (
    <div>
      <h1 style={{ textDecoration: 'underline' }}>dev_nano</h1>
      <CakeView />
      <IceCreamView />
      <Career />
    </div>
  );
};

export default App;
