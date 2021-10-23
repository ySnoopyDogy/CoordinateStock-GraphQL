import { GraphQLObjectType, GraphQLString } from "graphql";
import CoordinateModel from "../modules/coordinate/CoordinateModel";
import CoordinateType from "../modules/coordinate/CoordinateType";

const QueryType = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    coordinate: {
      type: CoordinateType,
      args: { name: { type: GraphQLString } },
      resolve: (_, args) => CoordinateModel.findOne({ name: args.name }),
    },
  }),
});

export default QueryType;
