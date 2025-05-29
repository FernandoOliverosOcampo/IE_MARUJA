import { contenido } from "../../constant/misionVisionConstant";
import styles from './MYV.module.css'
const MisionVision = () =>{
    return (
        <div className={styles.contendidoMYV}>
            {
                contenido.map((content)=>(
                    <div  className= {styles.tarjetas} key={content.id}>
                        <div className="titulo">
                            <h3>{content.label}</h3>
                        </div>
                        <div className="contenido">
                            <p>{content.contenido}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default MisionVision;