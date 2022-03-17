import React from 'react';
import { graphql } from 'gatsby';
import { Image } from '@/components/Image';
import { Header, HeaderSubtitle, HeaderTitle } from '@/components/Header';
import { Layout } from '@/components/Layout';
import { buildImagesMap, PageQueryResult } from '@/utils/image';

export default function Conwy({ data }: { data: PageQueryResult }) {
  const images = buildImagesMap(data);
  return (
    <Layout>
      <Header>
        <HeaderTitle>Conwy, Wales</HeaderTitle>
        <HeaderSubtitle>The first stop on our Wales roadtrip.</HeaderSubtitle>
      </Header>

      <Image src={images.P1690311} />
      <Image src={images.P1690318} />
      <Image src={images.IMG_5114} />
      <Image src={images.P1690949} type="full" />
      <Image src={images.IMG_5082} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "2021-wales-conwy" } }) {
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
