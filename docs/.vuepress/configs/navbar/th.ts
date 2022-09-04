import type { NavbarConfig } from "@vuepress/theme-default";

export const th: NavbarConfig = [
  {
    text: "เนื้อหา",
    link: "/python/course/",
    children: [
      // "/python/course/",
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
  {
    text: "แบบฝึกหัด",
    link: "/python/exercise/",
    // children: [
    //   "/python/exercise/algorithm/",
    //   "/python/exercise/variable/",
    //   "/python/exercise/data-type/",
    //   "/python/exercise/functions/",
    //   "/python/exercise/string/",
    //   "/python/exercise/decision/",
    //   "/python/exercise/loop/",
    //   "/python/exercise/array/",
    //   "/python/exercise/dictionary/",
    // ],
  },
  {
    text: "เคล็ดลับ",
    link: "/tips/",
    children: ["/tips/activity/", "/tips/psit/"],
  },
  {
    text: "เพิ่มเติม",
    children: [
      {
        text: "Facebook Pre-pro 65",
        link: "https://www.facebook.com/groups/1452472885173471",
      },
      {
        text: "YouTube Pre-Pro",
        link: "https://www.youtube.com/c/PreProgrammingITKMITL",
      },
      {
        text: "Facebook คณะ",
        link: "https://www.facebook.com/ITLadkrabang",
      },
    ],
  },
  {
    text: "เกี่ยวกับ",
    link: "/",
    children: [
      {
        text: "หน้าแรก",
        link: "/",
      },
      {
        text: "เกี่ยวกับ Pre-programming",
        link: "/about/",
      },
      {
        text: "คำถามถามบ่อย (FAQ)",
        link: "/about/faq/",
      },
    ],
  },
];
