import React from 'react';

const Persons = ({ persons }) => {
    return (
        
            <div className="container">
                {
                    persons.map(person => {
                        const {id,name,gender,age} = person ;
                   
                        return(
                            <div key={id} className='cards'>
                                <h1>{name}</h1>
                                <p>{` age is ${gender} and age is ${age}`}</p>
                            </div>
                        );
                    })
                }
            </div>
        
   );
}

export default Persons;