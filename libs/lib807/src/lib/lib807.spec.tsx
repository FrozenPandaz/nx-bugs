import React from 'react';
import { render } from '@testing-library/react';

import Lib807 from './lib807';

describe(' Lib807', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib807 />);
    expect(baseElement).toBeTruthy();
  });
});
