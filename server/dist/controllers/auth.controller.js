"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signin = exports.signup = void 0;
const user_model_1 = require("../models/user.model");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt = require('bcrypt');
//Registro usuario. 
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    // chequear que el usuario exista en la BD de asociados
    //registrando usuario//
    try {
        //const newUser = await User.create(body);
        const hashpass = yield bcrypt.hash(body.password, 10);
        const newUser = yield user_model_1.User.create({ email: body.email, password: hashpass });
        // creo token
        const token = jsonwebtoken_1.default.sign({ _id: newUser.dataValues.id }, process.env.TOKEN_SECRET || 'tokenalternativo');
        res.header('auth-token', token).json(newUser);
    }
    catch (error) {
        res.status(400).json(error);
    }
});
exports.signup = signup;
//login
const signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const loginuser = yield user_model_1.User.findAll({ where: { email: req.body.email } });
        if (!loginuser)
            return res.status(400).json('your credentials are not valid');
        if (!bcrypt.compareSync(req.body.password, loginuser[0].dataValues.password))
            return res.status(400).json('your credentials are not valid');
        const token = jsonwebtoken_1.default.sign({ _id: loginuser[0].dataValues.id }, process.env.TOKEN_SECRET || 'tokenalternativo');
        res.header('auth-token', token).json(loginuser);
    }
    catch (error) {
        res.status(404).json(error);
    }
});
exports.signin = signin;
//# sourceMappingURL=auth.controller.js.map