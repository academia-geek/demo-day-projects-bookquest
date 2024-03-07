import React, { memo, useCallback, useEffect, useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useLocation } from 'react-router-dom';
import { obtenerDatosBiblioteca } from '../../src/redux/Actions/AgregarLibro';
import { useDispatch } from 'react-redux';

const containerStyle = {
    width: '800px',
    height: '800px'
};

const GoogleMaps = () => {
    const dispatch = useDispatch();


    const { isLoaded } = useJsApiLoader({
        id: 'google-map-scxript',
        googleMapsApiKey: "AIzaSyBlEyHUhcHj3sygANdgv-qeOqheojscX5U  "
    });

    const Local = localStorage.getItem("Data")
    const ParseodatosString = JSON.parse(Local);
    console.log(ParseodatosString.ubicación.longitude);


    const [map, setMap] = useState(null);
    const [center, setCenter] = useState({ lat: 6.867813, lng: -75.224333 });
    const [userLocation, setUserLocation] = useState(null);
    const [destination, setDestination] = useState({ lat: ParseodatosString.ubicación.latitude, lng: ParseodatosString.ubicación.longitude }); // Coordenadas del punto de llegada predeterminado

    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map);
    }, [center]);

    const onUnmount = useCallback(function callback(map) {
        setMap(null);
    }, []);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const userLatLng = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    // console.log(userLatLng);
                    setUserLocation(userLatLng);
                    setCenter(userLatLng);
                },
                (error) => {
                    console.error("Error getting user location:", error);
                }
            );
        } else {
            console.error("No se pudo hacer la Geolocalizacion");
        }
    }, []);

    useEffect(() => {
        if (map && userLocation) {
            const directionsService = new window.google.maps.DirectionsService();
            directionsService.route(
                {
                    origin: userLocation,
                    destination: destination,
                    travelMode: 'DRIVING'
                },
                (result, status) => {
                    if (status === 'OK') {
                        const directionsRenderer = new window.google.maps.DirectionsRenderer();
                        directionsRenderer.setDirections(result);
                        directionsRenderer.setMap(map);
                    } else {
                        console.error("Directions request failed due to " + status);
                    }
                }
            );
        }
    }, [map, userLocation, destination]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             let  data  = await dispatch(obtenerDatosBiblioteca());
    //         } catch (error) {
    //             console.log("Error en la petición de información de biblioteca.", error);
    //         }
    //     };
    //     fetchData();
    // }, [dispatch]);
    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={20}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            <Marker position={center}></Marker>
        </GoogleMap>
    ) : <></>;
};

export default memo(GoogleMaps);
