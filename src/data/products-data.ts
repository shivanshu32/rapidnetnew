import { productsType } from "@/interFace/interFace"
import thumb1 from "../../public/assets/img/products/product_img01.png"
import thumb2 from "../../public/assets/img/products/product_img02.png"
import thumb3 from "../../public/assets/img/products/product_img03.png"
import thumb4 from "../../public/assets/img/products/product_img04.png"
import thumb5 from "../../public/assets/img/products/product_img05.png"
import thumb6 from "../../public/assets/img/products/product_img06.png"

const products_data:productsType[] = [
    {
        id: 1,
        sale: "Sale",
        img: thumb1,
        title: "Gigabit Dual Band Whole Home Mesh Wi-Fi System Router",
        price: 55.00,
        rating: 5,
        ratingCount: 15,
        btn: "Add to Cart",
        quantity:0
      },
      {
        id: 2,
        img: thumb2,
        title: "Netfix Band Whole Home Mesh Wi-Fi System Router",
        price: 45.00,
        rating: 5,
        ratingCount: 10,
        btn: "Add to Cart",
        quantity:0
      },
      {
        id: 3,
        img: thumb3,
        title: "Netfix Dual Whole Home Mesh TV Box System",
        price: 65.00,
        rating: 4,
        ratingCount: 18,
        btn: "Add to Cart",
        quantity:0
      },
      {
        id: 4,
        img: thumb4,
        title: "Netfix Jabra PanaCast Virtual Video Conference",
        price: 50.00,
        oldPrice: 70.00,
        rating: 4,
        ratingCount: 24,
        btn: "Add to Cart",
        quantity:0
      },
      {
        id: 5,
        sale: "Sale",
        img: thumb5,
        title: "DigitalX DX-T2020 Hi-Fi 120W RMS Tower Speaker",
        price: 80.00,
        rating: 5,
        ratingCount: 22,
        btn: "Add to Cart",
        quantity:0
      },
      {
        id: 6,
        img: thumb6,
        title: "Netfix Portable Wi-Fi White Clearance Router",
        price: 90.00,
        rating: 5,
        ratingCount: 12,
        btn: "Add to Cart",
        quantity:0
      }
]

export default products_data;