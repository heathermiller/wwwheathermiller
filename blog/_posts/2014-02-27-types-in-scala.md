---
layout: blog
title: "Types in Scala"
by: "Heather Miller and Philipp Haller"
---

_Types_ are an immensely important concept in programming language design and
theory. 

A type can be thought of as a _category_ that a value (typically at
run-time) can fall into.

### Typing Disciplines: Static versus Dynamic, Strong versus Weak

Languages can be categorized into at least four camps, based on how deeply, or
on whether or not the language's design embraces types. A language can be
"statically typed" versus "dynamically checked", or "strong" versus "weak".
Intuitively, such typing disciplines:

- dictate how, or whether or not, data is structured in memory (strong versus weak)
- _when_ the work of structuring data in memory takes place (static versus dynamic)

Statically typed languages, which can be strong or weak, distinguish two
phases; compile time and runtime. That is, code is compiled (during which it
is checked for correctness) once, and then it can be run multiple times.

Dynamically checked languages, which can also be strong or weak, don't have
such a distinction. Instead, code is parsed and run (often with runtime checks
for correctness each time its run) all always at the same time.

A language is considered strong or weak depending on whether or not its
correctness checks (either compile time or runtime) agree with what is
actually held in memory. 

For example, a strong statically typed language like Scala statically (at
compile time) ensures that a certain value with type `Int` is correctly used
throughout the program, and that at runtime, nothing else other than an `Int`
can be held in that value's memory location.

On the other hand, weak statically typed languages like C statically ensures
that a certain value with type `Int` is correctly used throughout the program,
but at runtime, it _can't_ ensure that nothing other than an `Int` will be
held in that value's memory location. Pointer arithmetic makes this guarantee
impossible – a programmer can easily place a `String` in that `Int`'s memory
location, which can lead to runtime errors.

Dynamically checked languages can also be . Langauges like Pythong are strongly dynamically checked because 

 how it structures data in
memory. Strong, statically typed languages use types to _prove_ 

### 




Intuitively, the discipline of typing can be thought . Static typing and dynamic checking
as well as  are all typing disciplines that:

In statically typed languages, 

strong static
weak static
strong dynamic
weak dynamic



and _type systems_ 

Relate this strong etc to the size of programs.


Type System


A static type system classifies variables and expressions according to the
kinds of values they hold and compute. Types classify values (they
"categorize" values). In Scala, every value is an object, thus types classify
objects.

"Types are the central organizing principle of the theory of programming
languages. Language features are manifestations of type structure. The syntax
of a language is governed by the constructs that define its types, and its
semantics is determined by the interactions among those constructs. The
soundness of a language design – the absence of ill-defined programs – follows
naturally."

– Robert Harper, _Practical Foundations for Programming Languages, 2013_

"Types are essential for the ordered evolution of large software systems"

– Luca Cardelli

"Types provide a way of controlling evolution, by partially verifying 
programs at each stage."

– Luca Cardelli

"A type system can be regarded as calculating a kind of static approximation
to the run-time behaviors of the terms in a program (Moreover, the types
assigned to terms are generally calculated compositionally, with the type of
an expression depending only on the types of its subexpressions.)"

– Benjamin Pierce, TAPL

"Being static, type systems are necessarily also conservative: they can categorically prove the absence of some bad program behaviors, but they cannot prove their presence, and hence they must also sometimes reject programs that actually behave well at runtime."

– Benjamin Pierce, TAPL

Types are particularly useful for "programming in the large" – when you have a
very large-scale program, types help you organize the program and make changes
to it reliably.

**Type systems**, use Josh's example here.
The type system allows us to create all sorts of interesting walls around ourselves, known as types. These walls help prevent us from accidentally writing improper code. This is done through the compiler tracking information about variables, methods, and classes.The more you know about Scala's type system, the more information you can give the compiler, and the type walls become less restrictive while still providing the same protection.

You don't need to know everything about Scala's type system in order to be an effective power-user of Scala. 

The _type system_ does is good for:

- _memory safety_: prevents things like dangling pointers and buffer overflows (note: the type system of C is not strong enough to prevent these kinds of runtime errors; Scala, Java, and Rust are examples for memory-safe languages)
- _type safety_: well-typed programs "do not go wrong": if a program type-checks, it will not produce a runtime error when executed (Java is type-safe up to type casts)

Types are also good for performance. Checking happens at compile time, rather
than runtime. Enables a bunch of optimizations.

In this guide, we'll progress from. In a language with an advanced type system like Scala, 

1. Scala's standard types
2. Defining your own types in Scala
3. Customizing type checking using advanced type system constructs

Common types include primitive types (strings and numbers), container types (lists/arrays and dictionaries/hashes), and user-defined types (classes). In Python, everything is an object, and every object has a type. In other words, functions, modules, and XYZ are also types.

"I'm not against types, but I don't know of any type systems that aren't a
complete pain, so I still like dynamic typing."

– Alan Kay, creator of Smalltalk

"Testing can only prove the presence of errors, never their absence"

– Edward Dijkstra




Static type systems can prove the absence of certain run-time errors. For instance, they can prove properties like: booleans are never added to integers; private variables are not accessed from outside their class; functions are applied to the right number of arguments; only strings are ever added to a set of strings.
Other kinds of errors are not detected by today's static type systems. For instance, they will usually not detect non-terminating functions, array bounds violations, or divisions by zero. They will also not detect that your program does not conform to its specification (assuming there is a spec, that is!). Static type systems have therefore been dismissed by some as not being very useful. The argument goes that since such type systems can only detect simple errors, whereas unit tests provide more extensive coverage, why bother with static types at all? We believe that these arguments miss the point. Although a static type system certainly cannot replace unit testing, it can reduce the number of unit tests needed by taking care of some properties that would otherwise need to be tested. Likewise, unit testing can not replace static typing. After all, as Edsger Dijkstra said, testing can only prove the presence of errors, never their absence.14 So the guarantees that static typing gives may be simple, but they are real guarantees of a form no amount of testing can deliver.

References:
Luca Cardelli and Peter Wegner, _On Understanding Types, Data Abstraction, and Polymorphism_, 1985
Luca Cardelli, _Typeful Programming_, 1993
Benjamin Pierce, _Types and Programming Languages_, 2002
Robert Harper, _Practical Foundations for Programming Languages_, 2013
John C. Reynolds, _Theories of Programming Languages_, 1998
Martin Odersky, Lex Spoon, Bill Venners, _Programming in Scala_, 2011
Josh Suereth, _Scala in Depth_, 2012


## Types in Scala

- What is a type? Types classify values (they "categorize" values). In Scala, every value is an object, thus types classify objects.
- What are types useful for?
  - They prevent calling a method on an object that "doesn't have" the called method
  - (In Java, this avoids AbstractMethodErrors, but only if the classes used at runtime are binary compatible with the ones used to compile the calling code.)
  - More generally: types ensure (various kinds of) safety
    - _memory safety_: prevents things like dangling pointers and buffer overflows (note: the type system of C is not strong enough to prevent these kinds of runtime errors; Scala, Java, and Rust are examples for memory-safe languages)
    - _type safety_: well-typed programs "do not go wrong": if a program type-checks, it will not produce a runtime error when executed (Java is type-safe up to type casts)
- Subtyping: types A and B can be in a subtyping relationship: A <:B
- Where do types in Scala come from?
  - Predefined types
  - Types that programs define
  - Combining types
