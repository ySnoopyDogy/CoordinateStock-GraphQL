import Koa from 'koa';
import mount from 'koa-mount';
import graphqlHTTP from 'koa-graphql';
import schema from './graphql/schema';

const app = new Koa();

app.use(mount('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
})));

app.listen(3000, () => console.log('[SERVER] Started succesfully on port 3000'));
