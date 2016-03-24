export default function fetch(url) {
  return new Promise(function(resolve, reject) {
    let req = new XMLHttpRequest();
    req.open("GET", url);
    req.onload = () => {
      (req.status === 200) ?
        resolve(req.response) :
        reject(new Error(req.statusText));
    };
    req.onerror = () => { reject(new Error("Network error")); };
    req.send();
  });
}