import * as fs from "fs"
import  { resolve } from "path"
import { defineConfig } from "vite"
import { createHtmlPlugin } from "vite-plugin-html"
import viteCompression from "vite-plugin-compression"

const getLogo = (name) => {
    const path = `./src/img/logo/${"star"}.svg`;
    return fs.readFileSync(path)
}

const getAvatar = (name) => `./src/img/avatars/${name}.png`

export default defineConfig({
    build: {
      rollupOptions: {
        input: {
          index: resolve(__dirname, "index.html"),
        //   credentials: resolve(__dirname, "/credentials/index.html")
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
                            linkedin: "https://www.linkedin.com/company/codex-software/",
                        },
                        collections: [
                            {
                                title: "Ladies’ Fashion",
                                text: "From casual wear to elegant dresses, our ladies' collection features the latest trends and timeless classics. Whether you’re looking for everyday comfort or something special for a night out, we have styles that cater to every taste and body type.",
                                quote: "Their services were crucial during product development and contributed much to the successful closure of the deal. We won’t be able to achieve this without Codex.",
                                author: {
                                    name: "Chris Knighton",
                                    position: "Global Sales Director",
                                    avatar: getAvatar("oneflow"),
                                },
                                images: [
                                    { type: "image/png", src: "/src/img/display/ladies.png" },
                                    { type: "image/webp", src: "/src/img/display/Imageoneflow.webp" },
                                ],
                                logo: getLogo("oneflow")

                            },
                            {
                                title: "Gents’ Attire",
                                text: "Discover our range of stylish and comfortable clothing for men. From smart casuals to rugged outdoor wear, our gents' collection is designed to keep you looking sharp no matter the occasion. Find everything from shirts and trousers to jackets and accessories.",
                                quote: "Skilled engineers and responsible managers. They’ve been our trusted partners throughout the years and I am happy to work with them for another decade.",
                                author: {
                                    name: "Nigel Watson",
                                    position: "Business Incubation Director",
                                    avatar: getAvatar("hp"),
                                },
                                images: [
                                    { type: "image/png", src: "/src/img/display/gents.png" },
                                    { type: "image/webp", src: "/src/img/display/Imagehp.webp" },
                                ],
                                logo: getLogo("hp")
                            },
                            {
                                title: "Kids’ Clothing",
                                text: "Dress your little ones in style with our adorable kids’ clothing line. We offer a wide variety of outfits for boys and girls, including playful everyday wear and special occasion attire. Our clothes are designed with comfort and durability in mind, perfect for active kids!",
                                quote: "Brilliant developers, you’ll hardly find any better. Happy to work with them any day. In fact, I am already working with them on my next startup.",
                                author: {
                                    name: "Ben Zhuk",
                                    position: "Co-founder, Head of Product",
                                    avatar: getAvatar("pronoun"),
                                },
                                images: [
                                    { type: "image/png", src: "/src/img/display/kids.png" },
                                    { type: "image/webp", src: "/src/img/display/Imagepronoun.webp" },
                                ],
                                logo: getLogo("pronoun")
                            },
                            {
                                title: "All-Season Styles",
                                text: "Fashion knows no season at [Your Store Name]. Our versatile collections are designed to transition seamlessly through the seasons, ensuring that you always have the right outfit at your fingertips. Whether it’s summer dresses, winter coats, or everything in between, we’ve got you covered!",
                                quote: "Brilliant developers, you’ll hardly find any better. Happy to work with them any day. In fact, I am already working with them on my next startup.",
                                author: {
                                    name: "Ben Zhuk",
                                    position: "Co-founder, Head of Product",
                                    avatar: getAvatar("pronoun"),
                                },
                                images: [
                                    { type: "image/png", src: "/src/img/display/seasons.png" },
                                    { type: "image/webp", src: "/src/img/display/Imagepronoun.webp" },
                                ],
                                logo: getLogo("pronoun")
                            },
                            {
                                title: "Year-Round Sales",
                                text: "Why wait for special occasions? At [Your Store Name], we offer sales all around the year! Enjoy incredible discounts on your favorite styles without compromising on quality. Keep an eye on our website for exclusive promotions and seasonal sales that make shopping even more enjoyable.",
                                quote: "Brilliant developers, you’ll hardly find any better. Happy to work with them any day. In fact, I am already working with them on my next startup.",
                                author: {
                                    name: "Ben Zhuk",
                                    position: "Co-founder, Head of Product",
                                    avatar: getAvatar("pronoun"),
                                },
                                images: [
                                    { type: "image/png", src: "/src/img/display/sale.png" },
                                    { type: "image/webp", src: "/src/img/display/Imagepronoun.webp" },
                                ],
                                logo: getLogo("pronoun")
                            },
                            {
                                title: "Affordable Prices",
                                text: "Looking great shouldn’t cost a fortune! We pride ourselves on offering high-quality clothing at cheaper prices. Our commitment to affordability means you can refresh your wardrobe regularly without guilt.",
                                quote: "Brilliant developers, you’ll hardly find any better. Happy to work with them any day. In fact, I am already working with them on my next startup.",
                                author: {
                                    name: "Ben Zhuk",
                                    position: "Co-founder, Head of Product",
                                    avatar: getAvatar("pronoun"),
                                },
                                images: [
                                    { type: "image/png", src: "/src/img/display/affordable.png" },
                                    { type: "image/webp", src: "/src/img/display/Imagepronoun.webp" },
                                ],
                                logo: getLogo("pronoun")
                            }
                        ]
                    },
                }
            },
            {
                entry: "credentials/index.html",
                filename: "credentials/index.html",
                template: "credentials/index.html",
                injectOptions:{
                    data:{
                        head:{
                            title:"credentials",
                            meta: {
                                description: "High Point Website",
                                keywords: "high point, clothing store",
                                author: "High Point",
                            }
                        }
                    }
                }
            }
            ],

        }),
        viteCompression(),
    ],
 })

