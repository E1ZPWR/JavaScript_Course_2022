'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    dessertsMenu: ['Cannoli', 'Tiramisu', 'Torta'],

    openingHours: {
        mon: {
            open: 10,
            close: 22
        },
        tue: {
            open: 10,
            close: 22
        },
        wed: {
            open: 10,
            close: 22
        },
        thu: {
            open: 12,
            close: 22
        },
        fri: {
            open: 11,
            close: 23
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24
        },
        sun: {
            open: 0, // Open 24 hours
            close: 24
        }
    },
    // ! LECTURE: Destructuring Arrays 解构数组赋值
    order: function destructuring(entryDish, mainDish) {
        return [this.starterMenu[entryDish], this.mainMenu[mainDish]];
    },

    // ! LECTURE: Destructuring Objects 解构对象赋值
    orderDelivery: function ({
        DeliveryTime = '22:00',
        DeliveryAddress = '197 Gray Ave, Brooklyn, NY 11201',
        OrderedEntryDish = 1,
        OrderedMainDish = 0,
        CustomerName = `HouseHolder of ${DeliveryAddress}`
    }) {
        console.log(`
        =====================================
        Restaurant Name: ${this.name}
        =====================================
        Customer Name: ${CustomerName}
        
        Delivery Time: ${DeliveryTime}
        
        Delivery Address: ${DeliveryAddress}
        
        Ordered:
            Entry Dish: ${this.starterMenu[OrderedEntryDish]}
            Main Dish: ${this.mainMenu[OrderedMainDish]}
        =====================================
        End of the Order List
        =====================================
            `);
    },
    orderPromptSystem: function (ingredient1, ingredient2, ingredient3) {
        console.log(`Here is your pasta with ingredient: ${ingredient1}, ${ingredient2}, ${ingredient3}`);
    }
};
//解构数组操作
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);
//解构对象操作
restaurant.orderDelivery({
    //CustomerName: 'Daniel',
    OrderedEntryDish: 2,
    OrderedMainDish: 2,
    DeliveryTime: '12:00',
    DeliveryAddress: '197 Grange Rd Glen Huntly 3163'
});

// 解构对象赋值知识点
// const { name, location, categories, openingHours } = restaurant;
// console.log(name, location, categories, openingHours);

const {
    name: restaurantName,
    location: restaurantLocation,
    categories: restaurantCategories,
    openingHours: restaurantOpeningHours
} = restaurant;
console.log(restaurantName, restaurantLocation, restaurantCategories, restaurantOpeningHours);

//Set a Default value when destructuring
const {
    menu: restaurantMenu = 'No menu available',
    starterMenu: starters = 'No menu available',
    mainMenu: mainDish = 'No menu available'
} = restaurant;
console.log(restaurantMenu, starters, mainDish);

//nested objects
const {
    fri: { open: restaurantOpen, close: restaurantClose }
} = restaurant.openingHours;
console.log(` THe restaurant opening hours at Friday is ${restaurantOpen}AM -  ${restaurantClose}PM`);

//mutating the variables when destructing the object
let a = 111;
let b = 222;
const obj = {
    a: 23,
    b: 24,
    c: 25
};
//change a and b values
({ a, b } = obj);
console.log(a, b);

// ! LECTURE: Spread Operator 展开运算符
/*
 * spread operator for arrays
 */

const allMenu = [...restaurant.starterMenu, ...restaurant.mainMenu, ...restaurant.dessertsMenu];
console.log(allMenu);

// Iterables : array , strings,maps,sets,Not objects
const Jack = 'Jack';
const letters = [...Jack, '', "'s"];
console.log(letters);

const ingredients = [
    // prompt('Enter your first ingredient'),
    // prompt('Enter your second ingredient'),
    // prompt('Enter your third ingredient')
];
restaurant.orderPromptSystem(...ingredients);

/*
 * spread operator for objects
 */

/**
 * create a new objects with additional properties then merge them with the old object
 * check the difference between the old objects and the new objects
 */
const newRestaurant = {
    foundedIn: 1998,
    founder: 'John Doe',
    ...restaurant
};
console.log(`New Restaurant `);
console.log(newRestaurant);

/*
 * create a new object and copy the properties from the old object
 * then reassign the properties of the new object
 * check the difference between the old objects and the new objects
 * shallow copy
 */

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'A New Name of the Restaurant';
console.log(restaurantCopy.name);
console.log(restaurant.name);
