// vite.config.js

import react from '@vitejs/plugin-react';
import path from 'path';

export default ({ command, mode }) => {

  const baseConfig = {
    resolve: {
      alias: [
        {
          find: '@',
          replacement: path.resolve(__dirname, './src'),
        }
      ],
    },
    plugins: [react()]
  }

  if (command === 'build') {
    return {
      ...baseConfig,
      root: './src',
      define: {
        'process.env.NODE_ENV': JSON.stringify(mode),
      },
      optimizeDeps: {
        include: ['@vitejs/plugin-react'],
      },
      build: {
        outDir: '../build',
        cssCodeSplit: false,
        lib: {
          entry: {
            'appProduto01.bundle': './Produtos/Produto01/entrypoint.tsx',
            'appProduto02.bundle': './Produtos/Produto02/entrypoint.tsx',
            'appProduto03.bundle': './Produtos/Produto03/entrypoint.tsx'
          },
          name: 'ProdutoApp',
          formats: ['es'],
        },
      },
    };
  } else {
    return {
      ...baseConfig,
      server: {
        port: 3000,
      },
    }
  }
};