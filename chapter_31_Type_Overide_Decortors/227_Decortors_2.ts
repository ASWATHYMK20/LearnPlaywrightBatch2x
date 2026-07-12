function logged(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = function () {
        console.log("called decorator");
        return original.apply(this);
    };
}

class Greeter {
    @logged
    hello(): string {
        return "Hi";
    }
}

let r = new Greeter().hello();
console.log(r);

export {};