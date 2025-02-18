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
    <div className="place-detail">
      <h1 className="page-title">Place Details</h1>
      <div className="detail-container">
        {Object.entries(indData)
          .filter(([key]) => key !== "id") // Filter out the 'id' key
          .map(([key, value]) => (
            <div key={key} className="detail-item">
              {key === "image" ? (
                <img src={value} alt={key} className="detail-image" />
              ) : (
                <>
                  <strong className="detail-key">{key}:</strong>{" "}
                  <span className="detail-value">{value}</span>
                </>
              )}
            </div>
          ))}
      </div>
      <button className="back-button" onClick={() => navigate(-1)}>
        Back to Previous Page
      </button>
    </div>
  );
}

export default PlaceDetail;