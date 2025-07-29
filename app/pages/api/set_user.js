// pages/index.tsx
import { parse } from "cookie";

export async function getServerSideProps({ req }) {
  const cookies = parse(req.headers.cookie || "");
  const theme = cookies.theme || "light";

  return {
    props: { theme },
  };
}

export default function Home({ theme }) {
  return (
    <main className={theme}>
      <h1>Welcome to my site!</h1>
    </main>
  );
}
