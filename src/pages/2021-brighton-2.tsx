import React from 'react';
import { graphql } from 'gatsby';
import { Image } from '@/components/Image';
import { Header, HeaderSubtitle, HeaderTitle } from '@/components/Header';
import { Layout } from '@/components/Layout';
import { buildImagesMap, PageQueryResult } from '@/utils/image';

export default function Brighton2({ data }: { data: PageQueryResult }) {
  const images = buildImagesMap(data);
  console.log(images);
  return (
    <Layout>
      <Header>
        <HeaderTitle>Brighton</HeaderTitle>
        <HeaderSubtitle>We spent a week on Brighton beach.</HeaderSubtitle>
      </Header>

      <Image src={images['BFC94CB0-9012-48F7-ADD6-B75D94550E05-2']} type="small" />
      <Image src={images.P1690146} />
      <Image src={images['00F29372-2F86-4DF6-A7CF-B220D8566414']} />
      <Image src={images.P1690106} />
      <Image src={images.P1690068} />
      <Image src={images.P1690096} />
      <Image src={images['B23EC4DA-18B7-4160-97C9-A31037BDEF48']} type="full" />

      {/* <Image src={images['1F6955F2-AE98-4438-8E6A-05FFB887DC66']} />
      <Image src={images['9C2734C2-1642-4576-973F-B8FF0E61650F']} /> */}
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "2021-brighton-2" } }) {
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
