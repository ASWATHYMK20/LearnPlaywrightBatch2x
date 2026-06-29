class BasePage {
    constructor(pageName) {
        this.pageName = pageName;
    }

    open() {
        console.log("Opening the page");
    }

    close() {
        console.log("Closing the page");
    }
}

class LoginPage extends BasePage {

}

const page = new LoginPage();
page.open();
page.close();


//Learning Note
// super():
// Calls the parent class constructor.
//
// Required in child class constructors
// before using 'this'.
//
// Used to initialize parent properties.
//
// Example:
// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name); // calls Animal constructor
//         this.breed = breed;
//     }
// }