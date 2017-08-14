# List of Topics

This list is intended to cover the CS topics which are usefull or good to know for the Software Engineer technical interview.
The Essentials are highlighted **in bold**.

There may be much more topics listed than it's practically achivable to iterate over during the preparation period.

## DATA STRUCTURES AND ALGORITHMS

### Data Structures

* **String** - a sequence of characters; or an array of bytes that represents such sequence.
* **Array** - sequential data structure that stores elements of the same type and makes them accessible by index.
  * Access/write by index: `O(1)`.
  * Resizing (drawback): takes `O(n)` and temporary requires extra space of `O(n)`.
* **Linked list** + (**Doubly linked list/Deck**) - linear collection of data elements, each containing a link to its successor (and predecessor).
  * Access by index: `O(n)`;
  * Insert/delete at beginning: `O(1)`.
  * Insert/delete at ending: `O(1)` if last element is known; otherwise `O(n)`.
  * Insert/delete at arbitrary position: search time + `O(1)`.
* **Stack** - ATD that implements a collection of elements with 2 principal operations: `push(element): void` and `pop(): element`. Often described as LIFO (last in, first out).
  * Array vs Linked list based implementations.
  * Both `push()` and `pop()` take `O(1)` time.
* **Queue** - ATD that implements a collection of elements with 2 principal operations: `enqueue(element): void` and `dequeue(): element`. Often described as FIFO (first in, first out).
  * `enqueue()`/`dequeue()` takes `O(1)`.
  * Search takes `O(n)`, but it's not necessarily a typical operation.
  * [ADVANCED] Priority Queue -- TODO
* **Tree**
  * TODO
* **Trie (Prefix tree)**
  * TODO
* **[Hash]Map/Disctionary**
  * TODO
* **[Hash]Set**
  * TODO
* **Graph**
  * Adjacency Matrix vs Adjacency List based implementations.
  * Directed and Undirected.

### Algorithms

* Array/list search
* Array/list(*) sorting
* Tree traversal/search
* Graph traversal/search
* Bitwise math ("tricks")

### Strategies

* Divide and conquer
* Greedy algorithms
* Linear programming
* Dynamic programming
* Heuristics

### Approaches and Techniques

* Find optimal structure for problem representation
  * Example: translate list into a graph, then apply search
  * Example: translate list into a map (maybe with parallel counting), then apply search
* Prepare the data for applying a well-known working algorithm
  * Example: Pre-sort data, then apply [binary] search
* "Tricks"
  * Count items instead of sorting the collection

### Theory

* Big O notation
* NP-hard problems

## SOFTWARE DESIGN AND ARCHITECTURE

### Empirical Principles

* Architectural
  * SOLID
* General engineering
  * DRY
  * KISS
  * YAGNI

### Design Patterns

#### GOF - Creational

* Factory
* Factory method
* Builder
* Fluid builder
* Singleton

  Considered an anti-pattern nowadays since:
  1) introduces a globally exposed state available for [undesired] modification;
  2) obfuscates relationships that exist in the system;
  3) can be replaced with DI/IOC container that's setup to produce type(s) as singleton.

#### GOF - Structural

...

#### GOF - Behavioral

...

## OTHER

* Multithreading / Concurrency

* Scaling

* Quality Assurance

* Development Principles and Approcahes
  * "Waterfall" vs Agile
  
  _Opinion_: Waterfall and Agile are not different in their nature. Thinking otherwise is a delusion. The key difference between these  two mothodologies is the **duration of the sprint**. In Agile sprints are usually 1 to 3 weeks long, in Waterfall they are months or even years.

## VOCABULARY

**ADT - Abstract Data Type**

> A mathematical model for data types, where a data type is defined by its behavior (semantics) from the point of view of a user of the data, specifically in terms of possible values, possible operations on data of this type, and the behavior of these operations.

> This contrasts with data structures, which are concrete representations of data, and are the point of view of an implementer, not a user. -- Wikipedia

**Data Type**

> A classification of data which tells the compiler or interpreter how the programmer intends to use the data.

> A Data type provides a set of values from which an expression (i.e. variable, function ...) may take its values.

> The type defines the operations that can be done on the data, the meaning of the data, and the way values of that type can be stored. -- Wikipedia
