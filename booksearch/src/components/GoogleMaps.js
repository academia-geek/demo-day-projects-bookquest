import React, { memo, useCallback, useEffect, useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useLocation } from 'react-router-dom'; // Importación de useLocation de react-router-dom
import { obtenerDatosBiblioteca } from '../../src/redux/Actions/AgregarLibro'; // Importación de obtenerDatosBiblioteca de redux
import { useDispatch, useSelector } from 'react-redux'; // Importación de useDispatch de react-redux

const containerStyle = {
    width: '500px',
    height: '500px'
};
const GoogleMaps = () => {
    //Estados para las Coordenadas.
    const [coorderadaLatitud, setCoordenadasLATITUD] = useState()
    const [coorderadaLongitud, setCoordenadasLONGITUD] = useState()

    const ArrayPosiciones = [
        {
            lat: 6.310980,
            lng: -75.554515
        },
        {
            lat: 6.156879,
            lng: -75.365668

        }
    ]

    const randomIndex = Math.floor(Math.random() * ArrayPosiciones.length);
    // Obtener la posición aleatoria
    const randomPosition = ArrayPosiciones[randomIndex];
    console.log(randomPosition);
    // Redux dispatch
    const dispatch = useDispatch();
    // Carga de la API de Google Maps
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-scxript',
        googleMapsApiKey: "AIzaSyBlEyHUhcHj3sygANdgv-qeOqheojscX5U  "
    });

    const obtenerYMostrarDatos = async () => {
        try {
            const datos = await obtenerDatosBiblioteca();
            // console.log(datos);
            datos.forEach(coordenadas => {
                console.log(coordenadas.ubicación)
                setCoordenadasLATITUD(coordenadas.ubicación._lat)
                setCoordenadasLONGITUD(coordenadas.ubicación._long)
            });
        } catch (error) {
            console.log(error);
        }
    }
    //Llamado de la funcion de AgregarLibros Actions.
    useEffect(() => {
        obtenerYMostrarDatos();
    }, [])



    // Estados del componente
    const [map, setMap] = useState(null); // Estado para el mapa
    const [center, setCenter] = useState({ lat: 6.867813, lng: -75.236733 }); // Estado para el centro del mapa
    const [userLocation, setUserLocation] = useState(null); // Estado para la ubicación del usuario
    const [destination, setDestination] = useState({ lat: 6.332199, lng: -75.556697 }); // Coordenadas del punto de llegada predeterminado


    // Callback para cuando el mapa se carga correctamente
    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map);
    }, [center]);

    // Callback para cuando el componente se desmonta
    const onUnmount = useCallback(function callback(map) {
        setMap(null);
    }, []);

    // Efecto para obtener la ubicación actual del usuario
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
            console.error("Geolocation is not supported by this browser.");
        }
    }, []);

    // Efecto para trazar la ruta desde la ubicación del usuario hasta el destino
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

    // Renderización del mapa de Google
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
