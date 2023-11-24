'use client';
import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { configStore } from './configStore';

export const ReduxProvider = ({
  children,
}: PropsWithChildren): React.JSX.Element => {
  return <Provider store={configStore()}>{children}</Provider>;
};
