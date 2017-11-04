module.exports = function(app) {
	
	var api = app.api.curso;

	app.route('/curso')
	.get(api.lista)
	.post(api.adiciona);


	app.route('/curso/:id')
	.get(api.buscaPorId)
	.delete(api.removePorId)
	.put(api.atualiza);
};
