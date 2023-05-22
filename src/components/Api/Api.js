import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Api(props) {
  
  const [element, setElement] = useState([]);  
  

  useEffect(() => {
    const fetchElement = async () => {
      const result = await axios.get(props.url);
      setElement(result.data);
    }; 

    fetchElement(); 

  }, [props.url, props.category]);

   

  return (
    <>
       {props.render(element)}      
      
    </>
  )
}

export default Api
