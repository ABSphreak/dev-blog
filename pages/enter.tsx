import { auth, googleAuthProvider } from '../lib/firebase';

export default function EnterPage() {
  const user = null;
  const username = null;
  return (
    <main>
      {user ? (
        !username ? (
          <UsernameForm />
        ) : (
          <SignOutButton />
        )
      ) : (
        <SignInButton />
      )}
    </main>
  );
}

// Sign in with Google Button
function SignInButton() {
  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
  };
  return (
    <button className="btn-google" onClick={signInWithGoogle}>
      <img src={`/google.png`} alt="Google Sign in" /> Sign in with Google
    </button>
  );
}

// Sign out Button
function SignOutButton() {
  return <button onClick={() => auth.signOut()}>Sign out</button>;
}

// Form
function UsernameForm() {
  return <></>;
}
