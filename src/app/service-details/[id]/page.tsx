import ServiceDetailsMain from "@/components/serviceDetails/ServiceDetailsMain";
import service_data from "@/data/service-data";
import Wrapper from "@/layout/DefaultWrapper";

const ServiceDetailsDynamic = ({ params }: { params: { id: number } }) => {
    const id =  params.id
    const service = service_data.find(item=> item.id == id)
    if(!service){
      return <p>Loadding..</p>
    }
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

export default ServiceDetailsDynamic