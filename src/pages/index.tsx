import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Title from '@/components/Title';

export default function Home() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <Title>Hello TypeScript!</Title>
      <p>A TypeScript starter for Gatsby. Great for advanced users.</p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <StaticImage
          src="../images/IMG_7688.jpeg"
          alt="Ibiza"
          placeholder="blurred"
          quality={35}
          width={800}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <StaticImage
          src="../images/IMG_7696.jpeg"
          alt="Ibiza"
          placeholder="blurred"
          quality={35}
          width={800}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <StaticImage
          src="../images/IMG_7809.jpeg"
          alt="Ibiza"
          placeholder="blurred"
          quality={35}
          width={800}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <StaticImage
          src="../images/IMG_7898.jpeg"
          alt="Ibiza"
          placeholder="blurred"
          quality={35}
          width={800}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <StaticImage
          src="../images/IMG_8551.jpeg"
          alt="Ibiza"
          placeholder="blurred"
          quality={35}
          width={800}
        />
      </div>
    </main>
  );
}
