import { API_URL } from "@/config/index";
import Layout from "@/components/Leyout";
import EventItem from "@/components/EventItem";

export default function HomePage({ events }) {
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
export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events?populate=*`);
  const events = await res.json();
  console.log("d");
  return {
    props: { events: events.data },
    revalidate: 1,
  };
}
