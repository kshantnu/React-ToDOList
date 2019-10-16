import {useEffect, useState} from 'react';


const useServiceHelper = (dependencies) => {
  
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [todos, setResponse] = useState([]);

  async function fetchData() {
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          if(localStorage.getItem('todosList')) {
            resolve(JSON.parse(localStorage.getItem('todosList')));
          } else {
            reject();
          }
          
        },2000)
      })
      try{
        const response = await promise;
        return response;
        
      } catch (error) {
         throw new Error('failed to load todos');
      } 
  }
  
  useEffect(() => {
    fetchData().then((data) => {
      setResponse(data);
      setIsDataLoaded(true);
    }).catch((error) => {
       console.log("error occured", error);
       setResponse(null);
    });
    
  },dependencies);
  
  return {isDataLoaded, todos};
}


export default useServiceHelper;