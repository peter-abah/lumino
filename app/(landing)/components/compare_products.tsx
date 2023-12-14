import FeatureTable from "@/app/components/feature_table";
import { convertStringToTitleCase } from "@/app/helpers";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

const PRODUCT1 = {
  name: "MW65 (Silver Metal / Brown Leather)",
  price: "499",
  color: "Silver Metal / Brown Leather",
  image: "/images/mw65-compare.png",
  driver: "40mm Beryllium",
  weight: "245g",
  dimensions: "165mm x 190mm x 66mm",
  battery: "24 hours",
  link: "#",
  styles: {
    colorButton: "bg-[linear-gradient(135deg,brown_50%,lightgrey_50%)]",
  },
};

const PRODUCT2 = {
  name: "MW50+ (Silver Metal / Black Leather)",
  price: "299",
  color: "Silver Metal / Black Leather",
  image: "/images/mw50-compare.png",
  driver: "40mm Beryllium",
  weight: "205g (On-Ear), 239g (Over-Ear)",
  dimensions: "190mm x 155mm x 34mm (On-Ear), 200mm x 165mm x 40mm (Over-Ear)",
  battery: "16 hours",
  link: "#",
  styles: {
    colorButton: "bg-[linear-gradient(135deg,black_50%,lightgrey_50%)]",
  },
};

export default function CompareProducts() {
  const normalTableColumns = ["driver", "weight", "dimensions", "battery"] as const;

  return (
    <section className="px-12 mb-20">
      <div className="max-w-[750px] mb-16">
        <p className="font-bold">Compare</p>
        <h2 className="mt-6 text-[2.5rem] font-bold leading-heading">
          Which wireless headphones are made for you ?
        </h2>
        <p className="mt-8">
          Not sure which one to choose? We selected our most popular wireless headphones. Compare
          them and choose the best version for your needs.
        </p>
        <Link
          href="#"
          className="inline-block mt-8 px-8 py-3.5 rounded-button font-bold bg-black text-white"
        >
          Learn more
        </Link>
      </div>

      <FeatureTable.Root>
        <FeatureTable.Row>
          <FeatureTable.Column />
          {[PRODUCT1, PRODUCT2].map((product) => (
            <FeatureTable.Column key={product.name}>
              <div className="max-w-[260px]">
                <div className="relative w-[150px] aspect-square mb-5">
                  <Image
                    src={product.image}
                    fill
                    alt={product.name}
                    className="object-cover object-center"
                  />
                </div>
                <Link href={product.link} className="font-bold text-text inline-block mb-0.5">
                  {product.name}
                </Link>
                <p className="mb-2">${product.price}</p>
                <div className="mb-6">
                  <Link
                    href="#"
                    className={clsx(
                      "w-3.5 aspect-square rounded-full inline-block",
                      product.styles.colorButton
                    )}
                  >
                    <span className="sr-only">{product.color}</span>
                  </Link>
                </div>
                <Link
                  href={product.link}
                  className="px-6 py-3.5 rounded-button grid place-items-center bg-text/10 w-fit font-bold text-sm hover:bg-text/5"
                >
                  View
                </Link>
              </div>
            </FeatureTable.Column>
          ))}
        </FeatureTable.Row>

        {normalTableColumns.map((column) => (
          <FeatureTable.Row key={column}>
            <FeatureTable.Column type="header">
              {convertStringToTitleCase(column)}
            </FeatureTable.Column>
            <FeatureTable.Column>{PRODUCT1[column]}</FeatureTable.Column>
            <FeatureTable.Column>{PRODUCT2[column]}</FeatureTable.Column>
          </FeatureTable.Row>
        ))}
      </FeatureTable.Root>
    </section>
  );
}
