import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getPostList } from '../utils/posts';
import PostList from '../components/PostList';
import { getProductList } from '../utils/products';


const Home = ({ postList, productList }) => {
    return (
        <>
            <Head>
                <title>UP Boutique</title>
            </Head>
            <div className='page-wrapper'>
                <Header />
                <main>
                    <pre>{JSON.stringify(productList, null, 2)}</pre>
                    <PostList posts={postList} />
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Home;

export const getStaticProps = async () => {
    const postList = getPostList();
    const productList = await getProductList();
    return {
        props: {
            postList,
            productList,
        },
    };
};