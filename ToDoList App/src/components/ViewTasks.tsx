import React, { useEffect } from 'react'
import { useTaskManager } from '../context/List'
import Task from './Task';
import "../styles/ViewTasks.css"
const ViewTasks = () => {
    const [state, dispatch] = useTaskManager();
    useEffect(() => {
        console.log(state)
    }, [state])
    return (
        <div className="View_AllTasks">
            <div className="newTasks">
                <h1>New Tasks</h1>
                {
                    state.newState.length === 0 ? <h1>No New Tasks</h1> : (
                        state.newState.map((task) => {
                            return (
                                <div key={task.id}>
                                    <Task id={task.id} title={task.title} description={task.description} status={"NEW_TASK"}/>
                                </div>
                            )
                        }))}
            </div>
            <div className="inProgressTasks">
                <h1>In Progress Tasks</h1>
                {
                    state.inProgress.length === 0 ? <h1>No In Progress Tasks</h1> : (
                        state.inProgress.map((task) => {
                            return (
                                <div key={task.id}>
                                    <Task id={task.id} title={task.title} description={task.description} status={"IN_PROGRESS"}/>
                                </div>
                            )
                        }))
                }
            </div>
            <div className="inReviewTasks">
                <h1>In Review Tasks</h1>
                {
                    state.inReview.length === 0 ? <h1>No In Review Tasks</h1> : (
                        state.inReview.map((task) => {
                            return (
                                <div key={task.id}>
                                    <Task id={task.id} title={task.title} description={task.description} status={"REVIEW_TASK"}/>
                                </div>
                            )
                        }))
                }
            </div>
            <div className="completedTasks">
                <h1>Completed Tasks</h1>
                {
                    state.completed.length === 0 ? <h1>No Completed Tasks</h1> : (
                        state.completed.map((task) => {
                            return (
                                <div key={task.id}>
                                    <Task id={task.id} title={task.title} description={task.description} status={"COMPLETED_TASK"}/>
                                </div>
                            )
                        }))
                }
            </div>
        </div>
    )
}

export default ViewTasks