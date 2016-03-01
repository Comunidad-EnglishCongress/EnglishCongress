(function() {
	'use strict';

	angular
		.module('myApp')
		.controller('mainCtrl', function($scope) {
			$scope.activeNav = '';
			$scope.goTop = goTop;
			$scope.persons = [
				{
					id: '1',
					name: 'Jorge Aguilar-Sánchez',
					description: 'Dr. Jorge Aguilar-Sánchez is an Assistant Professor of Spanish at the University of Dayton, Ohio. He holds two PhDs. One in TESOL and Applied Linguistics and one in Hispanic Linguistics. Both from Indiana University, Bloomington-Indiana. He has published several articles in research design, sociolinguistics and teaching methodology. His publications appear in different publication venues. His research focus on best practices on pedagogical approaches for instructed second language acquisition in English and Spanish, and best practices in research design in sociolinguistics and linguistics in general.',
					image: './images/ponentes/aguilarsanchezjorge.jpg'
				},
				{
					id: '2',
					name: 'Ana María Chacón',
					description: 'Ana María Chacón holds a BA, M.Ed. and Ed. D in Education/Curriculum and Instruction. She has worked as college professor, principal, head teacher. TLA mentor teacher, and literacy lead teacher. She has many years of experience in areas such as Teaching English as a Second language, Early Childhood Education, Elementary Education and Dual Language Instruction. Dr Chacón in currently teaching first grade in a Dual Immersion program and conducting action research in her classroom.',
					image: ''
				}
			];

			function goTop() {
				$('html, body').animate({
		            scrollTop: 0
		        }, 500);
			}
		});
})();