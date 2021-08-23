import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getPostList } from '../utils/posts';
import PostList from '../components/PostList';


const Home = ({ postList }) => {
    return (
      <>
        <Head>
          <title>UP Boutique</title>
        </Head>
        <div className='page-wrapper'>
          <Header />
          <main>
          <PostList posts={postList} />
          </main>
          <Footer />
        </div>
      </>
    );
  };

export const getStaticProps = () => {
    const postList = getPostList();
    return {
      props: {
        postList,
      },
    };
  };

export default Home;