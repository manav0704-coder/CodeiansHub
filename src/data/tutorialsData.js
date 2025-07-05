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
          { id: 'introduction', title: 'Introduction to JavaScript', content: 'JavaScript is a programming language that enables interactive web pages. It is an essential part of web applications, and almost every website uses it for client-side page behavior.' },
          { id: 'variables', title: 'Variables and Data Types', content: 'JavaScript has several data types: String, Number, Boolean, Object, Array, Null and Undefined. Variables can be declared using let, const, or var keywords.' },
          { id: 'operators', title: 'Operators and Expressions', content: 'JavaScript supports various operators for arithmetic, comparison, logical operations, and more. Expressions combine variables, values, and operators.' },
          { id: 'conditionals', title: 'Conditional Statements', content: 'Conditional statements like if, else if, and else let you execute different code blocks based on different conditions.' },
          { id: 'loops', title: 'Loops and Iterations', content: 'JavaScript provides different types of loops like for, while, do...while, and for...of to repeatedly run a block of code.' },
        ],
      },
      {
        id: 'intermediate',
        title: 'Intermediate JavaScript',
        chapters: [
          { id: 'functions', title: 'Functions', content: 'Functions are reusable blocks of code that perform a specific task. They can take parameters and return values.' },
          { id: 'arrays', title: 'Arrays and Array Methods', content: 'Arrays store multiple values in a single variable. JavaScript provides many methods to manipulate arrays like push, pop, slice, and more.' },
          { id: 'objects', title: 'Objects and Object Methods', content: 'Objects are collections of key-value pairs. They can contain properties and methods to represent real-world entities.' },
          { id: 'dom', title: 'DOM Manipulation', content: 'The Document Object Model (DOM) represents the structure of an HTML document. JavaScript can modify this structure to update the webpage dynamically.' },
          { id: 'events', title: 'Events and Event Handling', content: 'JavaScript can respond to user interactions like clicks, keypresses, and form submissions through event listeners.' },
        ],
      },
      {
        id: 'advanced',
        title: 'Advanced JavaScript',
        chapters: [
          { id: 'async', title: 'Asynchronous JavaScript', content: 'Asynchronous programming in JavaScript involves Promises, async/await, and callbacks to handle operations that take time to complete.' },
          { id: 'fetch', title: 'Fetch API and AJAX', content: 'The Fetch API provides an interface for fetching resources across the network, replacing the older XMLHttpRequest.' },
          { id: 'es6', title: 'ES6+ Features', content: 'Modern JavaScript includes features like arrow functions, destructuring, template literals, spread/rest operators, and more.' },
          { id: 'modules', title: 'JavaScript Modules', content: 'Modules allow you to break up your code into separate files, making it more maintainable and reusable.' },
          { id: 'patterns', title: 'Design Patterns', content: 'JavaScript design patterns are reusable solutions to commonly occurring problems in software design.' },
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
    image: 'https://images.unsplash.com/photo-1648137067706-a1171fc2f777',
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