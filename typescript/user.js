"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_utils_mongo_nodejs_lib_1 = require("@villemontreal/core-utils-mongo-nodejs-lib");
const mongoose_1 = require("mongoose");
const constants_1 = require("../../config/constants");
/**
 * The Mongoose Schema for a Test User.
 *
 * Note that if a "unique" constaint is required, it
 * will be applied in Mongo directly (using the MongoUpdater),
 * not here, on the Schema!
 *
 * In fact, if you try to add constaints such as
 * "unique" here, they may well not work at all
 * if an index is defined for the same field at the
 * collection level!
 *
 * The collection level constraints and indexes are created
 * by the MongoUpdater and are defined in update files,
 * located at "src/repositories/clients/mongo/updates".
 *
 * NOTE : the Mongoose schemas are currently the way entities
 * are validated before being saved... It is not perfect
 * since it duplicates an entity fields, and the validation is
 * harder to perform *at the service level*, where it should be.
 * The way we are going to perform validation in the future is still
 * under investigation, but it is possible that one day the Mongoose
 * schemas will *only* be used to declare foreign keys (so to be able
 * to use the "populate()" feature of Mongoose), with "strict=false".
 * The validation itself could then be made using the "class-validator"
 * library ( https://github.com/pleerock/class-validator ) or using
 * Json Schemas instead.
 */
const testUserSchema = new mongoose_1.Schema({
    id: {
        type: String,
        description: 'Id of the user.'
    },
    createdAt: {
        type: String,
        description: 'Creation date',
        default: Date.now
    },
    email: {
        type: String,
        description: 'Email of the user.',
        required: true
    },
    name: {
        type: String,
        description: 'Name of the user.',
        required: true
    }
}, { collection: constants_1.constants.mongo.collectionNames.USERS });
/**
 * The Mongoose Model for a Test User.
 *
 * Is returned indirectly via a getter to prevent
 * recursive dependencies with the Mongoose connection.
 */
function getTestUserModel() {
    return core_utils_mongo_nodejs_lib_1.getMongooseConnection().model(constants_1.constants.mongo.collectionNames.USERS, testUserSchema);
}
exports.getTestUserModel = getTestUserModel;
//# sourceMappingURL=user.js.map