import styles from "@/styles/EventItem.module.css";
import Link from "next/link";
import Image from "next/Image";
export default function EventItem({ evt }) {
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image
          src={evt.image ? evt.image : "/images/event-default.png"}
          width={170}
          height={100}
        />
      </div>
      <div className={styles.info}>
        <span>
          {evt.date} at {evt.time}
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
