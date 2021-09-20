'use strict'
window.addEventListener('load', () => {

    const btn = document.getElementById('button');
    const search = document.getElementById('search');
    let address = document.getElementById('ip');
    let location = document.getElementById('location');
    let timezone = document.getElementById('timezone');
    let isp = document.getElementById('isp');

    var mymap = L.map('mapid');
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoieWVpbSIsImEiOiJja3RxZzZob2swcHJ6MnZxc3drdjR5YW11In0.H2T2iRuGVpgs7bVGLTu8Gw'
    }).addTo(mymap);


    const isResponseOk = (response) => {
        if (!response.ok)
            throw new Error(response.status);
        return response.text();
    }
    fetch("https://api.ipify.org/?format=json")
        .then(response => isResponseOk(response))
        .then(data => {
            let ip = JSON.parse(data).ip
            searchIP(ip)

        })
        .catch(err => console.error("ERROR: ", err.message));

    function searchIP(ip) {
        fetch(`https://geo.ipify.org/api/v1?apiKey=at_8U9pWr4bmtri5r7d48hvm7bjDwUjC&ipAddress=${ip}`)
            .then(response => isResponseOk(response))
            .then(data => {
                let date = JSON.parse(data);
                console.log(date.location)
                address.innerHTML = date.ip;
                location.innerHTML = `${date.location.city}, ${date.location.country}`
                timezone.innerHTML = `UTC${date.location.timezone}`;
                isp.innerHTML = date.isp;
                loadMap(date.location.lat, date.location.lng);
            })
            .catch(err => console.error("ERROR: ", err.message));
    }
    var greenIcon = L.icon({
        iconUrl: './images/icon-location.svg',
        iconSize: [50, 50],
        iconAnchor: [12, 80],
    });

    function loadMap(lat, lon) {
        mymap.setView([lat, lon], 17);
        L.marker([lat, lon], { icon: greenIcon }).addTo(mymap);
    }

    btn.addEventListener('click', () => {
        let ads = search.value;
        let regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        regex.test(ads)?searchIP(ads):alert('Please enter a valid ip address');
    });
});