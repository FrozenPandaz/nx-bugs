import React from 'react';
import { render } from '@testing-library/react';

import Lib701 from './lib701';

describe(' Lib701', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib701 />);
    expect(baseElement).toBeTruthy();
  });
});
