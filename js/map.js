mapboxgl.accessToken =
  "pk.eyJ1Ijoid2hpY2hzdGV2ZW4iLCJhIjoiY2s2bDg4dGNiMDg2aTNkcGZrM2NscWpkcyJ9.dW8XusHAm_ywRJqrecR-rw";
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/whichsteven/clk3dched004x01pqg2uv87y0", // style URL
  center: [-122.30728694154617, 47.655552182760125], // starting position [lng, lat]
  zoom: 1, // starting zoom
  projection: 'globe',
  interactive: false,
  useWebGL2: true,
});

map.on('style.load', () => {
  map.setFog({
      color: 'rgb(186, 210, 235)', // Lower atmosphere
      'high-color': 'rgb(36, 92, 223)', // Upper atmosphere
      'horizon-blend': 0.02, // Atmosphere thickness (default 0.2 at low zooms)
      'space-color': 'rgb(11, 11, 25)', // Background color
      'star-intensity': 0.6 // Background star brightness (default 0.35 at low zoooms )
  });
});

const job_torc = document.getElementById("job_torc");

job_torc.addEventListener("mouseenter", (event) => {
  map.flyTo({
    center: [-80.3923385938034, 37.18948135807281],
    zoom: 5,
    // minZoom: 5,
    speed: 1.0,
  });
});

const job_nokia = document.getElementById("job_nokia");

job_nokia.addEventListener("mouseenter", (event) => {
  map.flyTo({
    center: [-96.98406522152219, 32.93687941157875],
    zoom: 5,
    // minZoom: 5,
    speed: 1.0,
  });
});

const job_ta = document.getElementById("job_ta");

job_ta.addEventListener("mouseenter", (event) => {
  map.flyTo({
    center: [-122.30728694154617, 47.655552182760125],
    zoom: 5,
    // minZoom: 5,
    speed: 1.0,
  });
});

const job_ra = document.getElementById("job_ra");

job_ra.addEventListener("mouseenter", (event) => {
  map.flyTo({
    center: [-122.30728694154616, 47.655552182760125],
    zoom: 5,
    // minZoom: 5,
    speed: 1.0,
  });
});

const job_rf = document.getElementById("job_rf");

job_ta.addEventListener("mouseenter", (event) => {
  map.flyTo({
    center: [-122.30728694154617, 47.655552182760124],
    zoom: 5,
    // minZoom: 5,
    speed: 1.0,
  });
});