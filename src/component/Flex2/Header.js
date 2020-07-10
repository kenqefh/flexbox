import React from 'react'

const Header = _ => (
    <header id='header'>
        <div className='contenedor'>
            <nav className='menu'>
                <a href="#header">Inicio</a>
                <a href="#header">Acerca de</a>
                <a href="#header">Portafolio</a>
                <a href="#header">Contacto</a>
            </nav>
            <div className='header-content-text'>
                <h1 className='header-title'>Elvis Frank</h1>
                <div className='header-line'></div>
                <p className='header-subitle'>Soluciones simples para el usuario.</p>
                <a className='button' href='#header'>Mensaje</a>
            </div>
        </div>
    </header>
)

export default Header