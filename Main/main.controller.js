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
				description: 'Dr. Jorge Aguilar-Sánchez is an Assistant Professor of Spanish at the University of Dayton, Ohio. He has a Ph.D. in TESOL and Applied Linguistics and a Ph.D. in Hispanic Linguistics. His current research focuses on student engagement for instructed language acquisition and the role emergent technologies play as aids in the process and in Best Practices for research design in (Socio) Linguistics. His works appear in journals, chapters of books, and other publication venues.',
				image: './images/speakers/guest/JorgeAguilarSanchez.jpg'
			},
			{
				id: '2',
				name: 'Dr. Ana María Chacón',
				institution: 'Framingham Public Schools',
				description: 'Ana Maria Chacon holds a BA, M.Ed. and EdD in Education/Curriculum and Instruction. She has worked as college professor, principal, head teacher, TLA mentor teacher, and literacy lead teacher. She has many years of experience in areas such as Teaching English as a Second language, Early Childhood Education, Elementary Education and Dual Language Instruction. Dr. Chacon is currently teaching first grade in a Dual Immersion program and conducting action research in her classroom.',
				image: './images/speakers/guest//AnaMariaChacon.JPG'
			},
			{
				id: '3',
				name: 'Dr. Marieta Simeonova-Pissarro',
				institution: 'Morehead State University',
				description: 'Marieta Simeonova-Pissarro is the English as a Second Language (ESL) Program Director at Morehead State University, Kentucky, U.S.A. Marieta holds a Doctorate in Literacy and English as a Second Language from the University of Cincinnati, Ohio and an MA in English Philology from the University of Veliko Turnovo, Bulgaria. Marieta has a 15-year EFL/ESL teaching and advising experience in the United States and Europe primarily at the high school and college levels.',
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
				description: 'Constantine Ioannou is a former member of the TESOL Board of Directors and works as a Program Director for International Projects and Exchanges for the Ottawa-Carleton Education Network, the International Education Department of the Ottawa-Carleton District School Board. Constantine is a teacher, curriculum supervisor, and materials writer for English and other languages and currently is an active teacher trainer for Canadian ESL and international language teachers and international teachers of TESOL or CLIL.',
				image: './images/speakers/guest//Constantine.jpg'
			},
			{
				id: '6',
				name: 'MEd. Joel Antonio Álvarez González',
				institution: 'Peace Corps',
				description: 'Joel holds a B.A. in ESL from the University of Panama. He also holds a Master’s Degree in TESOL from Universidad Latina de Panama and a Master’s Degree in Higher Education from the University of Panama, and a MBA from Laureate International University. He was the Logistic and Academic Coordinator at English for Life Program in Panama. Joel has participated in different Post-Graduate seminars in Panama, Costa Rica, Nicaragua, Colombia, Canada, and The United States. He was the Panama TESOL President 2013-2015. He is currently the Program Manager for the Teaching English and Leadership Program in Peace Corps Panama.',
				image: './images/speakers/guest//JoelAntonio.jpg'
			}
		];
		$scope.localSpeakers = [
			{
				id: '1',
				name: 'Alberto Gonzalez Céspedes',
				institution: 'Ministerio de Educación Pública',
				description: 'Alberto is a relly passionated educator, he loves teaching as well as learning anything related to education and change. He graduated as an English teacher in the University of Costa Rica and after that he got a scholarship to Japan where he learnt many of his beliefs about innovation and education. He shows an special appreciation for the environment and the future generations as well as arts, science, and language acquisition.',
				image: './images/speakers/local/AlbertoGonzalezCespedes.png'
			},
			{
				id: '2',
				name: 'Amanda Rossi',
				institution: 'Centro Espiral Maná',
				description: "Amanda Rossi is originally from New York, but currently lives and works in Costa Rica. She has over 10 years experience as a language teacher and teacher trainer and has worked in both the United States and Latin America. Amanda holds a BA in Spanish and International Business, two MA: one in Spanish and one in TESOL, and is finishing her Ph.D. in Education at Universidad de La Salle in San José, Costa Rica.",
				image: './images/speakers/local/AmandaRossi.jpg'
			},
			{
				id: '3',
				name: 'Ana Isabel Campos Centeno',
				institution: 'Ministerio de Educación Pública',
				description: "Ana Isabel Campos Centeno works as a National English Elementary Advisor for the Curricular Division of the Ministry of Education and coordinates the new English Curriculum Commission. In addition, she is a professor in the Master's Program in Second Languages and Cultures at the Universidad Nacional. She graduated from the University of Costa Rica and holds an MA in TESOL from the University of Kansas. Currently, she is a doctoral student in the Latin American Studies Program at Universidad Nacional.",
				image: './images/speakers/local/AnaIsabelCampos.jpg'
			},
			{
				id: '4',
				name: 'Ana Sawyers',
				institution: 'LEB La Trinidad',
				description: 'She has been teaching for twenty years now; she graduated from Universidad Nacional. She works full time in high school with teenagers. She also works at U Latina during the evenings with students who take English courses as a requirement for their administration majors. For her, professional development is an important way to be updated. She invests her time in attending professional development activities.',
				image: './images/speakers/local/AnaSawyers.jpg'
			},
			{
				id: '5',
				name: 'Cindy Rodriguez',
				institution: 'Universidad Técnica Nacional',
				description: 'Cindy is a passionate educator who truly enjoys everything related to learning and education. She graduated as an English teacher at UCR and then obtained an M.A in Translation from UNA. She is working on her thesis to obtain her M.Ed. on Educational Management.  Cindy is close to finish her Doctorate in Education. She works at UTN, and UCR, in the latest as a pedagogical advisor. She is constantly looking for new learning experiences.',
				image: './images/speakers/local/CindyRodriguez.jpg'
			},
			{
				id: '6',
				name: 'Danilo Alpízar',
				institution: 'Instituto Tecnológico de Costa Rica',
				description: "He graduated as an English teacher from Universidad de Costa Rica in 1981 and then obtained his Master's Degree in ESL from West Virginia University, USA in 1984. He has been a professor at Instituto Tecnológico de Costa Rica since 2000. He has been involved in teacher training both at UCR and at TEC with the CONARE-MEP English Teacher Training Program.",
				image: './images/speakers/local/DaniloAlpizar.jpg'
			},
			{
				id: '7',
				name: 'Eric Herrera Molina',
				institution: 'Universidad Técnica Nacional',
				description: "Eric Herrera Molina has a Bachelor's Degree in English (UCR) a Licenciatura (UNED), a Master´s Degree in Educational Technology (UNED), a Postgraduate Degree in Digital Media and E-learning (FATLA). He has an experience of 15 years in public and private high schools and universities. He also worked for 2 years in the US as a Spanish teacher. He is also the editor of The ILE Post, a monthly magazine at UTN.",
				image: './images/speakers/local/EricHerreraMolina.jpg'
			},
			{
				id: '8',
				name: 'Eric Salas Acuña',
				institution: 'Instituto Tecnológico de Costa Rica',
				description: 'Erick Francisco Salas Acuña graduated from the University of Costa Rica (UCR) where he obtained a BA in Spanish Philology and a BA in English. He is currently writing his thesis to obtain his MA Degree in Social Communication with an emphasis in Latin American Literature (UCR). He has worked as a professor for the School of Modern Languages and the School of Social Communications at the University of Costa Rica (207-2013). Since 2014 he works for the Costa Rica Institute of Technology, Santa Clara, San Carlos. His interests involve the teaching of literature and writing.',
				image: './images/speakers/local/EricSalas.jpg'
			},
			{
				id: '9',
				name: 'Francisco Vargas',
				institution: 'Textos Educativos, Cambridge University Press',
				description: "Francisco Vargas holds a BA, Licenciatura, and Master's Degrees in the field of Teaching English to Speakers of Other Languages. He has worked as teacher, teacher supervisor and trainer at institutions such as Centro Cultural Costarricense-Norteamericano, UNED, UCR, Universidad Latina. He was also a Regional Advisor at Ministerio de Educación Pública supervising and training English teachers. Francisco was Country Manager for Cambridge University Press in Costa Rica as academic consultant since 2002. He is now Cambridge University Press Account Manager at Textos Educativos. Francisco has delivered training sessions in English Teaching Conferences in Costa Rica, Panama, Peru, Guatemala, El Salvador and Nicaragua.",
				image: './images/speakers/local/FranciscoVargas.jpg'
			},
			{
				id: '10',
				name: 'Gabriela Castillo Hernández',
				institution: 'Ministerio de Educación Pública',
				description: "María Gabriela Castillo Hernández works as the English Language Advisor for the Ministry of Public Education Regional Office in San Carlos. She has over 18 years of teaching experience, and has been a professor at the university level for several years. She graduated from the University of Costa Rica and holds a Licenciatura Degree in EFL Teaching from Universidad Católica. She is currently a master student in the EFL Teaching Program at Universidad Latina.",
				image: './images/speakers/local/GabrielaCastilloHernandez.jpg'
			},
			{
				id: '11',
				name: 'Hazel Vega',
				institution: 'Universidad de Costa Rica, Sede Occidente',
				description: "Hazel received her Bachelor's in English Teaching and Master's in Second Languages and Cultures at Universidad Nacional, Heredia. She has over 13 years of teaching experience mostly working with adults and taking part in teacher training processes in Costa Rica. Institutions and projects in which she has worked include Centro Cultural Costarricense Norteamericano, Universidad Nacional and CONARE-MEP. She is currently a faculty member at the Universidad de Costa Rica, Sede de Occidente.",
				image: './images/speakers/local/HazelVega.jpg'
			},
			{
				id: '12',
				name: 'Johanny Vallecillo',
				institution: 'Instituto Tecnológico de Costa Rica',
				description: 'Professor Johanny Vallecillo started his teaching career in the year 2000. He earned both a Bachelors and Masters of Education with a concentration in English Teaching from Universidad Latina de Costa Rica. His experience includes teaching elementary and high school for MEP. In 2007, he moved to North Carolina, USA, where he taught for five years. Since 2014, he has been teaching English at Instituto Tecnológico de Costa Rica on its campus in San Carlos.',
				image: './images/speakers/local/JohannyVallecillo.jpg'
			},
			{
				id: '13',
				name: 'Jonathan Salas Alvarado',
				institution: 'Universidad de Costa Rica, Sede del Pacífico',
				description: 'Jonnathan Salas Alvarado is an English teacher who has worked at the Universidad de Costa Rica and the Colegio Laboratorio del CUP for more than 9 years. He also worked at Universidad Técnica Nacional for 5 years and at Universidad Latina de Costa Rica for 1 year. He has a Bachelor Degree, a Licenciatura degree and a Master degree in English Teaching. Besides his interest in teaching, he has a big interest in theater and the acting process in general. He has been acting for more than 11 years in Puntarenas. He has had the chance to participate in different theater congresses both national and international and he has had the chance to attend different workshops in this area as well. He has acted with two different groups and he has directed different plays in the high school where he works.',
				image: './images/speakers/local/JonathanSalas.jpg'
			},
			{
				id: '14',
				name: 'Kelley Williams',
				institution: 'Universidad Estatal a Distancia',
				description: 'Kelley Williams holds a Licenciatura from the Universidad Estatal a Distancia in Costa Rica in English Teaching to elementary school children. Mr. Williams graduated from UNC-CH in 1989 with a BA in both English and Spanish. Kelley has taught from elementary school to college-aged students. He worked as Regional Advisor for the Programa de Lenguas Extranjeras para el Desarrollo when English in elementary schools first became part of Costa Rican curriculum. Currently, Mr. Williams works for the UNED teaching EFL to adults, and supervising student teachers.',
				image: './images/speakers/local/KelleyWilliams.jpg'
			},
			{
				id: '15',
				name: 'Lorein Powell Benard',
				institution: 'OOLIPRO',
				description: 'Lorein Powell Benard is a retired professor after 35 years teaching at UNA and Alajuela Community College. She has been continuously involved in research related to identity and multicultural interactions, as well as in multidisciplinary research on EFL teacher education and in-service professional development, also serving for over 15 years as a facilitator and designer of different teacher-training programs.',
				image: './images/speakers/local/LoreinPowell.jpg'
			},
			{
				id: '16',
				name: 'Marianella Granados Sirias',
				institution: 'Ministerio de Educación Pública',
				description: 'National English Advisor for Secondary Education, Ministry of Public Education. Marianella Granados Sirias is a National English Advisor for Secondary Education. She worked for several years as National English Advisor for the Division of National Testing and has extensive experience as a High School teacher. She graduated from the Universidad Nacional and holds a Master’s Degree in Education with an Emphasis in Curriculum from the Universidad Latina de Costa Rica.',
				image: './images/speakers/local/MarianellaGranadosSirias.jpg'
			},
			{
				id: '17',
				name: 'Marisol Rojas Salas',
				institution: 'Universidad Técnica Nacional',
				description: 'Marisol Rojas Salas has a Master in Education Sciences, Instituto Tecnológico de Monterrey (ITESM), a Master in TEFL, Universidad de Costa Rica (UCR), a Licenciatura Degree in Educational Administration, Universidad Estatal a Distancia (UNED). She has taught English in Universidad Técnica Nacional (UTN) and Universidad de Costa Rica.  Currently she is the Director of Programa Institucional de Idiomas para el Trabajo at the UTN.',
				image: './images/speakers/local/MarisolRojasSalas.png'
			},
			{
				id: '18',
				name: 'Mark Foster Cormier',
				institution: 'Centro Cultural Costarricense Norteamericano',
				description: 'Mark Foster Cormier is a resource teacher and coach at the Centro Cultural Costarricense Norteamericano in Cartago, Costa Rica where he teaches EFL classes to adults and teenagers and provides supervision, training, and professional development opportunities to new teachers. His interests include task-based instruction, vocabulary building strategies, and using content to teach advanced learners.',
				image: './images/speakers/local/MarkFosterCormier.jpg'
			},
			{
				id: '19',
				name: 'Marlon Perez',
				institution: 'Instituto Tecnológico de Costa Rica',
				description: 'Marlon Perez obtained a Master Degree in TESOL from the University of Northern Iowa in 2005. He has been an English teacher since 1996 and has worked both in Costa Rica and in the United States of America as an English instructor. He has also been a trainer for in-service MEP English teachers and has given presentations and workshops at several conference. He is currently working for the ITCR as an English teacher.',
				image: './images/speakers/local/MarlonPerez.jpg'
			},
			{
				id: '20',
				name: 'Mary Scholl',
				institution: 'Embajada de Estados Unidos en Costa Rica  and Centro Espiral Mana',
				description: 'Mary Scholl founded and directs a center for professional development and community English program in San Ramon. She has been teaching English and working with developing teachers for over 25 years and has lived and taught in 20 countries on four continents. Mary is passionate about learning, reflection, and creativity.',
				image: './images/speakers/local/MaryScholl.jpg'
			},
			{
				id: '21',
				name: 'Max Arias Segura',
				institution: 'Ministerio de Educación Pública',
				description: 'Max Arias Segura is a Regional English Advisor in Liberia, Guanacaste. He has worked in education for about 19 years in different levels from elementary education to universities. He majored with a BA, a Licenciatura and a Master´s Degree in English Teaching, a Master´s in Educational Leadership and Administration, and a Ph.D. in Education with emphasis in Pedagogical Mediation. His areas of interest are methodology, learning, and assessment.',
				image: './images/speakers/local/MaxArias.jpg'
			},
			{
				id: '22',
				name: 'Michelle Leip',
				institution: 'Infinite Horizons',
				description: 'Michelle Leip earned her Master’s Degree in School Leadership from the Harvard Graduate School of Education and a Bachelor’s degree in Spanish and Elementary Education from Framingham State College. She is a passionate educator with 14 years of experience in all areas of education including instruction, leadership, advocacy, research, writing, and teacher training. She is committed to ensuring that all students receive a first-rate education regardless of race, religion, gender, ability, or socioeconomic status.',
				image: './images/speakers/local/MichelleLeip.jpg'
			},
			{
				id: '23',
				name: 'Natalia Ramírez Casalvolone',
				institution: 'Universidad de Costa Rica',
				description: 'Natalia received her Bachelor’s and Licenciatura Degree in English Teaching at the Universidad de Costa Rica. She received her Master’s in English Teaching at the Universidad Latina de Costa Rica- San José. She received a Diploma de Profesorado en la Enseñanza Primaria at the Universidad de San José.  She has over 13 years of teaching experience mostly working young adults at Colegio Nocturno de Naranjo and San Ramón- MEP. She is currently a faculty member at the Universidad de Costa Rica, Sede de Occidente.',
				image: './images/speakers/local/NataliaRamirez.jpg'
			},
			{
				id: '24',
				name: 'Norka Ureña Cruz',
				institution: 'Universidad Estatal a Distancia',
				description: 'Norka Ivannia Ureña Cruz was born in 1980, in San José, Costa Rica. She attended UNED where she got her Diploma and Bachelor Degree in Education cycles I and II with emphasis on English Teaching in the year 2012, and the Licenciatura in English Teaching cycles I and II, in the year 2014. She is now a regular teacher in Carmen Lyra School. Norka holds a special interest on psychopedagogy and she is planning to start her Master’s Degree on this same field at UNED.',
				image: './images/speakers/local/NorkaUreña.jpg'
			}, 
			{
				id: '25',
				name: 'Paola Artavia Moya',
				institution: 'Ministerio de Educación Pública',
				description: "As a pedagogical advisor, she is dedicated to learning about everyone else´s teaching experiences and trying to solve problems her colleagues face every day in their institutions. Using creativity and innovation along with her co-workers makes me feel that all this effort in the Ministry of Public Education is worthy.  She is always looking for ways to engage students and motivate them through meaningful pedagogical experiences. In her spare time, she enjoys reading, investigating, and looking for ways to make children, adolescents, and adults enjoy their second language learning experience.",
				image: './images/speakers/local/PaolaArtaviaMoya.png'
			},
			{
				id: '26',
				name: 'Patricia López Estrada',
				institution: 'Instituto Tecnológico de Costa Rica',
				description: "Patricia López Estrada holds an Education Doctorate from the University of Florida, a Masters's Degree in Second Languages and Cultures in English as a Foreign Language and a Licentiatura in Applied Linguistics to Second Language Teaching from Universidad Nacional, a Bachelor's Degree in English Teaching and English Translation from Universidad Latinoamericana de Ciencias y Tecnología. Her most recent publications and conference presentations focus on effective pedagogical practices in bilingual education, the use of technology, and empowerment pedagogy practices in higher education.",
				image: './images/speakers/local/PatriciaLopezEstrada.jpg'
			},
			{
				id: '27',
				name: 'Roger Ramirez Draughn',
				institution: 'SIT Graduate Institute',
				description: 'Roger, originally from NYC, received his MA in TESOL at the SIT Graduate Institute in VT and is currently pursuing a Ph.D. in Education at Universidad La Salle. He has worked on teacher training projects in USA, South Korea, Burundi, Nigeria, Dominican Republic and a number of countries in Latin America. Roger’s current interests and research include bio-pedagogy and 21st Century learning.',
				image: './images/speakers/local/RogerRamirezDraughn.jpg'
			},
			{
				id: '28',
				name: 'Rosberly López',
				institution: 'Universidad de Costa Rica, Sede del Pacífico',
				description: "Rosberly López Montero holds a degree of Licenciatura in English Teaching, a Masters in Linguistics. She is a professor and investigator at Universidad de Costa Rica, Pacific Regional Campus. She is the Coordinator of the Extension Program “Languages for International Communication”. Her areas of interest are English Teaching and Language Acquisition.",
				image: './images/speakers/local/RosberlyLopez.jpg'
			},
			{
				id: '29',
				name: 'Veronica Oguilve',
				institution: 'Universidad Técnica Nacional',
				description: "Veronica Oguilve Araya is a TESOL instructor at Universidad Técnica Nacional (UTN) and Universidad Estatal a Distancia (UNED). She holds a Bachelor’s Degree in English Teaching, a Licenciatura Degree in English and a Master’s Degree in TESOL from the University of Costa Rica.  Her research interests include the use of the Common European Framework and implementation of Web 2.0 tools to support teaching and learning.",
				image: './images/speakers/local/VeronicaOguilve.jpg'
			},
			{
				id: '30',
				name: 'Yorleni Romero Chaves',
				institution: 'Universidad Técnica Nacional',
				description: "Yorleni Romero Chaves holds a Master’s Degree in Second Languages and Cultures, a Licenciatura Degree in Applied Linguistics and a Bachelor´s Degree in English Teaching all from Universidad Nacional de Costa Rica. She has been the Academic Principal in private high schools, the Dean of Education at a private university, and an English professor at different public universities and is currently an academic for the PIT program at Universidad Técnica Nacional (UTN) in Alajuela, Costa Rica.",
				image: './images/speakers/local/YorleniRomero.jpg'
			}
		];

		$scope.schedule_SJ_SC = [
			{
				hour: '12:45 pm' 
			},
			{
				hour: '2:45 pm' 
			}
		];
		$scope.scheduleCarbachez = [
			{
				F_SR: '5:30 am',
				SR_F: '5:30 am'
			},
			{
				F_SR: '9:00 am',
				SR_F: '9:00 am'
			},
			{
				F_SR: '1:00 pm',
				SR_F: '12:30 pm'
			},
			{
				F_SR: '4:00 pm',
				SR_F: '12:30 pm'
			},
		];
		$scope.scheduleTranspisa_F_CQ = [
			{
				tanque: '5:10 am',
				chachagua: '5:15 am',
				muelle: '4:30 am'
			},
			{
				tanque: '5:50 am',
				chachagua: '7:15 am',
				muelle: ''
			},
			{
				tanque: '6:30 am',
				chachagua: '8:00 am',
				muelle: ''
			},
			{
				tanque: '10:50 am',
				chachagua: '9:45 am',
				muelle: ''
			},
			{
				tanque: '2:45 pm',
				chachagua: '11:30 am',
				muelle: ''
			},
			{
				tanque: '3:30 pm',
				chachagua: '12:15 am',
				muelle: ''
			},
			{
				tanque: '4:45 pm',
				chachagua: '3:15 am',
				muelle: ''
			},
			{
				tanque: '7:00 pm',
				chachagua: '5:30 am',
				muelle: ''
			},
			{
				tanque: '',
				chachagua: '6:30 am',
				muelle: ''
			}
		];
		$scope.scheduleTranspisa_CQ_F = [
			{
				tanque: '4:30 am',
				chachagua: '5:00 am'
			},
			{
				tanque: '5:30 am',
				chachagua: '6:00 am'
			},
			{
				tanque: '7:30 am',
				chachagua: '8:00 am'
			},
			{
				tanque: '9:00 am',
				chachagua: '10:30 am'
			},
			{
				tanque: '1:00 pm',
				chachagua: '12:20 pm'
			},
			{
				tanque: '3:30 pm',
				chachagua: '3:30 pm'
			},
			{
				tanque: '5:00 pm',
				chachagua: '5:15 pm'
			},
			{
				tanque: '6:00 pm',
				chachagua: '8:00 pm'
			},
			{
				tanque: '7:30 pm',
				chachagua: ''
			},
			{
				tanque: '10:10 pm',
				chachagua: ''
			}
		];
		$scope.scheduleTranspisa_CQ_U = [
			{
				hour: '4:25 am',
				fortuna: 'No'
			},
			{
				hour: '5:15 am',
				fortuna: '6:30 am'
			},
			{
				hour: '10:00 am',
				fortuna: '11:15 am'
			},
			{
				hour: '1:30 pm',
				fortuna: 'No'
			},
			{
				hour: '4:15 pm',
				fortuna: 'No'
			},
			{
				hour: '5:00 pm',
				fortuna: '6:15 pm'
			},
			{
				hour: '5:00 pm',
				fortuna: '5:15 pm'
			},
			{
				hour: '6:00 pm',
				fortuna: '8:00 pm'
			},
			{
				hour: '10:10 pm',
				fortuna: '11:15 pm'
			},
		];
		$scope.scheduleTranspisa_U_CQ = [
			{
				hour: '3:40 am',
				fortuna: 'No'
			},
			{
				hour: '4:15 am',
				fortuna: '6:10 am'
			},
			{
				hour: '5:45 am',
				fortuna: '8:00 am'
			},
			{
				hour: '7:40 am',
				fortuna: '10:10 am'
			},
			{
				hour: '12:15 pm',
				fortuna: '2:30 pm'
			},
			{
				hour: '1:30 pm',
				fortuna: 'No'
			},
			{
				hour: '4:25 pm',
				fortuna: '6:30 pm'
			},
		];
		$scope.scheduleTranspisa_CQ_V = [
			{
				hour: '7:50 am',
				fortuna: '9:00 am'
			},
			{
				hour: '2:20 pm',
				fortuna: '3:30 pm'
			}
		];
		$scope.scheduleTranspisa_V_CQ = [
			{
				hour: '6:50 am',
				fortuna: '7:40 am'
			},
			{
				hour: '1:00 pm',
				fortuna: '2:00 pm'
			}
		];
		$scope.schedule_CQ_T = [
			{
				F_CQ_M: '10:00 am',
				F_CQ_T: '3:30 pm',
				F_T: '8:00 am'
			},
			{
				F_CQ_M: '',
				F_CQ_T: '',
				F_T: '5:30 pm'
			}
		];

		$scope.hotels = [
			{
				name: 'Hotel Árbol Dorado',
				address: 'Contiguo al Colegio Agropecuario de San Carlos, ETAI, Santa Clara.',
				schedule: 'Lunes a domingo de 6:00 am – 10:00 pm.',
				phone: '2475-6644 / 2475-6646',
				email: '',
				website: '',
				facebook: ''
			},
			{
				name: 'Legacy Boutique Hotel',
				address: '700m este y 100m norte de la Catedral, Ciudad Quesada.',
				schedule: '7:00 am – 9:00 pm.',
				phone: '2460-7776',
				email: 'info@legacyboutiquehotel.com',
				website: 'http://legacyboutiquehotel.com/es/inicio',
				facebook: ''
			},
			{
				name: 'Hotel Conquistador',
				address: '600m sur del parque de Ciudad Quesada.',
				schedule: '24 horas, 7 días a la semana.',
				phone: '2460-0546',
				email: 'reservaciones@hconquistador.com',
				website: 'http://hconquistador.com',
				facebook: ''
			},
			{
				name: 'Tree Houses Hotel',
				address: '300m norte del Cementerio de Santa Clara.',
				schedule: '',
				phone: '2475-6507',
				email: 'Info@treehouseshotelcostarica.com',
				website: 'http://treehouseshotelcostarica.com',
				facebook: ''
			},
			{
				name: 'Hotel Loma Verde',
				address: '2kms al norte del Hospital de Ciudad Quesada, Carretera a La Fortuna del Almacen El Colono, siguiente entrada a mano derecha 500m.',
				schedule: '',
				phone: '2460-1976 / 8384-4290',
				email: '',
				website: '',
				facebook: 'https://es-es.facebook.com/Hotel-Loma-Verde-158945587495064/'
			},
			{
				name: 'Cabinas La Hacienda',
				address: '700m norte de la Escuela de Platanar, Florencia, San Carlos.',
				schedule: '24 horas, 7 días a la semana (Desayuno incluido).',
				phone: '2475-6818',
				email: 'info@cabinaslahacienda.com',
				website: 'http://www.cabinaslahacienda.com',
				facebook: ''
			},
			{
				name: 'Cabinas Nelson',
				address: '1,2km del TEC, carretera hacia Florencia.',
				schedule: '9:00 am - 9:00 pm.',
				phone: '8945-2432',
				email: '',
				website: '',
				facebook: ''
			}
		];

		$scope.banks = [
			{
				name: 'Banco Popular',
				address: 'Costado este del Supermercado Flosanco, Florencia.',
				schedule: 'Lunes a viernes de 08:45 am – 4:30 pm / Sábados de 8:15 am – 11:30 am.',
				phone: '2475-5070 / 2475-5210',
				addressATM: 'Parqueo del Supermercado Flosanco, Santa Clara.'
			},
			{
				name: 'Banco de Costa Rica (BCR)',
				address: 'Costado oeste del Supermercado Flosanco Florencia.',
				schedule: 'Lunes a viernes de 9:00 am – 4:00 pm.',
				phone: '2475-5373 / 2475-5756',
				addressATM: 'Entrada principal del Instituto Tecnológico, diagonal al Supermercado M&M.'
			},
			{
				name: 'Banco Nacional',
				address: 'Centro Comercial Plaza Florencia.',
				schedule: 'Lunes a viernes de 08:3 0am – 03:35 pm.',
				phone: '2212-2000',
				addressATM: 'Centro Comercial Plaza Florencia.'
			}
		];

		$scope.pharmacies = [
			{
				name: 'Farmacia Talamanca',
				address: 'Frente al Supermercado Flosanco, Florencia.',
				schedule: '8:00 am - 8:00 pm.',
				phone: '2475-8080'
			},
			{
				name: 'Farmacia Supermercado Flosanco, Florencia',
				address: 'Dentro Supermercado Flosanco, Florencia.',
				schedule: '7:00 am - 9:00 pm.',
				phone: '2475-5152'
			},
			{
				name: 'FarmaCity',
				address: 'Centro Comercial Plaza Florencia.',
				schedule: '7:00 am - 8:00 pm.',
				phone: '2475-7510'
			},
			{
				name: 'Farmacia Supermercado Flosanco, Santa Clara',
				address: 'Dentro Supermercado Flosanco, Santa Clara.',
				schedule: '7:00 am 9:00 pm.',
				phone: '2475-8383'
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