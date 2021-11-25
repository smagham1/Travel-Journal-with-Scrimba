import React from 'react'
import Card from './Card'
import Data from './data'

function Main() {
    const places = Data.map(item => {
        return (
            <Card 
                key={item.id}
                item={item} />
        )
    })
    return (
        <div>
            <section>{places}</section>
        </div>
    )
}


export default Main