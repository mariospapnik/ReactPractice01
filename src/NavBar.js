import React from 'react'

function NavBar(){

  function renderMenuItem(name,href) {
    return(
      <li className="nav-item">
          <a className="nav-link active" href={href}>{name}</a>
      </li>
    )
  }

  return(
    <div id='astraka-navbar' className='d-flex justify-content-center'>
      <div class='nav navbar-expand-lg'>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className="navbar-nav mr-auto">
            {renderMenuItem('home','#')}
            {renderMenuItem('mountains','#')}
            {renderMenuItem('trails','#')}
            {renderMenuItem('spots','#')}
            {renderMenuItem('about','#')}
          </ul>
        </div>

      </div>
    </div>

  )

}


export default NavBar