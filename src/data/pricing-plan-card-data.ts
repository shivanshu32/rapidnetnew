import { PricingCardType } from "@/interFace/interFace";

export const pricingCards:PricingCardType[] = [
    {
        id:1,
        title:"Starter Bundle",
        deviceSupport:"02 Devices",
        devicesIcon:[
            {
                icon:"flaticon-sync",
            },
            {
                icon:"flaticon-satellite-dish",
            },
        ],
        pricingList:[
            {
                title:"Home broadband"
            },
            {
                title:"Satellite TV"
            },
            {
                title:"Cell phone connection"
            },
            {
                title:"Home security"
            },
            {
                title:"Home broadband"
            },
        ],
        price:15.99,
        time:"mon"

    },
    {
        id:2,
        title:"Combo Bundle",
        deviceSupport:"03 Devices",
        devicesIcon:[
            {
                icon:"flaticon-sync",
            },
            {
                icon:"flaticon-satellite-dish",
            },
            {
                icon:"flaticon-device",
            },
        ],
        pricingList:[
            {
                title:"Home broadband"
            },
            {
                title:"Satellite TV"
            },
            {
                title:"Cell phone connection"
            },
            {
                title:"Home security"
            },
            {
                title:"Home broadband"
            },
        ],
        price:55.99,
        time:"mon"

    },
    {
        id:3,
        title:"Premium Bundle",
        deviceSupport:"04 Devices",
        devicesIcon:[
            {
                icon:"flaticon-sync",
            },
            {
                icon:"flaticon-satellite-dish",
            },
            {
                icon:"flaticon-device",
            },
            {
                icon:"flaticon-laptop",
            },
        ],
        pricingList:[
            {
                title:"Home broadband"
            },
            {
                title:"Satellite TV"
            },
            {
                title:"Cell phone connection"
            },
            {
                title:"Home security"
            },
            {
                title:"Home broadband"
            },
        ],
        price:65.99,
        time:"mon"

    },
    {
        id:4,
        title:"Full House Pack",
        deviceSupport:"Any Devices",
        devicesIcon:[
            {
                icon:"flaticon-device",
            },
          
        ],
        pricingList:[
            {
                title:"Home broadband"
            },
            {
                title:"Satellite TV"
            },
            {
                title:"Cell phone connection"
            },
            {
                title:"Home security"
            },
            {
                title:"Home broadband"
            },
        ],
        price:85.99,
        time:"mon"

    },
]