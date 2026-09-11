import Head from 'next/head'; // Component to handle things within the head like title and meta tags
import Layout, { siteTitle } from '../components/layout'; // Component for consistent structure that pulls default and specific siteTitle constant
import utilStyles from '../styles/utils.module.scss';
import Link from "next/link"; // CSS module for scoped classes

export default function Home() { // define and export default function for this module
    return ( // return opening
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Hi. I'm Achilles and this is a picture of me running around the UK in a ska band! I'm a software engineer, musician, husband, and father.</p>
                <p>
                    I've recently been helping out on the side with an organization called Mautic. Mautic provides a polished, open source, alternative to mailchimp.
                    (<a href="https://mautic.org">mautic.org</a>.)
                </p>
                <p>
                    <Link href="/posts/first-post">Here is my first post.</Link>
                </p>
            </section>
        </Layout>
    ); // close return
} // close default function Home