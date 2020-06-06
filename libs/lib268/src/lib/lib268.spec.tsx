import React from 'react';
import { render } from '@testing-library/react';

import Lib268 from './lib268';

describe(' Lib268', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib268 />);
    expect(baseElement).toBeTruthy();
  });
});
