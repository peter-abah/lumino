import FeatureTable from "@/components/feature_table";
import { convertStringToTitleCase } from "@/lib";
import { FeatureChart } from "@/types/sanity";
import Link from "next/link";

type Props = {
  data: FeatureChart;
};
export default function CompareProducts({ data }: Props) {
  const { heading, subheading, content, headings, valuesColumns, buttonText, buttonURL } = data;

  return (
    <section className="md:px-8 lg:px-12 my-12 md:mb-16 md:mt-0 lg:mb-20">
      <div className="max-w-[750px] mb-8 md:mb-16 px-5 md:px-0">
        <p className="font-bold text-sm md:text-base">{subheading}</p>
        <h2 className="mt-4 md:mt-6 text-[2rem] md:text-[2.5rem] font-bold leading-heading">
          {heading}
        </h2>
        <p className="mt-5 md:mt-8 text-sm md:text-base leading-normal">{content}</p>
        <Link
          href={buttonURL}
          className="inline-block mt-6 md:mt-8 px-6 md:px-8 py-3.5 rounded-button font-bold bg-black text-white text-sm md:text-base"
        >
          {buttonText}
        </Link>
      </div>

      <div className="overflow-x-auto">
        <FeatureTable.Root className="rounded-none px-5 md:px-12 py-4 md:rounded-xl">
          {headings.map((column, index) => (
            <FeatureTable.Row key={column}>
              <FeatureTable.Column type="header">
                {convertStringToTitleCase(column)}
              </FeatureTable.Column>
              {valuesColumns.map((values) => (
                <FeatureTable.Column key={values._key}>{values.array[index]}</FeatureTable.Column>
              ))}
            </FeatureTable.Row>
          ))}
        </FeatureTable.Root>
      </div>
    </section>
  );
}
