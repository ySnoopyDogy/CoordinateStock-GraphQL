import { GraphQLSchema, GraphQLObjectType, GraphQLString } from "graphql";

import coordGraphQLType from "./coordinateType";
import Mutations from "./mutations";

import Coords from "../database/models/coords";

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    coordinate: {
      type: coordGraphQLType,
      args: { name: { type: GraphQLString } },
      resolve(_, args) {
        return Coords.findOne({ name: args.name });
      },
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations,
});
