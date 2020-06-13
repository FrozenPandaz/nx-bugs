import React from 'react';
import { render } from '@testing-library/react';

import Lib719 from './lib719';

describe(' Lib719', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib719 />);
    expect(baseElement).toBeTruthy();
  });
});
