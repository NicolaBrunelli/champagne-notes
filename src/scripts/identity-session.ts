import { getUser, hydrateSession } from '@netlify/identity';

type IdentitySessionScope = typeof globalThis & {
  __champagneIdentitySession?: ReturnType<typeof getUser>;
};

const sessionScope = globalThis as IdentitySessionScope;

/**
 * Restores a cookie-backed Netlify Identity session only once per page.
 * Layout and page scripts can ask for the same promise without racing each other.
 */
export const getCurrentUser = () => {
  sessionScope.__champagneIdentitySession ??= (async () => {
    // Some mobile browsers can refuse a session-storage read while restoring a
    // PWA.  A failed hydration must not make the entire authenticated area
    // disappear: `getUser` still reads the valid Identity session when present.
    try {
      const hydratedUser = await hydrateSession();
      if (hydratedUser) return hydratedUser;
    } catch {
      // Fall through to the canonical Identity lookup below.
    }
    return getUser();
  })();
  return sessionScope.__champagneIdentitySession;
};
