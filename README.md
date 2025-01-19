# Trackbag: To-Do List with Persistent State

## Project Overview

Trackbag is a to-do list application built with **React**, **Zustand**, and **Vite**. The app allows users to manage tasks with persistent state, which is saved even after refreshing the page. Users can add, remove, and toggle task completion, as well as use bulk actions like marking all tasks as complete or resetting the list to its initial state. Tasks can be sorted by their completion status (completed or uncompleted), and the app features a minimalistic UI for an intuitive user experience.

## Key Features
- **State Persistence**: Zustand with the `persist` middleware ensures that tasks are saved across sessions.
- **Task Management**: Add, remove, and toggle task completion status.
- **Bulk Actions**: Mark all tasks as complete/incomplete, remove all tasks, or reset to the initial state.
- **Task Sorting**: Sort tasks by completion status (completed or uncompleted).
- **User Interface**: Simple and clean interface to manage tasks, add new items, and perform bulk actions.

## Technologies & Libraries Used
- **React**: JavaScript library for building the user interface.
- **Zustand**: Lightweight state management library used for handling the app's state and persistence.
- **Vite**: Fast development server and bundler, providing an optimized build process.
- **React Select**: For enabling task sorting functionality based on completion status.
- **CSS**: For styling and layout.

## Installation and Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/gajdovska/trackbag.git
   
2. Install dependencies:
   ```bash
   npm install
   
3. Run the development server::
   ```bash
   npm run dev      
