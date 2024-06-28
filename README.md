# FullStack Authentication System with Redux and Next.js

## Overview
This project is a simple username/password authentication system that uses Redux for state management and Next.js for both the front-end and back-end. The system includes API endpoints with bearer token authentication and a custom `useAuthSession` hook to manage user sessions on the client side.

## Features

- User login and logout functionality.
- Bearer token authentication for securing API endpoints.
- Custom `useAuthSession` hook to manage authentication sessions.
- Form validation with error notifications using toast messages.
- Styled login form with Tailwind CSS.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/himanshu1161/LoginAuthentication/
   cd auth-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

### Login Form

The login form is located on the main page (`pages/index.js`). It includes fields for the username and password, and uses Tailwind CSS for styling.
Username- Himanshu ,Password - pass9582 (for demo)

### Authentication Flow

1. **Login:**

   - The user enters their username and password.
   - On form submission, an API request is sent to `/api/login`.
   - If successful, a token is stored in the Redux store and the user is considered authenticated.

2. **Session Management:**

   - The custom `useAuthSession` hook manages the user session.
   - It fetches user data from the `/api/user` endpoint using the stored token.
   - The user data is then stored in the Redux store.

3. **Logout:**

   - The user can log out by clicking the logout button.
   - The token and user data are cleared from the Redux store.

## API Endpoints

### `POST /api/login`

- **Description:** Authenticates the user and returns a token.
- **Request Body:** `{ "username": "user", "password": "pass" }`
- **Response:** `{ "token": "dummy-token" }` or `{ "error": "Invalid credentials" }`

### `GET /api/user`

- **Description:** Returns user data if the request contains a valid token.
- **Headers:** `Authorization: Bearer dummy-token`
- **Response:** `{ "username": "user" }` or `{ "error": "Unauthorized" }`

## Custom Hook: `useAuthSession`

This hook is located in `hooks/useAuthSession.js` and manages the user's authentication session.

### Methods

- `login(token)`: Sets the authentication token and fetches user data.
- `logout()`: Clears the authentication token and user data.

### Usage

```javascript
const { user, login, logout } = useAuthSession();
```

- `user`: The authenticated user's data.
- `login`: Function to log in the user.
- `logout`: Function to log out the user.

## Styling

The project uses Tailwind CSS for styling. The styles are defined in `styles/globals.css` and applied directly to the JSX elements using Tailwind classes.

## Toast Notifications

Toast notifications are handled by `react-toastify`. The `Toast` component is included in `components/Toast.js` and configured in `pages/_app.js`.

## Contributing

Feel free to submit issues or pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.
