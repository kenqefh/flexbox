import React from 'react'

const Footer = _ => (
    <footer>
        <section className="contacto">
            <h2>Contactate con nosotros.</h2>
            <p>Lorem, ipsum dolor.</p>

            <form>
                <input type="text" placeholder="Nombre" id="nombre" name="nombre" />
                <input type="email" placeholder="Correo" id="correo" name="correo" required="" className="email" />
                <textarea name="mensaje" id="mensaje" placeholder="Mensaje:"></textarea>
                <input className="button derecha" type="submit" value="Contactar" name="submmit" />
            </form>
        </section>
    </footer>
)

export default Footer