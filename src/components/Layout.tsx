import React, { PropsWithChildren } from 'react';
import { HomeLink } from './HomeLink';

export function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <main className="flex flex-col gap-10 mb-10">
      <HomeLink />
      {children}
    </main>
  );
}
