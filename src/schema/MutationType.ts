import { GraphQLObjectType } from "graphql";
import CoordinatesMutation from "../modules/coordinate/mutations";

export default new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    ...CoordinatesMutation,
  }),
});
