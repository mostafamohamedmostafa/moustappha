import logo from "../img/logo.jpeg"
function Nav() {
    return (
        <div className="Navigation  ">
 <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"> 👨‍💻 Moustapha</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#whosection">Who am I</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Education</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">WorkExperience</a>
        </li>
      

        <li className="nav-item">
          <a className="nav-link" href="#">Projects</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">Demos Projects</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>     
         </ul>
    </div>
  </div>
</nav>
        </div>
    );
}

export default Nav;
