import { useEffect, useState } from "react";
export default function useFetch(url) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async (urlParam) => {
      const response = await fetch(urlParam);
      const newData = await response.json();
      setData(newData);
    };
    fetchData(url);
  });
  return data;
}
