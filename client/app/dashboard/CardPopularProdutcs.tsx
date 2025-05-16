import PopularProduct from "@/components/PopularProduct";
import { useGetDashboardMetricsQuery } from "@/state/api";

const CardPopularProdutcs = () => {
  const {
    data: dashboardMetrics,
    isLoading,
    isError,
  } = useGetDashboardMetricsQuery();

  if (isError) {
    return <div className="m-5">Failed to fetch data</div>;
  }

  return (
    <div className="bg-white row-span-3 xl:row-span-6 shadow-md rounded-2xl pb-16">
      {isLoading ? (
        <div className="m-5">Loading...</div>
      ) : (
        <>
          <h3 className="text-lg font-semibold px-7 pt-5 pb-2">
            Popular Products
          </h3>
          <hr />
          <div className="overflow-auto h-full">
            {dashboardMetrics?.popularProducts.map((product) => (
              <PopularProduct
                key={product.productId}
                name={product.name}
                price={product.price}
                rating={product.rating || 0}
                stockQuantity={product.stockQuantity}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CardPopularProdutcs;
