import React from 'react';
import ReactDOM from "react-dom";
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { TwitterFollowButton } from 'react-twitter-embed';
// import styles from '../components/HomepageFeatures/styles.module.css';
/* React Component Version */


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Learn Prompt Engineering">
      <main>
        <div style={{ alignSelf: 'center', display:"flex", width:"100%", justifyContent:"center"}}>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfzRlo0dNlIvohc2w8seHo3U5krP6KbZKLzY0YUZ7XeE3mIUA/viewform?embedded=true" width="640" height="1300" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

        </div>
        
      </main>
    </Layout>
  );
}