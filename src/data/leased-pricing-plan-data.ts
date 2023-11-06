import thumb1 from "../../public/assets/img/slider/slider_bg01.jpg"
import thumb2 from "../../public/assets/img/slider/slider_bg02.jpg"
import thumb3 from "../../public/assets/img/slider/slider_bg03.jpg"
import thumb4 from "../../public/assets/img/slider/slider_bg04.jpg"
import checkIcon from "../../public/assets/img/icons/check.png"
import { PricingPlanItemType } from "@/interFace/interFace"

export const pricingPlan:PricingPlanItemType[] = [
    {
        id:1,
        img:thumb1,
        title:"Fibre",
        net:"10",
        speed:"MBPS",
        pricingList:[
            {
                img:checkIcon,
                list:"Individual businesses"
            },
            {
                img:checkIcon,
                list:"10Mbps download & upload speed"
            },
            {
                img:checkIcon,
                list:"Unlimited usage , no data limits."
            },
        ],
        start:"Start From",
        price:6500,
        time:"Month"
    },
    {
        id:2,
        img:thumb2,
        title:"Fibre",
        net:"20",
        speed:"MBPS",
        pricingList:[
            {
                img:checkIcon,
                list:"Individual businesses"
            },
            {
                img:checkIcon,
                list:"20Mbps download & upload speed"
            },
            {
                img:checkIcon,
                list:"Unlimited usage , no data limits."
            },
        ],
        start:"Start From",
        price:12000,
        time:"Month"
    },
    {
        id:3,
        img:thumb3,
        title:"Fibre",
        net:"30",
        speed:"MBPS",
        pricingList:[
            {
                img:checkIcon,
                list:"Individual businesses"
            },
            {
                img:checkIcon,
                list:"30Mbps download & upload speed"
            },
            {
                img:checkIcon,
                list:"Unlimited usage , no data limits."
            },
        ],
        start:"Start From",
        price:18000,
        time:"Month"
    },
    {
        id:4,
        img:thumb4,
        title:"Fibre",
        net:"50",
        speed:"MBPS",
        pricingList:[
            {
                img:checkIcon,
                list:"Individual businesses"
            },
            {
                img:checkIcon,
                list:"50Mbps download & upload speed"
            },
            {
                img:checkIcon,
                list:"Unlimited usage , no data limits."
            },
        ],
        start:"Start From",
        price:25000,
        time:"Month"
    },
    
]