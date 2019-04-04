const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(process.env.PORT || 4000, () =>
  console.log(
    `listening on port ${process.env.PORT ? process.env.PORT : "4000"}`
  )
);
