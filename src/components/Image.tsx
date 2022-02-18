import React, { ReactNode } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export interface ImageProps {
  children: ReactNode;
  caption?: string;
  type?: 'full' | 'imageSet' | 'medium' | 'small';
}

export function Image({ children, caption, type = 'medium' }: ImageProps) {
  let className: string;
  switch (type) {
    case 'full': {
      className = 'mx-6 lg:px-2 lg:w-10/12 lg:m-auto';
      break;
    }
    case 'imageSet': {
      className = 'mx-6 lg:w-full lg:mx-0';
      break;
    }
    case 'medium': {
      className = 'mx-6 lg:w-main lg:mx-auto';
      break;
    }
    case 'small': {
      className = 'mx-6 md:max-w-screen-md lg:mx-auto';
      break;
    }
  }

  return (
    <figure className={className}>
      {children}
      {caption && <figcaption className="text-center text-gray-500 mx-3 mt-3">{caption}</figcaption>}
    </figure>
  );
}
