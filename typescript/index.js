"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bson_1 = require("bson");
const util_1 = require("util");
//
// The order in this file is relevant, since there are objects
// which depend on other objects to be compiled firstly
//
function getMockedObjectId() {
    return new bson_1.ObjectId('ff'.repeat(12));
}
exports.getMockedObjectId = getMockedObjectId;
function getMockedDate(timeToAdd) {
    const base = new Date('2017-11-13T13:13:13.1313Z');
    if (util_1.isNullOrUndefined(timeToAdd)) {
        return base;
    }
    return new Date(base.getTime() + timeToAdd);
}
exports.getMockedDate = getMockedDate;
//# sourceMappingURL=index.js.map