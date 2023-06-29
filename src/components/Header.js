import React from 'react';

//import link 
import {Link} from 'react-router-dom';

//import logo
import Logo from '../assets/img/Enterprises.png';

const Header = () => {
  return (
  <header className='py-2 max-h-[200px]'>    {/*gives the details of the header,border-b produces a border at the bottom*/}
      <div className='container mx-auto flex justify-between '>     {/*gives the details about the content of the header,mx-auto makes the container be centered in the header proucing a small margin on the sides and also to not produce any extra spaces in the sides,justify-between provides space between contents along the axis of a flex container*/}
        <Link to='/' >  
          <img className='h-32' src={Logo} alt=''/>
        </Link>
        <div className='flex items-center gap-9 font-semibold'>   {/*puts the content in the center of the axis,and to have a gap of 6px*/}
          <Link className='hover:text-blue-600 transition text-gray-800' to=''>LOGIN</Link> {/* allows for the hover to be enabled which is transition8 */}
          <Link className='bg-blue-500 hover:bg-blue-600 text-gray-800 px-4 py-2 rounded-lg transition' to=''>SIGN UP</Link> {/*same allows for transition along with it being rounded */}
        </div>
      </div>     
  </header>
  );
};

export default Header;
