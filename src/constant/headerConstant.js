//MENU CONTENIDO
const items = [
    { label: 'Inicio', id: 1, type: 'route', href: '/' },
    { label: 'Sede', id: 2, type: 'route', href: '/sede' },
    { label: 'Proyectos Institucionales', id: 3, type: 'route', href: '/proyectos' },

];

const despegable = [
    { label: '▸ Historia', id: 1, type: 'route', href: '/historia' },
    { label: '▸ ¿Quiénes somos?', id: 2, type: 'route', href: '/quienes-somos' },
    { label: '▸ Misión y Visión', id: 3, type: 'route', href: '/mision-vision' },
    { label: '▸ Fundación Maruja', id: 4, type: 'route', href: '/fundacion' },
    {label: '▸ Manual de convivencia', type: 'file' , id: 5, href: '/documentos/Manual.pdf'}


];
const botones = [
    {label: 'Sobre nosotros', id:1},
    {label: 'Resoluciones y Certificados', id: 2}
]

const resoluciones = [
    { label: '▸ Resolución 1195', id: 1, type: 'route', href: '/resolucion' },
    { label: '▸ Camara comercio', id: 2, type: 'file', href: '/documentos/Camara.pdf' },
    {label: '▸ Acreditación', type: 'file' , id: 3, href: '/documentos/acreditacion.pdf'},
    
    // Agrega más si lo necesitas
];



export { items, despegable, botones, resoluciones};