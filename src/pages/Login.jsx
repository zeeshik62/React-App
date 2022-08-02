import React from 'react'

const Login = () => {
  return (
    <form>
    <div classname="row mb-3">
      <label forHtml="inputEmail3" classname="col-sm-2 col-form-label">Email</label>
      <div classname="col-sm-10">
        <input type="email" classname="form-control" id="inputEmail3"/>
      </div>
    </div>
    <div classname="row mb-3">
      <label forHtml="inputPassword3" classname="col-sm-2 col-form-label">Password</label>
      <div classname="col-sm-10">
        <input type="password" classname="form-control" id="inputPassword3"/>
      </div>
    </div>
    
    <div classname="row mb-3">
      <div classname="col-sm-10 offset-sm-2">
        <div classname="form-check">
          <input classname="form-check-input" type="checkbox" id="gridCheck1"/>
          <label classname="form-check-label" forHtml="gridCheck1">
            Example checkbox
          </label>
        </div>
      </div>
    </div>
    <button type="submit" classname="btn btn-primary">Sign in</button>
  </form>
  )
}

export default Login