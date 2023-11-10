import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, BrowserRouter, Routes } from 'react-router-dom';
import { useParams } from 'react-router';
import axios from 'axios';

function Catalogue() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const { id } = useParams();
    const idLivre = id - 1; 
    console.log(idLivre);
    const [recetteData, setRecetteData] = useState(null);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:4000/books');
          if (response.status === 200) {
            setData(response.data[idLivre]);
            setLoading(false);
            console.log(idLivre);
            console.log('Données récupérées :', response.data[idLivre]);
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
    );
  };
  
  export default Catalogue;