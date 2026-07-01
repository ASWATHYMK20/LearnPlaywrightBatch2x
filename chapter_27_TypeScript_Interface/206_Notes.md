# TypeScript Interfaces -- Easy Learning Notes

## What is an Interface?

An **interface** is a **blueprint (rule book)**. It tells TypeScript
what properties or functions must exist.

> **Remember:** An interface defines the **shape**, not the
> implementation.

------------------------------------------------------------------------

## 1. Object Interface

Defines the structure of an object.

``` ts
interface TestCase {
    id: number;
    name: string;
    status: string;
    duration: number;
}
```

Create an object:

``` ts
let test1: TestCase = {
    id: 1,
    name: "Login Test",
    status: "PASS",
    duration: 1500
};
```

### Memory Tip

Think of it as a form every object must fill.

-   ✔ id
-   ✔ name
-   ✔ status
-   ✔ duration

------------------------------------------------------------------------

## 2. Function Interface

Defines the structure of a function.

``` ts
interface TestHook {
    (testName: string): void;
}
```

Meaning: - Accepts **one string** - Returns **nothing (`void`)**

------------------------------------------------------------------------

## 3. Using a Function Interface

``` ts
let beforeEachHook: TestHook = function(testName: string): void {
    console.log("[Before] " + testName);
};
```

Call it:

``` ts
beforeEachHook("Login Test");
```

Output:

``` text
[Before] Login Test
```

Another example:

``` ts
let afterEachHook: TestHook = function(testName: string): void {
    console.log("[After] " + testName);
};
```

Call it:

``` ts
afterEachHook("Login Test");
```

Output:

``` text
[After] Login Test
```

------------------------------------------------------------------------

## 4. Complete Flow

``` text
Start
  │
  ▼
Before Hook
  │
  ▼
Run Test
  │
  ▼
Print Result
  │
  ▼
After Hook
```

Output:

``` text
[Before] Setting up: Login Test
TC-1: Login Test → PASS
[AFTER] Tearing down: Login Test
```

------------------------------------------------------------------------

## 5. Object Interface vs Function Interface

  -----------------------------------------------------------------------
  Object Interface                  Function Interface
  --------------------------------- -------------------------------------
  Defines an object's properties    Defines a function's parameters and
                                    return type

  Contains properties               Contains parameter list

  Example: `id`, `name`             Example: `(testName: string): void`
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## 6. Interview Points

-   Interface is a **blueprint**.
-   Improves **type safety**.
-   Ensures objects/functions follow a required structure.
-   Contains **no implementation**.
-   Multiple objects/functions can use the same interface.

------------------------------------------------------------------------

## Easy Memory Trick

**Interface = Rules**

-   **Object Interface** → "What should an object contain?"
-   **Function Interface** → "What should a function accept and return?"

### One-Line Revision

-   Object Interface → Defines an object's properties.
-   Function Interface → Defines a function's parameters and return
    type.
-   Interface → A blueprint that ensures consistency in code.