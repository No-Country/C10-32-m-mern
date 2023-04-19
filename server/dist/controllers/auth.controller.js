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
exports.logout = exports.signin = exports.signup = void 0;
const user_model_1 = require("../models/user.model");
const asociado_model_1 = require("../models/asociado.model");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
//REGISTER
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        // chequear que el usuario exista en la BD de asociados
        const validateuser = yield asociado_model_1.Asociado.findOne({
            where: { document: body.document },
        });
        if (validateuser === null)
            return res
                .status(400)
                .json({ messagge: 'El DNI ingresado no pertenece a un asociado' });
        //hash password
        const hashpass = yield bcrypt_1.default.hash(body.password, 10);
        //registrando usuario//
        const newUser = yield user_model_1.User.create({
            name: body.name,
            secondname: body.secondname,
            document: body.document,
            email: body.email,
            password: hashpass,
            phone: body.phone,
            obrasocialeId: body.obrasocialId,
        });
        console.log(newUser);
        // creo token
        const token = jsonwebtoken_1.default.sign({ _id: newUser.dataValues.id }, process.env.TOKEN_SECRET || 'tokenalternativo');
        res.header('auth-token', token).json({ user: newUser });
    }
    catch (error) {
        res.status(400).json({ error: error.messagge });
    }
});
exports.signup = signup;
//LOGIN
const signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const loginuser = yield user_model_1.User.findAll({ where: { email: req.body.email } });
        if (!loginuser)
            return res
                .status(400)
                .json({ messagge: 'your credentials are not valid' });
        if (!bcrypt_1.default.compareSync(req.body.password, loginuser[0].dataValues.password))
            return res
                .status(400)
                .json({ messagge: 'your credentials are not valid' });
        const token = jsonwebtoken_1.default.sign({ _id: loginuser[0].dataValues.id }, process.env.TOKEN_SECRET || 'tokenalternativo');
        res.header('auth-token', token).json({ user: loginuser, token });
    }
    catch (error) {
        res.status(404).json({ messagge: error.messagge });
    }
});
exports.signin = signin;
const logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return res
            .header('auth-token', '')
            .json({ message: 'Se ha cerrado sesión correctamente.' });
    }
    catch (error) {
        return res.status(400).json({ error: error.messagge });
    }
});
exports.logout = logout;
