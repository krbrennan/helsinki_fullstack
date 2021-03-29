import React from 'react'

import Person from './Person'

const Persons = (props) => {    
    if(props.filtered.length === 0) {
      return(
        props.people.map((person, idx) => {
           return <Person info={person} />
        })
      )
    } else {
        return(
            props.filtered.map((person, idx) => {
                return <Person info={person} />
              })
        )
    }
}

export default Persons