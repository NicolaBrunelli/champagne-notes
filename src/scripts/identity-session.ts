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
    const hydratedUser = await hydrateSession();
    return hydratedUser ?? getUser();
  })();
  return sessionScope.__champagneIdentitySession;
};
