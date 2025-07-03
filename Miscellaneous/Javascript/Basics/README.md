# Notes

- ` JS : Dynamically typed language `

Alright, here's **stack and heap in JavaScript**—**no BS, no buzz**:

---

### Stack (Fast, Simple)

* Stores **primitive values** like numbers, booleans, `null`, `undefined`, and **references** to objects.
* Also holds function calls (call stack).

  ```js
  let x = 5;   // stored directly on the stack
  ```

---

### Heap (Big, Flexible) -> gives reference of the original value

* Stores **objects**, **arrays**, **functions**, etc.

  ```js
  let obj = { name: "Miko" };
  ```

  the object itself lives in the **heap**, but the **reference** to it is on the **stack**.

---