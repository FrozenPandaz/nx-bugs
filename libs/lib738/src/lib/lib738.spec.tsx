import React from 'react';
import { render } from '@testing-library/react';

import Lib738 from './lib738';

describe(' Lib738', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib738 />);
    expect(baseElement).toBeTruthy();
  });
});
