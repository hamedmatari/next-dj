import styles from "@/styles/EventItem.module.css";
import { API_URL } from "@/config/index";
import Link from "next/link";
import Image from "next/Image";
export default function EventItem({ evt: { attributes: evt } }) {
  const { url } = evt.image.data.attributes.formats.thumbnail;
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        {/* <Image
          src={evt.image ? evt.image : "/images/event-default.png"}
          width={170}
          height={100}
        /> */}
        <Image src="/images/event-default.png" width={170} height={100} />
      </div>
      <div className={styles.info}>
        <span>
          {evt.time.split("T")[0]} by {evt.performers}
        </span>
        <h3>{evt.name}</h3>
      </div>
      <div>
        <Link href={`/events/${evt.slug}`}>
          <a className="btn">Detail</a>
        </Link>
      </div>
    </div>
  );
}
