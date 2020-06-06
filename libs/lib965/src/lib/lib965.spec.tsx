import React from 'react';
import { render } from '@testing-library/react';

import Lib965 from './lib965';

describe(' Lib965', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib965 />);
    expect(baseElement).toBeTruthy();
  });
});
