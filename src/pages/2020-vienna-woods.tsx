import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';
import { Image } from '@/components/Image';
import { ImageSet } from '@/components/ImageSet';
import { HomeLink } from '@/components/HomeLink';
import { buildImagesMap, PageQueryResult } from '@/utils/image';

export default function ViennaWoods({ data }: { data: PageQueryResult }) {
  const images = buildImagesMap(data);
  return (
    <main className="flex flex-col gap-10">
      <HomeLink />
      <div className="mx-6 mt-10 lg:w-main lg:mx-auto">
        <h1 className="text-6xl my-7">Vienna Woods</h1>
        <p className="max-w-3xl">A chilly day exploring the hills of Kahlenberg in the Vienna Woods.</p>
        <hr className="border-gray-800 my-7" />
      </div>
      <Image caption="Sunrise over Vienna">
        <GatsbyImage image={getImage(images.P1600838)} alt="Vienna woods" />
      </Image>

      <Image>
        <GatsbyImage image={getImage(images.P1600912)} alt="Vienna woods" />
      </Image>

      <Image>
        <GatsbyImage image={getImage(images.P1600941)} alt="Vienna woods" />
      </Image>

      <Image>
        <GatsbyImage image={getImage(images.P1600969)} alt="Vienna woods" />
      </Image>

      <Image>
        <GatsbyImage image={getImage(images.P1600998)} alt="Vienna woods" />
      </Image>

      <Image>
        <GatsbyImage image={getImage(images.P1610010)} alt="Vienna woods" />
      </Image>

      <Image type="full">
        <GatsbyImage image={getImage(images.P1610031)} alt="Vienna woods" />
      </Image>

      <ImageSet>
        <GatsbyImage image={getImage(images.P1610050)} alt="Vienna woods" />
        <GatsbyImage image={getImage(images.P1610034)} alt="Vienna woods" />
      </ImageSet>

      <ImageSet>
        <GatsbyImage image={getImage(images.P1610049)} alt="Vienna woods" />
        <GatsbyImage image={getImage(images.P1610054)} alt="Vienna woods" />
      </ImageSet>

      <Image>
        <GatsbyImage image={getImage(images.P1610085)} alt="Vienna woods" />
      </Image>

      <Image>
        <GatsbyImage image={getImage(images.P1610061)} alt="Vienna woods" />
      </Image>

      <Image>
        <GatsbyImage image={getImage(images.P1610106)} alt="Vienna woods" />
      </Image>

      <Image>
        <GatsbyImage image={getImage(images.P1610120)} alt="Vienna woods" />
      </Image>

      <ImageSet>
        <GatsbyImage image={getImage(images.P1610135)} alt="Vienna woods" />
        <GatsbyImage image={getImage(images.P1610137)} alt="Vienna woods" />
      </ImageSet>

      <Image>
        <GatsbyImage image={getImage(images.P1610117)} alt="Vienna woods" />
      </Image>

      <ImageSet>
        <GatsbyImage image={getImage(images.P1610140)} alt="Vienna woods" />
        <GatsbyImage image={getImage(images.P1610151)} alt="Vienna woods" />
      </ImageSet>
      <Image>
        <GatsbyImage image={getImage(images.P1610145)} alt="Vienna woods" />
      </Image>
      <Image>
        <GatsbyImage image={getImage(images.P1610143)} alt="Vienna woods" />
      </Image>

      <ImageSet>
        <GatsbyImage image={getImage(images.P1610156)} alt="Vienna woods" />
        <GatsbyImage image={getImage(images.P1610165)} alt="Vienna woods" />
      </ImageSet>
    </main>
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
