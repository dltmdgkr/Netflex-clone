import { useLocation } from "react-router-dom";

function Search() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const keyword = searchParams.get("keyword");
  console.log(keyword);

  return null;
}

export default Search;
