import { getUser, hydrateSession } from '@netlify/identity';

let currentUserPromise: ReturnType<typeof getUser> | undefined;

/**
 * Restores a cookie-backed Netlify Identity session only once per page.
 * Layout and page scripts can ask for the same promise without racing each other.
 */
export const getCurrentUser = () => {
  currentUserPromise ??= (async () => {
    const hydratedUser = await hydrateSession();
    return hydratedUser ?? getUser();
  })();
  return currentUserPromise;
};
