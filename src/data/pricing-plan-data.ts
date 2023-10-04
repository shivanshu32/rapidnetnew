import thumb1 from "../../public/assets/img/images/pricing_thumb01.jpg"
import thumb2 from "../../public/assets/img/images/pricing_thumb02.jpg"
import thumb3 from "../../public/assets/img/images/pricing_thumb03.jpg"
import checkIcon from "../../public/assets/img/icons/check.png"
import { PricingPlanItemType } from "@/interFace/interFace"

export const pricingPlan:PricingPlanItemType[] = [
    {
        id:1,
        img:thumb1,
        title:"FTTH Network",
        net:"",
        speed:"High Speed",
        pricingList:[
            {
                img:checkIcon,
                list:"Single Device Uses"
            },
            {
                img:checkIcon,
                list:"Phone & Computer"
            },
            {
                img:checkIcon,
                list:"Random IP"
            },
        ],
        start:"Start From",
        price:25.00,
        time:"Month"
    },
    {
        id:2,
        img:thumb2,
        title:"Free Intercom",
        net:"",
        speed:"Complementary",
        pricingList:[
            {
                img:checkIcon,
                list:"20 Devices Allowed"
            },
            {
                img:checkIcon,
                list:"Phone, Computer & TV"
            },
            {
                img:checkIcon,
                list:"Random IP"
            },
        ],
        start:"Start From",
        price:55.00,
        time:"Month"
    },
    {
        id:3,
        img:thumb3,
        title:"Stable Network",
        net:"Unlimited",
        speed:"MBPS",
        pricingList:[
            {
                img:checkIcon,
                list:"Unlimited Devices Allowed"
            },
            {
                img:checkIcon,
                list:"Any Devices"
            },
            {
                img:checkIcon,
                list:"Fixed IP"
            },
        ],
        start:"Start From",
        price:95.00,
        time:"Month"
    },
    {
        id:4,
        img:thumb3,
        title:"Prompt Service",
        net:"Unlimited",
        speed:"MBPS",
        pricingList:[
            {
                img:checkIcon,
                list:"Unlimited Devices Allowed"
            },
            {
                img:checkIcon,
                list:"Any Devices"
            },
            {
                img:checkIcon,
                list:"Fixed IP"
            },
        ],
        start:"Start From",
        price:95.00,
        time:"Month"
    },
    {
        id:5,
        img:thumb3,
        title:"Auto Renewal",
        net:"Unlimited",
        speed:"MBPS",
        pricingList:[
            {
                img:checkIcon,
                list:"Unlimited Devices Allowed"
            },
            {
                img:checkIcon,
                list:"Any Devices"
            },
            {
                img:checkIcon,
                list:"Fixed IP"
            },
        ],
        start:"Start From",
        price:95.00,
        time:"Month"
    },
    {
        id:6,
        img:thumb3,
        title:"100% Fibre",
        net:"Unlimited",
        speed:"MBPS",
        pricingList:[
            {
                img:checkIcon,
                list:"Unlimited Devices Allowed"
            },
            {
                img:checkIcon,
                list:"Any Devices"
            },
            {
                img:checkIcon,
                list:"Fixed IP"
            },
        ],
        start:"Start From",
        price:95.00,
        time:"Month"
    },
]