"use strict";
let x = 30;
let y = 40;
let something;
function add(x, y) {
    console.log(x.toFixed(3));
    return x + y;
}
console.log(add(200, 3));
//  provide type safety
// also can run built in methods as it know the types
function createUser(user) {
    var _a;
    console.log(user.email);
    if (!user.lastName)
        return;
    const trim = (_a = user.lastName) === null || _a === void 0 ? void 0 : _a.trim();
}
createUser({ email: 'me@gmail', firstName: 'Gopal' });
function updateUser(user) {
    let res = user.calculate(3, 4);
    console.log(res);
}
updateUser({ firstName: 'man', calculate: (x, y) => { return x + y; }, email: 'superman' });
