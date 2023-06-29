import React from 'react';

//import icons
import {BiBed, BiBath, BiArea} from 'react-icons/bi';

const House = ({house}) => {
  const { image, type, country, address, bedrooms, bathrooms, surface, price } = house;     {/*all the properties of a house is being put into an object called house*/}
  return (
  <div className='bg-white shadow-1 p-5 rounded-lg rounded-t-[40px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition'>
    {/*so we are now a profile for each house,background is white,produces a light shadow outide the profile with padding of 8px of the inside objects from the border,rounds the top with a different radius,full width,allows max width of 352px, allows a different cursor when on top of any house profile, on hovering a stronger shadow is seen*/}
      <img className='mb-8' src={image} alt='' />
      {/*gets the image property from the house object whose values come from HouseList which calls House, margin from bottom of 8px*/}
      <div className='mb-4 flex gap-x-2 text-sm'>
      {/*margin of this section from bottom of 4px,keeps components on the same row,gap between components with 2px, keep the text small*/}
        <div className='bg-orange-500 rounded-full text-white px-3'>{type}</div>
        {/*holds the value of the property type, background is green, rounded text at the border, text is white and text is seperated from border by 3px */}
        <div className='bg-blue-500 rounded-full text-white px-3'>{country}</div>
        {/*holds the value of the country, background is blue,rounded text at the border,text is white, seperation from border is 3px */}
      </div>
      <div className='text-lg font-semibold max-w-[260px]'>{address}</div>
      {/*text is large, font is in semibold, max width of the address is 260px if exceeds moves on to the next line*/}
      <div className='flex gap-x-4 my-4'>
      {/*keeps its components in flex, gap between components is 4px, seperation of the component from above and below is 4px */}
        <div className='flex items-center text-gray-600 gap-1'>
        {/*tells us about the amount of beds in the house, keeps the icon and number of beds in the same row,centers both of them, gap between them is 1px, text is in gray-100*/} 
          <div className='text-[20px]'>
            {/*calls the icon of size of 20px*/}
            <BiBed />
          </div>
          <div>{bedrooms}</div>
          {/*tells the number of beds */}
        </div>
        <div className='flex items-center text-gray-600 gap-1'>
          {/*tells us about the amount of bathrooms in the house, keeps the icon and number of beds in the same row,centers both of them, gap between them is 1px, text is in gray-100*/}
          <div className='text-[20px]'>
            <BiBath />
          </div>
          <div>{bathrooms}</div>
        </div>
        <div className='flex items-center text-gray-600 gap-1'>
        {/*tells us about the surface in the house, keeps the icon and number of beds in the same row,centers both of them, gap between them is 1px, text is in gray-100*/}
          <div className='text-[20px]'>
            <BiArea />
          </div>
          <div>{surface}</div>
        </div>
      </div>
      <div className='text-lg font-semibold text-violet-600 mb-4'>{price}</div>
      {/*tells us about the price of the property, text is in large, font is semibold, text is in violet-600, margin from the bottom is 4px*/}
  </div>
  );
};

export default House;
 