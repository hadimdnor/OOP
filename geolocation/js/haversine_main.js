function calculateDistance(lat, lon){
    let depulze = haversine(lat,lon,2.922561,101.650965)
    let pyramid = haversine(lat,lon, 3.073065,101.607787)
    let klcc = haversine(lat,lon,3.158761,101.714524)

    return [depulze,pyramid,klcc]
}

let elButton = document.getElementById("locate")
elButton.addEventListener("click", function(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            let elLat = document.getElementById("lat")
            let elLong = document.getElementById("long")
            let elDepulze = document.getElementById("depulze")
            let elKlcc = document.getElementById("klcc")
            let elSunway = document.getElementById("sunway")

            let userLat = position.coords.latitude
            let userLong = position.coords.longitude

            let distance = calculateDistance(userLat,userLong)

            elLat.innerHTML = "Your Latitude: " + userLat
            elLong.innerHTML = "Your Longitude: " + userLong
            elDepulze.innerHTML = "distance to depulze: " + distance[0] + "km"
            elKlcc.innerHTML = "distance to klcc: " + distance[2] + "km"
            elSunway.innerHTML = "distance to sunway: " + distance[1] + "km"
        })

    }else{
        alert("Geolocation is not supported")
    }
})