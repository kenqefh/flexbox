import React from 'react'
import './style.css'
import image1 from './../../recursos/image1.jpg'

const Flex = _ => (
    <div className='contenedor-principal'>
        <nav>
            <div>
                <h2>Logo</h2>
            </div>
            <div>
                <a href='#home'>Inicio</a>
                <a href='#home'>Menu</a>
                <a href='#home'>Nosotros</a>
            </div>
        </nav>
        <div className='content-header'>
            <h1 id='titulo'>Hola yo soy Goku</h1>
            <img className='image-1' src={image1} alt='imge 1' />

        </div>

        <div className='padre'>
            <div className='hijo hijo1'>Hijo 1</div>
            <div className='hijo'>Hijo 2</div>
            <div className='hijo'>Hijo 3</div>
            <div className='hijo'>Hijo 4</div>
        </div>

    </div>
)

export default Flex;