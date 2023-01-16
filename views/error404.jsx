const React = require('react')
const Default = require('./default')

function error404 () {
    return (
        <Default>
            <main>
                <h1>404: Page not found</h1>
                <p>Oops, sorry, we can't find this page! </p>
            </main>
            <div>
                <img src="/images/404-pup.jpg" alt="puppy in a raincoat"/>
                    <div>
                        Photo by <a href="https://unsplash.com/es/@charlesdeluvio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Charles Deluvio</a> on <a href="https://unsplash.com/photos/lJJlaUWYrPE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
            </div>
        </Default>
    )
}

module.exports = error404