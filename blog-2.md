# blog-2.md

# How Generics Allow You to Build Reusable and Strictly Typed Components in TypeScript

## Introduction

When I started learning TypeScript, I kept repeating the same logic for different types. One function for strings, another for numbers, another for objects. It felt messy and unnecessary.

Then I learned about generics. And things finally started to make sense. Instead of duplicating code, I could write one function that adapts to any type while still keeping full type safety.

That’s what makes generics powerful.

---

## The Problem Without Generics

Before generics, we end up writing repetitive functions like this:

```ts
function identityString(value: string): string {
  return value;
}

function identityNumber(value: number): number {
  return value;
}
```

This works, but it doesn’t scale. Every new type means another function.

---

## Introducing Generics

Generics let us create a reusable type placeholder.

```ts
function identity<T>(value: T): T {
  return value;
}
```

Here, `T` is not a real type yet. It becomes whatever type we pass in when we use the function.

---

## Using the Generic Function

We can explicitly define the type:

```ts
const a = identity<string>("hello");
const b = identity<number>(42);
```

Or let TypeScript infer it automatically:

```ts
const a = identity("hello");
const b = identity(42);
```

Either way, TypeScript keeps everything strictly typed.

---

## Generics with Arrays

Generics really shine when working with collections.

```ts
function getFirst<T>(items: T[]): T | undefined {
  return items[0];
}
```

### Usage:

```ts
const firstNumber = getFirst([1, 2, 3]); // number
const firstString = getFirst(["a", "b"]); // string
```

TypeScript automatically remembers the type of the array elements.

---

## Generics in Interfaces

We can also make reusable data structures using generics.

```ts
interface ApiResponse<T> {
  data: T;
  error: string | null;
}
```

### Example:

```ts
interface User {
  name: string;
  age: number;
}

const response: ApiResponse<User> = {
  data: {
    name: "Sakin",
    age: 25,
  },
  error: null,
};
```

Now the same structure works for any data type without rewriting anything.

---

## Why Generics Matter

Generics help you:

- Write reusable code instead of duplicated logic
- Keep strict type safety everywhere
- Build scalable and flexible APIs
- Reduce long-term maintenance effort

It’s not just a TypeScript feature — it’s a way of designing better code.

---

## Conclusion

At first, generics feel like extra complexity. But once you start using them, they become essential.

They let you write one piece of logic and reuse it across your entire codebase without losing type safety.

That balance between flexibility and safety is exactly why generics are one of the most important features in TypeScript.
