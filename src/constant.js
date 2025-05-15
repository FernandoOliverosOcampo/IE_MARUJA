const items = [
    { label: 'Inicio', id: 1, type: 'route', href: '/' },
    { label: 'Sede', id: 2, type: 'route', href: '/sede' },
    { label: 'Contacto', id: 3, type: 'route', href: '/contacto' },
    { label: '¿Quiénes somos?', id: 4, type: 'route', href: '/quienes-somos' },
    { label: 'Misión y Visión', id: 5, type: 'route', href: '/mision-vision' }
];

const despegable = [
    { label: '¿Quiénes somos?', id: 1, type: 'route', href: '/quienes-somos' },
    { label: 'Misión y Visión', id: 2, type: 'route', href: '/mision-vision' },
];

const contenido = [
    { label: 'Misión', contenido: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste tempore quas ad tempora modi nam quae, molestiae eum, alias reprehenderit dolorum necessitatibus saepe vel unde quasi vero eligendi est ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, modi, fugit incidunt reiciendis nesciunt nihil fugiat error aliquid aliquam tenetur vitae. Tempora vitae beatae placeat, adipisci dicta suscipit eum voluptatibus!', id: 1 },
    { label: 'Visión', contenido: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste tempore quas ad tempora modi nam quae, molestiae eum, alias reprehenderit dolorum necessitatibus saepe vel unde quasi vero eligendi est ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, modi, fugit incidunt reiciendis nesciunt nihil fugiat error aliquid aliquam tenetur vitae. Tempora vitae beatae placeat, adipisci dicta suscipit eum voluptatibus!', id: 2 }
];

const tarjetas = [
    { label: 'Educación Primaria Nivelatoria', id: 1, grados: 'Grados: 1° a 5°', img: './assets/img/primaria.webp', contenido: 'Dirigido a: Niños y niñas que no han iniciado o han interrumpido su educación básica primaria ', objetivo: 'Objetivo: Brindar las herramientas fundamentales en lectoescritura, matemáticas, ciencias y desarrollo personal, permitiendo el ingreso a la educación media Modalidad: Nivelación flexible con acompañamiento docente personalizado.' },
    { label: ' Educación Media Nivelatoria', id: 2, grados: 'Grados: 6° a 9°', img: './assets/img/secundaria.webp', contenido: 'Dirigido a: Adolescentes y jóvenes que desean continuar sus estudios de básica secundaria después de un periodo de interrupción', objetivo: ' Objetivo: Fortalecer competencias académicas clave, pensamiento crítico y habilidades sociales para la vida Metodología: Aprendizaje por competencias, con énfasis en valores y trabajo colaborativo.' },
    { label: 'Educación Superior Secundaria Nivelatoria', id: 3, grados: 'Grados: 10° y 11°', img: './assets/img/media.webp', contenido: 'Dirigido a: Jóvenes que buscan culminar su bachillerato de manera flexible', objetivo: ' Objetivo: Preparar a los estudiantes para obtener el título de Bachiller Académico, y orientarlos en la elección de su proyecto de vida: educación superior, técnica o inserción laboral. Enfoque: Formación integral, orientación vocacional y preparación para pruebas Saber 11.' }
];

export { items, contenido, despegable, tarjetas };