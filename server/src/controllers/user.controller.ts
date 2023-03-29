import { Request, Response } from 'express'
import { User } from '../models/user.model'

export const findAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = await User.findAll()

    res.json({ message: 'Usuarios encontrados', users })
  } catch (error: any) {
    res.json({ msg: error.message })
  }
}
