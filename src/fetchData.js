import wrapPromise from "./wrapPromise";

function fetchData(url) {
  const promise = fetch(url)
    .then(res => res.json())
    .then(res => res?.results);

  return wrapPromise(promise);
}

export default fetchData;
