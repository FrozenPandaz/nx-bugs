import React from 'react';
import { render } from '@testing-library/react';

import Lib569 from './lib569';

describe(' Lib569', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib569 />);
    expect(baseElement).toBeTruthy();
  });
});
