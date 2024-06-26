import PetProductCard from "./PetProduct/PetProductCart";
// import StuffProductCard from "./StuffProduct/StuffProductCart";
import { getPet } from "../../services/productApi";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductList = () => {
  const { specieid } = useParams();
  const [type, setType] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Gọi hàm getPetBreed với async/await để đợi kết quả
        const result = await getPet(1);
        setType(result); // Cập nhật state với kết quả từ API
      } catch (error) {
        console.error("Error fetching pet breed:", error);
      }
    };

    fetchData(); // Gọi hàm fetchData khi component được mount

    // Nếu bạn muốn chạy hàm fetchData mỗi khi specieid thay đổi, hãy thêm specieid vào dependency array của useEffect
  }, [specieid]);

  return (
    <div className="w-5/6 p-4 bg-orange-100">
      <div className="text-3xl  font-bold py-4">Nổi bật</div>
      <hr className=" h-1 mb-6 mt-1 bg-orange-400" />
      <div className="grid grid-cols-3 gap-4">
        {type.map((pet, index) => {
          return <PetProductCard key={index} info={pet} />;
        })}

        {/* <PetProductCard {...dogProduct} />
        <PetProductCard {...dogProduct} />
        <PetProductCard {...catProduct} /> */}
        {/* <StuffProductCard {...dogProduct}></StuffProductCard>
        <StuffProductCard {...catProduct}></StuffProductCard>
        <StuffProductCard {...dogProduct}></StuffProductCard> */}
      </div>
    </div>
  );
};
export default ProductList;
