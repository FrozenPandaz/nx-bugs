import React from 'react';
import { render } from '@testing-library/react';

import Lib221 from './lib221';

describe(' Lib221', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib221 />);
    expect(baseElement).toBeTruthy();
  });
});
