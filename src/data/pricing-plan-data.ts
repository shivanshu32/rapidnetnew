import thumb1 from "../../public/assets/img/images/pricing_thumb01.jpg"
import thumb2 from "../../public/assets/img/images/pricing_thumb02.jpg"
import thumb3 from "../../public/assets/img/images/pricing_thumb03.jpg"
import checkIcon from "../../public/assets/img/icons/check.png"
import { PricingPlanItemType } from "@/interFace/interFace"

export const pricingPlan:PricingPlanItemType[] = [
    {
        id:1,
        img:thumb1,
        title:"Basic",
        net:"250",
        speed:"MBPS",
        // pricingList:[
        //     {
        //         img:checkIcon,
        //         list:"Single Device Uses"
        //     },
        //     {
        //         img:checkIcon,
        //         list:"Phone & Computer"
        //     },
        //     {
        //         img:checkIcon,
        //         list:"Random IP"
        //     },
        // ],
        start:"Start From",
        price:599,
        time:"Month"
    },
    {
        id:2,
        img:thumb2,
        title:"Silver",
        net:"500",
        speed:"MBPS",
        // pricingList:[
        //     {
        //         img:checkIcon,
        //         list:"20 Devices Allowed"
        //     },
        //     {
        //         img:checkIcon,
        //         list:"Phone, Computer & TV"
        //     },
        //     {
        //         img:checkIcon,
        //         list:"Random IP"
        //     },
        // ],
        start:"Start From",
        price:899,
        time:"Month"
    },
    {
        id:3,
        img:thumb3,
        title:"Gold",
        net:"1",
        speed:"GBPS",
        // pricingList:[
        //     {
        //         img:checkIcon,
        //         list:"Unlimited Devices Allowed"
        //     },
        //     {
        //         img:checkIcon,
        //         list:"Any Devices"
        //     },
        //     {
        //         img:checkIcon,
        //         list:"Fixed IP"
        //     },
        // ],
        start:"Start From",
        price:1499,
        time:"Month"
    },
    
]