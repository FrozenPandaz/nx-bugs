import { nxComponentTestingPreset } from '@nx/react/plugins/component-testing';
import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'mhfo9t',
  component: nxComponentTestingPreset(__filename),
});
