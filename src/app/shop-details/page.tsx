import ShopDetailsMain from "@/components/shopDetails/ShopDetailsMain";
import Wrapper from "@/layout/DefaultWrapper";

const ShopDetails = () => {

    const id:number =  1

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

export default ShopDetails