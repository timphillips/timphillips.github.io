import { Link } from 'gatsby';
import React, { PropsWithChildren } from 'react';

export function Layout({ children }: PropsWithChildren<{}>) {
  const backLink = (
    <Link className="mx-6 my-4 lg:w-main lg:mx-auto hover:opacity-80 hover:transition-opacity" to="/">
      ⯇ Back
    </Link>
  );

  return (
    <main className="flex flex-col gap-10 mb-10">
      {backLink}
      {children}
      {backLink}
    </main>
  );
}
