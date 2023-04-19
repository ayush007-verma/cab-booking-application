/* global google */
import { GoogleMap, useLoadScript, Marker, Autocomplete, DirectionsRenderer } from '@react-google-maps/api'
import { useState, useRef, useEffect } from 'react'


import axios from 'axios'

const center = {
  lat: 30.5160865,
  lng: 76.6597778
}

const NavigationMap = () => {
  const [map, setMap] = useState( /** @type google.maps.Map */(null))
  const [source, setSource] = useState('')
  const [destination, setDestination] = useState('')

  const [directionRes, setdirectionRes] = useState(null)
  const [distance, setdistance] = useState('')
  const [duration, setduration] = useState('')

  const autoCompleteRef = useRef();

  const options = {
    componentRestrictions: { country: "ng" },
    fields: ["address_components", "geometry", "icon", "name"],
    types: ["establishment"]
  };

  // useEffect(() => {
  //   autoCompleteRef.current = new window.google.maps.places.Autocomplete(
  //     source,
  //     options
  //    );

  //   autoCompleteRef.current.addListener("place_changed", async function(){
  //     const place = await autoCompleteRef.current.getPlace()
  //     console.log(place)

  //   })
  // }, [])

  const libraries = ["places"]

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBav7WqP31PjAQvNM294U_r0Z0G7kGDAM0',
    libraries: libraries
  })

  const calculateRoute = async () => {
    if (source === '' || destination === '') return
    const geoCodingApiURL = `https://maps.googleapis.com/maps/api/geocode/json`
    const apiKey = `AIzaSyBav7WqP31PjAQvNM294U_r0Z0G7kGDAM0`
    console.log(source)
    console.log(destination)

    const res1 = await axios.get(`${geoCodingApiURL}?address=${source}&key=${apiKey}`)
    const res2 = await axios.get(`${geoCodingApiURL}?address=${destination}&key=${apiKey}`)
    console.log(res1.data.results[0].formatted_address)
    console.log(res2.data.results[0].formatted_address)
    const finalSource = res1.data.results[0].formatted_address
    const finalDestination = res2.data.results[0].formatted_address


    const directionService = new google.maps.DirectionsService()
    const result = await directionService.route({
      origin: finalSource,
      destination: finalDestination,
      travelMode: google.maps.TravelMode.DRIVING
    })
    setdirectionRes(result)
    console.log("result -> ")
    console.log(result)

    setdistance(result.routes[0].legs[0].distance.text)
    setduration(result.routes[0].legs[0].duration.text)
    console.log('done')
    console.log(result.routes[0].legs[0].duration.label)
  }

  const clearRoute = async () => {
    setdirectionRes(null)
    setdistance('')
    setduration('')
    setSource('')
    setDestination('')
    reFocus()
  }

  const reFocus = () => {
    map.panTo(center)
  }
  if (!isLoaded) return <div>Loading...</div>
  return (
    <div className="d-flex " style={{height : '100vh'}}>
    {/* // "d-flex flex-row w-100 border border-primary"> */}

      <div className="col-10 ">
        {/* <GoogleMap center={center}  /> */}
        <GoogleMap
          mapContainerClassName="map-container"
          center={{
            lat: 18.52043,
            lng: 73.856743
          }}
          zoom={10}
          mapContainerStyle={{
            width: '100%',
            height: '100%'
          }}
          onLoad={map => setMap(map)}
        >
          <Marker position={center} />
          {
            directionRes && (
              <DirectionsRenderer directions={directionRes} />
            )
          }
        </GoogleMap>
      </div>

      <div className="d-flex col-2 flex-column border border-warning">
        <form>
          <label className='p-2'>Enter Source</label>
          {/* <Autocomplete> */}
          <input class="form-control p-2 bg-light" type="label" name="source" onChange={(e) => setSource(e.target.value)} />
          {/* </Autocomplete> */}
          <br />

          <label className='p-2'>Enter destination</label>
          {/* <Autocomplete> */}
          <input class="form-control p-2 bg-light" type="label" name="destination" onChange={(e) => setDestination(e.target.value)} />
          {/* </Autocomplete> */}
        </form>
        <button class="btn btn-success m-2" onClick={calculateRoute}>Get Route</button>
        <button class="btn btn-success m-2" onClick={clearRoute}>clear Route</button>
        <div className='.g-col-6 .g-col-md-4'>
          <label className='p-2'>Estimated Shortest Path </label>
          <h3 className='p-2'>{distance}</h3>
          <label className='p-2'>Estimated Duration</label>
          <h3 className='p-2'>{duration}</h3>
        </div>
        <button class="btn btn-success m-2" onClick={clearRoute}>Check Available Cabs</button>
        
      </div>

    </div>
  )
}


export default NavigationMap