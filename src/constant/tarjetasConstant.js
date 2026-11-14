//TARJETAS INFO
const tarjetas = [
    { label: 'Educación Primaria', id: 1, ciclos: 'CLEI 1 y 2', grados: 'Grados 1° a 5°', img: '/img/primaria.webp', color: 'secondary', contenido: 'Niños y niñas que no han iniciado o han interrumpido su educación básica primaria.', objetivo: 'Brindar las herramientas fundamentales en lectoescritura, matemáticas, ciencias y desarrollo personal, permitiendo el ingreso a la educación media.', modo: 'Nivelación flexible con acompañamiento docente personalizado.' },
    { label: 'Educación Secundaria', id: 2, ciclos: 'CLEI 3 y 4', grados: 'Grados 6° a 9°', img: '/img/secundaria.webp', color: 'primary', contenido: 'Adolescentes y jóvenes que desean continuar sus estudios de básica secundaria después de un periodo de interrupción.', objetivo: 'Fortalecer competencias académicas clave, pensamiento crítico y habilidades sociales para la vida.', modo: 'Aprendizaje por competencias, con énfasis en valores y trabajo colaborativo.' },
    { label: 'Educación Media', id: 3, ciclos: 'CLEI 5 y 6', grados: 'Grados 10° y 11°', img: '/img/medi.webp', color: 'accent', contenido: 'Jóvenes que buscan culminar su bachillerato de manera flexible.', objetivo: 'Preparar a los estudiantes para obtener el título de Bachiller Académico, y orientarlos en la elección de su proyecto de vida: educación superior, técnica o inserción laboral.', modo: 'Formación integral, orientación vocacional y preparación para pruebas Saber 11.' }
];

const ciclos = [
    { clei: 'CLEI 1', grados: '1° y 2°' },
    { clei: 'CLEI 2', grados: '3°, 4° y 5°' },
    { clei: 'CLEI 3', grados: '6° y 7°' },
    { clei: 'CLEI 4', grados: '8° y 9°' },
    { clei: 'CLEI 5', grados: '10°' },
    { clei: 'CLEI 6', grados: '11°' },
];

export {tarjetas, ciclos};
