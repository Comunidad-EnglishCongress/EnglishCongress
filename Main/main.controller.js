(function() {
	'use strict';

	angular
		.module('congressApp')
		.controller('mainCtrl', mainCtrl);

	mainCtrl.$inject = ['$scope'];
	function mainCtrl($scope) {
		$scope.activeNav = '';
		$scope.goTop = goTop;
		$scope.persons = [
			{
				id: '1',
				name: 'Dr. Jorge Aguilar Sánchez',
				institution: 'University of Dayton',
				description: 'Dr. Jorge Aguilar-Sánchez is an Assistant Professor of Spanish at the University of Dayton, Ohio. He holds two PhDs. One in TESOL and Applied Linguistics and one in Hispanic Linguistics. Both from Indiana University, Bloomington-Indiana. He has published several articles in research design, sociolinguistics and teaching methodology. His publications appear in different publication venues. His research focus on best practices on pedagogical approaches for instructed second language acquisition in English and Spanish, and best practices in research design in sociolinguistics and linguistics in general.',
				image: './images/ponentes/JorgeAguilarSanchez.jpg'
			},
			{
				id: '2',
				name: 'Dr. Ana María Chacón',
				institution: 'Framingham Public Schools',
				description: 'Ana María Chacón holds a BA, M.Ed. and Ed. D in Education/Curriculum and Instruction. She has worked as college professor, principal, head teacher. TLA mentor teacher, and literacy lead teacher. She has many years of experience in areas such as Teaching English as a Second language, Early Childhood Education, Elementary Education and Dual Language Instruction. Dr Chacón in currently teaching first grade in a Dual Immersion program and conducting action research in her classroom.',
				image: './images/ponentes/AnaMariaChacon.JPG'
			},
			{
				id: '3',
				name: 'Dr. Marieta Simeonova-Pissarro',
				institution: 'Morehead State University',
				description: 'Marieta Simeonova-Pissarro is the English as a Second Language (ESL) Program Director at Morehead State University, Kentucky, U.S.A. She is responsible for designing ESL curricula and tests, and teaching ESL. Marieta holds a doctorate in Literacy and English as a Second Language from the University of Cincinnati, Ohio and an MA in English Philology from the University of Veliko Turnovo, Bulgaria. Marieta has a 15 year EFL and ESL teaching and advising experience in the United States and Europe at the middle school, high school, and college level in private and public institutions. She is married and has two sons.',
				image: './images/ponentes/MarietaSimeonovaPissarro.png'
			},
			{
				id: '4',
				name: 'MA. Mike Williams',
				institution: 'University of Northern Iowa, Cedar Falls, Iowa, USA',
				description: 'Mike Williams is the Academic Support Coordinator of the Culture and Intensive English Program (CIEP) at the University of Northern Iowa in Cedar Falls, Iowa, U.S.A. Mike oversees curriculum development and revision for the CIEP. He also teaches, advises students who have academic concerns, and supervises temporary instructors among other duties. Prior to this position, Mike was a full-time instructor in the CIEP. He has also taught at the University of Iowa, at a university in China, middle and high school students in Taiwan. Mike has an MA in TESOL and an MA in Mental Health Counseling from UNI and a BA in Journalism from U of I.  Mike is originally from Iowa, is married and has a son and daughter.',
				image: './images/ponentes/MikeWilliams.png'
			},
			{
				id: '5',
				name: 'MA. Constantine John Ioannou',
				institution: 'Ottawa-Carleton District School Board – Canada',
				description: 'Constantine Ioannou is a former member of the TESOL Board of Directors and works as a program director for international projects and exchanges for the Ottawa-Carleton Education Network, the international education department of the Ottawa-Carleton District School Board. Constantine is a teacher, curriculum supervisor and materials writer for English and other languages and currently is an active teacher trainer for Canadian ESL and international language teachers and international teachers of TESOL or CLIL.',
				image: './images/ponentes/Constantine.jpg'
			},
			{
				id: '6',
				name: 'MEd. Joel Antonio Álvarez González',
				institution: 'Peace Corps',
				description: 'Joel holds a B.A in ESL from the University of Panama. He also holds a Master’s degree in TESOL from Universidad Latina de Panama and a Master’s degree in Higher Education from the University of Panama, and a MBA from Laurate International University. He was the logistic and academic coordinator at English for Life Program in Panama. Joel has participated in different Post-Graduate seminars in Panama, Costa Rica, Nicaragua, Colombia, Canada, and The United States. He was the Panama TESOL president 2013-2015. He is currently the program manager for the Teaching English and Leadership Program in Peace Corps Panama.',
				image: './images/ponentes/JoelAntonio.jpg'
			}
		];

		/* 
		* Moves the scrool to the bottom.
		*
 		* @param Nothing.
 		* @return Nothing.
 		*/
		function goTop() {
			$('html, body').animate({
	            scrollTop: 0
	        }, 500);
		}
	}
})();