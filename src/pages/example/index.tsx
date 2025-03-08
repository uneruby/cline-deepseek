import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import ExamplePageTemplate from '@/components/template/ExamplePageTemplate';

export const getServerSideProps = (async () => {
  return { props: {} };
}) satisfies GetServerSideProps;

const Page = ({}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <ExamplePageTemplate />;
};

export default Page;
