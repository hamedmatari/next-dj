import { API_URL } from "@/config/index";
import Layout from "@/components/Leyout";
import EventItem from "@/components/EventItem";
import Link from "next/link";

export default function HomePage({ events }) {
  return (
    <div>
      <Layout>
        <h1>Upcoming Events</h1>
        {events.length === 0 && <h3>there is nothing to show</h3>}
        {events.map((evt) => (
          <EventItem evt={evt} key={evt.id} />
        ))}
        {events.length > 0 && (
          <Link href="/events">
            <a className="btn-secondary">View All Events</a>
          </Link>
        )}
      </Layout>
    </div>
  );
}
export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();
  console.log("index con log");
  return {
    props: { events: events.slice(0, 3) },
    revalidate: 1,
  };
}
