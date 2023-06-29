import React,{useState,useEffect,createContext,useContext} from 'react';

//import data 
import {housesData} from '../data'

//create context to allow communication between the vairables in one javascript file and another javascript file
export const HouseContext = createContext();

export const HouseContextProvider = ({children}) => {
  const [houses,setHouses] = useState(housesData);
  const [country,setCountry] = useState('Location (any)');
  const [countries,setCountries] = useState([]);
  const [property,setProperty] = useState('Property type (any)');
  const [properties,setProperties] = useState([]);
  const [price,setPrice] = useState('Price range (any)');
  const [loading,setLoading] = useState(false);

  
  useEffect(() => {
    //return all countries present in the images
    const allCountries = houses.map((house) => {
      return house.country;
    });
    console.log(allCountries);

    //remove duplicates from the allCountries and stores it in uniqueCountries
    const uniqueCountries = ['Location (any)',...
    new Set(allCountries)];
    console.log(uniqueCountries);

    //sets the countries state with the value of uniqueCountries
    setCountries(uniqueCountries);
  },[]);


  useEffect(() => {
    //return all properties present in the images
    const allProperties = houses.map((house) => {
      return house.type;
    });
    console.log(allProperties);

    //remove duplicates from the allProperties and stores it in uniqueProperties
    const uniqueProperties = ['Location (any)',...
    new Set(allProperties)];            //causes only to take unique values
    console.log(uniqueProperties);

    //sets the properties state with the value of uniqueProperties
    setProperties(uniqueProperties);
  },[]);


  const handleClick = () => {
    //set loading 
    setLoading(true);
    //create a function that checks if the string includes '(any)'
    const isDefault = (str) => {
      return str.split(' ').includes('(any)');
    };

    //get first value of price and parse it to number
    const minPrice = parseInt(price.split(' ')[0]);
    //get the second value of price which is the maximum and parse it to mumber
    const maxPrice = parseInt(price.split(' ')[2]);
    console.log(maxPrice);

    const newHouses = housesData.filter((house) => {                              {/*a different house from the house is being passed as an argument every time and if the condition gets satisfied the house is basically returned */}
      const housePrice = parseInt(house.price);

      //is all values are selected, price,country and property come from the user
      if(house.country == country && house.type == property && housePrice >= minPrice && housePrice <= maxPrice)
      {
        return house;
      }
      //if all values are default and are not changed
      if(isDefault(country) && isDefault(property) && isDefault(price))
      {
        return house;
      }
      //if country is changed and is not default anymore
      if(!isDefault(country) && isDefault(property) && isDefault(price))
      {
        if(house.country === country)                       //if the country entered by the user is equal to the country of any of the house being passed
        {
          return house;
        }
      }
      //if property is changed and is not default anymore
      if(isDefault(country) && !isDefault(property) && isDefault(price))
      {
        if(house.type === property)
        {
          return house;
        }
      }
      //if price is changed and is not default anymore
      if(isDefault(country) && isDefault(property) && !isDefault(price))
      {
        if(housePrice >= minPrice && housePrice <= maxPrice)
        {
          return house;
        }
      }
      //country and property values are changed and are not default anymore
      if(!isDefault(country) && !isDefault(property) && isDefault(price))
      {
        if(house.country === country && house.type === property)
        {
          return house;
        }
      }
      //property and price values are changed and are not default anymore
      if(isDefault(country) && !isDefault(property) && !isDefault(price))
      {
        if(house.type === property && housePrice >= minPrice && housePrice <= maxPrice)
        {
          return house;
        }
      }
      //country and price values are changed and are not default anymore
      if(!isDefault(country) && isDefault(property) && !isDefault(price))
      {
        if(house.country === country && housePrice >= minPrice && housePrice <= maxPrice)
        {
          return house;
        }
      }
    });
    //setTimeout is a function which executes a piece of code after a certain period of time(1000s), checks if there are less than one house in the newHouses and if true, dont change anything but if false,change the value of House to newHouse and also set the loading to false
    setTimeout(() => {
      return newHouses.length < 1 ? setHouses([]) : 
      setHouses(newHouses),
      setLoading(false);
    }, 1000);
  };

  return (
    <HouseContext.Provider value={{
      country,
      setCountry,
      countries,
      property,
      setProperty,
      properties,
      price,
      setPrice,
      houses,
      loading,
      handleClick,
    }}>{children}</HouseContext.Provider>
  );
};

export default HouseContextProvider;

