import ArrowRight from "@/components/icons/arrow_right_icon";
import { Newsletter } from "@/types/sanity";

type NewsletterFormProps = {
  data: Newsletter;
};
export default function NewsletterForm({ data }: NewsletterFormProps) {
  return (
    <div className="basis-1/3">
      <span aria-hidden className="font-black tracking-wide text-3xl h-5 uppercase leading-none">
        LUMINO
      </span>
      <p className="text-2xl md:text-4xl font-bold mb-6 mt-8 leading-tight">{data.title}</p>
      <form action="#" method="POST" className="relative">
        <label htmlFor="newsletter-email" className="sr-only">
          Enter email
        </label>
        <input
          type="email"
          name="email"
          id="newsletter-email"
          placeholder="E-mail"
          className="w-full py-4 px-5 rounded-lg border placeholder:text-sm md:placeholder:text-base placeholder:text-text/50"
        />
        <button
          type="submit"
          className="absolute top-4 right-5 rounded-full w-6 aspect-square bg-text/10 grid place-items-center hover:bg-text hover:text-white"
        >
          <ArrowRight className="w-[5px]" />
          <span className="sr-only">Submit</span>
        </button>
      </form>
    </div>
  );
}
