import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}


export default function Home({ allPostsData }) {
  return (
      <Layout home>
          <Head>
              <title>{siteTitle}</title>
          </Head>
          <section className={utilStyles.headingMd}>
              <p>I'm taking a class on full stack React, npm, and node.js to force myself to spend sometime learning something new.</p>
              <p>
                  Once I'm finished I'l finally get back to this {' '}
                  <a href="https://www.youtube.com/watch?v=Tm4ZJWTQXng" target="_blank">YouTube banjo tutorial</a>.
              </p>
          </section>
          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
              <h2 className={utilStyles.headingLg}>Blog</h2>
              <ul className={utilStyles.list}>
                  {allPostsData.map(({id, date, title}) => (
                      <li className={utilStyles.listItem} key={id}>
                          <Link href={`/posts/${id}`}>{title}</Link>
                          <br/>
                          <small className={utilStyles.lightText}>
                              <Date dateString={date}/>
                          </small>
                      </li>
                  ))}
              </ul>
          </section>
      </Layout>
  );
}
