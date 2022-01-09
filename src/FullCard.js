import React from 'react';
import {useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';

const FullCard = ({data}) => {
  const {title} = useParams();

  return (
    <section className="full">
      {data.filter(card => card.title === title).map((card, index) => (
        <div key={index} className="fullCard">
          <h1>{card.title}</h1>
          <p>{card.description}</p>
          <Link to={`/`} className="link">Go to main</Link>
        </div>
      ))}
    </section>
  )
}

export default FullCard;
