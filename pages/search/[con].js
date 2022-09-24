import { useRouter } from "next/router";
import Axios from "axios";
import { useState } from "react";
import ErrorPage from "../../components/ErrorPage";
import Display from "../../components/Display";

function Search() {
  const router = useRouter();
  const [status, setStatus] = useState(false);
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(true);
  const { con } = router.query;
  if (loading) {
    Axios.get(`https://anime-facts-rest-api.herokuapp.com/api/v1/${con}`)
      .then((response) => {
        if (response.data["success"] == true) {
          setStatus(true);
          setResult(response.data);
          console.log(response.data);
        }
        setLoading(false);
      })
      .catch((error) => {
        setStatus(false);
        setLoading(false);
        setResult({});
        console.log("No such anime exists!");
      });
  }
  if (loading) {
    return <div>Loading page...</div>;
  } else {
    return (
      <div>{status ? <Display name={con} data={result} /> : <ErrorPage />}</div>
    );
  }
}
export default Search;
