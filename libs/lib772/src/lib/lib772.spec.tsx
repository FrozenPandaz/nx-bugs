import React from 'react';
import { render } from '@testing-library/react';

import Lib772 from './lib772';

describe(' Lib772', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib772 />);
    expect(baseElement).toBeTruthy();
  });
});
