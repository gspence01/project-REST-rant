const React = require('react')
const Default = require('./default')

function error404 () {
    return (
        <Default>
            <main>
                <h1>404: Page not found</h1>
                <p>Oops, sorry, we can't find this page! </p>
            </main>
        </Default>
    )
}

module.exports = error404