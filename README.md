# NextAuth.js Runtime Error on Direct Access to Protected Page in Next.js 15

This repository demonstrates a runtime error encountered when accessing a protected page (using NextAuth.js) directly without logging in within a Next.js 15 application.  The issue only arises when accessing the page directly; after logging in, the page functions correctly.

## Problem

The `about.js` page utilizes `getServerSideProps` with NextAuth.js for authentication.  When accessing `/about` directly before logging in, a runtime error occurs.  However, after a successful login via the authentication flow, accessing `/about` works as expected. 

## Solution

The `aboutSolution.js` file provides a solution by adding an explicit check for the session's existence within `getServerSideProps`. If the session is not available, it redirects the user to the login page. This ensures a seamless user experience, preventing runtime errors on unauthorized direct access.

## Reproduction Steps

1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Access `/about` directly in the browser. Observe the error.
5. Log in through the authentication flow provided by NextAuth.js.
6. Re-access `/about`. Observe the page functions correctly.