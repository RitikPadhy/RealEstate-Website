import React, {useContext} from 'react';

//import context
import { HouseContext } from './HouseContext';

//import components
import House from './House';

//import link
import {Link} from 'react-router-dom';

//import icons
import { ImSpinner2 } from 'react-icons/im';

const HouseList = () => {
  const {houses, loading} = useContext(HouseContext);          {/*get the values of houses and loading from HouseContext */}
  console.log(houses);                                         {/*shows the value of houses on the console, houses here is basically the data about the properties */}

  //if loading is true, which is coming from HouseContext,then display the loading icon meaning no output is present, animate spin cause the icon to spin in the clockwise
  if(loading)
  {
    return(
      <ImSpinner2 className='mx-auto animate-spin text-violet-700 text-4xl mt-[200px]' />
    )
  }
  //if there are no houses present in the house after the updating the newHouses, then display Sorry, nothing here
  if(houses.length < 1)
  {
    return (
      <div className='text-center text-3xl text-gray-400 mt-48'>Sorry, nothing here</div>
    )
  }

  return(
    <section className='mb-20'>                                {/*HouseList has a margin from the footer by 20px*/}
      <div className='container mx-auto'>                      {/*Make the section a container with a auto margin*/}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>    {/*makes the entire div a grid, with two columns or three columns depending upon the size of the screen as well as the gap between these columns */}
          {houses.map((house,index) => {                       {/*Each element in the array houses with an index from HouseContext get applied with the following HTML tags*/}
          return (
            <Link to={`/property/${house.id}`} key={index}>    {/*see App.js to see that it gets routed to a local host which an extension of /property/$(house.id),careful we use ``, routes to every house which is unique, every child in the map function must be unique and they are made unique by using the key which holds the value of the index*/}
              <House house={house} />                          {/*calls the House js file by passing the argument house which holds the value of a specific house with an unique ID*/}
            </Link>
          )    
        })}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
