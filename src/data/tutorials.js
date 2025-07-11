export const tutorialsData = [
  {
    id: 'javascript',
    title: 'JavaScript',
    description: 'Learn modern JavaScript from the basics to advanced concepts.',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479',
    sections: [
      {
        id: 'basics',
        title: 'JavaScript Basics',
        chapters: [
          { id: 'intro-to-js', title: 'Intro to JS', content: `
<h2>Welcome to JavaScript!</h2>
<p>JavaScript is the language of the web - it's what makes websites interactive and dynamic. Learning JavaScript opens doors to frontend development, backend systems, mobile apps, and much more.</p>

<div class="info-box">
  <div class="info-box-title">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clip-rule="evenodd" />
    </svg>
    Did You Know?
  </div>
  <p>JavaScript was created in just 10 days in May 1995 by Brendan Eich while working at Netscape. It was originally called "Mocha," then "LiveScript," before being renamed "JavaScript."</p>
</div>

<h2>What JavaScript Really Does</h2>
<p>JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at —</p>

<ul>
  <li>displaying timely content updates,</li>
  <li>interactive maps,</li>
  <li>animated 2D/3D graphics,</li>
  <li>scrolling video jukeboxes, etc.</li>
</ul>

<p>You can bet that JavaScript is probably involved.</p>

<p>JavaScript enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)</p>

<h2>Every programming language/library has 2 parts</h2>
<ul>
  <li><strong>Happy Easy parts</strong>: used for toy application, easy to teach & learn, most of these never asked in technical interviews</li>
  <li><strong>Real Hard parts</strong>: used in the real Industry, very hard to teach & requires some effort to learn, Technical interviews are full of question related to the hard parts</li>
</ul>

<div class="tip-box">
  <div class="tip-box-title">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
      <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
    </svg>
    Learning Tip
  </div>
  <p>Focus on mastering core JavaScript fundamentals before diving into frameworks like React or Angular. Strong fundamentals will make learning any framework much easier!</p>
</div>

<h2>What is Javascript?</h2>
<p>Javascript is one of the most popular and widely used programming languages. Unlike HTML (structure) and CSS (styling), JavaScript adds <strong>behavior</strong> to web pages.</p>

<p>JavaScript is:</p>
<ul>
  <li>High-level: You don't have to manage memory manually</li>
  <li>Dynamic: Types are checked at runtime, not compile time</li>
  <li>Interpreted: Code executes directly without a separate compilation step</li>
  <li>Multi-paradigm: Supports functional, object-oriented, and event-driven programming</li>
</ul>

<p>Giants like Netflix, Walmart, and Paypal are building entire applications around Javascript.</p>

<h2>What can you do with Javascript?</h2>
<ul>
  <li>Add interactivity to webpages (form validation, animations, UI updates)</li>
  <li>Make full web/mobile apps with javascript (using frameworks like React, Vue, Angular)</li>
  <li>Desktop applications (using Electron.js)</li>
  <li>Real-time networking applications (chat apps, video streaming)</li>
  <li>Command-line tools (using Node.js)</li>
  <li>Games (using libraries like Phaser or Three.js)</li>
  <li>Backend services (using Node.js with Express or Nest.js)</li>
  <li>Databases (using MongoDB, Firebase)</li>
</ul>

<h2>Where does Javascript code run?</h2>
<ul>
  <li>JS was originally designed to run only in client-side browsers
    <ul>
      <li>every browser has a javascript engine that can execute javascript code</li>
      <li>google chrome's JS engine is V8</li>
      <li>firefox's JS engine is SpiderMonkey</li>
      <li>safari's JS engine is JavaScriptCore (Nitro)</li>
    </ul>
  </li>
  <li>Node is a cross-platform environment; Using node we can execute Javascript code in any operating system (desktops & servers); Node uses google chrome's V8 engine to execute JS code literally anywhere.</li>
</ul>

<p>In other words, <strong>browsers</strong> and <strong>node</strong> provide a runtime environment for our Javascript code.</p>

<div class="info-box">
  <div class="info-box-title">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clip-rule="evenodd" />
    </svg>
    About Node.js
  </div>
  <p><strong>Node.js</strong> is an open-source, cross-platform, back-end JavaScript runtime environment that runs and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command-line tools and for server-side scripting.</p>
  <p>Consequently, Node.js represents a <code>"JavaScript everywhere"</code> paradigm, unifying web application development around a single programming language, rather than different languages for server-side and client-side scripts.</p>
</div>

<div class="warning-box">
  <div class="warning-box-title">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
    </svg>
    Common Confusion
  </div>
  <p>Don't confuse JavaScript with Java. Despite the similar name, they're completely different languages with different syntax, semantics, and use cases. The name similarity was a marketing decision!</p>
</div>

<h2>What is the difference between JavaScript and ECMAScript?</h2>
<p><strong>ECMAScript</strong> is just a specification. Javascript is a programming language that conforms to the specifications.</p>
<p>An organization called ECMA is responsible for defining standards.</p>

<ul>
  <li>1997 started</li>
  <li>2015 → ES6 (Many new features)</li>
  <li>2016 → ES7</li>
  <li>2017 → ES8</li>
  <li>2018 → ES9</li>
  <li>2019 → ES10</li>
  <li>2020 → ES11</li>
  <li>2021 → ES12</li>
  <li>2022 → ES13</li>
</ul>

<p>Modern JavaScript (ES6 and beyond) introduced many powerful features like arrow functions, classes, promises, async/await, destructuring, and more that make the language more powerful and developer-friendly.</p>

<h2>JavaScript Frameworks & Libraries</h2>
<p>Once you learn JavaScript fundamentals, you can explore popular frameworks and libraries that make building complex applications easier:</p>
<ul>
  <li><strong>React</strong> - For building user interfaces (used by Facebook, Instagram)</li>
  <li><strong>Angular</strong> - Full-featured framework (used by Google)</li>
  <li><strong>Vue</strong> - Progressive framework for UIs</li>
  <li><strong>Express</strong> - Web application framework for Node.js</li>
  <li><strong>Next.js</strong> - React framework with server-side rendering</li>
  <li><strong>Svelte</strong> - Compiler-based approach to building UIs</li>
</ul>

<h2>Practical</h2>
<p>Writing some javascript in the browser</p>
<p>Writing in the script tag - using VSCode</p>

<pre><code>&lt;script&gt;
console.log('Hello world!');
&lt;/script&gt;</code></pre>

<p>It's a statement. It expresses an action to be carried out. In this case, we want to log a message on the console.</p>

<h3>Separation of concerns - structure vs behavior</h3>

<pre><code>&lt;script src="index.js"&gt;&lt;/script&gt;</code></pre>

<p>HTML → Structure of the document<br>
CSS → Styling or look of the document<br>
JS → Behaviour & interactivity of the document</p>

<div class="info-box">
  <div class="info-box-title">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clip-rule="evenodd" />
    </svg>
    Best Practice
  </div>
  <p>Always place your script tags at the end of the body or use the <code>defer</code> attribute to ensure your HTML is loaded before your JavaScript runs. This prevents errors when JavaScript tries to access elements that haven't been created yet.</p>
</div>
` },
          { id: 'variables', title: 'Variables', content: `
<h2>Variables</h2>

<div class="info-box">
  <div class="info-box-title">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clip-rule="evenodd" />
    </svg>
    Definition
  </div>
  <p>A variable is a container for storing data in JavaScript.</p>
</div>

<h3>Declaration</h3>
<p>Variables are declared using the <code>var</code>, <code>let</code>, or <code>const</code> keyword.</p>

<div class="warning-box">
  <div class="warning-box-title">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
    </svg>
    Naming Rules
  </div>
  <p>Variable names should start with a letter or underscore, followed by letters, numbers, or underscores.</p>
</div>

<h3>Understanding Variables</h3>
<p>We use programming languages like JavaScript to store and manipulate information. Variables in JavaScript are used to store different kinds of data. Think of a variable like a bottle. We use bottles to store water, in much the same way we use variables to store various forms of data in JavaScript.</p>

<div class="tip-box">
  <div class="tip-box-title">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
      <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
    </svg>
    Key Concept
  </div>
  <p>Variables in JavaScript are containers for storing data values. They're fundamental to programming as they allow you to store and manipulate information in your code.</p>
</div>

<h3>Basic Variable Example</h3>

<pre><code>var age = 25;    //Declaring a variable named 'age' with a value of 25</code></pre>

<h3>Syntax</h3>
<p>You can also declare multiple variables in one statement:</p>

<pre><code>var a = 100, b = 200, c = 300;</code></pre>

<div class="info-box">
  <div class="info-box-title">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clip-rule="evenodd" />
    </svg>
    Important Note
  </div>
  <p>The data inside variables is not constant. This means the data inside a variable can be changed.</p>
</div>

<h3>Variable Reassignment Example</h3>

<pre><code>var a = 200
a = 100</code></pre>

<p>In the above example, the variable called 'a' first contained the value 200 but a = 100 means that 'a' now contains the value 100.</p>

<div class="tip-box">
  <div class="tip-box-title">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
      <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
    </svg>
    Naming Tip
  </div>
  <p>You can name variables whatever you want, but try to give them good/descriptive names that tell the reader what the variable is used for.</p>
</div>

<h3>Declaration, Declaration with Initialisation, Assignment, Reassignment</h3>

<pre><code>//declare or define a variable called firstName
let firstName;

// initialize or assign value to a variable
firstName = 'John'

// declare & initialize | define a variable and assign a value
let lastName = 'Smith';

// re-assign value to a variable
firstName = 'Will'

// Access or showing or logging or looking up the variable content
console.log(firstName, lastName)</code></pre>

<div class="info-box">
  <div class="info-box-title">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clip-rule="evenodd" />
    </svg>
    Modern JavaScript
  </div>
  <p>In modern JavaScript, it's recommended to use <code>let</code> or <code>const</code> instead of <code>var</code>. <code>let</code> creates variables that can be reassigned, while <code>const</code> creates variables that cannot be reassigned after declaration.</p>
</div>

<h3>Variable Declaration with let and const</h3>

<pre><code>// Using let for variables that will change
let score = 0;
score = score + 10; // Now score is 10

// Using const for variables that won't change
const PI = 3.14159;
// PI = 3; // This would cause an error</code></pre>

<div class="warning-box">
  <div class="warning-box-title">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
    </svg>
    Common Mistakes
  </div>
  <p>A common mistake is trying to use a variable before declaring it or trying to reassign a value to a <code>const</code> variable. Always declare your variables before using them, and use <code>const</code> only for values that won't change.</p>
</div>
` },
          { id: 'data-types', title: 'Data Types in JS', content: 'Exploring JavaScript data types including strings, numbers, booleans, objects, and arrays.' },
          { id: 'dynamic-typing', title: 'Dynamic Typing', content: 'How JavaScript handles types dynamically and what that means for developers.' },
          { id: 'null-undefined', title: 'null & undefined', content: 'Understanding the difference between null and undefined values in JavaScript.' },
          { id: 'bigint-symbols', title: 'bigInt & Symbols', content: 'Working with BigInt for large integers and Symbol for unique identifiers.' },
        ],
      },
      {
        id: 'operators-expressions',
        title: 'Operators and Expressions',
        chapters: [
          { id: 'statements-expressions', title: 'Statements vs Expressions', content: 'Understanding the difference between statements and expressions in JavaScript.' },
          { id: 'truthy-falsy', title: 'Truthy/falsy Values', content: 'How JavaScript evaluates different values as true or false in boolean contexts.' },
          { id: 'equality-operators', title: 'Equality Operators', content: 'Understanding == vs === and other equality operators in JavaScript.' },
          { id: 'mathematical-operators', title: 'Mathematical operators', content: 'Working with addition, subtraction, multiplication, division and other mathematical operations.' },
          { id: 'relational-operators', title: 'Relational operators', content: 'Understanding comparison operators like >, <, >=, and <=.' },
          { id: 'logical-operators', title: 'Logical Operators', content: 'Working with AND, OR, and NOT logical operators in JavaScript.' },
          { id: 'prefix-postfix', title: 'prefix & postfix', content: 'Understanding the difference between prefix and postfix increment/decrement operators.' },
        ],
      },
      {
        id: 'control-flow',
        title: 'Control Flow',
        chapters: [
          { id: 'conditional-statements', title: 'Conditional Statements', content: 'Using if, else if, and else statements to control program flow.' },
          { id: 'control-flow-if-else', title: 'Control flow: if..else', content: 'Detailed exploration of if-else statements and how they control program execution.' },
          { id: 'switch-case', title: 'Control flow: Switch Case', content: 'Using switch statements for multi-branch decision making.' },
          { id: 'loops', title: 'Loops', content: 'Different types of loops in JavaScript including for, while, and do-while loops.' },
        ],
      },
      {
        id: 'type-handling',
        title: 'Type Handling',
        chapters: [
          { id: 'type-conversion-explicit', title: 'Type conversion (Explicit)', content: 'How to explicitly convert between different data types in JavaScript.' },
          { id: 'type-coercion', title: 'Type coercion (Implicit)', content: 'Understanding how JavaScript automatically converts types in certain operations.' },
          { id: 'type-identification', title: 'Type Identification in JavaScript', content: 'Methods to check and identify types in JavaScript like typeof and instanceof.' },
          { id: 'store-by-value-reference', title: 'Store by value VS Store by reference', content: 'Understanding the difference between primitive and reference types in JavaScript.' },
        ],
      },
      {
        id: 'modern-js-features',
        title: 'Modern JavaScript Features',
        chapters: [
          { id: 'template-literals', title: 'Template Literals', content: 'Using template literals for string interpolation and multi-line strings.' },
          { id: 'arrow-functions', title: 'Arrow Functions', content: 'Working with arrow functions and how they differ from traditional functions.' },
          { id: 'object-shorthand', title: 'Object shorthand', content: 'Using object property and method shorthand syntax in modern JavaScript.' },
          { id: 'default-parameters', title: 'Default Parameter in function', content: 'How to define default function parameters in JavaScript.' },
          { id: 'var-let-const', title: 'var vs let vs const', content: 'Comparing the different variable declaration keywords and their behaviors.' },
          { id: 'rest-spread', title: 'Rest and Spread', content: 'Using rest and spread operators for working with arrays and function parameters.' },
          { id: 'destructuring', title: 'Destructuring Arrays and Objects', content: 'How to extract values from arrays and objects using destructuring assignment.' },
          { id: 'optional-chaining', title: 'Optional Chaining', content: 'Using the optional chaining operator to safely access nested object properties.' },
        ],
      },
      {
        id: 'functions',
        title: 'Functions',
        chapters: [
          { id: 'lexical-scope', title: 'Lexical Scope', content: 'Understanding variable scope in JavaScript and how lexical scoping works.' },
          { id: 'hoisting', title: 'Hoisting', content: 'How variable and function declarations are hoisted to the top of their scope.' },
          { id: 'higher-order-functions', title: 'Higher Order Functions & Callbacks', content: 'Understanding functions that operate on other functions in JavaScript.' },
          { id: 'this-keyword', title: 'Mastering "this" keyword', content: 'Understanding how the "this" keyword works in different contexts.' },
        ],
      },
      {
        id: 'data-structures',
        title: 'Data Structures',
        chapters: [
          { id: 'math-string-date', title: 'Math, String & Date', content: 'Working with built-in objects like Math, String, and Date in JavaScript.' },
          { id: 'array-methods', title: 'Array Methods', content: 'Exploring common array methods like map, filter, reduce, and more.' },
          { id: 'array-higher-order', title: 'Array - Higher order functions', content: 'Working with array methods that use callbacks like map, filter, and reduce.' },
          { id: 'shallow-deep-copies', title: 'Shallow and Deep Copies', content: 'Understanding the difference between shallow and deep copies of objects and arrays.' },
          { id: 'mutability', title: 'Mutability vs Immutability', content: 'Understanding mutable and immutable data structures in JavaScript.' },
        ],
      },
      {
        id: 'objects-prototypes',
        title: 'Objects and Prototypes',
        chapters: [
          { id: 'object-creation', title: 'Object creation in bulk quantity', content: 'Techniques for creating multiple objects efficiently in JavaScript.' },
          { id: 'prototypical-inheritance', title: 'Prototypical Inheritance in Javascript', content: 'Understanding JavaScript\'s prototype-based inheritance model.' },
        ],
      },
      {
        id: 'asynchronous-js',
        title: 'Asynchronous JavaScript',
        chapters: [
          { id: 'timers', title: 'Timers', content: 'Working with setTimeout, setInterval, and other timing functions.' },
          { id: 'intro-async', title: 'Introduction to Asynchronous Javascript', content: 'Understanding asynchronous programming concepts in JavaScript.' },
          { id: 'promises', title: 'Promises', content: 'Working with promises for handling asynchronous operations.' },
          { id: 'fetch-api', title: 'Fetch API, Sorting & Filtering', content: 'Using the Fetch API to make HTTP requests and process the data.' },
        ],
      },
      {
        id: 'dom-browser',
        title: 'DOM and Browser APIs',
        chapters: [
          { id: 'intro-dom', title: 'Introduction to DOM', content: 'Understanding the Document Object Model and how JavaScript interacts with it.' },
          { id: 'events', title: 'Events', content: 'Working with browser events and event handling in JavaScript.' },
          { id: 'dom-2', title: 'DOM Advanced', content: 'Advanced DOM manipulation techniques and traversing the DOM.' },
          { id: 'dom-storage', title: 'Local storage, Promises, Sorting & Filtering', content: 'Working with localStorage and sessionStorage in browser applications.' },
          { id: 'crud-operations', title: 'CRUD Operations', content: 'Implementing Create, Read, Update, and Delete operations in JavaScript applications.' },
        ],
      },
    ],
  },
  {
    id: 'html',
    title: 'HTML',
    description: 'Master HTML structure, semantics and best practices.',
    image: 'https://images.unsplash.com/photo-1621839673705-6617adf9e890',
    sections: [
      {
        id: 'basics',
        title: 'HTML Basics',
        chapters: [
          { id: 'introduction', title: 'Introduction to HTML', content: 'HTML (Hypertext Markup Language) is the standard markup language for creating web pages and web applications.' },
          { id: 'elements', title: 'HTML Elements', content: 'HTML elements are the building blocks of HTML pages. They are represented by tags, written using angle brackets.' },
          { id: 'attributes', title: 'HTML Attributes', content: 'HTML attributes provide additional information about HTML elements and are always specified in the start tag.' },
          { id: 'headings', title: 'Headings and Paragraphs', content: 'HTML provides six different heading levels, h1 through h6, and paragraph tags for organizing text content.' },
          { id: 'formatting', title: 'Text Formatting', content: 'HTML includes tags for formatting text, such as <b>, <strong>, <i>, <em>, <mark>, <small>, <del>, <ins>, <sub>, and <sup>.' },
        ],
      },
      {
        id: 'intermediate',
        title: 'Intermediate HTML',
        chapters: [
          { id: 'links', title: 'Links and Navigation', content: 'The <a> element creates hyperlinks to other web pages, files, locations within the same page, or any URL.' },
          { id: 'images', title: 'Images and Multimedia', content: 'HTML supports various multimedia formats including images, audio, and video through tags like <img>, <audio>, and <video>.' },
          { id: 'lists', title: 'Lists and Tables', content: 'HTML provides tags for creating ordered lists, unordered lists, and complex data tables with rows and columns.' },
          { id: 'forms', title: 'Forms and Input Elements', content: 'HTML forms collect user input using various input types like text fields, checkboxes, radio buttons, and more.' },
          { id: 'semantic', title: 'Semantic HTML', content: 'Semantic elements clearly describe their meaning to both the browser and the developer, like <article>, <section>, <nav>, <header>, etc.' },
        ],
      },
    ],
  },
  {
    id: 'css',
    title: 'CSS',
    description: 'Learn to style web pages with CSS from fundamentals to advanced techniques.',
    image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2',
    sections: [
      {
        id: 'basics',
        title: 'CSS Basics',
        chapters: [
          { id: 'introduction', title: 'Introduction to CSS', content: 'CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML.' },
          { id: 'selectors', title: 'CSS Selectors', content: 'Selectors are patterns used to select and style HTML elements. They include element selectors, class selectors, ID selectors, and more.' },
          { id: 'colors', title: 'Colors and Backgrounds', content: 'CSS provides various ways to specify colors and set background properties for elements.' },
          { id: 'box-model', title: 'The Box Model', content: 'The CSS box model describes the rectangular boxes generated for elements in the document tree and laid out according to the visual formatting model.' },
          { id: 'typography', title: 'Typography and Text Styling', content: 'CSS offers properties to style text, including font family, size, weight, alignment, and spacing.' },
        ],
      },
      {
        id: 'intermediate',
        title: 'Intermediate CSS',
        chapters: [
          { id: 'layout', title: 'CSS Layout', content: 'CSS provides various layout techniques including Flexbox, Grid, and positioning to control the arrangement of elements.' },
          { id: 'responsive', title: 'Responsive Design', content: 'Responsive web design makes web pages look good on all devices using media queries and flexible grids.' },
          { id: 'animations', title: 'Transitions and Animations', content: 'CSS transitions and animations allow elements to change from one style to another smoothly over time.' },
          { id: 'transformations', title: '2D and 3D Transformations', content: 'CSS transforms allow you to rotate, scale, move, and skew elements in two-dimensional or three-dimensional space.' },
          { id: 'preprocessors', title: 'CSS Preprocessors', content: 'Preprocessors like Sass and Less extend CSS with variables, nesting, mixins, and other features to make styling more efficient.' },
        ],
      },
    ],
  },
  {
    id: 'react',
    title: 'React',
    description: 'Build modern user interfaces with React JS library.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
    sections: [
      {
        id: 'basics',
        title: 'React Basics',
        chapters: [
          { id: 'introduction', title: 'Introduction to React', content: 'React is a JavaScript library for building user interfaces, particularly single-page applications.' },
          { id: 'jsx', title: 'JSX Syntax', content: 'JSX is a syntax extension for JavaScript that looks similar to HTML and allows you to write UI elements in React.' },
          { id: 'components', title: 'Components and Props', content: 'React applications are built using components, which are reusable pieces of code that return React elements to appear on the screen.' },
          { id: 'state', title: 'State and Lifecycle', content: 'State allows React components to change their output over time in response to user actions, network responses, and anything else.' },
          { id: 'events', title: 'Handling Events', content: 'React events are named using camelCase and pass functions as event handlers rather than strings.' },
        ],
      },
      {
        id: 'intermediate',
        title: 'Intermediate React',
        chapters: [
          { id: 'hooks', title: 'React Hooks', content: 'Hooks let you use state and other React features without writing a class component.' },
          { id: 'forms', title: 'Forms and Controlled Components', content: 'In React, form elements like <input>, <textarea>, and <select> typically maintain their own state, but can be controlled through React state.' },
          { id: 'context', title: 'Context API', content: 'Context provides a way to share values between components without having to explicitly pass a prop through every level of the tree.' },
          { id: 'router', title: 'React Router', content: 'React Router enables navigation among views in a React application, allowing for a single-page application experience.' },
          { id: 'patterns', title: 'React Patterns', content: 'Common patterns in React include Higher-Order Components (HOCs), Render Props, and Custom Hooks.' },
        ],
      },
    ],
  },
  {
    id: 'nodejs',
    title: 'Node.js',
    description: 'Learn server-side JavaScript with Node.js.',
    image: 'https://th.bing.com/th/id/OIP.26yZeCv-XbRVjeCKCeAidgHaEK?w=303&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    sections: [
      {
        id: 'basics',
        title: 'Node.js Basics',
        chapters: [
          { id: 'introduction', title: 'Introduction to Node.js', content: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine, designed for building scalable network applications.' },
          { id: 'modules', title: 'Node.js Modules', content: 'Node.js modules are reusable blocks of code whose existence does not impact other code.' },
          { id: 'npm', title: 'NPM (Node Package Manager)', content: 'NPM is the default package manager for Node.js, used to install, share, and manage dependencies in your projects.' },
          { id: 'fs', title: 'File System Operations', content: 'Node.js provides a File System module that allows you to work with the file system on your computer.' },
          { id: 'events', title: 'Events and Event Emitters', content: 'Node.js uses an event-driven architecture where certain kinds of objects (called "emitters") periodically emit named events.' },
        ],
      },
      {
        id: 'intermediate',
        title: 'Intermediate Node.js',
        chapters: [
          { id: 'express', title: 'Express Framework', content: 'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.' },
          { id: 'rest', title: 'RESTful APIs', content: 'Node.js with Express is commonly used to build RESTful APIs that can be consumed by frontend applications.' },
          { id: 'mongodb', title: 'MongoDB Integration', content: 'MongoDB is a NoSQL database that works well with Node.js for storing and retrieving data.' },
          { id: 'auth', title: 'Authentication and Authorization', content: 'Implementing user authentication and authorization is a common requirement in web applications.' },
          { id: 'testing', title: 'Testing Node.js Applications', content: 'Testing frameworks like Mocha, Chai, and Jest help ensure your Node.js applications work as expected.' },
        ],
      },
    ],
  },
]; 