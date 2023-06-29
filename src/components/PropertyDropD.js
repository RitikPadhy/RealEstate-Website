//import react and react hooks used to display data on the console
import React, {useState,useEffect, useContext} from 'react';      

//import icons
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri';

//import headless ui
import { Menu } from '@headlessui/react';

//import house context
import { HouseContext, useHouse } from './HouseContext';

const PropertyDropD = () => {
  //gets the unique properties present in the description of the images 
  const {property,setProperty,properties} = useContext(HouseContext);                     
  //sets IsOpen as false meaning it is not open initially
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as='div' className='dropdown'>      {/*making a menu for the property */}
      <Menu.Button className='dropdown-btn w-full text-left' onClick={() => setIsOpen(!isOpen)}>  {/*On clicking the value of IsOpen changes */}
        <RiHome5Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{property}</div>    {/*value of property from HouseContext*/}
          <div className='text-[13px] '>Select your house type</div>
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
        {/*properties is shown as a property with an index,then on clicking a property is shown with the an index in the menu and all the properties get displayed in the dropdown*/}
        {properties.map((property,index) =>  {
          return (
            <Menu.Item onClick={()=>setProperty(property)} className='cursor-pointer hover:text-violet-700 transition' as='li' key={index}>
              {property}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  )
}

export default PropertyDropD