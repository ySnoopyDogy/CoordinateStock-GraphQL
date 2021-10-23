import Koa from "koa";
import mount from "koa-mount";
import graphqlHTTP from "koa-graphql";
import schema from "./schema/schema";
import initDB from "./database";

initDB();

const app = new Koa();

app.use(
  mount(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: process.env.NODE_ENV !== "production",
    })
  )
);

app.listen(3000, () =>
  console.log("[SERVER] Started succesfully on port 3000")
);
