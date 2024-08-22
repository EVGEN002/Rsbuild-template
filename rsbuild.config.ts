import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';

export default defineConfig({
  plugins: [pluginReact(), pluginSass()],
  dev: {
    assetPrefix: true
  },
  tools: {
    rspack: {
      output: {
        uniqueName: 'app_provider'
      },
      plugins: [
        new ModuleFederationPlugin({
          name: 'app_provider',
          exposes: {
            './App': './src/app/App.tsx'
          },
          shared: ['react', 'react-dom']
        })
      ]
    }
  }
});
