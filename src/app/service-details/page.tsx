import ServiceDetailsMain from "@/components/serviceDetails/ServiceDetailsMain";
import Wrapper from "@/layout/DefaultWrapper";

const ServiceDetails = () => {

    const id:number =  1

    return (
        <>
            <Wrapper>
                <main>
                    <ServiceDetailsMain id={id} />
                </main>
            </Wrapper>
        </>
    );
}

export default ServiceDetails