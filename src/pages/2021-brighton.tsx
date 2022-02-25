import React from 'react';
import { graphql } from 'gatsby';
import { Image } from '@/components/Image';
import { ImageSet } from '@/components/ImageSet';
import { buildImagesMap, PageQueryResult } from '@/utils/image';
import { Header, HeaderSubtitle, HeaderTitle } from '@/components/Header';
import { Layout } from '@/components/Layout';

export default function Brighton({ data }: { data: PageQueryResult }) {
  const images = buildImagesMap(data);
  return (
    <Layout>
      <Header>
        <HeaderTitle>Brighton</HeaderTitle>
        <HeaderSubtitle>A daytrip to the sea.</HeaderSubtitle>
      </Header>

      <Image src={images.P1680691} />
      <Image src={images.P1680700} />
      <Image src={images.P1680627} />
      <ImageSet>
        <Image src={images.P1680505} />
        <Image src={images.P1680536} />
      </ImageSet>
      <Image src={images.P1680576} />
      <Image src={images.P1680600} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "2021-brighton" } }) {
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
