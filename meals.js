const meals = [
    // Soups
    {
        keyword: 'gaspacho',
        name: 'Гаспачо',
        price: 200,
        category: 'soups',
        count: '350 г',
        image: 'gazpacho_soup.jpg',
        kind: 'veg'
    },
    {
        keyword: 'mushroom_soup',
        name: 'Грибной суп-пюре',
        price: 190,
        category: 'soups',
        count: '330 г',
        image: 'mushroom_soup.jpg',
        kind: 'veg'
    },
    {
        keyword: 'norwegian_soup',
        name: 'Норвежский суп',
        price: 275,
        category: 'soups',
        count: '350 г',
        image: 'norwegian_soup.jpg',
        kind: 'fish'
    },
    {
        keyword: 'borsh_soup',
        name: 'Борщ',
        price: 270,
        category: 'soups',
        count: '350 г',
        image: 'borsh_soup.jpg',
        kind: 'meat'
    },
    {
        keyword: 'chicken_soup',
        name: 'Суп-лапша с курицей',
        price: 280,
        category: 'soups',
        count: '320 г',
        image: 'chicken_soup.jpg',
        kind: 'meat'
    },
    {
        keyword: 'fish_soup',
        name: 'Рыбный суп',
        price: 280,
        category: 'soups',
        count: '320 г',
        image: 'fish_soup.jpg',
        kind: 'fish'
    },

    // Main Dishes
    {
        keyword: 'fried_potatoes',
        name: 'Жареная картошка с грибами',
        price: 150,
        category: 'main_dishes',
        count: '400 г',
        image: 'fried_potatoes_with_mushrooms.jpg',
        kind: 'veg'
    },
    {
        keyword: 'lasagna',
        name: 'Лазанья',
        price: 300,
        category: 'main_dishes',
        count: '320 г',
        image: 'lasagna.jpg',
        kind: 'meat'
    },
    {
        keyword: 'chicken_cutlets',
        name: 'Котлеты из курицы с картофельным',
        price: 350,
        category: 'main_dishes',
        count: '350 г',
        image: 'chicken_cutlets_and_mashed_potatoes.jpg',
        kind: 'meat'
    },
    {
        keyword: 'fish_cutlet',
        name: 'Рыбные котлеты',
        price: 400,
        category: 'main_dishes',
        count: '350 г',
        image: 'fish_cutlet.jpg',
        kind: 'fish'
    },
    {
        keyword: 'grilled_fish',
        name: 'Жареная рыба',
        price: 600,
        category: 'main_dishes',
        count: '350 г',
        image: 'grilled_fish.jpg',
        kind: 'fish'
    },
    {
        keyword: 'grilled_shrimp',
        name: 'Креветки на гриле',
        price: 650,
        category: 'main_dishes',
        count: '200 г',
        image: 'grilled_shrimp.jpg',
        kind: 'fish'
    },
    {
        keyword: 'vegetable_stirfry',
        name: 'Овощное рагу',
        price: 220,
        category: 'main_dishes',
        count: '350 г',
        image: 'vegetable_stirfry.jpg',
        kind: 'veg'
    },

    // Salads
    {
        keyword: 'caesar_salad',
        name: 'Цезарь',
        price: 250,
        category: 'salads',
        count: '250 г',
        image: 'caesar_salad.jpg',
        kind: 'meat'
    },
    {
        keyword: 'greek_salad',
        name: 'Греческий салат',
        price: 300,
        category: 'salads',
        count: '300 г',
        image: 'greek_salad.jpg',
        kind: 'veg'
    },
    {
        keyword: 'fries',
        name: 'Картофель фри',
        price: 250,
        category: 'salads',
        count: '300 г',
        image: 'fries.jpg',
        kind: 'veg'
    },
    {
        keyword: 'chicken_salad',
        name: 'Куриный салат',
        price: 280,
        category: 'salads',
        count: '300 г',
        image: 'chicken_salad.jpg',
        kind: 'meat'
    },
    {
        keyword: 'smoked_salmon_salad',
        name: 'Салат с копченым лососем',
        price: 350,
        category: 'salads',
        count: '250 г',
        image: 'smoked_salmon_salad.jpg',
        kind: 'fish'
    },
    {
        keyword: 'beetroot_salad',
        name: 'Свекольный салат',
        price: 220,
        category: 'salads',
        count: '300 г',
        image: 'beetroot_salad.jpg',
        kind: 'veg'
    },
    {
        keyword: 'carrot_salad',
        name: 'Морковный салат',
        price: 300,
        category: 'salads',
        count: '300 г',
        image: 'carrot_salad.jpg',
        kind: 'veg'
    },
    {
        keyword: 'fruit_salad',
        name: 'Фруктовый салат',
        price: 180,
        category: 'salads',
        count: '300 г',
        image: 'fruit_salad.jpg',
        kind: 'veg'
    },

    // Drinks
    {
        keyword: 'orange_juice',
        name: 'Апельсиновый сок',
        price: 100,
        category: 'drinks',
        count: '300 мл',
        image: 'orange_juice.jpg',
        kind: 'cold'
    },
    {
        keyword: 'apple_juice',
        name: 'Яблочный сок',
        price: 90,
        category: 'drinks',
        count: '300 мл',
        image: 'apple_juice.jpg',
        kind: 'cold'
    },
    {
        keyword: 'carrot_juice',
        name: 'Морковный сок',
        price: 100,
        category: 'drinks',
        count: '300 мл',
        image: 'carrot_juice.jpg',
        kind: 'cold'
    },
    {
        keyword: 'grapefruit_juice',
        name: 'Грейпфрутовый сок',
        price: 110,
        category: 'drinks',
        count: '300 мл',
        image: 'grapefruit_juice.jpg',
        kind: 'cold'
    },
    {
        keyword: 'iced_tea',
        name: 'Холодный чай',
        price: 120,
        category: 'drinks',
        count: '300 мл',
        image: 'iced_tea.jpg',
        kind: 'cold'
    },
    {
        keyword: 'coffee',
        name: 'Кофе',
        price: 150,
        category: 'drinks',
        count: '200 мл',
        image: 'coffee.jpg',
        kind: 'hot'
    },
    {
        keyword: 'black_tea',
        name: 'Черный чай',
        price: 90,
        category: 'drinks',
        count: '200 мл',
        image: 'black_tea.jpg',
        kind: 'hot'
    },
    {
        keyword: 'green_tea',
        name: 'Зеленый чай',
        price: 90,
        category: 'drinks',
        count: '200 мл',
        image: 'green_tea.jpg',
        kind: 'hot'
    },
    {
        keyword: 'hot_chocolate',
        name: 'Горячий шоколад',
        price: 130,
        category: 'drinks',
        count: '200 мл',
        image: 'hot_choclate.jpg',
        kind: 'hot'
    },

    // Desserts
    {
        keyword: 'small_chocolate_cake',
        name: 'Маленький шоколадный торт',
        price: 230,
        category: 'desserts',
        count: '220 г',
        image: 'mid_chocolate_cake.jpg',
        kind: 'medium'
    },
    {
        keyword: 'cheese_cake',
        name: 'Чизкейк',
        price: 220,
        category: 'desserts',
        count: '120 г',
        image: 'cheese_cake.jpg',
        kind: 'small'
    },
    {
        keyword: 'tiramisu',
        name: 'Тирамису',
        price: 250,
        category: 'desserts',
        count: '220 г',
        image: 'tiramisu.jpg',
        kind: 'medium'
    },
    {
        keyword: 'panna_cotta',
        name: 'Панна котта',
        price: 170,
        category: 'desserts',
        count: '120 г',
        image: 'panna_cotta.jpg',
        kind: 'small'
    },
    {
        keyword: 'macaron',
        name: 'Макарон',
        price: 100,
        category: 'desserts',
        count: '80 г',
        image: 'macaron.jpg',
        kind: 'small'
    },
    {
        keyword: 'big_chocolate_cake',
        name: 'Шоколадный торт',
        price: 550,
        category: 'desserts',
        count: '400 г',
        image: 'big_chocolate_cake.jpg',
        kind: 'large'
    },
];
