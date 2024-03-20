import logo from "../img/logo.jpeg"
function Nav() {
    return (
        <div className="Navigation">
            <nav className="navbar   navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Logo" width="" height="32" class="d-inline-block align-text-top" />
Moustapha Mohamed
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Who am I?
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Education</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Work Experience</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  " aria-disabled="true">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  " aria-disabled="true">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  " aria-disabled="true">Demos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  " aria-disabled="true">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
