// pages/aboutSolution.js
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]';
import { useRouter } from 'next/router';

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context.req, context.res, authOptions);
  const router = useRouter(); // Added useRouter
  if (!session) {
    router.push('/api/auth/signin'); // Redirect to login if no session
    return {
      props: {}
    };
  }
  return {
    props: {
      session
    },
  };
}

export default function About({ session }) {
  return (
    <div>
      <h1>About Page</h1>
      {session ? (
        <p>You are logged in as {session.user.email}</p>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
}
