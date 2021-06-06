import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
    {
        title: 'What is react',
        content: 'React is front end javascript framework'
    },
    {
        title: 'Why use React',
        content: 'React is a fovorite JS library among engineers'
    },
    {
        title: 'how do you use React?',
        content: 'I use react by creating compoonents'
    }
]

export default () => {
    return (
        <div>
            <Search/>
        </div>
    )
}