import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Form = (props) => {
  return(
    <form onSubmit={props.onFormSubmit}>
      Find Countries:  <input onChange={props.onFieldChange} />
    </form>
  )
}


const Weather = (props) => {
console.log(props.weather)
  if(props.weather) {
    return(
      <div>
        <h2>Current Weather</h2>
        <h4>Temperature:  {props.weather.current.temperature} Celcius</h4>
        <img src={props.weather.current.weather_icons[0]}></img>
        <h4>Wind: {props.weather.current.wind_speed} Km/H moving {props.weather.current.wind_dir} </h4>
      </div>
    )
  } else {
    return(
      <div>
        <h2>Current Weather</h2>
        <span>...Loading...</span>
      </div>
    )
  }
}


const CountryInfo = (props) => {
  // console.log(props)
  return(
    <div>
      <h2>{props.info.countries[0].name}</h2>
      <p>Capital: {props.info.countries[0].capital}</p>
      <p>Population:  {props.info.countries[0].population}</p>
      <h4>Languages:</h4>
      <ul>
        { props.info.countries[0].languages.map((language) => {
            return <li>{language.name}</li>
        })}
      </ul>
      <img style={{maxWidth: 250, maxHeight:250}} src={ props.info.countries[0].flag }></img>
      <Weather weather={props.info.weather} />
    </div>
  )
}

const Country = (props) => {
  // console.log(props.info.name)
  // console.log(props)
  return(
    <form onSubmit={props.showClicked}>
      <p>{props.info.name}</p>
      <button>Show</button>
    </form>
  )
}

const FinalCountries = (props) => {
  // console.log(props)
  if(props.countries.length === 0) {
    return(
      <div>
        <h2>Countries that match your search:</h2>
        <h4>Nothing yet searched!</h4>
      </div>
    )
  } else if(props.countries.length === 1) {
    return(
      <CountryInfo info={props} />
    )
  } else if(props.countries.length > 10) {
      return(
        <h4>Too many matches, specify another filter</h4>
      )
  } else {
    return (
      <div>
        <h2>Countries that match your search:</h2>
        {props.countries.map((country) => {
          return <Country showClicked={props.showClickedCountry} info={country} />
        })}
      </div>
    )
  }
}

function App() {
  const [ lettersToSearch, setLettersToSearch ] = useState('')
  const [ searched, setSearched ] = useState('')
  const [ countries, setCountries ] = useState([])
  const [ filteredCountries, setFilteredCountries ] = useState([])

  const [ countryToGetWeatherFor, setCountryToGetWeatherFor ] = useState()
  const [ weather, setWeather ] = useState()


  // get countries
  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/all`)
      .then((res) => {
        setCountries(res.data)
      })
  }, [])


  // const clearSetSearched = () => {
  //   return console.log('cleared')
  //   // setSearched('')
  // }


  const submitForm = (event) => {
    // setSearched to whatever is returned from lettersToSearch against countries
    event.preventDefault()
    setSearched(lettersToSearch)

    // setSearched here
    const finalSearch = countries.filter((country) => {
      // look at each country, if country.name.includes(lettersToSearch), return country
      return country.name.toLowerCase().includes(lettersToSearch)
    })
    // console.log(`final search: ${finalSearch[0].name}`)

    setFilteredCountries(finalSearch)
    getWeather(finalSearch[0].name)
    // setLettersToSearch('')
    setSearched('')
  }




  const countryToSearchFor = (event) => {
    setLettersToSearch(event.target.value.toLowerCase())
  }




  const getWeather = (props) => {
    console.log(props)
    axios
      .get(`http://api.weatherstack.com/current?access_key=e2d7f68a9ec3a48b81bad1fabe1d3ed2&query=${props}`)
      .then((res) => {
        setWeather(res.data)
      })
  }




  const showClicked = (event) => {
    event.preventDefault()
    const countryToExpand = event.target.childNodes[0].innerHTML
    // console.log(countryToExpand)

    // set country to get weather for
    setCountryToGetWeatherFor(countryToExpand)

    // go through countries, filter out match, setCountries to match
    const clickedCountry = filteredCountries.filter((country) => {
      if(country.name == countryToExpand) {
        return country
      }
    })

    setFilteredCountries(clickedCountry)
    getWeather(clickedCountry[0].name)
    // console.log(clickedCountry)
  }


  return (
   <div>
     <Form onFormSubmit={submitForm} onFieldChange={ countryToSearchFor } />
     <FinalCountries showClickedCountry={showClicked} getWeather={getWeather} countries={filteredCountries} weather={weather} />
   </div>
  );
}

export default App;
