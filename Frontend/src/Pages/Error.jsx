import { useNavigate, useRouteError } from "react-router-dom"

function Error() {

    const navigate=useNavigate();

    const error=useRouteError();
    if(error.status == 404){
  return (
    <div>
        The Page you are looking not found

        <button onClick={()=>navigate(-1)||navigate("/")}>Back to Previous Page</button>
        
    </div>
  )
}
}

export default Error
