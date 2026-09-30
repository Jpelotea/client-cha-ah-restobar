export interface MenuItem {
  id: string;
  name: string;
  thaiName?: string;
  category: 'thai' | 'filipino' | 'american' | 'cocktails' | 'coffee-matcha' | 'desserts';
  categoryLabel: string;
  price: number;
  description: string;
  image: string;
  tags: string[];
  spicyLevel?: 0 | 1 | 2 | 3;
  popular?: boolean;
  pairing?: string;
  ingredients?: string[];
}

export const MENU_ITEMS: MenuItem[] = [
  // Thai Signatures
  {
    id: 'pad-thai-special',
    name: "Cha'ah Signature Pad Thai",
    thaiName: "ผัดไทยกุ้งสด",
    category: 'thai',
    categoryLabel: 'Thai Fusion',
    price: 360,
    description: 'Wok-tossed rice noodles with succulent tiger prawns, pressed tofu, bean sprouts, crushed roasted peanuts, lime, and our tamarind palm-sugar glaze.',
    image: '/src/assets/images/food_pad_thai_fusion_1790732234875.jpg',
    tags: ["Chef's Signature", 'Nut Allergy Alert'],
    spicyLevel: 1,
    popular: true,
    pairing: 'Mango Spiced Margarita or Thai Iced Tea',
    ingredients: ['Rice Noodles', 'Tiger Prawns', 'Tofu', 'Tamarind Paste', 'Roasted Peanuts', 'Garlic Chives', 'Fresh Lime']
  },
  {
    id: 'thai-chow-mein',
    name: 'Cha\'ah Double Noodle Stir-Fry',
    thaiName: 'บะหมี่ผัดขี้เมา',
    category: 'thai',
    categoryLabel: 'Thai Fusion',
    price: 340,
    description: 'A savory collision of wide flat rice noodles and egg noodles, wok-charred with tender pork strips, holy basil, bell peppers, and oyster chili sauce.',
    image: '/src/assets/images/food_pad_thai_fusion_1790732234875.jpg',
    tags: ['Best Seller', 'Wok Hei Charred'],
    spicyLevel: 2,
    popular: true,
    pairing: 'Chilled Amaretto Sour',
    ingredients: ['Flat Rice Noodles', 'Egg Noodles', 'Marinated Pork', 'Thai Holy Basil', 'Bell Peppers', 'Garlic Chili Glaze']
  },
  {
    id: 'crispy-thai-spring-rolls',
    name: 'Thai Golden Crispy Spring Rolls',
    thaiName: 'ปอเปี๊ยะทอด',
    category: 'thai',
    categoryLabel: 'Thai Fusion',
    price: 240,
    description: 'Crisp golden rolls packed with glass noodles, shredded wood-ear mushrooms, minced pork, and fresh cilantro, served with homemade sweet chili dip.',
    image: '/src/assets/images/food_pad_thai_fusion_1790732234875.jpg',
    tags: ['Appetizer', 'Crispy'],
    spicyLevel: 1,
    popular: false,
    pairing: 'Garden Peach Fizz Mocktail',
    ingredients: ['Crispy Spring Roll Pastry', 'Glass Noodles', 'Wood-ear Mushrooms', 'Sweet Chili Vinegar Dip']
  },

  // Filipino Fusion
  {
    id: 'special-sisig',
    name: "Cha'ah Sizzling Special Sisig",
    category: 'filipino',
    categoryLabel: 'Filipino Classics',
    price: 320,
    description: 'Our award-winning sizzling pork sisig crisp-fried to perfection, tossed with chicken liver emulsion, shallots, calamansi, bird’s eye chilies, and capped with a fresh farm egg.',
    image: '/src/assets/images/food_crispy_sisig_karekare_1790732250636.jpg',
    tags: ["Restobar Icon", 'Sizzling'],
    spicyLevel: 2,
    popular: true,
    pairing: 'Draft Cold Brew Beer or Citrus Tequila Sunrise',
    ingredients: ['Crisp Pork Cheek & Jowl', 'Fresh Calamansi', 'Shallots', 'Bird\'s Eye Chili', 'Farm Egg']
  },
  {
    id: 'pork-kare-kare',
    name: 'Slow-Simmered Pork Kare-Kare',
    category: 'filipino',
    categoryLabel: 'Filipino Classics',
    price: 380,
    description: 'Tender pork belly cooked in our rich ground peanut and annatto sauce, complemented by charred eggplant, string beans, baby bok choy, and house-made shrimp paste.',
    image: '/src/assets/images/food_crispy_sisig_karekare_1790732250636.jpg',
    tags: ['Traditional Favorite', 'Nut-rich'],
    spicyLevel: 0,
    popular: true,
    pairing: 'Lychee Licious Mocktail or Classic San Miguel',
    ingredients: ['Pork Belly', 'Ground Roasted Peanuts', 'Annatto', 'Eggplant', 'Baby Bok Choy', 'Artisanal Bagoong']
  },
  {
    id: 'spicy-tuna-kinilaw',
    name: 'Mindanao Fresh Tuna Kinilaw',
    category: 'filipino',
    categoryLabel: 'Filipino Classics',
    price: 310,
    description: 'Sashimi-grade yellowfin tuna cured in native coconut vinegar, fresh ginger, red onions, cucumber, toasted sesame seeds, and tabon-tabon extract.',
    image: '/src/assets/images/food_crispy_sisig_karekare_1790732250636.jpg',
    tags: ['Fresh Catch', 'Gluten-Free'],
    spicyLevel: 2,
    popular: false,
    pairing: 'Tropic Breeze Rum Cocktail',
    ingredients: ['Yellowfin Tuna', 'Coconut Vinegar', 'Ginger', 'Cucumber', 'Bird\'s Eye Chili', 'Sesame Seeds']
  },
  {
    id: 'garlic-pepper-spare-ribs',
    name: 'Glazed Garlic & Black Pepper Ribs',
    category: 'filipino',
    categoryLabel: 'Filipino Classics',
    price: 390,
    description: 'Fall-off-the-bone pork spare ribs caramelized in native garlic, sticky dark soy reduction, crushed black peppercorns, and fresh red chilies.',
    image: '/src/assets/images/food_crispy_sisig_karekare_1790732250636.jpg',
    tags: ['Hearty', 'Chef Favorite'],
    spicyLevel: 1,
    popular: true,
    pairing: 'Thai Chow Caipirinha',
    ingredients: ['Pork Spare Ribs', 'Native Garlic', 'Dark Palm Soy', 'Cracked Peppercorn', 'Banana Leaf Base']
  },

  // American Comfort
  {
    id: 'chaah-angus-burger',
    name: 'The Cha\'ah Prime Burger',
    category: 'american',
    categoryLabel: 'American Comfort',
    price: 345,
    description: 'Thick grilled beef patty topped with melted cheddar, crisp lola rosa lettuce, caramelized onions, house relish, and crinkle seasoned fries with signature dip.',
    image: '/src/assets/images/hero_chaah_interior_dining_1790732221973.jpg',
    tags: ['Comfort Classic', 'With Fries'],
    spicyLevel: 0,
    popular: true,
    pairing: 'Iced Americano or Negroni',
    ingredients: ['100% Beef Patty', 'Toasted Brioche', 'Cheddar', 'Caramelized Onions', 'Crinkle Fries', 'House Garlic Dip']
  },
  {
    id: 'triple-club-sandwich',
    name: 'Artisan Toasted Club Sandwich',
    category: 'american',
    categoryLabel: 'American Comfort',
    price: 295,
    description: 'Triple-decker toasted rustic bread stacked with smoked ham, roasted chicken breast, fried egg, crisp lettuce, tomatoes, and golden crinkle fries.',
    image: '/src/assets/images/hero_chaah_interior_dining_1790732221973.jpg',
    tags: ['All-Day Breakfast', 'With Fries'],
    spicyLevel: 0,
    popular: false,
    pairing: 'Spanish Latte or Cafe Mocha',
    ingredients: ['Toasted Artisan Bread', 'Smoked Ham', 'Grilled Chicken', 'Farm Egg', 'Cheddar', 'Crinkle Cut Fries']
  },

  // Craft Cocktails & Bar
  {
    id: 'mango-spiced-margarita',
    name: 'Mango Spiced Chili Margarita',
    category: 'cocktails',
    categoryLabel: 'Craft Cocktails',
    price: 279,
    description: 'Tequila blanco, ripe Guimaras mango purée, fresh lime juice, triple sec, shaken with bird’s eye chili infusion and a spicy Tajin-salt rim.',
    image: '/src/assets/images/drinks_cocktails_matcha_1790732261455.jpg',
    tags: ['Cha\'ah Signature', 'Spicy Cocktail'],
    spicyLevel: 2,
    popular: true,
    pairing: 'Special Sisig or Garlic Ribs',
    ingredients: ['Tequila Blanco', 'Sweet Mango Puree', 'Fresh Lime Juice', 'Chili Tincture', 'Tajin Salt Rim']
  },
  {
    id: 'tropic-breeze-rum',
    name: 'Tropic Breeze Tiki Punch',
    category: 'cocktails',
    categoryLabel: 'Craft Cocktails',
    price: 279,
    description: 'Premium dark and coconut rum blended with fresh pineapple juice, passionfruit syrup, citrus bitters, served over crushed ice with pineapple garnish.',
    image: '/src/assets/images/drinks_cocktails_matcha_1790732261455.jpg',
    tags: ['Tropical', 'Tiki Glass'],
    spicyLevel: 0,
    popular: true,
    pairing: 'Crispy Spring Rolls or Tuna Kinilaw',
    ingredients: ['Aged Rum', 'Coconut Rum', 'Pineapple Juice', 'Passionfruit', 'Angostura Bitters']
  },
  {
    id: 'thai-chow-caipirinha',
    name: 'Thai Chow Ginger Caipirinha',
    category: 'cocktails',
    categoryLabel: 'Craft Cocktails',
    price: 279,
    description: 'Muddled fresh kaffir lime leaves, fresh ginger root, brown sugar crystals, and premium sugarcane spirit served frosty cold.',
    image: '/src/assets/images/drinks_cocktails_matcha_1790732261455.jpg',
    tags: ['Herbal', 'Refreshing'],
    spicyLevel: 0,
    popular: false,
    pairing: 'Pad Thai or Burger',
    ingredients: ['Cachaca/Sugarcane Rum', 'Muddled Limes', 'Kaffir Lime Leaves', 'Fresh Ginger', 'Raw Cane Sugar']
  },
  {
    id: 'classic-amaretto-sour',
    name: 'Velvet Amaretto Sour',
    category: 'cocktails',
    categoryLabel: 'Craft Cocktails',
    price: 279,
    description: 'Disaronno amaretto, Kentucky bourbon splash, fresh lemon juice, egg white emulsion for a silky smooth foam cap, topped with a cocktail cherry.',
    image: '/src/assets/images/drinks_cocktails_matcha_1790732261455.jpg',
    tags: ['Classic', 'Silky'],
    spicyLevel: 0,
    popular: false,
    pairing: 'Artisan Club Sandwich',
    ingredients: ['Amaretto Liqueur', 'Bourbon', 'Lemon Juice', 'Egg White Froth', 'Maraschino Cherry']
  },

  // Coffee & Matcha Series
  {
    id: 'berry-matcha-latte',
    name: 'Artisan Berry Matcha Latte',
    category: 'coffee-matcha',
    categoryLabel: 'Matcha & Coffee',
    price: 189,
    description: 'Ceremonial grade Japanese Uji matcha poured over velvety full cream milk and a layered base of real strawberry purée, finished with whipped cream.',
    image: '/src/assets/images/drinks_cocktails_matcha_1790732261455.jpg',
    tags: ['Instagram Hit', 'Iced Series'],
    spicyLevel: 0,
    popular: true,
    ingredients: ['Uji Matcha', 'Fresh Strawberry Reduction', 'Full Cream Milk', 'Whipped Cream']
  },
  {
    id: 'spanish-latte-iced',
    name: 'Cha\'ah Spanish Iced Latte',
    category: 'coffee-matcha',
    categoryLabel: 'Matcha & Coffee',
    price: 159,
    description: 'Double shot of locally roasted Arabica espresso poured over sweetened condensed milk and silky steamed milk over crystal ice cubes.',
    image: '/src/assets/images/drinks_cocktails_matcha_1790732261455.jpg',
    tags: ['Coffee', 'Best Seller'],
    spicyLevel: 0,
    popular: true,
    ingredients: ['Double Espresso', 'Condensed Milk', 'Fresh Milk', 'Ice']
  },
  {
    id: 'minted-kiwi-mocktail',
    name: 'Garden Minted Kiwi Fizz',
    category: 'coffee-matcha',
    categoryLabel: 'Matcha & Coffee',
    price: 149,
    description: 'Sparkling refreshing mocktail with muddled fresh kiwifruit, garden mint leaves, calamansi citrus zest, and chilled club soda.',
    image: '/src/assets/images/drinks_cocktails_matcha_1790732261455.jpg',
    tags: ['Non-Alcoholic', 'Zero Proof'],
    spicyLevel: 0,
    popular: false,
    ingredients: ['Fresh Kiwi', 'Garden Mint', 'Calamansi', 'Club Soda']
  },

  // Desserts
  {
    id: 'mango-popping-boba-toast',
    name: 'Golden Mango & Coconut Ice Cream Toast',
    category: 'desserts',
    categoryLabel: 'Signature Sweets',
    price: 289,
    description: 'Warm buttery Shibuya honey brick toast topped with rich coconut and mango ice cream, sweet mango slices, mango popping boba pearls, and wafer rolls.',
    image: '/src/assets/images/dessert_toast_icecream_1790732274920.jpg',
    tags: ['Cha\'ah Signature', 'Dessert Star'],
    spicyLevel: 0,
    popular: true,
    pairing: 'Spanish Latte or Espresso',
    ingredients: ['Brioche Honey Brick Toast', 'Artisanal Mango Ice Cream', 'Coconut Ice Cream', 'Mango Popping Boba', 'Crispy Wafers']
  },
  {
    id: 'thai-tea-ice-cream',
    name: 'Creamy Thai Tea Ice Cream Bowl',
    thaiName: 'ไอศกรีมชาไทย',
    category: 'desserts',
    categoryLabel: 'Signature Sweets',
    price: 299,
    description: 'Handcrafted rich ice cream infused with authentic Ceylon black tea and condensed milk, garnished with toasted coconut flakes and pandan drizzle.',
    image: '/src/assets/images/dessert_toast_icecream_1790732274920.jpg',
    tags: ['Thai Traditional', 'House Churned'],
    spicyLevel: 0,
    popular: false,
    pairing: 'Long Black Coffee',
    ingredients: ['Thai Ceylon Tea Leaves', 'Sweet Cream', 'Pandan Syrup', 'Toasted Coconut']
  }
];

export const SUNDAY_BUFFET_DETAILS = {
  price: 649,
  currency: 'PHP',
  schedule: [
    { title: 'Unlimited Lunch Feast', time: '10:30 AM – 2:30 PM', note: 'Full spread with live carving & noodle stations' },
    { title: 'À la Carte & Happy Hour', time: '2:30 PM – 4:30 PM', note: '20% off selected refreshments & specialty cocktails' },
    { title: 'Unlimited Dinner Gala', time: '5:30 PM – 10:00 PM', note: 'Evening banquet with live acoustic band performance' }
  ],
  features: [
    'Unlimited Thai Pad Thai, Curry & Stir-Fried Specialties',
    'Unlimited Filipino Lechon, Sisig & Kare-Kare Station',
    'American Carvery, Sliders & Crispy Sides',
    'Free Souvenir & Raffle Entry for Every Diner',
    '20% Off All Specialty Cocktails, Frappes & Desserts',
    'Live Acoustic Music in our Cozy Indoor Patio'
  ]
};

export const BUSINESS_INFO = {
  name: "Cha'ah Restobar",
  tagline: "A Thai, Filipino & American Fusion Restobar",
  phone: "+63 915 093 8706",
  email: "chaahbyjuyensph@gmail.com",
  address: "CT Montalban Street, near Camella Homes, in front of Alicia's Guest House, Brgy. Villa Kananga, Butuan City",
  city: "Butuan City, Agusan del Norte, Philippines 8600",
  coordinates: {
    lat: 8.9482,
    lng: 125.5342
  },
  social: {
    facebook: "https://www.facebook.com/ChaahRestobar/",
    instagram: "https://www.instagram.com/chaahrestobar",
    tiktok: "https://www.tiktok.com/@chaahrestobar"
  },
  hours: {
    weekday: "Monday – Thursday: 10:30 AM – 10:00 PM",
    weekend: "Friday – Saturday: 10:30 AM – 11:00 PM (Bar extended to 12:00 AM)",
    sunday: "Sunday: Unli Buffet (10:30 AM – 2:30 PM & 5:30 PM – 10:00 PM)"
  }
};

export interface LuminariumAddon {
  id: string;
  name: string;
  category: 'mobile-bar' | 'dessert-station' | 'coffee-station' | 'service-crew';
  paxLabel?: string;
  price: number;
  description: string;
}

export const LUMINARIUM_DETAILS = {
  name: "Luminarium Events Place",
  tagline: "Premier Gathering Venue by Cha'ah Restobar",
  capacityMax: 100,
  basePrice: 12000,
  baseHours: 4,
  succeedingHourPrice: 2500,
  eventTypes: [
    { title: "Corporate Events", subtitle: "Conferences, Seminars & Business Dinners", icon: "briefcase" },
    { title: "Birthdays / Special Occasions", subtitle: "Debuts, Anniversaries & Milestones", icon: "cake" },
    { title: "Small Gatherings / Parties", subtitle: "Reunions, Showers & Intimate Celebrations", icon: "users" }
  ],
  inclusions: [
    "Lights & Sound System",
    "Water Station",
    "Chairs & Table Set-up (as presented)",
    "Staff Assistance (2 Pax)"
  ],
  noCorkage: [
    "Food & Drinks",
    "Backdrop / Decorations"
  ],
  addons: [
    {
      id: "mobile-bar-premium",
      category: "mobile-bar",
      name: "Mobile Bar — Premium Package",
      paxLabel: "50 pax",
      price: 13000,
      description: "Artisan mobile cocktail setup with signature Cha'ah mixed drinks, juices & professional bartenders."
    },
    {
      id: "mobile-bar-vip",
      category: "mobile-bar",
      name: "Mobile Bar — VIP Package",
      paxLabel: "100 pax",
      price: 22500,
      description: "Full-capacity mobile bar service, top-shelf liquor, signature cocktails & dedicated bar staff."
    },
    {
      id: "dessert-station-premium",
      category: "dessert-station",
      name: "Dessert Station — Premium Package",
      paxLabel: "50 pax",
      price: 10000,
      description: "Decadent dessert spread featuring custom mini pastries, specialty cakes & sweet delicacies."
    },
    {
      id: "coffee-station-classic",
      category: "coffee-station",
      name: "Coffee Station — Classic Package",
      paxLabel: "30 pax",
      price: 7000,
      description: "Freshly brewed artisan coffee, espresso options, condiments & warm cups."
    },
    {
      id: "coffee-station-premium",
      category: "coffee-station",
      name: "Coffee Station — Premium Package",
      paxLabel: "50 pax",
      price: 11000,
      description: "Artisan hot & iced coffee bar, specialty syrups, and Barista service."
    },
    {
      id: "coffee-station-vip",
      category: "coffee-station",
      name: "Coffee Station — VIP Package",
      paxLabel: "100 pax",
      price: 21000,
      description: "Full 100-pax espresso, cold brew & matcha station with dedicated baristas throughout the event."
    },
    {
      id: "service-crew",
      category: "service-crew",
      name: "Additional Service Crew",
      paxLabel: "Per Person",
      price: 500,
      description: "Trained hospitality staff to attend tables, assist dining, and manage guest needs."
    }
  ]
};
