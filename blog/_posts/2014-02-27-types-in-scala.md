---
layout: blog
title: "Types in Scala"
by: "Heather Miller and Philipp Haller"
subtitle: "Types are an immensely important concept in programming language design and theory."
unindexed: true
---

## Types

_Types_ are an immensely important concept in programming language design and
theory.

A type can be thought of as a _category_ that a value (typically at run-time)
can fall into. For example, the number 12 would have type `Int`, and its
corresponding value would be 12.

### Typing Disciplines: Static versus Dynamic, Strong versus Weak

Languages can be categorized into at least four camps, based on how deeply, or
on whether or not the language's design embraces types. A language can be
"statically typed" versus "dynamically checked", or "strong" versus "weak".
Intuitively, such typing disciplines:

- dictate how, or whether or not, data in memory corresponds to types (strong versus weak)
- _when_ the work of checking whether a type corresponds to data in memory takes place (static versus dynamic)

Statically typed languages, which can have strong or weak typing, distinguish two
phases; compile time and runtime. That is, code is compiled (during which it
is checked for correctness) once, and then it can be run multiple times.

Dynamically checked languages, which can also have strong or weak typing, don't have
such a distinction. Instead, code is parsed and run (often with runtime checks
for correctness each time it's run) all always at the same time.

A language is considered to have strong or weak typing depending on whether or not its
correctness checks (either compile time or runtime) agree with what is
actually held in memory.

For example, a strong statically typed language like Scala statically (at
compile time) ensures that a certain value with type `Int` is correctly used
throughout the program, and that at runtime, nothing else other than an `Int`
can be held in that value's memory location.

On the other hand, weak statically typed languages like C statically ensure
that a certain value with type `Int` is correctly used throughout the program,
but at runtime, it _can't_ ensure that nothing other than an `Int` will be
held in that value's memory location. Pointer arithmetic makes this guarantee
impossible &mdash; a programmer can easily place a `String` in that `Int`'s memory
location, which can lead to runtime errors.

Dynamically checked languages can also have strong or weak typing. Languages
like Python are strongly dynamically checked because they check for
correctness at runtime, preventing one from calling a method defined on a
`String` for example on that of an `Int`. In addition, these languages provide
no way for the programmer to write to an arbitrary memory location. Assembly,
on the other hand, is weak with no typng &mdash; it's dynamic in that there is
no static or runtime checking, and it allows users to directly manipulate
memory.

### Strong Static Typing

> "A type system can be regarded as calculating a kind of static approximation to the run-time behaviors of the terms in a program"

> &mdash; _Benjamin Pierce, Types and Programming Languages, 2002_

Strong static typing has many benefits,

- **Correctness**. Well-typed programs "do not go wrong"; if a program type-checks, it will not produce a runtime error when executed (Java is type-safe up to type casts).
- **Performance**. Checking happens statically, which means that widespread runtime checking can't slow down your application (one reason dynamically checked languages are considered slow).
- **Scalability**. Evolving software, especially large applications with many developers, can change in subtle or significant ways, potentially causing breakage. Types help by ensuring correctness across arbitrarily large applications and teams of developers.

In line with scalability, in his monograph entitled _Typeful Programming_,
Luca Cardelli remarks,

> "Types are essential for the ordered evolution of large software systems. Types provide a way of controlling evolution, by partially verifying  programs at each stage."

> &mdash; _Luca Cardelli, Typeful Programming, 1993_

#### Correctness

The most widely heralded benefit of static typechecking is that it enables the
early detection of some programming errors. By catching errors at compile
time, programmers are free from worrying about stumbling across certain errors
in a running application.

In fact, many programmers happily remark that their programs "just work" after
passing the typechecker. This is likely due to the fact that such a type
system tends to catch simple errors, such as forgetting to convert a string to
a numeric type before doing a numerical operation on it, as well as complex
errors, such as neglecting a boundary condition in a complex case analysis.
The common theme here is that all of these errors manifest themselves as
inconsistencies at the level of types.

The degree to which programmers are satisfied, however, tends to depend on the
expressiveness of the type system they're using. This is important to note,
because later on, we will see how Scala's advanced type system makes it
possible to retain expressivity meanwhile enabling users to
_make typechecking more precise_.

However, static type systems aren't without their drawbacks.

> "Being static, type systems are necessarily also conservative: they can categorically prove the absence of some bad program behaviors, but they cannot prove their presence, and hence they must also sometimes reject programs that actually behave well at runtime."

> &mdash; _Benjamin Pierce, Types and Programming Languages, 2002_

Additionally, there are varieties of errors that _can't_ be detected by
conventional type systems. For instance, divisions by zero, non-termination,
or array bound violations. It is here that unit testing (orthogonal to static
typechecking), or dependent types (typechecking that depends on values) can
come into play to catch these errors.

<!-- Furthermore, opponents of strong static typing attest that these benefits are
outweighed by the inflexibility of a static type system; that is, expressivity
suffers due to the rigidity of static type systems. -->

## Types in Scala

Scala is strongly statically typed, but it additionally stands out amongst
other statically typed languages as having a particularly advanced advanced
type system.

A helpful way to think about Scala's type system is to approach it as if types
are boundaries that you erect for yourself to safeguard against wrong
behavior. The more you understand and know how to use Scala's type system, the
more you can get the type system to do for you, that is, the more expressive you
can make it, all meanwhile retaining the same level of protection<sup>[<a href="#1">1</a>]</sup>.

We'll start by covering most basic types that come predefined in Scala that
all programmers should know. Afterwards, we'll see how to define your own
types in Scala. Finally, we'll cover the more advanced constructs of Scala's
type system that allow programmers to

1. Basic Types
2. Defining your own types in Scala
3. Customizing typechecking using advanced type system constructs

### Basic Types

Every type defined in a Scala program is essentially made up of a combination
of Scala's basic types. A hierarchy of all of Scala's predefined and most
basic types is shown below.

figure here

<!--
Types we all know: Boolean, Int, Long, ...
x: Int means x "has type" Int (":" is a relation)
Special types: Any, AnyRef, AnyVal, Nothing, Null
The special types are in a subtype relationship with other types
Example: Int <: AnyVal
generally: if A <: B then forall x. x:A -> x:B (if x has type A then it also has type B)
for example a variable of type Int is also of type AnyVal
This subtyping relationship gives rise to a type hierarchy
Show partial type hierarchy with all types seen so far filled in
 -->

### Defining Your Own Types in Scala
### Customizing Typechecking Using Advanced Type System Constructs

Types such as existential types or refinement types are combinations of
existing types; they define new types, but without giving them a name

#### Abstract Types

#### Existential Types

Intuitively, an existential type is a type with some unknown parts in it.

Formally, existential types, or "existentially quantified types," are the dual
of so-called "universally quantified types," or generic types.

To understand how, first consider the following generic (universal) type;
`Wombit[T]`, parameterized on generic type  parameter `T`, is valid _for all_
types `T`. An existential type is the dual; `Wombit[T] forSome { type T }`
means _there exists_  some type `T` for which `Wombit[T]` can be constructed.
Thus, rather than `Wombit[T]` being able to be constructed _for any_ `T`, as
is the case for universal types, an existential `Wombit[T]` can be constructed
_for some_ `T`, not necessarily all.

    Wombit[T] forSome { type T }

Importantly, an existential type includes references to abstract type members
_that we know exist, but whose concrete values/types we don't know_. For
example, in the above, `T` is a type we don't know concretely, but that we
know exists.

_Note that the above can be written in shorthand, `Wombit[_]`, which desugars_
_to `Wombit[T] forSome { type T }`._

In his book, _Theories of Programming Languages_, John C. Reynolds remarks of
the utility of existential types,

> "Existential types are useful in their own right. In particular, a program using an unimplemented abstract type can be realized by a function that accepts an argument, of existential type, that describes an implementation of the abstract type; then the program can be executed with different implementations by applying the function to different arguments"

> &mdash; _John C. Reynolds, Theories of Programming Languages, 1998_

The key notion to hold on to here is that, _existential types make it possible_
_to leave some parts of your program unknown, while still being able to typecheck_
_it with different implementations for those unknown parts._

Note the similarity here to the utility of abstract type members. Often,
abstract type members are used to achieve the same purpose &mdash; to "hide"
or otherwise avoid concretely specifying some types until later. As we will
later see, existential types can actually be more naturally modeled using
abstract type members.

Let's first consider an example which seeks to use existential types to make
it easier to write code that works for many different implementations of the
same abstract class.

In this example, we seek to make a functional counter that can be incremented,
that can get the value in its underlying representation, and that can convert
the underlying representation to an `Int`.

    abstract class Counter[T] {
      def inc: Counter[T]
      def get: T
      def convert(x: T): Int
    }

    class LongCounter(count: Long = 0L) extends Counter[Long] {
      def inc: Counter[Long] = new LongCounter(count+1)
      def get: Long = count
      def convert(x: Long): Int = x.toInt
    }

    // want to define a function that can work on any type of counter
    // we cannot express this as a Counter[Any] bc Counter[Int] is not a subtype of Counter[Any]
    def fun(c: Counter[t] forSome { type t }): Int = c match {
      case cnt: Counter[a] => cnt.convert(cnt.inc.inc.get)
    }

    scala> new LongCounter
    res2: LongCounter = LongCounter@6c7fd3e4

    scala> fun(res2)
    res3: Int = 2

    def fun(c: Counter[t] forSome { type t }): Int =
      c.inc.inc.get

    scala> new LongCounter
    res0: LongCounter = LongCounter@a779ab4

    scala> fun(res0)
    res1: Int = 2

Abstract type members also make it possible to hide the internal type of an
abstraction. For example,

    trait Fruit {
      type T
      val weight: Int
      val tooRipe: T => Boolean
    }

    class Farm {
      val fruit = new ArrayBuffer[Fruit]
    }

    ...

As compared to,

    case class Fruit[T](val weight: Int, val tooRupe: T => Boolean)

    class Farm {
      val fruit = new ArrayBuffer[Fruit[T] forSome { type T }] val fruit = new ArrayBuffer[Fruit[T] forSome { type T }]
    }

    ...

Both code examples behave the same. In fact, one might argue that the example
using abstract type members over existential types is less error-prone. This
arises due to the fact that the existential type is _unnamed_. Thus if we had
wanted to reuse the existential type elsewhere to construct some other data
structure, we would need to reorganize our code to use abstract types instead
of existentials.

Given then, that abstract types can be used more naturally more often than
existential types to achieve the same purpose, one might ask why they exist at
all in Scala.

The answer is Java interoperability. Java constructs like wildcards (types such
as `Person<?>`) and raw types (types such as `List` which omit type
parameters) are modeled using existential types.


#### Refinement Types

#### Structural Types

#### Higher-Kinded Types

#### Compound Types

## Powerful Ways to Use Scala's Type System

### Type-Level Programming

Build something out of this http://stackoverflow.com/questions/4415511/scala-type-programming-resources
<br/>The structure they adopt is quite useful!

### Typeclasses

Typeclasses are a popular language feature of Haskell. In Scala, one can
_simulate_ typeclasses, that is, typeclasses are a pattern rather than
explicitly built into the language.

One reason why Scala's type system is considered to be powerful.

On a high level, typeclasses allow retrofitting types with interfaces (even
predefined types like Int).

Typeclasses are a language feature in Haskell.

In Scala, typeclasses are a type-based pattern based on implicits that is
becoming more and more common.

To become familiar with the key terminology of typeclasses, it is helpful to
think about typeclasses to be completely different from Java-style classes.

In the context of Scala, a typeclass is a generic trait. Example:

    trait Ordering[T] {
      def compare(x: T, y: T): Int  // abstract
      ...
    }

Concrete implementations of a typeclass are defined as _implicits_. Example:

    implicit object intOrdering extends Ordering[Int] {
      def compare(x: T, y: T): Int = x - y
    }

These concrete implementations are called typeclass instances.

The fact that they are defined as implicits is a fundamental aspect of the
typeclass pattern. It allows _simultaneously expressing constraints and making_
_suitable implementations available_. Example:

    /* @return a sorted sequence with the same elements as `s` */
    def sort[T](s: Seq[T])(implicit ev: Ordering[T]): Seq[T] = ...

Calling the above `sort` method only type-checks if an implicit value of type
`Ordering[T]` can be found.

Moreover, within the body of `sort`, the witness `ev` (or "evidence
parameter") provides a concrete implementation of the required typeclass
instance for type `T`.

Since this pattern is so common, it can be abbreviated using a context bound
on the type parameter `T`:

    /* @return a sorted sequence with the same elements as `s` */
    def sort[T: Ordering](s: Seq[T]): Seq[T] = ...

(Note that we wrote `Ordering` without specifying a type argument; a context
(bound requires that the bound is a _type constructor_.)

How do we get access to the witness (the concrete implementation of
`Ordering[T]`) in this case?

The method `implicitly` defined in the `Predef` singleton object gives us
access:

    def sort[T: Ordering](s: Seq[T]): Seq[T] = {
      val ordering = implicitly[Ordering[T]]
      ...
    }

The `implicitly` method looks like magic, but it has a very simple definition:

    def implicitly[T](implicit e: T) = e

(Remember that you can always pass explicit type arguments to polymorphic methods!)



## Dependent Types

### Full Spectrum Dependent Types

In a full-spectrum language, types can contain arbitrary terms. For example,
in Coq, you can attach a predicate to a type, for example.

## _References_

- Luca Cardelli and Peter Wegner, _On Understanding Types, Data Abstraction, and Polymorphism_, 1985
- Luca Cardelli, _Typeful Programming_, 1993
- Benjamin Pierce, _Types and Programming Languages_, 2002
- Robert Harper, _Practical Foundations for Programming Languages_, 2013
- John C. Reynolds, _Theories of Programming Languages_, 1998
- Martin Odersky, Lex Spoon, Bill Venners, _Programming in Scala_, 2011
- Josh Suereth, _Scala in Depth_, 2012

<hr/>
<span style="font-size: 8pt;" id="1">[1] Analogy from Josh Suereth's excellent book, <i>Scala in Depth</i>.</span>


<!--
----------- SCRATCH

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



the hands of the need to excessively ascribe types.

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

"I'm not against types, but I don't know of any type systems that aren't a
complete pain, so I still like dynamic typing."

– Alan Kay, creator of Smalltalk

"Testing can only prove the presence of errors, never their absence"

– Edward Dijkstra




Static type systems can prove the absence of certain run-time errors. For instance, they can prove properties like: booleans are never added to integers; private variables are not accessed from outside their class; functions are applied to the right number of arguments; only strings are ever added to a set of strings.
Other kinds of errors are not detected by today's static type systems. For instance, they will usually not detect non-terminating functions, array bounds violations, or divisions by zero. They will also not detect that your program does not conform to its specification (assuming there is a spec, that is!). Static type systems have therefore been dismissed by some as not being very useful. The argument goes that since such type systems can only detect simple errors, whereas unit tests provide more extensive coverage, why bother with static types at all? We believe that these arguments miss the point. Although a static type system certainly cannot replace unit testing, it can reduce the number of unit tests needed by taking care of some properties that would otherwise need to be tested. Likewise, unit testing can not replace static typing. After all, as Edsger Dijkstra said, testing can only prove the presence of errors, never their absence.14 So the guarantees that static typing gives may be simple, but they are real guarantees of a form no amount of testing can deliver.


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

Wilcards.

There are two things at play:
the concept of existential abstraction which is important
the specific form of existential types that exist in Scala 2.x
The important point is that abstract type members in Scala can be used for existential abstraction in most (all?) important cases. This means that it is often not necessary to use existential types to achieve the conceptual task of existential abstraction. In fact, Dotty does not have existential types any more, because they mostly add complexity, whereas type members support the important things.

Questions (for Martin):
is there any use case that existential types support that abstract type members don't support? Do Dotty's abstract type members completely subsume the existential types of Scala 2.x?

So even though technically the underscore stands for two different things in a pattern match and in a type parameter of a method call, in essence the meaning is the same; it lets you label something that is unknown.

Why Scala has existential types. Java interop, wildcards and raw types.


-->
