import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  locales:{
    '/': {
      lang: 'zh-CN',
      title: '双倍爱意',
      description: '一个双胞胎家庭的幸福生活'
    },
    '/en/':{
      lang: 'en-US',
      title: 'More Love',
      description: 'A happy life for a twin family. '
    }
  },
  head: [
    //["script", { "src": "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1705241395930665", "async": true, "crossorigin": "anonymous" }],
    ["script", { "src": "https://www.googletagmanager.com/gtag/js?id=G-Z578CQMF4N", "async": true, "crossorigin": "anonymous" }],
    ["script", { },`window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'G-Z578CQMF4N');`],
  ],
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "席维海",
    authorAvatar: "/head.png",
    // docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
    // docsBranch: "main",
    // docsDir: "example",
    lastUpdatedText: "",
    navbar: [
      { text: "首页", icon: 'Home', link: "/" },
      { text: "博客",icon: 'Blog', link: "/posts" },
	  {
		text: '文档',
		icon: 'Document',
		children: [
		  {
			text: '语言语法',
			children: [
			  { text: 'Markdown', link: '/docs/skill/markdown' },
			],
		  },
		  {
			text: '常用命令',
			children: [
			  { text: 'git', link: '/docs/skill/git' },
			],
		  },
		],
	  },
    ],
    // bulletin: {
    //   body: [
    //     {
    //       type: "text",
    //       content: `🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "title",
    //       content: "QQ 群",
    //     },
    //     {
    //       type: "text",
    //       content: `
    //       <ul>
    //         <li>QQ群1：1037296104</li>
    //         <li>QQ群2：1061561395</li>
    //         <li>QQ群3：962687802</li>
    //       </ul>`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "title",
    //       content: "GitHub",
    //     },
    //     {
    //       type: "text",
    //       content: `
    //       <ul>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
    //       </ul>`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "buttongroup",
    //       children: [
    //         {
    //           text: "打赏",
    //           link: "/docs/others/donate.html",
    //         },
    //       ],
    //     },
    //   ],
    // },
    // commentConfig: {
    //   type: 'valie',
    //   // options 与 1.x 的 valineConfig 配置一致
    //   options: {
    //     // appId: 'xxx',
    //     // appKey: 'xxx',
    //     // placeholder: '填写邮箱可以收到回复提醒哦！',
    //     // verify: true, // 验证码服务
    //     // notify: true,
    //     // recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   },
    // },
  }),
  // debug: true,
});
