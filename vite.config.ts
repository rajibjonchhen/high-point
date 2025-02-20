import * as fs from "fs"
import  { resolve } from "path"
import { defineConfig } from "vite"
import { createHtmlPlugin } from "vite-plugin-html"
import viteCompression from "vite-plugin-compression"

const getLogo = (name) => {
    const path = `./src/img/logo/${name}.svg`;
    return fs.readFileSync(path)
}

const getAvatar = (name) => `./src/img/avatars/${name}.png`

export default defineConfig({
    build: {
      rollupOptions: {
        input: {
          index: resolve(__dirname, "index.html"),
        }
      }
    },
    plugins: [
        createHtmlPlugin({
            minify: true,
            pages:[{
                entry: "index.html",
                filename: "index.html",
                template: "index.html",
                injectOptions: {
                    data: {
                        head: {
                            title: "High Point",
                            meta: {
                                description: "High Point Website",
                                keywords: "High Point, software development",
                                author: "High Point",
                            }
                        },
                        links: {
                            email: "mailto:shivaawalwa@gmail.com",
                            whatsApp: "https://wa.me/[+9779841114088]",
                        },
                        collections: [
                            {
                                title: "High Point Fashion",
                                text: "From casual wear to elegant dresses, our ladies' collection features the latest trends and timeless classics. Whether you’re looking for everyday comfort or something special for a night out, we have styles that cater to every taste and body type.",
                                quote: "Unleash Your Style, Embrace Every Occasion!",
                                images: [
                                    { type: "image/png", src: "/src/img/display/fashion1.png" },
                                    { type: "image/png", src: "/src/img/display/fashion1.webp" },
                                ],
                                social: {
                                    name: 'fb',
                                    logo: getLogo("fb"),
                                    link: '',
                                },
                            },
                            {
                                title: "High Point Footwear",
                                text: "Fashion knows no season at [Your Store Name]. From stylish summer sandals to cozy winter boots, our versatile footwear collections keep you covered year-round. Step into style and comfort with shoes for every occasion!",
                                quote: "Step into Style, Anytime!",
                                images: [
                                    { type: "image/png", src: "/src/img/display/shoes2.png" },
                                    { type: "image/png", src: "/src/img/display/shoes2.webp" },
                                ],
                                social: {
                                    name: 'fb',
                                    logo: getLogo("fb"),
                                    link: '',
                                },
                            },
                            {
                                title: "High Point Kitchenware",
                                text: "Why wait? Shop high-quality kitchenware, stoves, solar heaters, and water purifiers year-round with warranties and amazing discounts. Follow us on Facebook for exclusive deals. Upgrade your kitchen today!",
                                quote: "Elevate Your Kitchen, Every Day!",
                                
                                images: [
                                    { type: "image/png", src: "/src/img/display/kitchen2.png" },
                                    { type: "image/png", src: "/src/img/display/kitchen2.webp" },
                                ],
                                social: {
                                    name: 'fb',
                                    logo: getLogo("fb"),
                                    link: '',
                                },
                            },
                            {
                                title: "High Point Fashion2",
                                text: "Looking great shouldn’t cost a fortune! We pride ourselves on offering high-quality clothing at cheaper prices. Our commitment to affordability means you can refresh your wardrobe regularly without guilt.",
                                quote: "Style Smart, Spend Less!",
                                
                                images: [
                                    { type: "image/png", src: "/src/img/display/fashion.png" },
                                    { type: "image/png", src: "/src/img/display/fashion.webp" },
                                ],
                                social: {
                                    name: 'fb',
                                    logo: getLogo("fb"),
                                    link: '',
                                },
                            }
                        ]
                    },
                }
            },
            ],

        }),
        viteCompression(),
    ],
 })

