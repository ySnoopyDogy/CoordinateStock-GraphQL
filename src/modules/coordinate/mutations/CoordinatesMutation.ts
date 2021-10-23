import {
  GraphQLFieldConfigMap,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString,
} from "graphql";
import CoordinateType from "../CoordinateType";
import CoordinateModel from "../CoordinateModel";

const CoordinateMutation: GraphQLFieldConfigMap<typeof CoordinateType, unknown> = {
  addCoord: {
    type: CoordinateType,
    args: {
      name: { type: new GraphQLNonNull(GraphQLString) },
      description: { type: GraphQLString },
      world: { type: new GraphQLNonNull(GraphQLString) },
      x: { type: new GraphQLNonNull(GraphQLInt) },
      y: { type: GraphQLInt },
      z: { type: new GraphQLNonNull(GraphQLInt) },
    },
    async resolve(_, args) {
      return CoordinateModel.create({
        name: args.name,
        description: args.description,
        world: args.world,
        createdTimestamp: Date.now(),
        x: args.x,
        y: args.y,
        z: args.z,
      }).then((data) => data);
    },
  },
  updateCoord: {
    type: CoordinateType,
    args: {
      name: { type: GraphQLString },
      description: { type: GraphQLString },
      world: { type: GraphQLString },
      x: { type: GraphQLInt },
      y: { type: GraphQLInt },
      z: { type: GraphQLInt },
    },
    async resolve(_, args) {
      return CoordinateModel.updateOne({ name: args.name }, { args }).then(
        (data) => data
      );
    },
  },
  deleteCoord: {
    type: CoordinateType,
    args: {
      name: { type: GraphQLString },
    },
    resolve(_, args) {
      CoordinateModel.deleteOne({ name: args.name }).then((data) => data);
    },
  },
};

export default CoordinateMutation;
