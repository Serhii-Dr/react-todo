# React Todo App

A simple React Todo app with the ability to add, delete, and persist todos using localStorage.

## Features

- Add new todos
- Delete individual todos
- Persistence through localStorage
- User-friendly interface

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/Serhii-Dr/react-todo.git
    ```

2. Navigate to the project directory:

    ```bash
    cd react-todo
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

### Usage

To start the development server, run:

  ```bash
    npm run dev
  ```
Visit http://localhost:5173/ in your browser to view the app.

- **Adding Todo:**
  - Type your todo in the input field (also add priority for your task)
  - Click the "Add Todo" button.

- **Deleting Todo:**
  - Hover over a todo item.
  - Click the delete button.

### LocalStorage Persistence
The app uses localStorage to persist todos even after a page refresh. This means your todos will be saved locally and retrieved when you revisit the app.

### Project Structure
  - src/: Contains the source code.
  - index.html/: HTML template.
  - node_modules/: Dependencies installed by npm.

### Technologies Used
 - React
 - Vite
 - localStorage

### Contributing
If you'd like to contribute or report issues, feel free to create a pull request or open an issue.

### License
This project is licensed under the MIT License.