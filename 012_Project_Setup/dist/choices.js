"use strict";
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Editor"] = 1] = "Editor";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
let userRole = Role.Admin;
userRole = 2;
var RoleCustom;
(function (RoleCustom) {
    RoleCustom[RoleCustom["Admin"] = 5] = "Admin";
    RoleCustom[RoleCustom["Editor"] = 10] = "Editor";
    RoleCustom[RoleCustom["Guest"] = 15] = "Guest";
})(RoleCustom || (RoleCustom = {}));
let custUserRole = RoleCustom.Admin;
custUserRole = 10;
var RoleString;
(function (RoleString) {
    RoleString["Admin"] = "ADMIN";
    RoleString["Editor"] = "EDITOR";
    RoleString["Guest"] = "GUEST";
})(RoleString || (RoleString = {}));
let strUserRole = RoleString.Admin;
let literalUserRole = "ADMIN";
literalUserRole = "EDITOR";
let literalPossibleResults;
literalPossibleResults = [1, 1];
literalPossibleResults = [1, -1];
literalPossibleResults = [-1, 1];
literalPossibleResults = [-1, -1];
function access(role) {
}
;
let userRoleWithoutType = "ADMIN";
access(userRoleWithoutType);
function accessWithType(role) {
}
let typeUserRole = "ADMIN";
access(typeUserRole);
let userWithType = {
    name: "Hielapha",
    age: 34,
    role: "ADMIN"
};
