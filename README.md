# pablo-router

**pablo-router** is a library that allows you to create custom routers for your React web applications. Inspired by the routing functionalities provided by React Router, this package gives you the flexibility to design and customize your own router according to the specific needs of your project.

## Key Features:

- **Flexible Components**: Use the `Link`, `Route`, and `Routes` components to define routes and links within your application intuitively.
- **Full Control**: Design routing behavior exactly as you need it, without relying on predefined routers.
- **Reactive State Management**: Maintain reactive state of current routes in your application.
- **Easy Integration**: Easily integrate this custom router into your existing React applications.
- **Performance Optimized**: Prioritize efficiency and loading speed for an optimal user experience.

## Installation

You can install **pablo-router** from npm using:

npm install pablo-router


## Basic Usage

Here's a basic example of how you can use **pablo-router** in your React application:

```jsx
import React from 'react';
import { Routes, Route, Link } from 'pablo-router';

function App() {
  return (
      <Routes>
        <Route path="/" component={<Home />} />
        <Route path="/about" component={<About />} />
        <Route path="/contact" component={<Contact />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <>
      <h1>Home</h1>;
      <Link to='/about' t>Go to about  </Link>
    </>
  )
}

function About() {
  return <h1>About</h1>;
}

function Contact() {
  return <h1>Contact</h1>;
}
export default App;
```
We hope this introduction is helpful for users who want to implement a custom router in their React applications! If you have any questions or suggestions, feel free to open an issue in the GitHub repository.
