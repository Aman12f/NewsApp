import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light mx-5"  style={{
        // position: 'relative',
        marginBottom: '12px',
        // border: '2px solid black',
        display: 'flex',
        height: '4rem',
        fontSize: '16pxm',
        padding:'16px'
      }}>
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav mr-auto d-flex justify-content-around" style={{zIndex:'1'}}>
      {/* <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li> */}
            <li className="nav-item">
              <NavLink exact="true" to="/" className="nav-link">General</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/entertainment" className="nav-link">Entertainment</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/business" className="nav-link">Business</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/health" className="nav-link">Health</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/science" className="nav-link">Science</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/sports" className="nav-link">Sports</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/technology" className="nav-link">Technology</NavLink>
            </li>

    </ul>
  </div>
</nav>
<Outlet></Outlet>
    </>
  )
}
