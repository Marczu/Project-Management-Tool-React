import React, { Component } from 'react'
import {connect} from "react-redux"
import { Link } from "react-router-dom";
import classnames from "classnames"
import {getProjectTask, updateProjectTask} from "../../../actions/backlogActions"
import PropTypes from "prop-types"


 class UpdateProjectTask extends Component {

  constructor(){
    super();

    this.state = {
      "id": "",
      "projectSequence": "",
      "summary": "",
      "acceptanceCriteria": "",
      "status": "",
      "priority": "",
      "dueDate": "",
      "projectIdentifier": "",
      "create_At": "",
      "errors": {}
    }
    
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount(){
    const {backlog_id, pt_id} = this.props.match.params;
    this.props.getProjectTask(backlog_id, pt_id, this.props.history)
  }

  componentWillReceiveProps(nextProps){
    const {
      id,
      projectSequence,
      summary,
      acceptanceCriteria,
      status,
      priority,
      dueDate,
      projectIdentifier,
      create_At
    } = nextProps.project_task

    this.setState({
      id,
      projectSequence,
      summary,
      acceptanceCriteria,
      status,
      priority,
      dueDate,
      projectIdentifier,
      create_At
    })

    if(nextProps.errors){
      this.setState({errors:nextProps.errors})
     }
  }


  onChange(e) {
    this.setState({[e.target.name]:e.target.value});
}

onSubmit(e){
    e.preventDefault();

    const updateProjectTask = {
      id: this.state.id,
      projectSequence: this.state.projectSequence,
      summary:this.state.summary,
      acceptanceCriteria: this.state.acceptanceCriteria,
      status: this.state.status,
      priority: this.state.priority,
      dueDate: this.state.dueDate,
      projectIdentifier: this.state.projectIdentifier,
      create_At: this.state.create_At
    }

    this.props.updateProjectTask(this.state.projectIdentifier, this.state.projectSequence, updateProjectTask, this.props.history)
    // console.log(updateProjectTask);
    
}

  render() {

    const {errors} = this.state

    return (
        <div className="add-PBI">
          <div className="container">
              <div className="row">
                  <div className="col-md-8 m-auto">
                      <Link to={`/projectBoard/${this.state.projectIdentifier}`} className="btn btn-light">
                          Powrót do tablicy Projektu
                      </Link>
                      <h4 className="display-4 text-center">Uaktualnienie zadania</h4>
                      <p className="lead text-center">Nazwa Projektu: {this.state.projectIdentifier} + ID Zadania: {this.state.projectSequence}</p>
                      <form onSubmit={this.onSubmit}>
                          <div className="form-group">
                              <input type="text" 
                              className={classnames("form-control form-control-lg", {
                                  "is-invalid":errors.summary
                              } )}
                              name="summary" 
                              placeholder="Streszczenie zadania" 
                              value={this.state.summary}
                              onChange={this.onChange}
                              />
                              {
                                  errors.summary && (
                                      <div className="invalid-feedback">{errors.summary}</div>
                                  )
                              }
                          </div>
                          <div className="form-group">
                              <textarea className="form-control form-control-lg" 
                              placeholder="Kryteria przyjęcia" 
                              name="acceptanceCriteria" 
                              value={this.state.acceptanceCriteria}
                              onChange={this.onChange}
                              />
                          </div>
                          <h6>Termin zadania</h6>
                          <div className="form-group">
                              <input type="date" 
                              className="form-control form-control-lg" 
                              name="dueDate" 
                              value={this.state.dueDate}
                              onChange={this.onChange}
                              />
                          </div>
                          <div className="form-group">
                              <select className="form-control form-control-lg" name="priority"
                              value={this.state.priority}
                              onChange={this.onChange}
                              >
                                  <option value={0}>Wybierz priorytet</option>
                                  <option value={1}>Wysoki</option>
                                  <option value={2}>Średni</option>
                                  <option value={3}>Niski</option>
                              </select>
                          </div>

                          <div className="form-group">
                              <select className="form-control form-control-lg" name="status"
                              value={this.state.status}
                              onChange={this.onChange}
                              >
                                  <option value="">Wybierz status</option>
                                  <option value="DO ZROBIENIA">DO ZROBIENIA</option>
                                  <option value="W TRAKCIE">W TRAKCIE</option>
                                  <option value="ZROBIONY">ZROBIONY</option>
                              </select>
                          </div>

                          <input type="submit" className="btn btn-primary btn-block mt-4" />
                      </form>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

UpdateProjectTask.propTypes = {
  getProjectTask: PropTypes.func.isRequired,
  projectTask: PropTypes.object.isRequired,
  updateProjectTask: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  project_task: state.backlog.project_task,
  errors: state.errors
}) 

export default connect(mapStateToProps, {getProjectTask, updateProjectTask}) (UpdateProjectTask)