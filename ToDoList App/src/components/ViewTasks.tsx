import { useTaskManager } from '../context/List';
import Task from './Task';
import "../styles/ViewTasks.css";
import { useEffect } from 'react';

const ViewTasks = () => {
    const [state] = useTaskManager();
    useEffect(() => {
        console.log(state);
    }
    , [state]);
    const getBorderClass = (taskCount : number) => {
        if (taskCount === 0) return 'border-empty';
        if (taskCount < 5) return 'border-few';
        return 'border-many';
    };

    return (
        <div className="View_AllTasks">
            <div className={`newTasks ${getBorderClass(state.newState.length)}`}>
                <h1>New Tasks</h1>
                {state.newState.length === 0 ? (
                    <h1>No New Tasks</h1>
                ) : (
                    state.newState.map((task) => (
                        <Task
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            description={task.description}
                            status="NEW_TASK"
                        />
                    ))
                )}
            </div>
            <div className={`inProgressTasks ${getBorderClass(state.inProgress.length)}`}>
                <h1>In Progress Tasks</h1>
                {state.inProgress.length === 0 ? (
                    <h1>No In Progress Tasks</h1>
                ) : (
                    state.inProgress.map((task) => (
                        <Task
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            description={task.description}
                            status="IN_PROGRESS"
                        />
                    ))
                )}
            </div>
            <div className={`inReviewTasks ${getBorderClass(state.inReview.length)}`}>
                <h1>In Review Tasks</h1>
                {state.inReview.length === 0 ? (
                    <h1>No In Review Tasks</h1>
                ) : (
                    state.inReview.map((task) => (
                        <Task
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            description={task.description}
                            status="REVIEW_TASK"
                        />
                    ))
                )}
            </div>
            <div className={`completedTasks ${getBorderClass(state.completed.length)}`}>
                <h1>Completed Tasks</h1>
                {state.completed.length === 0 ? (
                    <h1>No Completed Tasks</h1>
                ) : (
                    state.completed.map((task) => (
                        <Task
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            description={task.description}
                            status="COMPLETED_TASK"
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default ViewTasks;
