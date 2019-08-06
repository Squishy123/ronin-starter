export const MAKE_MIGRATION = `
export default class %MIGRATION% {
    //Migration update
    up() {

    }

    //Migration rollback
    down() {

    }
}`;

export const MAKE_MODEL = `
import mongoose from 'mongoose';

//Defined Schema
const Schema = mongoose.Schema({});

let %MODEL% = mongoose.model('%MODEL%', Schema);

//Model Functions
%MODEL%.getAll = () => %MODEL%.find({});

export default %MODEL%`;

export const MAKE_ROUTE = `
export default {
    method: "%METHOD%",
    path: "%PATH%",
    handler: []
}`;
