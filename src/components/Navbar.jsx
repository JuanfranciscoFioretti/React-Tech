import React from 'react'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light" id='navBar'>
                <div className="container-fluid" id='navDiv'>
                    <NavLink className="navbar-brand" to='/'>
                        <img id='imgLogo' height="120%" width="120%" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCABAAEADASIAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAAAAUEBgcDAgH/xAAnEAACAQMDAwQDAQAAAAAAAAABAgMABBEFEiETIjEGFDJBFlFhI//EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAFxEBAQEBAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8AyW0uTEwwaf2muvGoG41VAa9ByPuvfY42dWW91t5VILGkNzOZWJJrgXJ+6880kJOCiiiqoooooCiutrbyXdxHbwBTLI21AzhQT+skgVMk0PUI2RWih3Pu2qLqIkhSQzYDfEbWy3gbTk8VLZFQY0LnApra6RJMMhTXSy0q6hk/3h2jp9UMGVgU3BdwIJBGSBkfutf07SbJbu5hi0+2WOKZ0XmQnAYgZy38rOtcY1rjG7rSZIRkqaVyIUODW76ppNk8giksbcqytyDICO0nI7qyK/0i7knZYYCcBWJLKoUMrMCSTgDajHJ44pnXTOukYGa7xQF/qpsWh6l7lYDZydVlDquQdylwgYHOCCxAz45z45p7p+hTiNZZFj2E9pEyNu8Htwe4cjkZHNa7Ft4qdu729xFPHjfE6uuRkZByKafkl97eOB44XROoMM0mGWQuXBUPt56jjONwB4IwDXWTSnAztpfcWhTPFSyVZTG19QXbQezBSG0MfTFvECEA3h84JOWyo7jk4znzmtP0D1NpN1evJdGazSZ3kdzMJApOTgAR588VifKNUqG+kjGATS5lZ1nrX9f9T6Zb3EhtRNchARHJ1gqtkYyVKZ+/FZveepr/AGG2LrLalFQ28m4oVVGTGARjIc5IwcgH6pRNfSSDBJqIWLHJpMyGc8WO01+8ldN8dsSirHGemQUiVlZYxg/EFFIPy4+VXjR9RnvohFPtKkg8O/6Uc5Y7j2jlsn+1ltm+1xVz0G/EZXmpqG+rZdaEojJ21Ttb00RbuK1u8MfSPjxWf+pSndisZrlm1m13HsY1ENMdRxvOKXHzXZ3FFFFB7RtpzTC0vDGRzSyvobFB/9k=" alt=""/>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav" id='navList'>
                            <NavLink className="nav-link active aLight" aria-current="page" to='/'>Home</NavLink>
                            <NavLink className="nav-link active aLight" to='/categorie/Phones'>Smartphones</NavLink>
                            <NavLink className="nav-link active aLight" to='/categorie/Headphones'>Headphones</NavLink>
                            <NavLink className="nav-link active aLight" to='/categorie/Watches'>Watches</NavLink>
                            <NavLink className="nav-link active aLight" to='/categorie/TV'>Tv</NavLink>
                            <NavLink className="nav-link active aLight" to=''>Contact</NavLink>
                        </div>
                    </div>
                    <CartWidget/>
                </div>
            </nav>
        </>
    )
}

export default Navbar