# Note Keeper Client

## Overview
This is the frontend component for the My Note Keeper application, built with React to complement the Node.js backend. It enables users to perform CRUD (Create, Read, Update, Delete) operations on notes, each consisting of a title, content, and creation date. The application includes a search field to filter notes based on their values.

## Features
- **Search Field**: Search notes by title or content.
- **Expandable Note Creation**: Click on the "Add a note..." field to expand and add title and content. Cancel resets the fields and collapses the form.
- **Edit Dialog**: Clicking a note opens a dialog to update its values. "Cancel" closes without changes; "Save" saves the note.
- **Delete Confirmation**: Hovering over a note card shows a trash icon. Clicking it opens a confirmation dialog to delete the note.
- **Note Display**: Notes are shown in a grid format with title, content, and creation date.
- **Data Fetching**: Data-fetching logic encapsulated in a custom React hook (`useNotes.js`).

## Dependencies
- React (no additional external libraries).

