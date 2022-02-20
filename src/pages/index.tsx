import React, { ReactNode } from 'react';
import { Link } from 'gatsby';

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="mx-6 mt-10 lg:w-main lg:mx-auto">
        <h1 className="text-6xl my-7">Photolog</h1>
        <hr className="border-gray-800 my-7" />
      </div>
      <div className="mx-6 lg:w-main lg:mx-auto">
        <Year year={2020}>
          <AlbumLink name="Vienna Woods, Austria" url="2020-vienna-woods" />
          <AlbumLink name="Costal Camping, Scotland" url="2020-coastal-camping" />
          <AlbumLink name="Blackberry Woods, England" url="2020-blackberry-woods" />
          <AlbumLink name="Menorca, Spain" url="2020-blackberry-woods" />
        </Year>
        <Year year={2019}>
          <AlbumLink name="Italy" url="2019-italy" />
        </Year>
      </div>
    </main>
  );
}

interface AlbumLinkProps {
  name: string;
  url: string;
}

function AlbumLink({ name, url }: AlbumLinkProps) {
  return (
    <li className="my-5">
      <Link to={url}>{name}</Link>
    </li>
  );
}

interface YearProps {
  children: ReactNode;
  year: number;
}

function Year({ children, year }: YearProps) {
  return (
    <div className="my-10">
      <h1 className="font-bold text-2xl">{year}</h1>
      <ol>{children}</ol>
    </div>
  );
}
