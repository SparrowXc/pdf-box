import { Router } from 'vue-router';

const appTitle = String(import.meta.env.VITE_APP_TITLE);

const changeDocumentTitle = (value?: string, prefix: string = ' | ') => {
  const title = value ? appTitle + prefix + value : appTitle;
  document.title = title;
};
changeDocumentTitle();

const useGuard = (router: Router) => {
  // 全局前置守卫
  router.beforeEach(() => {});
  // 全局后置
  router.afterEach((to) => {
    // 动态修改title
    const { title } = to.meta;
    changeDocumentTitle(title);
  });

  return router;
};

export default useGuard;
