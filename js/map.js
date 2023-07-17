mapboxgl.accessToken =
  "pk.eyJ1Ijoid2hpY2hzdGV2ZW4iLCJhIjoiY2s2bDg4dGNiMDg2aTNkcGZrM2NscWpkcyJ9.dW8XusHAm_ywRJqrecR-rw";
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/whichsteven/clk3dched004x01pqg2uv87y0", // style URL
  center: [-74.5, 40], // starting position [lng, lat]
  zoom: 9, // starting zoom
});

// const job_torc = document.getElementById("test");

// // This handler will be executed only once when the cursor
// // moves over the unordered list
// test.addEventListener(
//   "mouseenter",
//   (event) => {
//     // highlight the mouseenter target
//     event.target.style.color = "purple";

//     // reset the color after a short delay
//     setTimeout(() => {
//       event.target.style.color = "";
//     }, 500);
//   },
//   false,
// );

function flyToBlacksburg() {
    map.flyTo({center: [-80.3923385938034, 37.18948135807281], zoom: 11, minZoom: 5});
}

function flyToDallas() {
    map.flyTo({center: [-96.98406522152219, 32.93687941157875], zoom: 10, minZoom: 5});
}

function flyToSeattle() {
    map.flyTo({center: [-122.30728694154617, 47.655552182760125], zoom: 10, minZoom: 5});
}

function flyToPNW() {
    map.flyTo({center: [-122.30728694154617, 47.655552182760125], zoom: 10, minZoom: 5});
}
