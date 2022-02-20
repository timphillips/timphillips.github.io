import React, { ReactElement, ReactNode } from 'react';
import { Image } from '@/components/Image';

export interface ImageSetProps {
  children: ReactElement[];
}

export function ImageSet({ children }: ImageSetProps) {
  if (children.length !== 2) {
    throw new Error('Expected two images in an image set.');
  }
  return (
    <div className="grid gap-10 grid-cols-1 lg:grid-cols-2 lg:w-main lg:m-auto">
      {React.cloneElement(children[0], { type: 'imageSet' })}
      {React.cloneElement(children[1], { type: 'imageSet' })}
    </div>
  );
}
