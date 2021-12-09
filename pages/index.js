import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MainLayout from '../components/Layouts/MainLayout';
import MainMenu from '../components/MainMenu';
import HomeBanner from '../components/HomeBanner';
import PubComponent from '../components/Pub';
import AboutComponent from '../components/About';

export default function Home() {
  return (
    <MainLayout>
      <div className={styles.container}>
        <Head>
          <title>Le guide</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="leguide application" />
        </Head>
        <HomeBanner />
        <PubComponent />
        <MainMenu />
        <AboutComponent />
      </div>
    </MainLayout>
  )
}

