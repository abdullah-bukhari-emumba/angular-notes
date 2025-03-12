import { HttpInterceptorFn } from '@angular/common/http';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('github_token');
  const clonedRequest = req.clone({
    setHeaders: {
      Accept: 'application/vnd.github+json',
      Authorization: token ? `Bearer ${token}` : '',
      'X-GitHub-Api-Version': '2022-11-28',
    }
  });

  return next(clonedRequest);
};
