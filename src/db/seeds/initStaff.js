/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

exports.seed = async function(knex) {
  try {

    await knex('staff').del()
    .then(async function () {

      await knex('staff')
      .insert({ name: 'Sofia Kulibaba', position:'Left vinger' , college:'NPI' , age: 20 , experience: 7 , salary: 4800 });

      await knex('staff')
      .insert({ name: 'Yana Olkhovskaya', position:'Right vinger', college:'NPI', age: 20, experience: 9, salary: 4800 });

      await knex('staff')
      .insert({ name: 'Andrew Shapovalov', position:'clown', college:'NPI', age: 20 , experience: 3, salary: 1});
      }
    );
  } catch (e){
    console.log(`ERROR seeds initVal: ${e}`);
  }
};
