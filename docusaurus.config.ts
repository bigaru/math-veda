import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

const config: Config = {
	title: 'Math Veda',
	tagline: 'notes from mathematic lectures',
	favicon: 'img/favicon.ico',

	// Set the production url of your site here
	url: 'https://bigaru.github.io',
	baseUrl: '/math-veda/',
	trailingSlash: false,
	organizationName: 'bigaru',
	projectName: 'math-veda',

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	presets: [
		[
			'classic',
			{
				docs: {
					sidebarPath: './sidebars.ts',
					editUrl: 'https://github.com/bigaru/math-veda/',
				},
				blog: false,
				theme: {
					customCss: './src/css/custom.css',
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		navbar: {
			title: 'Math Veda',
			logo: {
				alt: 'logo',
				src: 'img/logo.svg',
			},
			items: [
				{
					type: 'docSidebar',
					sidebarId: 'mainSidebar',
					position: 'left',
					label: 'Notes',
				},
				{
					href: 'https://github.com/bigaru/math-veda',
					label: 'GitHub',
					position: 'right',
				},
			],
		},
		footer: {
			style: 'dark',
			links: [],
			copyright: `Built with Docusaurus.`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
}

export default config
