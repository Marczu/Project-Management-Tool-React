import React, { Component } from 'react'
import {Link} from "react-router-dom"

 class Landing extends Component {
  render() {
    return (
        <div className="landing">
        <div className="light-overlay landing-inner text-dark">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1 className="display-3 mb-4">Personal Management Tool</h1>
                        <p className="lead">
                            Utwórz konto, dołącz do istniejacych projektów lub stwórz własny.
                        </p>
                        <hr />
                        <Link className="btn btn-lg btn-info mr-2" to="/register" >
                          Zarejestruj się
                    </Link>
                        <Link to="/login" className="btn btn-lg btn-success mr-2">
                            Zaloguj się
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default Landing
