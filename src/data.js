// import house images
import House1 from './assets/img/houses/house1.png';
import House2 from './assets/img/houses/house2.png';
import House3 from './assets/img/houses/house3.png';
import House4 from './assets/img/houses/house4.png';
import House5 from './assets/img/houses/house5.png';
import House6 from './assets/img/houses/house6.png';
import House7 from './assets/img/houses/house7.png';
import House8 from './assets/img/houses/house8.png';
import House9 from './assets/img/houses/house9.png';
import House10 from './assets/img/houses/house10.png';
import House11 from './assets/img/houses/house11.png';
import House12 from './assets/img/houses/house12.png';
// import house large images
import House1Lg from './assets/img/houses/house1lg.png';
import House2Lg from './assets/img/houses/house2lg.png';
import House3Lg from './assets/img/houses/house3lg.png';
import House4Lg from './assets/img/houses/house4lg.png';
import House5Lg from './assets/img/houses/house5lg.png';
import House6Lg from './assets/img/houses/house6lg.png';
import House7Lg from './assets/img/houses/house7lg.png';
import House8Lg from './assets/img/houses/house8lg.png';
import House9Lg from './assets/img/houses/house9lg.png';
import House10Lg from './assets/img/houses/house10lg.png';
import House11Lg from './assets/img/houses/house11lg.png';
import House12Lg from './assets/img/houses/house12lg.png';

// import apartments images
import Apartment1 from './assets/img/apartments/a1.png';
import Apartment2 from './assets/img/apartments/a2.png';
import Apartment3 from './assets/img/apartments/a3.png';
import Apartment4 from './assets/img/apartments/a4.png';
import Apartment5 from './assets/img/apartments/a5.png';
import Apartment6 from './assets/img/apartments/a6.png';
// import apartments large images
import Apartment1Lg from './assets/img/apartments/a1lg.png';
import Apartment2Lg from './assets/img/apartments/a2lg.png';
import Apartment3Lg from './assets/img/apartments/a3lg.png';
import Apartment4Lg from './assets/img/apartments/a4lg.png';
import Apartment5Lg from './assets/img/apartments/a5lg.png';
import Apartment6Lg from './assets/img/apartments/a6lg.png';

// import agents images
import Agent1 from './assets/img/agents/agent1.png';
import Agent2 from './assets/img/agents/agent2.png';
import Agent3 from './assets/img/agents/agent3.png';
import Agent4 from './assets/img/agents/agent4.png';
import Agent5 from './assets/img/agents/agent5.png';
import Agent6 from './assets/img/agents/agent6.png';
import Agent7 from './assets/img/agents/agent7.png';
import Agent8 from './assets/img/agents/agent8.png';
import Agent9 from './assets/img/agents/agent9.png';
import Agent10 from './assets/img/agents/agent10.png';
import Agent11 from './assets/img/agents/agent11.png';
import Agent12 from './assets/img/agents/agent12.png';

export const housesData = [
  {
    id: 1,
    type: 'House',
    name: 'House 1',
    description:
      'Tucked away in the heart of the mountains, this cozy log cabin is surrounded by dense pine forests and winding trails. The crisp mountain air carries the scent of fresh earth and wood, while a nearby brook adds a soothing melody. In winter, snow blankets the landscape, turning it into a breathtaking wonderland.',
    image: House1,
    imageLg: House1Lg,
    country: 'United States',
    address: '7240C Argyle St. Lawndale, CA 90260',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '110000',
    agent: {
      image: Agent1,
      name: 'Patricia Tullert',
      phone: '0123 456 78910',
    },
  },
  {
    id: 2,
    type: 'House',
    name: 'House 2',
    description:
      'This charming cottage sits along the coastline, where the salty breeze and rhythmic waves create a peaceful escape. Seagulls glide overhead as the golden sun dips into the horizon, painting the sky in shades of orange and pink. The sandy shore is just steps away, perfect for morning walks or evening bonfires.',
    image: House2,
    imageLg: House2Lg,
    country: 'Canada',
    address: '798 Talbot St. Bridgewater, NJ 08807',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '140000',
    agent: {
      image: Agent2,
      name: 'Daryl Hawker',
      phone: '0123 456 78910',
    },
  },
  {
    id: 3,
    type: 'House',
    name: 'House 3',
    description:
      'Nestled in a bustling city, this modern high-rise apartment offers sweeping skyline views and endless energy. From the balcony, neon lights flicker, and the hum of life below creates an electrifying atmosphere. Trendy cafes, restaurants, and cultural hotspots are just a short walk away.',
    image: House3,
    imageLg: House3Lg,
    country: 'United States',
    address: '2 Glen Creek St. Alexandria, VA 22304',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '170000',
    agent: {
      image: Agent3,
      name: 'Amado Smith',
      phone: '0123 456 78910',
    },
  },
  {
    id: 4,
    type: 'House',
    name: 'House 4',
    description:
      'Sitting on the edge of a tranquil lake, this wooden retreat provides the perfect setting for relaxation and reflection. Ducks glide effortlessly across the glassy water, and a private dock invites lazy afternoons of fishing. In the evenings, the setting sun casts golden ripples over the serene surface.',
    image: House4,
    imageLg: House4Lg,
    country: 'Canada',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '200000',
    agent: {
      image: Agent4,
      name: 'Kaitlyn Gonzalez',
      phone: '0123 456 78910',
    },
  },
  {
    id: 5,
    type: 'House',
    name: 'House 5',
    description:
      'Surrounded by vast rolling fields and endless meadows, this countryside farmhouse is a haven of peace. Wildflowers bloom along the fences, and horses graze lazily under the wide blue sky. The gentle rustling of trees and the distant mooing of cattle complete the idyllic rural setting.',
    image: House5,
    imageLg: House5Lg,
    country: 'United States',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '5',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2015',
    price: '210000',
    agent: {
      image: Agent5,
      name: 'Grover Robinson',
      phone: '0123 456 78910',
    },
  },
  {
    id: 6,
    type: 'House',
    name: 'House 6',
    description:
      'Perched on a hilltop, this grand estate commands breathtaking views of the valley below. The rising sun bathes the landscape in golden light, while cool breezes sweep through the open terraces. At night, the twinkling city lights in the distance create a mesmerizing backdrop.',
    image: House6,
    imageLg: House6Lg,
    country: 'Canada',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '6',
    bathrooms: '3',
    surface: '6200 sq ft',
    year: '2014',
    price: '220000',
    agent: {
      image: Agent6,
      name: 'Karen Sorensen',
      phone: '0123 456 78910',
    },
  },
  {
    id: 7,
    type: 'Apartament',
    name: 'Apartament 1',
    description:
      'Hidden deep within an ancient forest, this secluded cabin offers a magical escape from the modern world. Towering trees form a natural canopy, filtering sunlight into soft, golden beams. The sounds of rustling leaves and chirping birds bring a sense of serenity and harmony.',
    image: Apartment1,
    imageLg: Apartment1Lg,
    country: 'Canada',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1200 sq ft',
    year: '2012',
    price: '20000',
    agent: {
      image: Agent7,
      name: 'Jawhar Shamil Naser',
      phone: '0123 456 78910',
    },
  },
  {
    id: 8,
    type: 'Apartament',
    name: 'Apartament 2',
    description:
      'Built in the heart of a sun-soaked desert, this adobe-style home blends seamlessly with the rugged landscape. The warm, earthen walls retain coolness against the scorching sun, while cacti and wildflowers dot the surroundings. At night, a blanket of stars stretches endlessly over the vast, open sky.',
    image: Apartment2,
    imageLg: Apartment2Lg,
    country: 'United States',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1000 sq ft',
    year: '2011',
    price: '30000',
    agent: {
      image: Agent8,
      name: 'Juana Douglass',
      phone: '0123 456 78910',
    },
  },
  {
    id: 9,
    type: 'Apartament',
    name: 'Apartament 3',
    description:
      'Set on the banks of a winding river, this charming home is surrounded by lush greenery and the soothing sound of flowing water. Wooden bridges and stone pathways lead to peaceful nooks perfect for quiet moments. The gentle sway of willows by the shore adds a touch of romance to the scenery.',
    image: Apartment3,
    imageLg: Apartment3Lg,
    country: 'United States',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1100 sq ft',
    year: '2011',
    price: '40000',
    agent: {
      image: Agent9,
      name: 'Jerry Schenck',
      phone: '0123 456 78910',
    },
  },
  {
    id: 10,
    type: 'House',
    name: 'House 7',
    description:
      'Enveloped by a tropical paradise, this island villa is a dream escape filled with swaying palms and crystal-clear waters. The scent of blooming hibiscus lingers in the warm air, and vibrant birds add bursts of color to the sky. Just beyond the garden, soft white sand leads to an endless turquoise ocean.',
    image: House7,
    imageLg: House7Lg,
    country: 'Canada',
    address: '7240C Argyle St. Lawndale, CA 90260',
    bedrooms: '5',
    bathrooms: '3',
    surface: '3200 sq ft',
    year: '2015',
    price: '117000',
    agent: {
      image: Agent10,
      name: 'Vera Levesque',
      phone: '0123 456 78910',
    },
  },
  {
    id: 11,
    type: 'House',
    name: 'House 8',
    description:
      'This charming cottage sits along the coastline, where the salty breeze and rhythmic waves create a peaceful escape. Seagulls glide overhead as the golden sun dips into the horizon, painting the sky in shades of orange and pink. The sandy shore is just steps away, perfect for morning walks or evening bonfires.',
    image: House8,
    imageLg: House8Lg,
    country: 'Canada',
    address: '798 Talbot St. Bridgewater, NJ 08807',
    bedrooms: '7',
    bathrooms: '2',
    surface: '2200 sq ft',
    year: '2019',
    price: '145000',
    agent: {
      image: Agent11,
      name: 'Sofia Gomes',
      phone: '0123 456 78910',
    },
  },
  {
    id: 12,
    type: 'House',
    name: 'House 9',
    description:
      'Tucked away in the heart of the mountains, this cozy log cabin is surrounded by dense pine forests and winding trails. The crisp mountain air carries the scent of fresh earth and wood, while a nearby brook adds a soothing melody. In winter, snow blankets the landscape, turning it into a breathtaking wonderland.',
    image: House9,
    imageLg: House9Lg,
    country: 'United States',
    address: '2 Glen Creek St. Alexandria, VA 22304',
    bedrooms: '4',
    bathrooms: '4',
    surface: '4600 sq ft',
    year: '2015',
    price: '139000',
    agent: {
      image: Agent12,
      name: 'Raymond Hood',
      phone: '0123 456 78910',
    },
  },
  {
    id: 13,
    type: 'House',
    name: 'House 10',
    description:
      'Nestled in a bustling city, this modern high-rise apartment offers sweeping skyline views and endless energy. From the balcony, neon lights flicker, and the hum of life below creates an electrifying atmosphere. Trendy cafes, restaurants, and cultural hotspots are just a short walk away.',
    image: House10,
    imageLg: House10Lg,
    country: 'Canada',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '5',
    bathrooms: '2',
    surface: '5200 sq ft',
    year: '2014',
    price: '180000',
    agent: {
      image: Agent1,
      name: 'Patricia Tullert',
      phone: '0123 456 78910',
    },
  },
  {
    id: 14,
    type: 'House',
    name: 'House 11',
    description:
      'Sitting on the edge of a tranquil lake, this wooden retreat provides the perfect setting for relaxation and reflection. Ducks glide effortlessly across the glassy water, and a private dock invites lazy afternoons of fishing. In the evenings, the setting sun casts golden ripples over the serene surface.',
    image: House11,
    imageLg: House11Lg,
    country: 'United States',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '5',
    bathrooms: '2',
    surface: '3200 sq ft',
    year: '2011',
    price: '213000',
    agent: {
      image: Agent2,
      name: 'Daryl Hawker',
      phone: '0123 456 78910',
    },
  },
  {
    id: 15,
    type: 'House',
    name: 'House 12',
    description:
      'Surrounded by vast rolling fields and endless meadows, this countryside farmhouse is a haven of peace. Wildflowers bloom along the fences, and horses graze lazily under the wide blue sky. The gentle rustling of trees and the distant mooing of cattle complete the idyllic rural setting.',
    image: House12,
    imageLg: House12Lg,
    country: 'Canada',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '4',
    bathrooms: '3',
    surface: '5200 sq ft',
    year: '2013',
    price: '221000',
    agent: {
      image: Agent3,
      name: 'Amado Smith',
      phone: '0123 456 78910',
    },
  },
  {
    id: 16,
    type: 'Apartament',
    name: 'Apartament 16',
    description:
      'Perched on a hilltop, this grand estate commands breathtaking views of the valley below. The rising sun bathes the landscape in golden light, while cool breezes sweep through the open terraces. At night, the twinkling city lights in the distance create a mesmerizing backdrop.',
    image: Apartment4,
    imageLg: Apartment4Lg,
    country: 'Canada',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1300 sq ft',
    year: '2011',
    price: '21000',
    agent: {
      image: Agent4,
      name: 'Kaitlyn Gonzalez',
      phone: '0123 456 78910',
    },
  },
  {
    id: 17,
    type: 'Apartament',
    name: 'Apartament 17',
    description:
      'Hidden deep within an ancient forest, this secluded cabin offers a magical escape from the modern world. Towering trees form a natural canopy, filtering sunlight into soft, golden beams. The sounds of rustling leaves and chirping birds bring a sense of serenity and harmony.',
    image: Apartment5,
    imageLg: Apartment5Lg,
    country: 'United States',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1000 sq ft',
    year: '2012',
    price: '32000',
    agent: {
      image: Agent5,
      name: 'Grover Robinson',
      phone: '0123 456 78910',
    },
  },
  {
    id: 18,
    type: 'Apartament',
    name: 'Apartament 18',
    description:
      'Built in the heart of a sun-soaked desert, this adobe-style home blends seamlessly with the rugged landscape. The warm, earthen walls retain coolness against the scorching sun, while cacti and wildflowers dot the surroundings. At night, a blanket of stars stretches endlessly over the vast, open sky.',
    image: Apartment6,
    imageLg: Apartment6Lg,
    country: 'Canada',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1200 sq ft',
    year: '2010',
    price: '38000',
    agent: {
      image: Agent6,
      name: 'Karen Sorensen',
      phone: '0123 456 78910',
    },
  },
];
