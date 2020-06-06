import React from 'react';
import { render } from '@testing-library/react';

import Lib584 from './lib584';

describe(' Lib584', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib584 />);
    expect(baseElement).toBeTruthy();
  });
});
