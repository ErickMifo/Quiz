import React from 'react';
import NextLink from 'next/link';

/* eslint react/prop-types: 0 */
export default function Link({ children, href, ...props }) {
  return (
    <NextLink href={href} passHref>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <a {...props}>
        {children}
      </a>
    </NextLink>
  );
}
