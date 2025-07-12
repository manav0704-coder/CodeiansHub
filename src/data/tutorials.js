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
          { id: 'data-types', title: 'Data Types in JS [45 min]', content: `
<h2>What types of values can be assigned to variables?</h2>
<p>MDN- primitive</p>

<h3>Primitives (value types)</h3>
<ul>
  <li>string</li>
  <li>number</li>
  <li>boolean</li>
  <li>undefined</li>
  <li>null</li>
  <li>bigInt</li>
  <li>symbol</li>
</ul>

<h3>Non Primitives (reference types)</h3>
<ul>
  <li>object</li>
  <li>function</li>
  <li>array</li>
</ul>

<details>
  <summary class="font-semibold text-lg cursor-pointer">Strings</summary>
  <div class="pl-4 mt-2">
    <p>The first type of data is a String. This is used to store a sequence of characters used to represent text.</p>
    
    <p>Example:</p>
    <pre><code>var channel_name = "Code Learning";   // using double quotes
var owner = 'Maya Johnson';         // using single quotes
var val = \`Hi\`;                   // using template literal</code></pre>
    
    <p>Any data within " " (Double quotes) or ' ' (Single quotes) or \` \` (Template literal) is a String in JavaScript.</p>

    <div class="info-box">
      <div class="info-box-title">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clip-rule="evenodd" />
        </svg>
        Fun Fact
      </div>
      <p>Did you know? You can join strings together using the + symbol! For example: <code>"Hello " + "world!"</code> becomes <code>"Hello world!"</code></p>
    </div>
  </div>
</details>

<details>
  <summary class="font-semibold text-lg cursor-pointer">Numbers</summary>
  <div class="pl-4 mt-2">
    <p>The second type of data we want to know is a Number, which is used to store any kind of numbers. We have already seen this type of data in the variables example. Numbers can store both Whole Numbers/Integers and Decimals.</p>
    
    <p>Example:</p>
    <pre><code>var num = 100
var dec = 100.001</code></pre>

    <div class="tip-box">
      <div class="tip-box-title">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
        </svg>
        Helpful Tip
      </div>
      <p>In JavaScript, you can perform math operations with numbers: <code>5 + 10</code>, <code>20 - 5</code>, <code>4 * 3</code>, <code>10 / 2</code></p>
    </div>
  </div>
</details>

<details>
  <summary class="font-semibold text-lg cursor-pointer">Booleans</summary>
  <div class="pl-4 mt-2">
    <p>This data type has only two values: true and false. Think of booleans as simple yes/no or on/off switches in your code.</p>
    
    <p>Example:</p>
    <pre><code>var isLoggedIn = true
var isGameOver = false</code></pre>

    <div class="info-box">
      <div class="info-box-title">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clip-rule="evenodd" />
        </svg>
        When to Use
      </div>
      <p>Booleans are perfect for situations where you need to track something with two states: light on/off, game over/not over, logged in/logged out</p>
    </div>
  </div>
</details>

<details>
  <summary class="font-semibold text-lg cursor-pointer">undefined & null</summary>
  <div class="pl-4 mt-2">
    <p><code>undefined</code> means a variable has been declared but no value has been assigned to it yet.</p>
    <p><code>null</code> means "nothing" or "empty" - it's a value you assign when you want to explicitly say "this has no value".</p>
    
    <p>Example:</p>
    <pre><code>// undefined example
let score;
console.log(score); // undefined

// null example
let username = null;
console.log(username); // null</code></pre>
  </div>
</details>

<h2>Objects</h2>

<p>Objects in a programming language are like containers that hold related information. Imagine a backpack that can hold many different things - that's like an object in JavaScript! An object has properties (like name, age, color) and each property has a value.</p>

<p>Ways to access properties:</p>
<ul>
  <li>dot notation: <code>person.name</code></li>
  <li>bracket notation: <code>person["name"]</code></li>
</ul>

<pre><code>// Creating an object
let student = {
  name: "Emma",
  age: 12,
  grade: 6,
  hobbies: ["reading", "soccer"]
};

// Accessing properties
console.log(student.name);     // Using dot notation: Emma
console.log(student["grade"]); // Using bracket notation: 6</code></pre>

<div class="learner-activity my-6 p-6 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
  <h3 class="text-xl font-semibold mb-4">Learner Activity:</h3>
  
  <pre><code>// a park collects name & emotion of their visitors - 'bad', 'good', 'great'
// stores them in parkEmotionData object
// name of the visitor becomes key, and emotion becomes value
var parkEmotionData = {
}

// 'alex' is feeling 'good'

// 'sarah' is feeling 'bad'

// 'tony' is feeling 'bad'

console.log(parkEmotionData) // expect object with 3 properties</code></pre>

  <div class="tip-box mt-4">
    <div class="tip-box-title">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
      </svg>
      Solution Hint
    </div>
    <p>To add properties to the object, use either:<br>
    <code>parkEmotionData.alex = 'good';</code> or <code>parkEmotionData['alex'] = 'good';</code></p>
  </div>
</div>

<div class="learner-activity my-6 p-6 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
  <h3 class="text-xl font-semibold mb-4">Learner's Activity (optional):</h3>
  
  <pre><code>// declare a variable called employee;
// employee should be an object with following key values;
// fName: 'Maya'
// lName: 'Johnson'
// age: 35
// loveJS: true
// console.log(employee)
// add another property called hobbies using [] notation
// add another property called favSport using . notation
// console.log(employee)</code></pre>
</div>

<h2>Functions</h2>

<p>A function is a set of instructions that performs a task or calculates and returns a value. Think of a function like a recipe - it takes ingredients (inputs), follows steps, and gives you something at the end (output).</p>

<p>A function in JavaScript is:</p>
<ul>
  <li>Callable (executable) - you can run it whenever you need</li>
  <li>Can take arguments (inputs) - like giving ingredients to a recipe</li>
  <li>Has a set of statements that perform tasks or calculations</li>
  <li>Can return a value (output) - the result after running all steps</li>
</ul>

<pre><code>// Creating a simple function
function greet(name) {
  return "Hello, " + name + "!";
}

// Calling the function
let message = greet("Jamie");
console.log(message);  // Outputs: Hello, Jamie!</code></pre>

<h3>What does a function return if we don't explicitly return anything?</h3>

<div class="bg-gray-50 p-4 rounded-lg dark:bg-gray-800">
<pre><code>// what will it return?
function add(a, b) {
  let c = a + b;
}

let result = add(5, 3);
console.log(result);  // Outputs: undefined</code></pre>
</div>

<div class="info-box">
  <div class="info-box-title">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clip-rule="evenodd" />
    </svg>
    Important Note
  </div>
  <p>If you don't use the <code>return</code> keyword in a function, JavaScript will automatically return <code>undefined</code>.</p>
</div>

<div class="learner-activity my-6 p-6 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
  <h3 class="text-xl font-semibold mb-4">Function Practice Activity:</h3>
  
  <pre><code>// a park collects name & emotion of their visitors - 'bad', 'good', 'great'
// stores them in parkEmotionData object
// name of the visitor becomes key, and emotion becomes value
var parkEmotionData = {
}

// create a function enterEmotions(name, emotion)
// such that it creates a property in the parkEmotionData object

// 'jamie' is feeling 'good' using enterEmotions

// 'taylor' is feeling 'bad' using enterEmotions

// 'sam' is feeling 'bad' using enterEmotions

console.log(parkEmotionData) // expect object with 3 properties</code></pre>

  <div class="tip-box mt-4">
    <div class="tip-box-title">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
      </svg>
      Solution Hint
    </div>
    <p>Your function should look something like this:<br>
    <code>function enterEmotions(name, emotion) {<br>
      &nbsp;&nbsp;parkEmotionData[name] = emotion;<br>
    }</code></p>
  </div>
</div>

<h2>Array</h2>

<p>An array is used to store a list of items. Think of an array like a train with multiple cars, where each car holds one piece of data. Arrays are perfect when you need to keep things in a specific order!</p>

<pre><code>// Creating an array of fruits
let fruits = ["apple", "banana", "orange"];

// Accessing elements (remember: counting starts at 0!)
console.log(fruits[0]);  // apple
console.log(fruits[1]);  // banana
console.log(fruits[2]);  // orange

// Adding a new item to the end
fruits.push("grape");
console.log(fruits);  // ["apple", "banana", "orange", "grape"]

// Changing an item
fruits[1] = "strawberry";
console.log(fruits);  // ["apple", "strawberry", "orange", "grape"]</code></pre>

<div class="info-box">
  <div class="info-box-title">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clip-rule="evenodd" />
    </svg>
    Remember!
  </div>
  <p>Arrays in JavaScript start counting at 0, not 1! So the first item is at position 0, the second item at position 1, and so on.</p>
</div>

<div class="bg-gray-50 p-4 rounded-lg my-4 dark:bg-gray-800">
<h3 class="mb-2 font-semibold">Array Practice:</h3>
<pre><code>// Write a JavaScript program to create an array named colors that contains three strings
// Example Output: ["red", "green", "blue"]

// Access the second item in the colors array and log it to the console.
// Example Input: ["red", "green", "blue"]
// Example Output: green

// Replace "blue" with "orange" in the colors array and print the updated array to the console.
// Example Output: ["red", "green", "orange"]</code></pre>
</div>

<div class="tip-box mt-4">
  <div class="tip-box-title">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
      <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
    </svg>
    Try It Yourself!
  </div>
  <p>You can practice with arrays in the browser console! Open your browser's developer tools (F12 in most browsers) and try creating and manipulating arrays.</p>
</div>

<h2>Checking the type of data:</h2>

<p>Let's say you have some data but you don't know what type it is. You can use the <code>typeof()</code> built-in function to find the type of the data.</p>

<pre><code>// Check the type of different values
console.log(typeof("Hello"));        // "string"
console.log(typeof(42));             // "number"
console.log(typeof(true));           // "boolean"
console.log(typeof(undefined));      // "undefined"
console.log(typeof(null));           // "object" (this is actually a bug in JavaScript!)
console.log(typeof({name: "Alex"})); // "object"
console.log(typeof([1, 2, 3]));      // "object" (arrays are a special type of object)
console.log(typeof(function(){}));   // "function"</code></pre>

<div class="warning-box">
  <div class="warning-box-title">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
    </svg>
    Watch Out!
  </div>
  <p><code>typeof(null)</code> returns "object", which is considered a bug in JavaScript. Just remember that null is actually a primitive value, not an object!</p>
</div>

<div class="learner-activity my-6 p-6 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
  <h3 class="text-xl font-semibold mb-4">Type Checking Practice:</h3>
  
  <pre><code>// What will each of these return? Try to guess before checking!
console.log(typeof(42));
console.log(typeof("JavaScript"));
console.log(typeof(true));
console.log(typeof([1, 2, 3]));
console.log(typeof({name: "Emma"}));
console.log(typeof(function sayHello() {}));
console.log(typeof(undefined));</code></pre>
</div>

<div class="tip-box mt-8">
  <div class="tip-box-title">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
      <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
    </svg>
    Summary
  </div>
  <p>Understanding JavaScript data types is like learning the basic building blocks of coding. Every piece of information in your program will be one of these types:</p>
  <ul class="mt-2 list-disc list-inside">
    <li><strong>Strings</strong> for text</li>
    <li><strong>Numbers</strong> for, well, numbers!</li>
    <li><strong>Booleans</strong> for yes/no decisions</li>
    <li><strong>Objects</strong> for grouping related information</li>
    <li><strong>Arrays</strong> for ordered lists</li>
    <li><strong>Functions</strong> for reusable actions</li>
    <li><strong>null/undefined</strong> for missing values</li>
  </ul>
</div>
` },
          { id: 'dynamic-typing', title: 'Dynamic Typing [15 min]', content: `
<h2>What is Dynamic Typing?</h2>

<p>JS is a dynamically typed language. A dynamically typed language is a programming language in which the type of a variable is determined at runtime, not at compile time.</p>

<p>In dynamic type languages, you can change the type of a variable during the program's execution. This is in contrast to statically typed languages where variable types are explicitly declared and checked at compile time.</p>

<div class="info-box">
  <div class="info-box-title">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clip-rule="evenodd" />
    </svg>
    Simple Explanation
  </div>
  <p>Think of variables in JavaScript like boxes that can hold different types of toys. You can put a toy car (number) in the box, then later remove it and put in a teddy bear (string), and then later replace it with a set of building blocks (array). The box (variable) stays the same, but what's inside can change completely!</p>
</div>

<h3>Basic Example</h3>

<pre><code>var x = 5;          // x is now of type number
x = "Hello, World!"; // x is now of type string
x = [1, 2, 3];      // x is now an array</code></pre>

<p>In the example above, the variable <code>x</code> changes its type three times:</p>
<ul>
  <li>First, it's a <strong>number</strong></li>
  <li>Then, it's a <strong>string</strong></li> 
  <li>Finally, it's an <strong>array</strong></li>
</ul>

<p>This is perfectly valid in JavaScript because it's dynamically typed!</p>

<div class="tip-box">
  <div class="tip-box-title">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
      <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
    </svg>
    Checking Types
  </div>
  <p>You can always check the current type of a variable using the <code>typeof</code> operator:</p>
  <pre><code>let value = 42;
console.log(typeof value);  // "number"

value = "Hello";
console.log(typeof value);  // "string"</code></pre>
</div>

<h2>Dynamic vs Static Typing</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
  <div class="p-4 bg-blue-50 rounded-lg dark:bg-gray-700">
    <h3 class="font-semibold text-blue-600 dark:text-blue-400">Dynamically Typed (JavaScript)</h3>
    <ul class="list-disc pl-5 mt-2">
      <li>Variable types are determined while program is running</li>
      <li>Variables can change types anytime</li>
      <li>No need to declare types in advance</li>
      <li>More flexible and faster to write</li>
      <li>Examples: JavaScript, Python, Ruby</li>
    </ul>
  </div>
  <div class="p-4 bg-green-50 rounded-lg dark:bg-gray-700">
    <h3 class="font-semibold text-green-600 dark:text-green-400">Statically Typed (Java, C++)</h3>
    <ul class="list-disc pl-5 mt-2">
      <li>Variable types are known before program runs</li>
      <li>Variables keep the same type throughout their life</li>
      <li>Need to declare types when creating variables</li>
      <li>More structured and catches errors earlier</li>
      <li>Examples: Java, C++, TypeScript</li>
    </ul>
  </div>
</div>

<h3>Comparing JavaScript (Dynamic) vs Java (Static)</h3>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
  <div class="p-4 bg-gray-50 rounded-lg dark:bg-gray-800">
    <h4 class="font-semibold">JavaScript (Dynamic)</h4>
    <pre><code>// Type can change
let age = 25;
age = "Twenty Five"; // This is fine!

// No type declarations needed
let name = "Alex";
let isStudent = true;</code></pre>
  </div>
  <div class="p-4 bg-gray-50 rounded-lg dark:bg-gray-800">
    <h4 class="font-semibold">Java (Static)</h4>
    <pre><code>// Type cannot change
int age = 25;
age = "Twenty Five"; // ERROR!

// Type declarations required
String name = "Alex";
boolean isStudent = true;</code></pre>
  </div>
</div>

<h2>Benefits of Dynamic Typing</h2>

<ul>
  <li><strong>Faster Development:</strong> No need to declare types, so you can code more quickly</li>
  <li><strong>Flexibility:</strong> Variables can adapt to different data types as needed</li>
  <li><strong>Less Code:</strong> Fewer lines of code since type declarations aren't needed</li>
  <li><strong>Great for Prototyping:</strong> Can build and test ideas quickly</li>
</ul>

<h2>Challenges of Dynamic Typing</h2>

<div class="warning-box">
  <div class="warning-box-title">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
    </svg>
    Watch Out!
  </div>
  <p>Dynamic typing can sometimes lead to unexpected bugs when types change in ways you didn't anticipate. For example:</p>
  
  <pre><code>// This might cause a bug if you expect a number
function calculateTotal(price, quantity) {
  return price * quantity;
}

let total = calculateTotal(10, "5"); // Returns "5555555555" (string concatenation) instead of 50!</code></pre>
</div>

<h2>Type Coercion in JavaScript</h2>

<p>Because JavaScript is dynamically typed, it often tries to automatically convert (coerce) values from one type to another when needed. This is called "type coercion" and can sometimes lead to unexpected results.</p>

<pre><code>// Examples of type coercion
console.log(5 + "5");     // "55" (number converted to string)
console.log("5" * 2);     // 10 (string converted to number)
console.log(true + 1);    // 2 (boolean converted to number: true = 1)
console.log(false + 1);   // 1 (boolean converted to number: false = 0)
console.log(null + 1);    // 1 (null converted to number: null = 0)
console.log("five" * 2);  // NaN (Not a Number - can't convert "five" to a number)</code></pre>

<div class="tip-box">
  <div class="tip-box-title">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
      <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
    </svg>
    Pro Tip
  </div>
  <p>Even though JavaScript allows dynamic typing, it's generally a good practice to keep variables consistent in their types. This makes your code more predictable and easier to debug.</p>
</div>

<h2>Real World Example</h2>

<p>Let's see how dynamic typing is used in a real-world scenario:</p>

<pre><code>// A shopping cart function that works with different types
function processItem(item) {
  // item could be a product ID (number), product name (string), 
  // or a product object with multiple properties
  
  if (typeof item === "number") {
    console.log("Looking up product #" + item);
    // Code to find product by ID
  }
  else if (typeof item === "string") {
    console.log("Looking up product named: " + item);
    // Code to find product by name
  }
  else if (typeof item === "object") {
    console.log("Processing product: " + item.name);
    // Code to process product object
  }
}

// These all work thanks to dynamic typing!
processItem(12345);
processItem("Headphones");
processItem({id: 9876, name: "Laptop", price: 999.99});</code></pre>

<div class="learner-activity my-6 p-6 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
  <h3 class="text-xl font-semibold mb-4">Try It Yourself:</h3>
  
  <pre><code>// Create a variable called "data"
// First, store your age as a number
// Then, change it to store your name as a string
// Finally, change it to store an object with both your age and name
// Use console.log and typeof to check the type after each change</code></pre>

  <div class="tip-box mt-4">
    <div class="tip-box-title">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
      </svg>
      Solution
    </div>
    <pre><code>let data = 15;
console.log(typeof data);  // "number"

data = "Emma";
console.log(typeof data);  // "string"

data = {name: "Emma", age: 15};
console.log(typeof data);  // "object"</code></pre>
  </div>
</div>

<h2>Summary</h2>

<div class="info-box">
  <div class="info-box-title">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clip-rule="evenodd" />
    </svg>
    Key Points
  </div>
  <ul class="list-disc pl-5">
    <li>JavaScript is dynamically typed - variables can change types</li>
    <li>Use <code>typeof</code> to check what type a variable currently is</li>
    <li>Dynamic typing makes coding faster but can lead to unexpected bugs</li>
    <li>JavaScript performs type coercion to automatically convert between types</li>
    <li>Try to keep variable types consistent when possible for cleaner code</li>
  </ul>
</div>
` },
          { id: 'null-undefined', title: 'null & undefined [5 min]', content: `
<h2>Understanding null and undefined in JavaScript</h2>

<p>JavaScript has two special values that represent the absence of a meaningful value: <code>null</code> and <code>undefined</code>. While they seem similar, they have important differences that every JavaScript programmer should understand.</p>

<details open>
  <summary class="font-semibold text-lg text-orange-500 cursor-pointer">undefined</summary>
  <div class="pl-4 mt-2">
    <p>undefined is a falsey value in JavaScript. A variable that has been declared but has not been assigned a value is said to have an <code>"undefined"</code> value. It essentially means the variable exists but lacks a meaningful value.</p>
    
    <div class="bg-gray-50 p-4 rounded-lg my-4 dark:bg-gray-800">
    <pre><code>var x;   // Declares the variable x but leaves it undefined
console.log(x);  // This will output "undefined"</code></pre>
    </div>

    <div class="info-box">
      <div class="info-box-title">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clip-rule="evenodd" />
        </svg>
        When does undefined occur?
      </div>
      <ul class="list-disc pl-5 mt-2">
        <li>When a variable is declared but not assigned a value</li>
        <li>When you try to access an object property that doesn't exist</li>
        <li>When a function doesn't explicitly return a value</li>
        <li>When a function parameter isn't provided</li>
      </ul>
    </div>

    <p class="mt-4">For example:</p>

    <div class="bg-gray-50 p-4 rounded-lg my-4 dark:bg-gray-800">
    <pre><code>// Variable without assignment
let student;
console.log(student);  // undefined

// Missing property
const car = {make: "Toyota"};
console.log(car.model);  // undefined

// Function with no return value
function greet() {
  console.log("Hello!");
}
const result = greet();
console.log(result);  // undefined

// Missing parameter
function sayHi(name) {
  console.log("Hi, " + name);
}
sayHi();  // "Hi, undefined"</code></pre>
    </div>
  </div>
</details>

<details open>
  <summary class="font-semibold text-lg text-orange-500 cursor-pointer">null</summary>
  <div class="pl-4 mt-2">
    <p>Null represents the intentional absence of any object value. It is often used to explicitly indicate that a variable should have no value or that an object property is empty.</p>
    
    <div class="bg-gray-50 p-4 rounded-lg my-4 dark:bg-gray-800">
    <pre><code>var y = null;  // Assigns the value null to the variable y
console.log(y);  // This will output "null"</code></pre>
    </div>

    <div class="tip-box">
      <div class="tip-box-title">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
        </svg>
        Common Uses for null
      </div>
      <p>You would use <code>null</code> when you want to explicitly indicate that a variable has no value. This is different from <code>undefined</code>, which is more of an unintentional or default absence of value.</p>
    </div>

    <p class="mt-4">For example:</p>

    <div class="bg-gray-50 p-4 rounded-lg my-4 dark:bg-gray-800">
    <pre><code>// Setting a variable to null to show it intentionally has no value
let userSelection = null;  // User hasn't selected anything yet

// Clearing a value
let username = "Alex";
username = null;  // Explicitly removing the value

// Common in functions that search for something
function findUser(id) {
  // If no user is found, return null
  return null;  // No user with this id exists
}</code></pre>
    </div>
  </div>
</details>

<h2>Null VS Undefined</h2>

<div class="bg-yellow-200 p-6 rounded-lg my-6 text-center dark:bg-yellow-900">
  <h3 class="text-xl font-bold mb-4">Null <span class="text-red-500">VS</span> Undefined</h3>
  
  <p class="mb-2">Both are <strong>Nullish</strong> & <strong>Falsy</strong> values</p>
  <p class="mb-4 text-lg font-bold">But</p>
  <p class="mb-6 text-lg"><code>null !== undefined</code></p>
  
  <div class="grid grid-cols-2 gap-8 text-left">
    <div>
      <p class="font-semibold">No value on purpose</p>
      <p>Defined by <span class="text-green-500">user</span></p>
      <p>type = object</p>
      <p class="text-red-500 mt-4">Bowl is empty <span class="ml-2">🍚</span></p>
    </div>
    <div>
      <p class="font-semibold">Declared but not defined</p>
      <p>Defined by <span class="text-green-500">JavaScript</span></p>
      <p>type = undefined</p>
      <p class="text-red-500 mt-4">Bowl doesn't even exist <span class="ml-2">❌</span></p>
    </div>
  </div>
</div>

<div class="warning-box">
  <div class="warning-box-title">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
    </svg>
    The Strange Case of typeof null
  </div>
  <p>One quirk in JavaScript is that <code>typeof null</code> returns <code>"object"</code>. This is actually considered a bug in the language that has persisted for historical reasons. Just remember that null is actually a primitive value, not an object.</p>
</div>

<h3>Comparing null and undefined</h3>

<div class="bg-gray-50 p-4 rounded-lg my-4 dark:bg-gray-800">
<pre><code>// Equality comparison
console.log(null == undefined);  // true (they are loosely equal)
console.log(null === undefined); // false (they are not strictly equal)

// Type checking
console.log(typeof null);       // "object" (a bug in JavaScript!)
console.log(typeof undefined);  // "undefined"

// Converting to boolean
console.log(Boolean(null));     // false
console.log(Boolean(undefined)); // false</code></pre>
</div>

<h3>Practical Example</h3>

<div class="bg-gray-50 p-4 rounded-lg my-4 dark:bg-gray-800">
<pre><code>function getUser(id) {
  // User lookup logic
  // ...
  
  if (userNotFound) {
    return null;  // Explicitly indicating no user found
  }
  
  // User found, return user object
}

const user = getUser(123);

// Check if user exists
if (user === null) {
  console.log("User not found");
} else {
  console.log("Welcome, " + user.name);
}</code></pre>
</div>

<div class="learner-activity my-6 p-6 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
  <h3 class="text-xl font-semibold mb-4">Practice Activity:</h3>
  
  <pre><code>// 1. Create a variable without assigning a value
// 2. Create another variable and set it to null
// 3. Check the type of both variables using typeof
// 4. Compare them with == and === and see the results
// 5. Try adding a number to each variable and see what happens</code></pre>

  <div class="tip-box mt-4">
    <div class="tip-box-title">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
      </svg>
      Solution
    </div>
    <pre><code>// 1. Create a variable without assigning a value
let a;
// 2. Create another variable and set it to null
let b = null;

// 3. Check the type of both variables using typeof
console.log(typeof a);  // "undefined"
console.log(typeof b);  // "object"

// 4. Compare them with == and ===
console.log(a == b);    // true (loose equality)
console.log(a === b);   // false (strict equality)

// 5. Try adding a number to each variable
console.log(a + 5);     // NaN (Not a Number)
console.log(b + 5);     // 5 (null is converted to 0)</code></pre>
  </div>
</div>

<h3>Best Practices</h3>

<div class="tip-box">
  <div class="tip-box-title">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
      <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
    </svg>
    When to Use Each
  </div>
  <ul class="list-disc pl-5 mt-2">
    <li>Use <code>null</code> when you want to explicitly indicate that a variable has no value</li>
    <li>Don't manually set variables to <code>undefined</code> - let JavaScript assign that itself</li>
    <li>Use the Nullish Coalescing operator <code>??</code> to provide fallbacks for both null and undefined values</li>
    <li>When checking for either value, <code>if (value == null)</code> will catch both null and undefined</li>
  </ul>
</div>

<h3>Example with Nullish Coalescing</h3>

<div class="bg-gray-50 p-4 rounded-lg my-4 dark:bg-gray-800">
<pre><code>// The ?? operator provides a default value if the left side is null or undefined
const username = null;
const defaultName = username ?? "Guest";
console.log(defaultName);  // "Guest"

const title = undefined;
const defaultTitle = title ?? "Untitled";
console.log(defaultTitle);  // "Untitled"

// This is better than using || which would also replace values like 0 or ""
const count = 0;
const defaultCount = count ?? 10;  // 0 is preserved
console.log(defaultCount);  // 0

const defaultCountWithOr = count || 10;  // 0 is falsy, so replaced
console.log(defaultCountWithOr);  // 10</code></pre>
</div>

<div class="info-box">
  <div class="info-box-title">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clip-rule="evenodd" />
    </svg>
    Summary
  </div>
  <ul class="list-disc pl-5">
    <li><code>undefined</code>: Default state of a variable that has been declared but not defined, determined by JavaScript</li>
    <li><code>null</code>: Intentional absence of any object value, explicitly assigned by the programmer</li>
    <li>Both are falsy values and loosely equal (<code>==</code>) to each other</li>
    <li>Remember the analogy: null is an empty bowl, undefined is no bowl at all</li>
  </ul>
</div>
` },
          { id: 'bigint-symbols', title: 'bigInt & Symbols [45 min]', content: `
<h2>BigInt and Symbol Types in JavaScript</h2>

<p>JavaScript has two interesting but less commonly used primitive types that were added in more recent versions: <code>BigInt</code> and <code>Symbol</code>. Let's understand what they are and when to use them.</p>

<details open>
  <summary class="font-semibold text-lg text-orange-500 cursor-pointer">bigInt</summary>
  <div class="pl-4 mt-2">
    <h3>What is BigInt?</h3>
    
    <p>In JavaScript, the regular <code>number</code> type cannot safely represent integer values larger than <code>2^53-1</code> (that's 9,007,199,254,740,991) or less than <code>-(2^53-1)</code> for negatives.</p>
    
    <div class="info-box">
      <div class="info-box-title">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clip-rule="evenodd" />
        </svg>
        Simple Explanation
      </div>
      <p>Think of BigInt like a special calculator for really, really big numbers - numbers so big that regular JavaScript can't handle them accurately.</p>
    </div>
    
    <h3>Creating BigInt Values</h3>
    
    <p>The <code>BigInt</code> type was added to JavaScript to represent integers of arbitrary length. You can create a BigInt by appending the letter <code>n</code> to the end of an integer:</p>
    
    <div class="bg-gray-50 p-4 rounded-lg my-4 dark:bg-gray-800">
    <pre><code>// The "n" at the end means it's a BigInt
const regularNumber = 123;         // Regular number
const bigNumber = 123n;            // BigInt

// Very large numbers
const hugeNumber = 9007199254740992n;

// You can also create BigInt using the BigInt() function
const alsoHuge = BigInt("9007199254740992");

console.log(typeof bigNumber);  // "bigint"</code></pre>
    </div>
    
    <h3>When to Use BigInt</h3>
    
    <ul class="list-disc pl-5 mt-2">
      <li>When working with very large integers (beyond the safe integer limits)</li>
      <li>In financial calculations where precision is crucial</li>
      <li>When dealing with large IDs or timestamps in microseconds</li>
      <li>In cryptography applications</li>
    </ul>
    
    <div class="warning-box">
      <div class="warning-box-title">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
        </svg>
        Important Notes
      </div>
      <ul class="list-disc pl-5 mt-2">
        <li>You can't mix BigInt and regular numbers in operations (<code>1n + 2</code> will cause an error)</li>
        <li>Math operations like <code>+</code>, <code>-</code>, <code>*</code>, and <code>/</code> work between BigInts</li>
        <li>Division with BigInts always truncates toward zero (removes decimal part)</li>
      </ul>
    </div>
    
    <h3>Examples</h3>
    
    <div class="bg-gray-50 p-4 rounded-lg my-4 dark:bg-gray-800">
    <pre><code>// Maximum safe integer in JavaScript
const maxSafeInteger = Number.MAX_SAFE_INTEGER;
console.log(maxSafeInteger);  // 9007199254740991

// What happens if we go beyond?
console.log(maxSafeInteger + 1);  // 9007199254740992 (correct)
console.log(maxSafeInteger + 2);  // 9007199254740992 (incorrect! should be 9007199254740993)

// Using BigInt instead
console.log(BigInt(maxSafeInteger) + 1n);  // 9007199254740992n (correct)
console.log(BigInt(maxSafeInteger) + 2n);  // 9007199254740993n (correct)</code></pre>
    </div>
  </div>
</details>

<details open>
  <summary class="font-semibold text-lg text-orange-500 cursor-pointer">symbol</summary>
  <div class="pl-4 mt-2">
    <h3>What is Symbol?</h3>
    
    <p>The <code>Symbol</code> type was introduced in ES6 (2015) to create unique identifiers for object properties. Every Symbol value is guaranteed to be unique.</p>
    
    <div class="info-box">
      <div class="info-box-title">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clip-rule="evenodd" />
        </svg>
        Simple Explanation
      </div>
      <p>Think of Symbols like special name tags that are guaranteed to be 100% unique, even if they have the same text on them. They're perfect when you need a truly unique identifier.</p>
    </div>
    
    <h3>Creating Symbols</h3>
    
    <p>We can create a symbol in any of these ways:</p>
    
    <div class="bg-gray-50 p-4 rounded-lg my-4 dark:bg-gray-800">
    <pre><code>// Creating symbols
let symbol1 = Symbol('hello');  // Symbol with description 'hello'
let symbol2 = Symbol.for('world');  // Symbol in global Symbol registry

console.log(typeof symbol1);  // "symbol"
console.log(symbol1 === Symbol('hello'));  // false (each Symbol is unique)</code></pre>
    </div>
    
    <h3>Symbol() vs Symbol.for()</h3>
    
    <p>There are two ways to create symbols, and they behave differently:</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div class="p-4 bg-blue-50 rounded-lg dark:bg-gray-700">
        <h4 class="font-semibold text-blue-600 dark:text-blue-400">Symbol(description)</h4>
        <ul class="list-disc pl-5 mt-2">
          <li>Creates a brand new symbol each time</li>
          <li>Always unique, even with same description</li>
          <li>Not stored in any registry</li>
        </ul>
      </div>
      <div class="p-4 bg-green-50 rounded-lg dark:bg-gray-700">
        <h4 class="font-semibold text-green-600 dark:text-green-400">Symbol.for(key)</h4>
        <ul class="list-disc pl-5 mt-2">
          <li>Checks global symbol registry first</li>
          <li>Returns existing symbol if key exists</li>
          <li>Creates and registers new symbol if key doesn't exist</li>
        </ul>
      </div>
    </div>
    
    <div class="bg-gray-50 p-4 rounded-lg my-4 dark:bg-gray-800">
    <pre><code>// Symbol() always creates a new unique symbol
let s1 = Symbol('hello');
let s2 = Symbol('hello');
console.log(s1 === s2);  // false (different symbols)

// Symbol.for() returns same symbol for same key
let sf1 = Symbol.for('world');
let sf2 = Symbol.for('world');
console.log(sf1 === sf2);  // true (same symbol)</code></pre>
    </div>
    
    <h3>Using Symbols as Object Keys</h3>
    
    <p>The primary use case for Symbols is as object property keys:</p>
    
    <div class="bg-gray-50 p-4 rounded-lg my-4 dark:bg-gray-800">
    <pre><code>const MY_KEY = Symbol('myKey');

// Create an object with a symbol key
const obj = {
  name: "Regular property",
  [MY_KEY]: "Secret property"  // Square brackets needed for symbol keys
};

console.log(obj.name);     // "Regular property"
console.log(obj[MY_KEY]);  // "Secret property"

// Symbol properties are not included in common operations
console.log(Object.keys(obj));  // ["name"] (no symbols)
for (let key in obj) {
  console.log(key);  // Only logs "name"
}</code></pre>
    </div>
    
    <h3>Why Use Symbols?</h3>
    
    <ul class="list-disc pl-5 mt-2">
      <li>To create truly unique property keys that won't conflict with other keys</li>
      <li>To add "hidden" properties to objects that won't show up in loops or common operations</li>
      <li>To avoid name collisions when multiple libraries/modules modify the same object</li>
      <li>For special built-in JavaScript behaviors like iterators and more</li>
    </ul>
    
    <h3>Real-World Example: User Emotions Tracker</h3>
    
    <p>Let's create a better version of the emotion tracker that properly uses symbols for unique tracking of each user's emotion history:</p>
    
    <div class="bg-gray-50 p-4 rounded-lg my-4 dark:bg-gray-800">
    <pre><code>// Create an object to store all user data
const userData = {};

// Create a function that uses symbols to track each user's emotion history
function trackEmotion(name, emotion) {
  // Create a symbol unique to this user if it doesn't exist
  if (!userData[name]) {
    // Create a symbol with the user's name as description
    const userSymbol = Symbol(name);
    
    // Initialize the user data with an array to track emotion history
    userData[name] = {
      userKey: userSymbol,
      emotions: [emotion]
    };
  } else {
    // Add to existing emotion history
    userData[name].emotions.push(emotion);
  }
}

// Track various users and emotions
trackEmotion("Alex", "happy");
trackEmotion("Taylor", "sad");
trackEmotion("Alex", "excited");  // Same user, new emotion
trackEmotion("Jamie", "calm");
trackEmotion("Alex", "tired");    // Same user, third emotion

// Get most recent emotion for a user
function getLatestEmotion(name) {
  if (userData[name] && userData[name].emotions.length > 0) {
    const emotions = userData[name].emotions;
    return emotions[emotions.length - 1];
  }
  return "unknown";
}

console.log("Alex is feeling:", getLatestEmotion("Alex"));      // "tired"
console.log("Taylor is feeling:", getLatestEmotion("Taylor"));  // "sad"
console.log("Jamie is feeling:", getLatestEmotion("Jamie"));    // "calm"
</code></pre>
    </div>
    
    <div class="tip-box">
      <div class="tip-box-title">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
        </svg>
        Note on The Original Example
      </div>
      <p>The code example in the image had an error: <code>Symbol.name</code> is not a valid property. Instead, you'd need to create a unique symbol for each user with <code>Symbol(name)</code>, as shown in our fixed example above.</p>
    </div>
  </div>
</details>

<div class="learner-activity my-6 p-6 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
  <h3 class="text-xl font-semibold mb-4">Practice Activity:</h3>
  
  <pre><code>// 1. Create a regular number and then the same number as a BigInt
// 2. Try adding them together and see what error occurs
// 3. Create two symbols with the same description
// 4. Check if they're equal to each other
// 5. Use Symbol.for() to create two symbols and check if they're equal</code></pre>

  <div class="tip-box mt-4">
    <div class="tip-box-title">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
      </svg>
      Solution
    </div>
    <pre><code>// 1. Create a regular number and the same as BigInt
const num = 42;
const bigNum = 42n;
console.log(typeof num);    // "number"
console.log(typeof bigNum); // "bigint"

// 2. Try adding them together
try {
  console.log(num + bigNum);
} catch (error) {
  console.log("Error:", error.message); // Cannot mix BigInt and other types
}

// 3. Create two symbols with the same description
const sym1 = Symbol("test");
const sym2 = Symbol("test");

// 4. Check if they're equal
console.log(sym1 === sym2); // false (unique symbols)

// 5. Use Symbol.for()
const regSym = Symbol.for("registered");
const sameSym = Symbol.for("registered");
console.log(regSym === sameSym); // true (same symbol from registry)</code></pre>
  </div>
</div>

<div class="info-box">
  <div class="info-box-title">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clip-rule="evenodd" />
    </svg>
    Summary
  </div>
  <ul class="list-disc pl-5">
    <li><code>BigInt</code>: For working with integers larger than what regular JavaScript numbers can handle safely</li>
    <li><code>Symbol</code>: For creating guaranteed unique identifiers, primarily used as object property keys</li>
    <li>Both are recent additions to JavaScript that help solve specific problems</li>
    <li>Most everyday JavaScript programming doesn't require these types, but they're valuable in specific situations</li>
  </ul>
</div>
` },
          { id: 'operators-expressions', title: 'Operators and Expressions', content: 'Understanding the difference between statements and expressions in JavaScript.' },
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