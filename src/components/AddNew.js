import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';
import { TextField, Button, Container } from "@mui/material";



const AddNew = (props) => {

  let defaultProps = {
    center: {
      lat: props.map.lat,
      lng: props.map.lng
    },
    zoom: 11
  };



  const [state, setState] = useState({
    name: "",
    description: "",
    address: "",
    hours: ""
  });

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SUBMITTED")
    let newID = props.listings[props.listings.length-1].id + 1
    console.log(newID)
    props.addListing({...state, id: newID})
  }



    return (
      <div id='main' style={{width: "100vw", height: "100vh", display: 'flex'}}>
        <div id='left' style={{width: "50vw", display: "flex", justifyContent: 'flex-start', flexDirection: "column", alignItems: "center"}}>
        <form onSubmit={handleSubmit}>
          <TextField
              style={{margin: "1vh", width: "45vw"}}
              required
              onChange={handleTextChange}
              value={state.name}
              name="name"
              label="Name"
              type="text"
              variant="standard"
            />
            <TextField
              style={{margin: "1vh", width: "45vw"}}
              required
              onChange={handleTextChange}
              value={state.description}
              name="description"
              label="Description"
              type="text"
              variant="standard"
            />
            <TextField
              style={{margin: "1vh", width: "45vw"}}
              required
              onChange={handleTextChange}
              value={state.address}
              name="address"
              label="Address"
              type="text"
              variant="standard"
            />
            <TextField
              style={{margin: "1vh", width: "45vw"}}
              required
              onChange={handleTextChange}
              value={state.hours}
              name="hours"
              label="Hours"
              type="text"
              variant="standard"
            />
            <Button
              style={{margin: "2vh", width: "22.5vw", alignContent: "flex-start"}}
              onClick={handleSubmit}
              className="login-button"
              variant="contained"
              color="primary"
            >Submit</Button>
          </form>
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

export default AddNew
