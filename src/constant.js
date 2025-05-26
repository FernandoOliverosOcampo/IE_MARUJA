//MENU CONTENIDO
const items = [
    { label: 'Inicio', id: 1, type: 'route', href: '/' },
    { label: 'Sede', id: 2, type: 'route', href: '/sede' },
    { label: 'Resolución 1195', id: 3, type: 'route', href: '/resolucion' },
];

const despegable = [
    { label: 'Historia de la institución', id: 1, type: 'route', href: '/historia' },
    { label: '¿Quiénes somos?', id: 2, type: 'route', href: '/quienes-somos' },
    { label: 'Misión y Visión', id: 3, type: 'route', href: '/mision-vision' },

];

//MISION Y VISION
const contenido = [
    { label: 'Misión', contenido: 'La Institución Educativa Maruja del Rosario de Manatí Atlántico jóvenes y adultos que procuran desarrollar y actitudes de participación en la construcción personal, en aras de un bien común apuntando al desarrollo de la región y el país. Orienta su quehacer pedagógico en seres humanos preparados para la competitividad, que interactúan en diferentes contextos de aprendizaje, teniendo en cuentas sus valores y principios éticos y morales orientados a fortalecer un proyecto de vida, que permite la posición en el mundo cambiante de hoy. Nuestra Visión la Institución educativa Maruja del Rosario será reconocida como organismos de educación En el año 2019 La Institución Educativa Maruja del Rosario de Manatí Atlántico, se proyecta como una institución que abre sus puertas a la superación en educación a hombres y mujeres que buscan para su futuro una calidad de vida en cuanto a su formación como personas de bien fundamentados en valores al desenvolverse en cualquier campo laboral y social brindándole espacios académicos moviendo al hombre del mañana a enfrentar nuevos retos en cualquier contexto.', id: 1 },
    { label: 'Visión', contenido: 'En el año 2022, nuestra Institución Educativa Maruja del Rosario del Municipio de Manatí Atlántico  será reconocida  por organismos de educación nacional e internacional y por organizaciones gubernamentales y no gubernamentales, por su modelo educativo flexible “Superando”, calidad académica, experiencia puesta en el desarrollo de los proceso y alcances transformadores de una propuesta curricular que permitirá la creación y cooperación en proyectos que aporten en el mejoramiento del entorno, generando un espacio significativo a jóvenes y adultos teniendo en cuenta la inclusión a la diversidad y el acceso exitoso a la educación superior.', id: 2 }
];

//TARJETAS INFO
const tarjetas = [
    { label: 'Educación Primaria', id: 1, ciclos: 'CLEI: 1 y 2', grados: 'Grados: 1° a 5°', img: '/img/primaria.webp', contenido: ' Niños y niñas que no han iniciado o han interrumpido su educación básica primaria ', objetivo: ' Brindar las herramientas fundamentales en lectoescritura, matemáticas, ciencias y desarrollo personal, permitiendo el ingreso a la educación media', modo:' Nivelación flexible con acompañamiento docente personalizado.' },
    { label: ' Educación Secundaria ', id: 2, ciclos: 'CLEI: 3 y 4', grados: 'Grados: 6° a 9°', img: '/img/secundaria.webp', contenido: ' Adolescentes y jóvenes que desean continuar sus estudios de básica secundaria después de un periodo de interrupción', objetivo: '  Fortalecer competencias académicas clave, pensamiento crítico y habilidades sociales para la vida', modo: ' Aprendizaje por competencias, con énfasis en valores y trabajo colaborativo.' },
    { label: 'Educación Media', id: 3, ciclos: 'CLEI: 5 y 6', grados: 'Grados: 10° y 11°', img: '/img/media.webp', contenido: ' Jóvenes que buscan culminar su bachillerato de manera flexible', objetivo: '  Preparar a los estudiantes para obtener el título de Bachiller Académico, y orientarlos en la elección de su proyecto de vida: educación superior, técnica o inserción laboral.', modo:' Formación integral, orientación vocacional y preparación para pruebas Saber 11.' }
];

//contacto
const whatsappMessage = `Hola quiero obtener más información acerca de la escuela.`;

const urlWhatsapp =`https://wa.me/3216803975?text=${encodeURIComponent(whatsappMessage)}`
const urlResolucion = `https://www.atlantico.gov.co/images/stories/adjuntos/educacion/Notificacion_jur/Res_1195_Licencia_IE_maruja_del_Rosario_-_Manat.pdf`
export { items, contenido, despegable, tarjetas, urlWhatsapp, urlResolucion};