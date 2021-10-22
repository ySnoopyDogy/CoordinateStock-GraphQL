import { GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";

import coordGraphQLType from "./coordinateType";
import Coord from "../database/models/coords";

export default new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addCoord: {
      type: coordGraphQLType,
      args: {
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        world: { type: GraphQLString },
        x: { type: GraphQLInt },
        y: { type: GraphQLInt },
        z: { type: GraphQLInt },
      },
      async resolve(_, args) {
        return Coord.create({
          name: args.name,
          description: args.description,
          world: args.world,
          x: args.x,
          y: args.y,
          z: args.z,
        }).then((data) => data);
      },
    },
    updateCoord: {
      type: coordGraphQLType,
      args: {
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        world: { type: GraphQLString },
        x: { type: GraphQLInt },
        y: { type: GraphQLInt },
        z: { type: GraphQLInt },
      },
      async resolve(_, args) {
        return Coord.updateOne({ name: args.name }, { args }).then(
          (data) => data
        );
      },
    },
    deleteCoord: {
      type: coordGraphQLType,
      args: {
        name: { type: GraphQLString },
      },
      resolve(_, args) {
        Coord.deleteOne({ name: args.name }).then((data) => data);
      },
    },
  },
});
