import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getPostList } from '../utils/posts';
import PostList from '../components/PostList';
import { getProductList } from '../utils/products';
import ProductList from '../components/ProductList';



const Home = ({ postList, productList }) => {
    return (
        <>
            <Head>
                <title>UP Boutique</title>
            </Head>
            <div className='page-wrapper'>
                <Header />
                <main>
                    <ProductList products={productList} />
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