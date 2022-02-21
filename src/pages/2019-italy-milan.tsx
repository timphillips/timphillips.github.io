import React from 'react';
import { graphql } from 'gatsby';
import { Image } from '@/components/Image';
import { ImageSet } from '@/components/ImageSet';
import { buildImagesMap, PageQueryResult } from '@/utils/image';
import { Header, HeaderTitle } from '@/components/Header';
import { Layout } from '@/components/Layout';

export default function ViennaWoods({ data }: { data: PageQueryResult }) {
  const images = buildImagesMap(data);
  return (
    <Layout>
      <Header>
        <HeaderTitle>Milan, Italy</HeaderTitle>
      </Header>

      <ImageSet>
        <Image src={images.DSC03799} />
        <Image src={images.DSC03806} />
      </ImageSet>
      <Image src={images.P1590600} />
      <Image src={images.DSC03831} />
      <ImageSet>
        <Image src={images.DSC03872} caption="Naviglio Pavese" />
        <Image src={images.DSC03833} />
      </ImageSet>
      <Image src={images.DSC03868} type="full" caption="Tamino @ Santeria Social Club" />
      <ImageSet>
        <Image src={images.P1590612} />
        <Image src={images.DSC03926} />
      </ImageSet>
      <ImageSet>
        <Image src={images.DSC03884} caption="Santa Maria delle Grazie" />
        <Image src={images.DSC03885} caption="Santa Maria delle Grazie" />
      </ImageSet>
      <ImageSet>
        <Image src={images.DSC03921} caption="Christmas Markets" />
        <Image src={images.P1590652} caption="Galleria Vittorio Emanuele II" />
      </ImageSet>
      <Image src={images.P1590662} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "2019-italy-milan" } }) {
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
