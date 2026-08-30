# Fast React Pizza

A modern pizza ordering web application built with React and Redux Toolkit.

The project simulates a real-world food ordering workflow where users can browse the menu, manage their cart, create
orders, use their current location to automatically retrieve their address, and track existing orders.

This project focuses on practical React application architecture, state management, asynchronous operations, API
integration, and React Router's Data APIs.

---

## Features

- Browse available pizzas from a remote API
- Add pizzas to the shopping cart
- Increase and decrease item quantities
- Remove individual items from the cart
- Clear the entire cart
- Real-time cart quantity and total price calculation
- Customer name management with Redux
- Create new pizza orders
- Phone number validation
- Priority order option with additional cost
- Search orders by order ID
- View order status and estimated delivery time
- Automatically retrieve the user's current location
- Reverse geocoding to convert coordinates into a readable address
- Loading and error states
- Responsive user interface
- Client-side routing
- Route-level data loading
- Form actions and redirects
- Centralized API service functions
- Feature-based project structure

---

## Tech Stack

### Core

- React
- React DOM
- JavaScript
- Vite

### State Management

- Redux Toolkit
- React Redux
- `createSlice`
- `createAsyncThunk`
- Redux Selectors

### Routing

- React Router DOM
- React Router Data APIs
- `loader`
- `action`
- `useLoaderData`
- `useActionData`
- `useNavigation`
- `useFetcher`
- `redirect`

### Styling

- Tailwind CSS
- Responsive Utility Classes

### Code Quality

- ESLint
- Prettier
- Prettier Tailwind CSS Plugin

### APIs

- Fast React Pizza API
- Browser Geolocation API

---

## Application Architecture

The project follows a feature-based architecture where application logic is grouped by domain rather than by component
type.

```text
src/
├── features/
│   ├── cart/
│   │   ├── Cart.jsx
│   │   ├── CartItem.jsx
│   │   ├── CartOverview.jsx
│   │   ├── DeleteItem.jsx
│   │   ├── EmptyCart.jsx
│   │   ├── UpdateItemQuantity.jsx
│   │   └── cartSlice.js
│   │
│   ├── menu/
│   │   ├── Menu.jsx
│   │   └── MenuItem.jsx
│   │
│   ├── order/
│   │   ├── CreateOrder.jsx
│   │   ├── Order.jsx
│   │   ├── OrderItem.jsx
│   │   └── SearchOrder.jsx
│   │
│   └── user/
│       ├── CreateUser.jsx
│       ├── Username.jsx
│       └── userSlice.js
│
├── services/
│   ├── apiGeocoding.js
│   └── apiRestaurant.js
│
├── ui/
│   ├── AppLayout.jsx
│   ├── Button.jsx
│   ├── Error.jsx
│   ├── Header.jsx
│   ├── Home.jsx
│   ├── LinkButton.jsx
│   └── Loader.jsx
│
├── utils/
│   └── helpers.js
│
├── App.jsx
├── main.jsx
├── index.css
└── store.js
```

This structure keeps business logic, reusable UI components, API communication, and application state separated.

---

## State Management with Redux Toolkit

Redux Toolkit is used to manage global application state.

The application currently contains two main slices:

```text
user
cart
```

### Cart State

The cart slice manages:

- Adding products
- Removing products
- Increasing quantity
- Decreasing quantity
- Clearing the cart
- Calculating total quantity
- Calculating total price
- Getting the quantity of a specific pizza

---

## Asynchronous State with `createAsyncThunk`

The project uses Redux Toolkit's `createAsyncThunk` for asynchronous operations.


---

## React Router Data APIs

The project uses React Router Data APIs for data loading and form actions.

Instead of handling every API request directly inside React components with `useEffect`, route-level loaders are used
where appropriate.

---

## Form Handling

Order creation is implemented using React Router's `<Form>` and route `action`.



---

## Geolocation & Reverse Geocoding

The application can retrieve the user's current geographic location using the browser's Geolocation API.

The resulting address can be automatically populated in the order form while still allowing the user to edit it
manually.

---

### Restaurant API

`apiRestaurant.js` handles communication with the restaurant API, including:

- Fetching the menu
- Fetching orders
- Creating orders
- Retrieving order details


### Geocoding API

`apiGeocoding.js` is responsible for reverse geocoding.

It converts:

```text
Latitude + Longitude
```

into:

```text
Readable Address
```

Keeping API communication inside dedicated service modules prevents UI components from being tightly coupled to external
APIs.

---

## Routing

The main application routes include:

| Route             | Purpose            |
|-------------------|--------------------|
| `/`               | Home page          |
| `/menu`           | Pizza menu         |
| `/cart`           | Shopping cart      |
| `/order/new`      | Create a new order |
| `/order/:orderId` | View order details |

The application also uses route-level error handling.

---

## User Flow

The main application workflow is:

```text
Home
 │
 ├── Enter Name
 │
 ▼
Menu
 │
 ├── Add Pizza
 ├── Update Quantity
 └── Remove Pizza
 │
 ▼
Cart
 │
 ▼
Create Order
 │
 ├── Customer Information
 ├── Phone Validation
 ├── Address
 ├── Geolocation
 └── Priority Order
 │
 ▼
Order Created
 │
 ▼
Order Details
 │
 └── Delivery Status
```

---

## UI & Responsive Design

The user interface is built with Tailwind CSS and uses responsive utility classes for different screen sizes.


---

## Error & Loading Handling

The application handles different asynchronous states throughout the application.

---

### Navigation Loading

React Router's `useNavigation()` is used to detect route transitions.

---

### Form Submission

The same API can be used to detect form submission.

---

### Redux Async Operations

The address lookup manages asynchronous states.

---



## Utility Functions

Common formatting and calculation logic is centralized.



The utility functions include:

- Currency formatting
- Date formatting
- Delivery time calculations

---

## Installation

Clone the repository:

```bash
git clone https://github.com/Abolfazl-Mohammadi-06/fast-react-pizza.git
```

Navigate into the project directory:

```bash
cd fast-react-pizza
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## Available Scripts

### Development

```bash
npm run dev
```

Starts the Vite development server.

### Production Build

```bash
npm run build
```

Creates an optimized production build.


### Lint

```bash
npm run lint
```

Runs ESLint to check the codebase for potential issues.

---

## What I Practiced

This project helped me practice and apply several real-world frontend development concepts:

- Building React applications with component-based architecture
- Managing global state with Redux Toolkit
- Designing Redux slices
- Creating reusable Redux selectors
- Handling asynchronous Redux logic with `createAsyncThunk`
- Managing loading and error states
- Working with REST APIs
- Separating API communication from UI components
- Using React Router Data APIs
- Implementing route loaders and actions
- Handling form submissions
- Client-side validation
- Working with browser Geolocation APIs
- Implementing reverse geocoding
- Building reusable UI components
- Creating responsive interfaces with Tailwind CSS
- Organizing a feature-based React application
- Using ESLint and Prettier for code quality

---

## Project Structure Principles

### Feature-based Organization

Related components and state logic are grouped by feature:

```text
features/
├── cart/
├── menu/
├── order/
└── user/
```

### Separation of Concerns

API communication is separated from UI logic:

```text
Components
     ↓
Services
     ↓
External APIs
```

Global application state is managed through Redux, while reusable presentation components are kept under the `ui`
directory.

Utility functions are centralized inside the `utils` directory.

This organization makes the codebase easier to understand, maintain, and extend.

---



## Project Goal

The goal of this project was not only to build a pizza ordering interface, but also to implement a realistic React
application using modern frontend development patterns.

The project focuses on:

- Global state management
- Asynchronous operations
- REST API integration
- Client-side routing
- Form handling
- Form validation
- Geolocation
- Reverse geocoding
- Responsive UI
- Feature-based architecture

---

## Author

**Abolfazl Mohammadi**

Frontend Developer focused on React and modern JavaScript development.