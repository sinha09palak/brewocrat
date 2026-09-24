export interface MenuItem {
  id: string;
  name: string;
  category: 'Craft Beer' | 'Starters' | 'Burgers' | 'Main Course' | 'Pizza' | 'Drinks' | 'Desserts';
  price: number;
  description: string;
  isVeg: boolean;
  isSignature?: boolean;
  isBestseller?: boolean;
  imageUrl: string;
  beerPairing?: string;
  alcoholByVolume?: string;
  spiceLevel?: 'Mild' | 'Medium' | 'Hot' | 'None';
  prepTime?: string;
}

export interface BeerStyle {
  id: string;
  name: string;
  type: string;
  abv: string;
  ibu: string;
  color: string;
  notes: string;
  description: string;
  tasteProfile: {
    malt: number;
    hops: number;
    sweetness: number;
    crispness: number;
  };
}

export interface Offer {
  id: string;
  title: string;
  badge: string;
  discount: string;
  description: string;
  validity: string;
  terms: string;
  code?: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  review: string;
  verified: boolean;
  avatarBg: string;
  recommendedItem?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Food' | 'Drinks' | 'Ambience' | 'Events' | 'People';
  imageUrl: string;
  aspectRatio: string;
  caption: string;
}

export const RESTAURANT_INFO = {
  name: 'Brewocrat',
  tagline: 'Brewery • Skybar • Kitchen',
  headline: 'Raise a Glass. Make It a Night.',
  subheadline: 'Crafted brews, bold flavours and unforgettable nights in the heart of Gurugram.',
  phone: '073032 03535',
  internationalPhone: '+917303203535',
  whatsapp: '917303203535',
  address: '2nd Floor, Element One Mall, Malibu Towne, Block A, Sector 47, Gurugram, Haryana 122008',
  hours: 'Open Today • 12:00 PM – 12:00 AM',
  rating: 4.4,
  reviewCount: '3,000+',
  vibes: '100% Good Vibes',
  googleMapsUrl: 'https://maps.google.com/?q=Element+One+Mall+Sector+47+Gurugram+Brewocrat',
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.309201463162!2d77.0517!3d28.4312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d180b55555555%3A0x6b9d6281e85f096!2sElement%20One%20Mall!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin'
};

export const BEER_STYLES: BeerStyle[] = [
  {
    id: 'crisp-lager',
    name: 'Brewocrat Crisp Lager',
    type: 'Classic German Pilsner Style',
    abv: '4.8% ABV',
    ibu: '22 IBU',
    color: '#E5A93B',
    notes: 'Clean noble hops, golden barley, crisp dry finish',
    description: 'Light, refreshing and perfectly balanced. Fermented slow and cold for extraordinary purity and a sparkling golden pour.',
    tasteProfile: { malt: 65, hops: 55, sweetness: 30, crispness: 95 }
  },
  {
    id: 'belgian-wit',
    name: 'Malibu Belgian Wit',
    type: 'Bavarian Wheat & Citrus Infusion',
    abv: '5.2% ABV',
    ibu: '16 IBU',
    color: '#F4D06F',
    notes: 'Valencia orange peel, cracked coriander, hazy wheat body',
    description: 'Smooth, citrusy and intensely aromatic. An unfiltered sun-drenched wheat ale with velvety mouthfeel and subtle spicy whispers.',
    tasteProfile: { malt: 50, hops: 35, sweetness: 60, crispness: 85 }
  },
  {
    id: 'dark-ale',
    name: 'Sector 47 Dark Stout',
    type: 'Roasted Imperial Dark Ale',
    abv: '6.4% ABV',
    ibu: '38 IBU',
    color: '#2B170B',
    notes: 'Espresso crema, dark cocoa nibs, toasted caramel malt',
    description: 'Rich, roasted and full-bodied. A decadent dark brew that envelops the palate with roasted malt warmth and velvety dark chocolate nuance.',
    tasteProfile: { malt: 90, hops: 60, sweetness: 45, crispness: 40 }
  },
  {
    id: 'juicy-ipa',
    name: 'Skyline Hazy IPA',
    type: 'New England Hazy IPA',
    abv: '6.0% ABV',
    ibu: '45 IBU',
    color: '#F9844A',
    notes: 'Passionfruit, ripe mango, double dry-hopped mosaic',
    description: 'Bursting with tropical aromatics, thick haze, and soft pillowy bitterness that lingers with notes of ripe stone fruit.',
    tasteProfile: { malt: 60, hops: 90, sweetness: 50, crispness: 75 }
  },
  {
    id: 'apple-cider',
    name: 'Himalayan Orchard Cider',
    type: 'Artisanal Spiced Craft Cider',
    abv: '4.5% ABV',
    ibu: '10 IBU',
    color: '#F9C74F',
    notes: 'Crisp Shimla red apples, hints of cinnamon & green pear',
    description: 'Naturally fermented with fresh pressed Himalayan apples. Semi-dry, lively effervescence, and clean juicy finish.',
    tasteProfile: { malt: 20, hops: 10, sweetness: 75, crispness: 90 }
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // CRAFT BEER
  {
    id: 'beer-lager-mug',
    name: 'Brewocrat Fresh Tap Golden Lager (500ml)',
    category: 'Craft Beer',
    price: 375,
    description: 'Freshly poured directly from our on-site microbrewery fermentation tanks. Crisp Bavarian noble hops, golden malt body, and a clean, refreshing finish.',
    isVeg: true,
    isSignature: true,
    isBestseller: true,
    imageUrl: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=800&q=80',
    beerPairing: 'Brewocrat Smashed Burger',
    alcoholByVolume: '4.8% ABV',
    prepTime: 'Fresh from tap'
  },

  // BURGERS
  {
    id: 'burger-signature-double',
    name: 'Brewocrat Smashed Double Cheeseburger',
    category: 'Burgers',
    price: 495,
    description: 'Two juicy smashed patties, double melted cheddar, caramelized beer-braised onion jam, and dill pickles in toasted brioche.',
    isVeg: false,
    isSignature: true,
    isBestseller: true,
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    beerPairing: 'Crisp Golden Lager',
    spiceLevel: 'Mild',
    prepTime: '15 mins'
  },

  // STARTERS
  {
    id: 'starter-peri-wings',
    name: 'Smoked Hickory & Buffalo Peri-Peri Wings',
    category: 'Starters',
    price: 445,
    description: 'Crispy chicken wings glazed in spicy peri-peri and smoked hickory sauce, served with cool garlic dip and fresh celery.',
    isVeg: false,
    isBestseller: true,
    imageUrl: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
    beerPairing: 'Crisp Golden Lager',
    spiceLevel: 'Hot',
    prepTime: '14 mins'
  },

  // PIZZA
  {
    id: 'pizza-burrata-truffle',
    name: 'Wood-Fired Rustic Salami & Pepperoni Pizza',
    category: 'Pizza',
    price: 595,
    description: 'Stone-baked blistered sourdough crust, San Marzano tomato coulis, artisanal sliced pepperoni, molten mozzarella cheese, and fragrant basil.',
    isVeg: false,
    isSignature: true,
    imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    beerPairing: 'Belgian Wit',
    spiceLevel: 'Mild',
    prepTime: '15 mins'
  },

  // MAIN COURSE
  {
    id: 'main-butter-chicken-rooftop',
    name: 'Smoked Claypot Butter Chicken & Garlic Naan',
    category: 'Main Course',
    price: 575,
    description: 'Tandoor-charred chicken simmered in rich velvety tomato, butter and fenugreek gravy, served piping hot with butter garlic naan.',
    isVeg: false,
    isSignature: true,
    imageUrl: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
    beerPairing: 'Belgian Wit',
    spiceLevel: 'Mild',
    prepTime: '18 mins'
  },

  // DRINKS / COCKTAILS
  {
    id: 'drink-smoke-skyline',
    name: 'Skybar Smoked Amber Old Fashioned',
    category: 'Drinks',
    price: 575,
    description: 'Premium bourbon stirred with spiced craft reduction, Angostura bitters, expressed orange peel, served over clear ice.',
    isVeg: true,
    isSignature: true,
    imageUrl: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
    alcoholByVolume: 'Craft Cocktail',
    prepTime: '5 mins'
  },

  // DESSERTS
  {
    id: 'dessert-stout-tiramisu',
    name: 'Brewmaster Stout Espresso Tiramisu',
    category: 'Desserts',
    price: 395,
    description: 'Artisanal ladyfingers soaked in dark roasted stout and espresso, layered with whipped mascarpone and dark Belgian cocoa.',
    isVeg: true,
    isSignature: true,
    imageUrl: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80',
    beerPairing: 'Sector 47 Dark Stout',
    prepTime: '10 mins'
  }
];

export const SIGNATURE_ITEMS = MENU_ITEMS.filter(item => item.isSignature);

export const EXPERIENCE_TAGS = [
  { label: 'Craft Brews', icon: '🍺', desc: 'Brewed fresh on-premise in stainless steel tanks' },
  { label: 'Live Music', icon: '🎵', desc: 'Acoustic sets & DJ nights every weekend' },
  { label: 'Fireplace', icon: '🔥', desc: 'Cozy glowing fire pits on the rooftop' },
  { label: 'Skybar Ambience', icon: '🌃', desc: 'Gurugram skyline panoramic night view' },
  { label: 'Gourmet Comfort Food', icon: '🍔', desc: 'Artisanal burgers, woodfired pizzas & curries' },
  { label: 'Outdoor Seating', icon: '✨', desc: 'Breezy open terrace under the stars' }
];

export const INITIAL_OFFERS: Offer[] = [
  {
    id: 'offer-1',
    title: 'Dineout & Zomato Gold Special',
    badge: 'Limited Period',
    discount: 'FLAT 30% OFF',
    description: 'Available on total dining bill through selected dining platforms or direct table reservations on weekdays.',
    validity: 'Mon – Thu, All Day',
    terms: 'Applicable on food & soft beverages. Prior reservation advised.',
    code: 'BREW30'
  },
  {
    id: 'offer-2',
    title: 'Brewmaster Happy Hours',
    badge: 'Popular',
    discount: '1 + 1 ON FRESH CRAFT TAPS',
    description: 'Order any 500ml fresh craft beer or pitcher and get the second one on the house.',
    validity: 'Daily • 12:00 PM – 06:00 PM',
    terms: 'Valid on in-house microbrewery beers.',
    code: 'HAPPYBREW'
  },
  {
    id: 'offer-3',
    title: 'Corporate Skybar Evenings',
    badge: 'Groups',
    discount: '20% OFF GROUP BILLS',
    description: 'Special package for team dinners and corporate mixers with complimentary chef’s snack platter.',
    validity: 'Sundays – Thursdays',
    terms: 'Valid for tables of 6 guests or more with valid company ID.',
    code: 'CORP47'
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-1',
    name: 'Aarav Malhotra',
    rating: 5,
    date: '2 weeks ago',
    review: 'One of the best rooftop microbreweries in Gurugram! The Fresh Tap Golden Lager is crisp with noble hops. We ordered the double smashed burger and wood-fired pepperoni pizza — both top notch. Ambience in the evening with the breezy terrace is unbeatable.',
    verified: true,
    avatarBg: 'bg-amber-600',
    recommendedItem: 'Fresh Tap Golden Lager & Smashed Burger'
  },
  {
    id: 'rev-2',
    name: 'Meera Sengupta',
    rating: 5,
    date: '1 month ago',
    review: 'Loved the skybar aesthetic! Element One Mall has easy valet parking. We had a party of 8 on a Friday evening. Live music had the entire terrace vibing. The staff is polite, fast, and the wood-fired pizza was truly artisanal.',
    verified: true,
    avatarBg: 'bg-emerald-600',
    recommendedItem: 'Wood-Fired Rustic Pepperoni Pizza'
  },
  {
    id: 'rev-3',
    name: 'Rohan Deshmukh',
    rating: 4,
    date: '3 weeks ago',
    review: 'Dark luxury vibe with warm golden lights. Great for dates as well as after-work drinks with colleagues. The Smashed Double Cheeseburger with beer-onion jam is genuinely gourmet. Highly recommend reserving a table on weekends.',
    verified: true,
    avatarBg: 'bg-purple-600',
    recommendedItem: 'Brewocrat Smashed Cheeseburger'
  },
  {
    id: 'rev-4',
    name: 'Priyanka Sharma',
    rating: 5,
    date: '2 months ago',
    review: 'The Stout Tiramisu is a masterpiece! And the open rooftop terrace overlooking Sector 47 feels so spacious. Flat 30% discount on weekday lunch makes it an incredible value too. 10/10 vibes.',
    verified: true,
    avatarBg: 'bg-rose-600',
    recommendedItem: 'Stout Espresso Tiramisu'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Skybar Rooftop Under Golden Lights',
    category: 'Ambience',
    imageUrl: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80',
    aspectRatio: 'aspect-4/3',
    caption: 'Vibrant open-air rooftop terrace with glowing amber lights and panoramic skyline.'
  },
  {
    id: 'gal-2',
    title: 'Brewery Bar Tap Counter',
    category: 'Drinks',
    imageUrl: 'https://images.unsplash.com/photo-1575037614876-c38a4d44f5b8?auto=format&fit=crop&w=800&q=80',
    aspectRatio: 'aspect-4/3',
    caption: 'Custom brass beer taps dispensing fresh craft beers chilled to perfection.'
  },
  {
    id: 'gal-3',
    title: 'Gourmet Smashed Cheeseburger',
    category: 'Food',
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    aspectRatio: 'aspect-4/3',
    caption: 'Signature double smashed patty burger with beer-onion jam.'
  },
  {
    id: 'gal-4',
    title: 'Live Acoustic Weekend Sessions',
    category: 'Events',
    imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
    aspectRatio: 'aspect-4/3',
    caption: 'Live acoustic musicians bringing soulful indie rhythms and warm melodies to the skybar.'
  },
  {
    id: 'gal-5',
    title: 'Craft Brews With Friends',
    category: 'People',
    imageUrl: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80',
    aspectRatio: 'aspect-4/3',
    caption: 'Raising pints and celebrating memorable evenings under Gurugram\'s night sky.'
  },
  {
    id: 'gal-6',
    title: 'Wood-Fired Rustic Pepperoni Pizza',
    category: 'Food',
    imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    aspectRatio: 'aspect-4/3',
    caption: 'Artisanal sliced pepperoni, mozzarella and blistered crust from our wood-fired oven.'
  }
];
