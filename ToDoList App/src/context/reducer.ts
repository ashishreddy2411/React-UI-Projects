type Project = {
    id: number;
    name: string;
    newState: Task[],
    inProgress: Task[],
    inReview: Task[],
    completed: Task[]
  };

type Task = {
    pid: number,
    id: number,
    title: string,
    description: string
}

export const initialState = {
    Projects:[]
}

type State = {
    Projects: Project[];
  };
  
  type Action =
    | { type: 'ADD_NEW_TASK'; payload: Task }
    | { type: 'ADD_IN_PROGRESS_TASK'; payload: Task }
    | { type: 'ADD_IN_REVIEW_TASK'; payload: Task }
    | { type: 'ADD_COMPLETED_TASK'; payload: Task }
    | { type: 'DELETE_NEW_TASK'; payload: Task }
    | { type: 'DELETE_IN_PROGRESS_TASK'; payload: Task }
    | { type: 'DELETE_IN_REVIEW_TASK'; payload: Task }
    | { type: 'DELETE_COMPLETED_TASK'; payload: Task }
    | { type: 'MOVE_TO_IN_PROGRESS'; payload: Task }
    | { type: 'MOVE_TO_IN_REVIEW'; payload: Task }
    | { type: 'MOVE_TO_COMPLETED'; payload: Task }
    | { type: 'EDIT_NEW_TASK'; payload: Task }
    | { type: 'EDIT_IN_PROGRESS_TASK'; payload: Task }
    | { type: 'EDIT_IN_REVIEW_TASK'; payload: Task }
    | { type: 'EDIT_COMPLETED_TASK'; payload: Task }
    | { type: 'BACK_TO_NEW'; payload: Task }
    | { type: 'BACK_TO_IN_PROGRESS'; payload: Task }
    | { type: 'BACK_TO_IN_REVIEW'; payload: Task }
    | { type: 'ADD_PROJECT'; payload: Project }


export const reducer = (state :State, action:Action) => {
    switch (action.type) {
        case "ADD_PROJECT":
            const newProject: Project = {
                id: action.payload.id,
                name: action.payload.name,
                newState: [],
                inProgress: [],
                inReview: [],
                completed: []
            }
            return {
                ...state,
                Projects: [...state.Projects, newProject]
            }
        case "ADD_NEW_TASK":
            return {
                ...state,
                newState: [...state.Projects[action.payload.pid].newState, action.payload]
            }
        case "ADD_IN_PROGRESS_TASK":
            return {
                ...state,
                inProgress: [...state.Projects[action.payload.pid].inProgress, action.payload]
            }
        case "ADD_IN_REVIEW_TASK":
            return {
                ...state,
                inReview: [...state.Projects[action.payload.pid].inReview, action.payload]
            }
        case "ADD_COMPLETED_TASK":
            return {
                ...state,
                completed: [...state.Projects[action.payload.pid].completed, action.payload]
            }
        case "DELETE_NEW_TASK":
            return {
                ...state,
                newState: state.Projects[action.payload.pid].newState.filter((task:Task) => task.id !== action.payload.id)
            }
        case "DELETE_IN_PROGRESS_TASK":
            return {
                ...state,
                inProgress: state.Projects[action.payload.pid].inProgress.filter((task:Task) => task.id !== action.payload.id)
            }
        case "DELETE_IN_REVIEW_TASK":
            return {
                ...state,
                inReview: state.Projects[action.payload.pid].inReview.filter((task:Task) => task.id !== action.payload.id)
            }
        case "DELETE_COMPLETED_TASK":
            return {
                ...state,
                completed: state.Projects[action.payload.pid].completed.filter((task:Task) => task.id !== action.payload.id)
            }
        case "MOVE_TO_IN_PROGRESS":
            return {
                ...state,
                inProgress: [...state.Projects[action.payload.pid].inProgress, action.payload],
                newState: state.Projects[action.payload.pid].newState.filter((task:Task) => task.id !== action.payload.id)
            }
        case "MOVE_TO_IN_REVIEW":
            return {
                ...state,
                inReview: [...state.Projects[action.payload.pid].inReview, action.payload],
                inProgress: state.Projects[action.payload.pid].inProgress.filter((task:Task) => task.id !== action.payload.id)
            }
        case "MOVE_TO_COMPLETED":
            return {
                ...state,
                completed: [...state.Projects[action.payload.pid].completed, action.payload],
                inReview: state.Projects[action.payload.pid].inReview.filter((task:Task) => task.id !== action.payload.id)
            }
        case "EDIT_NEW_TASK":
            return {
                ...state,
                newState: state.Projects[action.payload.pid].newState.map((task:Task) => task.id === action.payload.id ? action.payload : task)
            }
        case "EDIT_IN_PROGRESS_TASK":
            return {
                ...state,
                inProgress: state.Projects[action.payload.pid].inProgress.map((task:Task) => task.id === action.payload.id ? action.payload : task)
            }
        case "EDIT_IN_REVIEW_TASK":
            return {
                ...state,
                inReview: state.Projects[action.payload.pid].inReview.map((task:Task) => task.id === action.payload.id ? action.payload : task)
            }
        case "EDIT_COMPLETED_TASK":
            return {
                ...state,
                completed: state.Projects[action.payload.pid].completed.map((task:Task) => task.id === action.payload.id ? action.payload : task)
            }
        case "BACK_TO_NEW":
            return {
                ...state,
                newState: [...state.Projects[action.payload.pid].newState, action.payload],
                inProgress: state.Projects[action.payload.pid].inProgress.filter((task:Task) => task.id !== action.payload.id)
            }
        case "BACK_TO_IN_PROGRESS":
            return {
                ...state,
                inProgress: [...state.Projects[action.payload.pid].inProgress, action.payload],
                inReview: state.Projects[action.payload.pid].inReview.filter((task:Task) => task.id !== action.payload.id)
            }
        case "BACK_TO_IN_REVIEW":
            return {
                ...state,
                inReview: [...state.Projects[action.payload.pid].inReview, action.payload],
                completed: state.Projects[action.payload.pid].completed.filter((task:Task) => task.id !== action.payload.id)
            }
        default:
            return state
    }
}