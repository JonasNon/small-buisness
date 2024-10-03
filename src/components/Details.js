import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';



const Details = (props) => {



  // const id = props.match.params.id
  // {/* Change cars to props.cars and remove the cars.json import above */}
  // const listing = props.listings.find(c => c.id == id)
  const { id } = useParams();
  const listing = props.listings.find(c => c.id.toString() === id);
  console.log(listing)

  let defaultProps = {
    center: {
      lat: props.map.lat,
      lng: props.map.lng
    },
    zoom: 11
  };

  useEffect(() => {
    let filteredAddress = listing.address.replaceAll(" ", "+")
    console.log(filteredAddress)
    props.fetchListings(filteredAddress)
    defaultProps = {
      center: {
        lat: props.map.lat,
        lng: props.map.lng
      },
      zoom: 11
    };
  }, [])




    return (
      <div id='main' style={{width: "100vw", height: "100vh", display: 'flex'}}>
        <div id='left' style={{width: "50vw", display: "flex", justifyContent: 'flex-start', flexDirection: "column", alignItems: "center"}}>
          <h1 style={{paddingTop: "5vh"}}>{listing.name}</h1>
          <h3>{listing.address}</h3>
          <h3>{listing.hours}</h3>
          <p>{listing.description}</p>
        </div>
        <div id='right' style={{outline: "2px solid black", width: "50vw", height: "80vh"}}>
          <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          > 
          </GoogleMapReact>
        </div>
      </div>


    )
}

export default Details
