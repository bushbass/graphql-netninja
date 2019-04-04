const express = require('express')
const graphqlHTTP = require('express-graphql')
const app  = express()


app.use('/graphql', graphqlHTTP({
    
}));

app.listen(process.env.PORT || 4000, 
    () => console.log(`listening on port ${process.env.PORT}`)
)

 