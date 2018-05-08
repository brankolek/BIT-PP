'use strict';


(function () {



    // fja za zaokruzivanje, preuzeta sa MDN 
    function round(number, precision) {
        var shift = function (number, precision) {

            var numArray = ("" + number).split("e");
            return +(numArray[0] + "e" + (numArray[1] ? (+numArray[1] + precision) : precision));
        };
        return shift(Math.round(shift(number, +precision)), -precision);
    }


    // Proizvod 

    function Product(name, price, expDate) {


        this.id = parseInt((100000 - 10000) * Math.random() + 10000);
        this.name = name;
        //?
        this.price = Number(round(parseFloat(price), 2).toFixed(2));
        this.expDate = new Date(expDate);
        this.getInfo = function () {
            var firstLetter = this.name[0].toUpperCase();
            var lastLetter = this.name[this.name.length - 1].toUpperCase();
            var productCode = firstLetter + lastLetter + this.id;
            return productCode + ", " + this.name + ", " + this.price;
        }

    }


    // ShopingBag
    function ShoppingBag() {

        this.productList = [];
        this.addProduct = function (product) {
            var currentDate = new Date();
            if (product.expDate > currentDate) {

                this.productList.push(product);
            }

        }
        this.avgPrice = function () {
            var avg = 0;
            for (var i = 0; i < this.productList.length; i++) {

                avg += (this.productList[i].price / this.productList.length)
            }
            return round(avg, 3);

        }

        this.totalPrice = function () {

            var avg = this.avgPrice();
            return avg * this.productList.length;

        }

        this.getMostExpensive = function () {

            this.productList.sort(function (a, b) {

                return a.price - b.price;
            });

            var mostExpensive = this.productList[this.productList.length - 1]
            return mostExpensive.getInfo();

        }
    }


    function PaymentCard(balance, status, validDate) {

        this.balance = Number(round(balance, 2).toFixed(2));
        this.status = status;
        this.validDate = new Date(validDate);


    }


    function checkoutAndBuy(ShopingBag, PaymentCard) {

        if (PaymentCard.balance >= ShopingBag.totalPrice()) {
            console.log("Successful!")
        } else {
            console.log("Amount of money missing is: " + (ShopingBag.totalPrice() - PaymentCard.balance))
        }
    }


    var banana = new Product("banana", "210.5478", "12/12/2018");
    var kiwi = new Product("kiwi", "180.7809", "09/05/2018");
    var apple = new Product("Apple", 95.782, "01/01/2018");


    var MaksiBag = new ShoppingBag();

    var masterCard = new PaymentCard(200, "active", "12/12/2022");



    MaksiBag.addProduct(banana);
    MaksiBag.addProduct(kiwi);
    MaksiBag.addProduct(apple);


    checkoutAndBuy(MaksiBag, masterCard);






    // console.log(MaksiBag);
    // console.log(MaksiBag.avgPrice());
    // console.log(MaksiBag.totalPrice());
    // console.log(MaksiBag.getMostExpensive());
    // console.log(MaksiBag.productList);
























})();

