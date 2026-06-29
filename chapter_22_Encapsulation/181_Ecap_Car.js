class Car {
    #engine;
    constructor(name, engineName) {
        this.name = name;
        this.#engine = engineName;
    }

    getEngine() {
        return this.#engine;
    }

    setEngine(nameEngine) {
        this.#engine = nameEngine;
    }
}

let tesla = new Car("Tesla", "v8");
console.log(tesla.getEngine());  //v8
tesla.setEngine("v9");
console.log(tesla.getEngine());  //v9

