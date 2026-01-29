import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define protected routes that require authentication
const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
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

  // Protect routes that require authentication
  if (isProtectedRoute(req)) {
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
