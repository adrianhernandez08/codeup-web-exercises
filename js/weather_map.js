function getInfo(){
    const newName= document.getElementById("cityInput");
    const cityName=document.getElementById("cityName");
    cityName.innerHTML="--"+newName.value+"--"

    fetch("http://api.openweathermap.org/data/2.5/forecast?q="+ newName.value +'&appid=f94de48a8d3f08bfb3da0b67ab2ed431&units=imperial')
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            for(i=0; i<5; i++){
                document.getElementById("day" + (i+1) + "Min").innerHTML = "Min:" + Number(data.list[i].main.temp_min).toFixed(1)+"°"
            }
            for(i=0; i<5; i++){
                document.getElementById("day" + (i+1) + "Max").innerHTML = "Max:" + Number(data.list[i].main.temp_max).toFixed(1)+"°"
            }
            for(i=0; i<5; i++){
                document.getElementById("img" + (i+1)).src="https://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + ".png"
            }
        })
        .catch(err => alert("SOMETHING IS WRONG"))
}
function defaultScreen(){
    document.getElementById("cityInput").defaultValue="Kingsville";
    getInfo();
}
const d =new Date();
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
function CheckDay(day){
    if(day +d.getDay() > 6){
        return day +d.getDay()-7;
    }
    else{
        return day +d.getDay();
    }
}
for(i=0; i<5; i++) {
    document.getElementById("day"+(i+1)).innerHTML = weekday[CheckDay(i)];
}
let coordinate = [-97.8561, 27.5159];
<!--map -->
function map() {
    mapboxgl.accessToken = myMapBox;
    var map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        zoom: 4, // starting zoom
        center: [-97.8561, 27.5159] // [lng, lat]
    });
    draggableMarker(map);
}
map();
function draggableMarker(map){
    const marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat(coordinate)
        .addTo(map);
    function onDragEnd() {
        const lngLat = marker.getLngLat();
        coordinates.style.display = 'block';
        coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
        reverseGeocode(lngLat).then(function(location){
            console.log(location);
        })
    }
    marker.on('dragend', onDragEnd);
};
function reverseGeocode(coordinates) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?access_token=" + myMapBox)
        .then(function (res) {
            return res.json();
        })
        // to get all the data from the request, comment out the following three lines...
        .then(function (data) {
            console.log(data);
            return data.features[0].text;

        });

}
