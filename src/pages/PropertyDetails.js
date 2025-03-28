import React from 'react';

//import data
import { housesData } from '../data';

//import use params
import {useParams} from 'react-router-dom';       //useParams gives you the parameters of the current page

//import icons
import { BiBed, BiBath, BiArea} from 'react-icons/bi';

//import link
import { Link } from 'react-router-dom';

const PropertyDetails = () => {
  //get the house id, by using the useParams which gets the parameters of this current page which is the id
  const {id} = useParams();     
  console.log(id);
  //get the house based on the id
  const house = housesData.find((house) => {
    return house.id == parseInt(id);
  });

  return (
    <div>
      <section>
        <div className='container mx-auto min-h-[800px] mb-14'>
          {/*makes the whole page a section with an auto margin, gap from the bottom should be 14px */}
          <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>            {/*flex-col but becomes flex when screen becomes small */}
            <div>
              <h2 className='text-2xl font-semibold'>{house.name}</h2>
              <h3 className='text-lg mb-4'>{house.address}</h3>
            </div>
            <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
              <div className='bg-green-500 text-white px-3 rounded-full'>{house.type}</div>
              <div className='bg-violet-500 text-white px-3 rounded-full'>{house.country}</div>
            </div>
            <div className='text-3xl font-semibold text-violet-600'>${house.price}</div>
          </div>
          <div className='flex flex-col items-start gap-8 lg:flex-row'>
            <div className='max-w-[768px]'>
              <div className='mb-8'>
                <img src={house.imageLg} alt='' />
              </div>
              <div className='flex gap-x-6 text-violet-700 mb-6'>
                <div className='flex gap-x-2'>
                  <BiBed className='text-2xl'/>
                  <div>{house.bedrooms}</div>
                </div>
                <div className='flex gap-x-2'>
                  <BiBath className='text-2xl'/>
                  <div>{house.bathrooms}</div>
                </div>
                <div className='flex gap-x-2'>
                  <BiArea className='text-2xl'/>
                  <div>{house.surface}</div>
                </div>
              </div>
              <div>{house.description}</div>
            </div>
            <div className='flex-1 bg-pink-50 w-full mb-8 border border-gray-300 rounded-lg px-6 py-8'>
              <div className='flex items-center gap-x-4 mb-8'>
                <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
                  <img src={house.agent.image} alt=""/>
                </div>
                <div>
                  <div className='font-bold text-lg'>{house.agent.name}</div>
                  <Link to='' className='text-violet-700 text-sm'>View Listings</Link>
                </div>
              </div>
              {/*forms*/}
              <form className='flex flex-col gap-y-4'>
                <input className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm' type='text' placeholder='Name*'/>
                {/*defines the name of the user in the form, and it days on the clicking on this input the focus state is switched on,outline means a line outside the border */}
                <input className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm' type='text' placeholder='Email*'/>
                <input className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm' type='text' placeholder='Phone*'/>
                <textarea className='border border-gray-300 focus:border-violet-700 outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-400' placeholder='Message*' defaultValue='Hello, I am interested in [Modern apartment]'></textarea>
                {/*means the message has a fixed height and cannot be changed due to resize-none*/}
                <div className='flex gap-x-2'>
                  <button className='bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition'>Send message</button>
                  <button className='border border-violet-700 text-vioelt-700 hover:border-violet-500 hover:text-violet-500 rounded p-4 text-sm w-full transition'>Call</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyDetails;
