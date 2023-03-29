"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signin = exports.signup = void 0;
const signup = (req, res) => {
    console.log(req.body);
    // let uuidv4: string = uuid.v4();
    // const user = new User({
    //     id: 1,
    //     email: req.body.email,
    //     password: req.body.password,
    // })
    // const email = req.body.email;
    // const password = req.body.password;
    // User.create()
    //res.send(email, password)
};
exports.signup = signup;
//login
const signin = (req, res) => {
    res.send('signin');
};
exports.signin = signin;
//# sourceMappingURL=auth.controller.js.map