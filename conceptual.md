### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
React Router is a library for managing routing and navigation in a React application. Its main purpose is to enable the development of single-page applications (SPAs) by allowing developers to define routes and navigate between different views or components without causing a full page reload.

- What is a single page application?
A single-page application (SPA) is a web application or website that loads a single HTML page and dynamically updates its content as the user interacts with the application.

- What are some differences between client side and server side routing?
 In client-side routing, navigation and routing are handled on the client (browser) without making full-page requests to the server. It updates the URL and renders different components based on the URL changes. Client-side routing is faster and provides a more fluid user experience. Server-side routing involves making requests to the server for each new page or route. The server responds with a full HTML page, which can be slow and less responsive. Server-side routing is more common in traditional multi-page applications.

- What are two ways of handling redirects with React Router? When would you use each?
<Redirect> Component: You can use the <Redirect> component provided by React Router to programmatically redirect users to another route. This is useful when you want to redirect users based on certain conditions or user interactions. history.push() Method: You can use the history.push() method provided by the useHistory hook or withRouter HOC to programmatically navigate to another route. This is typically used when you need to redirect users after an event, such as form submission.

- What are two different ways to handle page-not-found user experiences using React Router? 
Custom 404 Route: Define a route with a wildcard path (*) that matches any URL not matched by other routes. Then, render a custom "Page Not Found" component for this route.
Redirect to a 404 Route: You can use a redirect in the catch-all route to direct users to a designated "Page Not Found" route when no other routes match.

- How do you grab URL parameters from within a component using React Router?
You can access URL parameters using the useParams hook provided by React Router. For example, if your route is defined as /users/:id, you can access the id parameter 

- What is context in React? When would you use it?
ontext in React is a way to share data and state between components without having to pass props down through multiple levels of the component tree. It is typically used for global state management or when data needs to be accessible by multiple components at different levels in the hierarchy.

- Describe some differences between class-based components and function
  components in React.Syntax: Class components use the class syntax, while function components use a regular JavaScript function.
State Management: Class components can manage state using this.state and lifecycle methods like componentDidMount, whereas function components use the useState and useEffect hooks for state and side effects.
Lifecycle Methods: Class components have access to lifecycle methods like componentDidMount, componentDidUpdate, etc., while function components use useEffect to manage side effects and mimic lifecycle behavior.
Readability and Conciseness: Function components are often considered more concise and easier to read, especially for simple components.

- What are some of the problems that hooks were designed to solve?
Complexity of State Logic: Hooks were designed to simplify the management of component state and side effects, reducing the need for complex class-based component structures.
Reuse of Stateful Logic: Hooks make it easier to reuse stateful logic across different components without introducing render props or higher-order components.
Side Effects: The useEffect hook provides a unified way to handle side effects, such as data fetching, subscriptions, and DOM manipulations, in a functional component.
Improved Component Organization: Hooks encourage organizing code based on logic rather than lifecycle methods, leading to cleaner and more maintainable code.
Simplification of Component Lifecycle: Hooks simplify the component lifecycle by replacing numerous lifecycle methods with a single hook (useEffect).