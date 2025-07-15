
---

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

### `splice()` vs `slice()`

| Feature              | `splice()`                                | `slice()`                      |
| -------------------- | ----------------------------------------- | ------------------------------ |
| Modifies Original    | Yes (mutates the original array)          | No (returns a copy)            |
| Return Value         | Array of removed elements                 | Array of selected elements     |
| Purpose              | Add, remove, or replace elements in-place | Extract a section of the array |
| Parameters           | `start, deleteCount, ...items`            | `start, end`                   |
| Adds Elements        | Yes                                       | No                             |
| Removes Elements     | Yes                                       | No                             |
| Affects Array Length | Yes (can increase or decrease length)     | No                             |
| Example              | `arr.splice(1, 2, 'a', 'b')`              | `arr.slice(1, 3)`              |


---

## Resources ➤

- [Dates in JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Object Assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
- [Maps](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

---