import React from 'react';
import { render } from '@testing-library/react';

import Lib457 from './lib457';

describe(' Lib457', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib457 />);
    expect(baseElement).toBeTruthy();
  });
});
