import React from 'react';
import { graphql } from 'gatsby';
import { Image } from '@/components/Image';
import { ImageSet } from '@/components/ImageSet';
import { HomeLink } from '@/components/HomeLink';
import { buildImagesMap, PageQueryResult } from '@/utils/image';
import { Header, HeaderSubtitle, HeaderTitle } from '@/components/Header';
import { Layout } from '@/components/Layout';

export default function ViennaWoods({ data }: { data: PageQueryResult }) {
  const images = buildImagesMap(data);
  return (
    <Layout>
      <Header>
        <HeaderTitle>Vienna Woods</HeaderTitle>
        <HeaderSubtitle>A chilly day exploring the hills of Kahlenberg in the Vienna Woods.</HeaderSubtitle>
      </Header>

      <Image src={images.P1600838} caption="Sunrise over Vienna" />
      <Image src={images.P1600912} />
      <Image src={images.P1600941} />
      <Image src={images.P1600969} />
      <Image src={images.P1600998} />
      <Image src={images.P1610010} />
      <Image src={images.P1610031} type="full" />
      <ImageSet>
        <Image src={images.P1610050} />
        <Image src={images.P1610034} />
      </ImageSet>
      <ImageSet>
        <Image src={images.P1610049} />
        <Image src={images.P1610054} />
      </ImageSet>
      <Image src={images.P1610085} />
      <Image src={images.P1610061} />
      <Image src={images.P1610106} caption="St. Josef auf dem Kahlenberg" />
      <Image src={images.P1610120} />
      <ImageSet>
        <Image src={images.P1610135} />
        <Image src={images.P1610137} />
      </ImageSet>
      <Image src={images.P1610117} />
      <ImageSet>
        <Image src={images.P1610140} />
        <Image src={images.P1610151} />
      </ImageSet>
      <Image src={images.P1610145} />
      <Image src={images.P1610143} />
      <ImageSet>
        <Image src={images.P1610156} />
        <Image src={images.P1610165} />
      </ImageSet>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "2020-vienna-woods" } }) {
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
