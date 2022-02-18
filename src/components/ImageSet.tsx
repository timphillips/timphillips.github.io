import React, { ReactNode } from 'react';
import { Image } from '@/components/Image';

export interface ImageSetProps {
  children: ReactNode[];
}

export function ImageSet({ children }: ImageSetProps) {
  if (children.length !== 2) {
    throw new Error('Expected two images in an image set.');
  }
  return (
    <div className="grid gap-10 grid-cols-1 lg:grid-cols-2 lg:w-main lg:m-auto">
      <Image type="imageSet">{children[0]}</Image>
      <Image type="imageSet">{children[1]}</Image>
    </div>
  );
}
