import React from 'react';
import { graphql } from 'gatsby';
import { Image } from '@/components/Image';
import { ImageSet } from '@/components/ImageSet';
import { buildImagesMap, PageQueryResult } from '@/utils/image';
import { Header, HeaderTitle } from '@/components/Header';
import { Layout } from '@/components/Layout';

export default function ItalyVenice({ data }: { data: PageQueryResult }) {
  const images = buildImagesMap(data);
  return (
    <Layout>
      <Header>
        <HeaderTitle>Venice, Italy</HeaderTitle>
      </Header>

      <ImageSet>
        <Image src={images.DSC03983} />
        <Image src={images.P1600089} />
      </ImageSet>
      <Image src={images.P1600138} caption="Christmas in Venice" />
      <ImageSet>
        <Image src={images.DSC04042} />
        <Image src={images.DSC04049} />
      </ImageSet>
      <ImageSet>
        <Image src={images.P1600155} />
        <Image src={images.P1600170} />
      </ImageSet>
      <ImageSet>
        <Image src={images.P1600228} />
        <Image src={images.P1600283} />
      </ImageSet>
      <ImageSet>
        <Image src={images.P1600273} />
        <Image src={images.P1600314} />
      </ImageSet>
      <Image src={images.P1600280} />
      <Image src={images.P1600351} />
      <Image src={images.P1600498} type="full" />
      <ImageSet>
        <Image src={images.P1600381} />
        <Image src={images.P1600384} />
      </ImageSet>
      <ImageSet>
        <Image src={images.P1600455} />
        <Image src={images.P1600463} />
      </ImageSet>
      <Image src={images.P1600510} />
      <Image src={images.DSC04065} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "2019-italy-venice" } }) {
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
