export const initialState = [
        {
            item: 'Learn About Reducers',
            completed: false,
            id: 123445678
        }
];

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_TODO":
            return[
                ...state,
                {
                    item: action.payload,
                    id: Date.now(),
                    completed: false
                }
            ]
        case "TASK_TOGGLED":
            return state.map(item => item.id === action.payload ? {...item, completed: !item.completed} : item)
        
        case "CLEAR_COMPLETED":
            return state.filter((item) => !item.completed)
            
        default:
            return state

    }
};

//   toggleTask = (taskId) => {
//     console.log(taskId);
//     this.setState({
//       tasks: this.state.tasks.map((item) =>{
//         if (taskId === item.id) {
//           return{
//             ...item, completed: !item.completed
//           };
//         }
//         return item;
//       })
//     });
//   };