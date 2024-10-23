import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err)
  return (
      <div className="error-page">
        <h1>{err.status} : {err.statusText}</h1>
        <h2>Something Went Wrong!</h2>
        <p>{err.data}</p>
      </div>
  );
};

export default Error;
