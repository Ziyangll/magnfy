import { DataT } from '../../types';

import IMG_creator01 from '../images/creator.jpg';
import IMG_creator02 from '../images/IMGME1.jpg';
import IMG_creator03 from '../images/01.jpg';
import IMG_creator04 from '../images/02.jpg';
import IMG_creator05 from '../images/03.jpg';
import IMG_creator06 from '../images/04.jpg';
import IMG_creator07 from '../images/05.jpg';
import IMG_creator08 from '../images/06.jpg';

import IMG_product01 from '../images/product_img_01.jpg';
import IMG_product02 from '../images/product_img_02.jpg';
import IMG_product03 from '../images/product_img_03.jpg';
import IMG_product04 from '../images/product_img_04.jpg';
import IMG_product05 from '../images/product_img_05.jpg';

import IMG_ME_product01 from '../images/IMGMEP1.jpg';
import IMG_ME_product02 from '../images/IMGMEP2.jpg';
import IMG_ME_product03 from '../images/IMGMEP3.jpg';
import IMG_ME_product04 from '../images/IMGMEP4.jpg';

const data: DataT[] = [
  {
    id: 1,
    name: 'Sarah Beth',
    isOnline: true,
    match: '99',
    description:
      'An auburn student studying cullinary with dreams to open her own bakery one day',
    message: 'I can make that!',
    image: IMG_creator01,
    info1: 'Specialized in baking',
    info2: '$10- $30',
    info3: ' string;',
    info4: 'string;',
    location: 'string;',
    products: [0, 1, 2, 3, 4],
  },
  {
    id: 2,
    name: 'Mary Ellis',
    isOnline: true,
    match: '99',
    description: 'test description.',
    message: 'Does this time work for you?',
    image: IMG_creator02,
    info1: 'string;',
    info2: 'string;',
    info3: ' string;',
    info4: 'string;',
    location: 'string;',
    products: [5, 6, 7, 8],
  },
  {
    id: 3,
    name: 'Donna Berry',
    isOnline: true,
    match: '99',
    description: 'test description.',
    message: 'I will let you know!',
    image: IMG_creator03,
    info1: 'string;',
    info2: 'string;',
    info3: ' string;',
    info4: 'string;',
    location: 'string;',
    products: [5, 6, 7, 8],
  },
  {
    id: 4,
    name: 'Goldie Katrin',
    isOnline: true,
    match: '99',
    description: 'test description.',
    message: 'Sorry im busy then',
    image: IMG_creator04,
    info1: 'string;',
    info2: 'string;',
    info3: ' string;',
    info4: 'string;',
    location: 'string;',
    products: [5, 6, 7, 8],
  },
  {
    id: 5,
    name: 'Richard Neilina',
    isOnline: true,
    match: '99',
    description: 'test description.',
    message: 'Sounds good',
    image: IMG_creator05,
    info1: 'string;',
    info2: 'string;',
    info3: ' string;',
    info4: 'string;',
    location: 'string;',
    products: [5, 6, 7, 8],
  },
  {
    id: 6,
    name: 'Brandon Pearson',
    isOnline: true,
    match: '99',
    description: 'test description.',
    message: 'Wonderful!',
    image: IMG_creator06,
    info1: 'string;',
    info2: 'string;',
    info3: ' string;',
    info4: 'string;',
    location: 'string;',
    products: [5, 6, 7, 8],
  },
  {
    id: 7,
    name: 'Owen Wheeler',
    isOnline: true,
    match: '99',
    description: 'test description.',
    message: 'What are you thinking?',
    image: IMG_creator07,
    info1: 'string;',
    info2: 'string;',
    info3: ' string;',
    info4: 'string;',
    location: 'string;',
    products: [5, 6, 7, 8],
  },
  {
    id: 8,
    name: 'Ann Maldonado',
    isOnline: true,
    match: '99',
    description: 'test description.',
    message: 'You free this Tuesday?',
    image: IMG_creator08,
    info1: 'string;',
    info2: 'string;',
    info3: ' string;',
    info4: 'string;',
    location: 'string;',
    products: [5, 6, 7, 8],
  },
];

export const products = [
  {
    id: 0,
    price: '$20.00',
    name: 'Macarons',
    description: '5555',
    image: IMG_product05,
  },
  {
    id: 1,
    price: '$15.00',
    name: 'Chocolate Covered Strawberries',
    description: '1111',
    image: IMG_product01,
  },
  {
    id: 2,
    price: '$15.00',
    name: 'Doughnuts',
    description: '2222',
    image: IMG_product02,
  },
  {
    id: 3,
    price: '$20.00',
    name: 'Cake',
    description: '3333',
    image: IMG_product03,
  },
  {
    id: 4,
    price: '$20.00',
    name: 'Strawberry Cake',
    description: '4444',
    image: IMG_product04,
  },
  {
    id: 5,
    price: '$10.00',
    name: 'Big Blue Earrings',
    description: '4444',
    image: IMG_ME_product01,
  },
  {
    id: 6,
    price: '$8.00',
    name: 'Red Earrings',
    description: '4444',
    image: IMG_ME_product02,
  },
  {
    id: 7,
    price: '$10.00',
    name: 'Clear Earrings',
    description: '4444',
    image: IMG_ME_product03,
  },
  {
    id: 8,
    price: '$8.00',
    name: 'Blue Earrings',
    description: '4444',
    image: IMG_ME_product04,
  },
];

export default data;
