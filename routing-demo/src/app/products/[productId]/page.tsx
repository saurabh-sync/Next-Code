import { Metadata } from "next";

type Props = {
  params: { productId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  console.log(parent);
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`iphone ${params.productId}`);
    }, 100);
    if (params.productId === undefined) {
      reject("error");
    }
  });
  const title = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`iphone ${params.productId}`);
    }, 100);
    if (params.productId === undefined) {
      reject("error");
    }
  });
  console.log(params);
  return {
    title: `Product ${title}`,
  };
};

export default function ProductDetails({ params }: Props) {
  return <h1>Details about Product {params.productId}</h1>;
}

// import { Metadata } from "next";

// type Props = {
//   params: { id: string };
//   searchParams: { [key: string]: string | string[] | undefined };
// };

// export const  generateMetadata = async ({
//   params,
// }: Props): // parent?: ResolvingMetadata
// Promise<Metadata> => {
//   // read route params
//   const id = params.id;

//   // fetch data
//   const product = await fetch(`https://example.com/products/${id}`).then(
//     (res) => res.json()
//   );

//   // optionally access and extend (rather than replace) parent metadata
//   // const previousImages: undefined = (await parent).openGraph?.images || [];

//   return {
//     title: product.title,
//     // openGraph: {
//     //   images: ["/some-specific-page-image.jpg"],
//     // },
//   };
// }

// export default function ProductDetails({ params }: Props) {
//   return <h1>Details about Product {params.id}</h1>;
// }
