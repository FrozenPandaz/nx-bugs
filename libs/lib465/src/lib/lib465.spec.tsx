import React from 'react';
import { render } from '@testing-library/react';

import Lib465 from './lib465';

describe(' Lib465', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib465 />);
    expect(baseElement).toBeTruthy();
  });
});
