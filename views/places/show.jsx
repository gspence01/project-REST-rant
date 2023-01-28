const React = require('react')
const Default = require('../default')

function show (data) {
    let comments = (
        <h4 style={{color: "grey"}}>No comments yet!</h4>
    )

    let rating = (
        <h4 style={{color: "grey"}}>Not yet rated</h4>
    )

    if(data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) =>{
            return tot + c.stars
        }, 0)
        let averageRating = sumRatings/data.place.comments.length
        rating = (
            <h4>{Math.round(averageRating)} stars</h4>
        )
        comments = data.place.comments.map((c, index) => {
            return (   
                <div className="col-5" key={c.id}>
                    <div className='card card-block'>
                        <h2 className="rant">
                            {c.rant ? 'Rant! 🤬' : 'Rave! 🔥'}
                        </h2>
                        <h4>{c.content}</h4>
                        <h3>
                             <stong>- {c.author}</stong>
                        </h3>
                        <h4>Rating: {c.stars}</h4>
                    </div>
                </div>   
            )
        })
    }

    return (
        <Default>
            <main>
                <div className='d-flex flex-row justify-content-center'>
                    <div>
                        <img src = {data.place.pic}></img>
                        <h3>Located in {data.place.city}, {data.place.state}</h3>
                    </div>
                    <div>
                        <h1>{data.place.name}</h1>
                        <h2>Rating</h2>
                        {rating}
                        <h2>Description</h2>
                        <h4>{data.place.showEstablished()}</h4>
                        <p>Serving {data.place.cuisines}</p>
                    </div>
                </div>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit</a>
                <form method = "POST" action={`/places/${data.id}?_method=DELETE`}>
                    <button type='submit' className='btn btn-danger'>Delete</button>
                </form>
                <hr></hr>
                <h2>Comments</h2>
                <div className="container">
                    <div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
                        {comments}
                    </div>
                </div>
                <hr></hr>
                <h2 style={{color: 'cornflowerblue'}}>Got your own Rant or Rave?</h2>
                <form method = "POST" action={`/places/${data.place.id}/comment`}>
                    <div className='form-group'>
                        <label htmlFor='author'>Author</label>
                        <input type= 'text' className ="form-control" id='author' name='author'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='Content'>Content</label>
                        <textarea className ="form-control" id='content' name='content'></textarea>
                    </div>
                    <div className="row">
                        <div className='col form-group'>
                            <label htmlFor='stars'>Rating</label>
                            <input type= 'number' step='0.5' className ="form-control" id='stars' name='stars'/>
                        </div>
                        <div className='col form-group'>
                            <label htmlFor='rant'>🤬Rant🤬 </label>
                            <input type= 'checkbox' id='rant' name='rant'/>
                        </div>
                    </div>
                    <input className = "btn btn-primary" type='submit' value='Add Comment' />
                </form>
            </main>
        </Default>
    )
}

module.exports = show