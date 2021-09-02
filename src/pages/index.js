import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner, styles.herobg)}>
      <div className="container">
				<img src='https://raw.githubusercontent.com/proj-previews/fvx/gh-pages/img/logo.png' className={clsx(styles.heroimg)}/>
        <h1 className={clsx('hero__title', styles.herotitle)}>{siteConfig.title}</h1>
        <p className={clsx('hero__subtitle', styles.herotag)}>{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
			// title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
			<HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
