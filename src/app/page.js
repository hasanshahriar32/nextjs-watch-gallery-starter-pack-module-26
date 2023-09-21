import Products from "@/components/UI/Products";
import { getData } from "@/utils/getData";

const HomePage = async () => {
  // const res = await fetch("http://localhost:5000/watches", {
  //   cache: "force-cache",
  // });
  // const data = await res.json();
  // getStaticProps logic applied by default
  const data = await getData();
  return (
    <div>
      <h1 className="text-4xl text-center my-10">Welcome To Watch Gallery</h1>
      <div className="col-span-9 grid grid-cols-3 gap-5 p-10 w-[80%] mx-auto"></div>
      {data?.map((product) => (
        <Products key={product?.id} product={product}></Products>
      ))}
    </div>
  );
};

export default HomePage;
