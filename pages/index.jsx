import { API_URL } from "@/config/index";
import Layout from "@/components/Leyout";
import EventItem from "@/components/EventItem";
import Link from "next/link";
import Search from "@/components/Search";
import { useState } from "react";
export default function HomePage({ events }) {
  const [searched, setSearch] = useState("");
  const funSearch = (searched) => {
    setSearch(searched);
  };
  return (
    <div>
      <Layout>
        <h1>Upcoming Events</h1>
        <Search fff={funSearch} />
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
  const res = await fetch(
    `${API_URL}/api/events?populate=*&pagination[limit]=3`
  );
  const events = await res.json();

  return {
    props: { events: events.data },
    revalidate: 1,
  };
}
