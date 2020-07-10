import React from 'react'

const Skill = ({ icon, title, text }) => (
    <div className='skill'>
        <img src={icon} alt={title} />
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
)

export default Skill