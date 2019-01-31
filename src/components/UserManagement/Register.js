import React, { Component } from 'react'
import { createNewUser } from "../../actions/securityActions"
import PropTypes from "prop-types"

 class Register extends Component {
  render() {
    return (
        <div className="register">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h1 className="display-4 text-center">Rejestracja</h1>
                    <p className="lead text-center">Utwórz Konto</p>
                    <form action="create-profile.html">
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" placeholder="Nazwa użytkownika" name="name"
                                required />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control form-control-lg" placeholder="Email" name="email" />

                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control form-control-lg" placeholder="Hasło" name="password" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control form-control-lg" placeholder="Potwierdź hasło"
                                name="password2" />
                        </div>
                        <input type="submit" className="btn btn-info btn-block mt-4" />
                    </form>
                </div>
            </div>
        </div>
    </div>

    )
  }
}

export default Register