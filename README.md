# List of Topics

This list is intended to cover the CS topics which are usefull or good to know for the Software Engineer technical interview.
The Essentials are highlighted **in bold**.

There may be much more topics listed than it's practically achivable to iterate over during the preparation period.

## DATA STRUCTURES AND ALGORITHMS

### Data Structures

* Arrays
* Strings
* Linked lists
* Stacks
* Decks
* Queues
* Trees
* Tries
* Graphs
  * Adjacency matrix based representation
  * Adjacency list based representation

### Algorithms

* Array/list search
* Array/list* sorting
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
