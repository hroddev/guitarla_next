import Layout from '../components/Layout'
import Image from 'next/image'
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
    return (
        <Layout
            pagina="Nosotros"
        >
            <main className='contenedor'>
                <h2 className='heading'>Nosotros</h2>
                <div className={styles.contenido}>
                    <Image layout="responsive" width={600} height={450} src="/img/nosotros.jpg" alt="Imagen sobre nosotros"/>
                    <div>
                        <p>Ullamco anim do adipisicing cillum. Deserunt nisi elit cupidatat nulla pariatur in aliquip dolore laborum Lorem est labore ullamco. Excepteur eu dolor quis sint in. Cupidatat sint irure esse officia ut quis laboris. Consectetur est elit excepteur mollit nisi commodo sunt. Et tempor Lorem tempor nisi sit adipisicing.
                        </p>
                        <p>Ullamco anim do adipisicing cillum. Deserunt nisi elit cupidatat nulla pariatur in aliquip dolore laborum Lorem est labore ullamco. Excepteur eu dolor quis sint in. Cupidatat sint irure esse officia ut quis laboris. Consectetur est elit excepteur mollit nisi commodo sunt. Et tempor Lorem tempor nisi sit adipisicing.
                        </p>
                    </div>
                </div>
            </main>

        </Layout>
    )
}

export default Nosotros
