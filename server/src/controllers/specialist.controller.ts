import { Request, Response } from 'express';
import { Specialist } from '../models/specialist.model';
import { Sede } from '../models/sede.model';
import { Op } from 'sequelize';
import { Speciality } from '../models/speciality.model';


// Obtiene los especialistas de la sede enviada por query.

export const getspecialistbysede = async (req: Request, res: Response) => {
	const idsede = req.query.idsede;
	console.log(idsede);

	if (!idsede) return res.status(400).json('No se ha especificado la Sede');
	try {
		const sede = await Sede.findAll({
			where: { id: idsede },
			include: [
				{
					model: Specialist,
					include: [
						{
							model: Speciality,
						},
					],
				},
			],
		});
		if (!sede.length)
			return res
				.status(200)
				.send('No hay especialistas para la sede seleccionada.');
		res.status(200).send(sede);
	} catch (error) {
		res.status(400).send(error);
	}
};

export const getspecialistdetails = async (req: Request, res: Response) => {
	const idspecialist = req.params.id;
	console.log(idspecialist);
	try {
		const specialistdetails = await Specialist.findByPk(idspecialist, {
			include: [
				{
					model: Sede,
					include:[{
						model:Speciality,
					}]
				},
			],
		});
		if (!specialistdetails)
			return res.status(200).send('No existe especialista con el id enviado.');
		res.status(200).send(specialistdetails);
	} catch (error) {
		res.status(400).send(error);
	}
};

export const getspecialistbyfirstletter = async (
	req: Request,
	res: Response
) => {
	const letter = req.query.letter;
	const condition = letter + '%';

	try {
		if (letter === "" ) {
			const allspecillist = await Specialist.findAll({
				include:[{model: Speciality}]
			})
			
			return res.status(200).send(allspecillist);

		}
		const result = await Specialist.findAll({
			where: {
				name: {
					[Op.iLike]: condition,
					
				},
			},
			include:[{model: Speciality}]
		});
		if (!result.length) return res.status(200).send('No existen especialistas');
		res.status(200).send(result);
	} catch (error) {
		res.status(400).send(error);
	}
};

export const getspecialistbyspeciality = async (req: Request , res: Response) =>{
	const idspeciality = req.params.id

	
	try {
		const specialistbyspeciality = await Speciality.findAll({
			where: { id: idspeciality },
			include: [
				{
					model: Specialist					
				},
			],
		});
		if (!specialistbyspeciality)
			return res.status(200).send('No existe especialistas para la especialidad seleccionada.');
		res.status(200).send(specialistbyspeciality);
	} catch (error) {
		res.status(400).send(error);
	}
}