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
/**
 * [JS engine - call stack :]
 * where our code are stored
 * [JS engine - HEAP :]
 * where our object are stored
 * [Compilation VS Interpretation]
 * Compilation: Entire code is converted int machine code at once,
 * and written to a binary file that can be executed by a computer.
 * Interpretation:
 * Interpreter runs through the source code and executes it line by line.
 *
 * the modern JS use the combination of both.(JIT)
 * Just-In-Time(JIT) compilation:
 * Entire code is converted into machine code at once, then executed immediately.
 *
 * [JS Runtime]
 * Without JS engine , there is no JS runtime, then there is no JS at all.
 * - JS runtime in browser :
 * JS runtime contains all the JS stuff we need.
 * Js engine , Web API ,callback queue
 * - Web API : Functionalities provided to the engine , accessible on window object.
 * Web API includes DOM , the Timer, the Fetch API , etc.
 * - callback queue : it is a data structure contains all the callback functions
 * that are ready to be executed.
 * for example : we attach event handler functions to DOM element lik e a button.
 * and this event handle functions are also called callback functions.
 * so as the event happens, e.g. a click , the callback function will be executed.
 * After the event, the callback function will be put into the callback queue,
 * then when the call stack is empty, the callback function is passed to the stack.
 * and this happens by something called the event loop.
 */

// ! Execution Contexts and The Call Stack
/**
 * [what is an Execution Context  and how it runs ?]
 * Definition:
 * - top-level code : is basically code that is not in the function.
 * - Execution Context :
 * 1 . environment in which a piece of JS is executed.
 * Stores all the necessary information for some code to be executed.
 * e.g : local variables or arguments passed into a function.
 * 2.  Exactly ONE global Execution Context (EC):
 * Default context, created for code that is not inside any function (top-level)
 *
 * What is inside execution context ?
 * 1 . variable Environment :
 * - let , const and var declarations
 * - Functions
 * - arguments object
 * 2. Scope Chain :
 * basically consists of references to variable that are located outside the current function.
 * and to keep track of the Scope Chain, it is stored in each execution context.
 * 3. 'this' keyword
 *
 * Notes: the arrow functions does not get their own argument keyword and no this keyword
 * but can use the argument object and this keyword from their closest regular function parent.
 *
 * all above generated during 'creation phase' , right before execution.
 *
 * How Execution working ?
 * 1. Let's say we just finished compilation and now move to the execution.
 * 2. global execution context is created for the top-level code. so at the beginning,
 * only the code is outside any functions will be executed. (Functions should only be executed when they are called)
 * 3. Execution of top-level code(inside global EC)
 * 4. Execution of functions and waiting for callbacks
 * - One execution context per function : For each function call , a new execution context is created.
 */

// ! Scope and The Scope Chain
/**
 * Scoping : how our program's variable are organized and accessed.
 * - Where do variables live ?
 * - Where can we access a certain variable ?
 * - Where can we NOT access ?
 * Lexical Scoping : Scoping is controlled by placement of functions
 *                  and blocks  in the code.
 *                  e.g. a function that is written inside another function
 *                  has access to the variables of the parent function.
 * Scope: Space or environment in which a certain variable is declared
 *        (variable environment in case of functions). There is global
 *        scope, function scope, and block scope.
 * Scope of a variable : Region of our code where a certain variable can be accessed.
 * [Three different types of scope]
 * global scope
 * - Outside any function or block
 * - Variables declared in global scope are accessible everywhere
 *
 * function scope
 * - Variables are accessible only inside functions, NOT outside
 * - Also called local scope
 *
 * block scope (ES6)
 * - What is mean ? Anything that is between the curly braces.(if statement , for loop)
 * - Variables are accessible only inside block. (block scoped)
 * - HOWEVER, this only applied to let and const variable.
 * - Functions are also block scoped (only in strict mode)
 */
/**
 * The Scope Chain
 * The Scope chain is a one-way street : a scope will never ever have access
 * to the variable of an inner scope
 *
 * The Scope Chain in a certain scope is equal to adding together all the variable
 * environments of the all parent scopes
 *
 * The Scope chain has nothing to do with the order in which functions were called.
 * It does not affect the scope chain at all.
 */

//Global Scope
const myName = 'Jack';

// first() scope
function first() {
  const age = 30;
  if (age >= 30) {
    // block scope
    const decade = 3;
    //function scope(first() scope) , because block scope NOT applied to var.
    var millenial = true;
  }

  //second () scope
  function second() {
    // function scope
    const job = 'student';
    /**
     * need myName and age variable in order to clg
     * scope has access to variable from all outer scope ,
     * so from all its parent scopes
     * In this case, the second scope can access the age variable from the scope
     * of the first function(first() scope).
     * Therefore , the first function can access to global scope myName.
     * so the second() scope also has the access to the myName global scope,
     * because the second scope has the access to the first scope.
     * All of these rules also applied to the function argument.
     * All above explained hoe the scope chain works.
     * [Scope look up in Scope Chain :]
     * If one scope needs to use a certain variables, but cannot find it in the
     * current scope, it will look up in the scope chain and see if it can find
     * a variable in one of the parent scope.
     * if it can , it will then use that variable.
     * if it cannot, then there will be an error.
     */
    console.log(`${myName} is a ${age} years old ${job}`);
  }

  second();
}

first();

/**
 * [Scope Chain VS Call Stack]
 * const a = 'Jonas';
 *  third();
 *
 *  function third() {
 *  const b = 'Hello';
 *  fourth();
 *
 *  function fourth() {
 *  const c = 'Hi';
 *  five();
 *  }
 *  }
 *
 *  function five() {
 *  const d = 'Hey';
 *  console.log(d + c + b + a);
 *  // Reference Error
 *  }
 */

// ! Scoping in Practice

// ! Variable Environment: Hoisting and The TDZ
/*
 * Hoisting : Make some type of variables accessible or usable in the code
 *            Before they are actually declared.
 *            "Variables lifted to the top of their scope."
 * Before execution, code is scanned for variable declarations and for each variable,
 * a new property is created in the variable environment object.
 *
 * Hoisting does not work in same wat for all variables.
 *
 * [Function declarations]
 * Hoisted? Yes
 * Initial value? actual function
 * Scope? Block

 * [var variables]
 * Hoisted? Yes
 * Initial value? undefined
 * Scope? Function
 *
 * [let and cost variables]
 * Hoisted? No
 * Initial value? <uninitialized>,TDZ (Temporary Dead Zone)
 * Scope? Block
 *
 * [function expressions and arrow functions]
 * Depend on var,let or const
 *
 * What is TDZ?
 * const myName = 'Jonas'
 * if(myName==='Jonas'){
 * // TDZ start
 * console.log(`Jonas is a ${job}`)
 * const age = 2037 - 1989;
 * console.log(age)
 * // TDZ Ended -> ReferenceError: Cannot access 'job' before initialization
 * const job = 'teacher'
 * console.log(x); -> ReferenceError : x is not defined.
 * }
 * Why TDZ?
 * Makes it easier to avoid and catch error: accessing variables before declaration
 * is bad practice and should be avoided.
 * Make const variables actually work.
 */

// ! Hoisting and TDZ in Practice

// ! This Keyword

// ! This Keyword in Practice

// ! Regular Functions vs. Arrow Functions

// ! Primitives vs. Objects (Primitive vs. Reference Types)

// ! Primitives vs. Objects in Practice
