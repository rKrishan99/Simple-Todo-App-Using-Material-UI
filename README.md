# Simple Todo App using React.js and Material UI

This is a simple Todo application built with **React.js** and **Material UI**. The app fetches a list of todos from an external API, displays them, and allows users to view the details of individual todos. It demonstrates the use of React hooks (`useState`, `useEffect`), API calls, and Material UI components for building a clean, responsive user interface.

## Features

- Fetches and displays a list of todos from a REST API
- Displays individual todo details in a popup dialog
- Uses Material UI for responsive and modern design
- Handles loading and error states
- Modularized with components for reusability

## Demo


![screencapture-localhost-5173-2024-10-20-13_21_51](https://github.com/user-attachments/assets/6e9fe2fe-0e8c-488b-94c9-a29ddfc366c1)


![Screenshot 2024-10-20 132220](https://github.com/user-attachments/assets/5a3ff337-a5f7-4c08-b4ad-755edca3d28f)

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/rKrishan99/Simple-Todo-App-Using-Material-UI.git

   Navigate to the project folder:

2. Navigate to the project folder:
cd todo-app

3. Install the necessary dependencies:
npm install

4. Start the development server:
npm run dev

The app should now be running on http://localhost:5173.

## Dependencies
The project uses the following dependencies:

- React.js: A JavaScript library for building user interfaces.
- Material UI: A popular React UI framework for building responsive and modern user interfaces.
- @mui/material: Core Material UI components.
- @mui/icons-material: Material icons for UI design.

## Project Structure

.
├── public              # Static files
├── src
│   ├── components      # Reusable components
│   │   ├── todo-item   # Todo item component
│   │   └── todo-details # Todo details dialog component
│   ├── App.js          # Main app component
│   ├── styles.module.css # Styling for the app
│   └── index.js        # Entry point of the app
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation


## API Used

The app uses the DummyJSON Todos API for fetching the list of todos and their details.

- GET https://dummyjson.com/todos – Fetches a list of todos.
- GET https://dummyjson.com/todos/{id} – Fetches details of a specific todo by ID.

## How It Works
- List of Todos: The app fetches the list of todos from the API when the component first mounts using the useEffect hook.
- Todo Details: Clicking on a todo displays its details in a popup dialog by making another API call to fetch the detailed information.
- Loading State: While data is being fetched, a skeleton loader (Material UI component) is shown to indicate that content is loading.
- Error Handling: If there is an error while fetching data, an error message is displayed.


## Available Scripts

In the project directory, you can run:
- npm start: Runs the app in the development mode.
- npm test: Launches the test runner.
- npm run build: Builds the app for production.


## Future Improvements
- Add user authentication to allow personalized todo lists.
- Add features to create, update, and delete todos.
- Improve error handling with more descriptive messages.
- Add more detailed styling and responsiveness for mobile devices.

## Contributing
Feel free to fork this project, submit pull requests, or file issues. Contributions are welcome!

License
This project is licensed under the MIT License - see the LICENSE file for details.

Contact
For any questions or suggestions, please reach out:

GitHub: rKrishan99


### Explanation:
- **Introduction**: Briefly describes what the project is and what it does.
- **Features**: Lists the main features of the app.
- **Demo**: Placeholder for an image or GIF of the app (you can add one later).
- **Installation**: Step-by-step guide for setting up the project locally.
- **Dependencies**: Lists the key libraries used in the project.
- **Project Structure**: Provides an overview of the file structure.
- **API Used**: Describes the external API being used.
- **How It Works**: Explains how the app functions.
- **Future Improvements**: Lists potential future enhancements.
- **Contributing**: Invites collaboration.
- **License**: Provides licensing information.

You can customize it with your details like GitHub username, email, and add any additional information specific to your project.

