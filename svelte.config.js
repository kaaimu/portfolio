import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html' // optional, untuk SPA
    }),
	paths: {
		base: process.env.NODE_ENV === 'production' ? '/portfolio' : ''
	  }
  }
}
