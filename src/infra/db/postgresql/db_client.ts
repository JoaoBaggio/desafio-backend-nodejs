import { Model } from 'objection'
import Knex from 'knex'
import env from '../../../main/config/env'
import knexConfig from '../../../main/config/knexfile'


let options: string | Knex.Config<any>
const enviroment = env.env

if ('staging' === enviroment) {
    options = knexConfig.staging
} else if ('production' === enviroment) {
    options = knexConfig.production
} else {
    options = knexConfig.development
}

const knex = Knex(options)
Model.knex(knex)
export ={
    Knex: knex,
    Model
}