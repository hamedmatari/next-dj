import { API_URL } from "@/config/index";
import Layout from "@/components/Leyout";
import qs from "qs";
import EventItem from "@/components/EventItem";

export default function SearchPage({ events }) {
  return (
    <div>
      <Layout title="Dj Events | All Events">
        <h1>Upcoming Events</h1>
        {events.length === 0 && <h3>there is nothing to show</h3>}
        {events.map((evt) => (
          <EventItem evt={evt} key={evt.id} />
        ))}
      </Layout>
    </div>
  );
}
export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    filters: {
      $or: [
        { venue: { $contains: term } },
        { name: { $contains: term } },
        { performers: { $contains: term } },
      ],
    },
    populate: "*",
  });

  const res = await fetch(`${API_URL}/api/events?${query}`);
  const events = await res.json();

  return {
    props: { events: events.data },
  };
}
