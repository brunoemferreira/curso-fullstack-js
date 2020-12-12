import { AccountStatus } from './accountStatus';

export interface IAccount {
  id: number,
  name: string,
  email: string,
  password: string,
  status: AccountStatus
}

import Joi from 'joi';
// Usa o pacote Joi para impor validaçãoes para a Interface
const accountSchema = Joi.object({
  id: Joi.number()
    .integer()
    .min(1),
  name: Joi.string()
    .alphanum()
    .min(3)
    .max(150)
    .required(),
  email: Joi.string()
    .email()
    .min(8)
    .max(150)
    .required(),
  password: Joi.string()
    .alphanum()
    .min(6)
    .max(50)
    .required(),
  status: Joi.number()
    .integer()
    .min(100)
    .max(400)
})

export { accountSchema };