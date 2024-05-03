# Rick and Morty Application
This is a web application built with SvelteKit and TypeScript, designed to fetch and display character data from the Rick and Morty API. Users can search for characters by name, view character details, and manage a list of their favorite characters. The application also includes user authentication, allowing users to sign in, like characters, and view their favorites.

## Features

- **Frontend**:
  - Fetch character data from the Rick and Morty API.
  - Display a list of characters with pagination.
  - Implement search functionality to filter characters by name.
  - Display a "not found" message if no characters match the search query.
  - Clicking on a character's name leads to a details page.
  
- **User Authentication**:
  - JWT-based authentication system.
  - Login and signup functionality.
  - Protected routes that require authentication.
  - Users can like characters and manage their favorite characters.
  - Liked characters are displayed on a favorites page.
  - Users can remove characters from their favorites list.

- **Backend**:
  - SQLite database used for storing user data and character likes.
  - CRUD operations for characters and user favorites.

## Tech Stack

- SvelteKit
- TypeScript
- SQLite
- JWT (JSON Web Tokens)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/Flokots/rick-and-morty-application.git
   ```
2. Navigate into the project directory:
   ```
   cd rick-and-morty-application
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Run the development server:
   ```
   npm run dev
   ```
   The app should now be running on http://localhost:3000.
5. Install SQLite:
   ```
   npm install sqlite3
   ```

### Usage

- **Searching for Characters**: Enter a character's name in the search bar to find matching characters.
- **Viewing Character Details**: Click on a character's name to view more details.
- **User Authentication**: Sign up or log in to manage your favorites.
- **Managing Favorites**: Like characters to add them to your favorites list. View your favorites on the favorites page.

### Future Plans
 - Browser's back button functionality is implemented to take the user back to the exact same page they were on.

### Acknowledgments
* [Rick and Morty API](https://rickandmortyapi.com/) for the character data.
* [SvelteKit](https://kit.svelte.dev/) for the frontend framework.
* [SQLite](https://www.sqlite.org/index.html) for the database.
  
### License
This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
