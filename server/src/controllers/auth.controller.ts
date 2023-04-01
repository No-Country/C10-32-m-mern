import { Request, Response } from 'express';
import { User } from '../models/user.model';
import { Asociado } from '../models/asociado.model';
import jwt from 'jsonwebtoken';

import bcrypt from 'bcrypt';

//REGISTER
export const signup = async (req: Request, res: Response) => {
	const { body } = req;

	try {
		// chequear que el usuario exista en la BD de asociados
		const validateuser = await Asociado.findOne({
			where: { document: body.document },
		});
		if (validateuser === null)
			return res
				.status(400)
				.json('El DNI ingresado no pertenece a un asociado');

		//hash password
		const hashpass = await bcrypt.hash(body.password, 10);

		//registrando usuario//
		const newUser = await User.create({
			name: body.name,
			secondname: body.secondname,
			document: body.document,
			email: body.email,
			password: hashpass,
			phone: body.phone,
			obrasocialeId: body.obrasocialId,
		});
		// creo token
		const token: string = jwt.sign(
			{ _id: newUser.dataValues.id },
			process.env.TOKEN_SECRET || 'tokenalternativo'
		);
		res.header('auth-token', token).json({ user: newUser });
	} catch (error: any) {
		res.status(400).json({ error: error.messagge });
	}
};

//LOGIN
export const signin = async (req: Request, res: Response) => {
	try {
		const loginuser = await User.findAll({ where: { email: req.body.email } });
		if (!loginuser)
			return res.status(400).json('your credentials are not valid');

		if (
			!bcrypt.compareSync(req.body.password, loginuser[0].dataValues.password)
		)
			return res.status(400).json('your credentials are not valid');

		const token: string = jwt.sign(
			{ _id: loginuser[0].dataValues.id },
			process.env.TOKEN_SECRET || 'tokenalternativo'
		);
		res.header('auth-token', token).json(loginuser);
	} catch (error) {
		res.status(404).json(error);
	}
};
