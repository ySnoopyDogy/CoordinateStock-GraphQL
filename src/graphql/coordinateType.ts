import { GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";

export default new GraphQLObjectType({
  name: "Coordinate",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    world: { type: GraphQLString },
    x: { type: GraphQLInt },
    y: { type: GraphQLInt },
    z: { type: GraphQLInt },
  }),
});
