import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const getServerSideProps = (async () => {
  return { props: {} };
}) satisfies GetServerSideProps;

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/example');
  }, [router]);

  return null;
};

export default Page;
