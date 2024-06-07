import { defineUserConfig } from 'vuepress';
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics';
import { docsearchPlugin } from '@vuepress/plugin-docsearch';
import { defaultTheme } from '@vuepress/theme-default';
import { navbar, sidebar } from './configs';
import { viteBundler } from '@vuepress/bundler-vite';

export default defineUserConfig({
    bundler: viteBundler(),
    // set site base to default value
    base: '/',

    // extra tags in `<head>`
    head: [
        [
            'link',
            {
                rel: 'stylesheet',
                href: 'https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css',
            },
        ],
        [
            'link',
            {
                rel: 'icon',
                href: 'https://img.icons8.com/fluency/128/000000/e-learning.png',
            },
        ],
        [
            'meta',
            {
                name: 'google-site-verification',
                content: 'YfryvcUpXvpvzX8xdK2JY2yad89if-kCk1Mo7ogs5Is',
            },
        ],
    ],

    locales: {
        '/': {
            lang: 'th-TH',
            title: 'IT KMITL Pre-Programming',
            description:
                'คอร์สเรียนเขียนโปรแกรมเบื้องต้นสำหรับนักเรียนคณะ IT KMITL',
        },
    },

    theme: defaultTheme({
        logo: 'https://img.icons8.com/fluency/128/000000/e-learning.png',
        repo: 'sagelga/preprogramming',
        repoLabel: 'รายงานปัญหา',
        docsRepo: 'sagelga/preprogramming',
        docsBranch: 'main',

        locales: {
            '/': {
                navbar: navbar.th,
                sidebar: sidebar.th,
                editLink: false,
                lastUpdatedText: 'แก้ไขล่าสุด',
                contributorsText: 'เขียนโดย',
            },
        },
    }),

    plugins: [
        docsearchPlugin({
            appId: '2GMWZETHAW',
            apiKey: 'e9aaa6205b2e27fdc366948b81235a73',
            indexName: 'prepro-sagelga',
        }),
        googleAnalyticsPlugin({
            id: 'G-5RQS97DPM9',
        }),
    ],
});
