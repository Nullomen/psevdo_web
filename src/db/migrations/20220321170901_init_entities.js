/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    try {
        await knex.schema.createTable('staff', function (table) {
            table.increments('id').primary().notNullable();
            table.string('name').notNullable();
            table.string('position').notNullable();
            table.string('college').notNullable();
            table.integer('age').notNullable();
            table.integer('experience').notNullable();
            table.integer('salary').notNullable();
        });
    } catch(e){
        console.error(`ERROR UP MIGRATION create tables: ${e}`);
    }
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = async function(knex) {
    try {
        return await knex.schema.dropTable('staff');
    } catch(e){
        console.error(`ERROR DOWN MIGRATION create tables: ${e}`);
    }
};
