const React = require('react')
const Default = require('../default')

function show (data) {
    return (
        <Default>
            <main>
                <img src = {data.place.pic}></img>
                <div>
                    <h1>{data.place.name}</h1>
                    <h2>Rating</h2>
                    <p>Not Rated</p>
                    <h2>Description</h2>
                    <p>description here</p>
                </div>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit</a>
                <form method = "POST" action={`/places/${data.id}?_method=DELETE`}>
                    <button type='submit' className='btn btn-danger'>Delete</button>
                </form>
                <hr></hr>
                <h2>Comments</h2>
                <p>No comments yet!</p>
            </main>
        </Default>
    )
}

module.exports = show