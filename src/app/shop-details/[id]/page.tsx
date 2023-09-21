import ShopDetailsMain from "@/components/shopDetails/ShopDetailsMain";
import products_data from "@/data/products-data";
import Wrapper from "@/layout/DefaultWrapper";

const ShoDetailsDynamic = ({ params }: { params: { id: number } }) => {
    const id =  params.id
    const product = products_data.find(item=> item.id == id)
    if(!product){
      return <p>Loadding..</p>
    }
    return (
        <>
            <Wrapper>
                <main>
                    <ShopDetailsMain id={id} />
                </main>
            </Wrapper>
        </>
    );
}

export default ShoDetailsDynamic