"use strict";
console.log("05 ENUM");
var responseType;
(function (responseType) {
    responseType[responseType["success"] = 200] = "success";
    responseType[responseType["failure"] = 404] = "failure";
})(responseType || (responseType = {}));
console.log(responseType.failure); // print 200
