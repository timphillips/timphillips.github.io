import { Link } from 'gatsby';
import React from 'react';

export function HomeLink() {
  return (
    <nav className="fixed ml-10 top-20 bg-white p-3">
      <h3 className="font-bold">Tim Phillips</h3>
      <Link className="block" to="/">
        About
      </Link>
      <Link className="block" to="/">
        Photos
      </Link>
    </nav>
  );
}
