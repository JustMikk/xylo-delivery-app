import home from '../assets/icons/home.png';
import menu from '../assets/icons/menu.png';
import favourites from '../assets/icons/favourites.png';
import myOrders from '../assets/icons/my-orders.png';
import help from '../assets/icons/help.png';
import fingerprint from '../assets/icons/fingerprint.png';
import fingerprintLarge from '../assets/icons/fingerprint-large.png';
import google from '../assets/icons/google.png';
import apple from '../assets/icons/apple.png';
import back from '../assets/icons/back.png';
import eye from '../assets/icons/eye.png';
import search from '../assets/icons/filter.png';
import cart from '../assets/icons/cart.png';
import notification from '../assets/icons/notification.png';
import profile from '../assets/icons/profile.png';
import star from '../assets/icons/star.png';

// Category Icons
import snacks from '../assets/icons/category/snacks.png';
import meal from '../assets/icons/category/meal.png';
import vegan from '../assets/icons/category/vegan.png';
import dessert from '../assets/icons/category/dessert.png';
import drinks from '../assets/icons/category/drinks.png';

export const icons = {
  home,
  menu,
  favourites,
  myOrders,
  help,
  fingerprint,
  fingerprintLarge,
  google,
  apple,
  back,
  eye,
  search,
  cart,
  notification,
  profile,
  star,
  category: {
    snacks,
    meal,
    vegan,
    dessert,
    drinks,
  }
} as const;
