import React from 'react';
import './Ninjas.css';

const Ninjas = ({ninjas, deleteNinja}) => {
  return (
    <div>
      {
        ninjas.map(ninja => {
          return (ninja.age > 10) ? (
            <div className="show-ninjas collection" key={ninja.id}>
              <div className="collection-item">
                <span> {ninja.id}</span>. My name is {ninja.name} and I am {ninja.age} years old.  I am a {ninja.profession}.
                <span className="delete-ninja" onClick={() => deleteNinja(ninja.id)}></span>
              </div>
            </div>
          ) : null
        })
      }
    </div>
  )
}

export default Ninjas;