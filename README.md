STEPS TO TAKE

START

1) Write the starter JSX into the App() function
2) Add an index.css file and make the global visual changes.
3) Make the components directory, begin to componentize the App.

STEP 1: COMPONENTIZING THE APP

Making the Todo.jsx Component

1) Make the Todo.jsx component and make the Todo(props) function with props argument.
2) Cut the Task item/items from the App() function and add them to the Todo() function to render.
3) Import Todo.jsx into App.js
4) Use the Todo() component inside the <ul> element in the App() function.
5) Create a prop in Todo() in App.js which is called 'name'. Pass a random string into this prop.
6) Change the 'label' content of the 'task item input' in Todo() function as {props.name} to monitor the task item.
7) Make a DATA const in index.js that shows the default task items in the main screen. That const must be an object which contains 3 properties: id, name and completed. Completed will be a boolean.
8) Pass the DATA const as a prop into the App() function in index.js. The prop name will be "tasks". This array is now available to the App component as props.tasks
9) Above the return statement of App(), make a new const called taskList and use map() to show the DATA in index.js as the task item list. To show the list you need the <Todo /> component in map(). Because <Todo /> component is a pattern for each of our task items. Since each task you map over has the 'id', 'name', and 'checked' properties you have to pass these into the <Todo /> component in map() function. Thus, you can list unique items.
10) Use the taskList const instead of the children of the <ul> element, which list the task items.
11) Remember to change the default values in the Todo.js component with props values to acquire the automatically updated list.
12) Since keys should be unique, you can re-use the id of each task object as its key. Add the ids as key property to taskList const.

Making the Form.jsx component

1) Create the Form.jsx component in components folder
2) Copy-paste everything about the form into the Form() function.
3) Import Form.js into App.js and add <Form /> component into App component instead of the form element.

Making the FilterButton.jsx component

1) Create the FilterButton.jsx component in components folder
2) Copy one of the buttons from Filter Buttons <div> into the FilterButton() function.
3) Clear the Filter Buttons div.
4) Import FilterButton.jsx into App.js and add 3 <FilterButton /> components into Filter Buttons div in App() function.

STEP 2: ADDING FUNCTIONALITY WITH EVENTS AND useState

Handling the Form Submission

1) To handle the form Submission add a 'onSubmit' property to form element in Form() function: onSubmit={handleSubmit}
2) Above the return statement in Form() function make the event handler function handleSubmit(e) with event argument. Remember to add e.preventDefault() to prevent default submission.
3) As you cannot pass a function as a prop from child component to parent component, you have to make a new function in App.js. Thus, we can pass that function as a prop to the <Form /> Component in App() function. This will be a 'callback prop'. Once you have the callback prop, you can call it inside the Form() function to send the right data to <App />.
4) Go back to App.js and add the addTask(name) function with the 'name' argument in the very first line in the App() function.
5) Add addTask() function as a prop into <Form /> component in App() function.
6) Now you can use this 'callback prop function' in your handleSubmit() function in Form.jsx.

Adding State Hook To Form Component

1) Since our form input lives in the Form.jsx component, the Form component can track its own data(state) via input.
2) Import useState() into Form.jsx component.
3) Create a useState const above the handleSubmit() function with [name, setName]. Initial state will be an empty string.
4) Add a 'value' property into the 'input' element in the Form() function. The value will be equal to the name variable.
5) You need an event listener in the input element to track the user input. Add an onChange={handleChange} event listener into the input element.
6) handleChange() will track the user input. To get the user input you have to get e.target.value as the name variable. To set e.target.value as name use setName(e.target.value) in handleChange() function.
7) Turn back to handleSubmit to handle submission. Add the name variable as the argument of the addTask() function. Thus, you can add the 'name' as the new task item into the list.
8) Remember to add setName('') after the addTask() function. This will clear the user input after adding tasks.

Adding State Hook to App.js

1) Import useState to App.js
2) Make new useState const with [tasks, setTasks]. The initial value ist 'props.tasks'. Now you can store the tasks in useState. That will be the main state tracker of the task list.
3) Now you can change the taskList const that maps over the tasks. Here from now on you can map 'tasks' instead of 'props.tasks' because now prop.tasks = tasks in the main useState.

Adding a Task

1) Turning back to the addTask() function, you need to put the name into an object that has the same structure as your existing tasks. Inside the addTask() function, make a 'newTask' object to add to the array. Because 'tasks(DATA)' is an array of objects and 'name' is a string.
2) Then in addTask() make a new array, with the existing tasks. And add the newTask into this array;  setTasks([newTask, ...tasks])
3) To give a unique item to each new task, npm install nanoid. And import it into App.js
4) Add nanoid into id prop of newTask const in addTask() function something like todo+nanoid().

Counting the Remaining Tasks

1) Make a headingText const above the return statement of the App() function. This const has to calculate the sum of taskList.
2) Now pass the headingText const into the 'remaining tasks' part of the code.
3) When you have a single task you have to use the singular 'task' in the remaining tasks statement. To achieve that make the tasksNoun const above headingText. This const should include a simple ternary operator to use 'task' word if you have just one task.
4) Add the tasksNoun const into the remaining tasks statement as a template literal.

Completing a Task

1) To make your checkboxes of your task items really work, add the toggleTaskCompleted(id) function with an 'id' argument under addTask function in the App().
2) That function has to change the state of the App() so that all tasks list has to re-render with the tasks, which are marked as completed. Assign a new const into the function which is called updatedTasks.
3) updatedTasks will be the new tasks list instead of taskList with the completed tasks. Thus, updatedTasks has to map over the tasks with the marked ones.
4) Add toggleTaskCompleted() function as a property of <Todo /> which is rendered in taskList const.
5) Now go to the 'input' element in the Todo.jsx component and add an onChange event listener. That event listener must trigger the toggleTaskCompleted(props.id) function with a callback function. Remember this function is also a prop of the Todo component.

Deleting a Task

1) You have to use a similar method to complete a task. Make the deleteTask(id) with an 'id' argument function under the toggleTaskCompleted() function.
2) Declare the remainingTasks const. In this const filter() the tasks without the deleted task item.
3) Now pass the deleteTask() function as a prop in <Todo /> which is rendered in taskList const.
4) Add an 'onChange' event listener into the 'delete button' in the Todo.jsx component. That event listener has to invoke props.deleteTask(props.id) with a callback function.


STEP 3: ADDING INTERACTIVITY WITH CONDITIONAL RENDERING

Editing a Task

1) Make the editTask(id, newName) function under the deleteTask() function in App(). That function has to map over all the tasks with the edited task.
2) Pass editTask as a prop in <Todo /> which is rendered in taskList const.
3) To provide a UI to edit a task, import useState into Todo.jsx. Then create a useState hook with (false) initial, and [isEditing, setEditing] variables. That hook will help track if the tasks list is edited. 
4) Now you have to make two seperate templates to view the tasks in Todo.jsx. One of them will be the viewTemplate which shows the ordinary tasks list. And the other will be the editingTemplate which will show the tasks while one of them is being edited.
5) Each template will be a const under the useState hook and above the return statement.
6) editingTemplate must include a 'cancel', a 'save' button and an input to edit the item.
7) viewTemplate will be exactly the same as we had before. It must include an 'edit' and 'delete' button.
8) Now you can clear the return statement of Todo() except the <li> element. In <li> elelement make a ternary operator, which decides whether the App uses the viewTemplate or editingTemplate. The isEditing variable with useState hook will help track the state.
9) To toggle between the templates you have to change the state of isEditing to true/false. Add an 'onClick' event listener to the 'edit button' of viewTemplate, which changes the state of isEditing as 'true' with a callback function.
10) Similarly, add an 'onClick' event listener to the 'cancel button' of editingTemplate, which changes the state of isEditing as 'false' with a callback function.
11) Now you have to track the input element, and update the state of newName in your editTask function with a useState hook. That hook will have an initial of empty string ('') and [newName, setNewName] variables.
12) Add a 'value' prop to input in editingTemplate. That prop must include the newName.
12) Then add the onChange event listener to the same input element.
13) handleChange function will handle tracking the input with setNewName(e.target.value). The function will take place beneath the useState hooks.
14) Finally you'll need a handleSubmit() function under the handleChange function to handle the form submission. Add the onSubmit event listener to the form element in editingTemplate.
15) handleSubmit() function has to prevent the default, use the editTask() function to assign the id and newName to the edited item, clear the input after submission, and set isEditing false again.

Filtering the Items using Filter Buttons

1) First of all in App() you have to add a new useState hook, which will decide the filtered items to be rendered. It has an initial state of 'All' and [filter, setFilter] variables.
2) You can define the name of the filter buttons and their behaviors in an object. Make the FILTER_MAP object at the top of the App.js. That object will include the names of the filter buttons as property, and their behaviors as value. Each behavior should be a function.
3) Using the Object.keys() method, collect the keys (properties) of the FILTER_MAP object into an array. And assign it to the FILTER_NAMES const.
4) Underneath the taskList const in App() make a new const called filterList. That const will map over the FILTER_NAMES as the 'key' and 'name' properties of <FilterButton /> component. So add the FilterButton() here, and instead of it add the filterList const.
5) Now you have to update the <FilterButton /> in filterList by adding two new properties which will be isPressed and setFilter. The isPressed will check the compatibility of 'name' and 'filter' with strict equality operators.
6) Now go to FilterButton.jsx. You have to update the properties of the filter button. Change the value of 'aria-pressed' property as {props.isPressed}. Add an onClick event listener which triggers props.setFilter(props.name). Also change the 'All' span in Filter Button with {props.name}
7) taskList const maps the tasks in the App. To filter the tasks shown you have to add a filter before mapping all tasks. So add the filter() method in the task list before map() method: .filter(FILTER_MAP[filter]).

STEP 4: ADDING ACCESSIBILITY WITH useEffect and useRef

Changing the Keyboard Focus When Editing

1) Import useRef into Todo.jsx
2) Create 2 new consts for useRef hooks under the useState hooks of Todo(). const editFieldRef = useRef(null)
const editButtonRef = useRef(null). They have the default value of 'null'.
3) Add editFieldRef const as the property of input in the editingTemplate.
4) Add editButtonRef const as the property of the edit button in the viewTemplate.
5) To use the Refs import useEffect into Todo.jsx
6) The aim here is to focus the edit button only after editing an item. So you know when editing happens and finishes to change the focus to the edit button. So you have to know the previous state of the component. To get the previous state of the component, write a usePrevious(value) function above Todo() function in Todo.jsx. That function must use the useRef and useState hooks. Then assign the usePrevious(isEditing) function to the wasEditing const with an argument of isEditing, which will place beneath the hooks on top of the Todo() function.
7) Now you have both states: isEditing and wasEditing. Editing state and previous state.
8) Make the useEffect hook just above the return statement of Todo() function. Using that hook you will render the focusing changes if an editing happens at the list.
9) useEffect hook has to include two if statements for each focusing. The first condition: if in the previous state there was not an editing and now there is an editing focus on the input. If in the previous state there was an editing, and now there's no editing focus on the edit button. Of course the use Effect must track to variables: isEditing, wasEditing.

Focusing the Remaining Tasks after Deleting a Task

1) Import useEffect and useRef into App.js
2) Declare the new useRef hook with listHeadingRef const just above the return statement of App(). The default value is 'null'.
3) Since the h2 elements are not focusable, you have to add an tabindex='-1' attribution to the h2 element in the remaining tasks part of App(). That will make it a focusable element.
4) Now add the listHeadingRef const as the 'ref' attribution to the same h2 element.
5) Likewise you have done to focus on the edit button you will need this time the previous state of the App component. Because the focus must be done only after deleting an item.
6) So you also have to use the usePrevious() function at the top of the App() function. Copy-paste that function.
7) Under the listHeadingRef const declare the prevTasksLength const. usePrevious(task.length) will track here the length of the tasks.
8) Now finally declare the useState hook just above the return statement of App(). That hook has to compare the current and the previous states in terms of tasks.length. By the help of useRef it has to focus on the delete button.
9) You can seperate the UsePrevious() function to a new file and import it to both App.js and Todo.jsx to avoid redundancy.
