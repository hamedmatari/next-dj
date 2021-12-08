import Layout from "@/components/Leyout";
import { useRouter } from "next/router";
export default function EventPage() {
  const router = useRouter();

  return (
    <Layout>
      <h1>its slug page and dosent matter </h1>
      <h1>{router.query.slug}</h1>
    </Layout>
  );
}
