import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useData from '../../hooks/useData';
import Card from '../Shared/Card';
import { useParams } from 'react-router-dom';

const ShopMenu = () => {
    const categorys=["SALAD","PIZZA","SOUPS","DESSERTS","POPULAR"]
    const {category}=useParams()
    const initialIndex=categorys.indexOf(category)
   
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [data]=useData()
    const drinksData= data.filter(data=> data.category=='drinks')
    const pizzaData=data.filter(data=>data.category=='pizza')
    const dessertData=data.filter(data=>data.category=='dessert')
    const saladData=data.filter(data=>data.category=='salad')
    const soupData=data.filter(data=>data.category=='soup')

    return (
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className={'text-primary text-center mb-24'}>
          <Tab >SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUPS</Tab>
          <Tab>DESSERTS</Tab>
          <Tab>DRINKS</Tab>
        </TabList>
        <TabPanel >
            <div className='grid grid-cols-1 md:grid-cols-3  gap-10 '>
            {
                saladData.map(item=> <Card key={item._id} item={item}></Card>)
            }
            </div>
        </TabPanel>
        <TabPanel >
            <div className='grid grid-cols-1 md:grid-cols-3  gap-10 '>
            {
                pizzaData.map(item=> <Card key={item._id} item={item}></Card>)
            }
            </div>
        </TabPanel>
        <TabPanel >
            <div className='grid grid-cols-1 md:grid-cols-3  gap-10 '>
            {
                soupData.map(item=> <Card key={item._id} item={item}></Card>)
            }
            </div>
        </TabPanel>
        <TabPanel >
            <div className='grid grid-cols-1 md:grid-cols-3  gap-10 '>
            {
                dessertData.map(item=> <Card key={item._id} item={item}></Card>)
            }
            </div>
        </TabPanel>
        <TabPanel >
            <div className='grid grid-cols-1 md:grid-cols-3  gap-10 '>
            {
                drinksData.map(item=> <Card key={item._id} item={item}></Card>)
            }
            </div>
        </TabPanel>
        
      </Tabs>
    );
}

export default ShopMenu;