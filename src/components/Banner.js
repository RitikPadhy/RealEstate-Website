//This page consists of the image and the banner on the left and even the Search, and is a part of the home page,not the complete home page
import React from 'react';

//import image
import Image from '../assets/img/Enterprises.png';

//import components
import Search from '../components/Search'

const Banner = () => {
  return  (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>    {/*to have maximum height at640px,occupy the full height*/ }
      <div className='flex flex-col lg:flex-row'>       {/*here what happens is that the container gets initailzed to be flex so that we can use flex-row but in default it is flex-col */}
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center text-center lg:text-left justify-center flex-1 px-2 lg:px-0'>   {/*produces a margin for the text from the left side,keeping the text as flex-col,getting the text left aligned or center alligned,getting the text in the middle-y of the section,padding in the xaxis usually to keep distance from the image  */}
          <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>    {/*makes the font-size,leading-none means very less space between the lines */}
                Find Your <span className='text-orange-500'>Dream House</span> With Us.
          </h1>
          <p className='max-w-[550px] mb-8 '>                 {/*allowing the max width of the paragraph to be 550px*/}
            A place to help you find the best possible house in your neighbourhood and city with very good assistance.
          </p>
        </div>
        <div className='hidden flex-1 lg:flex justify-end items-end'>     {/*hides the image in a small screen but makes it flex on a bg screen,and put image at the end of the flex*/}
          <img className='rounded-l-3xl w-[800px] h-[500px]' src={Image} alt='' />     {/*makes rouned at the top-left and bottom-left of the image with the height and width of the image*/}
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
