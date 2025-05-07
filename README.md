## 🔍 What are some differences between interfaces and types in TypeScript?

- **Interfaces** are used for objects, and **types** can be used for functions, arrays, objects, etc.
- We can use the **same name multiple times** with interfaces, but we **can't** do that with types.
- Interfaces allow us to use the **`extends`** property, which is useful when working in big projects and with large data that need an extend system.
- Types don’t have `extends`, but we can use **intersection (`&`)** — although it’s a bit complicated.
- When we work with many kinds of data or mixed types, then we should use **types**.

## 🔍 How does TypeScript help in improving code quality and project maintainability?

**TypeScript** is a modern and powerful language. When we use **TypeScript**, we often face problems like type issues and unexpected bugs, especially in large projects. But **TypeScript** gives us many useful features to solve these problems.

- For example, when we write a wrong type of code, TypeScript immediately shows an error. It also gives us suggestions while writing code. Suppose we define an object called person, and when we type `person.` — **TypeScript** will suggest all the keys of that object. This makes development easier and faster.

- **TypeScript** is very helpful in big projects. It makes the code more maintainable, clean, and easy to understand. Updating or refactoring code in a TypeScript project is also easier and safer.

- That's why we should use **TypeScript** in all **TypeScript** projects to improve code quality and maintainability.
