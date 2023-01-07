# React Project Management Dashboard (Trello Board)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Implement a dashboard which will help us keep track of cards categorized into lists.
1. Each list can have any number of cards.
2. Mandatory attributes of each card - title, desc, and a cross(X) button to delete it.
3. A new list can be added to the board by pressing the ADD LIST button present on the right side of the board. Each list should have a title, a cross(X) button to delete it. Deleting a list should delete all the cards present in that list.
4. A new card can be added to a list via the Add card button present at the bottom of each list(inside a list).
5. A card can be dragged from one list and dropped on the second list to make it part of the second list. If it is dropped outside the second list, it comes back to the list from which it was picked up. (HTML Drag and Drop API to implement DnD functionality)
6. On refreshing the page or opening the same page in a new tab, the existing lists and cards on the page should remain intact.

Demo : https://react-trello-board.onrender.com

## Scripts to run the project

In the project directory, you can run:

### `npm install`
to install all node modules and then

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

