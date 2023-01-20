const React = require('react')
const Default = require('../default')

function edit_form (data){
    return (
        <Default>
            <main>
                <h1>Edit Place</h1>
                <form method="POST" action={`/places/${data.id}?_method=PUT`}>
                    <div className='row'>
                        <div className='form-group col-sm'>
                            <label htmlFor='name'>Place Name</label>
                            <input 
                                className ="form-control" 
                                id='name' 
                                name='name'
                                defaultValue = {data.place.name}
                                required/>
                        </div>
                        <div className='form-group col-sm'>
                            <label htmlFor='pic'>Place Picture</label>
                            <input className ="form-control" type='url' id='pic' name='pic' />
                        </div>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='city'>City</label>
                        <input className ="form-control" id='city' name='city' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='state'>State</label>
                        <input className ="form-control" id='state' name='state' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='cuisines'>Cuisines</label>
                        <input className ="form-control" id='cuisines' name='cuisines' required/>
                    </div>
                    <input className = "btn btn-primary" type='submit' value='Edit' />
                </form>
            </main>
        </Default>
    )
}

module.exports = edit_form