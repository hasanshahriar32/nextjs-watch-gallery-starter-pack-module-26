export const getData = async () => {
  const res = await fetch("http://localhost:5000/watches", {
    cache: "force-cache",
    next: {
      revalidate: 5,
    },
  });
  const data = await res.json();
  return data;
};
