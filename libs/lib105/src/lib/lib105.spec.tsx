import React from 'react';
import { render } from '@testing-library/react';

import Lib105 from './lib105';

describe(' Lib105', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib105 />);
    expect(baseElement).toBeTruthy();
  });
});
