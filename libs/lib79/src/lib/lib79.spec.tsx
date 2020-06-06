import React from 'react';
import { render } from '@testing-library/react';

import Lib79 from './lib79';

describe(' Lib79', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib79 />);
    expect(baseElement).toBeTruthy();
  });
});
