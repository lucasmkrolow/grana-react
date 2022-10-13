import { useEffect, useState } from "react";

export default multipleFetch = async (url) => {
  const [data, setData] = useState([]);
  let nPage = 1;
  try {
    const response = await fetch(url + "&page=" + nPage);
    const json = await response.json();
    const completeData = [...data, ...json];
    setData(completeData);
    nPage++;
  } catch (e) {
    console.log("We have the error", e);
  }
  console.log(completeData);
  return data;
};
