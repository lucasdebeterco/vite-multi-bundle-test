// vite.config.js

import react from '@vitejs/plugin-react';

export default ({ command, mode }) => {
  const productModel = process.argv[4];

  if (command === 'build' && productModel) {
    return {
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
            [`appProduto${productModel}.bundle`]: `./Produtos/Produto${productModel}/entrypoint.tsx`
          },
          name: 'ProdutoApp',
          formats: ['iife'],
        },
      },
    }
  } else {
    return {
      plugins: [react()],
    }
  }
};