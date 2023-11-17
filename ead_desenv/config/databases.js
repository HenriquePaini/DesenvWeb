module.exports = {
	blog: {
		// aqui você pode alternar entre o banco de dados local e o banco de dados de homologação
		username: 'postgres',
		port: '5432',
		password: 'postgres',
		database: 'blog',
		host: '127.0.0.1',//localhost
		dialect: 'postgres',
		logging: false,
	},
	blog_homolog: {
		// aqui você pode alternar entre o banco de dados local e o banco de dados de homologação
		username: 'postgres',
		port: '5432',
		password: 'postgres',
		database: 'blog',
		host: 'localhost',//localhost
		dialect: 'postgres',
		logging: false,
	},
};
