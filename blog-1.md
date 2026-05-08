# blog-1.md

# Why `any` is a Type Safety Hole and Why `unknown` is the Safer Choice in TypeScript

## Introduction

When I first started learning TypeScript, I thought `any` was a shortcut to avoid type errors. It felt convenient. No red error lines were appearing. But as I wrote more code, I realized something important: using `any` is not suitable for every single aspect . It removes TypeScript’s safety net completely.

That’s where `unknown` comes in. It looks similar at first, but it forces you to think before using a value. And that small difference changes everything.

Let’s break it down.

---

## Why `any` is Dangerous

When you use `any`, you’re basically telling TypeScript:

> “Trust me, I know what I am doing.”

The problem is, I might not know what I am doing.

### Example:

```ts
let data: any;

data = "hello";
data.toUpperCase(); // it works

data = 42;
data.toUpperCase(); // it throws runtime error
```

The compiler doesn’t complain, even though the code is unsafe. That’s the issue. any gives freedom, but removes guarantees.

In real projects, this leads to bugs that only appear in production.

## Why `unknown` is Safer

Now let’s look at `unknown`:

```ts
let data: unknown;

data = "hello";
data = 42;
```

At first glance, it feels the same as any. But here’s the key difference:

You cannot use a value of type unknown without checking what it is first.

This will NOT work:

```ts
data.toUpperCase(); // Error: Object is of type 'unknown'
```

## Type Narrowing: Making unknown Usable

Type narrowing is how TypeScript helps you safely move from a broad type to a specific one.

We use checks like typeof, instanceof, or custom guards.

### Example:

```ts
function handleData(data: unknown) {
  if (typeof data === "string") {
    // TypeScript now knows it's a string
    console.log(data.toUpperCase());
  } else if (typeof data === "number") {
    // Now it's a number
    console.log(data.toFixed(2));
  } else {
    console.log("Unsupported type");
  }
}
```

Inside each block, TypeScript narrows the type automatically. You don’t have to guess or force anything.

That’s the safety unknown gives you — it makes you prove what the data is before using it.

## A Real-World Example

This shows up a lot when dealing with API responses. You often don’t know what you’re getting.

```ts
function processResponse(data: unknown) {
  if (typeof data === "object" && data !== null && "name" in data) {
    console.log((data as { name: string }).name);
  }
}
```

Yes, it’s a bit more work. But that extra step prevents you from crashing your app when the data shape changes unexpectedly.

## Conclusion

Here’s the simple takeaway:

- `any` disables type checking completely
- `unknown` forces you to validate before using data
- type narrowing is what makes `unknown` practical

At first, any feels fast and flexible. But over time, it creates hidden risks that show up at the worst possible time.

unknown slows you down just enough to make you think — and that’s exactly what keeps your code safe.
