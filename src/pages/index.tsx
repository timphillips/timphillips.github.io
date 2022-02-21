import React, { ReactNode } from 'react';
import { Link } from 'gatsby';
import { Layout } from '@/components/Layout';
import { Header, HeaderTitle } from '@/components/Header';

export default function Home() {
  return (
    <Layout>
      <Header>
        <HeaderTitle>Photolog</HeaderTitle>
      </Header>

      <div className="mx-6 lg:w-main lg:mx-auto">
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
    </Layout>
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
