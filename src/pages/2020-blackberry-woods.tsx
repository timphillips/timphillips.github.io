import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Image } from '@/components/Image';
import { ImageSet } from '@/components/ImageSet';

const root = '../images/2020-blackberry-woods';

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
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
        <StaticImage src={`${root}/P1670033.JPG`} alt="Blackberry Woods" />
      </Image>

      <Image>
        <StaticImage src={`${root}/P1670027.JPG`} alt="Blackberry Woods" />
      </Image>

      <ImageSet>
        <StaticImage src={`${root}/P1670173.JPG`} alt="Blackberry Woods" />
        <StaticImage src={`${root}/P1670160.JPG`} alt="Blackberry Woods" />
      </ImageSet>

      <Image>
        <StaticImage src={`${root}/P1670239.JPG`} alt="Blackberry Woods" />
      </Image>

      <Image>
        <StaticImage src={`${root}/P1670334.JPG`} alt="Blackberry Woods" />
      </Image>

      <Image>
        <StaticImage src={`${root}/P1670345.JPG`} alt="Blackberry Woods" />
      </Image>

      <ImageSet>
        <StaticImage src={`${root}/P1670359.JPG`} alt="Blackberry Woods" />
        <StaticImage src={`${root}/P1670391.JPG`} alt="Blackberry Woods" />
      </ImageSet>

      <Image>
        <StaticImage src={`${root}/P1670403.JPG`} alt="Blackberry Woods" />
      </Image>

      <Image>
        <StaticImage src={`${root}/P1670412.JPG`} alt="Blackberry Woods" />
      </Image>

      <ImageSet>
        <StaticImage src={`${root}/P1670429.JPG`} alt="Blackberry Woods" />
        <StaticImage src={`${root}/P1670458.JPG`} alt="Blackberry Woods" />
      </ImageSet>

      <Image>
        <StaticImage src={`${root}/P1670472.JPG`} alt="Blackberry Woods" />
      </Image>

      <Image>
        <StaticImage src={`${root}/P1670466.JPG`} alt="Blackberry Woods" />
      </Image>

      <Image type="small">
        <StaticImage src={`${root}/P1670509.JPG`} alt="Blackberry Woods" />
      </Image>
    </main>
  );
}
