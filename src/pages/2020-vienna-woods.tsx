import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Image } from '@/components/Image';
import { ImageSet } from '@/components/ImageSet';
import { HomeLink } from '@/components/HomeLink';

const root = '../images/2020-vienna-woods';

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <HomeLink />
      <div className="mx-6 mt-10 lg:w-main lg:mx-auto">
        <h1 className="text-6xl my-7">Vienna Woods</h1>
        <p className="max-w-3xl">A chilly day exploring the hills of Kahlenberg in the Vienna Woods.</p>
        <hr className="border-gray-800 my-7" />
      </div>

      <Image caption="Sunrise over Vienna">
        <StaticImage src={`${root}/P1600838.JPG`} alt="Sunrise over Vienna" />
      </Image>

      <Image>
        <StaticImage src={`${root}/P1600912.JPG`} alt="Vienna woods" />
      </Image>

      <Image>
        <StaticImage src={`${root}/P1600941.JPG`} alt="Vienna woods" />
      </Image>

      <Image>
        <StaticImage src={`${root}/P1600969.JPG`} alt="Vienna woods" />
      </Image>

      <Image>
        <StaticImage src={`${root}/P1600998.JPG`} alt="Vienna woods" />
      </Image>

      <Image>
        <StaticImage src={`${root}/P1610010.JPG`} alt="Vienna woods" />
      </Image>

      <Image type="full">
        <StaticImage src={`${root}/P1610031.JPG`} alt="Vienna woods" />
      </Image>

      <ImageSet>
        <StaticImage src={`${root}/P1610050.JPG`} alt="Vienna woods" />
        <StaticImage src={`${root}/P1610034.JPG`} alt="Vienna woods" />
      </ImageSet>

      <ImageSet>
        <StaticImage src={`${root}/P1610049.JPG`} alt="Vienna woods" />
        <StaticImage src={`${root}/P1610054.JPG`} alt="Vienna woods" />
      </ImageSet>

      <Image>
        <StaticImage src={`${root}/P1610085.JPG`} alt="Vienna woods" />
      </Image>

      <Image>
        <StaticImage src={`${root}/P1610061.JPG`} alt="Vienna woods" />
      </Image>

      <Image>
        <StaticImage src={`${root}/P1610106.JPG`} alt="Vienna woods" />
      </Image>

      <Image>
        <StaticImage src={`${root}/P1610120.JPG`} alt="Vienna woods" />
      </Image>

      <ImageSet>
        <StaticImage src={`${root}/P1610135.JPG`} alt="Vienna woods" />
        <StaticImage src={`${root}/P1610137.JPG`} alt="Vienna woods" />
      </ImageSet>

      <Image>
        <StaticImage src={`${root}/P1610117.JPG`} alt="Vienna woods" />
      </Image>

      <ImageSet>
        <StaticImage src={`${root}/P1610140.JPG`} alt="Vienna woods" />
        <StaticImage src={`${root}/P1610151.JPG`} alt="Vienna woods" />
      </ImageSet>
      <Image>
        <StaticImage src={`${root}/P1610145.JPG`} alt="Vienna woods" />
      </Image>
      <Image>
        <StaticImage src={`${root}/P1610143.JPG`} alt="Vienna woods" />
      </Image>

      <ImageSet>
        <StaticImage src={`${root}/P1610156.JPG`} alt="Vienna woods" />
        <StaticImage src={`${root}/P1610165.JPG`} alt="Vienna woods" />
      </ImageSet>
    </main>
  );
}
