import React from 'react'

function NameList_1() {
    const nameArr = ['bruce','clark','diana','bruce']
    {/**
    When to use index as a key?
    1- The items in your list do not have a unique id.
    2- The list is a static key & will not change.
    3- This list will never be ordered or filtered.
    */}
    const nameList = nameArr.map((names,index) =>  <h2 key={index}>{index} {names}</h2>)
    return (
        <div>
            {nameList}
        </div>
    )
}

export default NameList_1
