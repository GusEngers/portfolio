import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Intro from '@/components/Intro/Intro';
import About from '@/components/About/About';
import Projects from '@/components/Projects/Projects';

export default function Home(): JSX.Element {
  const [theme, setTheme] = React.useState('light');

  const changeTheme = (): void => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  React.useEffect(() => {
    document.getElementById('general')?.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <Head>
        <title>GusEngers - Portfolio</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main id='general' className={styles.main}>
        <div className={styles.container}>
          <Navbar theme={theme} action={changeTheme} />
          <Intro />
          <About />
          <Projects />
        </div>
      </main>
    </>
  );
}
