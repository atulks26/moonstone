       import React, { useState, useEffect } from 'react';
       import L from 'leaflet';
       
       import 'leaflet/dist/leaflet.css';
       
       function Location() {
         const [latitude, setLatitude] = useState(null);
         const [longitude, setLongitude] = useState(null);
       
         useEffect(() => {
           if (navigator.geolocation) {
             navigator.geolocation.getCurrentPosition(position => {
               setLatitude(position.coords.latitude);
               setLongitude(position.coords.longitude);
             }, error => {
               console.error(error);
             });
           } else {
             console.error("Geolocation is not supported by this browser.");
           }
         }, []);
       
         useEffect(() => {
           if (latitude && longitude) {
             const map = L.map('map').setView([latitude, longitude], 13);
       
             L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
               attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
               maxZoom: 18,
             }).addTo(map);
       
             L.marker([latitude, longitude]).addTo(map);
           }
         }, [latitude, longitude]);
       
         return (
           <div>
             {latitude && <p>Latitude: {latitude}</p>}
             {longitude && <p>Longitude: {longitude}</p>}
             <div id="map" style={{ height: '500px' }} />
           </div>
         );
       }
       
       export default Location;