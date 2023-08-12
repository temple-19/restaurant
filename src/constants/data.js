import images from './images';

const wines = [
  {
    title: 'Classic Velvet Delight',
    price: '$56',
    tags: 'Moist red velvet cake layers with luscious cream cheese frosting.',
  },
  {
    title: 'Decadent Chocolate Symphony',
    price: '$59',
    tags: 'Rich chocolate cake harmoniously paired with velvety dark chocolate ganache.',
  },
  {
    title: 'Raspberry Blissful Breeze',
    price: '$44',
    tags: 'Light vanilla cake filled with fresh raspberry compote and delicate buttercream.',
  },
];

const cocktails = [
  {
    title: 'Zesty Lemon Zing Cake',
    price: '$31',
    tags: 'Lemon-infused cake enhanced by a tangy lemon curd filling and citrus buttercream.',
  },
  {
    title: 'Creamy Irish Delight',
    price: '$31',
    tags: 'Indulgent chocolate and stout cake topped with smooth Irish cream frosting',
  },
  {
    title: 'Plain Vanilla Elegance',
    price: '$30',
    tags: 'A classic vanilla cake, the epitome of timeless simplicity.r',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Exquisite Flavor Award',
    subtitle: 'Recognized for our palate-delighting creations.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star Baker',
    subtitle: 'Elevating cake design and taste to new heights.',
  },
  {
    imgUrl: images.award05,
    title: 'Top Tier Hospitality',
    subtitle: 'Delivering unparalleled cake experiences.',
  },
  {
    imgUrl: images.award03,
    title: 'Culinary Mastermind',
    subtitle: 'Crafting confections that redefine indulgence.',
  },
];

export default { wines, cocktails, awards };
