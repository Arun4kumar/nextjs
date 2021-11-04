import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import Layout from "@/components/Layout";
export default function index() {
  const router = useRouter();

  return (
    <Layout title="Event">
      Event: {router.query.slug}
      <Link href="/">home</Link>
    </Layout>
  );
}
