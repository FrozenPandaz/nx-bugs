import React from 'react';
import { render } from '@testing-library/react';

import Lib805 from './lib805';

describe(' Lib805', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib805 />);
    expect(baseElement).toBeTruthy();
  });
});
