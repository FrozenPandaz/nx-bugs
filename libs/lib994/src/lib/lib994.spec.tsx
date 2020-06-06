import React from 'react';
import { render } from '@testing-library/react';

import Lib994 from './lib994';

describe(' Lib994', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib994 />);
    expect(baseElement).toBeTruthy();
  });
});
