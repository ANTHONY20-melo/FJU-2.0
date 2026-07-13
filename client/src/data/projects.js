import {
	FaFutbol,
	FaVolleyballBall,
	FaUserNinja,
	FaBasketballBall,
	FaChild,
	FaTheaterMasks,
	FaMusic,
	FaCameraRetro,
	FaNewspaper,
	FaShareAlt,
	FaPenNib,
	FaVideo,
	FaBullhorn,
	FaHandHoldingHeart,
	FaUsers,
	FaComments,
	FaTools,
	FaClipboardList,
	FaCheckDouble,
	FaShieldAlt,
	FaWalking,
	FaHeadset,
	FaHandshake,
	FaPeopleCarry,
	FaCalendarAlt,
	FaGraduationCap,
	FaBriefcase,
	FaChalkboardTeacher,
	FaMicroscope
} from 'react-icons/fa';

export const projects = {
	esporte: {
		slug: 'esporte',
		name: 'Esporte',
		sidebarName: 'ESPORTE',
		title: 'Nascidos para',
		highlight: 'Vencer.',
		description: 'Supere seus limites e descubra o poder da disciplina através do esporte.',
		aboutTitle: 'Sobre o Esportes FJU',
		about: 'O projeto Esportes FJU incentiva a prática esportiva como ferramenta de inclusão e saúde. Muito além da competição, buscamos formar cidadãos disciplinados, resilientes e focados em grandes conquistas.',
		activitiesTitle: 'Nossas Modalidades',
		logo: '/images/ESPORTES.webp',
		hero: '/images/maxresdefault.jpg',
		theme: {
			primary: '#228b22',
			secondary: '#32cd32',
			section: '#e8f5e9',
			text: '#ffffff'
		},
		gallery: [
				'/images/BP SERGIO.jpg', '/images/fenix.jpg', '/images/oração.jpg',
				'/images/A.jpg', '/images/B.jpg', '/images/C.jpg', '/images/campeonato.jpg', '/images/D.jpg', '/images/oração2.jpg'
			],
		activities: [
			{ title: 'Futebol / Futsal', description: 'Treinos táticos e campeonatos.', icon: FaFutbol },
			{ title: 'Vôlei', description: 'Desenvolvimento de agilidade e união.', icon: FaVolleyballBall },
			{ title: 'Artes Marciais', description: 'Disciplina e autoconfiança.', icon: FaUserNinja },
			{ title: 'Basquete', description: 'Energia e precisão em quadra.', icon: FaBasketballBall }
		]
	},
	cultura: {
		slug: 'cultura',
		name: 'Cultura',
		sidebarName: 'CULTURA',
		title: 'A arte de',
		highlight: 'salvar.',
		description: 'Descubra o seu talento e transforme vidas através da arte.',
		aboutTitle: 'Sobre o Cultura',
		about: 'O projeto Cultura FJU visa desenvolver o talento artístico dos jovens, proporcionando workshops e apresentações em diversas áreas, sempre focando em superação e valores.',
		activitiesTitle: 'Nossas Atividades',
		logo: '/images/CULTURA.webp',
		hero: '/images/maxresdefault (2).jpg',
		dark: true,
		theme: {
			primary: '#ffcc00',
			secondary: '#000000',
			section: '#0a0a0a',
			text: '#ffffff'
		},
		gallery: [
				'/images/D.P P.J A.B.jpg', '/images/FAMILIA MEGA DANCE.jpg', '/images/GUERREIROS.jpg', '/images/ILHA DA DUVIDA.jpg', '/images/SELFIE CONFRA.jpg', '/images/SELFIE DO DIA.jpg'
			],
		activities: [
			{ title: 'Dança', description: 'Street dance e coreografias que impactam.', icon: FaChild },
			{ title: 'Teatro', description: 'Expressão cênica e lições de vida.', icon: FaTheaterMasks },
			{ title: 'Música', description: 'Bandas, corais e instrumentos.', icon: FaMusic },
			{ title: 'Audiovisual', description: 'Fotografia, edição e suporte VPR.', icon: FaCameraRetro }
		]
	},
	midia: {
		slug: 'midia',
		name: 'Mídia',
		sidebarName: 'MÍDIA',
		title: 'Comunicando a',
		highlight: 'Fé.',
		description: 'Use a tecnologia e a criatividade para espalhar boas notícias pelo mundo.',
		aboutTitle: 'Sobre o Mídia FJU',
		about: 'O projeto Mídia FJU é a voz da juventude conectada. Através do jornalismo, design, fotografia e redes sociais, mostramos o trabalho da FJU e levamos mensagens de esperança de forma profissional.',
		activitiesTitle: 'Nossos Departamentos',
		logo: '/images/MIDIA_1.webp',
		hero: '/images/maxresdefault (1).jpg',
		theme: {
			primary: '#003366',
			secondary: '#00aaff',
			section: '#e1f5fe',
			text: '#ffffff'
		},
		gallery: [
				'/images/fju.jpg', '/images/maxresdefault (1).jpg', '/images/maxresdefault (3).jpg'
			],
		activities: [
			{ title: 'Jornalismo', description: 'Cobertura de eventos e matérias exclusivas.', icon: FaNewspaper },
			{ title: 'Social Media', description: 'Gestão de redes sociais e estratégias digitais.', icon: FaShareAlt },
			{ title: 'Design Gráfico', description: 'Criação de artes e identidade visual.', icon: FaPenNib },
			{ title: 'Audiovisual', description: 'Edição de vídeos e transmissões ao vivo.', icon: FaVideo }
		]
	},
	atalaia: {
		slug: 'atalaia',
		name: 'Atalaia',
		sidebarName: 'ATALAIA',
		title: 'Somos Todos',
		highlight: 'Atalaias.',
		description: 'Levando a palavra de fé e esperança a cada jovem em qualquer lugar.',
		aboutTitle: 'O Projeto Atalaia',
		about: 'O Atalaia é a voz da FJU. O objetivo principal é levar a mensagem de salvação para jovens que se encontram perdidos, através do evangelismo criativo em praças, comunidades, hospitais e escolas.',
		activitiesTitle: 'Nossa Missão',
		logo: '/images/ATALAIA.webp',
		theme: {
			primary: '#003366',
			secondary: '#ffcc00',
			section: '#003366',
			text: '#ffffff'
		},
		gallery: [
				'/images/todos.jpg', '/images/oração.jpg', '/images/SELFIE DO DIA.jpg'
			],
		activities: [
			{ title: 'Evangelismo', description: 'Abordagens dinâmicas e criativas para alcançar quem precisa.', icon: FaBullhorn },
			{ title: 'Apoio Social', description: 'Levando conforto e auxílio em áreas de vulnerabilidade.', icon: FaHandHoldingHeart },
			{ title: 'União', description: 'Uma equipe unida com um só propósito: salvar almas.', icon: FaUsers },
			{ title: 'Escuta Ativa', description: 'Disponibilidade para ouvir e orientar o jovem sofrido.', icon: FaComments }
		]
	},
	uniforca: {
		slug: 'uniforca',
		name: 'Uniforça',
		sidebarName: 'UNIFORÇA',
		title: 'Unidos Somos',
		highlight: 'Mais Fortes.',
		description: 'Servindo com excelência, organização e disciplina em todos os momentos.',
		aboutTitle: 'Sobre o Uniforça',
		about: 'O projeto Uniforça é o braço de apoio logístico e organizacional da FJU. Composto por jovens prontos para servir, atuamos na infraestrutura de eventos, garantindo que tudo ocorra com ordem e dedicação.',
		activitiesTitle: 'Nossa Atuação',
		logo: '/images/UNIFORCA.webp',
		theme: {
			primary: '#111111',
			secondary: '#ffcc00',
			section: '#ffcc00',
			text: '#ffffff'
		},
		gallery: [
				'/images/UNIFORCA.webp', '/images/fju.jpg', '/images/trofeus.jpg'
			],
		activities: [
			{ title: 'Infraestrutura', description: 'Suporte na montagem e organização física de grandes eventos.', icon: FaTools },
			{ title: 'Organização', description: 'Planejamento logístico para garantir o fluxo e a ordem.', icon: FaClipboardList },
			{ title: 'Equipe de Apoio', description: 'Auxílio direto aos demais projetos e ao público presente.', icon: FaUsers },
			{ title: 'Excelência', description: 'Compromisso com o melhor resultado em cada tarefa.', icon: FaCheckDouble }
		]
	},
	arcanjos: {
		slug: 'arcanjos',
		name: 'Arcanjos',
		sidebarName: 'ARCANJOS',
		title: 'Guardiões da',
		highlight: 'Fé.',
		description: 'Sua segurança e acolhimento são a nossa missão. Protegendo a juventude.',
		aboutTitle: 'Sobre o Arcanjos FJU',
		about: 'O Projeto Arcanjos FJU é a linha de frente na segurança e no acolhimento. Nossos voluntários atuam com dedicação em eventos e reuniões, garantindo um ambiente seguro e receptivo para todos.',
		activitiesTitle: 'Nossa Atuação',
		logo: '/images/ARCANJOS.webp',
		theme: {
			primary: '#1e2832',
			secondary: '#6699cc',
			section: '#f8fbfd',
			text: '#ffffff'
		},
		gallery: [
				'/images/ARCANJOS.webp', '/images/fju.jpg', '/images/SELFIE CONFRA.jpg'
			],
		activities: [
			{ title: 'Segurança', description: 'Proteção e organização durante grandes encontros da FJU.', icon: FaShieldAlt },
			{ title: 'Acolhimento', description: 'Receber e orientar os jovens com respeito e atenção.', icon: FaHandHoldingHeart },
			{ title: 'Fluxo', description: 'Auxílio na movimentação de pessoas para segurança de todos.', icon: FaWalking },
			{ title: 'Suporte', description: 'Estar pronto para auxiliar e informar em qualquer necessidade.', icon: FaHeadset }
		]
	},
	assistentes: {
		slug: 'assistentes',
		name: 'Assistentes',
		sidebarName: 'ASSISTENTES',
		title: 'Juntos,',
		highlight: 'ajudamos mais.',
		description: 'Seja um apoio essencial para os projetos da FJU e faça a diferença.',
		aboutTitle: 'Sobre os Assistentes',
		about: 'O Projeto Assistentes da FJU é o coração que impulsiona todos os outros projetos. Somos responsáveis pela organização, logística e suporte, garantindo que tudo funcione perfeitamente para que a mensagem chegue a todos.',
		activitiesTitle: 'Nosso Trabalho',
		logo: '/images/ASSISTENTES (1).webp',
		theme: {
			primary: '#ff69b4',
			secondary: '#ffc0cb',
			section: '#fff0f5',
			text: '#ffffff'
		},
		gallery: [
				'/images/ASSISTENTES (1).webp', '/images/oração2.jpg', '/images/SELFIE DO DIA.jpg'
			],
		activities: [
			{ title: 'Organização', description: 'Suporte completo no acolhimento e execução de grandes encontros.', icon: FaHandshake },
			{ title: 'Logística', description: 'Cuidado com cada detalhe para que os projetos tenham estrutura.', icon: FaClipboardList },
			{ title: 'Ações Sociais', description: 'Participação ativa em visitas e suporte comunitário.', icon: FaPeopleCarry },
			{ title: 'Planejamento', description: 'Desde a ideia inicial até a realização, somos a base.', icon: FaCalendarAlt }
		]
	},
	universitarios: {
		slug: 'universitarios',
		name: 'Universitários',
		sidebarName: 'FJUNI',
		title: 'Formando',
		highlight: 'Visionários.',
		description: 'O suporte que você precisa para brilhar na faculdade e no mercado de trabalho.',
		aboutTitle: 'Sobre o Universitários',
		about: 'O projeto Universitários FJU auxilia jovens estudantes a conciliarem a vida acadêmica com os valores cristãos, oferecendo suporte intelectual, orientação de carreira e workshops profissionais.',
		activitiesTitle: 'O que oferecemos',
		logo: '/images/UNIVERSITARIOS.webp',
		theme: {
			primary: '#a40000',
			secondary: '#e60000',
			section: '#fff0f0',
			text: '#ffffff'
		},
		gallery: [
				'/images/UNIVERSITARIOS.webp', '/images/hq720.jpg', '/images/hq720 (1)uni.jpg'
			],
		activities: [
			{ title: 'Apoio Acadêmico', description: 'Grupos de estudo e auxílio em diversas disciplinas.', icon: FaGraduationCap },
			{ title: 'Carreira & RH', description: 'Dicas de currículo, postura e networking.', icon: FaBriefcase },
			{ title: 'Workshops', description: 'Palestras e cursos com profissionais experientes.', icon: FaChalkboardTeacher },
			{ title: 'Pesquisa', description: 'Incentivo à produção científica e debates atuais.', icon: FaMicroscope }
		]
	}
};
