const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    dessertsMenu: ['Cannoli', 'Tiramisu', 'Torta'],
    services: {
        delivery: true,
        surcharge: 0.2,
        dayTimeCost: 5,
        dayTimeStart: 7,
        dayTimeEnd: 18,
        nightTimeCost: 10,
        nightTimeStart: 18,
        nightTimeEnd: 24
    },
    openingHours: {
        monday: {
            openTime: 10,
            closeTime: 22
        },
        tuesday: {
            openTime: 10,
            closeTime: 22
        },
        wednesday: {
            openTime: 10,
            closeTime: 22
        },
        thursday: {
            openTime: 12,
            closeTime: 22
        },
        friday: {
            openTime: 11,
            closeTime: 23
        },
        saturday: {
            openTime: 0, // Open 24 hours
            closeTime: 24
        },
        sunday: {
            openTime: 0, // Open 24 hours
            closeTime: 24
        }
    },

    OpenTime: function (day) {
        return `Open Time for ${day}: ${this.openingHours[day].openTime} - ${this.openingHours[day].closeTime}`;
    }
};
const [open, close] = restaurant.OpenTime('sunday').split(' - ');
console.log(open, close);
