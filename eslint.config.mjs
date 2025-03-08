// import { dirname } from 'path';
// import { fileURLToPath } from 'url';
// import { FlatCompat } from '@eslint/eslintrc';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//     baseDirectory: __dirname,
// });

// const eslintConfig = [...compat.extends('next/core-web-vitals', 'next/typescript')];

// export default eslintConfig;
import { defineConfig } from 'eslint-define-config';

export default defineConfig({
    extends: [
        'next/core-web-vitals', // You can still extend Next.js rules if you want
    ],
    rules: {
        // Disable all rules
        'no-unused-vars': 'off',
        'react/display-name': 'off',
        'react-hooks/exhaustive-deps': 'off',
        '@next/next/no-img-element': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        // Add any other rules you want to turn off
    },
});
