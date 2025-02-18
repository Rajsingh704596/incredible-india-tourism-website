import { useEffect, useState, useTransition } from "react";
import { getReq } from "../API/Axios";
import { NavLink } from "react-router-dom";


function TouristPlace() {
  const [data, setData] = useState([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getReq();
        const data = await res.data;
        setData(data);
      } catch (error) {
        console.log(error);
      }
    });
  }, []);

  if (isPending) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="tourist-place">
      <h1 className="page-title">Tourist Places</h1>
      <ul className="place-list">
        {data &&
          data.map((curElem) => {
            const { id, place ,district} = curElem;
            return (
              <li key={id} className="place-item">
                <p className="place-name">{place}</p>
                <p className="place-dis">({district})</p>
                <NavLink to={`/TouristPlace/${place}`} className="read-more-link">
                  <button className="read-more-btn">Read More</button>
                </NavLink>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default TouristPlace;