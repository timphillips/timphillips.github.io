import { ImageDataLike } from 'gatsby-plugin-image';

export interface PageQueryResult {
  allFile: {
    edges: {
      node: Image;
    }[];
  };
}

export interface Image {
  name: string;
  childImageSharp: ImageDataLike;
}

export function buildImagesMap(data: PageQueryResult): { [name: string]: ImageDataLike } {
  return data.allFile.edges.reduce((map, { node }) => {
    map[node.name] = node.childImageSharp;
    return map;
  }, {});
}
