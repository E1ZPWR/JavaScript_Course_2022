'use strict';

// ! A High-Level Overview of JavaScript
/*
* [the garbage-collection] :
* 1. the algorithm inside the JS engine.
* 2. this will automatically remove any old and unused objects
* from the computer memory.
*
* [interpreted or Just-In-Time compiled]
* JS is an interpreted or Just-In-Time compiled language.
* Covert human-readable JS language into machine code that only
* computer can understand. === compiling
* And this will happen en inside JS engine
*
* [multi-paradigm] & [prototype-based , object-oriented approach]
* Js is a multi-paradigm language.
* In Programming, the paradigm is an approach and an overall mindset
* structuring our code, which will ultimately direct the coding style
* and techniques in a project that use a certain paradigm.
*
* Three popular paradigms are:
* 1. procedural programming :
* - What We have learned so far.
* - basically just organising the code in a very linear way and
* - then some functions in between
* 2. Object-oriented Programming (OOP)
* - it is prototype-based approach and object-oriented approach
* - Almost everything in JS is an object , except primitive values (e.g. numbers,Strings).
* - But Array is just an object.
* -- Think: Why we can create an array, and then we can use push method on th is array ?
* -- b/c: prototypal inheritance.
* -- we created an array from the array blueprint(this is called prototype(原型)).
* - This prototype contains all the array methods.
* -- Then the array we created in our code then inherited all the methods from the array blueprints.
* 3. Functional Programming (FP)
*  [First-class function]
* - In a language with a first-class function, functions are simply be treated as a variable.
* - we can pass them into another function, and returns functions from the functions.
* - refer to 06 Modal project
* - This will allow us the use Functional Programming
*
* The paradigm we can also classify as imperative and declarative
*
* [Dynamic language]
*  - Dynamic means dynamic typed.
* for example :
* let x = 23; -> No data type definition.
* let y = 45; -> No data type definition.
* let x = "jack" -> data type of the variable aut automatically changed.
* - the data type only became known when the JS engine starts execute the code.
*
* [Single-thread] & [non-blocking event loop]
* - concurrency-model : how JS handling multiple tasks at the same time.
* - Why do we need this ?
* JS runs in one single thread. so it can only do one thing at the time.
* -What about a long-running tasks ?
* Sounds like it would block the single thread. However, We want non-blocking behavior,
* - How do we achieve that ?
* By using an event loop takes long-running tasks , execute them in the background.
* and puts them back in the main thread once they are finished.
* */
// ! The JavaScript Engine and Runtime

// ! Execution Contexts and The Call Stack

// ! Scope and The Scope Chain

// ! Scoping in Practice

// ! Variable Environment: Hoisting and The TDZ

// ! Hoisting and TDZ in Practice

// ! This Keyword

// ! This Keyword in Practice

// ! Regular Functions vs. Arrow Functions

// ! Primitives vs. Objects (Primitive vs. Reference Types)

// ! Primitives vs. Objects in Practice
