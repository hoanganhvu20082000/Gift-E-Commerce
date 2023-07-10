import FilterFeature from "../../components/LayoutProduct/FilterLayout/FilterFeature";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import productApi from "../../api/productApi";
import Loading from "../../components/Loading/Loading";

export default function Search() {
  const [searchParams] = useSearchParams();
  const [dataSearchByName, setDataSearchByName] = useState<any>();
  const searchString = searchParams.get("search");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  console.log("searchParams: ", searchString);

  useEffect(() => {
    if (searchString === "") {
      setDataSearchByName(undefined);
    }
    (async () => {
      setLoading(true);
      try {
        const response: any = await productApi.searchProductByName(
          searchString
        );
        setDataSearchByName(response);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [searchString]);

  const resultSearch = dataSearchByName?.data;

  console.log("dataSearchByName: ", dataSearchByName?.data);
  console.log("resultSearch", resultSearch);
  return (
    <>
      {loading && <Loading />}
      <div className="container px-[12px] mx-auto">
        <div className="mt-[48px] lg:mt-[90px] flex justify-center text-center text-[24px]">
          Seach result for "{`${searchString}`}"
        </div>
        <div className="px-[50px] my-[48px]">
          <FilterFeature />
        </div>

        {resultSearch?.length === 0 ? (
          <div className="flex justify-center py-[30px] text-[20px] font-semibold">
            No product were found
          </div>
        ) : (
          <div className="block md:grid md:grid-rows-2 md:grid-cols-2 xl:grid-rows-2 xl:grid-cols-4 gap-[18px]">
            {resultSearch?.map((product: any) => (
              <div
                className="px-[12px] mb-[20px] cursor-pointer relative test-hover-block"
                key={product.id}
                onClick={() => {
                  navigate(`/products/${product.id}`);
                }}
              >
                <img className="" src={product.image_url[0]} alt="Product1" />
                <div className="pt-[20px]">
                  <div className="text-[16px] font-bold mb-[16px]">
                    {product.name}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[20px] font-semibold">
                      {product.price}$
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
