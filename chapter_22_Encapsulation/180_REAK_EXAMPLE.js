class Person {
    // Hide you childs
    #child1
    #child2
    constructor(name, ch1, ch2) {
        this.name = name;
        this.#child1 = ch1;
        this.#child2 = ch2;
    }

    getChild1() {
        return this.#child1;
    }

    setChild1(changed_name) {
        this.#child1 = changed_name;
    }

}

let p = new Person("Pramod", "Aarav", "Aswathy");
console.log(p.name);
// console.log(p.#child1);
console.log(p.getChild1());


// ---------------------------------------------
//console.log(p) // Person { name: 'Pramod' }
p.setChild1("Dev");
console.log(p.getChild1());

// Private fields (#child1) can only be accessed inside the class.
//
// To read private data -> use a getter method.
// To modify private data -> use a setter method.
//
// Object methods must be called using the object:
//
// p.setChild1("Dev");  // ✅
//
// setChild1("Dev");    // ❌
//
// JavaScript is case-sensitive:
//
// setChild1 != setchild1
