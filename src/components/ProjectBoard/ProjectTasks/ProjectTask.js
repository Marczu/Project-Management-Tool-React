import React, { Component } from 'react'
import { Link } from "react-router-dom"


 class ProjectTask extends Component {
  render() {

    const {project_task} = this.props

    return (
        <div className="card mb-1 bg-light">

            <div className="card-header text-primary">
                ID: {project_task.projectSequence} -- Priorytet: {project_task.priority}
            </div>
            <div className="card-body bg-light">
                <h5 className="card-title">{project_task.summary}</h5>
                <p className="card-text text-truncate ">
                    {project_task.acceptanceCriteria}
                </p>
                <Link to="" className="btn btn-primary">
                    Zobacz / Uaktualnij
                </Link>

                <button className="btn btn-danger ml-4">
                    Usuń
                </button>
            </div>
        </div>
    )
  }
}

export default ProjectTask;
