import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Title from '@/components/Title';

export default function Home() {
  return (
    <main>
      <Title>Hello TypeScript!</Title>
      <p>A TypeScript starter for Gatsby. Great for advanced users.</p>
      <StaticImage
        src="../images/IMG_8551.jpeg"
        alt="Ibiza"
        placeholder="blurred"
        quality={35}
      />
    </main>
  );
}
