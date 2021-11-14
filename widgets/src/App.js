import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items=[
    {
        title:'What is React?',
        content:'React is a front-end JS Framework'
    },
    {
        title:'Why use React?',
        content:'React is most popular JS lib'
    },
    {
        title:'How do you use React?',
        content:'You use React by creating components.'
    }
]

export default () => {
    return (
        <div className="ui container">
            <Search />
        </div>
    )
}