import React from 'react';
import { render } from '@testing-library/react';

import Lib960 from './lib960';

describe(' Lib960', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib960 />);
    expect(baseElement).toBeTruthy();
  });
});
