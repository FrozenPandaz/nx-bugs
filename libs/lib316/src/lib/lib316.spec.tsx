import React from 'react';
import { render } from '@testing-library/react';

import Lib316 from './lib316';

describe(' Lib316', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib316 />);
    expect(baseElement).toBeTruthy();
  });
});
