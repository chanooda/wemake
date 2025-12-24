import { ProductCard } from "~/features/products/ui/new-product-card";

export const meta = () => {
  return [
    { title: "User Products | Wemake" },
    { name: "description", content: "User products" },
  ];
};

const ProfileProductsPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {Array.from({ length: 10 }).map((_, index) => (
        <ProductCard
          id={String(index)}
          title={`Product Title ${index + 1}`}
          description={`Product Description ${index + 1}`}
          comments={10}
          views={10}
          votes={10}
        />
      ))}
    </div>
  );
};

export default ProfileProductsPage;
