module.exports = function(app) {
	
	var api = app.api.curso;

	app.route('/')
	.get(api.lista)
	.post(api.adiciona);


	app.route('/:id')
	.get(api.buscaPorId)
	.delete(api.removePorId)
	.put(api.atualiza);
};
