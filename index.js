// Write your code here
class Breakfast{
    constructor(food, drink) {
        this.food = food
        this.drink = drink
    }
}

let bfast = new Breakfast('eggs', 'juice')


class Lunch{
    constructor(salad, soup, drink){ // const. allows us to pass data to our new class
        this.salad = salad
        this.soup = soup
        this.drink = drink // this; is the obj that  will be pass in 
    }
}

let newLunch = new Lunch('side salad', 'broccoli cheddar soup' , 'iced tea')


class Dinner{
    #dessert // private property
    constructor(salad, soup, entree, dessert){
        this.salad = salad
        this.soup = soup
        this.entree = entree
        this.#dessert = dessert // can not access and change private prop.
    }
}

const newdinner = new Dinner(
    "balsamic salad",
    "consomme",
    "filet mignon",
    "cheesecake"
  )



