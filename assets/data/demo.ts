import { DataT } from '../../types';

import IMG_creator01 from '../images/creator.jpg';

import IMG_product01 from '../images/product_img_01.jpg';
import IMG_product02 from '../images/product_img_02.jpg';
import IMG_product03 from '../images/product_img_03.jpg';
import IMG_product04 from '../images/product_img_04.jpg';
import IMG_product05 from '../images/product_img_05.jpg';

const data: DataT[] = [
  {
    id: 1,
    name: 'test',
    isOnline: true,
    match: '99',
    description: 'test description.',
    message: 'test message.',
    image: IMG_creator01,
    info1: 'string;',
    info2: 'string;',
    info3: ' string;',
    info4: 'string;',
    location: 'string;',
  },
];

export const products = [
  {
    id: 1,
    price: '11.11',
    name: '1111',
    description: '1111',
    image: IMG_product01,
  },
  {
    id: 1,
    price: '22.22',
    name: '2222',
    description: '2222',
    image: IMG_product02,
  },
  {
    id: 1,
    price: '33.33',
    name: '3333',
    description: '3333',
    image: IMG_product03,
  },
  {
    id: 1,
    price: '44.44',
    name: '4444',
    description: '4444',
    image: IMG_product04,
  },
  {
    id: 1,
    price: '55.55',
    name: '5555',
    description: '5555',
    image: IMG_product05,
  },
];

export default data;
