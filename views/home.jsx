const React = require('react')
const Default = require('./default')

function home () {
    return (
        <Default>
            <main>
                <h1>Home</h1>
                <div>
                    <img src="/images/salmon-bowl.jpg" alt="Salmon bowl"/>
                    <div>
                        Photo by <a href="https://unsplash.com/@pwign?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Anh Ngyuen</a> on <a href="https://unsplash.com/photos/kcA-c3f_3FE">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn btn-primary">Places Page</button>
                </a>

            </main>
        </Default>
    )
}

module.exports = home