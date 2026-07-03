class TestDataStorage<T> {
    private items: T[] = [];
    add(item: T): void {
        this.items.push(item);
    }
    getFirst(): T {
        return this.items[0]!;
    }

    getAll(): T[] {
        return this.items;
    }
    count(): number {
        return this.items.length;
    }
}


let StatuscodeStore = new TestDataStorage<number>();
let testNameStore = new TestDataStorage<string>();

StatuscodeStore.add(200);
StatuscodeStore.add(404);
StatuscodeStore.add(500);

testNameStore.add("Login Test");
testNameStore.add("Checkout Test")

console.log("Codes:", StatuscodeStore.getAll());
console.log("First code:", StatuscodeStore.getFirst());
console.log("Tests:", testNameStore.getAll());
console.log("Test count:", testNameStore.count());


