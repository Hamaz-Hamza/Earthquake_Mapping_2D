let map;
let earthquakeData;
let pings = [];
let storedMinYear, storedMaxYear;

function preload() {
    map = loadImage('map.jpg'); 
    earthquakeData = loadStrings("earthquake_data.csv");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    reloadPings();
}


function draw() {
    background(map);
    for (const ping of pings) ping.draw();
}

function reloadPings() {
    pings = [];
    let location;
    let magnitude;
    for (let i = 1; i < earthquakeData.length; i++) {
        data = earthquakeData[i].split(",");
        location = coordsToCartesian(float(data[1]),float(data[2]));
        radius = pow(10, parseFloat(data[4])/3.8);
        pings.push(new Ping(location.x, location.y, radius, color(200,0,0)));
    }
}

function coordsToCartesian(latitude, longitude) {
    let lat = parseFloat(latitude);
    let lon = parseFloat(longitude);
    let x = mapRange(lon, -180, 180, 0, width);
    let y = mapRange(lat, -90, 90, height, 0);
    return createVector(x, y);
}

function mapRange (value, a, b, c, d) {
    value = (value - a) / (b - a);
    return c + value * (d - c);
}
