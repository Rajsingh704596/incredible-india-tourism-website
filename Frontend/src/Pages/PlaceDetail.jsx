import { useEffect, useState, useTransition } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getIndReq } from "../API/Axios";

function PlaceDetail() {
  const [isPending, startTransition] = useTransition();
  const [indData, setIndData] = useState({});

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getIndReq(params.name);
        const data = res.data;
        setIndData(data[0]);
        console.log(data[0]);
      } catch (error) {
        console.log(error);
      }
    });
  }, [params.name]);

  if (isPending) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <div>
        {Object.entries(indData).map(([key, value]) => (
          <div key={key}>
            {key === "image" ? (
              <img src={value} alt={key} />
            ) : (
              <>
                <strong>{key}:</strong> {value}
              </>
            )}
          </div>
        ))}
      </div>
      <button onClick={() => navigate(-1)}>Back to Previous Page</button>
    </div>
  );
}

export default PlaceDetail;
