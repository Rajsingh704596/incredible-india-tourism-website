import { useEffect, useState, useTransition } from "react"
import { getReq } from "../API/Axios";
import { NavLink } from "react-router-dom";



function TouristPlace() {

  const[data,setData]=useState([]);
  const[isPending,startTransition]=useTransition();

   
    useEffect(()=>{

      startTransition(async()=>{

        try {
          const res= await getReq();
          const data= await res.data;
          setData(data);
          // console.log(data);
  
        } catch (error) {
          console.log(error);
        }
      })
    },[])

    isPending && <h1>Loading...</h1>

  return (
    <div>

    <ul>{
    data&&data?.map((curElem)=>{
           const{id,place}=curElem;
           return (
            <li key={id}>
              <p>{place}</p>
              <NavLink to={`/TouristPlace/${place}`}>
              <button>Read More</button>
              </NavLink>
            </li>
           )
    })}
    </ul>
      
    </div>
  )
}

export default TouristPlace
