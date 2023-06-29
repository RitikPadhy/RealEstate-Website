//import react and react hooks used to display data on the console
import React, {useState,useEffect, useContext} from 'react';      

//import icons
import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri';

//import headless ui
import { Menu } from '@headlessui/react';

//import house context
import { HouseContext, useHouse } from './HouseContext';

const PriceRangeDropD = () => {
  //gets the prices of all the houses present in the HouseContext
  const {price, setPrice} = useContext(HouseContext);                      
  //sets IsOpen as false meaning it is not open initially
  const [isOpen, setIsOpen] = useState(false);
  
  {/*initailizes a new variable which is not present in the HouseContext,whose first value is given by Price Range(any), and rest given below*/}
  const prices = [
    {
      value: 'Price range(any)',
    },
    {
      value: '100000 - 130000'
    },
    {
      value: '130000 - 160000'
    },
    {
      value: '160000 - 190000'
    },
    {
      value: '190000 - 220000'
    },
    {
      value: '10000 - 30000'
    },
    {
      value: '30000 - 40000'
    },
  ]


  return (
    <Menu as='div' className='dropdown'>      {/*making a menu for the property */}
      <Menu.Button className='dropdown-btn w-full text-left' onClick={() => setIsOpen(!isOpen)}>  {/*On clicking the value of IsOpen changes */}
        <RiWallet3Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{price}</div>    {/*value of price from HouseContext*/}
          <div className='text-[13px] '>Choose price range</div>
        </div>
        {/*If IsOpen is true,show the down icon. If IsOpen is false, show the up icon.*/}
          {isOpen ? (                                                   
              <RiArrowDownSLine className='dropdown-icon-secondary' />
            ) : (
              <RiArrowUpSLine className='dropdown-icon-secondary' />
            )
          }
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {/*prices is shown as a indiviudal price starting with index zero and going ahead with further indexes,then on clicking a country is shown with the an index in the menu and all the countries get displayed in the dropdown*/}
        {prices.map((price,index) =>  {
          return (
            <Menu.Item onClick={()=>setPrice(price.value)} className='cursor-pointer hover:text-violet-700 transition' as='li' key={index}>
              {price.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  )
}

export default PriceRangeDropD