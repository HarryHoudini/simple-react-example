import React from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton = () => (
  <ContentLoader
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    height={50}
    speed={2}
    viewBox="0 0 320 50"
    width={320}
  >
    <circle cx="25" cy="25" r="25" />
    <rect height="25" rx="6" ry="6" width="137" x="64" y="0" />
    <rect height="15" rx="6" ry="6" width="183" x="64" y="32" />
    <rect height="26" rx="6" ry="6" width="26" x="290" y="12" />
  </ContentLoader>
);
