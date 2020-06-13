import React from 'react';
import { render } from '@testing-library/react';

import Lib130 from './lib130';

describe(' Lib130', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib130 />);
    expect(baseElement).toBeTruthy();
  });
});
