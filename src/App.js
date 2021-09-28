import React, { useEffect } from 'react';
import Tmdb from './Tmdb';

export default () => {

  useEffect(()=>{
    const loadAll = async () => {
      // Pegando a lista TOTAL
      let list = await Tmdb.getHomeList();
    }

    loadAll();
  }, []);

  return (
  <div>
    Olá Mundo!
  </div>
  );
}