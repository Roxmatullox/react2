import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import "./products.css"

import product1 from "../../assets/images/product1.png";
import product2 from "../../assets/images/product2.png";
import product3 from "../../assets/images/product3.png";
import product4 from "../../assets/images/product4.png";
import product5 from "../../assets/images/product5.png";


function Taba() {
  return <Tabs>
    <TabList>
      <Tab>Title 2</Tab>
      <Tab>Title 2</Tab>
      <Tab>Title 3</Tab>
    </TabList>

    <TabPanel>
        <img src={product1} alt="" />
        <img src={product2} alt="" />
        <img src={product3} alt="" />
        <img src={product4} alt="" />
        <img src={product5} alt="" />
    </TabPanel>
    <TabPanel>
        <img src={product1} alt="" />
        <img src={product2} alt="" />
        <img src={product3} alt="" />
        <img src={product4} alt="" />
        <img src={product5} alt="" />
    </TabPanel>
    <TabPanel>
        <img src={product1} alt="" />
        <img src={product2} alt="" />
        <img src={product3} alt="" />
        <img src={product4} alt="" />
        <img src={product5} alt="" />
    </TabPanel>
  </Tabs>
};

export default Taba