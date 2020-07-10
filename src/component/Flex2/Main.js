import React from 'react'
import Skill from './Skill'
import Imagen1 from './../../recursos/image1.jpg'
import icono1 from './../../recursos/icono1.png'
import icono2 from './../../recursos/icono2.png'
import icono3 from './../../recursos/icono3.png'

const data = [
    {
        key: 1,
        icon: icono1,
        title: 'Lite title',
        text: 'Et occaecat non anim deserunt, Et occaecat non anim deserunt.'
    },
    {
        key: 2,
        icon: icono2,
        title: 'Lite title 2',
        text: 'Et occaecat non anim deserunt, Et occaecat non anim deserunt.'
    },
    {
        key: 3,
        icon: icono3,
        title: 'Lite title 3',
        text: 'Et occaecat the home on anim deserunt, Et occaecat non anim deserunt.'
    },
]

const Main = _ => (
    <main>
        <div className='main-text'>
            <h3>Simple diseño y nah</h3>
            <p>Ut anim tempor minim qui sunt id sunt. Laboris aliqua consequat anim do deserunt adipisicing minim nulla nisi. Incididunt ipsum amet pariatur laboris nulla quis fugiat dolor duis tempor esse culpa. Sint do ad magna id adipisicing ullamco dolore irure laboris ex in labore fugiat. Excepteur consequat eu pariatur aute sit. Ea ipsum culpa anim quis velit duis dolor nostrud et id veniam do ipsum. Et consectetur cillum exercitation cupidatat magna culpa enim reprehenderit mollit.</p>
        </div>
        <div className='skills'>
            {
                data.map(({ key, icon, title, text }) => (
                    <Skill
                        key={key}
                        icon={icon}
                        title={title}
                        text={text}
                    />
                ))
            }
        </div>
        <div className='images-content'>
            <h2>Haz de tu trabajo algo extraordinario</h2>
            <p>Consectetur laborum occaecat labore esse cillum ut.</p>
            <div className='images'>
                <img className='image' src={Imagen1} alt='imagen1' />
                <img className='image' src={Imagen1} alt='imagen1' />
                <img className='image' src={Imagen1} alt='imagen1' />
                <img className='image' src={Imagen1} alt='imagen1' />
                <img className='image' src={Imagen1} alt='imagen1' />
                <img className='image' src={Imagen1} alt='imagen1' />
                <img className='image' src={Imagen1} alt='imagen1' />
            </div>
        </div>
    </main>
)

export default Main