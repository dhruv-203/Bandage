const products = [
  {
    id: "MNNIC3",
    title: "Nike Dri-FIT T-Shirt",
    shortDescription: "Dri-FIT comfort",
    discountedPrice: 2999,
    originalPrice: 3999,
    colors: ["#FF5733", "#C70039", "#900C3F"],
    category: "MEN'S CLOTHING",
    brand: "Nike",
    displayImage:
      "https://images.pexels.com/photos/4378124/pexels-photo-4378124.jpeg",
    ratings: 4,
    reviews: [
      "Very comfortable and stylish. Perfect for workouts.",
      "Excellent fit and quality. Highly recommended.",
    ],
    longDescription:
      "A comfortable and stylish Dri-FIT T-Shirt perfect for workouts and casual wear.",
    overview: [
      "The Nike Dri-FIT T-Shirt offers a sleek and comfortable design, perfect for any athletic activity or casual outing. Made with moisture-wicking fabric, this T-shirt ensures you stay dry and comfortable throughout your day.",
      "Crafted with high-quality materials, it provides a snug fit without compromising on breathability. The vibrant colors and modern design make it a versatile addition to any wardrobe.",
      "Whether you're hitting the gym or lounging at home, this T-shirt delivers both style and performance. The fabric's durability ensures it can withstand repeated wear and washes without losing its shape.",
      "Experience the perfect blend of comfort and functionality with the Nike Dri-FIT T-Shirt, designed to keep you looking and feeling great no matter the occasion.",
    ],
    keyFeatures: [
      {
        "Moisture-Wicking": "Dri-FIT technology keeps you dry",
      },
      {
        Material: "High-quality polyester",
      },
      {
        Fit: "Snug and comfortable",
      },
      {
        Breathability: "Allows air circulation",
      },
      {
        Durability: "Retains shape after wash",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/4378326/pexels-photo-4378326.jpeg",
      "https://images.pexels.com/photos/19459569/pexels-photo-19459569.jpeg",
      "https://images.pexels.com/photos/19261876/pexels-photo-19261876.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/4066296/pexels-photo-4066296.jpeg",
  },
  {
    id: "MNNIF6",
    title: "Nike Joggers",
    shortDescription: "Comfortable joggers",
    discountedPrice: 4999,
    originalPrice: 5999,
    colors: ["#2E86C1", "#1B4F72", "#2874A6"],
    category: "MEN'S CLOTHING",
    brand: "Nike",
    displayImage:
      "https://images.pexels.com/photos/11058029/pexels-photo-11058029.jpeg",
    ratings: 5,
    reviews: [
      "Best joggers ever! Super comfy and stylish.",
      "Great for both workouts and casual wear.",
    ],
    longDescription:
      "High-quality Nike joggers designed for maximum comfort and performance.",
    overview: [
      "Nike joggers offer a blend of comfort and style, making them ideal for both athletic activities and casual outings. The soft fabric ensures a comfortable fit, while the modern design adds a trendy touch to your outfit.",
      "With an elastic waistband and adjustable drawstrings, these joggers provide a secure fit and easy adjustability. The tapered legs and ribbed cuffs enhance the overall look and feel.",
      "Perfect for workouts, jogging, or simply relaxing at home, these joggers deliver on both style and functionality. The fabric is durable and can withstand frequent use and washing.",
      "Experience unparalleled comfort with Nike joggers, designed to keep you looking and feeling great during any activity.",
    ],
    keyFeatures: [
      {
        Material: "Soft and durable fabric",
      },
      {
        Fit: "Elastic waistband with drawstrings",
      },
      {
        Design: "Tapered legs with ribbed cuffs",
      },
      {
        Versatility: "Suitable for workouts and casual wear",
      },
      {
        Durability: "Withstands frequent use",
      },
    ],
    isBestseller: false,
    additionalImages: [
      "https://images.pexels.com/photos/6165114/pexels-photo-6165114.jpeg",
      "https://images.pexels.com/photos/4215840/pexels-photo-4215840.jpeg",
      "https://images.pexels.com/photos/10670128/pexels-photo-10670128.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/16094248/pexels-photo-16094248.jpeg",
  },
  {
    id: "MNNII9",
    title: "Nike Running Shorts",
    shortDescription: "Lightweight shorts",
    discountedPrice: 1999,
    originalPrice: 2499,
    colors: ["#28B463", "#1D8348", "#239B56"],
    category: "MEN'S CLOTHING",
    brand: "Nike",
    displayImage:
      "https://images.pexels.com/photos/10313865/pexels-photo-10313865.jpeg",
    ratings: 4,
    reviews: [
      "Lightweight and comfortable. Great for running.",
      "Excellent quality and fit. Highly recommend.",
    ],
    longDescription:
      "Nike running shorts designed for lightweight comfort and performance.",
    overview: [
      "These Nike running shorts are crafted with lightweight fabric, ensuring maximum comfort and flexibility during your runs. The moisture-wicking material keeps you dry and cool, even during intense workouts.",
      "Featuring an elastic waistband and adjustable drawstrings, these shorts provide a secure and customizable fit. The built-in briefs offer additional support and comfort.",
      "The design includes multiple pockets for convenient storage of small essentials. The fabric's breathability ensures you stay comfortable throughout your run.",
      "Stay ahead of the game with Nike running shorts, designed to enhance your performance and keep you comfortable mile after mile.",
    ],
    keyFeatures: [
      {
        Material: "Lightweight and breathable fabric",
      },
      {
        Fit: "Elastic waistband with drawstrings",
      },
      {
        Support: "Built-in briefs for added comfort",
      },
      {
        Storage: "Multiple pockets for essentials",
      },
      {
        "Moisture-Wicking": "Keeps you dry and cool",
      },
    ],
    isBestseller: false,
    additionalImages: [
      "https://images.pexels.com/photos/7501155/pexels-photo-7501155.jpeg",
      "https://images.pexels.com/photos/18331254/pexels-photo-18331254.jpeg",
      "https://images.pexels.com/photos/220455/pexels-photo-220455.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/8520628/pexels-photo-8520628.jpeg",
  },
  {
    id: "MNNIL3",
    title: "Nike Hoodie",
    shortDescription: "Cozy hoodie",
    discountedPrice: 3999,
    originalPrice: 4999,
    colors: ["#7D3C98", "#512E5F", "#6C3483"],
    category: "MEN'S CLOTHING",
    brand: "Nike",
    displayImage:
      "https://images.pexels.com/photos/16849383/pexels-photo-16849383.jpeg",
    ratings: 5,
    reviews: [
      "Super warm and stylish. Perfect for winter.",
      "Great fit and quality. Love this hoodie.",
    ],
    longDescription:
      "A cozy and stylish Nike hoodie perfect for keeping warm during winter.",
    overview: [
      "The Nike hoodie offers exceptional warmth and comfort, making it perfect for cold weather. The soft fleece lining ensures you stay warm, while the stylish design adds a trendy touch to your winter wardrobe.",
      "Featuring a drawstring hood and kangaroo pocket, this hoodie provides practical functionality along with its stylish appeal. The ribbed cuffs and hem enhance the overall fit.",
      "Ideal for layering or wearing on its own, this hoodie is versatile and suitable for various occasions. The durable fabric ensures it retains its quality and shape after multiple washes.",
      "Stay cozy and stylish with the Nike hoodie, designed to keep you warm and comfortable throughout the winter season.",
    ],
    keyFeatures: [
      {
        Material: "Soft fleece lining",
      },
      {
        Design: "Drawstring hood and kangaroo pocket",
      },
      {
        Fit: "Ribbed cuffs and hem",
      },
      {
        Warmth: "Ideal for cold weather",
      },
      {
        Durability: "Retains quality after washes",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/29733397/pexels-photo-29733397.jpeg",
      "https://images.pexels.com/photos/29709339/pexels-photo-29709339.jpeg",
      "https://images.pexels.com/photos/29709341/pexels-photo-29709341.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/3007355/pexels-photo-3007355.jpeg",
  },
  {
    id: "MNNIO6",
    title: "Nike Track Pants",
    shortDescription: "Comfortable track pants",
    discountedPrice: 3499,
    originalPrice: 4499,
    colors: ["#2980B9", "#1F618D", "#5499C7"],
    category: "MEN'S CLOTHING",
    brand: "Nike",
    displayImage:
      "https://images.pexels.com/photos/9692149/pexels-photo-9692149.jpeg",
    ratings: 4,
    reviews: [
      "Very comfortable and stylish. Great for workouts.",
      "Good quality and fit. Recommended.",
    ],
    longDescription:
      "Comfortable and stylish Nike track pants designed for workouts and casual wear.",
    overview: [
      "Nike track pants offer a perfect blend of comfort and style, ideal for workouts and casual wear. The soft fabric ensures a comfortable fit, while the sleek design adds a modern touch to your outfit.",
      "Featuring an elastic waistband and adjustable drawstrings, these track pants provide a secure fit and easy adjustability. The tapered legs enhance the overall look and feel.",
      "Perfect for workouts, jogging, or simply lounging at home, these track pants deliver on both style and functionality. The fabric is durable and can withstand frequent use and washing.",
      "Experience unparalleled comfort with Nike track pants, designed to keep you looking and feeling great during any activity.",
    ],
    keyFeatures: [
      {
        Material: "Soft and durable fabric",
      },
      {
        Fit: "Elastic waistband with drawstrings",
      },
      {
        Design: "Tapered legs",
      },
      {
        Versatility: "Suitable for workouts and casual wear",
      },
      {
        Durability: "Withstands frequent use",
      },
    ],
    isBestseller: false,
    additionalImages: [
      "https://images.pexels.com/photos/3611797/pexels-photo-3611797.jpeg",
      "https://images.pexels.com/photos/2043476/pexels-photo-2043476.jpeg",
      "https://images.pexels.com/photos/18368140/pexels-photo-18368140.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/11527708/pexels-photo-11527708.jpeg",
  },
  {
    id: "MNLIE3",
    title: "Levi's 501 Original Fit Jeans",
    shortDescription: "Iconic straight fit",
    discountedPrice: 3999,
    originalPrice: 4999,
    colors: ["#1A5276", "#5DADE2", "#21618C"],
    category: "MEN'S CLOTHING",
    brand: "Levi's",
    displayImage:
      "https://images.pexels.com/photos/4109760/pexels-photo-4109760.jpeg",
    ratings: 4,
    reviews: [
      "Classic style and very durable. Fits perfectly.",
      "High quality denim and very comfortable.",
    ],
    longDescription:
      "Levi's 501 Original Fit Jeans offer a timeless straight fit, crafted from high-quality denim for durability and comfort.",
    overview: [
      "Experience the iconic style of Levi's 501 Original Fit Jeans, known for their timeless straight fit and exceptional durability. Made from premium denim, these jeans provide a comfortable fit that lasts.",
      "With a classic design and versatile look, these jeans are perfect for any casual or semi-formal occasion. The high-quality fabric ensures they retain their shape and color even after multiple washes.",
      "Featuring a button fly and five-pocket design, these jeans offer both style and functionality. The sturdy construction guarantees long-lasting wear, making them a reliable addition to your wardrobe.",
      "Upgrade your denim collection with Levi's 501 Original Fit Jeans, designed to deliver both style and comfort for everyday wear.",
    ],
    keyFeatures: [
      {
        Fit: "Straight fit",
      },
      {
        Material: "High-quality denim",
      },
      {
        Design: "Button fly and five-pocket design",
      },
      {
        Durability: "Retains shape and color",
      },
      {
        Comfort: "Provides a comfortable fit",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/11413721/pexels-photo-11413721.jpeg",
      "https://images.pexels.com/photos/14415470/pexels-photo-14415470.jpeg",
      "https://images.pexels.com/photos/29701873/pexels-photo-29701873.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/29632550/pexels-photo-29632550.jpeg",
  },
  {
    id: "MNLIH6",
    title: "Levi's Trucker Jacket",
    shortDescription: "Classic denim jacket",
    discountedPrice: 4499,
    originalPrice: 5499,
    colors: ["#154360", "#2980B9", "#2E86C1"],
    category: "MEN'S CLOTHING",
    brand: "Levi's",
    displayImage:
      "https://images.pexels.com/photos/29672229/pexels-photo-29672229.jpeg",
    ratings: 5,
    reviews: [
      "Great fit and style. Perfect for any season.",
      "High quality and very versatile. Love this jacket.",
    ],
    longDescription:
      "Levi's Trucker Jacket is a classic denim jacket, perfect for layering and adding a stylish touch to any outfit.",
    overview: [
      "The Levi's Trucker Jacket offers a timeless design, perfect for adding a stylish layer to any outfit. Crafted from high-quality denim, this jacket provides both durability and comfort.",
      "With a versatile look, this jacket can be paired with a variety of outfits, making it a wardrobe essential. The classic design and sturdy construction ensure it remains a favorite for years to come.",
      "Featuring a button-front closure and multiple pockets, this jacket offers both style and functionality. The durable fabric can withstand frequent wear and washing, retaining its quality over time.",
      "Elevate your style with the Levi's Trucker Jacket, designed to deliver both fashion and comfort for any season.",
    ],
    keyFeatures: [
      {
        Material: "High-quality denim",
      },
      {
        Design: "Button-front closure",
      },
      {
        Fit: "Classic fit",
      },
      {
        Versatility: "Pairs with a variety of outfits",
      },
      {
        Durability: "Retains quality over time",
      },
    ],
    isBestseller: false,
    additionalImages: [
      "https://images.pexels.com/photos/7243122/pexels-photo-7243122.jpeg",
      "https://images.pexels.com/photos/7148700/pexels-photo-7148700.jpeg",
      "https://images.pexels.com/photos/6764031/pexels-photo-6764031.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/21345901/pexels-photo-21345901.jpeg",
  },
  {
    id: "MNLIK9",
    title: "Levi's Graphic Tee",
    shortDescription: "Stylish graphic tee",
    discountedPrice: 1999,
    originalPrice: 2499,
    colors: ["#D35400", "#E74C3C", "#A93226"],
    category: "MEN'S CLOTHING",
    brand: "Levi's",
    displayImage:
      "https://images.pexels.com/photos/5838943/pexels-photo-5838943.jpeg",
    ratings: 4,
    reviews: [
      "Comfortable and stylish. Great for casual wear.",
      "Good quality and cool design. Recommended.",
    ],
    longDescription:
      "Levi's Graphic Tee offers a stylish design with a comfortable fit, perfect for casual wear.",
    overview: [
      "The Levi's Graphic Tee combines comfort and style, making it an ideal choice for casual wear. Crafted from soft fabric, this T-shirt offers a comfortable fit that lasts all day.",
      "With a unique graphic design, this tee adds a trendy touch to any outfit. The high-quality material ensures it retains its shape and color even after multiple washes.",
      "Perfect for pairing with jeans or shorts, this tee is versatile and suitable for various occasions. The breathable fabric keeps you comfortable, whether you're out and about or relaxing at home.",
      "Upgrade your casual wardrobe with the Levi's Graphic Tee, designed to deliver both fashion and comfort for everyday wear.",
    ],
    keyFeatures: [
      {
        Material: "Soft and breathable fabric",
      },
      {
        Design: "Unique graphic design",
      },
      {
        Fit: "Comfortable fit",
      },
      {
        Versatility: "Suitable for various occasions",
      },
      {
        Durability: "Retains shape and color",
      },
    ],
    isBestseller: false,
    additionalImages: [
      "https://images.pexels.com/photos/12446409/pexels-photo-12446409.jpeg",
      "https://images.pexels.com/photos/6256246/pexels-photo-6256246.jpeg",
      "https://images.pexels.com/photos/12025472/pexels-photo-12025472.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/4355296/pexels-photo-4355296.jpeg",
  },
  {
    id: "MNLIN3",
    title: "Levi's Slim Fit Jeans",
    shortDescription: "Modern slim fit",
    discountedPrice: 3499,
    originalPrice: 4499,
    colors: ["#1C2833", "#212F3D", "#273746"],
    category: "MEN'S CLOTHING",
    brand: "Levi's",
    displayImage:
      "https://images.pexels.com/photos/982586/pexels-photo-982586.jpeg",
    ratings: 5,
    reviews: [
      "Perfect fit and very stylish. Highly recommend.",
      "Excellent quality and comfortable. Great purchase.",
    ],
    longDescription:
      "Levi's Slim Fit Jeans offer a modern slim fit, crafted from high-quality denim for style and comfort.",
    overview: [
      "Levi's Slim Fit Jeans are designed to provide a modern and stylish look with a comfortable slim fit. Made from premium denim, these jeans offer both durability and comfort for everyday wear.",
      "With a sleek design and versatile look, these jeans are perfect for any casual or semi-formal occasion. The high-quality fabric ensures they retain their shape and color even after multiple washes.",
      "Featuring a zip fly and five-pocket design, these jeans offer both style and functionality. The sturdy construction guarantees long-lasting wear, making them a reliable addition to your wardrobe.",
      "Upgrade your denim collection with Levi's Slim Fit Jeans, designed to deliver both style and comfort for everyday wear.",
    ],
    keyFeatures: [
      {
        Fit: "Slim fit",
      },
      {
        Material: "High-quality denim",
      },
      {
        Design: "Zip fly and five-pocket design",
      },
      {
        Durability: "Retains shape and color",
      },
      {
        Comfort: "Provides a comfortable fit",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/3822943/pexels-photo-3822943.png",
      "https://images.pexels.com/photos/6311475/pexels-photo-6311475.jpeg",
      "https://images.pexels.com/photos/5369409/pexels-photo-5369409.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/5369404/pexels-photo-5369404.jpeg",
  },
  {
    id: "MNLIQ6",
    title: "Levi's Denim Shirt",
    shortDescription: "Classic denim shirt",
    discountedPrice: 2999,
    originalPrice: 3999,
    colors: ["#2C3E50", "#34495E", "#566573"],
    category: "MEN'S CLOTHING",
    brand: "Levi's",
    displayImage:
      "https://images.pexels.com/photos/8502201/pexels-photo-8502201.jpeg",
    ratings: 4,
    reviews: [
      "Great quality and stylish. Perfect for casual wear.",
      "Very comfortable and versatile. Love this shirt.",
    ],
    longDescription:
      "Levi's Denim Shirt offers a classic design with a comfortable fit, perfect for casual wear.",
    overview: [
      "The Levi's Denim Shirt combines classic design with modern comfort, making it a versatile addition to any wardrobe. Crafted from high-quality denim, this shirt provides both durability and style.",
      "With a button-front closure and multiple pockets, this shirt offers both functionality and fashion. The soft fabric ensures a comfortable fit that lasts all day.",
      "Perfect for pairing with jeans or chinos, this shirt is suitable for various occasions. The sturdy construction guarantees long-lasting wear, retaining its quality after multiple washes.",
      "Elevate your casual style with the Levi's Denim Shirt, designed to deliver both comfort and fashion for everyday wear.",
    ],
    keyFeatures: [
      {
        Material: "High-quality denim",
      },
      {
        Design: "Button-front closure",
      },
      {
        Fit: "Comfortable fit",
      },
      {
        Versatility: "Suitable for various occasions",
      },
      {
        Durability: "Retains quality after washes",
      },
    ],
    isBestseller: false,
    additionalImages: [
      "https://images.pexels.com/photos/7752666/pexels-photo-7752666.jpeg",
      "https://images.pexels.com/photos/6276009/pexels-photo-6276009.jpeg",
      "https://images.pexels.com/photos/10598034/pexels-photo-10598034.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/3082069/pexels-photo-3082069.jpeg",
  },
  {
    id: "MNADC3",
    title: "Adidas Essential Sweatshirt",
    shortDescription: "Comfortable and breathable sweatshirt for everyday wear",
    discountedPrice: 2999,
    originalPrice: 3999,
    colors: ["#000000", "#FF6347"],
    category: "MEN'S CLOTHING",
    brand: "Adidas",
    displayImage:
      "https://images.pexels.com/photos/8515484/pexels-photo-8515484.jpeg",
    ratings: 4.6,
    reviews: [
      "Soft fabric, perfect for casual wear.",
      "Great for layering in cold weather.",
      "Comfortable and stylish.",
    ],
    longDescription:
      "The Adidas Essential Sweatshirt is designed for both comfort and style. Crafted from soft cotton fabric, it offers warmth and breathability for all-day wear.",
    overview: [
      "Made from a cotton-polyester blend, this sweatshirt is perfect for layering during colder months or for casual wear on its own.",
      "The classic Adidas logo on the chest adds a sporty look, while the ribbed cuffs and hem ensure a snug fit.",
      "Available in multiple colors, it pairs well with jeans, joggers, or shorts for a versatile look.",
    ],
    keyFeatures: [
      {
        Material: "Cotton-Polyester Blend",
      },
      {
        Design: "Ribbed cuffs, ribbed hem",
      },
      {
        Fit: "Regular fit",
      },
      {
        Care: "Machine washable",
      },
      {
        Occasion: "Casual wear, sportswear",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/15759576/pexels-photo-15759576.jpeg",
      "https://images.pexels.com/photos/15759592/pexels-photo-15759592.jpeg",
      "https://images.pexels.com/photos/15733681/pexels-photo-15733681.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/3894389/pexels-photo-3894389.jpeg",
  },
  {
    id: "MNADF6",
    title: "Adidas Climacool T-Shirt",
    shortDescription:
      "Breathable, moisture-wicking t-shirt for athletic performance",
    discountedPrice: 1499,
    originalPrice: 1999,
    colors: ["#1E90FF", "#008000"],
    category: "MEN'S CLOTHING",
    brand: "Adidas",
    displayImage:
      "https://images.pexels.com/photos/5586488/pexels-photo-5586488.jpeg",
    ratings: 4.7,
    reviews: [
      "Keeps me cool during intense workouts.",
      "Perfect for running and gym sessions.",
      "Lightweight and breathable fabric.",
    ],
    longDescription:
      "The Adidas Climacool T-Shirt is engineered with moisture-wicking technology to keep you cool and dry during high-intensity workouts or outdoor activities.",
    overview: [
      "Crafted with Adidas' Climacool technology, this t-shirt allows for maximum airflow and sweat control, ensuring you stay comfortable during physical activity.",
      "The lightweight, soft fabric is perfect for exercise or casual wear, and the sleek, modern design includes the Adidas logo on the chest.",
      "Available in vibrant colors, this t-shirt can be paired with shorts, track pants, or jeans for a versatile, athletic look.",
    ],
    keyFeatures: [
      {
        Material: "100% Polyester",
      },
      {
        Technology: "Climacool moisture-wicking fabric",
      },
      {
        Fit: "Regular fit",
      },
      {
        Care: "Machine washable",
      },
      {
        Occasion: "Sportswear, casual",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/4719847/pexels-photo-4719847.jpeg",
      "https://images.pexels.com/photos/18755762/pexels-photo-18755762.jpeg",
      "https://images.pexels.com/photos/5793029/pexels-photo-5793029.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/18854776/pexels-photo-18854776.jpeg",
  },
  {
    id: "MNADI9",
    title: "Adidas Jogging Pants",
    shortDescription: "Soft, comfortable jogging pants for active wear",
    discountedPrice: 2999,
    originalPrice: 3999,
    colors: ["#808080", "#2F4F4F"],
    category: "MEN'S CLOTHING",
    brand: "Adidas",
    displayImage:
      "https://images.pexels.com/photos/17983217/pexels-photo-17983217.jpeg",
    ratings: 4.5,
    reviews: [
      "Perfect for both casual and athletic use.",
      "Comfortable and fits well.",
      "Great quality and durable.",
    ],
    longDescription:
      "The Adidas Jogging Pants are designed for ultimate comfort, ideal for both casual wear and intense workout sessions.",
    overview: [
      "These joggers are made from a blend of cotton and elastane for a soft feel with added stretch. They feature an adjustable waistband and a tapered leg design for a modern fit.",
      "The Adidas logo on the thigh adds a sporty touch, and the two side pockets offer practicality for carrying essentials.",
      "Available in neutral colors, these joggers can be paired with hoodies, t-shirts, or jackets for an active lifestyle look.",
    ],
    keyFeatures: [
      {
        Material: "Cotton-Elastane Blend",
      },
      {
        Design: "Tapered leg, adjustable waistband",
      },
      {
        Fit: "Slim fit",
      },
      {
        Care: "Machine washable",
      },
      {
        Occasion: "Athletic wear, casual",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/9661972/pexels-photo-9661972.jpeg",
      "https://images.pexels.com/photos/19314490/pexels-photo-19314490.jpeg",
      "https://images.pexels.com/photos/13946211/pexels-photo-13946211.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/8310726/pexels-photo-8310726.jpeg",
  },
  {
    id: "MNADL3",
    title: "Adidas Track Jacket",
    shortDescription: "Sleek and sporty track jacket for an athletic style",
    discountedPrice: 4999,
    originalPrice: 6499,
    colors: ["#008B8B", "#FF4500"],
    category: "MEN'S CLOTHING",
    brand: "Adidas",
    displayImage:
      "https://images.pexels.com/photos/4621197/pexels-photo-4621197.jpeg",
    ratings: 4.8,
    reviews: [
      "Stylish and perfect for outdoor activities.",
      "Comfortable fit and lightweight material.",
      "Great jacket for sports and casual outings.",
    ],
    longDescription:
      "The Adidas Track Jacket combines comfort with style, making it the perfect choice for outdoor sports or casual wear.",
    overview: [
      "Crafted from lightweight polyester fabric, this jacket features a full-zip closure, ribbed cuffs, and a high collar for added warmth and comfort.",
      "The sporty Adidas logo and sleek design make this jacket a versatile piece for both workouts and casual outings.",
      "Available in bold colors, this track jacket can be paired with matching track pants or jeans for a complete sporty look.",
    ],
    keyFeatures: [
      {
        Material: "Polyester",
      },
      {
        Design: "Full zip, ribbed cuffs",
      },
      {
        Fit: "Regular fit",
      },
      {
        Care: "Machine washable",
      },
      {
        Occasion: "Sportswear, casual",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/8456041/pexels-photo-8456041.jpeg",
      "https://images.pexels.com/photos/8455977/pexels-photo-8455977.jpeg",
      "https://images.pexels.com/photos/8455291/pexels-photo-8455291.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/7746174/pexels-photo-7746174.jpeg",
  },
  {
    id: "MNADO6",
    title: "Adidas Sport Shorts",
    shortDescription: "Breathable and comfortable sport shorts for active wear",
    discountedPrice: 1599,
    originalPrice: 1999,
    colors: ["#ADD8E6", "#32CD32"],
    category: "MEN'S CLOTHING",
    brand: "Adidas",
    displayImage:
      "https://images.pexels.com/photos/6453574/pexels-photo-6453574.jpeg",
    ratings: 4.6,
    reviews: [
      "Perfect fit for running and gym.",
      "Light and breathable fabric.",
      "Comfortable for all-day wear.",
    ],
    longDescription:
      "The Adidas Sport Shorts are designed for active wear, providing a lightweight, breathable fit perfect for running, gym workouts, or casual days.",
    overview: [
      "Crafted from lightweight, moisture-wicking fabric, these sport shorts keep you dry and comfortable during high-intensity activities.",
      "The elastic waistband with an adjustable drawstring ensures a perfect fit, while the side pockets provide convenient storage.",
      "These shorts are available in multiple colors and are ideal for pairing with Adidas athletic shirts or tank tops for a coordinated look.",
    ],
    keyFeatures: [
      {
        Material: "Polyester-Spandex Blend",
      },
      {
        Design: "Elastic waistband, side pockets",
      },
      {
        Fit: "Regular fit",
      },
      {
        Care: "Machine washable",
      },
      {
        Occasion: "Athletic wear, casual",
      },
    ],
    isBestseller: false,
    additionalImages: [
      "https://images.pexels.com/photos/3039896/pexels-photo-3039896.jpeg",
      "https://images.pexels.com/photos/2944541/pexels-photo-2944541.jpeg",
      "https://images.pexels.com/photos/6453581/pexels-photo-6453581.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/6453576/pexels-photo-6453576.jpeg",
  },
  {
    id: "WOZAB3",
    title: "Zara Oversized Blazer",
    shortDescription: "Chic oversized blazer perfect for layering",
    discountedPrice: 4999,
    originalPrice: 6499,
    colors: ["#000000", "#B0C4DE"],
    category: "WOMEN'S CLOTHING",
    brand: "Zara",
    displayImage:
      "https://images.pexels.com/photos/18129440/pexels-photo-18129440.jpeg",
    ratings: 4.7,
    reviews: [
      "Perfect for both office and casual wear.",
      "The oversized fit is stylish and modern.",
      "Great quality fabric!",
    ],
    longDescription:
      "This Zara Oversized Blazer combines high fashion with comfort, providing a versatile piece that can be worn across various occasions.",
    overview: [
      "Crafted from a premium fabric blend, the oversized fit provides a relaxed yet stylish look that works well for both professional and casual settings.",
      "The blazer features classic details such as a single-breasted closure, notched lapels, and two front pockets. The loose fit is perfect for layering over sweaters or shirts.",
      "Available in neutral tones, this blazer can easily be paired with trousers, skirts, or dresses, making it a must-have in any woman's wardrobe.",
    ],
    keyFeatures: [
      {
        Material: "Polyester-Cotton Blend",
      },
      {
        Design: "Oversized fit, notched lapels",
      },
      {
        Fit: "Loose fit",
      },
      {
        Care: "Dry clean only",
      },
      {
        Occasion: "Office wear, casual outings",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/4646851/pexels-photo-4646851.jpeg",
      "https://images.pexels.com/photos/9019857/pexels-photo-9019857.jpeg",
      "https://images.pexels.com/photos/7716867/pexels-photo-7716867.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/6316860/pexels-photo-6316860.jpeg",
  },
  {
    id: "WOZAC6",
    title: "Zara Pleated Midi Skirt",
    shortDescription: "Flowy midi skirt with pleats for a chic, feminine look",
    discountedPrice: 2599,
    originalPrice: 3299,
    colors: ["#FF69B4", "#2E8B57"],
    category: "WOMEN'S CLOTHING",
    brand: "Zara",
    displayImage:
      "https://images.pexels.com/photos/4690501/pexels-photo-4690501.jpeg",
    ratings: 4.6,
    reviews: [
      "Perfect skirt for summer and fall.",
      "The pleats add a sophisticated touch.",
      "Flattering silhouette, very comfortable.",
    ],
    longDescription:
      "This pleated midi skirt from Zara features a flowing, feminine design, ideal for dressing up or down depending on the occasion.",
    overview: [
      "Made from soft, breathable fabric, this skirt offers both comfort and style. The pleated design adds texture and volume, creating an elegant, flattering silhouette.",
      "Its mid-length hemline hits just below the knee, making it a versatile piece that can be worn with everything from casual tees to more formal blouses.",
      "The skirt pairs beautifully with heels or sneakers and can easily transition from day to night with the right accessories.",
    ],
    keyFeatures: [
      {
        Material: "Polyester",
      },
      {
        Design: "Pleated, midi length",
      },
      {
        Fit: "Flared fit",
      },
      {
        Care: "Machine washable",
      },
      {
        Occasion: "Casual wear, semi-formal",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/17500750/pexels-photo-17500750.jpeg",
      "https://images.pexels.com/photos/9902596/pexels-photo-9902596.jpeg",
      "https://images.pexels.com/photos/13556229/pexels-photo-13556229.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/5478513/pexels-photo-5478513.jpeg",
  },
  {
    id: "WOZAE9",
    title: "Zara High-Waisted Trousers",
    shortDescription: "Sleek high-waisted trousers for a professional look",
    discountedPrice: 3999,
    originalPrice: 4999,
    colors: ["#A52A2A", "#C0C0C0"],
    category: "WOMEN'S CLOTHING",
    brand: "Zara",
    displayImage:
      "https://images.pexels.com/photos/4937224/pexels-photo-4937224.jpeg",
    ratings: 4.8,
    reviews: [
      "The fit is perfect, and the material is comfortable.",
      "Ideal for workwear and formal events.",
      "The high-waisted style is flattering.",
    ],
    longDescription:
      "These high-waisted trousers from Zara offer a streamlined, sophisticated look, making them an essential for professional wardrobes.",
    overview: [
      "Tailored from high-quality fabric, these trousers offer a flattering high-waisted cut that elongates the legs. The sleek design is perfect for creating a polished, professional look.",
      "The trousers feature a zipper and hook closure, with a smooth finish that makes them versatile enough for both work and formal events.",
      "Available in classic colors, they are easy to mix and match with blouses, blazers, and heels for an elevated, chic style.",
    ],
    keyFeatures: [
      {
        Material: "Wool-Polyester Blend",
      },
      {
        Design: "High-waisted, tailored",
      },
      {
        Fit: "Slim fit",
      },
      {
        Care: "Dry clean only",
      },
      {
        Occasion: "Workwear, formal events",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/8069692/pexels-photo-8069692.jpeg",
      "https://images.pexels.com/photos/13049669/pexels-photo-13049669.jpeg",
      "https://images.pexels.com/photos/15025268/pexels-photo-15025268.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/4936952/pexels-photo-4936952.jpeg",
  },
  {
    id: "WOZAH3",
    title: "Zara Puff Sleeve Top",
    shortDescription: "Stylish puff sleeve top for a trendy, feminine look",
    discountedPrice: 1999,
    originalPrice: 2499,
    colors: ["#FF6347", "#8A2BE2"],
    category: "WOMEN'S CLOTHING",
    brand: "Zara",
    displayImage:
      "https://images.pexels.com/photos/13058772/pexels-photo-13058772.jpeg",
    ratings: 4.5,
    reviews: [
      "Flattering and comfortable!",
      "The puff sleeves give it a trendy vibe.",
      "Perfect for day or night outings.",
    ],
    longDescription:
      "This puff sleeve top from Zara is a chic, trendy piece that adds an element of fun to any outfit.",
    overview: [
      "Crafted from soft, lightweight fabric, this top features statement puff sleeves that provide a modern twist on a classic design.",
      "Its flattering fit and round neckline make it versatile, while the unique sleeves create a bold and stylish statement.",
      "This top can be paired with skirts, jeans, or trousers, making it perfect for everything from casual brunches to evening events.",
    ],
    keyFeatures: [
      {
        Material: "Cotton-Viscose Blend",
      },
      {
        Design: "Puff sleeves, round neckline",
      },
      {
        Fit: "Relaxed fit",
      },
      {
        Care: "Machine washable",
      },
      {
        Occasion: "Casual outings, semi-formal",
      },
    ],
    isBestseller: false,
    additionalImages: [
      "https://images.pexels.com/photos/10457389/pexels-photo-10457389.jpeg",
      "https://images.pexels.com/photos/14873926/pexels-photo-14873926.jpeg",
      "https://images.pexels.com/photos/27060210/pexels-photo-27060210.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/1854160/pexels-photo-1854160.jpeg",
  },
  {
    id: "WOZAK6",
    title: "Zara Satin Slip Dress",
    shortDescription:
      "Elegant satin slip dress for evening and special occasions",
    discountedPrice: 4599,
    originalPrice: 5999,
    colors: ["#C71585", "#800080"],
    category: "WOMEN'S CLOTHING",
    brand: "Zara",
    displayImage:
      "https://images.pexels.com/photos/19595289/pexels-photo-19595289.jpeg",
    ratings: 4.9,
    reviews: [
      "Gorgeous dress, perfect for a night out.",
      "The satin fabric is luxurious and smooth.",
      "So flattering and comfortable.",
    ],
    longDescription:
      "The Zara Satin Slip Dress is a luxurious, sophisticated dress that exudes elegance, perfect for evening events or special occasions.",
    overview: [
      "This satin slip dress features a smooth, luxurious finish that drapes beautifully on the body. The adjustable straps and V-neckline add a feminine touch, while the sleek design makes it perfect for formal gatherings or upscale events.",
      "Its minimalist silhouette can be styled with statement jewelry or accessories to create a show-stopping look. Whether paired with heels or flats, this dress promises to elevate your wardrobe.",
      "Available in rich, jewel-toned shades, this slip dress is a timeless piece that will remain a go-to for formal occasions.",
    ],
    keyFeatures: [
      {
        Material: "Satin Polyester",
      },
      {
        Design: "Slip dress, adjustable straps",
      },
      {
        Fit: "Slim fit",
      },
      {
        Care: "Dry clean only",
      },
      {
        Occasion: "Evening wear, special occasions",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/8369848/pexels-photo-8369848.jpeg",
      "https://images.pexels.com/photos/17291594/pexels-photo-17291594.jpeg",
      "https://images.pexels.com/photos/1021731/pexels-photo-1021731.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/6236644/pexels-photo-6236644.jpeg",
  },
  {
    id: "WOHML3",
    title: "H&M Ribbed Knit Dress",
    shortDescription:
      "Comfortable and stylish ribbed knit dress for everyday wear",
    discountedPrice: 1799,
    originalPrice: 2299,
    colors: ["#D2691E", "#FF4500"],
    category: "WOMEN'S CLOTHING",
    brand: "H&M",
    displayImage:
      "https://images.pexels.com/photos/248747/pexels-photo-248747.jpeg",
    ratings: 4.8,
    reviews: [
      "So comfortable and flattering.",
      "Perfect for a casual outing or weekend wear.",
      "I love the soft, stretchy fabric!",
    ],
    longDescription:
      "This ribbed knit dress from H&M combines casual style with everyday comfort, perfect for a laid-back yet fashionable look.",
    overview: [
      "The dress features a soft and stretchy ribbed knit fabric that provides comfort throughout the day. Its relaxed fit and simple design make it versatile for various occasions, from casual outings to coffee dates.",
      "It has a high neckline and three-quarter sleeves, creating a modest yet stylish look. The dress hits just above the knee, offering a flattering silhouette that pairs well with sandals or boots.",
      "Available in vibrant, warm colors, this dress can easily transition from season to season. Pair it with accessories for a more elevated look or keep it simple for an effortless casual outfit.",
    ],
    keyFeatures: [
      {
        Material: "Cotton-Polyester Blend",
      },
      {
        Design: "Ribbed knit, high neckline",
      },
      {
        Fit: "Relaxed fit",
      },
      {
        Care: "Machine washable",
      },
      {
        Occasion: "Casual outings, weekend wear",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/5128659/pexels-photo-5128659.jpeg",
      "https://images.pexels.com/photos/3693861/pexels-photo-3693861.jpeg",
      "https://images.pexels.com/photos/368685/pexels-photo-368685.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/104836/speed-car-vehicle-drive-104836.jpeg",
  },
  {
    id: "WOHMD6",
    title: "H&M Floral Print Blouse",
    shortDescription: "Charming floral blouse perfect for spring and summer",
    discountedPrice: 1499,
    originalPrice: 1799,
    colors: ["#FF6347", "#F08080"],
    category: "WOMEN'S CLOTHING",
    brand: "H&M",
    displayImage:
      "https://images.pexels.com/photos/248747/pexels-photo-248747.jpeg",
    ratings: 4.5,
    reviews: [
      "Perfect for a casual day out.",
      "The floral print is beautiful and the fabric is lightweight.",
      "Very flattering fit.",
    ],
    longDescription:
      "This floral print blouse from H&M is the perfect piece for adding a touch of femininity and color to your wardrobe.",
    overview: [
      "Featuring a delicate floral print, this blouse is crafted from lightweight fabric that is breathable and comfortable, ideal for warmer weather. It has a relaxed fit with a round neckline and short sleeves for a cool, casual vibe.",
      "The blouse pairs well with jeans, skirts, or shorts, making it a versatile option for casual outings or brunch with friends. The bright colors and charming pattern create a fun and cheerful look.",
      "Perfect for layering with a cardigan or wearing on its own, this blouse is a must-have for your spring and summer wardrobe.",
    ],
    keyFeatures: [
      {
        Material: "Viscose",
      },
      {
        Design: "Floral print, round neckline",
      },
      {
        Fit: "Relaxed fit",
      },
      {
        Care: "Machine washable",
      },
      {
        Occasion: "Casual outings, spring, and summer wear",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/5128659/pexels-photo-5128659.jpeg",
      "https://images.pexels.com/photos/3693861/pexels-photo-3693861.jpeg",
      "https://images.pexels.com/photos/368685/pexels-photo-368685.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/104836/speed-car-vehicle-drive-104836.jpeg",
  },
  {
    id: "WOHMG9",
    title: "H&M High-Waisted Trousers",
    shortDescription:
      "Classic high-waisted trousers for a polished and professional look",
    discountedPrice: 2299,
    originalPrice: 2999,
    colors: ["#2F4F4F", "#A9A9A9"],
    category: "WOMEN'S CLOTHING",
    brand: "H&M",
    displayImage:
      "https://images.pexels.com/photos/248747/pexels-photo-248747.jpeg",
    ratings: 4.7,
    reviews: [
      "Great fit, very flattering.",
      "Perfect for office wear or formal occasions.",
      "The fabric feels soft yet sturdy.",
    ],
    longDescription:
      "These high-waisted trousers from H&M offer a chic and professional look, combining comfort and style for the modern woman.",
    overview: [
      "Crafted from a high-quality fabric blend, these trousers provide both comfort and durability. The high-waisted cut elongates the legs, while the tailored fit offers a sophisticated and flattering silhouette.",
      "With a zipper and button closure, these trousers are perfect for pairing with blouses, blazers, or even casual tops for a business-casual look. They are versatile enough for workdays or evening events.",
      "The classic color options ensure that these trousers can be easily matched with any top, making them a wardrobe staple for both office wear and formal occasions.",
    ],
    keyFeatures: [
      {
        Material: "Polyester-Viscose Blend",
      },
      {
        Design: "High-waisted, tailored fit",
      },
      {
        Fit: "Slim fit",
      },
      {
        Care: "Machine washable",
      },
      {
        Occasion: "Office wear, formal occasions",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/5128659/pexels-photo-5128659.jpeg",
      "https://images.pexels.com/photos/3693861/pexels-photo-3693861.jpeg",
      "https://images.pexels.com/photos/368685/pexels-photo-368685.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/3727658/pexels-photo-3727658.jpeg",
  },
  {
    id: "WOHML3",
    title: "H&M Classic Denim Skirt",
    shortDescription: "Timeless denim skirt for a casual, laid-back look",
    discountedPrice: 1399,
    originalPrice: 1799,
    colors: ["#000080", "#87CEFA"],
    category: "WOMEN'S CLOTHING",
    brand: "H&M",
    displayImage:
      "https://images.pexels.com/photos/248747/pexels-photo-248747.jpeg",
    ratings: 4.4,
    reviews: [
      "Love the length, perfect for casual weekends.",
      "The denim is durable and soft.",
      "Very versatile, can be dressed up or down.",
    ],
    longDescription:
      "The H&M Classic Denim Skirt is a timeless addition to any wardrobe, offering both style and comfort for everyday wear.",
    overview: [
      "Made from durable denim, this skirt features a classic A-line cut that provides a flattering and comfortable fit. The mid-rise waist and knee-length hem make it versatile enough for casual days or dressing up for a night out.",
      "Pair it with a tucked-in blouse, graphic tee, or cozy sweater to create various outfits for any occasion. The skirt comes with traditional denim details, including belt loops, front pockets, and a zipper closure.",
      "Available in classic blue and other denim shades, this skirt is an essential piece for any fashion-forward woman looking to add a casual yet chic element to her wardrobe.",
    ],
    keyFeatures: [
      {
        Material: "Cotton-Denim",
      },
      {
        Design: "A-line, mid-rise waist",
      },
      {
        Fit: "Relaxed fit",
      },
      {
        Care: "Machine washable",
      },
      {
        Occasion: "Casual wear, weekend outings",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/5128659/pexels-photo-5128659.jpeg",
      "https://images.pexels.com/photos/3693861/pexels-photo-3693861.jpeg",
      "https://images.pexels.com/photos/368685/pexels-photo-368685.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/3727658/pexels-photo-3727658.jpeg",
  },
  {
    id: "WOHMO5",
    title: "H&M Lace-Trimmed Cami Top",
    shortDescription:
      "Elegant lace-trimmed cami top for an effortlessly chic look",
    discountedPrice: 999,
    originalPrice: 1299,
    colors: ["#D8BFD8", "#FFC0CB"],
    category: "WOMEN'S CLOTHING",
    brand: "H&M",
    displayImage:
      "https://images.pexels.com/photos/248747/pexels-photo-248747.jpeg",
    ratings: 4.6,
    reviews: [
      "Perfect for layering or wearing alone.",
      "The lace adds a touch of elegance.",
      "Super comfortable and lightweight.",
    ],
    longDescription:
      "This lace-trimmed cami top from H&M offers a perfect balance of comfort and elegance, ideal for casual and semi-formal occasions.",
    overview: [
      "Crafted from lightweight, breathable fabric, this cami top features delicate lace trimming along the neckline and straps, giving it an elegant touch. The soft and flowy material makes it perfect for layering under jackets or wearing on its own.",
      "The relaxed fit ensures comfort throughout the day, while the adjustable straps allow for a customizable fit. Available in soft, pastel shades, this cami top adds a subtle feminine flair to any outfit.",
      "Pair it with skirts, trousers, or jeans for a variety of chic looks, making it a versatile piece that can be worn across multiple seasons.",
    ],
    keyFeatures: [
      {
        Material: "Polyester-Spandex Blend",
      },
      {
        Design: "Lace trim, adjustable straps",
      },
      {
        Fit: "Relaxed fit",
      },
      {
        Care: "Machine washable",
      },
      {
        Occasion: "Casual wear, layering",
      },
    ],
    isBestseller: false,
    additionalImages: [
      "https://images.pexels.com/photos/5128659/pexels-photo-5128659.jpeg",
      "https://images.pexels.com/photos/3693861/pexels-photo-3693861.jpeg",
      "https://images.pexels.com/photos/368685/pexels-photo-368685.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/3727658/pexels-photo-3727658.jpeg",
  },
  {
    id: "WOFOH3",
    title: "Forever 21 Floral Maxi Dress",
    shortDescription: "Elegant floral print dress for all occasions",
    discountedPrice: 2499,
    originalPrice: 2999,
    colors: ["#FF6347", "#FFD700"],
    category: "WOMEN'S CLOTHING",
    brand: "Forever 21",
    displayImage:
      "https://images.pexels.com/photos/6371812/pexels-photo-6371812.jpeg",
    ratings: 4.7,
    reviews: [
      "Perfect for summer weddings and garden parties.",
      "Lightweight and comfortable fabric.",
      "I received so many compliments wearing this dress.",
    ],
    longDescription:
      "This elegant floral maxi dress from Forever 21 combines classic beauty with contemporary design, making it perfect for various events.",
    overview: [
      "This stunning floral print dress features a flattering silhouette and lightweight fabric, ideal for warmer weather. Its vibrant colors and delicate design are perfect for weddings, parties, or casual day outings.",
      "The dress features a deep V-neckline and adjustable straps, allowing for a personalized fit. The flowing maxi length provides both elegance and comfort, while the empire waist design emphasizes a flattering shape.",
      "Made from a soft and breathable fabric, this dress ensures comfort all day long, making it perfect for all-day events. The beautiful floral pattern brings a fresh and stylish touch, making it a must-have addition to your wardrobe.",
    ],
    keyFeatures: [
      {
        Material: "Polyester-Cotton Blend",
      },
      {
        Design: "Floral print, V-neckline, Adjustable straps",
      },
      {
        Fit: "Maxi fit",
      },
      {
        Care: "Machine washable",
      },
      {
        Occasion: "Weddings, Garden Parties, Casual Outings",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/16392280/pexels-photo-16392280.jpeg",
      "https://images.pexels.com/photos/28867467/pexels-photo-28867467.jpeg",
      "https://images.pexels.com/photos/20394956/pexels-photo-20394956.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/4491621/pexels-photo-4491621.jpeg",
  },
  {
    id: "WOFOC6",
    title: "Forever 21 Denim Jacket",
    shortDescription: "Classic denim jacket for casual style",
    discountedPrice: 1699,
    originalPrice: 2199,
    colors: ["#000080", "#A9A9A9"],
    category: "WOMEN'S CLOTHING",
    brand: "Forever 21",
    displayImage:
      "https://images.pexels.com/photos/29672229/pexels-photo-29672229.jpeg",
    ratings: 4.6,
    reviews: [
      "Timeless piece that goes with everything.",
      "Great fit and perfect for layering.",
      "Good quality denim, comfortable and stylish.",
    ],
    longDescription:
      "The Forever 21 Denim Jacket is a versatile wardrobe staple, offering timeless style and comfort for everyday wear.",
    overview: [
      "Crafted from high-quality denim, this jacket features a classic button-up design with functional pockets, perfect for keeping small essentials. The adjustable cuffs and relaxed fit ensure comfort while maintaining a stylish silhouette.",
      "This denim jacket is a great layering piece that can be paired with almost anything, from dresses to jeans. The distressed detailing adds a trendy twist, making it both versatile and fashionable.",
      "Whether it's a casual day out or a night on the town, this jacket can elevate any outfit. Available in a range of colors, it’s an essential wardrobe piece for all seasons, transitioning easily from spring to fall.",
    ],
    keyFeatures: [
      {
        Material: "100% Denim",
      },
      {
        Design: "Button-up, functional pockets",
      },
      {
        Fit: "Relaxed fit",
      },
      {
        Care: "Machine washable",
      },
      {
        Season: "All year round",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/7243122/pexels-photo-7243122.jpeg",
      "https://images.pexels.com/photos/6764031/pexels-photo-6764031.jpeg",
      "https://images.pexels.com/photos/6843224/pexels-photo-6843224.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/6843231/pexels-photo-6843231.jpeg",
  },
  {
    id: "WOFOF9",
    title: "Forever 21 Off-Shoulder Top",
    shortDescription: "Chic off-shoulder top with ruffle detailing",
    discountedPrice: 1099,
    originalPrice: 1399,
    colors: ["#FF1493", "#8A2BE2"],
    category: "WOMEN'S CLOTHING",
    brand: "Forever 21",
    displayImage:
      "https://images.pexels.com/photos/1681107/pexels-photo-1681107.jpeg",
    ratings: 4.4,
    reviews: [
      "Super cute and flattering fit.",
      "Love the ruffle detail, it adds a playful touch.",
      "Perfect for a night out or date night.",
    ],
    longDescription:
      "This chic off-shoulder top with ruffle detailing from Forever 21 is the perfect combination of trendy and feminine.",
    overview: [
      "Designed for a relaxed and feminine look, this off-shoulder top features a ruffled hem and sleeves that create a playful and flirty vibe. The elastic neckline allows for comfort and flexibility, making it easy to wear for long periods.",
      "This top pairs beautifully with skirts, shorts, or high-waisted jeans. Its lightweight fabric makes it an excellent choice for warmer weather, adding a breezy and carefree style to your wardrobe.",
      "The bold colors available make this top a statement piece, perfect for casual outings, date nights, or beach vacations. It’s versatile enough to be dressed up or down, making it a must-have for every fashion-forward woman.",
    ],
    keyFeatures: [
      {
        Material: "Cotton-Blend",
      },
      {
        Design: "Off-shoulder, ruffled hem and sleeves",
      },
      {
        Fit: "Relaxed fit",
      },
      {
        Care: "Machine washable",
      },
      {
        Occasion: "Casual outings, date nights, vacations",
      },
    ],
    isBestseller: false,
    additionalImages: [
      "https://images.pexels.com/photos/18061505/pexels-photo-18061505.jpeg",
      "https://images.pexels.com/photos/21765085/pexels-photo-21765085.jpeg",
      "https://images.pexels.com/photos/29471503/pexels-photo-29471503.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/27919195/pexels-photo-27919195.jpeg",
  },
  {
    id: "WOFOJ5",
    title: "Forever 21 High-Waisted Pants",
    shortDescription: "Trendy high-waisted pants with wide-leg fit",
    discountedPrice: 1899,
    originalPrice: 2499,
    colors: ["#2F4F4F", "#BDB76B"],
    category: "WOMEN'S CLOTHING",
    brand: "Forever 21",
    displayImage:
      "https://images.pexels.com/photos/9488415/pexels-photo-9488415.jpeg",
    ratings: 4.8,
    reviews: [
      "Extremely comfortable, great for everyday wear.",
      "The fit is perfect and very flattering.",
      "The fabric is soft and breathable.",
    ],
    longDescription:
      "The Forever 21 High-Waisted Pants offer a chic and comfortable look, combining style and ease with a flattering wide-leg fit.",
    overview: [
      "These high-waisted pants feature a wide-leg cut, offering a modern and relaxed silhouette that can be dressed up or down. The high waist helps to elongate the legs and enhance the figure.",
      "Made from a soft and breathable fabric, these pants are perfect for all-day wear. They feature a simple front pleat for added sophistication and a zipper closure for a secure fit.",
      "Ideal for both casual and professional settings, these pants can be paired with everything from blouses to t-shirts. Their versatile design ensures they can be worn to work, on weekends, or for more formal occasions.",
    ],
    keyFeatures: [
      {
        Material: "Polyester-Spandex Blend",
      },
      {
        Design: "High-waisted, wide-leg",
      },
      {
        Fit: "Relaxed fit",
      },
      {
        Care: "Machine washable",
      },
      {
        Occasion: "Casual, office wear",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/8975026/pexels-photo-8975026.jpeg",
      "https://images.pexels.com/photos/3611797/pexels-photo-3611797.jpeg",
      "https://images.pexels.com/photos/13688009/pexels-photo-13688009.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/8989581/pexels-photo-8989581.jpeg",
  },
  {
    id: "WOFOM8",
    title: "Forever 21 Sleeveless Blouse",
    shortDescription: "Elegant sleeveless blouse for formal occasions",
    discountedPrice: 1299,
    originalPrice: 1599,
    colors: ["#FFD700", "#C71585"],
    category: "WOMEN'S CLOTHING",
    brand: "Forever 21",
    displayImage:
      "https://images.pexels.com/photos/17943268/pexels-photo-17943268.jpeg",
    ratings: 4.5,
    reviews: [
      "Perfect for pairing with skirts or trousers.",
      "The fabric feels luxurious and soft.",
      "The blouse has a great fit and looks classy.",
    ],
    longDescription:
      "This elegant sleeveless blouse from Forever 21 is ideal for formal occasions, offering a polished look with a sleek design.",
    overview: [
      "The sleeveless blouse is made from a lightweight and smooth fabric that feels luxurious against the skin. The structured fit ensures a flattering silhouette, while the sleeveless design provides a chic and sophisticated appearance.",
      "The blouse can be dressed up with a pencil skirt or tailored trousers for office wear, or paired with jeans for a more casual, yet still polished, look. The high neckline adds an elegant touch, making it suitable for business meetings or semi-formal events.",
      "Available in a range of colors, this blouse offers versatility and ease in styling, making it a great addition to any wardrobe. Its simple yet refined design ensures it can be worn for various occasions throughout the year.",
    ],
    keyFeatures: [
      {
        Material: "Silk-Blend",
      },
      {
        Design: "Sleeveless, high neckline",
      },
      {
        Fit: "Structured fit",
      },
      {
        Care: "Dry clean only",
      },
      {
        Occasion: "Office wear, semi-formal events",
      },
    ],
    isBestseller: false,
    additionalImages: [
      "https://images.pexels.com/photos/16479558/pexels-photo-16479558.jpeg",
      "https://images.pexels.com/photos/26935370/pexels-photo-26935370.jpeg",
      "https://images.pexels.com/photos/19236842/pexels-photo-19236842.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/14721796/pexels-photo-14721796.jpeg",
  },
  {
    id: "KIGAO3",
    title: "Gap Kids Logo Hoodie",
    shortDescription: "Classic hoodie with Gap logo",
    discountedPrice: 1999,
    originalPrice: 2499,
    colors: ["#00509E", "#E1E1E1"],
    category: "KID'S CLOTHING",
    brand: "Gap Kids",
    displayImage:
      "https://images.pexels.com/photos/9150264/pexels-photo-9150264.jpeg",
    ratings: 4.5,
    reviews: [
      "Soft and cozy hoodie, perfect for cool weather.",
      "The logo design is simple yet stylish.",
      "My child loves wearing this every day!",
    ],
    longDescription:
      "The Gap Kids Logo Hoodie is a versatile and stylish choice for everyday wear, featuring the iconic Gap logo and soft fleece material.",
    overview: [
      "This hoodie is made with a premium cotton-polyester blend, ensuring softness and comfort for all-day wear. It's a great choice for casual outings or school days. The logo design is bold and easily recognizable, making it a trendy piece for your child's wardrobe.",
      "The hoodie features an adjustable drawstring hood and a kangaroo pocket, perfect for keeping hands warm or carrying small essentials. The ribbed cuffs and hem provide a snug fit, ensuring the hoodie stays in place during play or movement.",
      "Ideal for layering, the hoodie can be paired with jeans, joggers, or leggings for a relaxed look. Available in multiple colors, it's easy to match with your child's favorite outfits. Whether for school, the weekend, or an evening out, this hoodie is a must-have.",
    ],
    keyFeatures: [
      {
        Material: "Cotton-Polyester Blend",
      },
      {
        Design: "Iconic Gap logo",
      },
      {
        Fit: "Relaxed fit",
      },
      {
        Care: "Machine washable",
      },
      {
        Season: "All year round",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/15724001/pexels-photo-15724001.jpeg",
      "https://images.pexels.com/photos/3707182/pexels-photo-3707182.jpeg",
      "https://images.pexels.com/photos/1007804/pexels-photo-1007804.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/2372531/pexels-photo-2372531.jpeg",
  },
  {
    id: "KIGAR6",
    title: "Gap Kids Denim Jacket",
    shortDescription: "Trendy denim jacket for kids",
    discountedPrice: 2999,
    originalPrice: 3499,
    colors: ["#123456", "#789ABC"],
    category: "KID'S CLOTHING",
    brand: "Gap Kids",
    displayImage:
      "https://images.pexels.com/photos/5623695/pexels-photo-5623695.jpeg",
    ratings: 5,
    reviews: [
      "Stylish jacket that fits perfectly.",
      "Good quality denim, looks very durable.",
      "My kid gets compliments every time they wear it.",
    ],
    longDescription:
      "The Gap Kids Denim Jacket is a wardrobe essential, combining durability and timeless style for your child's everyday adventures.",
    overview: [
      "Crafted from high-quality denim, this jacket offers both durability and a stylish, modern look. It's designed to last, perfect for kids who love to play and explore. With its classic button-up closure and front pockets, it has a cool and casual appeal.",
      "The jacket's tailored fit provides a sharp and structured silhouette, making it ideal for both casual outings and semi-formal occasions. It is versatile enough to be layered over a t-shirt for a laid-back look or paired with a hoodie for extra warmth.",
      "The Gap Kids Denim Jacket is available in multiple washes and colors, offering choices to suit various preferences. It's easy to care for and can be machine washed, retaining its shape and quality. A perfect addition to your child's wardrobe for all seasons.",
    ],
    keyFeatures: [
      {
        Material: "100% Denim",
      },
      {
        Design: "Classic button-up style",
      },
      {
        Fit: "Tailored fit",
      },
      {
        Care: "Machine washable",
      },
      {
        Season: "Spring/Fall",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/2815694/pexels-photo-2815694.jpeg",
      "https://images.pexels.com/photos/8142251/pexels-photo-8142251.jpeg",
      "https://images.pexels.com/photos/6261897/pexels-photo-6261897.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/5623707/pexels-photo-5623707.jpeg",
  },
  {
    id: "KIGAU9",
    title: "Gap Kids Printed T-Shirt",
    shortDescription: "Bright and fun printed t-shirt",
    discountedPrice: 899,
    originalPrice: 1199,
    colors: ["#FFC107", "#F0F0F0"],
    category: "KID'S CLOTHING",
    brand: "Gap Kids",
    displayImage:
      "https://images.pexels.com/photos/10093067/pexels-photo-10093067.jpeg",
    ratings: 4,
    reviews: [
      "Bright colors and fun prints make it stand out.",
      "Soft and breathable fabric, perfect for summer.",
      "My child loves the playful designs.",
    ],
    longDescription:
      "The Gap Kids Printed T-Shirt adds a pop of color and fun to your child's wardrobe with its vibrant designs and soft fabric.",
    overview: [
      "Crafted from 100% cotton, this t-shirt is breathable and perfect for warm weather. The fabric is soft against the skin, ensuring comfort throughout the day. It's available in various fun prints and vibrant colors, making it easy to pair with different outfits.",
      "The relaxed fit ensures easy movement, allowing your child to run, jump, and play without restrictions. The t-shirt's design is versatile, suitable for both casual days at home and outings with friends or family. It's a great choice for active kids who love to express their style.",
      "Machine washable for easy care, this t-shirt is built to withstand regular wear. The bright prints retain their color and vibrancy, even after multiple washes, making it a durable and lasting addition to your child's wardrobe.",
    ],
    keyFeatures: [
      {
        Material: "100% Cotton",
      },
      {
        Design: "Bright and playful prints",
      },
      {
        Fit: "Relaxed fit",
      },
      {
        Care: "Machine washable",
      },
      {
        Occasion: "Casual wear",
      },
    ],
    isBestseller: false,
    additionalImages: [
      "https://images.pexels.com/photos/8549248/pexels-photo-8549248.jpeg",
      "https://images.pexels.com/photos/15227231/pexels-photo-15227231.jpeg",
      "https://images.pexels.com/photos/7269689/pexels-photo-7269689.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/7705884/pexels-photo-7705884.jpeg",
  },
  {
    id: "KIGAX3",
    title: "Gap Kids Jogger Pants",
    shortDescription: "Comfortable jogger pants for active kids",
    discountedPrice: 1599,
    originalPrice: 1999,
    colors: ["#AABBCC", "#333333"],
    category: "KID'S CLOTHING",
    brand: "Gap Kids",
    displayImage:
      "https://images.pexels.com/photos/19113675/pexels-photo-19113675.jpeg",
    ratings: 4.5,
    reviews: [
      "Super comfortable and perfect for playtime.",
      "The material is durable and soft.",
      "My kid loves the fit and style of these joggers.",
    ],
    longDescription:
      "The Gap Kids Jogger Pants offer a comfortable and stylish option for active kids, crafted from soft and durable fabric.",
    overview: [
      "Designed with an elastic waistband and adjustable drawstring, these joggers offer a flexible and personalized fit. The ribbed cuffs provide a snug and modern finish, ensuring they stay in place even during the most active play sessions.",
      "Made with a soft, breathable fabric, these jogger pants are perfect for all-day wear. Whether for sports activities, outdoor adventures, or just lounging at home, they offer comfort and style in equal measure. Available in a variety of colors to suit different tastes.",
      "These joggers are easy to pair with t-shirts, hoodies, or jackets. Versatile enough to be worn for school, playdates, or casual outings, they are a must-have for active kids. Machine washable for convenience, these joggers will maintain their quality even after repeated washes.",
    ],
    keyFeatures: [
      {
        Material: "Cotton-Polyester Blend",
      },
      {
        Design: "Elastic waistband with adjustable drawstring",
      },
      {
        Fit: "Tapered fit",
      },
      {
        Care: "Machine washable",
      },
      {
        Season: "All year round",
      },
    ],
    isBestseller: false,
    additionalImages: [
      "https://images.pexels.com/photos/8538335/pexels-photo-8538335.jpeg",
      "https://images.pexels.com/photos/7573076/pexels-photo-7573076.jpeg",
      "https://images.pexels.com/photos/4473571/pexels-photo-4473571.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/5896755/pexels-photo-5896755.jpeg",
  },
  {
    id: "KIGAX3",
    title: "Gap Kids Casual Shorts",
    shortDescription: "Comfortable shorts for summer",
    discountedPrice: 999,
    originalPrice: 1299,
    colors: ["#E91E63", "#8BC34A"],
    category: "KID'S CLOTHING",
    brand: "Gap Kids",
    displayImage:
      "https://images.pexels.com/photos/6849463/pexels-photo-6849463.jpeg",
    ratings: 4.2,
    reviews: [
      "Perfect for summer playdates and outdoor adventures.",
      "The fabric is soft and breathable, perfect for hot days.",
      "These shorts are stylish and comfortable.",
    ],
    longDescription:
      "Gap Kids Casual Shorts are designed for active summer days, combining comfort, style, and practicality for outdoor adventures.",
    overview: [
      "These casual shorts are made from a soft, lightweight cotton blend, ensuring comfort and breathability throughout the hot summer months. The elastic waistband provides a secure fit, while the pockets offer practical storage for small items.",
      "Available in multiple colors, these shorts can be paired with a variety of tops, from t-shirts to tank tops. Whether at the park or on vacation, these shorts are the perfect choice for casual wear during the warmer months.",
      "The durable fabric and well-constructed seams ensure these shorts will hold up to active play, making them a great option for outdoor activities. Easy to care for, they are machine washable and retain their shape and color even after repeated washing.",
    ],
    keyFeatures: [
      {
        Material: "Cotton-Polyester Blend",
      },
      {
        Design: "Elastic waistband with pockets",
      },
      {
        Fit: "Relaxed fit",
      },
      {
        Care: "Machine washable",
      },
      {
        Season: "Summer wear",
      },
    ],
    isBestseller: false,
    additionalImages: [
      "https://images.pexels.com/photos/16951674/pexels-photo-16951674.jpeg",
      "https://images.pexels.com/photos/2406954/pexels-photo-2406954.jpeg",
      "https://images.pexels.com/photos/28283096/pexels-photo-28283096.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/14779680/pexels-photo-14779680.jpeg",
  },
  {
    id: "KISOZ3",
    title: "OshKosh Striped Overalls",
    shortDescription: "Classic striped overalls for toddlers",
    discountedPrice: 1899,
    originalPrice: 2299,
    colors: ["#8A9EA3", "#DFCEB3"],
    category: "KID'S CLOTHING",
    brand: "OshKosh B'gosh",
    displayImage:
      "https://images.pexels.com/photos/7169667/pexels-photo-7169667.jpeg",
    ratings: 4,
    reviews: [
      "These overalls are so stylish and fit perfectly!",
      "Love the durable material, perfect for active toddlers.",
      "The stripes make them stand out, great for casual outings.",
    ],
    longDescription:
      "The OshKosh Striped Overalls are a timeless piece featuring durable cotton fabric and classic pinstripe design, ideal for your growing toddler.",
    overview: [
      "Made from premium cotton, these overalls provide comfort and durability.",
      "Adjustable shoulder straps ensure a snug fit for different sizes.",
      "Features functional pockets for added utility, perfect for little adventurers.",
    ],
    keyFeatures: [
      {
        Material: "100% Cotton",
      },
      {
        Design: "Classic pinstripes",
      },
      {
        Fit: "Adjustable straps",
      },
      {
        Care: "Machine washable",
      },
      {
        Season: "All year round",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/4714958/pexels-photo-4714958.jpeg",
      "https://images.pexels.com/photos/4712009/pexels-photo-4712009.jpeg",
      "https://images.pexels.com/photos/4712008/pexels-photo-4712008.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/2098067/pexels-photo-2098067.jpeg",
  },
  {
    id: "KISOC6",
    title: "OshKosh Graphic Tee",
    shortDescription: "Fun graphic t-shirt for kids",
    discountedPrice: 799,
    originalPrice: 999,
    colors: ["#F1A4A4", "#A4C4F1"],
    category: "KID'S CLOTHING",
    brand: "OshKosh B'gosh",
    displayImage:
      "https://images.pexels.com/photos/11668254/pexels-photo-11668254.jpeg",
    ratings: 5,
    reviews: [
      "Super cute design and soft fabric. My child loves it!",
      "Good quality and fits perfectly.",
      "Bright colors and fun graphics make it a favorite.",
    ],
    longDescription:
      "The OshKosh Graphic Tee combines comfort and style, featuring fun, playful graphics that kids will adore.",
    overview: [
      "Crafted from soft, breathable cotton for all-day comfort.",
      "Fun graphic designs make it a versatile addition to your child’s wardrobe.",
      "Perfect for casual wear and easy to care for with machine washable fabric.",
    ],
    keyFeatures: [
      {
        Material: "100% Cotton",
      },
      {
        Design: "Playful graphic prints",
      },
      {
        Fit: "Relaxed fit",
      },
      {
        Care: "Machine washable",
      },
      {
        Occasion: "Casual wear",
      },
    ],
    isBestseller: false,
    additionalImages: [
      "https://images.pexels.com/photos/17640752/pexels-photo-17640752.jpeg",
      "https://images.pexels.com/photos/15179152/pexels-photo-15179152.jpeg",
      "https://images.pexels.com/photos/1073083/pexels-photo-1073083.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/540530/pexels-photo-540530.jpeg",
  },
  {
    id: "KISOF9",
    title: "OshKosh Denim Shorts",
    shortDescription: "Durable denim shorts for playtime",
    discountedPrice: 1399,
    originalPrice: 1599,
    colors: ["#456789", "#9BACD1"],
    category: "KID'S CLOTHING",
    brand: "OshKosh B'gosh",
    displayImage:
      "https://images.pexels.com/photos/8384958/pexels-photo-8384958.jpeg",
    ratings: 4,
    reviews: [
      "Great quality shorts, perfect for summer activities.",
      "Very comfortable and the fabric is soft yet sturdy.",
      "My child loves wearing these, great value for money.",
    ],
    longDescription:
      "These OshKosh Denim Shorts are designed for durability and comfort, perfect for active kids during the warmer months.",
    overview: [
      "Made from premium denim, these shorts are built to last through playtime.",
      "Elastic waistband ensures a comfortable fit for growing children.",
      "Easy to pair with t-shirts for a casual and stylish look.",
    ],
    keyFeatures: [
      {
        Material: "Premium Denim",
      },
      {
        Design: "Classic denim style",
      },
      {
        Fit: "Elastic waistband",
      },
      {
        Care: "Machine washable",
      },
      {
        Season: "Spring/Summer",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/4769490/pexels-photo-4769490.jpeg",
      "https://images.pexels.com/photos/20594803/pexels-photo-20594803.jpeg",
      "https://images.pexels.com/photos/852860/pexels-photo-852860.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/25560152/pexels-photo-25560152.jpeg",
  },
  {
    id: "KISOI5",
    title: "OshKosh Floral Dress",
    shortDescription: "Pretty floral dress for special occasions",
    discountedPrice: 2499,
    originalPrice: 2899,
    colors: ["#FFD5E5", "#C8E6C9"],
    category: "KID'S CLOTHING",
    brand: "OshKosh B'gosh",
    displayImage:
      "https://images.pexels.com/photos/9270265/pexels-photo-9270265.jpeg",
    ratings: 5,
    reviews: [
      "Beautiful dress, perfect for summer parties.",
      "Fits perfectly and the floral print is so pretty.",
      "Lightweight and comfortable for all-day wear.",
    ],
    longDescription:
      "The OshKosh Floral Dress is a charming addition to your child’s wardrobe, featuring vibrant floral patterns and soft, flowy fabric.",
    overview: [
      "Made from lightweight cotton fabric, perfect for warm weather.",
      "Features a floral design that adds a touch of elegance to your child’s outfit.",
      "Elastic waist ensures a comfortable and flattering fit.",
    ],
    keyFeatures: [
      {
        Material: "Lightweight Cotton",
      },
      {
        Design: "Vibrant floral print",
      },
      {
        Fit: "Elastic waistband",
      },
      {
        Care: "Machine washable",
      },
      {
        Occasion: "Special events and casual wear",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/25652214/pexels-photo-25652214.jpeg",
      "https://images.pexels.com/photos/12929341/pexels-photo-12929341.jpeg",
      "https://images.pexels.com/photos/8365136/pexels-photo-8365136.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/12410527/pexels-photo-12410527.jpeg",
  },
  {
    id: "KISOL9",
    title: "OshKosh Hoodie",
    shortDescription: "Warm and stylish hoodie for kids",
    discountedPrice: 1799,
    originalPrice: 2199,
    colors: ["#AABBCC", "#FFDDEE"],
    category: "KID'S CLOTHING",
    brand: "OshKosh B'gosh",
    displayImage:
      "https://images.pexels.com/photos/6743199/pexels-photo-6743199.jpeg",
    ratings: 4,
    reviews: [
      "Keeps my child warm and looks great.",
      "Love the quality and the simple design.",
      "Perfect for chilly mornings and evenings.",
    ],
    longDescription:
      "The OshKosh Hoodie combines functionality and style, made from soft fleece material to keep kids warm and comfortable.",
    overview: [
      "Soft fleece material ensures warmth during colder days.",
      "Simple design with a front pocket adds a stylish touch.",
      "Perfect for layering and suitable for casual outings.",
    ],
    keyFeatures: [
      {
        Material: "Soft Fleece",
      },
      {
        Design: "Simple and stylish",
      },
      {
        Fit: "Relaxed fit",
      },
      {
        Care: "Machine washable",
      },
      {
        Season: "Fall/Winter",
      },
    ],
    isBestseller: false,
    additionalImages: [
      "https://images.pexels.com/photos/11988396/pexels-photo-11988396.jpeg",
      "https://images.pexels.com/photos/6261891/pexels-photo-6261891.jpeg",
      "https://images.pexels.com/photos/1765423/pexels-photo-1765423.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/9153084/pexels-photo-9153084.jpeg",
  },
  {
    id: "KICAC6",
    title: "Carter's Dinosaur Hoodie",
    shortDescription: "Cozy hoodie for kids",
    discountedPrice: 1999,
    originalPrice: 2499,
    colors: ["#2D3E50", "#F1A7C7", "#4D3D44"],
    category: "KID'S CLOTHING",
    brand: "Carter's",
    displayImage:
      "https://images.pexels.com/photos/4756849/pexels-photo-4756849.jpeg",
    ratings: 4,
    reviews: [
      "My son loves this hoodie! It keeps him warm and the dinosaur design is adorable.",
      "Perfect for chilly weather, fits well and looks great.",
      "Very soft fabric, great quality for the price.",
    ],
    longDescription:
      "This Carter's Dinosaur Hoodie is a perfect pick for chilly days, made with soft cotton fabric. Its playful dinosaur print makes it a favorite for little ones.",
    overview: [
      "This hoodie is made from 100% cotton, ensuring comfort and warmth during the colder months. It's perfect for outdoor play or casual outings.",
      "The design features a cute dinosaur motif on the front, with a hood for added warmth. Available in vibrant colors like navy blue and pink, it's easy to match with other outfits.",
      "Easy to care for with machine washable fabric. It also comes with ribbed cuffs to prevent sleeves from rolling up, keeping your child comfortable all day long.",
    ],
    keyFeatures: [
      {
        Material: "100% Cotton",
      },
      {
        Design: "Dinosaur motif",
      },
      {
        Closure: "Front zip closure",
      },
      {
        Care: "Machine washable",
      },
      {
        Season: "Fall/Winter",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/29733397/pexels-photo-29733397.jpeg",
      "https://images.pexels.com/photos/6958527/pexels-photo-6958527.jpeg",
      "https://images.pexels.com/photos/6743187/pexels-photo-6743187.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/8506417/pexels-photo-8506417.jpeg",
  },
  {
    id: "KICAG2",
    title: "Carter's Dinosaur Pajama Set",
    shortDescription: "Fun & comfy pajamas",
    discountedPrice: 1299,
    originalPrice: 1599,
    colors: ["#4B97A2", "#F6A9C0"],
    category: "KID'S CLOTHING",
    brand: "Carter's",
    displayImage:
      "https://images.pexels.com/photos/8014584/pexels-photo-8014584.jpeg",
    ratings: 5,
    reviews: [
      "These pajamas are so soft, my daughter sleeps better in them!",
      "Great quality, the dinosaur design is a hit with my son.",
      "Good fit and the fabric is breathable, perfect for bedtime.",
    ],
    longDescription:
      "The Carter's Dinosaur Pajama Set is perfect for a cozy night’s sleep. Made from breathable cotton, it features a playful dinosaur print that your child will love.",
    overview: [
      "Crafted from soft, breathable cotton, these pajamas ensure a comfortable night’s sleep for your little one. The set includes a long-sleeve top and pants.",
      "Available in cheerful colors, the design features playful dinosaur graphics, making it a fun bedtime outfit. It's gentle on the skin, perfect for sensitive skin types.",
      "The pants feature an elastic waistband, allowing for a snug yet flexible fit, while the top has a soft crew neck for comfort. Durable and long-lasting fabric.",
    ],
    keyFeatures: [
      {
        Material: "Soft Cotton",
      },
      {
        Design: "Dinosaur print",
      },
      {
        Fit: "Elastic waistband",
      },
      {
        Care: "Machine washable",
      },
      {
        Season: "All year round",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/8014627/pexels-photo-8014627.jpeg",
      "https://images.pexels.com/photos/8014531/pexels-photo-8014531.jpeg",
      "https://images.pexels.com/photos/8014601/pexels-photo-8014601.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/8501417/pexels-photo-8501417.jpeg",
  },
  {
    id: "KICAK3",
    title: "Carter's Bear Overalls",
    shortDescription: "Cute overalls for toddlers",
    discountedPrice: 1699,
    originalPrice: 1999,
    colors: ["#F5A623", "#D37F4E"],
    category: "KID'S CLOTHING",
    brand: "Carter's",
    displayImage:
      "https://images.pexels.com/photos/7169667/pexels-photo-7169667.jpeg",
    ratings: 4,
    reviews: [
      "These overalls are adorable and fit my toddler perfectly. Great for both playtime and casual outings.",
      "The material is sturdy, and the bear design is so cute!",
      "Love the pockets and how easy it is to put on and take off.",
    ],
    longDescription:
      "These Carter's Bear Overalls are perfect for your toddler. Featuring a fun bear face on the front, they are made from soft, durable denim fabric that can withstand play.",
    overview: [
      "Crafted from durable denim, these overalls are built to last while offering comfort for your little one. The bear design adds a playful touch, making them extra special.",
      "The front features functional pockets and adjustable straps, ensuring a comfortable fit for growing toddlers. These overalls are perfect for daily wear or casual outings.",
      "Available in bright and neutral colors, these overalls can easily be paired with t-shirts or long sleeves for different weather conditions. Machine washable for easy care.",
    ],
    keyFeatures: [
      {
        Material: "Denim",
      },
      {
        Design: "Bear face embroidery",
      },
      {
        Pockets: "Front pockets for storage",
      },
      {
        Straps: "Adjustable for perfect fit",
      },
      {
        Care: "Machine washable",
      },
    ],
    isBestseller: false,
    additionalImages: [
      "https://images.pexels.com/photos/20582550/pexels-photo-20582550.jpeg",
      "https://images.pexels.com/photos/5434078/pexels-photo-5434078.jpeg",
      "https://images.pexels.com/photos/25365226/pexels-photo-25365226.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/26385465/pexels-photo-26385465.jpeg",
  },
  {
    id: "KICAJ5",
    title: "Carter's Rainbow T-Shirt",
    shortDescription: "Colorful t-shirt for kids",
    discountedPrice: 999,
    originalPrice: 1199,
    colors: ["#F9A8D4", "#F4B9A9", "#69C6F4"],
    category: "KID'S CLOTHING",
    brand: "Carter's",
    displayImage:
      "https://images.pexels.com/photos/13230417/pexels-photo-13230417.jpeg",
    ratings: 3,
    reviews: [
      "Very comfortable and colorful. Perfect for summer.",
      "Nice t-shirt, though it’s a bit big for my kid, but the fabric is soft.",
      "The colors are vibrant, and it fits well for casual wear.",
    ],
    longDescription:
      "The Carter's Rainbow T-Shirt is perfect for casual outings, featuring vibrant rainbow stripes and soft cotton fabric for all-day comfort.",
    overview: [
      "Made with 100% soft cotton, this t-shirt offers comfort and breathability, perfect for warmer days. Its rainbow design brings a fun, cheerful vibe to your child’s wardrobe.",
      "The t-shirt features a classic crewneck design and short sleeves, making it an ideal piece for layering or wearing alone in warm weather.",
      "Machine washable, this t-shirt is easy to care for and durable enough to handle frequent washing. Available in a variety of sizes for growing kids.",
    ],
    keyFeatures: [
      {
        Material: "100% Cotton",
      },
      {
        Design: "Vibrant rainbow stripes",
      },
      {
        Fit: "Classic crewneck",
      },
      {
        Care: "Machine washable",
      },
      {
        Season: "Spring/Summer",
      },
    ],
    isBestseller: false,
    additionalImages: [
      "https://images.pexels.com/photos/1449934/pexels-photo-1449934.jpeg",
      "https://images.pexels.com/photos/8471964/pexels-photo-8471964.jpeg",
      "https://images.pexels.com/photos/6964692/pexels-photo-6964692.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/9088667/pexels-photo-9088667.jpeg",
  },
  {
    id: "KICAM2",
    title: "Carter's Unicorn Dress",
    shortDescription: "Magical unicorn dress",
    discountedPrice: 2299,
    originalPrice: 2699,
    colors: ["#C6A3C3", "#D67A9F", "#9E7BAE"],
    category: "KID'S CLOTHING",
    brand: "Carter's",
    displayImage:
      "https://images.pexels.com/photos/29373514/pexels-photo-29373514.jpeg",
    ratings: 5,
    reviews: [
      "My daughter loves this dress! It's perfect for special occasions and everyday wear.",
      "The unicorn design is magical, and the fabric is so comfortable!",
      "A beautiful dress with great quality. Highly recommended for little ones.",
    ],
    longDescription:
      "The Carter's Unicorn Dress is a whimsical piece that your child will adore. Featuring a unicorn design with soft, flowy fabric, it’s perfect for both play and parties.",
    overview: [
      "This dress is made from soft cotton and a touch of polyester for a comfortable yet durable fit. It features a magical unicorn graphic that will captivate any child.",
      "The dress has a soft, elastic waistband for a perfect fit, and the skirt flows out beautifully, allowing for easy movement. The design is ideal for both casual and dressy occasions.",
      "Perfect for warm-weather outings, this dress pairs wonderfully with sandals or sneakers. It’s easy to care for and retains its color after multiple washes.",
    ],
    keyFeatures: [
      {
        Material: "Cotton and Polyester blend",
      },
      {
        Design: "Unicorn graphic",
      },
      {
        Waistband: "Elastic for easy fit",
      },
      {
        Care: "Machine washable",
      },
      {
        Occasion: "Casual and Dressy",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/12714100/pexels-photo-12714100.jpeg",
      "https://images.pexels.com/photos/8501895/pexels-photo-8501895.jpeg",
      "https://images.pexels.com/photos/5774948/pexels-photo-5774948.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/8385035/pexels-photo-8385035.jpeg",
  },
  {
    id: "BESE01",
    title: "Sephora Collection Lipstick",
    shortDescription: "Long-lasting matte lipstick in bold shades",
    discountedPrice: 1999,
    originalPrice: 2499,
    colors: ["#FF6347", "#800080", "#DC143C"],
    category: "BEAUTY",
    brand: "Sephora",
    displayImage:
      "https://images.pexels.com/photos/18976786/pexels-photo-18976786.jpeg",
    ratings: 4.6,
    reviews: [
      "Amazing color payoff, lasts all day.",
      "Perfect for both day and night looks.",
      "Comfortable matte finish, no drying.",
      "Great variety of shades.",
    ],
    longDescription:
      "Sephora's matte lipstick offers vibrant color and a long-lasting matte finish that stays put for hours. Available in a wide range of shades to suit every occasion.",
    overview: [
      "Sephora Collection Lipstick is formulated to deliver intense color with a smooth matte finish. The lipstick glides effortlessly on your lips and provides long-lasting wear without the need for frequent touch-ups. It’s available in a wide range of bold shades that complement any skin tone, making it suitable for both casual and formal occasions.",
      "The matte formula is non-drying, ensuring that your lips remain comfortable throughout the day. Its rich pigments provide full coverage in just one swipe, allowing you to achieve a bold look effortlessly. The sleek design of the lipstick makes it easy to carry in your bag, making it perfect for on-the-go use.",
      "This lipstick not only enhances the beauty of your lips but also offers a weightless feel. Whether you're preparing for a busy day at work or a night out, it stays in place, ensuring you look fresh all day long. Sephora's commitment to quality means you can trust this product to give you a flawless finish every time.",
    ],
    keyFeatures: [
      {
        key: "Finish",
        value: "Matte",
      },
      {
        key: "Wear",
        value: "Long-lasting",
      },
      {
        key: "Formula",
        value: "Non-drying",
      },
      {
        key: "Shade Range",
        value: "Multiple bold shades",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/15545362/pexels-photo-15545362.jpeg",
      "https://images.pexels.com/photos/7290121/pexels-photo-7290121.jpeg",
      "https://images.pexels.com/photos/7290124/pexels-photo-7290124.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/16521920/pexels-photo-16521920.jpeg",
  },
  {
    id: "BESESF",
    title: "Sephora Face Primer",
    shortDescription: "Smooths and hydrates skin before makeup application",
    discountedPrice: 2499,
    originalPrice: 2999,
    colors: ["#F5F5F5"],
    category: "BEAUTY",
    brand: "Sephora",
    displayImage:
      "https://images.pexels.com/photos/28112137/pexels-photo-28112137.jpeg",
    ratings: 4.5,
    reviews: [
      "Makes my skin feel so smooth.",
      "Great for prepping skin before makeup.",
      "Keeps makeup in place all day.",
      "Hydrating without being greasy.",
    ],
    longDescription:
      "Sephora's face primer hydrates and smooths the skin, creating the perfect canvas for makeup application. Ideal for all skin types.",
    overview: [
      "Sephora Face Primer is a versatile product designed to hydrate, smooth, and prepare your skin for flawless makeup application. This lightweight primer provides an even base, filling in fine lines and blurring imperfections. It creates a smooth canvas, allowing your foundation to glide on easily and last longer throughout the day.",
      "The primer's hydrating formula ensures your skin feels moisturized without being greasy, making it perfect for all skin types, including those with dry or combination skin. It absorbs quickly into the skin, leaving it soft and supple. Whether you're preparing for an important event or your daily routine, this primer enhances the longevity of your makeup.",
      "This product also works well with other Sephora products, creating a seamless makeup experience. It controls shine and keeps your face looking fresh, even in humid conditions. Sephora Face Primer is perfect for those who need a product that enhances makeup application and keeps their skin looking smooth and hydrated all day long.",
    ],
    keyFeatures: [
      {
        key: "Hydration",
        value: "Moisturizes and smooths skin",
      },
      {
        key: "Formula",
        value: "Lightweight and non-greasy",
      },
      {
        key: "Finish",
        value: "Smooth, flawless canvas",
      },
      {
        key: "Suitability",
        value: "All skin types",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/7290736/pexels-photo-7290736.jpeg",
      "https://images.pexels.com/photos/8990592/pexels-photo-8990592.jpeg",
      "https://images.pexels.com/photos/7290197/pexels-photo-7290197.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/8990588/pexels-photo-8990588.jpeg",
  },
  {
    id: "BESE03",
    title: "Sephora Collection Mascara",
    shortDescription: "Volumizing mascara for dramatic lashes",
    discountedPrice: 1299,
    originalPrice: 1699,
    colors: ["#000000"],
    category: "BEAUTY",
    brand: "Sephora",
    displayImage:
      "https://images.pexels.com/photos/5128088/pexels-photo-5128088.jpeg",
    ratings: 4.4,
    reviews: [
      "Gives my lashes great volume.",
      "Makes my lashes look fuller.",
      "No clumps, just beautiful lashes.",
      "Perfect for a natural look.",
    ],
    longDescription:
      "This volumizing mascara from Sephora gives your lashes a fuller, dramatic look without the clumps. The formula is long-lasting and designed to withstand smudging or flaking.",
    overview: [
      "Sephora Collection Mascara is crafted to enhance the volume and length of your lashes. The innovative brush ensures each lash is coated with product, giving you the dramatic effect you desire. Whether you're aiming for a natural look or a more voluminous style, this mascara provides flexible coverage to meet your needs.",
      "The lightweight formula doesn’t weigh down your lashes, and it’s buildable, so you can apply additional layers to achieve the desired fullness. It’s designed to resist flaking or smudging, ensuring your lashes stay perfect throughout the day. Perfect for both everyday wear and special occasions, Sephora’s mascara is a must-have in any makeup routine.",
      "With its sleek packaging, Sephora Mascara is easy to carry around and is designed to apply effortlessly. The formula is gentle enough for sensitive eyes, and the mascara is ophthalmologist-tested, making it a safe option for those who wear contact lenses.",
    ],
    keyFeatures: [
      {
        key: "Volume",
        value: "Volumizing",
      },
      {
        key: "Brush",
        value: "Clump-free, flexible coverage",
      },
      {
        key: "Formula",
        value: "Long-lasting, smudge-proof",
      },
      {
        key: "Suitability",
        value: "All skin types, Ophthalmologist-tested",
      },
    ],
    isBestseller: false,
    additionalImages: [
      "https://images.pexels.com/photos/7521143/pexels-photo-7521143.jpeg",
      "https://images.pexels.com/photos/2626945/pexels-photo-2626945.jpeg",
      "https://images.pexels.com/photos/21412169/pexels-photo-21412169.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/5128180/pexels-photo-5128180.jpeg",
  },
  {
    id: "BESE04",
    title: "Sephora Eye Shadow Palette",
    shortDescription: "Rich pigments in matte and shimmer shades",
    discountedPrice: 3499,
    originalPrice: 3999,
    colors: ["#8B4513", "#D2691E", "#C71585", "#800080"],
    category: "BEAUTY",
    brand: "Sephora",
    displayImage:
      "https://images.pexels.com/photos/29611438/pexels-photo-29611438.jpeg",
    ratings: 4.7,
    reviews: [
      "These shades are perfect for day and night looks.",
      "Pigment is rich and blends easily.",
      "I love the shimmer shades, very beautiful.",
      "Great palette for all seasons.",
    ],
    longDescription:
      "This eye shadow palette from Sephora features rich, highly-pigmented matte and shimmer shades. Perfect for creating versatile eye looks, whether you prefer a subtle or bold style.",
    overview: [
      "Sephora Eye Shadow Palette comes with a variety of shades, including both matte and shimmer finishes, allowing you to create an endless array of looks. The formula is smooth and blendable, providing intense color with every application. Whether you're going for a natural look or something more dramatic, this palette gives you all the options you need.",
      "Each shadow is formulated to last throughout the day, with a creamy texture that ensures smooth application. The shimmer shades add an extra pop to your eyes, perfect for evening looks. You can easily create a gradient effect or a full-on bold eye with the variety of shades available in this palette.",
      "Designed to cater to all skin tones, the colors in the Sephora Eye Shadow Palette are versatile and wearable year-round. The sleek packaging makes it travel-friendly, and the mirror inside allows for easy application on the go.",
    ],
    keyFeatures: [
      {
        key: "Finish",
        value: "Matte and shimmer",
      },
      {
        key: "Pigment",
        value: "Rich, buildable",
      },
      {
        key: "Application",
        value: "Smooth and blendable",
      },
      {
        key: "Suitability",
        value: "All skin tones",
      },
    ],
    isBestseller: false,
    additionalImages: [
      "https://images.pexels.com/photos/6763620/pexels-photo-6763620.jpeg",
      "https://images.pexels.com/photos/14442035/pexels-photo-14442035.jpeg",
      "https://images.pexels.com/photos/4620874/pexels-photo-4620874.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/7712432/pexels-photo-7712432.jpeg",
  },
  {
    id: "BESE05",
    title: "Sephora All-Night Setting Spray",
    shortDescription: "Keeps makeup in place all day",
    discountedPrice: 1599,
    originalPrice: 1999,
    colors: ["#000000"],
    category: "BEAUTY",
    brand: "Sephora",
    displayImage:
      "https://images.pexels.com/photos/7706768/pexels-photo-7706768.jpeg",
    ratings: 4.8,
    reviews: [
      "Keeps my makeup fresh all day.",
      "Perfect for setting makeup in hot weather.",
      "No touch-ups needed, love it!",
      "Best setting spray I’ve ever used.",
    ],
    longDescription:
      "Sephora's setting spray locks makeup in place, ensuring it lasts all day without smudging or fading. Ideal for all skin types, this lightweight spray is a must-have in any beauty routine.",
    overview: [
      "Sephora All-Night Setting Spray is designed to keep your makeup intact from morning to night. Whether you're heading to work or a night out, this setting spray ensures your makeup stays fresh, preventing any smudging or fading.",
      "The formula is lightweight and non-sticky, making it suitable for all skin types. It helps to control shine while leaving your skin feeling refreshed and hydrated. With just a few spritzes, you can lock in your makeup without any heaviness or greasy residue.",
      "This setting spray is a beauty essential, especially in humid conditions or during long hours of wear. It creates a flawless finish, giving your makeup that just-applied look all day long. The compact bottle makes it easy to carry around for quick touch-ups.",
    ],
    keyFeatures: [
      {
        key: "Finish",
        value: "Matte and fresh",
      },
      {
        key: "Duration",
        value: "All-day wear",
      },
      {
        key: "Formula",
        value: "Lightweight, non-sticky",
      },
      {
        key: "Suitability",
        value: "All skin types",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/15921520/pexels-photo-15921520.jpeg",
      "https://images.pexels.com/photos/29638441/pexels-photo-29638441.jpeg",
      "https://images.pexels.com/photos/29337409/pexels-photo-29337409.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/13953329/pexels-photo-13953329.jpeg",
  },
  {
    id: "BEMAD3",
    title: "MAC Studio Fix Fluid Foundation",
    shortDescription:
      "Long-lasting foundation with a matte finish and full coverage",
    discountedPrice: 2800,
    originalPrice: 3500,
    colors: ["#F5C7B1", "#F0D0A1", "#D88E6A"],
    category: "BEAUTY",
    brand: "MAC",
    displayImage:
      "https://images.pexels.com/photos/5403543/pexels-photo-5403543.jpeg",
    ratings: 4.7,
    reviews: [
      "Provides great coverage and lasts all day.",
      "Perfect for oily skin with a matte finish.",
      "Great product, but a bit heavy for daily wear.",
    ],
    longDescription:
      "MAC Studio Fix Fluid Foundation offers buildable, full coverage with a matte finish that controls shine. Ideal for all-day wear, it helps minimize the appearance of pores while providing a flawless finish.",
    overview: [
      "MAC Studio Fix Fluid Foundation provides high coverage that lasts up to 24 hours without fading, giving a smooth, matte finish that controls oil throughout the day.",
      "It is available in a variety of shades to match different skin tones and is perfect for those with oily and combination skin.",
      "This foundation blends easily and provides a lightweight feel without compromising on coverage, making it suitable for both everyday wear and special occasions.",
    ],
    keyFeatures: [
      {
        Coverage: "Full coverage",
      },
      {
        Finish: "Matte",
      },
      {
        "Skin Type": "Oily, Combination",
      },
      {
        Longevity: "24-hour wear",
      },
      {
        Occasion: "Daily wear, special events",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/5476580/pexels-photo-5476580.jpeg",
      "https://images.pexels.com/photos/8981524/pexels-photo-8981524.jpeg",
      "https://images.pexels.com/photos/8956144/pexels-photo-8956144.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/8129912/pexels-photo-8129912.jpeg",
  },
  {
    id: "BEMAG6",
    title: "MAC Retro Matte Lipstick",
    shortDescription: "Bold, long-wearing lipstick with a matte finish",
    discountedPrice: 1900,
    originalPrice: 2400,
    colors: ["#D1001F", "#FF5A7A", "#A4001C"],
    category: "BEAUTY",
    brand: "MAC",
    displayImage:
      "https://images.pexels.com/photos/18976786/pexels-photo-18976786.jpeg",
    ratings: 4.8,
    reviews: [
      "Lasts for hours without touch-ups.",
      "The color payoff is amazing, and it feels comfortable on the lips.",
      "A bit drying, but the color is worth it.",
    ],
    longDescription:
      "MAC Retro Matte Lipstick offers a rich, long-wearing formula with an intense matte finish. Available in a range of bold shades, it delivers high-impact color with a non-drying, lightweight feel.",
    overview: [
      "The Retro Matte formula is designed for those who love bold, long-lasting color that doesn’t fade over time.",
      "It provides a creamy application that dries to a smooth, velvety matte finish, making it ideal for both daytime and evening looks.",
      "Whether you're attending a special event or want something that lasts throughout the day, this lipstick offers the perfect matte finish without feeling heavy on the lips.",
    ],
    keyFeatures: [
      {
        Finish: "Matte",
      },
      {
        Longevity: "Long-wearing",
      },
      {
        Texture: "Creamy",
      },
      {
        Occasion: "Daily wear, evening events",
      },
      {
        Shades: "Variety of bold shades",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/15545362/pexels-photo-15545362.jpeg",
      "https://images.pexels.com/photos/6527701/pexels-photo-6527701.jpeg",
      "https://images.pexels.com/photos/17243615/pexels-photo-17243615.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg",
  },
  {
    id: "BEMAJ9",
    title: "MAC Fix+ Setting Spray",
    shortDescription:
      "Hydrating setting spray to lock in makeup for all-day wear",
    discountedPrice: 2000,
    originalPrice: 2500,
    colors: ["#FFFFFF"],
    category: "BEAUTY",
    brand: "MAC",
    displayImage:
      "https://images.pexels.com/photos/4153782/pexels-photo-4153782.jpeg",
    ratings: 4.6,
    reviews: [
      "Keeps makeup in place all day.",
      "Gives a nice dewy finish and feels refreshing.",
      "A must-have for makeup enthusiasts.",
    ],
    longDescription:
      "MAC Fix+ Setting Spray is a refreshing mist that hydrates and sets makeup. It helps to lock in your makeup, ensuring it lasts all day while giving your skin a smooth, hydrated finish.",
    overview: [
      "MAC Fix+ Setting Spray is ideal for creating a flawless finish and extending the wear of your makeup throughout the day.",
      "This lightweight mist hydrates the skin while keeping makeup in place, ensuring that it remains fresh and vibrant.",
      "Its versatile formula can also be used to refresh your makeup during the day, providing an instant boost of hydration for a radiant, glowing look.",
    ],
    keyFeatures: [
      {
        Finish: "Dewy",
      },
      {
        "Skin Type": "All skin types",
      },
      {
        Use: "Pre- or post-makeup",
      },
      {
        Occasion: "Daily wear, long-lasting makeup",
      },
      {
        Hydration: "Hydrating formula",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/2587176/pexels-photo-2587176.jpeg",
      "https://images.pexels.com/photos/3059608/pexels-photo-3059608.jpeg",
      "https://images.pexels.com/photos/13964189/pexels-photo-13964189.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/10606482/pexels-photo-10606482.jpeg",
  },
  {
    id: "BEMAM3",
    title: "MAC Mineralize Skinfinish Natural",
    shortDescription: "A natural, buildable powder for a healthy, radiant glow",
    discountedPrice: 2300,
    originalPrice: 2900,
    colors: ["#F1D0A6", "#C69C6D", "#B28B60"],
    category: "BEAUTY",
    brand: "MAC",
    displayImage:
      "https://images.pexels.com/photos/8129912/pexels-photo-8129912.jpeg",
    ratings: 4.7,
    reviews: [
      "Perfect for setting makeup or adding a subtle glow.",
      "Buildable coverage without feeling heavy.",
      "Gives a natural, airbrushed look.",
    ],
    longDescription:
      "MAC Mineralize Skinfinish Natural is a soft, buildable powder that delivers a natural, radiant finish. It enhances the complexion with a light, luminous glow and sets makeup without feeling cakey.",
    overview: [
      "MAC Mineralize Skinfinish Natural is a finely milled powder that provides a natural, radiant glow while setting makeup.",
      "This product can be used for all skin types, providing buildable coverage for a flawless finish.",
      "Perfect for both subtle touch-ups and full-face application, it ensures a glowing, airbrushed effect that’s perfect for everyday wear.",
    ],
    keyFeatures: [
      {
        Finish: "Natural, luminous",
      },
      {
        Coverage: "Buildable",
      },
      {
        Use: "Setting makeup, enhancing glow",
      },
      {
        Occasion: "Daily wear, touch-ups",
      },
      {
        "Skin Type": "All skin types",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/6476074/pexels-photo-6476074.jpeg",
      "https://images.pexels.com/photos/8343930/pexels-photo-8343930.jpeg",
      "https://images.pexels.com/photos/6706882/pexels-photo-6706882.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/6977992/pexels-photo-6977992.jpeg",
  },
  {
    id: "BEMAP6",
    title: "MAC Prep + Prime Lip Base",
    shortDescription:
      "Lip primer to hydrate, smooth, and extend the wear of lip color",
    discountedPrice: 1500,
    originalPrice: 1900,
    colors: ["#F0C7B1"],
    category: "BEAUTY",
    brand: "MAC",
    displayImage:
      "https://images.pexels.com/photos/4371777/pexels-photo-4371777.jpeg",
    ratings: 4.5,
    reviews: [
      "Keeps lip color in place for hours.",
      "Makes lipstick application smoother.",
      "Hydrates lips and prevents feathering.",
    ],
    longDescription:
      "MAC Prep + Prime Lip Base is a nourishing primer that smooths and hydrates the lips, creating the perfect base for lipstick application. It helps prevent feathering and increases the longevity of lip color.",
    overview: [
      "MAC Prep + Prime Lip Base creates a smooth canvas for lipstick application, allowing colors to go on more evenly.",
      "Its moisturizing formula ensures the lips stay hydrated, preventing the color from feathering or fading throughout the day.",
      "The product is a must-have for those who want long-lasting lip color that stays in place and provides a flawless finish.",
    ],
    keyFeatures: [
      {
        Hydration: "Hydrating formula",
      },
      {
        Use: "Lip primer",
      },
      {
        Benefit: "Prevents feathering, extends wear",
      },
      {
        Occasion: "Daily wear, special events",
      },
      {
        Texture: "Smooth, creamy",
      },
    ],
    isBestseller: false,
    additionalImages: [
      "https://images.pexels.com/photos/7691379/pexels-photo-7691379.jpeg",
      "https://images.pexels.com/photos/6978057/pexels-photo-6978057.jpeg",
      "https://images.pexels.com/photos/8303439/pexels-photo-8303439.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/9516029/pexels-photo-9516029.jpeg",
  },
  {
    id: "BELOC3",
    title: "L'Oréal Paris Infallible 24H Fresh Wear Foundation",
    shortDescription:
      "Long-lasting foundation with buildable coverage for a natural finish",
    discountedPrice: 1200,
    originalPrice: 1500,
    colors: ["#F5D0A9", "#F1C6A1", "#D08F66"],
    category: "BEAUTY",
    brand: "L'Oréal",
    displayImage:
      "https://images.pexels.com/photos/8956126/pexels-photo-8956126.jpeg",
    ratings: 4.6,
    reviews: [
      "Amazing coverage and long-lasting.",
      "Feels light on the skin and lasts all day.",
      "Great for oily skin, doesn’t cake or feel heavy.",
    ],
    longDescription:
      "L'Oréal Paris Infallible 24H Fresh Wear Foundation offers long-lasting, buildable coverage that remains fresh and natural throughout the day. It resists sweat, water, and transfer, providing a flawless matte finish.",
    overview: [
      "This foundation is designed to give full coverage with a breathable, lightweight feel. It provides all-day wear without fading, perfect for busy days or special events.",
      "Its formula adapts to your skin's tone and texture, ensuring a smooth, even complexion with a natural finish.",
      "The foundation is sweat-resistant, making it an ideal choice for those living in humid climates or with active lifestyles.",
    ],
    keyFeatures: [
      {
        Coverage: "Buildable, full coverage",
      },
      {
        Finish: "Natural matte",
      },
      {
        "Skin Type": "Oily, Combination",
      },
      {
        Longevity: "24-hour wear",
      },
      {
        Occasion: "Daily wear, special events",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/5214202/pexels-photo-5214202.jpeg",
      "https://images.pexels.com/photos/8129912/pexels-photo-8129912.jpeg",
      "https://images.pexels.com/photos/7290736/pexels-photo-7290736.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/8128679/pexels-photo-8128679.jpeg",
  },
  {
    id: "BELOH6",
    title: "L'Oréal Paris Voluminous Lash Paradise Mascara",
    shortDescription:
      "Volumizing mascara for lush, thick lashes with intense black color",
    discountedPrice: 850,
    originalPrice: 1200,
    colors: ["#000000"],
    category: "BEAUTY",
    brand: "L'Oréal",
    displayImage:
      "https://images.pexels.com/photos/5128077/pexels-photo-5128077.jpeg",
    ratings: 4.7,
    reviews: [
      "Gives amazing volume and length.",
      "Doesn’t clump and provides dramatic lashes.",
      "Long-lasting with a rich, dark color.",
    ],
    longDescription:
      "L'Oréal Paris Voluminous Lash Paradise Mascara enhances lashes with intense volume and length. Its smooth formula coats each lash from root to tip, delivering lush, voluminous lashes with no clumping.",
    overview: [
      "This mascara adds a dramatic volume to lashes, making them appear fuller and more defined with every stroke.",
      "The formula is enriched with a smooth, creamy texture that provides a smooth application without any clumping or flaking.",
      "Its long-lasting, waterproof formula ensures that your lashes stay voluminous and beautiful throughout the day.",
    ],
    keyFeatures: [
      {
        Volume: "High-volume effect",
      },
      {
        Length: "Long-lasting length",
      },
      {
        Formula: "Creamy, non-clumping",
      },
      {
        Finish: "Intense black",
      },
      {
        Occasion: "Daily wear, special events",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/5128088/pexels-photo-5128088.jpeg",
      "https://images.pexels.com/photos/5128084/pexels-photo-5128084.jpeg",
      "https://images.pexels.com/photos/5128093/pexels-photo-5128093.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/5128264/pexels-photo-5128264.jpeg",
  },
  {
    id: "BELOL9",
    title: "L'Oréal Paris True Match Super-Blendable Blush",
    shortDescription:
      "Blendable blush with a soft, natural finish for a healthy glow",
    discountedPrice: 600,
    originalPrice: 900,
    colors: ["#F1A7A5", "#E85D55", "#D46C60"],
    category: "BEAUTY",
    brand: "L'Oréal",
    displayImage:
      "https://images.pexels.com/photos/5403547/pexels-photo-5403547.jpeg",
    ratings: 4.5,
    reviews: [
      "Blends seamlessly and gives a natural flush.",
      "Perfect for a soft, everyday look.",
      "Provides a subtle glow without being too overpowering.",
    ],
    longDescription:
      "L'Oréal Paris True Match Super-Blendable Blush delivers a smooth, natural-looking flush of color. Its lightweight formula blends effortlessly into the skin, offering a healthy, radiant glow.",
    overview: [
      "This blush enhances the natural tone of your skin, giving you a fresh, youthful appearance.",
      "Its soft, blendable formula can be built up to your desired intensity, making it perfect for both everyday looks and special occasions.",
      "Available in a wide range of shades, True Match Blush complements all skin tones for a flawless finish.",
    ],
    keyFeatures: [
      {
        Finish: "Natural, soft glow",
      },
      {
        Blendability: "Seamlessly blends",
      },
      {
        Occasion: "Everyday wear, special events",
      },
      {
        "Skin Tone": "All skin tones",
      },
      {
        Buildability: "Buildable intensity",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/16215701/pexels-photo-16215701.jpeg",
      "https://images.pexels.com/photos/3762663/pexels-photo-3762663.jpeg",
      "https://images.pexels.com/photos/8128694/pexels-photo-8128694.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/8128696/pexels-photo-8128696.jpeg",
  },
  {
    id: "BELOO3",
    title: "L'Oréal Paris Age Perfect Radiant Serum Foundation",
    shortDescription:
      "Serum foundation that hydrates and reduces the appearance of wrinkles",
    discountedPrice: 1500,
    originalPrice: 2000,
    colors: ["#F4D2A2", "#E6C8A1", "#D1A672"],
    category: "BEAUTY",
    brand: "L'Oréal",
    displayImage:
      "https://images.pexels.com/photos/17545642/pexels-photo-17545642.jpeg",
    ratings: 4.8,
    reviews: [
      "Hydrating and provides great coverage.",
      "Feels light and smooth on the skin.",
      "Perfect for mature skin, reduces the appearance of fine lines.",
    ],
    longDescription:
      "L'Oréal Paris Age Perfect Radiant Serum Foundation combines the benefits of a foundation with the nourishing power of a serum. It provides buildable coverage while improving skin tone and texture, making it ideal for mature skin.",
    overview: [
      "This foundation is designed to enhance the natural radiance of mature skin while offering a smooth, even finish.",
      "Its serum-based formula is enriched with nourishing ingredients, providing hydration and improving skin texture over time.",
      "Perfect for individuals seeking a foundation that not only covers imperfections but also cares for their skin with a lightweight, radiant finish.",
    ],
    keyFeatures: [
      {
        Coverage: "Buildable",
      },
      {
        Finish: "Radiant, dewy",
      },
      {
        "Skin Type": "Mature skin",
      },
      {
        Hydration: "Hydrating formula",
      },
      {
        Occasion: "Everyday wear, special events",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/8955913/pexels-photo-8955913.jpeg",
      "https://images.pexels.com/photos/8956129/pexels-photo-8956129.jpeg",
      "https://images.pexels.com/photos/8956144/pexels-photo-8956144.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/7290172/pexels-photo-7290172.jpeg",
  },
  {
    id: "BELOR6",
    title: "L'Oréal Paris Extraordinary Oil Hair Treatment",
    shortDescription:
      "Lightweight hair oil for nourishing and shine without the greasiness",
    discountedPrice: 1000,
    originalPrice: 1200,
    colors: ["#FFD700"],
    category: "BEAUTY",
    brand: "L'Oréal",
    displayImage:
      "https://images.pexels.com/photos/28994394/pexels-photo-28994394.jpeg",
    ratings: 4.6,
    reviews: [
      "Makes my hair soft and shiny.",
      "Perfect for dry hair, gives it a smooth finish.",
      "Doesn’t weigh down hair and adds a beautiful shine.",
    ],
    longDescription:
      "L'Oréal Paris Extraordinary Oil Hair Treatment is a lightweight, non-greasy oil that nourishes and enhances the shine of dry or dull hair. Its unique formula smooths hair, reduces frizz, and adds natural luster.",
    overview: [
      "This luxurious oil absorbs quickly into the hair, providing instant moisture and shine without leaving any residue.",
      "It helps to nourish and repair dry hair, making it softer and more manageable.",
      "Perfect for those with frizzy or coarse hair, this product leaves your hair looking smooth and shiny throughout the day.",
    ],
    keyFeatures: [
      {
        Benefit: "Nourishing, adds shine",
      },
      {
        "Hair Type": "Dry, frizzy",
      },
      {
        Formula: "Non-greasy",
      },
      {
        Occasion: "Daily use, special events",
      },
      {
        Texture: "Lightweight",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/6800925/pexels-photo-6800925.jpeg",
      "https://images.pexels.com/photos/7320795/pexels-photo-7320795.jpeg",
      "https://images.pexels.com/photos/8467963/pexels-photo-8467963.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/6801173/pexels-photo-6801173.jpeg",
  },
  {
    id: "ACFOC3",
    title: "Fossil Women's Riley Multifunction Stainless Steel Watch",
    shortDescription:
      "Elegant stainless steel watch with multifunctional display and date features",
    discountedPrice: 7500,
    originalPrice: 9500,
    colors: ["#C0C0C0", "#000000"],
    category: "ACCESSORIES",
    brand: "Fossil",
    displayImage:
      "https://images.pexels.com/photos/6343133/pexels-photo-6343133.jpeg",
    ratings: 4.7,
    reviews: [
      "Beautiful design and functional.",
      "Great for daily wear, looks stylish with everything.",
      "Accurate timekeeping and the date feature is handy.",
    ],
    longDescription:
      "The Fossil Women's Riley Multifunction Stainless Steel Watch combines style and functionality with its polished stainless steel band and chic design. It includes a multifunctional dial with day, date, and time features, making it both practical and fashionable.",
    overview: [
      "This watch offers a timeless, sophisticated look with its stainless steel design, making it ideal for both professional and casual settings.",
      "It features easy-to-read hour markers and a date display, ensuring that you always stay on schedule.",
      "With its durable build, this watch can withstand daily wear while maintaining its elegant appearance.",
    ],
    keyFeatures: [
      {
        Material: "Stainless steel",
      },
      {
        Functions: "Time, day, date display",
      },
      {
        Style: "Elegant, multifunctional",
      },
      {
        Occasion: "Daily wear, formal events",
      },
      {
        "Water Resistance": "Up to 50 meters",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/12163561/pexels-photo-12163561.jpeg",
      "https://images.pexels.com/photos/128619/pexels-photo-128619.jpeg",
      "https://images.pexels.com/photos/5669252/pexels-photo-5669252.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/8854209/pexels-photo-8854209.jpeg",
  },
  {
    id: "ACFOF5",
    title: "Fossil Men's Grant Chronograph Leather Watch",
    shortDescription:
      "Chronograph leather watch with vintage-inspired design and multiple sub-dials",
    discountedPrice: 9000,
    originalPrice: 11500,
    colors: ["#4B4B4B", "#2F4F4F"],
    category: "ACCESSORIES",
    brand: "Fossil",
    displayImage:
      "https://images.pexels.com/photos/5447382/pexels-photo-5447382.jpeg",
    ratings: 4.8,
    reviews: [
      "Excellent craftsmanship, love the vintage vibe.",
      "Perfect for formal or casual looks.",
      "The chronograph features work flawlessly.",
    ],
    longDescription:
      "The Fossil Men's Grant Chronograph Leather Watch is a perfect blend of classic and modern styles, featuring a rich leather strap and chronograph sub-dials. Its elegant design and versatile features make it suitable for various occasions.",
    overview: [
      "This watch combines traditional style with modern functionality, making it an excellent choice for fashion-forward individuals.",
      "The leather strap is soft and comfortable, providing a secure fit while enhancing the watch's sophisticated look.",
      "The chronograph features provide additional functionality, making it perfect for those who need precision and reliability.",
    ],
    keyFeatures: [
      {
        Material: "Genuine leather",
      },
      {
        Functions: "Chronograph, time display",
      },
      {
        Style: "Vintage-inspired",
      },
      {
        Occasion: "Formal events, casual wear",
      },
      {
        "Water Resistance": "Up to 50 meters",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/6804457/pexels-photo-6804457.jpeg",
      "https://images.pexels.com/photos/148953/pexels-photo-148953.jpeg",
      "https://images.pexels.com/photos/3800456/pexels-photo-3800456.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/3829442/pexels-photo-3829442.jpeg",
  },
  {
    id: "ACFOI8",
    title: "Fossil Women's Jacqueline Leather Watch",
    shortDescription:
      "Minimalistic leather watch with elegant dial and sleek design",
    discountedPrice: 6000,
    originalPrice: 7500,
    colors: ["#F4B2A4", "#B9A27E"],
    category: "ACCESSORIES",
    brand: "Fossil",
    displayImage:
      "https://images.pexels.com/photos/148953/pexels-photo-148953.jpeg",
    ratings: 4.5,
    reviews: [
      "Simple yet elegant, perfect for everyday wear.",
      "Very lightweight and comfortable.",
      "I love how versatile this piece is, it goes with everything.",
    ],
    longDescription:
      "The Fossil Women's Jacqueline Leather Watch offers a sleek, minimalistic design perfect for any occasion. Its elegant dial is complemented by a soft leather strap, creating a sophisticated timepiece for the modern woman.",
    overview: [
      "This watch is designed with simplicity in mind, offering a chic and versatile style that can be worn with any outfit.",
      "The leather strap ensures comfort, while the classic dial offers an easy-to-read display.",
      "Whether you're at the office or enjoying a weekend out, the Jacqueline leather watch adds a touch of class to your look.",
    ],
    keyFeatures: [
      {
        Material: "Genuine leather",
      },
      {
        Style: "Minimalistic, elegant",
      },
      {
        Occasion: "Daily wear, casual events",
      },
      {
        Dial: "Simple, easy-to-read",
      },
      {
        "Water Resistance": "Up to 30 meters",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/3829442/pexels-photo-3829442.jpeg",
      "https://images.pexels.com/photos/28296247/pexels-photo-28296247.jpeg",
      "https://images.pexels.com/photos/5447382/pexels-photo-5447382.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/15649358/pexels-photo-15649358.jpeg",
  },
  {
    id: "ACFO0L",
    title: "Fossil Women's Carlie Mini Stainless Steel Watch",
    shortDescription:
      "Miniature stainless steel watch with sleek design for a minimalist look",
    discountedPrice: 7500,
    originalPrice: 9500,
    colors: ["#B0B0B0", "#A2A2A2"],
    category: "ACCESSORIES",
    brand: "Fossil",
    displayImage:
      "https://images.pexels.com/photos/128619/pexels-photo-128619.jpeg",
    ratings: 4.6,
    reviews: [
      "Perfect size for small wrists, very elegant.",
      "Lightweight but durable.",
      "Great for minimalists who want something chic.",
    ],
    longDescription:
      "The Fossil Women's Carlie Mini Stainless Steel Watch is perfect for those who prefer subtle yet chic accessories. Its miniature design, paired with a stainless steel strap, makes it a stylish and lightweight choice for any occasion.",
    overview: [
      "With its minimalist design and petite size, this watch is ideal for those who prefer subtle accessories that still make a statement.",
      "The stainless steel band is both durable and comfortable, offering a sleek look that pairs well with both casual and formal outfits.",
      "The Carlie Mini Watch offers a simple, refined aesthetic that's perfect for a sophisticated, understated look.",
    ],
    keyFeatures: [
      {
        Material: "Stainless steel",
      },
      {
        Style: "Minimalist, chic",
      },
      {
        Occasion: "Casual wear, formal events",
      },
      {
        Dial: "Elegant, simple",
      },
      {
        "Water Resistance": "Up to 30 meters",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/278299/pexels-photo-278299.jpeg",
      "https://images.pexels.com/photos/6343133/pexels-photo-6343133.jpeg",
      "https://images.pexels.com/photos/5669252/pexels-photo-5669252.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/13695976/pexels-photo-13695976.jpeg",
  },
  {
    id: "ACFO13",
    title: "Fossil Men's Nate Chronograph Stainless Steel Watch",
    shortDescription:
      "Stainless steel chronograph watch with bold design and durable build",
    discountedPrice: 10500,
    originalPrice: 13000,
    colors: ["#2C2C2C", "#A2A2A2"],
    category: "ACCESSORIES",
    brand: "Fossil",
    displayImage:
      "https://images.pexels.com/photos/15649334/pexels-photo-15649334.jpeg",
    ratings: 4.9,
    reviews: [
      "Love the bold design and functionality.",
      "Chronograph is super accurate and easy to use.",
      "The stainless steel band is very sturdy.",
    ],
    longDescription:
      "The Fossil Men's Nate Chronograph Stainless Steel Watch offers a robust design with multiple chronograph sub-dials for enhanced functionality. Its sleek, modern look makes it a great addition to both casual and formal outfits.",
    overview: [
      "This chronograph watch is designed for those who need precision and style, featuring multiple sub-dials for enhanced functionality.",
      "The stainless steel construction ensures durability, while the bold design makes a statement on the wrist.",
      "Whether you're in the office or enjoying a weekend adventure, the Nate Chronograph Watch is built to keep up with your lifestyle.",
    ],
    keyFeatures: [
      {
        Material: "Stainless steel",
      },
      {
        Functions: "Chronograph, time display",
      },
      {
        Style: "Bold, robust",
      },
      {
        Occasion: "Casual, formal events",
      },
      {
        "Water Resistance": "Up to 100 meters",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/6343133/pexels-photo-6343133.jpeg",
      "https://images.pexels.com/photos/592815/pexels-photo-592815.jpeg",
      "https://images.pexels.com/photos/19051060/pexels-photo-19051060.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/8854209/pexels-photo-8854209.jpeg",
  },
  {
    id: "ACRAR3",
    title: "Ray-Ban Aviator Classic Sunglasses",
    shortDescription:
      "Classic aviator sunglasses with metal frame and mirrored lenses",
    discountedPrice: 12000,
    originalPrice: 15000,
    colors: ["#A9A9A9", "#000000"],
    category: "ACCESSORIES",
    brand: "Ray-Ban",
    displayImage:
      "https://images.pexels.com/photos/1705391/pexels-photo-1705391.png",
    ratings: 4.9,
    reviews: [
      "Great for outdoor activities and everyday wear.",
      "The design is timeless and looks great with any outfit.",
      "Very comfortable and lightweight, perfect for long use.",
    ],
    longDescription:
      "Ray-Ban Aviator Classic Sunglasses feature a signature metal frame with a double bridge design. The mirrored lenses provide 100% UV protection while offering an iconic look that suits every style. Perfect for both casual outings and special events, these sunglasses never go out of style.",
    overview: [
      "Ray-Ban Aviator sunglasses have been a classic fashion accessory for decades, known for their versatility and timeless design.",
      "The metal frame is sturdy and lightweight, making it comfortable for all-day wear.",
      "Available in various lens colors, these sunglasses provide superior protection from the sun without compromising on style.",
    ],
    keyFeatures: [
      {
        Material: "Metal frame",
      },
      {
        "Lens Type": "Mirrored, UV protected",
      },
      {
        Style: "Aviator, Classic",
      },
      {
        Occasion: "Casual wear, outdoor activities",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/2876626/pexels-photo-2876626.jpeg",
      "https://images.pexels.com/photos/27111647/pexels-photo-27111647.jpeg",
      "https://images.pexels.com/photos/3427971/pexels-photo-3427971.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/18279388/pexels-photo-18279388.jpeg",
  },
  {
    id: "ACRAT5",
    title: "Ray-Ban Wayfarer Sunglasses",
    shortDescription: "Iconic Wayfarer with durable frame and polarized lenses",
    discountedPrice: 9500,
    originalPrice: 12000,
    colors: ["#3B3B3B", "#A52A2A"],
    category: "ACCESSORIES",
    brand: "Ray-Ban",
    displayImage:
      "https://images.pexels.com/photos/131018/pexels-photo-131018.jpeg",
    ratings: 4.7,
    reviews: [
      "Stylish and comfortable, perfect for any occasion.",
      "The polarized lenses reduce glare and improve vision.",
      "Amazing design, fits well and looks even better in person.",
    ],
    longDescription:
      "The Ray-Ban Wayfarer sunglasses feature a durable acetate frame and polarized lenses that reduce glare and enhance visibility. These sunglasses offer both protection and style, making them perfect for a wide variety of occasions, from sunny days to evening outings.",
    overview: [
      "Ray-Ban Wayfarer sunglasses are a staple in both fashion and function. Known for their bold and stylish design, these glasses are perfect for making a statement.",
      "The frame is made from high-quality acetate, making it strong yet lightweight, while the polarized lenses offer superior protection against harmful UV rays.",
      "With a variety of colors to choose from, these sunglasses cater to different style preferences while maintaining their legendary appeal.",
    ],
    keyFeatures: [
      {
        Material: "Acetate frame",
      },
      {
        "Lens Type": "Polarized",
      },
      {
        Style: "Wayfarer, Classic",
      },
      {
        Occasion: "Everyday wear",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/1572316/pexels-photo-1572316.jpeg",
      "https://images.pexels.com/photos/16753001/pexels-photo-16753001.jpeg",
      "https://images.pexels.com/photos/18264411/pexels-photo-18264411.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/7904004/pexels-photo-7904004.jpeg",
  },
  {
    id: "ACRAE1",
    title: "Ray-Ban Clubmaster Sunglasses",
    shortDescription:
      "Vintage-inspired Clubmaster with metal and acetate frame",
    discountedPrice: 14000,
    originalPrice: 17000,
    colors: ["#C0C0C0", "#800000"],
    category: "ACCESSORIES",
    brand: "Ray-Ban",
    displayImage:
      "https://images.pexels.com/photos/5080816/pexels-photo-5080816.jpeg",
    ratings: 4.8,
    reviews: [
      "Perfect combination of retro style and modern features.",
      "A great look for both men and women, adds elegance to any outfit.",
      "The comfort and style of these glasses make them worth the investment.",
    ],
    longDescription:
      "Ray-Ban Clubmaster Sunglasses are a fusion of classic and contemporary, featuring a mix of acetate and metal in the frame. With their iconic browline design, these sunglasses stand out while providing excellent protection from the sun with their UV-protected lenses.",
    overview: [
      "The Clubmaster model is a perfect blend of retro and modern styles. Popularized in the 1950s, this style is known for its browline design, making it a timeless choice for anyone looking to make a statement.",
      "Made from a combination of acetate and metal, the frame offers both durability and a premium feel. The lenses provide full UV protection and enhance visual clarity.",
      "Available in multiple frame and lens colors, the Clubmaster can match a variety of styles, making it a versatile addition to your accessory collection.",
    ],
    keyFeatures: [
      {
        Material: "Acetate and metal frame",
      },
      {
        "Lens Type": "UV protected",
      },
      {
        Style: "Clubmaster, Vintage",
      },
      {
        Occasion: "Casual to formal wear",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: false,
    additionalImages: [
      "https://images.pexels.com/photos/2371940/pexels-photo-2371940.jpeg",
      "https://images.pexels.com/photos/14171011/pexels-photo-14171011.jpeg",
      "https://images.pexels.com/photos/10414755/pexels-photo-10414755.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/11270092/pexels-photo-11270092.jpeg",
  },
  {
    id: "ACRAV6",
    title: "Ray-Ban Round Metal Sunglasses",
    shortDescription:
      "Sleek round sunglasses with metal frame and reflective lenses",
    discountedPrice: 13000,
    originalPrice: 16000,
    colors: ["#696969", "#228B22"],
    category: "ACCESSORIES",
    brand: "Ray-Ban",
    displayImage:
      "https://images.pexels.com/photos/5465834/pexels-photo-5465834.jpeg",
    ratings: 4.5,
    reviews: [
      "Love the round design and the quality is top-notch.",
      "The reflective lenses make them stand out.",
      "These sunglasses are so stylish and comfortable.",
    ],
    longDescription:
      "Ray-Ban Round Metal Sunglasses feature a thin, lightweight metal frame and round lenses with a reflective finish. The unique design makes these sunglasses an iconic choice for anyone looking for something stylish and versatile to wear during the day or evening.",
    overview: [
      "The Ray-Ban Round Metal sunglasses have a sleek design that has been popular among trendsetters for decades. Their round lenses are both retro and modern, providing a unique aesthetic.",
      "The thin metal frame adds to the lightweight feel, making these sunglasses comfortable for all-day wear. The reflective lenses offer an added element of style while blocking harmful UV rays.",
      "Perfect for various outdoor activities or simply adding flair to your outfit, the Ray-Ban Round Metal sunglasses are a must-have accessory for fashion enthusiasts.",
    ],
    keyFeatures: [
      {
        Material: "Metal frame",
      },
      {
        "Lens Type": "Reflective, UV protected",
      },
      {
        Style: "Round, Vintage",
      },
      {
        Occasion: "Casual and formal wear",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: false,
    additionalImages: [
      "https://images.pexels.com/photos/6837219/pexels-photo-6837219.jpeg",
      "https://images.pexels.com/photos/7858515/pexels-photo-7858515.jpeg",
      "https://images.pexels.com/photos/9011193/pexels-photo-9011193.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/11270092/pexels-photo-11270092.jpeg",
  },
  {
    id: "ACRAH7",
    title: "Ray-Ban Erika Sunglasses",
    shortDescription:
      "Lightweight sunglasses with a rubberized frame and gradient lenses",
    discountedPrice: 11000,
    originalPrice: 13000,
    colors: ["#8B4513", "#2F4F4F"],
    category: "ACCESSORIES",
    brand: "Ray-Ban",
    displayImage:
      "https://images.pexels.com/photos/5465837/pexels-photo-5465837.jpeg",
    ratings: 4.6,
    reviews: [
      "These are the best sunglasses for comfort and style.",
      "Perfect for casual and beach days. The rubberized frame is very comfortable.",
      "The gradient lenses add a nice touch to the overall look.",
    ],
    longDescription:
      "Ray-Ban Erika Sunglasses feature a soft, rubberized frame for superior comfort, paired with gradient lenses that offer full UV protection. These sunglasses are designed for those who want a mix of style, comfort, and practicality in their eyewear.",
    overview: [
      "Ray-Ban Erika sunglasses are perfect for those who seek style and comfort. The lightweight, rubberized frame provides an incredibly comfortable fit, making them ideal for all-day wear.",
      "The gradient lenses not only look stylish but also provide excellent UV protection, making them suitable for both sunny and cloudy days.",
      "Whether you're relaxing at the beach or enjoying a casual day out, Ray-Ban Erika sunglasses add a touch of sophistication while protecting your eyes from harmful sun rays.",
    ],
    keyFeatures: [
      {
        Material: "Rubberized frame",
      },
      {
        "Lens Type": "Gradient, UV protected",
      },
      {
        Style: "Erika, Casual",
      },
      {
        Occasion: "Beach, Casual outings",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: false,
    additionalImages: [
      "https://images.pexels.com/photos/1342502/pexels-photo-1342502.jpeg",
      "https://images.pexels.com/photos/7819284/pexels-photo-7819284.jpeg",
      "https://images.pexels.com/photos/1532244/pexels-photo-1532244.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/1362558/pexels-photo-1362558.jpeg",
  },
  {
    id: "ACMIL7",
    title: "Michael Kors Jet Set Travel Tote",
    shortDescription: "Sleek and spacious leather tote with signature MK charm",
    discountedPrice: 15000,
    originalPrice: 18000,
    colors: ["#000000", "#8B4513"],
    category: "ACCESSORIES",
    brand: "Michael Kors",
    displayImage:
      "https://images.pexels.com/photos/29359829/pexels-photo-29359829.jpeg",
    ratings: 4.8,
    reviews: [
      "Perfect for everyday use and travel, roomy yet stylish.",
      "The leather is soft and durable, and the bag looks fantastic.",
      "Great value for the price, holds all my essentials with room to spare.",
    ],
    longDescription:
      "The Michael Kors Jet Set Travel Tote is crafted from smooth leather with a roomy interior perfect for organizing your daily essentials. The signature MK charm adds a luxurious touch, making it a perfect choice for both work and weekend outings.",
    overview: [
      "This tote is designed for comfort and style, with a spacious interior and sleek, modern look.",
      "It is made from premium leather that stands the test of time, ensuring durability.",
      "The stylish MK logo charm adds a luxurious feel, perfect for elevating any outfit.",
    ],
    keyFeatures: [
      {
        Material: "Leather",
      },
      {
        Closure: "Zipper",
      },
      {
        Style: "Tote, Casual",
      },
      {
        Occasion: "Everyday, Travel",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/26954381/pexels-photo-26954381.jpeg",
      "https://images.pexels.com/photos/4276653/pexels-photo-4276653.jpeg",
      "https://images.pexels.com/photos/17377864/pexels-photo-17377864.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/26736140/pexels-photo-26736140.jpeg",
  },
  {
    id: "ACMIR2",
    title: "Michael Kors Mercer Wristlet",
    shortDescription: "Compact leather wristlet with zip closure and MK logo",
    discountedPrice: 6000,
    originalPrice: 8000,
    colors: ["#C71585", "#A52A2A"],
    category: "ACCESSORIES",
    brand: "Michael Kors",
    displayImage:
      "https://images.pexels.com/photos/9595073/pexels-photo-9595073.jpeg",
    ratings: 4.7,
    reviews: [
      "Perfect for a night out or as an everyday clutch.",
      "The design is simple yet elegant, and it fits my phone and essentials perfectly.",
      "A great wristlet with a chic look and high-quality feel.",
    ],
    longDescription:
      "The Michael Kors Mercer Wristlet is a sleek accessory that offers both style and functionality. Made from premium leather, it features a zip closure for secure storage and the iconic MK logo for a touch of luxury. Perfect for those who prefer compact, hands-free style.",
    overview: [
      "This wristlet combines functionality with sophistication, making it a must-have accessory.",
      "Made from high-quality leather, it stands out for its durability and design.",
      "The zip closure keeps your essentials secure, while the MK logo adds a chic touch.",
    ],
    keyFeatures: [
      {
        Material: "Leather",
      },
      {
        Closure: "Zip",
      },
      {
        Style: "Wristlet, Compact",
      },
      {
        Occasion: "Evening, Casual",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/1132269/pexels-photo-1132269.jpeg",
      "https://images.pexels.com/photos/22135094/pexels-photo-22135094.jpeg",
      "https://images.pexels.com/photos/13596388/pexels-photo-13596388.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/11961222/pexels-photo-11961222.jpeg",
  },
  {
    id: "ACMIP0",
    title: "Michael Kors Access Bradshaw Smartwatch",
    shortDescription:
      "Stylish smartwatch with touchscreen and fitness tracking features",
    discountedPrice: 25000,
    originalPrice: 30000,
    colors: ["#2F4F4F", "#8A2BE2"],
    category: "ACCESSORIES",
    brand: "Michael Kors",
    displayImage:
      "https://images.pexels.com/photos/4672162/pexels-photo-4672162.jpeg",
    ratings: 4.6,
    reviews: [
      "Love the combination of fashion and functionality.",
      "Works great for fitness tracking, and the touchscreen is very responsive.",
      "A stunning smartwatch that pairs well with any outfit, whether casual or formal.",
    ],
    longDescription:
      "The Michael Kors Access Bradshaw Smartwatch is a sleek and stylish smartwatch designed for fashion-forward individuals. It features a responsive touchscreen, fitness tracking, and customizable watch faces. A perfect blend of technology and style for any occasion.",
    overview: [
      "This smartwatch features an elegant design combined with advanced technology.",
      "The touchscreen display is highly responsive, making it easy to navigate through various apps.",
      "With built-in fitness tracking features, it's the perfect accessory for both work and workouts.",
    ],
    keyFeatures: [
      {
        Material: "Stainless Steel",
      },
      {
        Screen: "Touchscreen, Customizable Watch Faces",
      },
      {
        Style: "Smartwatch, Fashion",
      },
      {
        Occasion: "Everyday, Fitness",
      },
      {
        "Water Resistance": "Yes",
      },
    ],
    isBestseller: false,
    additionalImages: [
      "https://images.pexels.com/photos/4482932/pexels-photo-4482932.jpeg",
      "https://images.pexels.com/photos/4498478/pexels-photo-4498478.jpeg",
      "https://images.pexels.com/photos/7530583/pexels-photo-7530583.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/5038817/pexels-photo-5038817.jpeg",
  },
  {
    id: "ACMIA5",
    title: "Michael Kors Parker Chronograph Watch",
    shortDescription:
      "Sophisticated chronograph watch with stainless steel band",
    discountedPrice: 22000,
    originalPrice: 27000,
    colors: ["#00008B", "#A52A2A"],
    category: "ACCESSORIES",
    brand: "Michael Kors",
    displayImage:
      "https://images.pexels.com/photos/11136241/pexels-photo-11136241.jpeg",
    ratings: 4.9,
    reviews: [
      "An elegant timepiece that can be worn every day or for special occasions.",
      "The chronograph features are very precise and easy to use.",
      "A great value for the quality and design. It looks amazing on my wrist.",
    ],
    longDescription:
      "The Michael Kors Parker Chronograph Watch combines luxury and functionality with its elegant stainless steel band and chronograph movement. Designed for both everyday use and special occasions, this timepiece features a bold, sophisticated design.",
    overview: [
      "The stainless steel band provides durability and style, making this watch suitable for all occasions.",
      "With chronograph functionality, it adds a touch of sophistication while offering precision timekeeping.",
      "The bold design features a mix of gold-tone and stainless steel accents, ensuring that it stands out on any wrist.",
    ],
    keyFeatures: [
      {
        Material: "Stainless Steel",
      },
      {
        Movement: "Quartz, Chronograph",
      },
      {
        Style: "Chronograph, Elegant",
      },
      {
        Occasion: "Formal, Casual",
      },
      {
        "Water Resistance": "Yes",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/15921372/pexels-photo-15921372.jpeg",
      "https://images.pexels.com/photos/9561291/pexels-photo-9561291.jpeg",
      "https://images.pexels.com/photos/8854209/pexels-photo-8854209.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/16958879/pexels-photo-16958879.jpeg",
  },
  {
    id: "ACMIG8",
    title: "Michael Kors Allie Satchel",
    shortDescription:
      "Spacious and elegant leather satchel with double handles",
    discountedPrice: 18000,
    originalPrice: 22000,
    colors: ["#D2691E", "#8B0000"],
    category: "ACCESSORIES",
    brand: "Michael Kors",
    displayImage:
      "https://images.pexels.com/photos/10340652/pexels-photo-10340652.jpeg",
    ratings: 4.7,
    reviews: [
      "A very functional and stylish satchel, perfect for daily use.",
      "The leather is soft and feels premium, and the bag has plenty of space.",
      "Perfect bag for those who need something chic and practical at the same time.",
    ],
    longDescription:
      "The Michael Kors Allie Satchel combines high-quality leather with a spacious design to create the ultimate accessory for fashion-forward individuals. The double handles offer a comfortable grip, and the roomy interior ensures ample storage for all your essentials.",
    overview: [
      "The Allie Satchel is made from premium leather, offering a luxurious feel and durability.",
      "With plenty of room inside, it can comfortably store all your essentials while maintaining a sleek profile.",
      "The double handles provide added comfort, making it perfect for daily use or as a travel companion.",
    ],
    keyFeatures: [
      {
        Material: "Leather",
      },
      {
        Closure: "Zipper",
      },
      {
        Style: "Satchel, Casual",
      },
      {
        Occasion: "Everyday, Travel",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: false,
    additionalImages: [
      "https://images.pexels.com/photos/167686/pexels-photo-167686.jpeg",
      "https://images.pexels.com/photos/16690455/pexels-photo-16690455.jpeg",
      "https://images.pexels.com/photos/10973347/pexels-photo-10973347.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/12811978/pexels-photo-12811978.jpeg",
  },
  {
    id: "FAGUT3",
    title: "Gucci GG Marmont Shoulder Bag",
    shortDescription:
      "Classic leather shoulder bag with double G hardware and chain strap",
    discountedPrice: 35000,
    originalPrice: 40000,
    colors: ["#000000", "#FFD700"],
    category: "FASHION",
    brand: "Gucci",
    displayImage:
      "https://images.pexels.com/photos/13417506/pexels-photo-13417506.jpeg",
    ratings: 4.9,
    reviews: [
      "Perfect for evening wear or casual outings, this bag is a statement piece.",
      "The leather is luxurious and the chain strap adds a touch of glamour.",
      "A timeless bag that goes well with any outfit, from casual to chic.",
    ],
    longDescription:
      "The Gucci GG Marmont Shoulder Bag is crafted from soft, matelassé leather with a distinctive chevron pattern and features the brand's signature double G hardware. The bag is perfect for both day and night, combining sophistication with everyday practicality.",
    overview: [
      "Crafted from high-quality leather with a soft and rich texture for durability.",
      "The iconic GG logo and chain strap enhance the bag’s luxurious feel and make it versatile for various occasions.",
      "The shoulder strap can be adjusted for comfort, allowing you to wear it as a shoulder or crossbody bag.",
    ],
    keyFeatures: [
      {
        Material: "Leather",
      },
      {
        Closure: "Magnetic Snap",
      },
      {
        Style: "Shoulder Bag, Classic",
      },
      {
        Occasion: "Everyday, Evening",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/16329601/pexels-photo-16329601.jpeg",
      "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg",
      "https://images.pexels.com/photos/4015610/pexels-photo-4015610.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/27174571/pexels-photo-27174571.jpeg",
  },
  {
    id: "FAGUC5",
    title: "Gucci Ace Sneakers",
    shortDescription:
      "Iconic leather sneakers with embroidered web and GG logo",
    discountedPrice: 22000,
    originalPrice: 25000,
    colors: ["#FFFFFF", "#D3D3D3"],
    category: "FASHION",
    brand: "Gucci",
    displayImage:
      "https://images.pexels.com/photos/12891494/pexels-photo-12891494.jpeg",
    ratings: 4.8,
    reviews: [
      "These sneakers are stylish and comfortable, perfect for both casual wear and fashion-forward looks.",
      "The embroidered details are stunning, and the leather feels premium.",
      "A must-have in any fashion lover's wardrobe.",
    ],
    longDescription:
      "Gucci Ace Sneakers are a perfect blend of comfort and high-fashion appeal. Made from premium white leather, the sneakers feature the brand’s signature green and red web design along with the GG logo. A versatile footwear option that pairs well with jeans, chinos, or even dresses.",
    overview: [
      "Crafted with high-quality leather for comfort and durability, ensuring that these sneakers will last while keeping you stylish.",
      "Embroidered details, including the green and red web design and GG logo, give the sneakers a bold yet elegant look.",
      "These sneakers can be dressed up or down, making them an ideal addition to both casual and semi-formal wardrobes.",
    ],
    keyFeatures: [
      {
        Material: "Leather",
      },
      {
        Closure: "Lace-up",
      },
      {
        Style: "Sneakers, Casual",
      },
      {
        Occasion: "Everyday, Casual",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/4252965/pexels-photo-4252965.jpeg",
      "https://images.pexels.com/photos/19737600/pexels-photo-19737600.jpeg",
      "https://images.pexels.com/photos/15592493/pexels-photo-15592493.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/15632278/pexels-photo-15632278.jpeg",
  },
  {
    id: "FAGUU8",
    title: "Gucci GG Supreme Belt Bag",
    shortDescription:
      "Versatile GG Supreme canvas belt bag with adjustable strap",
    discountedPrice: 18000,
    originalPrice: 22000,
    colors: ["#B22222", "#C71585"],
    category: "FASHION",
    brand: "Gucci",
    displayImage:
      "https://images.pexels.com/photos/18936418/pexels-photo-18936418.jpeg",
    ratings: 4.6,
    reviews: [
      "Great for hands-free convenience while still being super stylish.",
      "The canvas is durable and the design is timeless.",
      "Perfect for travel or as a casual accessory.",
    ],
    longDescription:
      "The Gucci GG Supreme Belt Bag is crafted from the brand’s signature GG Supreme canvas and features an adjustable strap for comfort. This bag is perfect for those who prefer a hands-free accessory while still maintaining a fashionable edge. Its compact size makes it ideal for carrying essentials on the go.",
    overview: [
      "Made from durable GG Supreme canvas with a classic monogram pattern, ensuring it’s both sturdy and stylish.",
      "Features an adjustable strap, allowing you to wear it comfortably around your waist or across your body.",
      "Compact yet spacious enough to hold all your essentials, making it perfect for traveling or daily use.",
    ],
    keyFeatures: [
      {
        Material: "GG Supreme Canvas",
      },
      {
        Closure: "Zipper",
      },
      {
        Style: "Belt Bag, Casual",
      },
      {
        Occasion: "Travel, Casual",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: false,
    additionalImages: [
      "https://images.pexels.com/photos/27127406/pexels-photo-27127406.jpeg",
      "https://images.pexels.com/photos/27565821/pexels-photo-27565821.png",
      "https://images.pexels.com/photos/15059375/pexels-photo-15059375.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/19850115/pexels-photo-19850115.jpeg",
  },
  {
    id: "FAGUU7",
    title: "Gucci Sylvie Mini Bag",
    shortDescription:
      "Elegant mini handbag with signature web stripe and metal chain",
    discountedPrice: 35000,
    originalPrice: 38000,
    colors: ["#8B4513", "#A52A2A"],
    category: "FASHION",
    brand: "Gucci",
    displayImage:
      "https://images.pexels.com/photos/21263499/pexels-photo-21263499.jpeg",
    ratings: 4.9,
    reviews: [
      "A stunning mini bag with luxurious detailing.",
      "The craftsmanship is top-notch, and the design is effortlessly chic.",
      "I love the compact size and the elegant style.",
    ],
    longDescription:
      "The Gucci Sylvie Mini Bag is a luxurious accessory that features the brand’s signature web stripe and gold-tone metal chain. Made from smooth leather, it is the perfect size for holding your essentials while adding a chic touch to any outfit. Its refined look makes it suitable for both casual and evening wear.",
    overview: [
      "Crafted from smooth leather with the iconic Gucci web stripe, this bag has a timeless appeal.",
      "The gold-tone metal chain adds a luxurious touch, making it perfect for evening events or casual outings.",
      "Despite its small size, the bag has just enough space for your essentials, making it both functional and fashionable.",
    ],
    keyFeatures: [
      {
        Material: "Leather",
      },
      {
        Closure: "Flap, Metal Clasp",
      },
      {
        Style: "Mini Bag, Elegant",
      },
      {
        Occasion: "Evening, Casual",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/8801089/pexels-photo-8801089.jpeg",
      "https://images.pexels.com/photos/8801091/pexels-photo-8801091.jpeg",
      "https://images.pexels.com/photos/8801100/pexels-photo-8801100.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/10280614/pexels-photo-10280614.jpeg",
  },
  {
    id: "FAGUT9",
    title: "Gucci Dionysus GG Supreme Tote Bag",
    shortDescription:
      "Large tote with GG Supreme canvas and Dionysus tiger head closure",
    discountedPrice: 48000,
    originalPrice: 52000,
    colors: ["#2F4F4F", "#A52A2A"],
    category: "FASHION",
    brand: "Gucci",
    displayImage:
      "https://images.pexels.com/photos/4177747/pexels-photo-4177747.jpeg",
    ratings: 4.8,
    reviews: [
      "The bag is large enough for all my essentials and more.",
      "The Dionysus closure is such a bold statement and adds a touch of uniqueness.",
      "Quality is exceptional, and the bag looks even better in person.",
    ],
    longDescription:
      "The Gucci Dionysus GG Supreme Tote Bag is an iconic piece that combines fashion-forward style with practicality. Crafted from GG Supreme canvas, it features the signature Dionysus tiger head closure. The spacious interior makes it perfect for carrying all your essentials while maintaining an elegant and bold look.",
    overview: [
      "Large enough to hold all your essentials and more, making it a versatile choice for daily use or travel.",
      "The iconic Dionysus tiger head closure gives the bag a unique and luxurious touch.",
      "The GG Supreme canvas material ensures durability while maintaining a high-fashion look, perfect for any occasion.",
    ],
    keyFeatures: [
      {
        Material: "GG Supreme Canvas",
      },
      {
        Closure: "Dionysus Tiger Head, Magnetic Snap",
      },
      {
        Style: "Tote, Luxury",
      },
      {
        Occasion: "Everyday, Formal",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: false,
    additionalImages: [
      "https://images.pexels.com/photos/8148587/pexels-photo-8148587.jpeg",
      "https://images.pexels.com/photos/11673923/pexels-photo-11673923.jpeg",
      "https://images.pexels.com/photos/18085377/pexels-photo-18085377.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/19197737/pexels-photo-19197737.jpeg",
  },
  {
    id: "FALO01",
    title: "Louis Vuitton Neverfull MM",
    shortDescription:
      "Classic Louis Vuitton tote with iconic monogram canvas and spacious interior",
    discountedPrice: 52000,
    originalPrice: 57000,
    colors: ["#8B4513", "#FFFFFF"],
    category: "FASHION",
    brand: "Louis Vuitton",
    displayImage:
      "https://images.pexels.com/photos/4276653/pexels-photo-4276653.jpeg",
    ratings: 4.9,
    reviews: [
      "The Neverfull MM is a perfect blend of style and practicality. It's spacious enough for everyday use.",
      "The leather trim adds a luxurious touch, and the canvas is durable and stylish.",
      "This bag is a staple in my wardrobe and goes with almost everything.",
    ],
    longDescription:
      "The Louis Vuitton Neverfull MM is a spacious and elegant tote bag crafted from the iconic Monogram canvas. Featuring sturdy leather handles and a large interior, it's perfect for carrying all your daily essentials while offering a touch of luxury to your style.",
    overview: [
      "Crafted with Louis Vuitton's signature Monogram canvas, the Neverfull MM exudes sophistication and durability for long-term use.",
      "The spacious interior allows you to store all your essentials, from documents to personal items, making it perfect for work or travel.",
      "Versatile leather handles make it easy to carry on your shoulder or by hand, offering comfort and style.",
    ],
    keyFeatures: [
      {
        Material: "Monogram Canvas",
      },
      {
        Closure: "Open Top",
      },
      {
        Style: "Tote Bag, Luxury",
      },
      {
        Occasion: "Everyday, Travel",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/5471070/pexels-photo-5471070.jpeg",
      "https://images.pexels.com/photos/4027948/pexels-photo-4027948.jpeg",
      "https://images.pexels.com/photos/6373532/pexels-photo-6373532.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/3720778/pexels-photo-3720778.jpeg",
  },
  {
    id: "FALO02",
    title: "Louis Vuitton Speedy 30",
    shortDescription:
      "Iconic Louis Vuitton handbag with classic Monogram canvas and sturdy leather handles",
    discountedPrice: 42000,
    originalPrice: 46000,
    colors: ["#D2691E", "#000000"],
    category: "FASHION",
    brand: "Louis Vuitton",
    displayImage:
      "https://images.pexels.com/photos/4276653/pexels-photo-4276653.jpeg",
    ratings: 4.8,
    reviews: [
      "This bag is the perfect size for everyday use, with enough space to carry your essentials.",
      "The craftsmanship is exceptional, and the Monogram canvas gives it a timeless appeal.",
      "Love the versatility of the Speedy 30! It works for both casual and formal occasions.",
    ],
    longDescription:
      "The Louis Vuitton Speedy 30 is a classic handbag known for its elegant shape and versatility. Featuring the brand's signature Monogram canvas and sturdy leather handles, it's a go-to option for those who want both style and practicality in their daily carry-all.",
    overview: [
      "Crafted from Louis Vuitton's signature Monogram canvas, this bag boasts a timeless, elegant design suitable for various occasions.",
      "The spacious interior is perfect for your everyday items, offering both function and style in one compact bag.",
      "The durable leather handles provide comfort and support, while the zipper closure ensures the safety of your belongings.",
    ],
    keyFeatures: [
      {
        Material: "Monogram Canvas",
      },
      {
        Closure: "Zipper",
      },
      {
        Style: "Handbag, Classic",
      },
      {
        Occasion: "Everyday, Formal",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/12194934/pexels-photo-12194934.jpeg",
      "https://images.pexels.com/photos/22432993/pexels-photo-22432993.jpeg",
      "https://images.pexels.com/photos/26060750/pexels-photo-26060750.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/15045211/pexels-photo-15045211.jpeg",
  },
  {
    id: "FALO03",
    title: "Louis Vuitton Alma BB",
    shortDescription:
      "Chic Louis Vuitton handbag in Monogram canvas with structured design and leather trim",
    discountedPrice: 33000,
    originalPrice: 37000,
    colors: ["#FF6347", "#000000"],
    category: "FASHION",
    brand: "Louis Vuitton",
    displayImage:
      "https://images.pexels.com/photos/12194934/pexels-photo-12194934.jpeg",
    ratings: 4.7,
    reviews: [
      "This bag is elegant yet practical. The size is perfect for carrying the essentials.",
      "I love the structured design and the way it adds a touch of sophistication to my outfits.",
      "The Monogram canvas gives it a timeless appeal while the leather trim enhances its luxury.",
    ],
    longDescription:
      "The Louis Vuitton Alma BB is a small, structured handbag that offers both practicality and luxury. Featuring the brand’s signature Monogram canvas and durable leather trim, this bag is perfect for those who want a chic, compact option for daily use or special occasions.",
    overview: [
      "Made from Louis Vuitton's signature Monogram canvas, the Alma BB offers a timeless design with durable leather accents.",
      "Compact yet spacious enough for daily essentials, this bag combines functionality with high-fashion appeal.",
      "The structured silhouette gives it a sophisticated and elegant look, making it a versatile choice for day or evening wear.",
    ],
    keyFeatures: [
      {
        Material: "Monogram Canvas",
      },
      {
        Closure: "Zipper",
      },
      {
        Style: "Handbag, Structured",
      },
      {
        Occasion: "Everyday, Evening",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/4276653/pexels-photo-4276653.jpeg",
      "https://images.pexels.com/photos/15623361/pexels-photo-15623361.jpeg",
      "https://images.pexels.com/photos/978663/pexels-photo-978663.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/9725077/pexels-photo-9725077.jpeg",
  },
  {
    id: "FALO04",
    title: "Louis Vuitton Capucines MM",
    shortDescription:
      "Luxury Louis Vuitton handbag with smooth leather and elegant design",
    discountedPrice: 95000,
    originalPrice: 100000,
    colors: ["#A52A2A", "#FF6347"],
    category: "FASHION",
    brand: "Louis Vuitton",
    displayImage:
      "https://images.pexels.com/photos/12194934/pexels-photo-12194934.jpeg",
    ratings: 4.9,
    reviews: [
      "Absolutely in love with the Capucines MM! It's the perfect luxury handbag.",
      "The leather is soft and feels luxurious, while the size is just right for my daily needs.",
      "An exquisite bag that elevates any outfit. Worth every penny!",
    ],
    longDescription:
      "The Louis Vuitton Capucines MM is a luxurious handbag crafted from supple leather. Featuring a versatile design, it can be carried by hand or over the shoulder, offering a stylish option for both professional and personal settings. The bag's understated elegance makes it suitable for all occasions.",
    overview: [
      "Crafted from luxurious leather, the Capucines MM offers a smooth texture and durable construction for long-lasting use.",
      "Its minimalist design with signature LV branding makes it a perfect match for both formal and casual occasions.",
      "The versatile design allows it to be worn as a hand or shoulder bag, giving you multiple styling options.",
    ],
    keyFeatures: [
      {
        Material: "Leather",
      },
      {
        Closure: "Flap with LV closure",
      },
      {
        Style: "Handbag, Luxury",
      },
      {
        Occasion: "Everyday, Formal",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: false,
    additionalImages: [
      "https://images.pexels.com/photos/3661622/pexels-photo-3661622.jpeg",
      "https://images.pexels.com/photos/11031117/pexels-photo-11031117.png",
      "https://images.pexels.com/photos/4276653/pexels-photo-4276653.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/4865442/pexels-photo-4865442.jpeg",
  },
  {
    id: "FALO05",
    title: "Louis Vuitton Horizon 55 Carry-On",
    shortDescription:
      "Stylish and durable Louis Vuitton luggage with Monogram canvas and sturdy wheels",
    discountedPrice: 120000,
    originalPrice: 130000,
    colors: ["#000000", "#D2691E"],
    category: "FASHION",
    brand: "Louis Vuitton",
    displayImage:
      "https://images.pexels.com/photos/13870707/pexels-photo-13870707.jpeg",
    ratings: 4.8,
    reviews: [
      "This carry-on is both stylish and practical. Perfect for short trips!",
      "The quality is unmatched, and the Monogram canvas gives it an elegant, timeless look.",
      "Absolutely love the easy maneuverability with the wheels and the spacious interior.",
    ],
    longDescription:
      "The Louis Vuitton Horizon 55 Carry-On is the perfect blend of luxury and practicality. Made from the brand’s signature Monogram canvas, it features a durable frame and smooth wheels for easy maneuverability. Ideal for short trips, this suitcase offers both style and functionality.",
    overview: [
      "Crafted from Louis Vuitton's signature Monogram canvas, this carry-on offers elegance and durability for frequent travelers.",
      "The sturdy wheels and expandable frame ensure smooth travel while offering ample storage for your essentials.",
      "A perfect combination of high-fashion and practicality, this luggage is designed to stand out at the airport.",
    ],
    keyFeatures: [
      {
        Material: "Monogram Canvas",
      },
      {
        Closure: "Zipper, Expandable",
      },
      {
        Style: "Luggage, Luxury",
      },
      {
        Occasion: "Travel",
      },
      {
        "Water Resistance": "Yes",
      },
    ],
    isBestseller: false,
    additionalImages: [
      "https://images.pexels.com/photos/4276653/pexels-photo-4276653.jpeg",
      "https://images.pexels.com/photos/15623361/pexels-photo-15623361.jpeg",
      "https://images.pexels.com/photos/27911168/pexels-photo-27911168.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/2263819/pexels-photo-2263819.jpeg",
  },
  {
    id: "FAPR01",
    title: "Prada Saffiano Leather Tote",
    shortDescription:
      "Elegant Prada tote made from durable Saffiano leather, featuring a spacious interior and sleek design.",
    discountedPrice: 85000,
    originalPrice: 95000,
    colors: ["#D3D3D3", "#000000"],
    category: "FASHION",
    brand: "Prada",
    displayImage:
      "https://images.pexels.com/photos/26736144/pexels-photo-26736144.jpeg",
    ratings: 4.8,
    reviews: [
      "The Saffiano leather is extremely durable, and the bag's spacious interior makes it perfect for daily use.",
      "It’s the perfect blend of sophistication and practicality. I absolutely love the quality and design.",
      "I can carry everything I need without compromising on style. Highly recommend this classic piece.",
    ],
    longDescription:
      "The Prada Saffiano Leather Tote is a luxurious handbag crafted from Prada’s signature Saffiano leather. The spacious interior and sleek design make it an ideal accessory for daily use or professional settings, offering both style and functionality.",
    overview: [
      "Made from signature Saffiano leather, this bag exudes luxury and durability, making it a timeless accessory for any wardrobe.",
      "The spacious interior provides ample room for your essentials, while the elegant design makes it suitable for both casual and formal settings.",
      "The structured shape and sophisticated detailing make this Prada tote a standout piece that can elevate any outfit.",
    ],
    keyFeatures: [
      {
        Material: "Saffiano Leather",
      },
      {
        Closure: "Zipper",
      },
      {
        Style: "Tote Bag, Luxury",
      },
      {
        Occasion: "Everyday, Formal",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/26691343/pexels-photo-26691343.jpeg",
      "https://images.pexels.com/photos/22432992/pexels-photo-22432992.jpeg",
      "https://images.pexels.com/photos/6044926/pexels-photo-6044926.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/6044919/pexels-photo-6044919.jpeg",
  },
  {
    id: "FAPR02",
    title: "Prada Cahier Shoulder Bag",
    shortDescription:
      "Chic Prada Cahier shoulder bag with a structured design, gold-tone hardware, and a sophisticated aesthetic.",
    discountedPrice: 78000,
    originalPrice: 82000,
    colors: ["#C71585", "#000000"],
    category: "FASHION",
    brand: "Prada",
    displayImage:
      "https://images.pexels.com/photos/7419404/pexels-photo-7419404.jpeg",
    ratings: 4.7,
    reviews: [
      "I love the vintage-inspired design of this bag. It’s elegant and practical, fitting perfectly with my wardrobe.",
      "The gold-tone hardware really stands out, giving this bag a luxurious, timeless feel.",
      "This bag adds the perfect finishing touch to any outfit. Great for both day and night occasions.",
    ],
    longDescription:
      "The Prada Cahier Shoulder Bag combines a chic, vintage-inspired design with modern craftsmanship. Featuring gold-tone hardware and a structured shape, this luxury bag is perfect for elevating any outfit, whether casual or formal.",
    overview: [
      "Crafted from luxurious materials, the Cahier shoulder bag boasts an eye-catching vintage-inspired design with bold gold-tone hardware.",
      "The structured shape and refined details ensure that this bag is both practical and sophisticated, perfect for various occasions.",
      "With its timeless aesthetic, the Cahier bag is a must-have accessory that complements both day-to-day looks and elegant evening attire.",
    ],
    keyFeatures: [
      {
        Material: "Leather",
      },
      {
        Closure: "Flap with Metal Clasp",
      },
      {
        Style: "Shoulder Bag, Luxury",
      },
      {
        Occasion: "Everyday, Evening",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: false,
    additionalImages: [
      "https://images.pexels.com/photos/12753881/pexels-photo-12753881.jpeg",
      "https://images.pexels.com/photos/13417506/pexels-photo-13417506.jpeg",
      "https://images.pexels.com/photos/28606335/pexels-photo-28606335.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/8989490/pexels-photo-8989490.jpeg",
  },
  {
    id: "FAPR03",
    title: "Prada Galleria Bag",
    shortDescription:
      "Iconic Prada Galleria bag made from luxurious Saffiano leather, perfect for everyday and formal use.",
    discountedPrice: 95000,
    originalPrice: 105000,
    colors: ["#000000", "#FFD700"],
    category: "FASHION",
    brand: "Prada",
    displayImage:
      "https://images.pexels.com/photos/21357584/pexels-photo-21357584.jpeg",
    ratings: 4.9,
    reviews: [
      "The Galleria bag is my new go-to. It's spacious, stylish, and works for every occasion.",
      "I absolutely love the craftsmanship. It holds all my essentials while still looking sleek.",
      "A true luxury bag that feels like an investment. The Saffiano leather is incredibly durable and timeless.",
    ],
    longDescription:
      "The Prada Galleria Bag is an iconic luxury accessory made from premium Saffiano leather. Known for its timeless design and versatility, this bag is perfect for both daily use and formal occasions. Its spacious interior and sophisticated structure make it a classic staple.",
    overview: [
      "Crafted from the finest Saffiano leather, the Galleria bag combines durability with an elegant, timeless design that complements any outfit.",
      "With its spacious interior and multiple compartments, this bag is perfect for organizing your essentials while maintaining a chic look.",
      "The bag’s structured silhouette and refined detailing ensure that it can seamlessly transition from day to night, making it ideal for various occasions.",
    ],
    keyFeatures: [
      {
        Material: "Saffiano Leather",
      },
      {
        Closure: "Zipper",
      },
      {
        Style: "Top-Handle Bag, Luxury",
      },
      {
        Occasion: "Everyday, Formal",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/21263499/pexels-photo-21263499.jpeg",
      "https://images.pexels.com/photos/7419416/pexels-photo-7419416.jpeg",
      "https://images.pexels.com/photos/8365682/pexels-photo-8365682.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/28606333/pexels-photo-28606333.jpeg",
  },
  {
    id: "FAPR04",
    title: "Prada Re-Nylon Backpack",
    shortDescription:
      "Sustainable and stylish Prada backpack made from Re-Nylon material, perfect for everyday use.",
    discountedPrice: 48000,
    originalPrice: 52000,
    colors: ["#808080", "#000000"],
    category: "FASHION",
    brand: "Prada",
    displayImage:
      "https://images.pexels.com/photos/16359288/pexels-photo-16359288.jpeg",
    ratings: 4.6,
    reviews: [
      "Love the eco-friendly aspect of this bag! It's stylish, comfortable, and holds everything I need.",
      "Great for daily use or short trips. The material feels durable and resistant to wear and tear.",
      "Perfect for a more casual yet high-end look. It pairs well with various outfits.",
    ],
    longDescription:
      "The Prada Re-Nylon Backpack is part of Prada’s sustainable collection, crafted from Re-Nylon material. It offers a modern, stylish design with ample space for your essentials, making it perfect for daily use or travel, all while prioritizing environmental responsibility.",
    overview: [
      "Made from Re-Nylon, this backpack combines sustainability with contemporary style, offering a luxurious feel while being eco-friendly.",
      "The spacious compartments and adjustable straps make this backpack ideal for those who need a functional yet fashionable bag.",
      "The minimalist design, paired with Prada’s signature attention to detail, ensures this backpack stands out for both its style and sustainability.",
    ],
    keyFeatures: [
      {
        Material: "Re-Nylon",
      },
      {
        Closure: "Zipper",
      },
      {
        Style: "Backpack, Casual Luxury",
      },
      {
        Occasion: "Everyday, Travel",
      },
      {
        "Water Resistance": "Yes",
      },
    ],
    isBestseller: false,
    additionalImages: [
      "https://images.pexels.com/photos/2081202/pexels-photo-2081202.jpeg",
      "https://images.pexels.com/photos/18999337/pexels-photo-18999337.jpeg",
      "https://images.pexels.com/photos/9712994/pexels-photo-9712994.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/18510444/pexels-photo-18510444.jpeg",
  },
  {
    id: "FAPR05",
    title: "Prada Double Bag",
    shortDescription:
      "Luxurious Prada Double Bag made from Saffiano leather, featuring a dual-compartment design.",
    discountedPrice: 115000,
    originalPrice: 125000,
    colors: ["#800000", "#000000"],
    category: "FASHION",
    brand: "Prada",
    displayImage:
      "https://images.pexels.com/photos/21357584/pexels-photo-21357584.jpeg",
    ratings: 4.8,
    reviews: [
      "This bag is perfect for work and travel. It's practical, spacious, and incredibly elegant.",
      "The dual-compartment design allows me to organize my items effortlessly, while the Saffiano leather ensures long-lasting durability.",
      "An amazing investment. The quality of the leather and the structure make this bag truly stand out.",
    ],
    longDescription:
      "The Prada Double Bag is a sophisticated luxury handbag crafted from Saffiano leather. Known for its dual-compartment design, this bag is both functional and stylish, offering ample space for your essentials while maintaining a polished and professional look.",
    overview: [
      "Constructed from premium Saffiano leather, the Double Bag boasts both durability and timeless elegance, making it an investment piece for any wardrobe.",
      "Its dual-compartment design provides exceptional organization, with plenty of space to separate your personal and work essentials.",
      "The structured silhouette and refined detailing of this bag make it a versatile accessory for both casual and formal settings.",
    ],
    keyFeatures: [
      {
        Material: "Saffiano Leather",
      },
      {
        Closure: "Zipper, Flap",
      },
      {
        Style: "Top-Handle, Luxury",
      },
      {
        Occasion: "Everyday, Formal",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/21263499/pexels-photo-21263499.jpeg",
      "https://images.pexels.com/photos/5706268/pexels-photo-5706268.jpeg",
      "https://images.pexels.com/photos/8365682/pexels-photo-8365682.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/21357582/pexels-photo-21357582.jpeg",
  },
  {
    id: "SPUA01",
    title: "Under Armour Men’s Charged Assert 9 Running Shoes",
    shortDescription:
      "Durable running shoes with responsive cushioning and a breathable upper, designed for maximum comfort and support during running.",
    discountedPrice: 4999,
    originalPrice: 5999,
    colors: ["#000000", "#FF5733"],
    category: "SPORTS",
    brand: "Under Armour",
    displayImage:
      "https://images.pexels.com/photos/4767907/pexels-photo-4767907.jpeg",
    ratings: 4.6,
    reviews: [
      "These shoes are super comfortable for long runs, with great cushioning and excellent support.",
      "Perfect fit! The shoes feel light but sturdy, ideal for my daily running routine.",
      "The breathable design is a game-changer. I don’t feel overheated even during intense workouts.",
    ],
    longDescription:
      "The Under Armour Men’s Charged Assert 9 Running Shoes offer a lightweight, durable design with responsive cushioning and a breathable upper. They provide great support for runners, ensuring comfort during long runs or high-intensity workouts.",
    overview: [
      "Designed with responsive cushioning, these shoes provide excellent comfort and support for a variety of athletic activities.",
      "The breathable upper ensures that your feet stay cool and dry, even during intense workouts or runs.",
      "With a durable rubber outsole, these shoes offer enhanced traction and stability, making them ideal for both outdoor and indoor sports.",
    ],
    keyFeatures: [
      {
        Material: "Synthetic Upper, Rubber Outsole",
      },
      {
        Closure: "Lace-Up",
      },
      {
        Style: "Running Shoes",
      },
      {
        Occasion: "Running, Training",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/13525839/pexels-photo-13525839.jpeg",
      "https://images.pexels.com/photos/29300647/pexels-photo-29300647.jpeg",
      "https://images.pexels.com/photos/29342151/pexels-photo-29342151.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/18069223/pexels-photo-18069223.jpeg",
  },
  {
    id: "SPUA02",
    title: "Under Armour Women’s UA Sportsmask",
    shortDescription:
      "Breathable and comfortable mask designed for active use, providing superior breathability and moisture-wicking properties.",
    discountedPrice: 1299,
    originalPrice: 1499,
    colors: ["#808080", "#E60000"],
    category: "SPORTS",
    brand: "Under Armour",
    displayImage:
      "https://images.pexels.com/photos/1464624/pexels-photo-1464624.jpeg",
    ratings: 4.7,
    reviews: [
      "I love how breathable and comfortable this mask is. Perfect for outdoor runs and workouts.",
      "The adjustable ear straps are a great feature, ensuring a secure fit without causing discomfort.",
      "It keeps me cool and dry during my workouts, and I no longer have to worry about fogging glasses.",
    ],
    longDescription:
      "The Under Armour UA Sportsmask is designed for active individuals who need a breathable, moisture-wicking mask for their workouts or outdoor activities. It ensures comfort and a secure fit with adjustable straps, making it ideal for sports enthusiasts.",
    overview: [
      "Made with Under Armour's innovative technology, the mask provides breathability and moisture-wicking properties to keep you cool during intense activities.",
      "It features adjustable ear straps for a custom, secure fit, ensuring comfort during long workouts or outdoor activities.",
      "The mask is designed with athletes in mind, offering excellent performance and durability while allowing for maximum airflow.",
    ],
    keyFeatures: [
      {
        Material: "Polyester Blend",
      },
      {
        Closure: "Adjustable Straps",
      },
      {
        Style: "Sports Mask",
      },
      {
        Occasion: "Training, Running",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: false,
    additionalImages: [
      "https://images.pexels.com/photos/18368134/pexels-photo-18368134.jpeg",
      "https://images.pexels.com/photos/6963174/pexels-photo-6963174.jpeg",
      "https://images.pexels.com/photos/6407763/pexels-photo-6407763.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/4004461/pexels-photo-4004461.jpeg",
  },
  {
    id: "SPUA03",
    title: "Under Armour Men’s Tech 2.0 T-Shirt",
    shortDescription:
      "Moisture-wicking, quick-dry athletic t-shirt designed for superior comfort during exercise and training.",
    discountedPrice: 1999,
    originalPrice: 2499,
    colors: ["#007BFF", "#343434"],
    category: "SPORTS",
    brand: "Under Armour",
    displayImage:
      "https://images.pexels.com/photos/20523356/pexels-photo-20523356.jpeg",
    ratings: 4.8,
    reviews: [
      "This shirt is incredibly lightweight and keeps me dry during even the most intense workouts.",
      "The fit is great! It's comfortable and stretches with my body during movement.",
      "It doesn’t cling to my body like other shirts, and the material feels soft and breathable.",
    ],
    longDescription:
      "The Under Armour Men’s Tech 2.0 T-Shirt is a lightweight, moisture-wicking athletic shirt designed for ultimate comfort. With its quick-dry fabric, it helps keep you cool during intense workouts, offering flexibility and durability for various sports activities.",
    overview: [
      "This shirt is made with moisture-wicking fabric that draws sweat away from the body, keeping you dry and comfortable.",
      "The quick-dry technology ensures you stay cool even after intense physical activity or sports training.",
      "The loose fit and soft material offer a non-restrictive feel, allowing for full range of motion during exercises.",
    ],
    keyFeatures: [
      {
        Material: "Polyester",
      },
      {
        Closure: "No Closure",
      },
      {
        Style: "Athletic T-Shirt",
      },
      {
        Occasion: "Training, Running",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/3763865/pexels-photo-3763865.jpeg",
      "https://images.pexels.com/photos/7236305/pexels-photo-7236305.jpeg",
      "https://images.pexels.com/photos/8612475/pexels-photo-8612475.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/17740128/pexels-photo-17740128.jpeg",
  },
  {
    id: "SPUA04",
    title: "Under Armour Women’s HeatGear Armour Compression Leggings",
    shortDescription:
      "Compression leggings designed for maximum support and flexibility, offering a second-skin fit for better performance.",
    discountedPrice: 2499,
    originalPrice: 2999,
    colors: ["#000000", "#E60000"],
    category: "SPORTS",
    brand: "Under Armour",
    displayImage:
      "https://images.pexels.com/photos/7298413/pexels-photo-7298413.jpeg",
    ratings: 4.9,
    reviews: [
      "These leggings offer excellent compression and support, perfect for running or weightlifting.",
      "I love the comfort and flexibility of these leggings. They stay in place during intense exercises.",
      "The HeatGear material keeps me cool, even during long workout sessions. They’re my go-to leggings now.",
    ],
    longDescription:
      "The Under Armour Women’s HeatGear Armour Compression Leggings are designed to provide maximum support and flexibility during physical activities. These leggings offer a snug, second-skin fit, enhancing performance and recovery by reducing muscle fatigue.",
    overview: [
      "Constructed from HeatGear fabric, these leggings provide superior moisture-wicking properties, keeping you dry and cool.",
      "The compression fit offers muscle support, reducing fatigue and improving recovery time after workouts.",
      "Perfect for running, training, or any intense workout, these leggings ensure comfort and flexibility without sacrificing performance.",
    ],
    keyFeatures: [
      {
        Material: "HeatGear Fabric",
      },
      {
        Closure: "No Closure",
      },
      {
        Style: "Compression Leggings",
      },
      {
        Occasion: "Running, Training",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/3822718/pexels-photo-3822718.jpeg",
      "https://images.pexels.com/photos/13871514/pexels-photo-13871514.jpeg",
      "https://images.pexels.com/photos/866023/pexels-photo-866023.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/3822220/pexels-photo-3822220.jpeg",
  },
  {
    id: "SPUA05",
    title: "Under Armour Men’s Armour Fleece Hoodie",
    shortDescription:
      "Warm and comfortable hoodie made with soft fleece, ideal for cold-weather workouts and casual wear.",
    discountedPrice: 3499,
    originalPrice: 3999,
    colors: ["#0000FF", "#A9A9A9"],
    category: "SPORTS",
    brand: "Under Armour",
    displayImage:
      "https://images.pexels.com/photos/1080199/pexels-photo-1080199.jpeg",
    ratings: 4.8,
    reviews: [
      "This hoodie is super warm and comfortable, perfect for chilly mornings before my workout.",
      "Great for outdoor activities. It keeps me warm without feeling heavy or bulky.",
      "The fleece feels soft, and the hoodie fits perfectly. I wear it casually and for workouts.",
    ],
    longDescription:
      "The Under Armour Men’s Armour Fleece Hoodie offers a warm and comfortable design made from soft fleece material. Ideal for cold-weather workouts or casual wear, this hoodie features a relaxed fit and is perfect for layering during colder months.",
    overview: [
      "Made with Armour Fleece, this hoodie provides warmth and comfort without the added weight, making it ideal for outdoor activities.",
      "The soft, brushed interior helps retain warmth while the exterior offers a smooth, durable finish.",
      "Perfect for layering during cold-weather workouts or for casual everyday wear, providing both style and function.",
    ],
    keyFeatures: [
      {
        Material: "Armour Fleece",
      },
      {
        Closure: "Pullover, Hoodie",
      },
      {
        Style: "Hoodie",
      },
      {
        Occasion: "Outdoor Activities, Casual Wear",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: false,
    additionalImages: [
      "https://images.pexels.com/photos/5951127/pexels-photo-5951127.jpeg",
      "https://images.pexels.com/photos/20799602/pexels-photo-20799602.jpeg",
      "https://images.pexels.com/photos/8793485/pexels-photo-8793485.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/6311642/pexels-photo-6311642.jpeg",
  },
  {
    id: "SPPU01",
    title: "Puma Men’s Speed Ignite Running Shoes",
    shortDescription:
      "High-performance running shoes offering a lightweight build, responsive cushioning, and support for long-distance runners, designed to boost speed and efficiency.",
    discountedPrice: 5999,
    originalPrice: 7999,
    colors: ["#FF5722", "#212121"],
    category: "SPORTS",
    brand: "Puma",
    displayImage:
      "https://images.pexels.com/photos/29300647/pexels-photo-29300647.jpeg",
    ratings: 4.6,
    reviews: [
      "These shoes are amazing for running. They feel light and responsive, perfect for long-distance runs.",
      "Comfortable and supportive, with excellent cushioning. Great for both speed and endurance.",
      "Perfect for both running and casual use. The grip and support are excellent.",
    ],
    longDescription:
      "Puma Men’s Speed Ignite Running Shoes are engineered to enhance your speed with a lightweight and responsive design. Featuring advanced cushioning and a secure fit, these shoes are ideal for high-performance runners who need comfort and agility.",
    overview: [
      "The shoes are designed with a lightweight mesh upper that offers breathability and flexibility during long runs.",
      "Advanced Ignite cushioning in the sole provides a responsive feel while reducing impact on every stride.",
      "The grippy rubber outsole ensures superior traction on various surfaces, giving you added confidence during your run.",
    ],
    keyFeatures: [
      {
        Material: "Mesh Upper, Rubber Outsole",
      },
      {
        Closure: "Lace-Up",
      },
      {
        Style: "Running Shoes",
      },
      {
        Occasion: "Running, Sports",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/16821633/pexels-photo-16821633.jpeg",
      "https://images.pexels.com/photos/5735763/pexels-photo-5735763.jpeg",
      "https://images.pexels.com/photos/5961825/pexels-photo-5961825.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/7523366/pexels-photo-7523366.jpeg",
  },
  {
    id: "SPPU02",
    title: "Puma Women’s Fierce Cross-Training Shoes",
    shortDescription:
      "Stylish and durable cross-training shoes designed to provide stability, comfort, and support for high-intensity workouts and cross-fit sessions.",
    discountedPrice: 4999,
    originalPrice: 6499,
    colors: ["#8BC34A", "#212121"],
    category: "SPORTS",
    brand: "Puma",
    displayImage:
      "https://images.pexels.com/photos/19577862/pexels-photo-19577862.jpeg",
    ratings: 4.7,
    reviews: [
      "These shoes are perfect for my cross-training workouts. They are stylish and provide great stability.",
      "Comfortable, lightweight, and supportive. Excellent for high-intensity training.",
      "Love the fit and feel of these shoes. They perform well in both strength training and cardio.",
    ],
    longDescription:
      "Puma Women’s Fierce Cross-Training Shoes are crafted for versatile performance, offering an ergonomic design to support quick movements and tough workouts. These shoes combine comfort with durability, providing stability during cross-training and HIIT routines.",
    overview: [
      "The ergonomic design ensures maximum comfort and stability for various types of cross-training exercises.",
      "Durable materials offer high performance during intense workouts while maintaining a breathable feel.",
      "The flexible sole enhances movement during dynamic movements, providing traction for every step.",
    ],
    keyFeatures: [
      {
        Material: "Textile Upper, Rubber Outsole",
      },
      {
        Closure: "Lace-Up",
      },
      {
        Style: "Cross-Training Shoes",
      },
      {
        Occasion: "CrossFit, Training",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/4684184/pexels-photo-4684184.jpeg",
      "https://images.pexels.com/photos/8736749/pexels-photo-8736749.jpeg",
      "https://images.pexels.com/photos/8788608/pexels-photo-8788608.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/27256466/pexels-photo-27256466.jpeg",
  },
  {
    id: "SPPU03",
    title: "Puma Men’s Training Essentials Tank Top",
    shortDescription:
      "A lightweight and breathable tank top designed for comfort during training, made with moisture-wicking fabric to keep you dry during intense workouts.",
    discountedPrice: 1499,
    originalPrice: 1999,
    colors: ["#FF5722", "#212121"],
    category: "SPORTS",
    brand: "Puma",
    displayImage:
      "https://images.pexels.com/photos/13896069/pexels-photo-13896069.jpeg",
    ratings: 4.5,
    reviews: [
      "Perfect for my daily workouts, keeps me cool and comfortable. Great fit.",
      "The fabric is soft and breathable, ideal for warm weather training.",
      "Fits well, doesn’t restrict movement. Ideal for running and gym sessions.",
    ],
    longDescription:
      "Puma Men’s Training Essentials Tank Top is designed for the active individual. This tank top is made with lightweight, moisture-wicking fabric that keeps you dry and comfortable during intense workouts and training sessions.",
    overview: [
      "The breathable material enhances comfort during high-intensity workouts, allowing air to flow freely.",
      "Moisture-wicking fabric keeps sweat away, ensuring you stay dry even in the most demanding activities.",
      "The tank top is designed with a streamlined fit, providing freedom of movement without feeling restrictive.",
    ],
    keyFeatures: [
      {
        Material: "Polyester, Elastane",
      },
      {
        Closure: "Pullover",
      },
      {
        Style: "Tank Top",
      },
      {
        Occasion: "Gym, Running",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/24809788/pexels-photo-24809788.jpeg",
      "https://images.pexels.com/photos/5327532/pexels-photo-5327532.jpeg",
      "https://images.pexels.com/photos/5327526/pexels-photo-5327526.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/4720309/pexels-photo-4720309.jpeg",
  },
  {
    id: "SPPU04",
    title: "Puma Women’s Graphic Sports Bra",
    shortDescription:
      "Comfortable and supportive sports bra designed for medium-impact workouts, featuring moisture-wicking fabric and an eye-catching graphic design.",
    discountedPrice: 1799,
    originalPrice: 2499,
    colors: ["#2196F3", "#212121"],
    category: "SPORTS",
    brand: "Puma",
    displayImage:
      "https://images.pexels.com/photos/9546366/pexels-photo-9546366.jpeg",
    ratings: 4.4,
    reviews: [
      "Provides excellent support during my workouts. Love the design and feel.",
      "The fit is perfect, and the material is soft yet supportive.",
      "Great sports bra for high-impact activities. Keeps everything in place.",
    ],
    longDescription:
      "Puma Women’s Graphic Sports Bra is engineered for performance, offering medium-impact support and a stylish design. The moisture-wicking fabric ensures comfort, while the supportive structure provides a secure fit for intense workouts.",
    overview: [
      "The sports bra is made with soft, moisture-wicking fabric that keeps you cool and dry during physical activities.",
      "The elastic band provides a snug fit, preventing the bra from shifting during movement.",
      "Its stylish graphic design adds a fun touch, making it a great choice for both workouts and casual wear.",
    ],
    keyFeatures: [
      {
        Material: "Polyester, Elastane",
      },
      {
        Closure: "Pullover",
      },
      {
        Style: "Sports Bra",
      },
      {
        Occasion: "Gym, Running",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/7207543/pexels-photo-7207543.jpeg",
      "https://images.pexels.com/photos/6777980/pexels-photo-6777980.jpeg",
      "https://images.pexels.com/photos/11559288/pexels-photo-11559288.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/3621646/pexels-photo-3621646.jpeg",
  },
  {
    id: "SPPU05",
    title: "Puma Men’s Training Essentials Shorts",
    shortDescription:
      "Comfortable and lightweight shorts designed for high-intensity workouts and casual wear, featuring breathable fabric and an elastic waistband for a secure fit.",
    discountedPrice: 1899,
    originalPrice: 2499,
    colors: ["#FF5722", "#212121"],
    category: "SPORTS",
    brand: "Puma",
    displayImage:
      "https://images.pexels.com/photos/27385022/pexels-photo-27385022.jpeg",
    ratings: 4.6,
    reviews: [
      "Great fit and comfort for my workouts. The material is soft and breathable.",
      "Perfect for both indoor and outdoor workouts. Highly recommend.",
      "The shorts are lightweight, which is perfect for running and gym sessions.",
    ],
    longDescription:
      "Puma Men’s Training Essentials Shorts are designed to provide maximum comfort during intense training sessions. With an elastic waistband and breathable fabric, these shorts ensure a secure fit and allow freedom of movement.",
    overview: [
      "The breathable fabric helps to regulate body temperature, keeping you cool during intense activities.",
      "The elastic waistband ensures a snug, adjustable fit without feeling restrictive.",
      "Designed with freedom of movement in mind, the shorts are perfect for running, gym sessions, and outdoor activities.",
    ],
    keyFeatures: [
      {
        Material: "Polyester, Elastane",
      },
      {
        Closure: "Elastic Waistband",
      },
      {
        Style: "Training Shorts",
      },
      {
        Occasion: "Gym, Running",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/18991167/pexels-photo-18991167.jpeg",
      "https://images.pexels.com/photos/8846109/pexels-photo-8846109.jpeg",
      "https://images.pexels.com/photos/17135740/pexels-photo-17135740.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/28879459/pexels-photo-28879459.jpeg",
  },
  {
    id: "SPRE01",
    title: "Reebok Men’s Nano X2 Training Shoes",
    shortDescription:
      "Designed for cross-training, these shoes offer stability, comfort, and durability. The flexible sole and lightweight build make them perfect for dynamic workouts and intense training sessions.",
    discountedPrice: 6999,
    originalPrice: 8999,
    colors: ["#FF5722", "#212121"],
    category: "SPORTS",
    brand: "Reebok",
    displayImage:
      "https://images.pexels.com/photos/8736749/pexels-photo-8736749.jpeg",
    ratings: 4.7,
    reviews: [
      "Fantastic stability and comfort for my workouts. I love how light they feel during runs.",
      "Great grip and support, ideal for cross-training exercises.",
      "Perfect for high-intensity workouts and dynamic movements. The fit is just right.",
    ],
    longDescription:
      "Reebok Men’s Nano X2 Training Shoes are designed to handle all types of workouts. With a flexible yet supportive sole and breathable upper, these shoes are built for comfort and performance during intense training and cross-fit routines.",
    overview: [
      "The flexible sole enhances movement, providing stability during weight training and agility during dynamic movements.",
      "The lightweight design reduces foot fatigue, allowing for longer training sessions without discomfort.",
      "Breathable mesh material keeps your feet cool, while the durable construction ensures longevity even during tough workouts.",
    ],
    keyFeatures: [
      {
        Material: "Mesh Upper, Rubber Outsole",
      },
      {
        Closure: "Lace-Up",
      },
      {
        Style: "Training Shoes",
      },
      {
        Occasion: "Cross-Training, Gym",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/7928487/pexels-photo-7928487.jpeg",
      "https://images.pexels.com/photos/6701466/pexels-photo-6701466.jpeg",
      "https://images.pexels.com/photos/12725051/pexels-photo-12725051.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/28879459/pexels-photo-28879459.jpeg",
  },
  {
    id: "SPRE02",
    title: "Reebok Women’s CrossFit Speed TR 2.0 Shoes",
    shortDescription:
      "Engineered for high-impact workouts, these shoes feature a firm and responsive sole, a breathable mesh upper, and a secure fit that supports multi-directional movement.",
    discountedPrice: 5999,
    originalPrice: 7999,
    colors: ["#2196F3", "#212121"],
    category: "SPORTS",
    brand: "Reebok",
    displayImage:
      "https://images.pexels.com/photos/5310918/pexels-photo-5310918.jpeg",
    ratings: 4.6,
    reviews: [
      "Excellent stability and comfort for crossfit exercises. They provide solid support.",
      "The perfect shoe for intense workouts. They fit snugly and give great grip.",
      "Ideal for both running and weight training. Great flexibility and durability.",
    ],
    longDescription:
      "Reebok Women’s CrossFit Speed TR 2.0 Shoes provide the ideal balance of flexibility and stability. These shoes are designed to handle the demands of high-intensity training, with superior grip and durability for intense, multi-directional movements.",
    overview: [
      "The flexible sole offers responsive cushioning, allowing for fast, agile movements during dynamic exercises.",
      "Durable materials ensure long-lasting wear, even during high-impact workouts and cross-fit sessions.",
      "The mesh upper allows your feet to breathe, keeping them cool and comfortable throughout your training.",
    ],
    keyFeatures: [
      {
        Material: "Mesh Upper, Rubber Outsole",
      },
      {
        Closure: "Lace-Up",
      },
      {
        Style: "Cross-Training Shoes",
      },
      {
        Occasion: "CrossFit, Gym",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/7880215/pexels-photo-7880215.jpeg",
      "https://images.pexels.com/photos/5036845/pexels-photo-5036845.jpeg",
      "https://images.pexels.com/photos/4378875/pexels-photo-4378875.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/4853099/pexels-photo-4853099.jpeg",
  },
  {
    id: "SPRE03",
    title: "Reebok Men’s Training Essential T-Shirt",
    shortDescription:
      "This lightweight and breathable t-shirt is designed for comfort during training, made with moisture-wicking fabric to keep you dry and comfortable through your toughest workouts.",
    discountedPrice: 1299,
    originalPrice: 1699,
    colors: ["#FF5722", "#212121"],
    category: "SPORTS",
    brand: "Reebok",
    displayImage:
      "https://images.pexels.com/photos/4378124/pexels-photo-4378124.jpeg",
    ratings: 4.5,
    reviews: [
      "Great fit and fabric quality. Keeps me dry and comfortable during workouts.",
      "Perfect for intense gym sessions. Breathable material makes a huge difference.",
      "The fit is perfect and the fabric is soft. Ideal for both gym and casual wear.",
    ],
    longDescription:
      "Reebok Men’s Training Essential T-Shirt is crafted from breathable, moisture-wicking fabric that keeps you dry and comfortable during your workout. This soft and lightweight t-shirt is ideal for both casual wear and intense training sessions.",
    overview: [
      "Moisture-wicking fabric ensures that sweat is quickly absorbed, keeping you cool and dry throughout your workout.",
      "The lightweight design provides freedom of movement, making it ideal for intense gym sessions and cross-training.",
      "A comfortable fit and soft material offer lasting comfort, whether you're lifting, running, or doing HIIT.",
    ],
    keyFeatures: [
      {
        Material: "Cotton, Polyester",
      },
      {
        Closure: "Pullover",
      },
      {
        Style: "Training T-Shirt",
      },
      {
        Occasion: "Gym, Running",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/18186105/pexels-photo-18186105.jpeg",
      "https://images.pexels.com/photos/18186106/pexels-photo-18186106.jpeg",
      "https://images.pexels.com/photos/28879459/pexels-photo-28879459.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/4495704/pexels-photo-4495704.jpeg",
  },
  {
    id: "SPRE04",
    title: "Reebok Women’s Workout Ready Shorts",
    shortDescription:
      "Lightweight, breathable workout shorts designed to provide comfort and flexibility during training. Features moisture-wicking fabric to keep you dry and focused during high-intensity workouts.",
    discountedPrice: 1599,
    originalPrice: 1999,
    colors: ["#8BC34A", "#212121"],
    category: "SPORTS",
    brand: "Reebok",
    displayImage:
      "https://images.pexels.com/photos/29735917/pexels-photo-29735917.jpeg",
    ratings: 4.4,
    reviews: [
      "Perfect shorts for workouts. Lightweight and breathable material keeps me cool.",
      "Great fit and perfect length for flexibility during exercises.",
      "Love how comfortable these shorts are. They're perfect for running and training.",
    ],
    longDescription:
      "Reebok Women’s Workout Ready Shorts are made with lightweight, moisture-wicking fabric to keep you cool and dry. These shorts are designed for flexibility and comfort during workouts, offering a secure, adjustable fit.",
    overview: [
      "The moisture-wicking fabric keeps sweat away, ensuring you stay dry even during high-intensity training.",
      "Designed with flexibility in mind, these shorts allow full range of motion for every exercise.",
      "The lightweight and breathable fabric enhances comfort, making them perfect for running, cycling, and gym sessions.",
    ],
    keyFeatures: [
      {
        Material: "Polyester, Elastane",
      },
      {
        Closure: "Elastic Waistband",
      },
      {
        Style: "Workout Shorts",
      },
      {
        Occasion: "Gym, Running",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/10222629/pexels-photo-10222629.jpeg",
      "https://images.pexels.com/photos/4587426/pexels-photo-4587426.jpeg",
      "https://images.pexels.com/photos/4587404/pexels-photo-4587404.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/4498608/pexels-photo-4498608.jpeg",
  },
  {
    id: "SPRE05",
    title: "Reebok Men’s Speed TR Flexweave Shoes",
    shortDescription:
      "These versatile training shoes are designed for flexibility and agility. With a durable yet lightweight construction, they offer comfort, support, and responsiveness during cross-training and running.",
    discountedPrice: 7499,
    originalPrice: 9999,
    colors: ["#8BC34A", "#212121"],
    category: "SPORTS",
    brand: "Reebok",
    displayImage:
      "https://images.pexels.com/photos/3763879/pexels-photo-3763879.jpeg",
    ratings: 4.6,
    reviews: [
      "These shoes are perfect for intense training sessions. They are lightweight yet very supportive.",
      "Great for running and gym. The flexibility of the shoe is top-notch.",
      "I love the design and performance. Very comfortable for high-impact activities.",
    ],
    longDescription:
      "Reebok Men’s Speed TR Flexweave Shoes are designed for maximum flexibility and agility, ideal for high-impact training. Featuring a responsive sole and durable construction, these shoes are perfect for multi-directional movement during cross-training and running.",
    overview: [
      "The responsive sole provides excellent cushioning during high-impact activities, making every step comfortable.",
      "The Flexweave upper offers flexibility and durability, while ensuring breathability during intense training.",
      "These shoes provide a secure fit that keeps your feet stable during weightlifting, running, and high-intensity workouts.",
    ],
    keyFeatures: [
      {
        Material: "Flexweave Upper, Rubber Outsole",
      },
      {
        Closure: "Lace-Up",
      },
      {
        Style: "Training Shoes",
      },
      {
        Occasion: "Cross-Training, Gym",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/4804023/pexels-photo-4804023.jpeg",
      "https://images.pexels.com/photos/442400/pinkrunning-pink-running-new-442400.jpeg",
      "https://images.pexels.com/photos/5961825/pexels-photo-5961825.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/3764164/pexels-photo-3764164.jpeg",
  },
  {
    id: "CASUN01",
    title: "Uniqlo Men’s Ultra Stretch Jeans",
    shortDescription:
      "These Ultra Stretch Jeans are crafted for comfort and flexibility. Featuring a tailored fit and soft denim, they offer freedom of movement while maintaining a sleek, stylish appearance for casual wear.",
    discountedPrice: 2499,
    originalPrice: 2999,
    colors: ["#3E4A59", "#6C6F77"],
    category: "CASUAL",
    brand: "Uniqlo",
    displayImage:
      "https://images.pexels.com/photos/1701199/pexels-photo-1701199.jpeg",
    ratings: 4.5,
    reviews: [
      "Super comfortable jeans with a perfect stretch for all-day wear. Highly recommend!",
      "Great fit and perfect for casual days out. The stretch material is awesome.",
      "A must-have for casual wear. They feel very soft and move with your body.",
    ],
    longDescription:
      "Uniqlo Men’s Ultra Stretch Jeans are the ideal choice for casual comfort. Designed with a slim fit and ultra-stretch fabric, these jeans provide flexibility and comfort throughout the day, making them perfect for both relaxed and active days.",
    overview: [
      "The ultra-stretch denim allows for greater flexibility, ensuring comfort throughout the day.",
      "Slim-fit cut provides a modern, sleek look while still offering enough room for ease of movement.",
      "The soft, breathable fabric makes these jeans perfect for both casual outings and everyday wear.",
    ],
    keyFeatures: [
      {
        Material: "98% Cotton, 2% Elastane",
      },
      {
        Closure: "Zip Fly",
      },
      {
        Style: "Slim Fit Jeans",
      },
      {
        Occasion: "Casual, Everyday",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/7222660/pexels-photo-7222660.jpeg",
      "https://images.pexels.com/photos/4852719/pexels-photo-4852719.jpeg",
      "https://images.pexels.com/photos/8735932/pexels-photo-8735932.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/6769356/pexels-photo-6769356.jpeg",
  },
  {
    id: "CASUN02",
    title: "Uniqlo Women’s Soft Touch Long Sleeve T-Shirt",
    shortDescription:
      "This long sleeve T-shirt is made with an incredibly soft material that’s perfect for layering or wearing alone. It provides a comfortable fit and is available in a variety of colors to match your casual style.",
    discountedPrice: 1499,
    originalPrice: 1799,
    colors: ["#F8BBD0", "#FFC107"],
    category: "CASUAL",
    brand: "Uniqlo",
    displayImage:
      "https://images.pexels.com/photos/9603625/pexels-photo-9603625.jpeg",
    ratings: 4.6,
    reviews: [
      "The fabric is so soft and the fit is just perfect. Great for layering.",
      "A versatile T-shirt that goes well with jeans or skirts. Super comfy.",
      "Lovely and soft material. I can wear this all day and feel cozy.",
    ],
    longDescription:
      "Uniqlo Women’s Soft Touch Long Sleeve T-Shirt is made from a premium soft fabric that feels smooth against the skin. Its versatile design makes it a perfect piece for layering or wearing on its own for a relaxed look.",
    overview: [
      "The ultra-soft fabric ensures all-day comfort, making it a perfect choice for casual days.",
      "Simple, classic design makes this T-shirt easy to pair with a variety of outfits.",
      "The breathable material provides a comfortable feel, keeping you cozy without being too warm.",
    ],
    keyFeatures: [
      {
        Material: "Cotton, Polyester",
      },
      {
        Closure: "Pullover",
      },
      {
        Style: "Long Sleeve T-Shirt",
      },
      {
        Occasion: "Casual, Layering",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/6996067/pexels-photo-6996067.jpeg",
      "https://images.pexels.com/photos/7269507/pexels-photo-7269507.jpeg",
      "https://images.pexels.com/photos/6044127/pexels-photo-6044127.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/4887215/pexels-photo-4887215.jpeg",
  },
  {
    id: "CASUN03",
    title: "Uniqlo Men’s BlockTech Parka",
    shortDescription:
      "The BlockTech Parka offers weather protection while maintaining a lightweight and comfortable fit. Designed to keep you dry and warm, it’s perfect for casual outings in cooler or rainy weather.",
    discountedPrice: 3999,
    originalPrice: 4999,
    colors: ["#2C3E50", "#34495E"],
    category: "CASUAL",
    brand: "Uniqlo",
    displayImage:
      "https://images.pexels.com/photos/29736958/pexels-photo-29736958.jpeg",
    ratings: 4.7,
    reviews: [
      "This parka keeps me dry even in heavy rain. Stylish and functional.",
      "Very comfortable and well-made jacket. It’s perfect for casual wear during colder months.",
      "Love the fit and the water-resistant feature. A great everyday jacket.",
    ],
    longDescription:
      "Uniqlo Men’s BlockTech Parka is designed for optimal weather protection while offering a sleek, casual style. Its water-resistant technology ensures you stay dry in rainy weather, making it the perfect outerwear for cooler seasons.",
    overview: [
      "The lightweight design makes it easy to wear throughout the day without feeling bulky.",
      "Waterproof and breathable fabric ensures protection from rain while allowing air circulation.",
      "The simple yet stylish look makes this parka ideal for casual outings during fall and winter.",
    ],
    keyFeatures: [
      {
        Material: "100% Polyester",
      },
      {
        Closure: "Zipper",
      },
      {
        Style: "Parka Jacket",
      },
      {
        Occasion: "Casual, Rainy Weather",
      },
      {
        "Water Resistance": "Yes",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/7870263/pexels-photo-7870263.jpeg",
      "https://images.pexels.com/photos/9507632/pexels-photo-9507632.jpeg",
      "https://images.pexels.com/photos/7222983/pexels-photo-7222983.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/29132309/pexels-photo-29132309.jpeg",
  },
  {
    id: "CASUN04",
    title: "Uniqlo Women’s High Rise Ankle Pants",
    shortDescription:
      "These high-rise ankle pants offer a slim fit and a stylish silhouette, perfect for casual outings. Made with a soft fabric, they’re comfortable, flattering, and versatile for all-day wear.",
    discountedPrice: 1799,
    originalPrice: 2199,
    colors: ["#D1C4E9", "#5D4037"],
    category: "CASUAL",
    brand: "Uniqlo",
    displayImage:
      "https://images.pexels.com/photos/6140049/pexels-photo-6140049.jpeg",
    ratings: 4.4,
    reviews: [
      "Great fit, very comfortable. These pants go well with almost any top.",
      "Love the high-rise fit. Perfect for both casual and office wear.",
      "These pants are stylish and flattering. Great for dressing up or down.",
    ],
    longDescription:
      "Uniqlo Women’s High Rise Ankle Pants are designed for comfort and style. The slim fit and high-rise cut create a flattering silhouette, while the soft material ensures that these pants are perfect for casual wear throughout the day.",
    overview: [
      "The high-rise waist gives a sleek, flattering look that pairs well with both casual and semi-formal tops.",
      "Soft fabric ensures comfort, allowing these pants to be worn for extended periods without discomfort.",
      "Ankle-length design adds a modern touch and can be styled with various types of shoes.",
    ],
    keyFeatures: [
      {
        Material: "Cotton, Elastane",
      },
      {
        Closure: "Zip and Button",
      },
      {
        Style: "Ankle Pants",
      },
      {
        Occasion: "Casual, Office",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/17135748/pexels-photo-17135748.jpeg",
      "https://images.pexels.com/photos/6311447/pexels-photo-6311447.jpeg",
      "https://images.pexels.com/photos/3611797/pexels-photo-3611797.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/5560032/pexels-photo-5560032.jpeg",
  },
  {
    id: "CASUN05",
    title: "Uniqlo Men’s Supima Cotton T-Shirt",
    shortDescription:
      "Crafted from premium Supima cotton, this T-shirt offers supreme softness and comfort. Its simple design makes it perfect for layering or wearing alone, and it is available in a variety of colors.",
    discountedPrice: 799,
    originalPrice: 999,
    colors: ["#D32F2F", "#1976D2"],
    category: "CASUAL",
    brand: "Uniqlo",
    displayImage:
      "https://images.pexels.com/photos/6046231/pexels-photo-6046231.jpeg",
    ratings: 4.8,
    reviews: [
      "The softest T-shirt I own. Perfect for any casual occasion.",
      "Love the fit and feel of this shirt. It's great for layering.",
      "Supima cotton makes such a difference. I wear this T-shirt almost every day.",
    ],
    longDescription:
      "Uniqlo Men’s Supima Cotton T-Shirt is made from premium Supima cotton, which is known for its superior softness and long-lasting durability. Whether you wear it on its own or layer it with a jacket, this T-shirt ensures a comfortable, stylish look.",
    overview: [
      "Supima cotton fabric offers exceptional softness, ensuring all-day comfort.",
      "The classic design makes this T-shirt versatile, perfect for layering or wearing on its own.",
      "Durable fabric ensures the T-shirt retains its softness and shape after multiple washes.",
    ],
    keyFeatures: [
      {
        Material: "100% Supima Cotton",
      },
      {
        Closure: "Pullover",
      },
      {
        Style: "Basic T-Shirt",
      },
      {
        Occasion: "Casual, Everyday",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/18265937/pexels-photo-18265937.jpeg",
      "https://images.pexels.com/photos/6390017/pexels-photo-6390017.jpeg",
      "https://images.pexels.com/photos/18708561/pexels-photo-18708561.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/6787007/pexels-photo-6787007.jpeg",
  },
  {
    id: "CAOLN1",
    title: "Old Navy Men’s Essential Slim-Fit Jeans",
    shortDescription:
      "These Essential Slim-Fit Jeans from Old Navy are designed to provide a tailored fit while ensuring maximum comfort. They are made with a flexible, stretchable fabric, perfect for all-day wear and casual outings.",
    discountedPrice: 1899,
    originalPrice: 2299,
    colors: ["#2C3E50", "#AAB7B8"],
    category: "CASUAL",
    brand: "Old Navy",
    displayImage:
      "https://images.pexels.com/photos/1143503/pexels-photo-1143503.jpeg",
    ratings: 4.5,
    reviews: [
      "Perfect fit and very comfortable for everyday use. Highly recommended!",
      "Great quality jeans that provide the right amount of stretch for comfort.",
      "I love the slim fit. Perfect for casual outings and can be dressed up with a nice shirt.",
    ],
    longDescription:
      "Old Navy Men’s Essential Slim-Fit Jeans are made with stretch denim, providing both comfort and style. They are perfect for casual days and can be paired with a variety of tops for a smart yet relaxed look.",
    overview: [
      "The stretchable fabric ensures comfort and ease of movement throughout the day.",
      "Slim-fit cut creates a modern, sleek look, perfect for a wide range of casual outfits.",
      "Soft, breathable fabric makes these jeans ideal for all-day wear without discomfort.",
    ],
    keyFeatures: [
      {
        Material: "98% Cotton, 2% Elastane",
      },
      {
        Closure: "Zip Fly",
      },
      {
        Style: "Slim Fit Jeans",
      },
      {
        Occasion: "Casual, Everyday",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/7621263/pexels-photo-7621263.jpeg",
      "https://images.pexels.com/photos/7172098/pexels-photo-7172098.jpeg",
      "https://images.pexels.com/photos/7162350/pexels-photo-7162350.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/4728674/pexels-photo-4728674.jpeg",
  },
  {
    id: "CAOLN2",
    title: "Old Navy Women’s Soft-Wash Crew-Neck T-Shirt",
    shortDescription:
      "Made from soft-wash cotton, this crew-neck T-shirt provides a relaxed fit and exceptional comfort. It is perfect for everyday wear and can be easily layered or worn on its own.",
    discountedPrice: 799,
    originalPrice: 999,
    colors: ["#E0F7FA", "#FFEBEE"],
    category: "CASUAL",
    brand: "Old Navy",
    displayImage:
      "https://images.pexels.com/photos/17428562/pexels-photo-17428562.jpeg",
    ratings: 4.6,
    reviews: [
      "This shirt is so soft and comfy! I can wear it all day and feel great.",
      "Great value for the price. Perfect for layering or wearing on its own.",
      "Soft and breathable. I love the relaxed fit and variety of colors.",
    ],
    longDescription:
      "Old Navy Women’s Soft-Wash Crew-Neck T-Shirt is designed for everyday wear with its relaxed fit and ultra-soft cotton material. It’s available in several colors and is a wardrobe essential for casual days.",
    overview: [
      "Soft-wash cotton ensures comfort with every wear, making it perfect for long days.",
      "The classic crew-neck design adds to the shirt's versatility, making it easy to pair with jeans or skirts.",
      "Available in multiple colors, so you can easily match it with your casual outfits.",
    ],
    keyFeatures: [
      {
        Material: "100% Cotton",
      },
      {
        Closure: "Pullover",
      },
      {
        Style: "Crew Neck T-Shirt",
      },
      {
        Occasion: "Casual, Everyday",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/14531112/pexels-photo-14531112.jpeg",
      "https://images.pexels.com/photos/18708561/pexels-photo-18708561.jpeg",
      "https://images.pexels.com/photos/7500428/pexels-photo-7500428.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/11739490/pexels-photo-11739490.jpeg",
  },
  {
    id: "CAOLN3",
    title: "Old Navy Men’s Casual Chino Pants",
    shortDescription:
      "These Casual Chino Pants from Old Navy are designed for comfort and durability. With a relaxed fit and soft fabric, they are ideal for both casual and semi-formal settings, providing a stylish yet comfortable option.",
    discountedPrice: 2299,
    originalPrice: 2799,
    colors: ["#2F4F4F", "#8B0000"],
    category: "CASUAL",
    brand: "Old Navy",
    displayImage:
      "https://images.pexels.com/photos/7870254/pexels-photo-7870254.jpeg",
    ratings: 4.4,
    reviews: [
      "These chinos are the perfect mix of comfort and style. Highly recommend for casual days out.",
      "Good quality, fits well, and the fabric is soft. Ideal for both casual and workwear.",
      "Nice pants! The material is sturdy but still comfortable for everyday wear.",
    ],
    longDescription:
      "Old Navy Men’s Casual Chino Pants offer a refined look with their tailored fit and comfortable material. Ideal for casual or business-casual settings, these chinos can be paired with a variety of shirts and jackets.",
    overview: [
      "The relaxed fit ensures comfort for all-day wear, making these chinos a versatile addition to any wardrobe.",
      "Made with a soft cotton blend, these chinos are breathable and lightweight for warmer days.",
      "Classic chino design makes them easy to dress up or down depending on the occasion.",
    ],
    keyFeatures: [
      {
        Material: "98% Cotton, 2% Spandex",
      },
      {
        Closure: "Button and Zipper",
      },
      {
        Style: "Casual Chino Pants",
      },
      {
        Occasion: "Casual, Business-Casual",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/8373805/pexels-photo-8373805.jpeg",
      "https://images.pexels.com/photos/18179361/pexels-photo-18179361.jpeg",
      "https://images.pexels.com/photos/10206444/pexels-photo-10206444.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/28938759/pexels-photo-28938759.jpeg",
  },
  {
    id: "CAOLN4",
    title: "Old Navy Women’s Stretch Denim Jacket",
    shortDescription:
      "This Stretch Denim Jacket from Old Navy combines classic styling with a touch of stretch for added comfort. Perfect for layering over your favorite casual outfits, it offers both style and comfort.",
    discountedPrice: 2299,
    originalPrice: 2799,
    colors: ["#5D4037", "#B2EBF2"],
    category: "CASUAL",
    brand: "Old Navy",
    displayImage:
      "https://images.pexels.com/photos/6931696/pexels-photo-6931696.jpeg",
    ratings: 4.7,
    reviews: [
      "Absolutely love this jacket! Comfortable and stylish, a perfect layering piece.",
      "The stretch makes it so comfy to wear all day. The fit is great too!",
      "I’ve been wearing this jacket non-stop. It's the perfect mix of casual and chic.",
    ],
    longDescription:
      "Old Navy Women’s Stretch Denim Jacket is a versatile addition to your wardrobe. With a hint of stretch, it provides a flattering fit without sacrificing comfort. Layer it over a T-shirt or blouse for a casual yet polished look.",
    overview: [
      "The stretch denim fabric allows for flexibility and comfort, making it perfect for layering.",
      "Classic denim jacket style pairs well with casual outfits, adding a touch of effortless cool.",
      "Durable yet soft, this jacket will last for seasons while maintaining its comfort.",
    ],
    keyFeatures: [
      {
        Material: "99% Cotton, 1% Spandex",
      },
      {
        Closure: "Button",
      },
      {
        Style: "Denim Jacket",
      },
      {
        Occasion: "Casual, Layering",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/6625950/pexels-photo-6625950.jpeg",
      "https://images.pexels.com/photos/11587907/pexels-photo-11587907.jpeg",
      "https://images.pexels.com/photos/6765178/pexels-photo-6765178.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/6787652/pexels-photo-6787652.jpeg",
  },
  {
    id: "CAOLN5",
    title: "Old Navy Men’s Essential Crew-Neck T-Shirt",
    shortDescription:
      "Old Navy’s Essential Crew-Neck T-Shirt is a basic yet reliable wardrobe staple. Made with soft cotton, this shirt offers a comfortable fit and is available in multiple colors, ideal for casual days.",
    discountedPrice: 599,
    originalPrice: 799,
    colors: ["#F44336", "#4CAF50"],
    category: "CASUAL",
    brand: "Old Navy",
    displayImage:
      "https://images.pexels.com/photos/18186105/pexels-photo-18186105.jpeg",
    ratings: 4.8,
    reviews: [
      "Such a comfortable and soft T-shirt, I wear it all the time. Great quality for the price.",
      "Nice fit and super breathable, making it perfect for everyday wear.",
      "I own several of these. The fit is perfect, and they hold up well after washing.",
    ],
    longDescription:
      "Old Navy Men’s Essential Crew-Neck T-Shirt is designed for everyday comfort. With a simple crew-neck design and soft cotton fabric, it’s an essential piece for casual outfits, providing comfort without compromising on style.",
    overview: [
      "The soft cotton fabric feels comfortable against the skin, making it ideal for all-day wear.",
      "Simple yet stylish, the crew-neck design adds to its versatility for casual occasions.",
      "This T-shirt is available in various colors, allowing you to match it with nearly any casual look.",
    ],
    keyFeatures: [
      {
        Material: "100% Cotton",
      },
      {
        Closure: "Pullover",
      },
      {
        Style: "Crew Neck T-Shirt",
      },
      {
        Occasion: "Casual, Everyday",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/18186106/pexels-photo-18186106.jpeg",
      "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg",
      "https://images.pexels.com/photos/8801076/pexels-photo-8801076.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/5429325/pexels-photo-5429325.jpeg",
  },
  {
    id: "CaGa01",
    title: "GAP Men’s Classic Straight Jeans",
    shortDescription:
      "GAP Men’s Classic Straight Jeans provide a timeless look with a relaxed fit, offering comfort and flexibility throughout the day. Ideal for casual outings or weekend wear, these jeans offer the perfect blend of style and function.",
    discountedPrice: 2499,
    originalPrice: 2999,
    colors: ["#4B6E6F", "#3B3A36"],
    category: "CASUAL",
    brand: "GAP",
    displayImage:
      "https://images.pexels.com/photos/11587907/pexels-photo-11587907.jpeg",
    ratings: 4.6,
    reviews: [
      "These jeans are super comfortable and fit perfectly. Highly recommend for casual outings!",
      "Great quality jeans. The fit is perfect and they feel very durable.",
      "Love the relaxed fit. Perfect for both casual and semi-formal occasions.",
    ],
    longDescription:
      "The GAP Men’s Classic Straight Jeans are a wardrobe essential. Made from soft, durable fabric, they provide a timeless look with a comfortable fit. Available in a variety of colors, these jeans are perfect for everyday wear.",
    overview: [
      "Made from high-quality cotton blend, ensuring comfort and long-lasting wear.",
      "The straight cut design creates a classic and versatile look for any occasion.",
      "These jeans offer the perfect balance between style and comfort for casual wear.",
    ],
    keyFeatures: [
      {
        Material: "98% Cotton, 2% Spandex",
      },
      {
        Closure: "Button and Zipper",
      },
      {
        Style: "Straight Jeans",
      },
      {
        Occasion: "Casual, Everyday",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/913514/pexels-photo-913514.jpeg",
      "https://images.pexels.com/photos/12123858/pexels-photo-12123858.jpeg",
      "https://images.pexels.com/photos/107949/pexels-photo-107949.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/3214660/pexels-photo-3214660.jpeg",
  },
  {
    id: "CaGa02",
    title: "GAP Women’s Essential V-Neck T-Shirt",
    shortDescription:
      "GAP Women’s Essential V-Neck T-Shirt is made from soft cotton for all-day comfort. Its classic V-neck design adds a touch of elegance, making it ideal for casual days, layering, or wearing on its own.",
    discountedPrice: 899,
    originalPrice: 1299,
    colors: ["#B4A7A3", "#2C3E50"],
    category: "CASUAL",
    brand: "GAP",
    displayImage:
      "https://images.pexels.com/photos/7432216/pexels-photo-7432216.jpeg",
    ratings: 4.5,
    reviews: [
      "Perfect fit and very comfortable. A great addition to my casual wardrobe.",
      "I love the softness of the fabric. It’s perfect for warmer days or layering.",
      "The V-neck design is stylish and flattering. I wear it all the time!",
    ],
    longDescription:
      "This V-neck T-shirt is an essential addition to any wardrobe. Made with 100% cotton, it offers a soft feel and casual elegance. Available in multiple colors, this shirt is perfect for everyday wear or layering with jackets and cardigans.",
    overview: [
      "The classic V-neck design provides a flattering and stylish fit.",
      "Soft cotton fabric ensures breathability and comfort throughout the day.",
      "Available in a variety of colors, making it easy to pair with almost any casual outfit.",
    ],
    keyFeatures: [
      {
        Material: "100% Cotton",
      },
      {
        Closure: "Pullover",
      },
      {
        Style: "V-Neck T-Shirt",
      },
      {
        Occasion: "Casual, Everyday",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/5852979/pexels-photo-5852979.jpeg",
      "https://images.pexels.com/photos/18186106/pexels-photo-18186106.jpeg",
      "https://images.pexels.com/photos/17071188/pexels-photo-17071188.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/6390017/pexels-photo-6390017.jpeg",
  },
  {
    id: "CaGa03",
    title: "GAP Men’s Short-Sleeve Henley Shirt",
    shortDescription:
      "The GAP Men’s Short-Sleeve Henley Shirt combines casual style with comfort. Made from soft, breathable cotton, it features a classic Henley button-down design, ideal for layering or wearing on its own during warmer days.",
    discountedPrice: 1099,
    originalPrice: 1499,
    colors: ["#566573", "#D6E5D2"],
    category: "CASUAL",
    brand: "GAP",
    displayImage:
      "https://images.pexels.com/photos/7764066/pexels-photo-7764066.jpeg",
    ratings: 4.4,
    reviews: [
      "This Henley shirt is super comfortable and looks great with jeans or shorts.",
      "The fit is perfect and the fabric is breathable. Great for casual weekends.",
      "I love the Henley style! It's a versatile shirt that can be worn with anything.",
    ],
    longDescription:
      "The GAP Men’s Short-Sleeve Henley Shirt is perfect for those casual days when you want to stay cool and stylish. Its button-down Henley design gives it a relaxed yet trendy vibe, making it ideal for layering or wearing alone.",
    overview: [
      "The short-sleeve design and breathable cotton fabric make it perfect for warmer weather.",
      "Button-down Henley style adds a bit of classic charm to your casual look.",
      "Versatile and easy to pair with jeans, shorts, or chinos for any casual outing.",
    ],
    keyFeatures: [
      {
        Material: "100% Cotton",
      },
      {
        Closure: "Button-Down Henley",
      },
      {
        Style: "Short-Sleeve Henley",
      },
      {
        Occasion: "Casual, Everyday",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/17251247/pexels-photo-17251247.jpeg",
      "https://images.pexels.com/photos/10027927/pexels-photo-10027927.jpeg",
      "https://images.pexels.com/photos/13316725/pexels-photo-13316725.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/7752666/pexels-photo-7752666.jpeg",
  },
  {
    id: "CaGa04",
    title: "GAP Women’s High-Waisted Denim Shorts",
    shortDescription:
      "GAP Women’s High-Waisted Denim Shorts offer a comfortable and stylish fit for summer. These shorts are made with a soft cotton blend, offering breathability and flexibility, perfect for warm weather and casual outings.",
    discountedPrice: 1299,
    originalPrice: 1799,
    colors: ["#F4A460", "#5F6366"],
    category: "CASUAL",
    brand: "GAP",
    displayImage:
      "https://images.pexels.com/photos/17135740/pexels-photo-17135740.jpeg",
    ratings: 4.7,
    reviews: [
      "These shorts are so comfortable and stylish. Perfect for summer days out!",
      "I love the high-waisted fit. It’s flattering and pairs well with many tops.",
      "Great quality and the color is vibrant. Perfect for casual outdoor activities.",
    ],
    longDescription:
      "GAP Women’s High-Waisted Denim Shorts offer a relaxed, comfortable fit with a high waist design. Made from soft denim fabric, they are the perfect choice for hot summer days, giving you both style and comfort.",
    overview: [
      "The high-waisted cut creates a flattering silhouette and provides extra comfort.",
      "Soft cotton denim blend makes these shorts breathable and perfect for warmer weather.",
      "Classic design and durable fabric make these shorts a go-to for casual outdoor wear.",
    ],
    keyFeatures: [
      {
        Material: "99% Cotton, 1% Spandex",
      },
      {
        Closure: "Button and Zipper",
      },
      {
        Style: "High-Waisted Shorts",
      },
      {
        Occasion: "Casual, Summer",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/7465714/pexels-photo-7465714.jpeg",
      "https://images.pexels.com/photos/14448542/pexels-photo-14448542.jpeg",
      "https://images.pexels.com/photos/15807393/pexels-photo-15807393.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/6007322/pexels-photo-6007322.jpeg",
  },
  {
    id: "CaGa05",
    title: "GAP Men’s Essential Jogger Pants",
    shortDescription:
      "GAP Men’s Essential Jogger Pants are designed for ultimate comfort with a relaxed fit and soft fabric. These joggers are perfect for lounging, running errands, or casual outings, offering a stylish yet comfortable solution for everyday wear.",
    discountedPrice: 1799,
    originalPrice: 2199,
    colors: ["#3E4C59", "#D8D8D8"],
    category: "CASUAL",
    brand: "GAP",
    displayImage:
      "https://images.pexels.com/photos/9775553/pexels-photo-9775553.jpeg",
    ratings: 4.6,
    reviews: [
      "These joggers are super soft and comfortable. Great for casual days or lounging.",
      "Perfect fit and really breathable. Ideal for working out or just relaxing at home.",
      "I wear these joggers all the time. They are durable and stylish for everyday use.",
    ],
    longDescription:
      "GAP Men’s Essential Jogger Pants are a must-have for your casual wardrobe. Made with a comfortable cotton blend, these joggers feature a tapered leg and elastic cuffs, offering a modern look with maximum comfort.",
    overview: [
      "The elastic cuffs and tapered legs provide a sleek, modern fit for casual wear.",
      "Made with a soft cotton blend that offers comfort and breathability throughout the day.",
      "The relaxed fit and adjustable waistband make these joggers easy to wear for any occasion.",
    ],
    keyFeatures: [
      {
        Material: "95% Cotton, 5% Spandex",
      },
      {
        Closure: "Elastic Waistband",
      },
      {
        Style: "Jogger Pants",
      },
      {
        Occasion: "Casual, Lounge, Everyday",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/11668723/pexels-photo-11668723.jpeg",
      "https://images.pexels.com/photos/13769337/pexels-photo-13769337.jpeg",
      "https://images.pexels.com/photos/6311478/pexels-photo-6311478.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/6311390/pexels-photo-6311390.jpeg",
  },
  {
    id: "FoBr01",
    title: "Brooks Brothers Men's Classic Fit Suit",
    shortDescription:
      "The Brooks Brothers Men's Classic Fit Suit offers a timeless, professional look. Crafted from a wool-blend fabric, this suit ensures comfort and durability, making it a perfect choice for business meetings, formal events, or weddings.",
    discountedPrice: 7999,
    originalPrice: 9999,
    colors: ["#2C3E50", "#1D3C44"],
    category: "FORMAL",
    brand: "Brooks Brothers",
    displayImage:
      "https://images.pexels.com/photos/6765643/pexels-photo-6765643.jpeg",
    ratings: 4.7,
    reviews: [
      "This suit is perfect for formal events. The fit is excellent, and the fabric is soft.",
      "I love the professional look. It's comfortable and stylish for all-day wear.",
      "Brooks Brothers never disappoints. The suit fits perfectly and is made with high-quality fabric.",
    ],
    longDescription:
      "Crafted from a luxurious wool-blend fabric, this classic fit suit is a must-have for any professional wardrobe. Perfect for business meetings or formal events, it provides a tailored, sharp look that exudes confidence and elegance.",
    overview: [
      "This suit is meticulously crafted from a high-quality wool-blend fabric, designed to provide comfort and durability throughout long days of wear.",
      "The classic fit offers a sharp, timeless silhouette that maintains a professional appearance, perfect for any formal or business occasion.",
      "Whether it's a business presentation, a formal dinner, or a wedding, this suit ensures you stand out in the most sophisticated manner.",
      "The luxurious wool-blend fabric is soft against the skin, offering a pleasant wearing experience without compromising on style or durability.",
    ],
    keyFeatures: [
      {
        Material: "Wool-Blend",
      },
      {
        Closure: "Single-Breasted Button",
      },
      {
        Style: "Classic Fit Suit",
      },
      {
        Occasion: "Business, Formal Events",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/19479555/pexels-photo-19479555.jpeg",
      "https://images.pexels.com/photos/6766302/pexels-photo-6766302.jpeg",
      "https://images.pexels.com/photos/8250132/pexels-photo-8250132.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/6764938/pexels-photo-6764938.jpeg",
  },
  {
    id: "FoBr02",
    title: "Brooks Brothers Men's Oxford Dress Shirt",
    shortDescription:
      "The Brooks Brothers Men's Oxford Dress Shirt is designed for ultimate comfort and a sharp look. Made from premium cotton, it features a button-down collar and classic fit, making it a versatile addition to any formal or business wardrobe.",
    discountedPrice: 2999,
    originalPrice: 3999,
    colors: ["#2F4050", "#3C4C63"],
    category: "FORMAL",
    brand: "Brooks Brothers",
    displayImage:
      "https://images.pexels.com/photos/2491123/pexels-photo-2491123.jpeg",
    ratings: 4.6,
    reviews: [
      "The fabric is so soft and breathable. It’s perfect for long workdays.",
      "I’ve been wearing Brooks Brothers shirts for years, and they never disappoint.",
      "Great quality and fits perfectly. This shirt is my go-to for business attire.",
    ],
    longDescription:
      "Crafted from 100% premium cotton, the Oxford Dress Shirt by Brooks Brothers offers a crisp, clean look with all-day comfort. Featuring a button-down collar and a classic fit, this shirt pairs well with suits or dress trousers.",
    overview: [
      "Crafted from 100% premium cotton, this Oxford shirt is designed to offer all-day comfort while maintaining a crisp, clean, and professional appearance.",
      "The button-down collar adds a traditional touch to the design, offering a sharp look that is perfect for both formal and business occasions.",
      "The classic fit ensures that the shirt complements your body shape without feeling restrictive, making it ideal for long hours at the office.",
      "This versatile shirt can be paired with any formal trousers or dress pants, providing the perfect combination of comfort and style for any business or formal event.",
    ],
    keyFeatures: [
      {
        Material: "100% Cotton",
      },
      {
        Closure: "Button-Down Collar",
      },
      {
        Style: "Oxford Dress Shirt",
      },
      {
        Occasion: "Business, Formal Events",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/293405/pexels-photo-293405.jpeg",
      "https://images.pexels.com/photos/6764952/pexels-photo-6764952.jpeg",
      "https://images.pexels.com/photos/19198157/pexels-photo-19198157.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/6011277/pexels-photo-6011277.jpeg",
  },
  {
    id: "FoBr03",
    title: "Brooks Brothers Men's Wool Dress Pants",
    shortDescription:
      "These Brooks Brothers Men's Wool Dress Pants are crafted with high-quality wool, offering a refined and elegant look. Their tailored fit and smooth texture make them a perfect choice for formal office settings or elegant dinner events.",
    discountedPrice: 3499,
    originalPrice: 4499,
    colors: ["#3A4D69", "#4F5D6C"],
    category: "FORMAL",
    brand: "Brooks Brothers",
    displayImage:
      "https://images.pexels.com/photos/6764917/pexels-photo-6764917.jpeg",
    ratings: 4.8,
    reviews: [
      "The quality of these dress pants is fantastic. The wool fabric feels soft and luxurious.",
      "These pants fit perfectly and are perfect for office settings.",
      "I wear these pants for both business and formal occasions. They are versatile and stylish.",
    ],
    longDescription:
      "These wool dress pants from Brooks Brothers are designed to provide a comfortable, tailored fit. With a sleek, smooth finish, these pants are ideal for both business environments and more formal gatherings, ensuring you look polished and professional.",
    overview: [
      "Crafted from high-quality wool, these dress pants offer a smooth, luxurious finish that elevates your appearance in any professional or formal setting.",
      "The tailored fit ensures a sharp, flattering silhouette, making these pants perfect for both business meetings and elegant dinner events.",
      "These pants are designed with both style and comfort in mind, offering a breathable fabric that allows for all-day wear without compromising on appearance.",
      "Whether paired with a blazer for the office or dressed up for a formal gathering, these wool dress pants provide a refined, sophisticated look.",
    ],
    keyFeatures: [
      {
        Material: "Wool",
      },
      {
        Closure: "Zip Fly with Button",
      },
      {
        Style: "Dress Pants",
      },
      {
        Occasion: "Business, Formal Events",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/6764922/pexels-photo-6764922.jpeg",
      "https://images.pexels.com/photos/6764932/pexels-photo-6764932.jpeg",
      "https://images.pexels.com/photos/6764935/pexels-photo-6764935.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/6766358/pexels-photo-6766358.jpeg",
  },
  {
    id: "FoBr04",
    title: "Brooks Brothers Men's Cashmere V-Neck Sweater",
    shortDescription:
      "The Brooks Brothers Men's Cashmere V-Neck Sweater provides an ultra-soft feel and sophisticated look. Made from luxurious cashmere, this sweater is perfect for layering over shirts or wearing alone during colder seasons.",
    discountedPrice: 4999,
    originalPrice: 6499,
    colors: ["#2B3A42", "#485F6E"],
    category: "FORMAL",
    brand: "Brooks Brothers",
    displayImage:
      "https://images.pexels.com/photos/7496335/pexels-photo-7496335.jpeg",
    ratings: 4.7,
    reviews: [
      "This sweater is incredibly soft and perfect for colder weather.",
      "It’s stylish and versatile enough to wear over a dress shirt or on its own.",
      "The cashmere feels luxurious and the fit is just right. Very pleased with this purchase.",
    ],
    longDescription:
      "This V-neck sweater from Brooks Brothers is made from the finest cashmere, offering a soft and warm fit. It’s perfect for layering over a dress shirt for a business casual look or wearing on its own for a more relaxed formal style.",
    overview: [
      "Made from luxurious cashmere, this sweater offers an ultra-soft, warm, and breathable fit, perfect for chilly days.",
      "The V-neck design is both flattering and sophisticated, offering a stylish option for both formal and casual outfits.",
      "Ideal for layering over shirts or wearing on its own, this versatile piece can be dressed up for the office or worn casually for an elegant weekend look.",
      "Available in a variety of refined colors, this cashmere sweater pairs well with both dress pants and casual trousers for a range of formal occasions.",
    ],
    keyFeatures: [
      {
        Material: "100% Cashmere",
      },
      {
        Closure: "Pull-Over",
      },
      {
        Style: "V-Neck Sweater",
      },
      {
        Occasion: "Business, Formal Events",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/10529391/pexels-photo-10529391.jpeg",
      "https://images.pexels.com/photos/8386642/pexels-photo-8386642.jpeg",
      "https://images.pexels.com/photos/6802051/pexels-photo-6802051.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/6003251/pexels-photo-6003251.jpeg",
  },
  {
    id: "FoBr05",
    title: "Brooks Brothers Men's Wool Blazer",
    shortDescription:
      "The Brooks Brothers Men's Wool Blazer is a versatile piece, designed for formal and semi-formal occasions. Its tailored fit and refined wool fabric make it an essential addition to any professional wardrobe, offering both comfort and style.",
    discountedPrice: 6999,
    originalPrice: 8499,
    colors: ["#3A4D69", "#4A6474"],
    category: "FORMAL",
    brand: "Brooks Brothers",
    displayImage:
      "https://images.pexels.com/photos/9168856/pexels-photo-9168856.jpeg",
    ratings: 4.9,
    reviews: [
      "The blazer fits perfectly and the wool is comfortable. Great for formal events.",
      "A timeless piece that I wear regularly for business and semi-formal occasions.",
      "Well-made and stylish, this blazer is a must-have in any formal wardrobe.",
    ],
    longDescription:
      "Crafted from refined wool fabric, this Brooks Brothers wool blazer offers a tailored fit that is ideal for both formal and semi-formal settings. Its sharp lines and comfortable fabric make it a versatile addition to any professional wardrobe.",
    overview: [
      "Crafted from high-quality wool, this blazer provides both comfort and a sharp, professional appearance, perfect for business meetings and semi-formal events.",
      "The tailored fit ensures that the blazer offers a sleek, flattering look, while the wool fabric allows for breathability and warmth.",
      "Whether worn over a shirt and tie for a business meeting or paired with casual trousers for a semi-formal gathering, this blazer offers unmatched versatility.",
      "The classic, timeless design ensures that this wool blazer remains a staple piece in your formal wardrobe for years to come.",
    ],
    keyFeatures: [
      {
        Material: "Wool",
      },
      {
        Closure: "Single-Breasted Button",
      },
      {
        Style: "Wool Blazer",
      },
      {
        Occasion: "Business, Formal Events",
      },
      {
        "Water Resistance": "No",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/19393856/pexels-photo-19393856.jpeg",
      "https://images.pexels.com/photos/8250101/pexels-photo-8250101.jpeg",
      "https://images.pexels.com/photos/9464620/pexels-photo-9464620.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/17223714/pexels-photo-17223714.jpeg",
  },
  {
    id: "FORL01",
    title: "Classic Fit Cotton Shirt",
    shortDescription: "Timeless cotton shirt",
    discountedPrice: 5999,
    originalPrice: 7999,
    colors: ["#123456", "#654321", "#8B0000"],
    category: "FORMAL",
    brand: "Ralph Lauren",
    displayImage:
      "https://images.pexels.com/photos/11674381/pexels-photo-11674381.jpeg",
    ratings: 4,
    reviews: [
      "The fabric quality is excellent, and the fit is perfect for formal wear.",
      "Stylish and durable shirt, great for office meetings and events.",
      "Highly recommend this shirt for its comfort and elegant look.",
    ],
    longDescription:
      "Crafted from premium cotton, this shirt offers both style and comfort. Perfect for office settings and formal gatherings.",
    overview: [
      "This shirt features a premium cotton design, ensuring all-day comfort and breathability even during long meetings or events.",
      "With its classic fit, it balances professional aesthetics and wearability, making it a reliable wardrobe essential.",
      "Ideal for pairing with trousers or blazers, it provides a polished look suitable for business and social formal occasions.",
      "Durable stitching and high-quality fabric contribute to its long-lasting usability, enhancing your formal attire effortlessly.",
    ],
    keyFeatures: [
      {
        Material: "100% Cotton",
      },
      {
        Fit: "Classic Fit",
      },
      {
        Collar: "Point Collar",
      },
      {
        Care: "Machine Washable",
      },
      {
        Style: "Formal Shirt",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg",
      "https://images.pexels.com/photos/5424909/pexels-photo-5424909.jpeg",
      "https://images.pexels.com/photos/6276012/pexels-photo-6276012.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/13316725/pexels-photo-13316725.jpeg",
  },
  {
    id: "FORL02",
    title: "Slim Fit Wool Blazer",
    shortDescription: "Stylish wool blazer",
    discountedPrice: 14999,
    originalPrice: 19999,
    colors: ["#00008B", "#2F4F4F", "#8B4513"],
    category: "FORMAL",
    brand: "Ralph Lauren",
    displayImage:
      "https://images.pexels.com/photos/9811700/pexels-photo-9811700.jpeg",
    ratings: 5,
    reviews: [
      "A perfect blazer for both formal and semi-formal occasions.",
      "The slim fit adds a modern touch to a classic design.",
      "Excellent craftsmanship and premium fabric quality.",
    ],
    longDescription:
      "This wool blazer combines elegance with modern design, making it ideal for formal and business events.",
    overview: [
      "This blazer is crafted from luxurious wool, offering warmth, durability, and elegance in one stylish piece.",
      "Its slim fit ensures a sharp, modern silhouette, ideal for creating a commanding yet refined appearance.",
      "Perfect for pairing with shirts and formal trousers, it adds a touch of sophistication to your wardrobe.",
      "The design emphasizes clean lines and functional detailing, ensuring comfort without compromising on style.",
    ],
    keyFeatures: [
      {
        Material: "Premium Wool",
      },
      {
        Fit: "Slim Fit",
      },
      {
        Closure: "Single Button",
      },
      {
        Lining: "Full Lining",
      },
      {
        Style: "Formal Blazer",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/11216999/pexels-photo-11216999.jpeg",
      "https://images.pexels.com/photos/18951524/pexels-photo-18951524.jpeg",
      "https://images.pexels.com/photos/19393856/pexels-photo-19393856.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/21904480/pexels-photo-21904480.jpeg",
  },
  {
    id: "FORL03",
    title: "Classic Fit Chinos",
    shortDescription: "Comfortable chinos",
    discountedPrice: 6999,
    originalPrice: 8999,
    colors: ["#696969", "#A52A2A", "#556B2F"],
    category: "FORMAL",
    brand: "Ralph Lauren",
    displayImage:
      "https://images.pexels.com/photos/4728674/pexels-photo-4728674.jpeg",
    ratings: 4,
    reviews: [
      "Very comfortable chinos with a perfect fit for office wear.",
      "Great material and design, suitable for long hours of wear.",
      "Highly recommend these chinos for their versatility and style.",
    ],
    longDescription:
      "These classic fit chinos offer unmatched comfort and style, making them perfect for both office and casual settings.",
    overview: [
      "Designed with versatility in mind, these chinos offer a seamless blend of formal style and everyday comfort.",
      "The breathable fabric and precise tailoring make them suitable for office hours or casual evening outings.",
      "Available in rich colors, they pair effortlessly with shirts or blazers, enhancing any outfit's sophistication.",
      "Durable materials and a classic fit ensure these chinos remain a staple in your wardrobe for years to come.",
    ],
    keyFeatures: [
      {
        Material: "Cotton Blend",
      },
      {
        Fit: "Classic Fit",
      },
      {
        Closure: "Button and Zipper",
      },
      {
        Pockets: "Four Pockets",
      },
      {
        Style: "Formal Chinos",
      },
    ],
    isBestseller: false,
    additionalImages: [
      "https://images.pexels.com/photos/17745504/pexels-photo-17745504.jpeg",
      "https://images.pexels.com/photos/12056537/pexels-photo-12056537.jpeg",
      "https://images.pexels.com/photos/29547631/pexels-photo-29547631.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/6295121/pexels-photo-6295121.jpeg",
  },
  {
    id: "FORL04",
    title: "Silk Blend Tie",
    shortDescription: "Elegant silk tie",
    discountedPrice: 2999,
    originalPrice: 3999,
    colors: ["#8B0000", "#4B0082", "#483D8B"],
    category: "FORMAL",
    brand: "Ralph Lauren",
    displayImage:
      "https://images.pexels.com/photos/5154372/pexels-photo-5154372.jpeg",
    ratings: 4,
    reviews: [
      "Beautiful tie with excellent fabric quality.",
      "Adds a touch of elegance to any formal outfit.",
      "Great value for a premium tie like this.",
    ],
    longDescription:
      "This silk blend tie is a perfect accessory for formal events, offering style and sophistication.",
    overview: [
      "Elevate your formal attire with this silk blend tie, featuring a smooth texture and vibrant hues.",
      "Its versatile design complements a wide array of suits and shirts, ensuring a polished, elegant look.",
      "Crafted with precision, the tie boasts both durability and resistance to wrinkles, retaining its quality over time.",
      "A must-have accessory for enhancing your professional and formal wardrobe, suitable for events and daily office wear.",
    ],
    keyFeatures: [
      {
        Material: "Silk Blend",
      },
      {
        Length: "Standard Length",
      },
      {
        Width: "3.5 inches",
      },
      {
        Pattern: "Solid and Textured",
      },
      {
        Style: "Formal Accessory",
      },
    ],
    isBestseller: false,
    additionalImages: [
      "https://images.pexels.com/photos/5264925/pexels-photo-5264925.jpeg",
      "https://images.pexels.com/photos/6030144/pexels-photo-6030144.jpeg",
      "https://images.pexels.com/photos/9404774/pexels-photo-9404774.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/19085992/pexels-photo-19085992.jpeg",
  },
  {
    id: "FORL05",
    title: "Leather Formal Belt",
    shortDescription: "Durable leather belt",
    discountedPrice: 4999,
    originalPrice: 6999,
    colors: ["#654321", "#8B4513", "#2F4F4F"],
    category: "FORMAL",
    brand: "Ralph Lauren",
    displayImage:
      "https://images.pexels.com/photos/71123/belts-leather-seam-sew-71123.jpeg",
    ratings: 5,
    reviews: [
      "Very durable and stylish belt, perfect for formal outfits.",
      "High-quality leather with a great finish.",
      "Fits perfectly and looks fantastic with suits and trousers.",
    ],
    longDescription:
      "This leather belt combines durability and elegance, making it a perfect accessory for formal attire.",
    overview: [
      "Crafted from genuine leather, this belt balances rugged durability with sleek formal aesthetics.",
      "Its metallic buckle and classic design make it a versatile piece for enhancing any professional look.",
      "The adjustable feature ensures a perfect fit, offering both comfort and style throughout your day.",
      "Built to withstand regular use, it complements trousers or suits effortlessly, making it a reliable wardrobe addition.",
    ],
    keyFeatures: [
      {
        Material: "Genuine Leather",
      },
      {
        Buckle: "Metallic Finish",
      },
      {
        Width: "1.5 inches",
      },
      {
        Adjustability: "Custom Fit",
      },
      {
        Style: "Formal Belt",
      },
    ],
    isBestseller: false,
    additionalImages: [
      "https://images.pexels.com/photos/4164506/pexels-photo-4164506.jpeg",
      "https://images.pexels.com/photos/1438865/pexels-photo-1438865.jpeg",
      "https://images.pexels.com/photos/1682698/pexels-photo-1682698.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/6765642/pexels-photo-6765642.jpeg",
  },
  {
    id: "FOHB01",
    title: "Slim Fit Cotton Shirt",
    shortDescription: "Elegant slim-fit cotton shirt",
    discountedPrice: 7999,
    originalPrice: 9999,
    colors: ["#000000", "#696969"],
    category: "FORMAL",
    brand: "Hugo Boss",
    displayImage:
      "https://images.pexels.com/photos/9558253/pexels-photo-9558253.jpeg",
    ratings: 5,
    reviews: [
      "Perfect fit and very comfortable for long wear.",
      "High-quality fabric that retains its look after multiple washes.",
      "A premium shirt that adds a touch of elegance to any formal attire.",
    ],
    longDescription:
      "This slim-fit cotton shirt by Hugo Boss is tailored for modern professionals. It provides superior comfort and style, ideal for boardroom meetings or formal events.",
    overview: [
      "This slim-fit shirt is crafted from premium cotton, ensuring a soft texture and breathable comfort for long hours.",
      "Its modern tailoring creates a sleek, polished look suitable for professional settings and formal gatherings.",
      "Durable and wrinkle-resistant fabric maintains its crisp appearance even after multiple uses.",
      "Pair this versatile piece with tailored trousers or suits for an effortlessly elegant ensemble.",
    ],
    keyFeatures: [
      {
        Material: "100% Premium Cotton",
      },
      {
        Fit: "Slim Fit",
      },
      {
        Collar: "Spread Collar",
      },
      {
        Care: "Machine Washable",
      },
      {
        Style: "Formal Shirt",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/4011736/pexels-photo-4011736.jpeg",
      "https://images.pexels.com/photos/17251247/pexels-photo-17251247.jpeg",
      "https://images.pexels.com/photos/4092242/pexels-photo-4092242.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/4066292/pexels-photo-4066292.jpeg",
  },
  {
    id: "FOHB02",
    title: "Tailored Fit Wool Suit",
    shortDescription: "Premium tailored wool suit",
    discountedPrice: 39999,
    originalPrice: 49999,
    colors: ["#2F4F4F", "#000000"],
    category: "FORMAL",
    brand: "Hugo Boss",
    displayImage:
      "https://images.pexels.com/photos/6764917/pexels-photo-6764917.jpeg",
    ratings: 5,
    reviews: [
      "Exceptional craftsmanship and fit.",
      "The wool fabric feels luxurious and looks elegant.",
      "Perfect for high-profile business events and formal occasions.",
    ],
    longDescription:
      "This tailored wool suit by Hugo Boss combines sophistication and comfort, making it ideal for formal events and high-level business meetings.",
    overview: [
      "Crafted from luxurious wool, this tailored suit offers unmatched elegance and professional style for key events.",
      "Its precise tailoring enhances a sharp, confident appearance, ideal for boardrooms or galas.",
      "Durable construction ensures long-lasting quality while maintaining a soft, premium feel.",
      "Pair with formal shirts and accessories to create versatile, sophisticated outfits.",
    ],
    keyFeatures: [
      {
        Material: "100% Wool",
      },
      {
        Fit: "Tailored Fit",
      },
      {
        Lining: "Full Lining",
      },
      {
        Closure: "Two-Button",
      },
      {
        Style: "Formal Suit",
      },
    ],
    isBestseller: true,
    additionalImages: [
      "https://images.pexels.com/photos/6764922/pexels-photo-6764922.jpeg",
      "https://images.pexels.com/photos/9168856/pexels-photo-9168856.jpeg",
      "https://images.pexels.com/photos/29686261/pexels-photo-29686261.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/6764932/pexels-photo-6764932.jpeg",
  },
  {
    id: "FOHB03",
    title: "Leather Oxford Shoes",
    shortDescription: "Classic leather Oxford shoes",
    discountedPrice: 15999,
    originalPrice: 19999,
    colors: ["#000000", "#8B4513"],
    category: "FORMAL",
    brand: "Hugo Boss",
    displayImage:
      "https://images.pexels.com/photos/6764989/pexels-photo-6764989.jpeg",
    ratings: 4,
    reviews: [
      "Very comfortable for long hours of wear.",
      "Great quality leather with a polished finish.",
      "Adds a touch of class to formal attire.",
    ],
    longDescription:
      "These leather Oxford shoes by Hugo Boss are the epitome of elegance, offering both style and comfort for formal occasions.",
    overview: [
      "These Oxford shoes feature premium leather construction for durability and timeless style in formal settings.",
      "The cushioned insoles provide unparalleled comfort, making them ideal for extended wear at formal events.",
      "A polished design complements tailored suits and adds sophistication to your wardrobe.",
      "Durable outsoles ensure reliability and support while maintaining an elegant appearance.",
    ],
    keyFeatures: [
      {
        Material: "Genuine Leather",
      },
      {
        Closure: "Lace-Up",
      },
      {
        Sole: "Rubber Sole",
      },
      {
        Care: "Polish Regularly",
      },
      {
        Style: "Oxford Shoes",
      },
    ],
    isBestseller: false,
    additionalImages: [
      "https://images.pexels.com/photos/6766352/pexels-photo-6766352.jpeg",
      "https://images.pexels.com/photos/293404/pexels-photo-293404.jpeg",
      "https://images.pexels.com/photos/293405/pexels-photo-293405.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/6766308/pexels-photo-6766308.jpeg",
  },
  {
    id: "FOHB04",
    title: "Silk Tie and Pocket Square Set",
    shortDescription: "Elegant silk accessory set",
    discountedPrice: 4999,
    originalPrice: 6999,
    colors: ["#800000", "#4B0082"],
    category: "FORMAL",
    brand: "Hugo Boss",
    displayImage:
      "https://images.pexels.com/photos/27060266/pexels-photo-27060266.jpeg",
    ratings: 4,
    reviews: [
      "Beautiful tie and pocket square combo, perfect for formal events.",
      "High-quality silk material and great design.",
      "Adds an elegant touch to any suit.",
    ],
    longDescription:
      "This silk tie and pocket square set by Hugo Boss adds a refined touch to your formal outfit, ideal for special occasions.",
    overview: [
      "This accessory set is crafted from luxurious silk, offering a smooth texture and refined look.",
      "Coordinated patterns provide a polished finish to your formal attire, elevating your style effortlessly.",
      "Durable construction ensures wrinkle resistance, maintaining its premium feel over time.",
      "Ideal for enhancing your look at weddings, corporate events, or evening parties.",
    ],
    keyFeatures: [
      {
        Material: "100% Silk",
      },
      {
        Includes: "Tie and Pocket Square",
      },
      {
        Pattern: "Solid and Textured",
      },
      {
        Care: "Dry Clean Only",
      },
      {
        Style: "Formal Accessories",
      },
    ],
    isBestseller: false,
    additionalImages: [
      "https://images.pexels.com/photos/6044144/pexels-photo-6044144.jpeg",
      "https://images.pexels.com/photos/6044139/pexels-photo-6044139.jpeg",
      "https://images.pexels.com/photos/18977908/pexels-photo-18977908.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/13153341/pexels-photo-13153341.jpeg",
  },
  {
    id: "FOHB05",
    title: "Slim Fit Formal Trousers",
    shortDescription: "Tailored formal trousers",
    discountedPrice: 9999,
    originalPrice: 12999,
    colors: ["#2E2E2E", "#4F4F4F"],
    category: "FORMAL",
    brand: "Hugo Boss",
    displayImage:
      "https://images.pexels.com/photos/6766302/pexels-photo-6766302.jpeg",
    ratings: 5,
    reviews: [
      "Perfect fit and very comfortable for office wear.",
      "The fabric is breathable and wrinkle-free.",
      "A must-have for anyone who values quality and style.",
    ],
    longDescription:
      "These slim-fit formal trousers by Hugo Boss provide a modern aesthetic and exceptional comfort, perfect for professional settings.",
    overview: [
      "These formal trousers are tailored with precision, offering a modern, sharp look for business wear.",
      "Crafted from breathable, high-quality fabric, they provide long-lasting comfort throughout the day.",
      "The slim-fit cut ensures a polished appearance, making them perfect for office settings.",
      "Wrinkle-resistant properties keep them looking crisp, even during travel or long meetings.",
    ],
    keyFeatures: [
      {
        Material: "Polyester Blend",
      },
      {
        Fit: "Slim Fit",
      },
      {
        Closure: "Hook and Zipper",
      },
      {
        Pockets: "Four Pockets",
      },
      {
        Style: "Formal Trousers",
      },
    ],
    isBestseller: false,
    additionalImages: [
      "https://images.pexels.com/photos/13049669/pexels-photo-13049669.jpeg",
      "https://images.pexels.com/photos/9836578/pexels-photo-9836578.jpeg",
      "https://images.pexels.com/photos/6764952/pexels-photo-6764952.jpeg",
    ],
    descriptionImage:
      "https://images.pexels.com/photos/6765643/pexels-photo-6765643.jpeg",
  },
];

const categories = [
  {
    id: "CTB2C3",
    name: "MEN'S CLOTHING",
    img: "https://example.com/images/mens-clothing.jpg",
  },
  {
    id: "CTE5F6",
    name: "WOMEN'S CLOTHING",
    img: "https://example.com/images/womens-clothing.jpg",
  },
  {
    id: "CTH8I9",
    name: "KID'S CLOTHING",
    img: "https://example.com/images/kids-clothing.jpg",
  },
  {
    id: "CTN5O6",
    name: "BEAUTY",
    img: "https://example.com/images/beauty.jpg",
  },
  {
    id: "CTQ8R9",
    name: "ACCESSORIES",
    img: "https://example.com/images/accessories.jpg",
  },
  {
    id: "CTT2U3",
    name: "FASHION",
    img: "https://example.com/images/fashion.jpg",
  },
  {
    id: "CTW5X6",
    name: "SPORTS",
    img: "https://example.com/images/sports.jpg",
  },
  {
    id: "CTZ8A9",
    name: "CASUAL",
    img: "https://example.com/images/casual.jpg",
  },
  {
    id: "CTC2D3",
    name: "FORMAL",
    img: "https://example.com/images/formal.jpg",
  },
];

const brands = [
  {
    id: "BRY2Z3",
    categoryName: "MEN'S CLOTHING",
    name: "Nike",
  },
  {
    id: "BRB3C4",
    categoryName: "MEN'S CLOTHING",
    name: "Adidas",
  },
  {
    id: "BRC4D5",
    categoryName: "MEN'S CLOTHING",
    name: "Levi's",
  },
  {
    id: "BRD5E6",
    categoryName: "WOMEN'S CLOTHING",
    name: "Zara",
  },
  {
    id: "BRE6F7",
    categoryName: "WOMEN'S CLOTHING",
    name: "H&M",
  },
  {
    id: "BRF7G8",
    categoryName: "WOMEN'S CLOTHING",
    name: "Forever 21",
  },
  {
    id: "BRG8H9",
    categoryName: "KID'S CLOTHING",
    name: "Gap Kids",
  },
  {
    id: "BRH9I0",
    categoryName: "KID'S CLOTHING",
    name: "OshKosh B'gosh",
  },
  {
    id: "BRI0J1",
    categoryName: "KID'S CLOTHING",
    name: "Carter's",
  },
  {
    id: "BRJ1K2",
    categoryName: "BEAUTY",
    name: "Sephora",
  },
  {
    id: "BRK2L3",
    categoryName: "BEAUTY",
    name: "MAC",
  },
  {
    id: "BRL3M4",
    categoryName: "BEAUTY",
    name: "L'Oréal",
  },
  {
    id: "BRM4N5",
    categoryName: "ACCESSORIES",
    name: "Fossil",
  },
  {
    id: "BRN5O6",
    categoryName: "ACCESSORIES",
    name: "Ray-Ban",
  },
  {
    id: "BRO6P7",
    categoryName: "ACCESSORIES",
    name: "Michael Kors",
  },
  {
    id: "BRP7Q8",
    categoryName: "FASHION",
    name: "Gucci",
  },
  {
    id: "BRQ8R9",
    categoryName: "FASHION",
    name: "Louis Vuitton",
  },
  {
    id: "BRR9S0",
    categoryName: "FASHION",
    name: "Prada",
  },
  {
    id: "BRS0T1",
    categoryName: "SPORTS",
    name: "Under Armour",
  },
  {
    id: "BRT1U2",
    categoryName: "SPORTS",
    name: "Puma",
  },
  {
    id: "BRU2V3",
    categoryName: "SPORTS",
    name: "Reebok",
  },
  {
    id: "BRV3W4",
    categoryName: "CASUAL",
    name: "Uniqlo",
  },
  {
    id: "BRW4X5",
    categoryName: "CASUAL",
    name: "Old Navy",
  },
  {
    id: "BRX5Y6",
    categoryName: "CASUAL",
    name: "GAP",
  },
  {
    id: "BRY6Z7",
    categoryName: "FORMAL",
    name: "Brooks Brothers",
  },
  {
    id: "BRZ7A8",
    categoryName: "FORMAL",
    name: "Ralph Lauren",
  },
  {
    id: "BRA8B9",
    categoryName: "FORMAL",
    name: "Hugo Boss",
  },
];

export function giveProducts() {
  return products;
}

export function giveBrands() {
  return brands;
}

export function giveCategories() {
  return categories;
}
