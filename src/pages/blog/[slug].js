import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { getPostSlugs, getPostData } from '../../utils/posts';
import SinglePost from '../../components/SinglePost';

const BlogPost = ({ postData }) => {
    return (
        <>
            <Head>
                <title>{postData.postTitle} // UP Boutique</title>
            </Head>
            <div className='page-wrapper'>
                <Header bgImage={postData.featuredImage.url} />
                <main>
                    <SinglePost post={postData} />
                </main>
                <Footer />
            </div>
        </>
    );
};

export const getStaticPaths = () => {
    const paths = getPostSlugs();
    console.log(paths);
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({ params }) => {
    const postData = await getPostData(params.slug);
    console.log(postData);
    return {
        props: {
            postData,
        },
    };
};

export default BlogPost;

