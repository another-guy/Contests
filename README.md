**TODO** Add links to code files for data types, algorithms, problems solved.

**TODO** Figure out whether the next topics should be covered or not (maybe as `ADVANCED`):

* OOP? (Incapsulation, Inheritance, Polymorphism, Abstraction)
* Combinational logic, State machine, Pushdown automation, Turing machine.
* Markov chain
* Replication
* Theory of Probabilities
* Gradient descent

# List of Topics for Software Developer Interview Preparation

This list is intended to cover the CS topics which are usefull or good to know for the Software Engineer technical interview.
The Essentials are highlighted **in bold**.

There may be much more topics listed than it's practically achivable to iterate over during the preparation period.

## DATA STRUCTURES AND ALGORITHMS

### Theory

* Big O notation
* NP-hard problems

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
* **Stack** - ADT that implements a collection of elements with 2 principal operations: `push(element): void` and `pop(): element`. Often described as LIFO (last in, first out).
  * Array vs Linked list based implementations.
  * Both `push()` and `pop()` take `O(1)` time.
* **Queue** - ADT that implements a collection of elements with 2 principal operations: `enqueue(element): void` and `dequeue(): element`. Often described as FIFO (first in, first out).
  * `enqueue()`/`dequeue()` takes `O(1)`.
  * Search takes `O(n)`, but it's not necessarily a typical operation.
* **Tree** - ADT that simulates hierarchical tree structure, with a root node and subtrees of children nodes with a parent node.
  * In **Binary Search Tree** both `insert()` and `search()` take `O(log n)`.
  * Balanced Trees:
    * `rotate()` operation is used in `insert()` and `delete()` to enforce the balance invariant.
    * [ADVANCED] **Red-Black Tree**
    * [ADVANCED] **AVL Tree**
    * [ADVANCED] **Priority Queue**
    * [ADVANCED] **Binary Heap**
* **Trie (Prefix tree)** or prefix tree -- an ordered tree data structure where the keys are usually strings.
  * Search takes `O(m)` in worst case, where `m` is the length of the key.
  * "Buckets" may be used in case same key is used with more than one value.
  * May not be very efficient if data items share long key prefixes.
* **[Hash]Map/Disctionary** -- a data structure that maps keys to values using a hash function to compute an index of the "bucket" where the value of interest _may_ be found. It's very commonly used for many applications such as caches, sets, object representations, due to the performance benefits.
  * `.search()`, `.insert()`, and `.delete()` all take `O(1)` in average case and `O(n)` in worst case.
  * **Hash function**
    * Guarantees **consistent determenistic** result for the same key.
    * Is **cheap** for computation.
    * Has **few collisions** -- clashes in values for different key inputs.
    * **Perfect hash function** is the one which has no collision for hashes of any pair of keys (assuming, all keys are known ahead of time).
  * Hashtable **load factor** is defined as the number of elements divided by the number of buckets. With the growth of this metric performance of hashtable degrades. Low load factor may lead to inefficient memory consumption. This metric on it's own is rarely sufficient -- it's always good to know how the elements are _distributed_ across the buckets.
  * TODO **Open addressing** vs **Chaining**

* **[Hash]Set**
  * TODO
* **Graph**
  * _Adjacency Matrix_ based implementation is space-inefficient but allows `O(1)` access to edges. By contrast, _Adjacency List_ based implementation is compact, but requires `O(n)` time to access edges, which may lead to performance degradation on large number of nodes and/or edges. Dictionary based implementation may be the most efficient space- and time-wise.
  * Directed and Undirected.
  TODO

### Algorithms

* Array/list search
  * **Linear search** - `O(n)` in worst case in linked list.
  * **Binary search** - `O(log n)` in worst case in **sorted** array.
  TODO
* Array/list(*) sorting
  * **QuickSort** - `O(n^2)` in worst case, and `O(n log n)` in average case. In implementations where the pivot index is randomly selected, the algorithm is unstable*.
  * **HeapSort** - `O(n log n)` in worst case.
  * **Merge sort** - `O(n log n)`, however `O(n)` **additional space** is required.
  * Insertion, Selection, Bubblesort, and alike are `O(n^2)` in worst and often in average case, and therefore impractical.
  * More exotic, special case focused sortings include **count sort** and **bucket sorts**.
* Tree traversal/search
  * **BFS -- breadth first search/traversal**.
  * **DFS -- depth first search/traversal**.
    * Pre-, in-, post-order traversal.
  * **Topological sorting**.
  * [ADVANCED] **Minimax**.
  * [ADVANCED] **Alpha-beta prunnung**.
* Graph traversal/search
  * [ADVANCED] A* search.
  TODO
* Bitwise math ("tricks")
  TODO

### Functional Programming

Key concepts and operations

* Immutability and immutable data structures.
* Pure functions.
* Function composition.
* Currying.
* Memoization.
* Monad.
* Filter (`filter()`, `Where()`).
* Map (`map()`, `Select()`) as projection.
* Reduce (`reduce()`, `fold()`, `Aggregate()`).

### Strategies

* Brute force
* Divide and conquer
  * Recursion
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

## SOFTWARE DESIGN AND ARCHITECTURE

### Empirical Principles

* Architectural
  * [SOLID](https://en.wikipedia.org/wiki/SOLID_(object-oriented_design)) = [SRP](https://en.wikipedia.org/wiki/Single_responsibility_principle) + [OCP](https://en.wikipedia.org/wiki/Open/closed_principle) + [LSP](https://en.wikipedia.org/wiki/Liskov_substitution_principle) + [ISP](https://en.wikipedia.org/wiki/Interface_segregation_principle) + [DIP](https://en.wikipedia.org/wiki/Dependency_inversion_principle)
* General engineering
  * [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
  * [KISS](https://en.wikipedia.org/wiki/KISS_principle)
  * [YAGNI](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it)

### Design Patterns

#### GOF - Creational

* **Factory Method**

  Abstracts the object creation logic - dynamically selects a type of the object returned and/or hides the concrete type of the object created behind an interface, as well as construction details (such as exact number and order of instructions and parameters).

* **Abstract Factory**

  Provides a unified way for constructing families of objects.

  At run time, object(s) of a specific familiy are produced using a specific concrete factory. However, the concrete factory is often not known since it's selected dynamically and is hidden behind an interface shared by all factories.

* **Builder**

  TODO

* **Fluid Builder**
  * Simplifies creation of objects that require multiple parameters, thus preventing constructor proliferation, or code duplication. Often uses chaining for setting specific attribute values, succeeded with a build command: `CarBuilder.WithEngine(engine).WithBase(base).Build()`.

* **Prototype/Deep Copy**

  Enables creation of object instances by deep/shallow coping the target object. This is useful when "regular" object instantiation with `new` is costly.

* **Singleton**

  Considered an anti-pattern nowadays since:
  1) introduces a globally exposed state available for [undesired] modification;
  2) obfuscates relationships that exist in the system;
  3) can be replaced with DI/IOC container that's setup to produce type(s) as singleton.

#### GOF - Structural

* **Adapter/Wrapper**

  Lets an _adaptee_ class to be used with convenient interface. This is helpful when the source code of the _adaptee_ is not available for modification; or when the consuming code works on higher level of abstraction or uses different terminology. It is often says that _adapter_ translates client's requests into _adaptees_ language.

* **Composite**
  * ISP: A Composite defines a single interface that is used to organize the hierarchy.
  * SRP: A Composite may or may not only define the _structure_ of the object. It's better to stay away from any methods that implement any logic that's unrelated to object construction (e.g. traversal, projection, and other should be implemented outside of Composite).
* **Decorator**
  * SPR: A Decorator must not add more than one feature to the object decorated.
* **Proxy**
* **Bridge**
  * DIP: Concrete types from two hierarchies are communicating via abstracted interfaces.
* **Lightweight**
* **Facade**

  Considered an anti-pattern, since it directly contradicts the SRP. Is okay to use for defining API's entry points which delegate the actual work to a fine-grained sub-interfaces and implementations.

#### GOF - Behavioral

* **Command**
* **State**
* **Strategy**
* **Chain of Responsibility**
* **Iterator**
* **Visitor**
* **Mediator**
* **Memento**
* **Observer**
* **Template Method**
* **Interpreter**

## Multithreading / Concurrency

* Optimistic vs pessimistic locking.
* Thread parallelism.
  * TODO: `mutex` vs `semaphore` vs `lock` vs `monitor`.
* Task parallelism.
* Reactive programming.
* TODO `coroutines` vs `tasks` vs `threads` vs `reactive`
  TODO

## Services

* REST - REpresentational State Transfer.
  * Client-server.
    * Separation of concerns.
    * Client and server evolve independently.
    * Therefore, simplified server.
  * Statelessness.
    * No client context stored on server.
    * Each client request has all the information for the server to be processed.
    * Therefore, many services can be used in parallel, without need of shared/synchronized state.
    * State (including _session state_) is/can be stored in a database.
  * Cacheability.
    * Clients and intermediaries may cache responses, therefore the responses must define themselves as cacheable or not.
    * This partially or completely eliminates some client-server interactions which further improving scalability and performance.
  * Layered system.
    * The client is unable to distinguish the server from the intermediaries.
  * Uniform interface.
    * HTTP Verbs describe Actions upon resources.
    * Routes identify resources in requests (via URIs).
    * Payload is a representation that is used for resource manipulation. I.e. if client has representation of a resource, the client has everything to modify or delete it.
    * "Metadata" (HTTP Headers) help make messages self-descriptive. The message's information is sufficient for the server to process it.
    * Hypermedia as the engine of application state (HATEOAS). Responses contain hyperlinks to other actions currently available.
  * Code on demand.
* Services and Scaling
  * TODO [CAP Theorem](https://en.wikipedia.org/wiki/CAP_theorem), [PACELC Theorem](https://en.wikipedia.org/wiki/PACELC_theorem).
  * TODO [Fallacies of distributed programming](https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing)
  * TODO Fine vs Coarse SOA
  TODO
* Quality Assurance
  TODO
* Development Principles and Approcahes
  * "Waterfall" vs Agile

  _Opinion_: Waterfall and Agile are not different in their nature. Thinking otherwise is a delusion. The key difference between these  two mothodologies is the **duration of the sprint**. In Agile sprints are usually 1 to 3 weeks long, in Waterfall they are months or even years.

## OSI Model

* L1: Physical Layer - Electrical and physical specifications of the data connection, defines relationship between device (network card) and physical medium (ethernet cable, for example). Wireless signal specification (such as Wi-Fi frequence) lays down here as well.

* L2: Data Link Layer - Defines protocol to establish and terminate connection between two physically connected devices (for example, network card and switch). It also defines flow control and error detection/correction may be on that level. MAC (media access control) is located on that level. Other protocol examples: ARP, OSPF, Tunnels (L2TP), PPP.

* L3: Network Layer - Transfers variable length data sequences between nodes. Each node have an address and network may route message though intermediate nodes. IP protocol is located on that layer. Other protocol examples: IPv6, ICMP, IPsec.

* L4: Transport Layer - Divides long massage to packets, some transport protocols can keep track of the segments and re-transmit those that fail. TCP and UDP protocols is located on Transport Layer.

* L5: Session Layer - Establishes, manages and terminates connection between applications. Commonly implemented explicitly in application environments.

* L6: Presentation Layer - Converts data to the form that application accepts. As an example it can be serialization of data structures to XML/JSON/protobuf

* L7: Application Layer - Interacts with software applications that implement a communicating component. Examples: HTTP, FTP, DNS, DHCP, NTP, POP, IMAP, SNTP, SSH, Telnet.


## VOCABULARY

**ADT - Abstract Data Type**

> A mathematical model for data types, where a data type is defined by its behavior (semantics) from the point of view of a user of the data, specifically in terms of possible values, possible operations on data of this type, and the behavior of these operations.

> This contrasts with data structures, which are concrete representations of data, and are the point of view of an implementer, not a user. -- [Wikipedia](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwi0rfK67dnVAhUE4mMKHXRoBM8QFggoMAA&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FAbstract_data_type&usg=AFQjCNHuRIHbjbVgiNkX9FswBAbI6gMxww)

**Data Type**

> A classification of data which tells the compiler or interpreter how the programmer intends to use the data.

> A Data type provides a set of values from which an expression (i.e. variable, function ...) may take its values.

> The type defines the operations that can be done on the data, the meaning of the data, and the way values of that type can be stored. -- [Wikipedia](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwiCg9Cu7dnVAhUQ0WMKHbATD2MQFggoMAA&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FData_type&usg=AFQjCNGJHn6MlB_HKCFto_EbD_w4HYfKaA)

**(Un)Stable Algorithm**

> A sorting algorithm is said to be stable if two objects with equal keys appear in the same order in sorted output as they appear in the input unsorted array. -- [GeeksForGeeks](http://www.geeksforgeeks.org/stability-in-sorting-algorithms/)

More broadly, a stable algorithm can be defined as the one which _always_ produces exactly the same output for same input.

