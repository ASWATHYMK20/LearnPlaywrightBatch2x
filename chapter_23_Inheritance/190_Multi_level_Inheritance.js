// Grand Father -> Father -> Son
// BasePage -> AuthPape -> AdminPage


class BasePage {
    constructor(name) {
        this.name = name;
    }

    open() {
        console.log("[OPEN] " + this.name);
    }

}
class AuthPage extends BasePage {
    login(user) {
        console.log("[LOGIN] " + user);
    }
}

class AdminPage extends AuthPage {
    constructor() {
        super("Admin Panel");
    }
    manageUsers() {
        console.log("[ADMIN] Managing users");
    }
}

let admin = new AdminPage();
admin.open();
admin.login("superadmin");
admin.manageUsers();


//Learning Notes
// extends:
// Inherit properties and methods from parent class.

// super():
// Calls parent constructor.

// Child class gets:
// 1. Its own methods
// 2. Parent methods
// 3. Grandparent methods

// Inheritance chain:
//AdminPage -> AuthPage -> BasePage