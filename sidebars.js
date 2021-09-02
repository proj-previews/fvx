/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
	//tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
	Docs:[
		{
			type: 'doc',
			label: '使用说明',
			id: 'usage'
		},
		{
			type:'category',
			label:'安装',
			items:[ 
				{
					type:'autogenerated',
					dirName:'usages/install'
				}
			]
		}
	],
	Dev:[
		{
			type: 'doc',
			label:'开发指南',
			id:'dev'
		}
	],
	Plugin:[
		{
			type: 'doc',
			label:'插件开发指南',
			id:'plugin'
		}
	]
};
