import React from 'react';
import { render } from '@testing-library/react';

import Lib129 from './lib129';

describe(' Lib129', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib129 />);
    expect(baseElement).toBeTruthy();
  });
});
