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

## Getting Started
### Prerequisites

A stable version of node installed in the system (preferably the latest.)

### Installing

Clone the repo from github.

```
git clone <repo-url>
```
Go to the project home directory on the cloned repo and install the packages (packages are listed in the packages.json file) by executing.

```
npm install
```
Run the project locally by:
```
npm start
```
This will host the project at default localhost:3000. Please open a web browser and direct to that link to see everything.

## Author

* **DEVI R** - *Initial work* - [Devi R](https://www.linkedin.com/in/devi-r-06bb94a7)

## License

This project is licensed under the MIT License.
