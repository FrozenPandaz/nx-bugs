import React from 'react';
import { render } from '@testing-library/react';

import Lib752 from './lib752';

describe(' Lib752', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib752 />);
    expect(baseElement).toBeTruthy();
  });
});
