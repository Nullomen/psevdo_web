const environment = process.env.NODE_ENV || 'development';    
const configuration = require('../../knexfile')[environment]; 
const database = require('knex')(configuration);

exports.getStaff = async () => {
    try {
        return await database.select().from('staff');
    } catch (e) {
        console.error(e);
    }
}
