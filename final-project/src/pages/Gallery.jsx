import React, { useState, useEffect } from 'react';
import ShowCard from '../components/ShowCard';
import { supabase } from '../supabaseClient'



const Gallery = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: supabaseData, error } = await supabase
        .from('character')
        .select('image, str, dex, class, name, int, cha, con, wis');
      if (error) console.log('Error fetching data from Supabase: ', error);
      else setData(supabaseData);
    };
    fetchData();
  }, []);

  return (
    <div className="gallery">
      {data.map((item) => (
        <ShowCard key={item.id} data={item} />
      ))}
    </div>
  );
};

export default Gallery;