import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/AuthService';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export const authGuard = () => {
  const router = inject(Router);
  const authService = inject(AuthService);
  const platformId = inject(PLATFORM_ID);

  if (!isPlatformBrowser(platformId)) {
    return true; // Permite la navegación en SSR
  }

  if (authService.checkAuthStatus()) {
    return true;
  }

  return router.navigate(['/login']);
};

/*export const loginGuard = () => {
  const router = inject(Router);
  const authService = inject(AuthService);
  const platformId = inject(PLATFORM_ID);

  if (!isPlatformBrowser(platformId)) {
    return true; // Permite la navegación en SSR
  }

  if (authService.checkAuthStatus()) {
    return router.navigate(['/dashboard']);
  }

  return true;
};*/
