import React from 'react';
import { AppShell } from '@mantine/core';

import Header from './components/header';

interface ILayout {
  children: React.ReactNode;
}

export default function index({ children }: ILayout) {
  return <AppShell header={<Header />}>{children}</AppShell>;
}
