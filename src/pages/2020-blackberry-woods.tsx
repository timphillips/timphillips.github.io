import React from 'react';
import { Image } from '@/components/Image';
import { ImageSet } from '@/components/ImageSet';
import { HomeLink } from '@/components/HomeLink';
import { buildImagesMap, PageQueryResult } from '@/utils/image';
import { graphql } from 'gatsby';
import { Header, HeaderSubtitle, HeaderTitle } from '@/components/Header';
import { Layout } from '@/components/Layout';

export default function BlackberryWoods({ data }: { data: PageQueryResult }) {
  const images = buildImagesMap(data);
  return (
    <Layout>
      <Header>
        <HeaderTitle>Blackberry Woods</HeaderTitle>
        <HeaderSubtitle>
          Alycia and I spent a few days at{' '}
          <a href="https://www.blackberrywood.com/" target="_blank">
            Blackberry Woods
          </a>{' '}
          in South Downs National Park.
        </HeaderSubtitle>
        <HeaderSubtitle>It rained most days, but luckily we booked a cosy cabin to sleep in.</HeaderSubtitle>
      </Header>

      <Image src={images.P1670033} />
      <Image src={images.P1670027} />
      <ImageSet>
        <Image src={images.P1670173} />
        <Image src={images.P1670160} />
      </ImageSet>
      <Image src={images.P1670239} />
      <Image src={images.P1670334} />
      <Image src={images.P1670345} caption="On the road to Hassocks" />
      <ImageSet>
        <Image src={images.P1670359} />
        <Image src={images.P1670391} />
      </ImageSet>
      <Image src={images.P1670403} />
      <Image src={images.P1670412} />
      <ImageSet>
        <Image src={images.P1670429} />
        <Image src={images.P1670458} />
      </ImageSet>
      <Image src={images.P1670472} />
      <Image src={images.P1670466} />
      <Image src={images.P1670509} type="small" />
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "2020-blackberry-woods" } }) {
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
