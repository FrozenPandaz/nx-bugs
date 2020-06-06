import React from 'react';
import { render } from '@testing-library/react';

import Lib971 from './lib971';

describe(' Lib971', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib971 />);
    expect(baseElement).toBeTruthy();
  });
});
