import Accordion from "@/components/accordion";
import { BLUR_DATA_URL } from "@/lib/constants";
import { urlForImage } from "@/sanity/lib/image";
import { HomePage } from "@/types/sanity";
import Image from "next/image";

type Props = {
  data: HomePage["faq"];
};
export default function FAQ({ data }: Props) {
  const {
    heading,
    content,
    avgResponseTimeText,
    supportOperatingHoursText,
    teamAvatar,
    questions,
  } = data;
  const accordionItems = questions.map(({ question, answer, _key }) => ({
    heading: question,
    text: answer,
    key: _key,
  }));

  return (
    <section className="px-5 py-12 md:p-16 md:mx-8 lg:mx-12 md:mb-16 lg:mb-20 rounded-none md:rounded-3xl bg-white flex flex-col lg:flex-row gap-12">
      <div className="lg:w-1/2 flex flex-col gap-10">
        <div>
          <h2 className="text-[2rem] md:text-[2.5rem] leading-heading mb-8 font-bold">{heading}</h2>
          <p className="text-sm md:text-base leading-normal">{content}</p>
        </div>

        <div className="hidden lg:block">
          <Image
            src={urlForImage(teamAvatar)}
            alt=""
            width={160}
            height={44}
            blurDataURL={BLUR_DATA_URL}
            placeholder="blur"
          />
          <p className="mt-4">{supportOperatingHoursText}</p>
          <p className="text-text/70">{avgResponseTimeText}</p>
        </div>
      </div>

      <div className="lg:w-1/2">
        <Accordion items={accordionItems} />
      </div>

      <div className="lg:hidden flex flex-col items-center text-center lg:text-left text-sm md:text-base">
        <Image
          src={urlForImage(teamAvatar)}
          alt=""
          width={160}
          height={44}
          blurDataURL={BLUR_DATA_URL}
          placeholder="blur"
        />
        <p className="mt-4">{supportOperatingHoursText}</p>
        <p className="text-text/70">{avgResponseTimeText}</p>
      </div>
    </section>
  );
}
