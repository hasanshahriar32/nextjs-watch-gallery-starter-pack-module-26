import ProductDetails from "@/components/UI/ProductDetails";

const ProductDetail = async ({ params }) => {
  console.log(params?.id);
  const res = await fetch(`http://localhost:5000/watches/${params?.id}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return (
    <div>
      <ProductDetails product={data} />
    </div>
  );
};

export default ProductDetail;
