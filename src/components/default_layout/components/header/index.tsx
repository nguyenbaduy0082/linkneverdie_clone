import React from 'react';
import { Header, Group, Title, Anchor } from '@mantine/core';
import Link from 'next/link';

import { linkHeader } from './constant';
import { Groups } from './styted';

export default function index() {
  const _linkHeader: JSX.Element[] = linkHeader.map((link, key) => (
    <Link key={key} href={link.src} passHref>
      <Anchor color="dark" underline={false}>
        {link.label}
      </Anchor>
    </Link>
  ));
  return (
    <Header height={60}>
      <Groups position="apart">
        <Title>Linkneverdie</Title>
        <Group>{_linkHeader}</Group>
      </Groups>
    </Header>
  );
}
