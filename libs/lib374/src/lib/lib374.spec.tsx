import React from 'react';
import { render } from '@testing-library/react';

import Lib374 from './lib374';

describe(' Lib374', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib374 />);
    expect(baseElement).toBeTruthy();
  });
});
