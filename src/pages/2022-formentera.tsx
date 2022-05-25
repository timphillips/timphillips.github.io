import React from 'react';
import { graphql } from 'gatsby';
import { Image } from '@/components/Image';
import { Header, HeaderSubtitle, HeaderTitle } from '@/components/Header';
import { Layout } from '@/components/Layout';
import { buildImagesMap, PageQueryResult } from '@/utils/image';

export default function Formentera({ data }: { data: PageQueryResult }) {
  const images = buildImagesMap(data);
  return (
    <Layout>
      <Header>
        <HeaderTitle>Formentera, Spain</HeaderTitle>
        <HeaderSubtitle>The quieter and lesser-known alternative to Formentera.</HeaderSubtitle>
      </Header>

      <Image src={images.IMG_0063} />
      <Image src={images.IMG_1056} type="full" />
      <Image src={images.IMG_0065} />
      <Image src={images.IMG_1319} />
      <Image src={images.IMG_1020} />
      <Image src={images.IMG_7205} />
      <Image src={images.IMG_7251} />
      <Image src={images.IMG_0064} type="small" />
      <Image src={images.IMG_8584} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "2022-formentera" } }) {
      edges {
        node {
          id
          name
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
