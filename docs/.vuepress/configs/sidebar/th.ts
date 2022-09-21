import type { SidebarConfig } from "@vuepress/theme-default";

export const th: SidebarConfig = {
  "/python/course/": [
    {
      text: "Python เบื้องต้น",
      link: "/python/course/",
      children: [
        "/python/course/algorithm/",
        "/python/course/introduction/",
        "/python/course/variable/",
        "/python/course/data-type/",
        "/python/course/functions/",
        "/python/course/code-standard/",
        "/python/course/string/",
        "/python/course/decision/",
        "/python/course/loop/",
        "/python/course/array/",
        "/python/course/dictionary/",
      ],
    },
  ],
  "/python/exercise/": [
    {
      text: "แบบฝึกหัด",
      link: "/python/exercise/",
      children: [
        "/python/exercise/001/",
        "/python/exercise/002/",
        "/python/exercise/003/",
        "/python/exercise/004/",
        "/python/exercise/005/",
        "/python/exercise/006/",
        "/python/exercise/007/",
        "/python/exercise/008/",
        "/python/exercise/009/",
        "/python/exercise/010/",
        "/python/exercise/011/",
        "/python/exercise/012/",
        "/python/exercise/013/",
        "/python/exercise/014/",
      ],
    },
  ],
};
