import logo_mbti from "../asets/Images/MBTI.svg";
import { Navbar, Nav, Container, NavDropdown} from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
        <Navbar collapseOnSelect expand="lg" className="navbar-all">
            <Container>

                <Navbar.Brand> <a><img src={logo_mbti} className="nav-logo"/></a> <span className="nav-title">Literati Book Recommender</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="right-aligned text-white">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features" className="text-white">Quotes Generator</Nav.Link>
                        <Nav.Link href="#pricing" className="text-white">Masuk/Buat Akun</Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Nav>
                        {/* <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
  </Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>
    </div>
    )
}

export default NavigationBar