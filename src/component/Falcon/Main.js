import React from 'react'
import Article from './Article'

const data = [
    {
        key: '001',
        title: 'Sint fugiat ipsum reprehenderit eiusmod anim magna esse labore pariatur do dolore.',
        content: 'Et velit nulla id cillum adipisicing irure officia amet quis enim magna. Minim irure sunt do pariatur id cillum adipisicing irure officia amet quis enim magna. Minim irure sunt do pariatur exercitation. Cillum ex consectetur amet excepteur officia nulla irure duis.'
    },
    {
        key: '002',
        title: 'Sint fugiat ipsum reprehenderit eiusmod anim magna esse labore pariatur do dolore.',
        content: 'Et velit nulla id cillum adipisicing irure officia amet quis enim magna. Minim irure sunt do pariatur exercitation. Cillum ex consectetur amet excepteur officia nulla irure duis id cillum adipisicing irure officia amet quis enim magna. Minim irure sunt do pariatur exercitation. Cillum ex consectetur amet excepteur officia nulla irure duis id cillum adipisicing irure officia amet quis enim magna. Minim irure sunt do pariatur exercitation. Cillum ex consectetur amet excepteur officia nulla irure duis id cillum adipisicing irure officia amet quis enim magna. Minim irure sunt do pariatur exercitation. Cillum ex consectetur amet excepteur officia nulla irure duis.'
    },
    {
        key: '003',
        title: 'Sint fugiat ipsum reprehenderit eiusmod anim magna esse labore pariatur do dolore.',
        content: 'Et velit nulla id cillum adipisicing irure officia amet quis enim magna. Minim irure sunt do pariatur exercitation. Cillum ex consectetur amet excepteur officia nulla irure duisatur exercitation. Cillum ex consectetur amet excepteur officia nulla irure duis.'
    },
    {
        key: '004',
        title: 'Sint fugiat ipsum reprehenderit eiusmod anim magna esse labore pariatur do dolore.',
        content: 'Et velit nulla id cillum adipisicing irure officia amet quis enim magna. Minim irure sunt velit nulla id cillum adipisicing irure officia amet quis enim magna. Minim irure sunt do pariatur exercitation. Cillum ex consectetur amet excepteur officia nulla irure duis.'
    }
]

const Main = _ => (
    <main>
        <div className='articles'>
            {
                data.map(({ title, content, key }) => (
                    <Article
                        key={key}
                        title={title}
                        content={content}
                    />))
            }
        </div>
        <div className='rectangles'>
            <div className='rectangle'>
                A
  </div>
            <div className='rectangle'>
                B
  </div>
        </div>
    </main>
)

export default Main;