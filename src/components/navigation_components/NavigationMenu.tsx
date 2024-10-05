import './NavigationMenu.css'; // Import the CSS file


const NavigationMenu = () => {
    return (
        <div className="font-medium"> {/* Added class for medium font */}
            <nav className="navbar navbar-expand-lg bg-white"> {/* Changed bg-body-tertiary to bg-white */}
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0"> {/* Changed me-auto to mx-auto for centering */}
                            <li className="nav-item me-3"> {/* Added me-3 for spacing between links */}
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Solutions
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider"></hr></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item"> {/* Added me-3 for spacing between links */}
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Products
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider"></hr></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item me-3"> {/* Added me-3 for spacing between links */}
                                <a className="nav-link" href="#">Pricings</a>
                            </li>
                            <li className="nav-item me-3"> {/* Added me-3 for spacing between links */}
                                <a className="nav-link" href="#">Resources</a>
                            </li>
                            <li className="nav-item me-3"> {/* Added me-3 for spacing between links */}
                                <a className="nav-link" href="#">Use Cases</a>
                            </li>
                        </ul>
                        <form className="d-flex searchbar_form_one" role="search">
                            <input className="form-control me-2 searchbar_one" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavigationMenu
