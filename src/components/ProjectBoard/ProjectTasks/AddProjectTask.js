import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import classnames from "classnames"
import { addProjectTask } from "../../../actions/backlogActions";
import PropTypes from "prop-types"

class AddProjectTask extends Component {

  constructor(props){
      super(props)
      const {id} = this.props.match.params

      this.state = {
        "summary": "",
        "acceptanceCriteria": "null",
        "status": "",
        "priority": 0,
        "dueDate": "",
        "projectIdentifier": id,
        "errors": {}
      }
  }

  render() {
    const {id} = this.props.match.params;
    return (
        <div className="add-PBI">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <Link to={`/projectBoard/${id}`} className="btn btn-light">
                        Powrót do tablicy Projektu
                    </Link>
                    <h4 className="display-4 text-center">Dodaj nowe zadanie</h4>
                    <p className="lead text-center">Nazwa Projektu + Kod Projektu</p>
                    <form >
                        <div className="form-group">
                            <input type="text" 
                            className="form-control form-control-lg" 
                            name="summary" 
                            placeholder="Podsumowanie zadania" 
                            value={this.state.summary}/>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control form-control-lg" 
                            placeholder="Kryteria przyjęcia" 
                            name="acceptanceCriteria" 
                            value={this.state.acceptanceCriteria}></textarea>
                        </div>
                        <h6>Termin zadania</h6>
                        <div className="form-group">
                            <input type="date" 
                            className="form-control form-control-lg" 
                            name="dueDate" 
                            value={this.state.dueDate}/>
                        </div>
                        <div className="form-group">
                            <select className="form-control form-control-lg" name="priority"
                            value={this.state.priority}>
                                <option value={0}>Wybierz priorytet</option>
                                <option value={1}>Wysoki</option>
                                <option value={2}>Średni</option>
                                <option value={3}>Niski</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <select className="form-control form-control-lg" name="status"
                            value={this.state.status}>
                                <option value="">Wybierz status</option>
                                <option value="TO_DO">DO ZROBIENIA</option>
                                <option value="IN_PROGRESS">W TRAKCIE</option>
                                <option value="DONE">ZROBIONY</option>
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

AddProjectTask.propTypes = {
    addProjectTask: PropTypes.func.isRequired
}

export default connect(null, {addProjectTask}) (AddProjectTask);
