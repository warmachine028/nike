import { facebook, instagram, shieldTick, support, truckFast, twitter, github } from '../assets/icons';
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  customer3,
  customer4,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3
} from '../assets/images';

export const navLinks = [
  { href: '/#home', label: 'Home' },
  { href: '/#about-us', label: 'About Us' },
  { href: '/#products', label: 'Products' },
  { href: '/#contact-us', label: 'Contact Us' }
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3
  }
];

export const statistics = [
  { value: '1k+', label: 'Brands' },
  { value: '500+', label: 'Shops' },
  { value: '250k+', label: 'Customers' }
];

export const products = [
  {
    productId: 100,
    imgURL: shoe4,
    name: 'Nike Air Jordan-01',
    price: 200.2
  },
  {
    productId: 101,
    imgURL: shoe5,
    name: 'Nike Air Jordan-10',
    price: 210.2
  },
  {
    productId: 102,
    imgURL: shoe6,
    name: 'Nike Air Jordan-100',
    price: 220.2
  },
  {
    productId: 103,
    imgURL: shoe7,
    name: 'Nike Air Jordan-001',
    price: 230.2
  }
];

export const services = [
  {
    imgURL: truckFast,
    label: 'Free shipping',
    subtext: 'Enjoy seamless shopping with our complimentary shipping service.'
  },
  {
    imgURL: shieldTick,
    label: 'Secure Payment',
    subtext: 'Experience worry-free transactions with our secure payment options.'
  },
  {
    imgURL: support,
    label: 'Love to help you',
    subtext: 'Our dedicated team is here to assist you every step of the way.'
  }
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: 'Morich Brown',
    rating: 4.5,
    feedback: 'The attention to detail and the quality of the product exceeded my expectations. Highly recommended!'
  },
  {
    imgURL: customer2,
    customerName: 'Lota Mongeskar',
    rating: 4.5,
    feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
  },
  {
    imgURL: customer3,
    customerName: 'Ramesh Aggarwal',
    rating: 4.3,
    feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
  },
  {
    imgURL: customer4,
    customerName: 'Christina Yu',
    rating: 4.3,
    feedback:
      'I got a pair of boots from nike and I’m very satisfied. They are high-quality and worth the money. The store also offered free shipping at that price so that’s a plus!'
  }
];

export const footerLinks = [
  {
    title: 'Products',
    links: [
      { name: 'Air Force 1', link: '/' },
      { name: 'Air Max 1', link: '/' },
      { name: 'Air Jordan 1', link: '/' },
      { name: 'Air Force 2', link: '/' },
      { name: 'Nike Waffle Racer', link: '/' },
      { name: 'Nike Cortez', link: '/' }
    ]
  },
  {
    title: 'Help',
    links: [
      { name: 'About us', link: '/#about-us' },
      { name: 'FAQs', link: '/' },
      { name: 'How it works', link: '/' },
      { name: 'Privacy policy', link: '/' },
      { name: 'Payment policy', link: '/' }
    ]
  },
  {
    title: 'Get in touch',
    links: [
      { name: 'customer@nike.com', link: 'mailto:customer@nike.com' },
      { name: '+92554862354', link: 'tel:+92554862354' }
    ]
  }
];

// add URL for these links
export const socialMedia = [
  { src: facebook, alt: 'facebook logo', link: 'secialMedia-example.com' },
  { src: twitter, alt: 'twitter logo', link: 'secialMedia-example.com' },
  { src: instagram, alt: 'instagram logo', link: 'secialMedia-example.com' },
  {
    src: github,
    alt: 'github logo',
    link: 'https://github.com/warmachine028/nike'
  }
];

export const cartItems = [
  {
    id: 1,
    name: 'Nike Air Max 2019',
    size: '36EU - 4US',
    price: 1259.0,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1588484628369-dd7a85bfdc38?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60'
  },
  {
    id: 2,
    name: 'Nike Air Max 2019',
    size: '36EU - 4US',
    price: 1259.0,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60'
  }
];
