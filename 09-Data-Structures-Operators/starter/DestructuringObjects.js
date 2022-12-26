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
            open: 10,
            close: 22
        },
        tuesday: {
            open: 10,
            close: 22
        },
        wednesday: {
            open: 10,
            close: 22
        },
        thursday: {
            open: 12,
            close: 22
        },
        friday: {
            open: 11,
            close: 23
        },
        saturday: {
            open: 0, // Open 24 hours
            close: 24
        },
        sunday: {
            open: 0, // Open 24 hours
            close: 24
        }
    },

    OpenTime: function (day) {
        return `Open Time for ${day}: ${this.openingHours[day].open} - ${this.openingHours[day].close}`;
    }
};
const [open, close] = restaurant.OpenTime('sunday').split(' - ');
console.log(open, close);
