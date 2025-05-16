const items = [
    { label: 'Inicio', id: 1, type: 'route', href: '/' },
    { label: 'Sede', id: 2, type: 'route', href: '/sede' },
    { label: 'Resolución 1195', id: 3, type: 'route', href: '/resolucion' },
];

const despegable = [
    { label: '¿Quiénes somos?', id: 1, type: 'route', href: '/quienes-somos' },
    { label: 'Misión y Visión', id: 2, type: 'route', href: '/mision-vision' },
];

const contenido = [
    { label: 'Misión', contenido: 'La Institución Educativa Maruja Del Rosario Aguilar tiene como misión brindar una educación de calidad, inclusiva y flexible a niños, adolescentes y jóvenes que requieren nivelación académica, promoviendo el desarrollo integral, la equidad y la formación en valores. A través de un modelo pedagógico centrado en el estudiante, buscamos garantizar el acceso, permanencia y culminación exitosa de los estudios básicos y medios, contribuyendo al mejoramiento de la calidad de vida y al fortalecimiento del tejido social.', id: 1 },
    { label: 'Visión', contenido: 'Para el año 2030, la Institución Educativa Maruja Del Rosario Aguilar será reconocida como un referente en educación nivelatoria a nivel regional, destacándose por su compromiso con la transformación social, el acompañamiento pedagógico personalizado y la formación de ciudadanos críticos, responsables y comprometidos con el desarrollo sostenible de su comunidad.', id: 2 }
];

const tarjetas = [
    { label: 'Educación Primaria Nivelatoria', id: 1, grados: 'Grados: 1° a 5°', img: '/img/primaria.webp', contenido: ' Niños y niñas que no han iniciado o han interrumpido su educación básica primaria ', objetivo: ' Brindar las herramientas fundamentales en lectoescritura, matemáticas, ciencias y desarrollo personal, permitiendo el ingreso a la educación media', modo:' Nivelación flexible con acompañamiento docente personalizado.' },
    { label: ' Educación Media Nivelatoria', id: 2, grados: 'Grados: 6° a 9°', img: '/img/secundaria.webp', contenido: ' Adolescentes y jóvenes que desean continuar sus estudios de básica secundaria después de un periodo de interrupción', objetivo: '  Fortalecer competencias académicas clave, pensamiento crítico y habilidades sociales para la vida', modo: ' Aprendizaje por competencias, con énfasis en valores y trabajo colaborativo.' },
    { label: 'Educación Superior Secundaria Nivelatoria', id: 3, grados: 'Grados: 10° y 11°', img: '/img/media.webp', contenido: ' Jóvenes que buscan culminar su bachillerato de manera flexible', objetivo: '  Preparar a los estudiantes para obtener el título de Bachiller Académico, y orientarlos en la elección de su proyecto de vida: educación superior, técnica o inserción laboral.', modo:' Formación integral, orientación vocacional y preparación para pruebas Saber 11.' }
];
const whatsappMessage = `Hola quiero obtener más información acerca de la escuela.`;

const urlWhatsapp =`https://wa.me/3058290062?text=${encodeURIComponent(whatsappMessage)}`
const urlResolucion = `https://www.atlantico.gov.co/images/stories/adjuntos/educacion/Notificacion_jur/Res_1195_Licencia_IE_maruja_del_Rosario_-_Manat.pdf`
export { items, contenido, despegable, tarjetas, urlWhatsapp, urlResolucion};