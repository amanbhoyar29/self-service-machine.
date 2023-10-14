var products = [
    {
        "photo": "img/big-mac.png",
        "name": "Big Mac",
        "price": 100,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/mc-chicken.png",
        "name": "Mc Chicken",
        "price": 250,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/double-cb.png",
        "name": "Double Cheese Burger",
        "price": 150,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/fries.png",
        "name": "Fries",
        "price": 160,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/nuggets.png",
        "name": "Mc Nuggets",
        "price": 290,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/salad.png",
        "name": "Salad",
        "price": 90,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/cola.png",
        "name": "Coke",
        "price": 70,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/lipton.png",
        "name": "Ice Tea",
        "price": 50,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/water.png",
        "name": "Water",
        "price": 20,
        "active": false,
        "quantity": 1
    }
];
 
const SelfServiceMachine = {

    data() {

        return {

        products: window.products
        }


    },

    methods: {

        total:function() {
            var total = 0;
            this.products.forEach(function(item){

                if (item.active) {

                    total += item.price * item.quantity;
                }
            });

            return total;
        }
    }


};



Vue.createApp(SelfServiceMachine).mount('#app');


