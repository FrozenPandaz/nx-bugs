import React from 'react';
import { render } from '@testing-library/react';

import Lib806 from './lib806';

describe(' Lib806', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib806 />);
    expect(baseElement).toBeTruthy();
  });
});
