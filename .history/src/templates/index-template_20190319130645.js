import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Page from '../components/Page';
import Pagination from '../components/Pagination';

const IndexTemplate = ({ data, pageContext }) => {
  const {
    title: siteTitle,
    subtitle: siteDescription
  } = data.allSanityConfig.siteE;

  const {
    currentPage,
    hasNextPage,
    hasPrevPage,
    prevPagePath,
    nextPagePath
  } = pageContext;

  const { edges } = data.allSanityPost;
  const pageTitle = currentPage > 0 ? `Posts - Page ${currentPage} - ${siteTitle}` : siteTitle;

  return (
    <Layout title={pageTitle} description={siteDescription}>
      <Sidebar isIndex />
      <Page>
        <Feed edges={edges} />
        <Pagination
          prevPagePath={prevPagePath}
          nextPagePath={nextPagePath}
          hasPrevPage={hasPrevPage}
          hasNextPage={hasNextPage}
        />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query IndexTemplate($postsLimit: Int!, $postsOffset: Int!) {
    allSanityConfig(
      limit: 1
    ){
      edges {
        node {
          siteTitle,
          siteDescription
        }
      }
    }
    allSanityPost(
        limit: $postsLimit,
        skip: $postsOffset,
      ){
      edges {
        node {
          slug {
            current
          }
          title
          publishedAt
          categories {
            _id
            title
          }
          _rawBody
        }
      }
    }
  }
`;

export default IndexTemplate;
