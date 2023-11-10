import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, BrowserRouter, Routes } from 'react-router-dom';
import axios from 'axios';

const BookListItem = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/books');
        if (response.status === 200) {
          setData(response.data);
          setLoading(false);
          console.log('Données récupérées :', response.data);
        } else {
          setError('Erreur de récupération des données');
          setLoading(false);
        }
      } catch (error) {
        setError('Erreur lors de la récupération des données. Veuillez vérifier votre serveur.');
        setLoading(false);
        console.error('Erreur lors de la récupération des données :', error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  return (
    <div>
      <h1>Catalogue</h1>
      <div className="row">
        {data.map((item) => (
          <div key={item.id} className="col-md-3 mb-4">
            <div className="card">
              <img src='../img/white.png' className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title fs-3">{item.title}</h5>
                <p className="card-text fs-6">{item.author} - {item.genre}</p>
                <p className="card-text fs-6 text-start">{item.description}</p>
                <Link to={'/catalogue/' + item.id} className='btn btn-dark'>Détails →</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookListItem;