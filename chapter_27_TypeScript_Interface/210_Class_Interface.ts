interface Executable {
    name: string;
    run(): void;
    getStatus(): string;
}


class TestCase implements Executable {
    name: string
    constructor(name: string) {
        this.name = name;

    }
    run(): void {
        console.log("[RUN]" + this.name);
    }
    getStatus(): string {
        return "PASS";
    }
}

let tc = new TestCase("Verify login redirect");
tc.run();



//Learning notes
// Interface → Defines what a class must have.
// implements → Makes the class follow the interface.
// Class → Provides the actual implementation.
// If the class misses even one required property or method, TypeScript shows an error.

// What's the difference between an interface and a class?
// An interface only defines the contract (what properties and methods are required). It doesn't contain the implementation.
// A class contains the actual implementation (the code) and can use implements to promise it follows an interface.

