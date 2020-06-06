import React from 'react';
import { render } from '@testing-library/react';

import Lib720 from './lib720';

describe(' Lib720', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib720 />);
    expect(baseElement).toBeTruthy();
  });
});
