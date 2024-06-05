import Link from "next/link";
import Image from "next/image";
import { conferences } from "../lib/data";
import { GoArrowRight } from "react-icons/go";

const Conference = () => {
  return (
    <section className="flex flex-col items-center gap-5 w-[80%]">
      <h2 className="text-center">Conferences</h2>
      <p className="text-center subtitle">
        I talked at the following events and conferences
      </p>

      <div className="flex flex-col justify-center gap-5 w-[80%]">
        {conferences.map((l) => (
          <Link key={l.title} href={l.url} className="conf-card">
            <div className="flex flex-row gap-3 items-start">
              <Image alt={l.title} src={l.img} width={48} height={48} />
              <div>
                <p className="font-bold">{l.title}</p>
                <p>
                  {l.venue}, {l.city}
                </p>
              </div>
            </div>
            <button className="button bg-[#a78ce4] flex justify-between gap-3 items-center">
              <GoArrowRight />
            </button>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Conference;
