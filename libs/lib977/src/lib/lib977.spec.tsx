import React from 'react';
import { render } from '@testing-library/react';

import Lib977 from './lib977';

describe(' Lib977', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib977 />);
    expect(baseElement).toBeTruthy();
  });
});
