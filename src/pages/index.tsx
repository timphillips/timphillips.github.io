import React, { ReactNode } from 'react';
import { Link } from 'gatsby';

export default function Home() {
  return (
    <main className="flex flex-col gap-10 my-16">
      <div className="mx-6 lg:w-main lg:mx-auto">
        <h1 className="text-4xl mb-5">Photolog</h1>
        <hr className="border-gray-400 my-4" />
      </div>

      <div className="flex flex-col gap-10 mx-6 lg:w-main lg:mx-auto">
        <Year year={2022}>
          <AlbumLink name="Formentera, Spain" url="2022-formentera" />
        </Year>
        <Year year={2021}>
          <AlbumLink name="Brighton, England (1)" url="2021-brighton-1" />
          <AlbumLink name="Brighton, England (2)" url="2021-brighton-2" />
          <AlbumLink name="Conwy, Wales" url="2021-wales-conwy" />
        </Year>
        <Year year={2020}>
          <AlbumLink name="Vienna Woods, Austria" url="2020-vienna-woods" />
          {/* <AlbumLink name="Costal Camping, Scotland" url="2020-coastal-camping" /> */}
          <AlbumLink name="Blackberry Woods, England" url="2020-blackberry-woods" />
          {/* <AlbumLink name="Menorca, Spain" url="2020-blackberry-woods" /> */}
        </Year>
        <Year year={2019}>
          {/* <AlbumLink name="Spain" url="2019-italy" /> */}
          <AlbumLink name="Milan, Italy" url="2019-italy-milan" />
          <AlbumLink name="Verona, Italy" url="2019-italy-verona" />
          <AlbumLink name="Venice, Italy" url="2019-italy-venice" />
        </Year>
        {/* <Year year={2018}>
          <AlbumLink name="Iceland" url="2019-italy" />
        </Year>
        <Year year={2017}>
          <AlbumLink name="Oregon" url="2019-italy" />
          <AlbumLink name="Assiniboine Hike, Canada" url="2019-italy" />
        </Year>
        <Year year={2016}>
          <AlbumLink name="Italy" url="2019-italy" />
        </Year>
        <Year year={2015}>
          <AlbumLink name="Italy" url="2019-italy" />
        </Year> */}
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
    <div>
      <h1 className="text-2xl">{year}</h1>
      <ol>{children}</ol>
    </div>
  );
}
