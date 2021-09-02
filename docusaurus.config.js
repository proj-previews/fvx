const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Fvx',
  tagline: '⭐️  An automatic, convenience and flexible scaffold Tooling for React Development. ⭐️',
  url: 'https://github.com/researchlab/fvx',
	baseUrl: '/fvx/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'proj-previews', // Usually your GitHub org/user name.
  projectName: 'fvx', // Usually your repo name.
  themeConfig: {
		colorMode:{
			disableSwitch:true,
		},
    navbar: {
      title: 'Fvx',
      logo: {
        alt: 'Fvx Logo',
        src: 'img/favicon.ico',
      },
      items: [
        {
          type: 'doc',
          docId: 'usage',
          position: 'right',
          label: '文档',
        },
				{
					type: 'doc',
					docId: 'dev',
					position: 'right',
					label: '开发指南'
				},
				{
					type: 'doc',
					docId: 'plugin',
					position: 'right',
					label: '插件开发指南'
				},
				{
					to: 'blog',
					position: 'right',
					label: '更新记录'
				},
        {
					href: 'https://github.com/researchlab/fvx',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Get Started',
              to: '/docs/usage',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'researchlab',
              href: 'https://researchlab.github.io/'
            },
						{
							label: 'GitHub Issues',
							href: 'https://github.com/researchlab/fvx/issues'
						}
         ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/researchlab/fvx',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Fvx.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/proj-previews/fvx/edit/main/',
        },
				//blog: {
        //  showReadingTime: true,
        //  // Please change this to your repo.
        //  editUrl:
				//	'https://github.com/proj-previews/fvx/edit/main/',
        //},
				blog: {
          path: 'blog',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
