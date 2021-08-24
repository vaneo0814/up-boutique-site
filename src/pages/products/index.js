import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { getProductList } from '../../utils/products';
import ProductList from '../../components/ProductList';


const Products = ({ productList }) => {
    return (
        <>
            <Head>
                <title>Products // UP Boutique</title>
            </Head>
            <div className='page-wrapper'>
                <Header bgImage={'/images/featured-3.png'} />
                <main>
                    <ProductList products={productList} />
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Products;

export const getStaticProps = async () => {
    const productList = await getProductList();
    return {
        props: {
            productList,
        },
    };
};