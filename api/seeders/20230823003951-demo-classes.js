module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Classes', [
			{
				data_begin: "2020-02-01",
				level_id: 1,
				docente_id: 6,
				createdAt: new Date(),
				updatedAt: new Date()				 
			},
			{
				data_begin: "2020-02-01",
				level_id: 2,
				docente_id: 5,
				createdAt: new Date(),
				updatedAt: new Date()			
			},
			{
				data_begin: "2020-02-01",
				level_id: 3,
				docente_id: 6,
				createdAt: new Date(),
				updatedAt: new Date()			
				},
			{
				data_begin: "2020-07-01",
				level_id: 3,
				docente_id: 6,
				createdAt: new Date(),
				updatedAt: new Date()			
			}
		], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Classes', null, {})
  }
}
