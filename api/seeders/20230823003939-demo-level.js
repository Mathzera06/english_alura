module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Levels', [
			{
				descr_level: 'básico',
				createdAt: new Date(),
				updatedAt: new Date()			
			},
			{
				descr_level: 'intermediário',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				descr_level: 'avançado',
				createdAt: new Date(),
				updatedAt: new Date()
			} 
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Levels', null, {})
  }
}
