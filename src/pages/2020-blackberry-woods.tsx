import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Image } from '@/components/Image';
import { ImageSet } from '@/components/ImageSet';
import { HomeLink } from '@/components/HomeLink';
import { buildImagesMap, PageQueryResult } from '@/utils/image';
import { graphql } from 'gatsby';

export default function BlackberryWoods({ data }: { data: PageQueryResult }) {
  const images = buildImagesMap(data);
  return (
    <main className="flex flex-col gap-10">
      <HomeLink />
      <div className="mx-6 mt-10 lg:w-main lg:mx-auto">
        <h1 className="text-6xl my-7">Blackberry Woods</h1>
        <p className="max-w-3xl">
          Alycia and I spent a few days at{' '}
          <a href="https://www.blackberrywood.com/" target="_blank">
            Blackberry Woods
          </a>{' '}
          in South Downs National Park.
        </p>
        <p className="max-w-3xl">It rained most days, but luckily we booked a cosy cabin to sleep in.</p>
        <hr className="border-gray-800 my-7" />
      </div>

      <Image>
        <GatsbyImage image={getImage(images.P1670033)} alt="Blackberry Woods" />
      </Image>

      <Image>
        <GatsbyImage image={getImage(images.P1670027)} alt="Blackberry Woods" />
      </Image>

      <ImageSet>
        <GatsbyImage image={getImage(images.P1670173)} alt="Blackberry Woods" />
        <GatsbyImage image={getImage(images.P1670160)} alt="Blackberry Woods" />
      </ImageSet>

      <Image>
        <GatsbyImage image={getImage(images.P1670239)} alt="Blackberry Woods" />
      </Image>

      <Image>
        <GatsbyImage image={getImage(images.P1670334)} alt="Blackberry Woods" />
      </Image>

      <Image>
        <GatsbyImage image={getImage(images.P1670345)} alt="Blackberry Woods" />
      </Image>

      <ImageSet>
        <GatsbyImage image={getImage(images.P1670359)} alt="Blackberry Woods" />
        <GatsbyImage image={getImage(images.P1670391)} alt="Blackberry Woods" />
      </ImageSet>

      <Image>
        <GatsbyImage image={getImage(images.P1670403)} alt="Blackberry Woods" />
      </Image>

      <Image>
        <GatsbyImage image={getImage(images.P1670412)} alt="Blackberry Woods" />
      </Image>

      <ImageSet>
        <GatsbyImage image={getImage(images.P1670429)} alt="Blackberry Woods" />
        <GatsbyImage image={getImage(images.P1670458)} alt="Blackberry Woods" />
      </ImageSet>

      <Image>
        <GatsbyImage image={getImage(images.P1670472)} alt="Blackberry Woods" />
      </Image>

      <Image>
        <GatsbyImage image={getImage(images.P1670466)} alt="Blackberry Woods" />
      </Image>

      <Image type="small">
        <GatsbyImage image={getImage(images.P1670509)} alt="Blackberry Woods" />
      </Image>
    </main>
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
