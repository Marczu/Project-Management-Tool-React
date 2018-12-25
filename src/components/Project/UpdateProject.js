import React, { Component } from 'react'

export default class UpdateProject extends Component {
  render() {
    return (
        <div className="project">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h5 className="display-4 text-center">Aktualizacja Projektu</h5>
                    <hr />
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg " placeholder="Nazwa Projektu" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" placeholder="Unikalne ID Projektu"
                                disabled />
                        </div>
                        
                        <div className="form-group">
                            <textarea className="form-control form-control-lg" placeholder="Opis Projektu"></textarea>
                        </div>
                        <h6>Data zaczęcia</h6>
                        <div className="form-group">
                            <input type="date" className="form-control form-control-lg" name="start_date" />
                        </div>
                        <h6>Szacowany czas ukończenia</h6>
                        <div className="form-group">
                            <input type="date" className="form-control form-control-lg" name="end_date" />
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
