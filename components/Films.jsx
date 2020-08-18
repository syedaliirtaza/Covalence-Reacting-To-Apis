import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Films = ({ films }) => {
    console.log(films)
    return (
        
            <div className="container">
                {
                    films.map(film => {
                        const {id,title,description} = film ;
                   
                        return(
                            <div key={id} className='cards'>
                                <h1>{title}</h1>
                                <p>{description}</p>
                            </div>
                        );
                    })
                }
            </div>
        
   );
}

export default Films;