//contacto
const whatsappMessage = `Hola quiero obtener más información acerca de la escuela.`;
const numero = '+573216803975'
const urlWhatsapp =`https://wa.me/${numero}?text=${encodeURIComponent(whatsappMessage)}`
const urlResolucion = `https://www.atlantico.gov.co/images/stories/adjuntos/educacion/Notificacion_jur/Res_1195_Licencia_IE_maruja_del_Rosario_-_Manat.pdf`
const urlFundacion = '/documentos/Fundacion.pdf'
const urlManual = '/documentos/Manual.pdf'
const urlCamara = '/documentos/Camara.pdf'
const urlAcreditacion = '/documentos/acreditacion.pdf'
const urlPlataforma = 'https://olan.com.co/cemixescolarizado/'
const urlComoLlegar = 'https://www.google.com/maps/dir/?api=1&destination=Institución+Educativa+Maruja+del+Rosario+Aguilar+Manatí+Atlántico'

const contacto = {
    direccion: 'Calle 4 # 4-30, Manatí, Atlántico',
    telefono: '321 680 3975',
    telefonoHref: `tel:${numero}`,
    correo: 'wual_09@hotmail.com',
    nit: '901831702-6',
}

export {urlResolucion, urlWhatsapp, urlFundacion, urlCamara, urlManual, urlAcreditacion, urlPlataforma, urlComoLlegar, contacto}
