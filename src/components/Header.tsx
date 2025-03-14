import React, { PropsWithChildren } from 'react';

export function Header({ children }: PropsWithChildren<{}>) {
  return (
    <div className="mx-6 lg:w-main lg:mx-auto">
      {children}
      <hr className="border-gray-400 my-7" />
    </div>
  );
}

export function HeaderTitle({ children }: PropsWithChildren<{}>) {
  return <h1 className="text-4xl mb-5">{children}</h1>;
}

export function HeaderSubtitle({ children }: PropsWithChildren<{}>) {
  return <p className="max-w-3xl">{children}</p>;
}
