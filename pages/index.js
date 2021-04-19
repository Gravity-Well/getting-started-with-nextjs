import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
   <div className={styles.container}>
     <Head>
       <title>
          My App
       </title>
     </Head>
     <h1>Welcome to Next.js</h1>
    </div>
  )
}
