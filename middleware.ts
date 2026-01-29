import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define public routes that don't require authentication
const isPublicRoute = createRouteMatcher([
  '/',
  '/about-us',
  '/contact',
  '/services(.*)',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/login',
  '/api/webhooks(.*)',
]);

// Define auth routes (sign-in, sign-up) that should redirect if already authenticated
const isAuthRoute = createRouteMatcher([
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/login',
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  // If user is authenticated and tries to access auth pages, redirect to dashboard
  if (userId && isAuthRoute(req)) {
    return Response.redirect(new URL('/dashboard', req.url));
  }

  // If route is not public and user is not authenticated, protect it
  if (!isPublicRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
