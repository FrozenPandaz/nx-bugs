import React from 'react';
import { render } from '@testing-library/react';

import Lib473 from './lib473';

describe(' Lib473', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib473 />);
    expect(baseElement).toBeTruthy();
  });
});
