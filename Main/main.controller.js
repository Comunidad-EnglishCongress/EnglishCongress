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
					image: './images/ponentes/JorgeAguilarSanchez.jpg'
				},
				{
					id: '2',
					name: 'Ana María Chacón',
					description: 'Ana María Chacón holds a BA, M.Ed. and Ed. D in Education/Curriculum and Instruction. She has worked as college professor, principal, head teacher. TLA mentor teacher, and literacy lead teacher. She has many years of experience in areas such as Teaching English as a Second language, Early Childhood Education, Elementary Education and Dual Language Instruction. Dr Chacón in currently teaching first grade in a Dual Immersion program and conducting action research in her classroom.',
					image: ''
				},
				{
					id: '3',
					name: 'Marieta Simeonova-Pissarro',
					description: 'Marieta Simeonova-Pissarro is the English as a Second Language (ESL) Program Director at Morehead State University, Kentucky, U.S.A. She is responsible for designing ESL curricula and tests, and teaching ESL. Marieta holds a doctorate in Literacy and English as a Second Language from the University of Cincinnati, Ohio and an MA in English Philology from the University of Veliko Turnovo, Bulgaria. Marieta has a 15 year EFL and ESL teaching and advising experience in the United States and Europe at the middle school, high school, and college level in private and public institutions. She is married and has two sons.',
					image: './images/ponentes/MarietaSimeonovaPissarro.png'
				},
				{
					id: '4',
					name: 'Mike Williams',
					description: 'Mike Williams is the Academic Support Coordinator of the Culture and Intensive English Program (CIEP) at the University of Northern Iowa in Cedar Falls, Iowa, U.S.A. Mike oversees curriculum development and revision for the CIEP. He also teaches, advises students who have academic concerns, and supervises temporary instructors among other duties. Prior to this position, Mike was a full-time instructor in the CIEP. He has also taught at the University of Iowa, at a university in China, middle and high school students in Taiwan. Mike has an MA in TESOL and an MA in Mental Health Counseling from UNI and a BA in Journalism from U of I.  Mike is originally from Iowa, is married and has a son and daughter.',
					image: './images/ponentes/MikeWilliams.png'
				},
				{
					id: '5',
					name: 'Constantine John Ioannou',
					description: '',
					image: ''
				},
				{
					id: '6',
					name: 'Joel Antonio Álvarez González',
					description: '',
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