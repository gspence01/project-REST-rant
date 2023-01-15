const React = require('react')

function Default (html) {
    return (
        <html>
            <head>
                <title>Title</title>
            </head>
            <body>
                <h1>Welcome!</h1>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Default