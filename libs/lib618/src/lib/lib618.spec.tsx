import React from 'react';
import { render } from '@testing-library/react';

import Lib618 from './lib618';

describe(' Lib618', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib618 />);
    expect(baseElement).toBeTruthy();
  });
});
