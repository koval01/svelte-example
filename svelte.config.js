import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

const isProduction = process.env.NODE_ENV === 'production';

const compilerOptions = {};
isProduction ? compilerOptions.cssHash = ({ hash, css }) => `your-app-name-${hash(css)}` : {};

export default {
    compilerOptions,
    preprocess: vitePreprocess(),
}
