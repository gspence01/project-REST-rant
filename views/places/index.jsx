const React = require('react')
const Default = require('../default')

function Index (data) {
    let placesFormatted = data.places.map((place, index) =>{
        return (
            <div key = {index} className='col-sm-6'>
                <h2>{place.name}</h2>
                <p className="text-center">
                    {place.cuisines}
                </p>
                <img src = {place.pic} alt={place.name}></img>
                <p className="text-center">
                    Located in {place.city}, {place.state}
                </p>
            </div>
        )
    })
    return (
        <Default>
            <main>
                <h1>Places to Rant and Rave About</h1>
                <div className='row'>
                    {placesFormatted}
                </div>
            </main>
            
        </Default>
    )

}

module.exports = Index