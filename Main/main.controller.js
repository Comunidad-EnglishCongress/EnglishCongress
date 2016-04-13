(function() {
	'use strict';

	angular
		.module('congressApp')
		.controller('mainCtrl', mainCtrl);

	mainCtrl.$inject = ['$scope'];
	function mainCtrl($scope) {
		$scope.activeNav = '';
		$scope.goTop = goTop;
		$scope.guestSpeakers = [
			{
				id: '1',
				name: 'Dr. Jorge Aguilar Sánchez',
				institution: 'University of Dayton',
				description: 'Dr. Jorge Aguilar-Sánchez is an Assistant Professor of Spanish at the University of Dayton, Ohio. He holds two PhDs. One in TESOL and Applied Linguistics and one in Hispanic Linguistics. Both from Indiana University, Bloomington-Indiana. He has published several articles in research design, sociolinguistics and teaching methodology. His publications appear in different publication venues. His research focus on best practices on pedagogical approaches for instructed second language acquisition in English and Spanish, and best practices in research design in sociolinguistics and linguistics in general.',
				image: './images/speakers/guest/JorgeAguilarSanchez.jpg'
			},
			{
				id: '2',
				name: 'Dr. Ana María Chacón',
				institution: 'Framingham Public Schools',
				description: 'Ana María Chacón holds a BA, M.Ed. and Ed. D in Education/Curriculum and Instruction. She has worked as college professor, principal, head teacher. TLA mentor teacher, and literacy lead teacher. She has many years of experience in areas such as Teaching English as a Second language, Early Childhood Education, Elementary Education and Dual Language Instruction. Dr Chacón in currently teaching first grade in a Dual Immersion program and conducting action research in her classroom.',
				image: './images/speakers/guest//AnaMariaChacon.JPG'
			},
			{
				id: '3',
				name: 'Dr. Marieta Simeonova-Pissarro',
				institution: 'Morehead State University',
				description: 'Marieta Simeonova-Pissarro is the English as a Second Language (ESL) Program Director at Morehead State University, Kentucky, U.S.A. She is responsible for designing ESL curricula and tests, and teaching ESL. Marieta holds a doctorate in Literacy and English as a Second Language from the University of Cincinnati, Ohio and an MA in English Philology from the University of Veliko Turnovo, Bulgaria. Marieta has a 15 year EFL and ESL teaching and advising experience in the United States and Europe at the middle school, high school, and college level in private and public institutions. She is married and has two sons.',
				image: './images/speakers/guest//MarietaSimeonovaPissarro.png'
			},
			{
				id: '4',
				name: 'MA. Mike Williams',
				institution: 'University of Northern Iowa, Cedar Falls, Iowa, USA',
				description: 'Mike Williams is the Academic Support Coordinator of the Culture and Intensive English Program (CIEP) at the University of Northern Iowa in Cedar Falls, Iowa, U.S.A. Mike oversees curriculum development and revision for the CIEP. He also teaches, advises students who have academic concerns, and supervises temporary instructors among other duties. Prior to this position, Mike was a full-time instructor in the CIEP. He has also taught at the University of Iowa, at a university in China, middle and high school students in Taiwan. Mike has an MA in TESOL and an MA in Mental Health Counseling from UNI and a BA in Journalism from U of I.  Mike is originally from Iowa, is married and has a son and daughter.',
				image: './images/speakers/guest//MikeWilliams.png'
			},
			{
				id: '5',
				name: 'MA. Constantine John Ioannou',
				institution: 'Ottawa-Carleton District School Board – Canada',
				description: 'Constantine Ioannou is a former member of the TESOL Board of Directors and works as a program director for international projects and exchanges for the Ottawa-Carleton Education Network, the international education department of the Ottawa-Carleton District School Board. Constantine is a teacher, curriculum supervisor and materials writer for English and other languages and currently is an active teacher trainer for Canadian ESL and international language teachers and international teachers of TESOL or CLIL.',
				image: './images/speakers/guest//Constantine.jpg'
			},
			{
				id: '6',
				name: 'MEd. Joel Antonio Álvarez González',
				institution: 'Peace Corps',
				description: 'Joel holds a B.A in ESL from the University of Panama. He also holds a Master’s degree in TESOL from Universidad Latina de Panama and a Master’s degree in Higher Education from the University of Panama, and a MBA from Laurate International University. He was the logistic and academic coordinator at English for Life Program in Panama. Joel has participated in different Post-Graduate seminars in Panama, Costa Rica, Nicaragua, Colombia, Canada, and The United States. He was the Panama TESOL president 2013-2015. He is currently the program manager for the Teaching English and Leadership Program in Peace Corps Panama.',
				image: './images/speakers/guest//JoelAntonio.jpg'
			}
		];
		$scope.localSpeakers = [
			{
				id: '1',
				name: 'Alberto Gonzalez Céspedes',
				institution: 'Universidad de Costa Rica',
				description: 'Alberto is a relly passionated educator, he loves teaching as well as learning anything related to education and change. He graduated as an English teacher in the University of Costa Rica and after that he got a scholarship to Japan where he learnt many of his beliefs about innovation and education. he shows an special appreciation for the environment and the future generations as well as arts, science and language acquisiion new theories. Working with Alberto will always be a challenge and a positive learning experience.',
				image: './images/speakers/local/AlbertoGonzalezCespedes.png'
			},
			{
				id: '2',
				name: 'Amanda Rossi',
				institution: 'Universidad de La Salle',
				description: "Amanda Rossi is originally from New York, but currently lives and works in Peñas Blancas, San Ramón, Costa Rica.  She has over 10 years experience as a language teacher and teacher trainer and has worked in both the United States and Latin America.  Amanda holds a bachelor's degree in Spanish and International Business, two master's degrees, one in Spanish and one in TESOL, and has just finished the course work for her PhD in Education at Universidad de La Salle in San José, Costa Rica.",
				image: './images/speakers/local/AmandaRossi.jpg'
			},
			{
				id: '3',
				name: 'Ana Sawyers',
				institution: 'Universidad Nacional',
				description: 'Ana is a full time high school teacher who also enjoys to work with adults some evenings a week at the university. She is a graduated from Universidad Nacional and hopes to finish with her studies this year. She enjoys motivating students for critical thinking and independent learning, a student engage in his learning process and willing to do his best. For Ana, professional development is a must, she attends to as many workshops and seminars as she can. She wishes someday she will travel around the world teaching teachers and learning from them as well.',
				image: './images/speakers/local/AnaSawyers.jpg'
			},
			{
				id: '4',
				name: 'MEd. Cindy Rodriguez',
				institution: 'Universidad Técnica Nacional and Universidad de Costa Rica',
				description: 'Cindy is a passionate educator who truly enjoys everything related to learning and education. She graduated as an English Teacher at UCR and then obtained an M.A in Translation from UNA. She is working on her thesis to obtain her M.Ed on Educational Management.  Cindy is close to finish her Doctorate in Education. She works at UTN, and UCR, in the latest as pedagogic assessor. She is constantly looking for new learning experiences.',
				image: './images/speakers/local/CindyRodriguez.jpg'
			},
			{
				id: '5',
				name: 'Danilo Alpízar',
				institution: 'Instituto Tecnológico de Costa Rica',
				description: "The presenter graduated as and English teacher from Universidad de Costa Rica in 1981 and then obtained his Master's Degree in ESL from West Virginia University, USA in 1984. He has been a professor at Instituto Tecnologico de Costa Rica since 2000. He has been involved in teacher training both at UCR and at TEC with the CONARE-MEP English teacher training program.",
				image: './images/speakers/local/DaniloAlpizar.jpg'
			},
			{
				id: '6',
				name: 'Eric Herrera Molina',
				institution: '',
				description: 'Eric Herrera Molina has a bachelor degree in English (UCR) with a degree in teaching/licenciatura (UNED), a master degree in educational technology (UNED), a postgraduate degree in digital media and e-learning (FATLA). He has an experience of 15 years in public and private high schools and universities. He also worked for 2 years in the US as a Spanish teacher. He is also the editor of The ILE Post, a monthly magazine at UTN. Also, he has experience in video, audio and image editing.',
				image: './images/speakers/local/EricHerreraMolina.jpg'
			},
			{
				id: '7',
				name: 'Eric Salas',
				institution: 'Instituto Tecnológico de Costa Rica',
				description: 'Erick Francisco Salas Acuña graduated from the University of Costa Rica (UCR) where he obtained a B.A. in Spanish Philology and a B.A. in English. He is currently writing his thesis to obtain his M.A. degree in Social Communication with an emphasis in Latin American Literature (UCR). He has worked as a professor for the School of Modern Languages and the School of Social Communications at the University of Costa Rica (2007-2013). Since 2014 he works for the Costa Rica Institute of Technology, Santa Clara, San Carlos. His interests involve the teaching of literature and writing.',
				image: './images/speakers/local/EricSalas.jpg'
			},
			{
				id: '8',
				name: 'Hazel Vega',
				institution: 'Universidad de Costa Rica',
				description: 'Hazel received her Bachelor’s in English Teaching and Master’s in Second Languages and Cultures at Universidad Nacional. She has 13 years of teaching experience working at institutions such as Centro Cultural Costarricense Norteamericano, Universidad Nacional and CONARE-MEP. She is currently a faculty member at the Universidad de Costa Rica.',
				image: './images/speakers/local/HazelVega.jpg'
			},
			{
				id: '9',
				name: 'Johanny Vallecillo',
				institution: 'Instituto Tecnológico de Costa Rica',
				description: 'Professor Johanny Vallecillo started his teaching career in the year 2000. He earned both a Bachelors and Masters of Education with a concentration in English teaching from Universidad Latina de Costa Rica. His experience includes teaching elementary and high school for MEP. In 2007, he moved to North Carolina, USA, where he taught for five years. Since 2014, he has been teaching English at Instituto Tecnológico de Costa Rica on its campus in San Carlos.',
				image: './images/speakers/local/JohannyVallecillo.jpg'
			},
			{
				id: '10',
				name: 'Jonathan Salas',
				institution: '',
				description: 'Jonnathan Salas Alvarado is an English teacher who has worked at the Universidad de Costa Rica and the Colegio Laboratorio del CUP for more than 9 years. He also worked at Universidad Técnica Nacional for 5 years and at Universidad Latina de Costa Rica for 1 yeat.He has a bachelor degree, a licenciatura degree and a Master degree in English teaching. Besides his interest in teaching he has a big interest in theater and the acting process in general. He has been acting for more than 11 years in Puntarenas. He has had the chance to participate in different theater congresses both national and international and he has had the chance to attend different workshops in this area as well. He has acted with two different groups and he has directed different plays in the high school where he works.',
				image: './images/speakers/local/JonathanSalas.jpg'
			},
			{
				id: '11',
				name: 'Kelley Williams',
				institution: 'Universidad Estatal a Distancia',
				description: 'Kelley Williams is originally from North Carolina, where he obtained a B.A. in both English and Spanish from the University of North Carolina at Chapel hill in 1989. Kelley obtained both a Bachelor’s degree and a Licenciatura from the Universidad Estatal a Distancia in Costa Rica in teaching English to elementary school children. Kelley has taught from elementary school to college aged students. He worked as Regional Advisor for the Programa de Lenguas Extranjeras para el Desarrollo when English in elementary schools first became part of Costa Rican curriculum. Currently, Mr. Williams works for the UNED teaching EFL to adults, and also supervising student-teachers.',
				image: './images/speakers/local/KelleyWilliams.jpg'
			},
			{
				id: '12',
				name: 'Marisol Rojas Salas',
				institution: 'Universidad Técnica Nacional',
				description: 'Marisol Rojas Salas: Master in Education Sciences, Instituto Tecnológico de Monterrey (ITESM), Master in TEFL, Universidad de Costa Rica (UCR), Licentiate degree in Educational Administration, Universidad Estatal a Distancia (UNED). She has taught English in Universidad Técnica Nacional (UTN) and Universidad de Costa Rica.  Currently she is the Director of Programa Institucional de Idiomas para el Trabajo at the UTN.',
				image: './images/speakers/local/MarisolRojasSalas.png'
			},
			{
				id: '13',
				name: 'Mark Foster Cormier',
				institution: 'Centro Cultural Costarricense Norteamericano',
				description: 'Mark Foster Cormier is a resource teacher and coach at the Centro Cultural Costarricense Norteamericano in Cartago, Costa Rica where he teaches EFL classes to adults and teenagers and provides supervision, training, and professional development opportunities to staff teachers. His interests include task based instruction, vocabulary building strategies, and using content to teach advanced learners.',
				image: './images/speakers/local/MarkFosterCormier.jpg'
			},
			{
				id: '14',
				name: 'Marlon Perez',
				institution: 'Instituto Tecnológico de Costa Rica',
				description: 'Marlon Perez obtained a Master Degree in TESOL from the University of Northern Iowa in 2005. He has been an English teacher since 1996 and has worked both in Costa Rica and in the United States of America as an ESL/EFL instructor. He has also been a trainer for in-service MEP English teachers and has given presentations and workshops at several conference. He is currently working for the ITCR as an English teacher.',
				image: './images/speakers/local/MarlonPerez.jpg'
			},
			{
				id: '15',
				name: 'Max Arias',
				institution: 'Universidad Técnica Nacional, Universidad de Costa Rica and Ministerio de Educación Pública',
				description: 'Max is a passionate facilitator of learning experiences who truly enjoys everything related to learning and education. He graduated as an English Teacher at Universidad Latina where obtained an Master in Tesol. He also graduated with a M.Ed on Educational Management and Leadership from UNA.  Max also obtained a Doctorate in Education from Universidad de La Salle. He works at UTN, UCR, and as a pedagogical advisor for Mep in Liberia.',
				image: './images/speakers/local/MaxArias.jpg'
			},
			{
				id: '16',
				name: 'Michelle Leip',
				institution: '',
				description: 'Michelle Leip is a passionate educator with 14 years of experience in all areas of education including leadership, advocacy, instruction, research, writing, and teacher training. She is committed to ensuring that ALL students receive a first-rate education regardless of their address. She has taught in a variety of settings such as charter schools, turn-around schools, elementary, middle, & high schools, as well as universities. She served in the Peace Corps as a teacher trainer.   Michelle is a life-long learner who infuses this zest for knowledge into every session.  Her workshops are sure to ignite a spark in all who attend.',
				image: './images/speakers/local/MichelleLeip.jpg'
			},
			{
				id: '17',
				name: 'Natalia Ramirez',
				institution: 'Universidad de Costa Rica',
				description: 'Natalia received her Bachelor’s and Licenciatura degree in English Teaching at UCR, and her Master’s in English Teaching at Universidad Latina. She has 13 years of teaching experience. She has worked at the MEP and is currently a faculty member at the Universidad de Costa Rica.',
				image: './images/speakers/local/NataliaRamirez.jpg'
			},
			{
				id: '18',
				name: 'Norka Ureña',
				institution: 'ESL and Carmen Lyra Elementary',
				description: 'My name is Norka Ureña, I teach ESL and reading to students, ages 7 to 12 at Carmen Lyra Elementary, I also tutor similarly aged students on the very same disciplines. My work experience includes teaching during short tenures at Colegio San Carlos Borromeo and Colegio Agropecuario de San Carlos. I graduated from UNED with a Licentiate in English teaching.',
				image: './images/speakers/local/NorkaUreña.jpg'
			}, 
			{
				id: '19',
				name: 'Paola Artavia Moya',
				institution: 'Ministerio de Educación Pública',
				description: "I just love teaching as well as learning.  As a pedagogical  advisor, I am dedicated to learning about everyone else's teaching experiences and I try to solve possible problems my colleagues face everyday in their institutions. Using creativity and innovation along with my co-workers make me feel that all this effort in the Ministry of Public Education  is really worthy.  I am always looking for ways to engage students and motivate them through meaningful pedagogical experiences. In my spare time I  enjoy reading, investigating and looking for ways to children adolescents and adults enjoy their a second language learning experience.",
				image: './images/speakers/local/PaolaArtaviaMoya.png'
			},
			{
				id: '20',
				name: 'Patricia López Estrada',
				institution: 'Instituto Tecnológico de Costa Rica',
				description: "Patricia López Estrada holds an Education Doctorate from the University of Florida, a Masters's degree in Second Languages and Cultures in English as a Foreign Language and a Licentiatura in Applied Linguistics to Second Language Teaching from Universidad Nacional, a Bachelor's degree in English Teaching and English Translation from Universidad Latinoamericana de Ciencias y Tecnología. Her most recent publications and conference presentations focus on effective pedagogical practices in bilingual education, the use of technology, and empowerment pedagogy practices in higher education.",
				image: './images/speakers/local/PatriciaLopezEstrada.jpg'
			},
			{
				id: '21',
				name: 'Ph.D Roger Ramirez Draughn',
				institution: 'Universidad de La Salle',
				description: 'Roger, originally from NYC, received his MA in TESOL at the SIT Graduate Institute in VT and is currently pursuing a Ph.D in education at Universidad La Salle. He has worked on teacher training projects in USA, South Korea, Burundi, Nigeria, Dominican Republic and many other countries in Latin America.',
				image: './images/speakers/local/RogerRamirezDraughn.jpg'
			},
			{
				id: '22',
				name: 'Rosberly López',
				institution: 'Universidad de Costa Rica',
				description: "Rosberly is an English teacher and Master in Linguistics. She's passionate for language learning and transmits this passion through her extension project at UCR, which offers language courses to the population in her hometown and place of academic and professional development: Puntarenas. She has worked at the Pacific Regional Center of UCR for 9 years and has also worked for institutions such as UNED and UTN. She's convinced that as a teacher, you learn more than what you teach, which is her favorite part of her job.",
				image: './images/speakers/local/RosberlyLopez.jpg'
			},
			{
				id: '23',
				name: 'Veronica Oguilve',
				institution: 'Universidad Técnica Nacional (UTN) and Universidad Estatal a Distancia',
				description: "Veronica Oguilve Araya is a TESOL instructor at the Universidad Técnica Nacional (UTN) and Universidad Estatal a Distancia (UNED). She holds a Bachelor's Degree in English Teaching, a Licentiate Degree in English and a Masters Degree in TESOL from the University of Costa Rica.  Her research interests include the implementation of Web 2.0 tools to support teaching  and learning, the Common European Framework as a standard for teaching and the use of new approaches to teach EFL.",
				image: './images/speakers/local/VeronicaOguilve.jpg'
			},
			{
				id: '24',
				name: 'Yorleni Romero',
				institution: 'Universidad Técnica Nacional',
				description: "Yorleni Romero was born in Pérez Zeledón, a city in the southern part of Costa Rica. She studied at Universidad Nacional where she graduated as an English teacher, then, got her Licenciatura in Applied Linguistics and finally her Master's Degree in Second Languages and Cultures. Her latest studies have been in virtual education. Ms. Romero is currently an academic at Universidad Técnica Nacional, but she has also worked as a high school Principal, and at the university level, as a Dean and as an English Professor. Her passion is teaching and enjoying the amazing nature of her loved Costa Rica.",
				image: './images/speakers/local/YorleniRomero.jpg'
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