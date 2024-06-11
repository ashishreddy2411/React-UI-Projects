

type Task = {
    id: number,
    title: string,
    description: string
}

export const initialState = {
    newState: [],
    inProgress: [],
    inReview: [],
    completed: []
}

type State = {
    newState: Task[];
    inProgress: Task[];
    inReview: Task[];
    completed: Task[];
  };
  
  type Action =
    | { type: 'ADD_NEW_TASK'; payload: Task }
    | { type: 'ADD_IN_PROGRESS_TASK'; payload: Task }
    | { type: 'ADD_IN_REVIEW_TASK'; payload: Task }
    | { type: 'ADD_COMPLETED_TASK'; payload: Task }
    | { type: 'DELETE_NEW_TASK'; payload: number }
    | { type: 'DELETE_IN_PROGRESS_TASK'; payload: number }
    | { type: 'DELETE_IN_REVIEW_TASK'; payload: number }
    | { type: 'DELETE_COMPLETED_TASK'; payload: number }
    | { type: 'MOVE_TO_IN_PROGRESS'; payload: Task }
    | { type: 'MOVE_TO_IN_REVIEW'; payload: Task }
    | { type: 'MOVE_TO_COMPLETED'; payload: Task }
    | { type: 'EDIT_NEW_TASK'; payload: Task }
    | { type: 'EDIT_IN_PROGRESS_TASK'; payload: Task }
    | { type: 'EDIT_IN_REVIEW_TASK'; payload: Task }
    | { type: 'EDIT_COMPLETED_TASK'; payload: Task };


export const reducer = (state :State, action:Action) => {
    switch (action.type) {
        case "ADD_NEW_TASK":
            return {
                ...state,
                newState: [...state.newState, action.payload]
            }
        case "ADD_IN_PROGRESS_TASK":
            return {
                ...state,
                inProgress: [...state.inProgress, action.payload]
            }
        case "ADD_IN_REVIEW_TASK":
            return {
                ...state,
                inReview: [...state.inReview, action.payload]
            }
        case "ADD_COMPLETED_TASK":
            return {
                ...state,
                completed: [...state.completed, action.payload]
            }
        case "DELETE_NEW_TASK":
            return {
                ...state,
                newState: state.newState.filter((task:Task) => task.id !== action.payload)
            }
        case "DELETE_IN_PROGRESS_TASK":
            return {
                ...state,
                inProgress: state.inProgress.filter((task:Task) => task.id !== action.payload)
            }
        case "DELETE_IN_REVIEW_TASK":
            return {
                ...state,
                inReview: state.inReview.filter((task:Task) => task.id !== action.payload)
            }
        case "DELETE_COMPLETED_TASK":
            return {
                ...state,
                completed: state.completed.filter((task:Task) => task.id !== action.payload)
            }
        case "MOVE_TO_IN_PROGRESS":
            return {
                ...state,
                inProgress: [...state.inProgress, action.payload],
                newState: state.newState.filter((task:Task) => task.id !== action.payload.id)
            }
        case "MOVE_TO_IN_REVIEW":
            return {
                ...state,
                inReview: [...state.inReview, action.payload],
                inProgress: state.inProgress.filter((task:Task) => task.id !== action.payload.id)
            }
        case "MOVE_TO_COMPLETED":
            return {
                ...state,
                completed: [...state.completed, action.payload],
                inReview: state.inReview.filter((task:Task) => task.id !== action.payload.id)
            }
        case "EDIT_NEW_TASK":
            return {
                ...state,
                newState: state.newState.map((task:Task) => task.id === action.payload.id ? action.payload : task)
            }
        case "EDIT_IN_PROGRESS_TASK":
            return {
                ...state,
                inProgress: state.inProgress.map((task:Task) => task.id === action.payload.id ? action.payload : task)
            }
        case "EDIT_IN_REVIEW_TASK":
            return {
                ...state,
                inReview: state.inReview.map((task:Task) => task.id === action.payload.id ? action.payload : task)
            }
        case "EDIT_COMPLETED_TASK":
            return {
                ...state,
                completed: state.completed.map((task:Task) => task.id === action.payload.id ? action.payload : task)
            }
        default:
            return state
    }
}