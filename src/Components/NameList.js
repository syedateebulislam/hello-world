import React from 'react'
import Person from './Person'

function NameList() {

    //const names = ['bruce','clark','diana']
    const persons = [
        {
            id:1,
            name:'bruce',
            age:30,
            skill:'react'
        },
        {
            id:2,
            name:'clark',
            age:25,
            skill:'angular'
        },
        {
            id:1,
            name:'diana',
            age:28,
            skill:'vue'
        }
    ]

    // const nameList = names.map(name => <h1>{name}</h1>)
    {/**
    1-A key is a special string attribute you need to include when creating lists of element
    2-Keys give the elements a stable identity.
    3-Keys help react identify which items have changed,are added,or are removed.
    4-Helps in efficient update of the UI's.
    */}
    const personList = persons.map(person => <Person key={Person.id} personProp={person}/>)
    
    return (
        <div>
            {/*
            <h1>{names[0]}</h1>
            <h1>{names[1]}</h1>
            <h1>{names[2]}</h1>
            */}
            
            {/*
            names.map(name => <h1>{name}</h1>)
            */}
            {/*{nameList}*/}
            {personList}
        </div>
    )
}

export default NameList