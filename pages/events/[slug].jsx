import { API_URL } from "@/config/index";
import { FaPen, FaPencilAlt, FaTimes } from "react-icons/fa";
import Router from "next/router";
import Link from "next/link";
import Image from "next/Image";
import styles from "@/styles/Event.module.css";
import Layout from "@/components/Leyout";
export default function EventPage({ evt: { attributes: evt } }) {
  const deleteEvent = (e) => {
    console.log("delete event");
  };

  return (
    <Layout>
      <div className={styles.event}>
        <div className={styles.controls}>
          <Link href={`/events/edit/${evt.id}`}>
            <a>
              <FaPencilAlt /> Edit Event
            </a>
          </Link>
          <a href="#" className={styles.delete} onClick={deleteEvent}>
            <FaTimes /> Delete Event
          </a>
        </div>
        <span>
          {evt.date} at {evt.time}
        </span>
        <h1>{evt.name}</h1>
        <Image
          src={evt.image ? evt.image : "/images/event-default.png"}
          width={960}
          height={600}
        />
        <h3>Performers:</h3>
        <p>{evt.performers}</p>
        <h3>Description:</h3>
        <p>{evt.description}</p>
        <h3>Venue:</h3>
        <p>{evt.venue}</p>
        <p>{evt.address}</p>
        {/* <Link href="/events">
          <a className={styles.back}>{"<"}Go Back</a>
        </Link> */}
        {/* line 44 up to 46 in my solution for comment above */}
        <div className={styles.back} onClick={() => Router.back()}>
          {"<"}Go Back
        </div>
      </div>
    </Layout>
  );
}
export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();
  const paths = events.data.map(({ attributes }) => ({
    params: {
      slug: attributes.slug,
    },
  }));

  return {
    paths,
    fallback: true,
  };
}
export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/api/events?filters[slug][$eq]=${slug}`);
  const evt = await res.json();
  // console.log(evt);
  return {
    props: { evt: evt.data[0] },
  };
}
