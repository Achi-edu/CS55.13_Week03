import Head from 'next/head'; // Component to handle things within the head like title and meta tags
import Layout from '../../components/layout'; // Component for consistent template structure
import Script from 'next/script'; // For loading external scripts or libraries and specify how to load them

export default function FirstPost() { // Define and export the default FirstPost component
    return ( // return the specified content
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
            />
            <h1>First Post</h1>
            <p>This is my first generic post description that replaces the redundant back to home link.</p>
        </Layout>
    ); // closing for return
} // closing for default function