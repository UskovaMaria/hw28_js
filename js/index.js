import { products, cart} from './data/products.js';

import { renderProduct } from './render/renderProduct.js';

renderProduct('.products', products[0],cart);
renderProduct('.products', products[1]);
renderProduct('.products', products[2]);
renderProduct('.products', products[3]);
renderProduct('.products', products[4]);

