import {
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

export default new GraphQLObjectType({
  name: "Coordinate",
  fields: () => ({
    _id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    world: { type: new GraphQLNonNull(GraphQLString) },
    x: { type: new GraphQLNonNull(GraphQLInt) },
    y: { type: GraphQLInt },
    z: { type: new GraphQLNonNull(GraphQLInt) },
  }),
});
