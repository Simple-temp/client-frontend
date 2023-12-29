import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Store } from '../../Store';


function Navvbar() {

    const { state, dispatch: ctxDispatch } = useContext(Store)
    const { userInfo } = state

    const signoutHandler = () => {
        ctxDispatch({ type: "SIGNOUT_USER" })
        localStorage.removeItem("userInfo")
        window.location.href = "/login"
    }

    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/"><h3><i className="fa-solid fa-plane"></i> AutoLanding</h3></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto d-flex align-items-center navbar-option">
                            <Link to="/" className='link'>Home</Link>
                            <Link to="/admintemplate" className='link'>Templates</Link>
                            {
                                userInfo ? <>
                                    <Link to="/sellers" className='link'>Sellers</Link>
                                    <Link to="/profile" className='link'>Profile</Link>
                                    <button className='logout-btn' onClick={() => signoutHandler()}><i className="fa-solid fa-right-from-bracket"></i></button>
                                </> : <>
                                    <Link to="/login" className='text-decoration-none ms-3'>
                                        <button className='login'> Join us!</button>
                                    </Link>
                                </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navvbar