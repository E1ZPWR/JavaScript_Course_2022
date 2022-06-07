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
/*
 [JS engine - call stack :]
 where our code are stored
 [JS engine - HEAP :]
 where our object are stored
 [Compilation VS Interpretation]
 Compilation: Entire code is converted int machine code at once,
 and written to a binary file that can be executed by a computer.
 Interpretation:
 Interpreter runs through the source code and executes it line by line.

 the modern JS use the combination of both.(JIT)
 Just-In-Time(JIT) compilation:
 Entire code is converted into machine code at once, then executed immediately.

 [JS Runtime]
 Without JS engine , there is no JS runtime, then there is no JS at all.
 - JS runtime in browser :
 JS runtime contains all the JS stuff we need.
 Js engine , Web API ,callback queue
 - Web API : Functionalities provided to the engine , accessible on window object.
 Web API includes DOM , the Timer, the Fetch API , etc.
 - callback queue : it is a data structure contains all the callback functions
 that are ready to be executed.
 for example : we attach event handler functions to DOM element lik e a button.
 and this event handle functions are also called callback functions.
 so as the event happens, e.g. a click , the callback function will be executed.
 After the event, the callback function will be put into the callback queue,
 then when the call stack is empty, the callback function is passed to the stack.
 and this happens by something called the event loop.
 */
// ! Execution Contexts and The Call Stack
/*
 [what is an Execution Context  and how it runs ?]
 Definition:
 - top-level code : is basically code that is not in the function.
 - Execution Context :
 1 . environment in which a piece of JS is executed.
 Stores all the necessary information for some code to be executed.
 e.g : local variables or arguments passed into a function.
 2.  Exactly ONE global Execution Context (EC):
 Default context, created for code that is not inside any function (top-level)

 What is inside execution context ?
 1 . variable Environment :
 - let , const and var declarations
 - Functions
 - arguments object
 2. Scope Chain :
 basically consists of references to variable that are located outside the current function.
 and to keep track of the Scope Chain, it is stored in each execution context.
 3. 'this' keyword

 Notes: the arrow functions does not get their own argument keyword and no this keyword
 but can use the argument object and this keyword from their closest regular function parent.

 all above generated during 'creation phase' , right before execution.

 How Execution working ?
 1. Let's say we just finished compilation and now move to the execution.
 2. global execution context is created for the top-level code. so at the beginning,
 only the code is outside any functions will be executed. (Functions should only be executed when they are called)
 3. Execution of top-level code(inside global EC)
 4. Execution of functions and waiting for callbacks
 - One execution context per function : For each function call , a new execution context is created.
 */

// ! Scope and The Scope Chain

// ! Scoping in Practice

// ! Variable Environment: Hoisting and The TDZ

// ! Hoisting and TDZ in Practice

// ! This Keyword

// ! This Keyword in Practice

// ! Regular Functions vs. Arrow Functions

// ! Primitives vs. Objects (Primitive vs. Reference Types)

// ! Primitives vs. Objects in Practice
