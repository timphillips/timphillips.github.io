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
        <HeaderTitle>Verona, Italy</HeaderTitle>
      </Header>

      <ImageSet>
        <Image src={images.P1590762} caption="Verona Arena" />
        <Image src={images.P1590784} />
      </ImageSet>
      <Image src={images.P1590850} />
      <ImageSet>
        <Image src={images.P1590891} caption="Castel San Pietro" />
        <Image src={images.P1600017} />
      </ImageSet>
      <Image src={images.P1590875} />
      <ImageSet>
        <Image src={images.P1590926} />
        <Image src={images.P1590923} />
      </ImageSet>
      <Image src={images.P1600002} caption="View from Castel San Pietro" />
      <Image src={images.P1600005} type="full" caption="View from Castel San Pietro" />
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "2019-italy-verona" } }) {
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
