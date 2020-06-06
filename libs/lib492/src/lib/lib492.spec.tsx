import React from 'react';
import { render } from '@testing-library/react';

import Lib492 from './lib492';

describe(' Lib492', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib492 />);
    expect(baseElement).toBeTruthy();
  });
});
