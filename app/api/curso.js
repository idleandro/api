var CONTADOR_ID = 2;

var cursos = [
	{_id: 1, titulo: 'JAVASCRIPT', nivel:'avançado' },
	{_id: 2, titulo: 'GULP', nivel:'Intermediário' },
	{_id: 3, titulo: 'PHP', nivel:'Intermediário' },
	{_id: 4, titulo: 'JAVA', nivel:'avançado' },
	{_id: 5, titulo: 'PYTHON', nivel:'avançado' }

];

var api = {};

api.lista = function(req, res) {

	res.json(cursos);
};

api.buscaPorId = function(req, res) {

	var curso = cursos.find(function(curso) {
		return curso._id == req.params.id;
	});

	res.json(curso);
};


api.removePorId = function(req, res) {

	cursos = cursos.filter(function(curso) {
		return curso._id != req.params.id;
	});

	res.sendStatus(204);
};

api.adiciona = function(req, res) {

	var curso = req.body;
	curso._id = ++CONTADOR_ID;
	cursos.push(curso);
	res.json(curso);
};

api.atualiza = function(req, res) {

	var cursoId = req.params.id;
	var curso = req.body;

	var indice = cursos.findIndex(function(curso) {
		return curso._id == cursoId;
	});

	cursos[indice] = curso;
	res.sendStatus(200);

};


module.exports = api;