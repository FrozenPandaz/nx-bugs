import React from 'react';
import { render } from '@testing-library/react';

import Lib376 from './lib376';

describe(' Lib376', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib376 />);
    expect(baseElement).toBeTruthy();
  });
});
