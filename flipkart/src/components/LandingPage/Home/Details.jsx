import 'react-multi-carousel/lib/styles.css'

import {
    AppBar,
    Toolbar,
    Box,
    Typography,
    IconButton,
    Drawer,
    List,
    styled,
  } from "@mui/material";

import React from 'react'
import DetailFetch from './DetailFetch';
const details = () => {
    let Top_search=
    {
        Heading:"MOST SEARCHED FOR ON FLIPKART",
       Details: [
        "Flipkart Axis Bank Super Elite Credit card",
        "Bounce Infinity E1",
        "Buy Laptop on EMI",
        "vivo T1X",
        "OPPO Reno8 5G",
        "OPPO Reno8 Pro 5G",
        "Nothing Phone 1",
        "Sell Old Mobile Phones",
        "ASUS TUF Gaming F15 Core i5 10th Gen",
        "Electronics Store",
        "OPPO A16K",
        "Vivo Y33T",
        "OPPO Reno7 5G",
        "Bathroom Exhaust Fan",
        "Samsung Window AC",
        "OPPO Reno7 Pro 5G",
        "iPhone 13",
        "iPhone 13 Pro",
        "iPhone 13 Pro Max",
        "iPhone 13 Mini",
        "Google Pixel 6a covers",
        "Flipkart QuickBooks",
        "Flipkart Help Centre",
        "Online Boat Store",
        "Covers from Rs 99",
        "Flipkart Track Orders",
        "Flipkart Manage Orders",
        "Flipkart Return Orders",
        "Flipkart Gift Cards Store",
        "Flipkart Axis Bank Credit Card",
        "Flipkart Pay Later" ]
    };
let mobile={
    Heading:"MOBILES",
   Details: [
    "iPhone 12 64GB",
    "iPhone 12 Pro 512GB",
    "iPhone 12 128GB",
    "Vivo Y91i",
    "Vivo Y11",
    "Vivo Y15",
    "Vivo Y50",
    "Vivo Y12",
    "Reno2 F",
    "Oppo A12",
    "Oppo F15",
    "Oppo A31",
    "Samsung A71",
    "Samsung A51",
    "Samsung A31",
    "Realme X2",
    "iPhone 11",
    "iPhone 11 Pro",
    "iPhone 11 Pro Max",
    "Mobile Offers",
    "iphone x4G Mobile",
    "Nokia Mobile",
    "Samsung Mobile",
    "iphone",
    "Oppo Mobile",
    "Vivo Mobile",
    "iPhone 12 64GB",
    "iPhone 12 Pro 512GB",
    "iPhone 12 128GB",
    "Vivo Y91i",
    "Vivo Y11",
    "Vivo Y15",
    "Vivo Y50",
    "Vivo Y12",
    "Reno2 F",
    "Oppo A12",
    "Oppo F15",
    "Oppo A31",
    "Samsung A71",
    "Samsung A51",
    "Samsung A31",
    "Realme X2",
    "iPhone 11",
    "iPhone 11 Pro",
    "iPhone 11 Pro Max",
    "Mobile Offers",
    "iphone x4G Mobile",
    "Nokia Mobile",
    "Samsung Mobile",
    "iphone",
    "Oppo Mobile",
    "Vivo Mobile",
    "iPhone 12 64GB",
    "iPhone 12 Pro 512GB",
    "iPhone 12 128GB",
    "Vivo Y91i",
    "Vivo Y11",
    "Vivo Y15",
    "Vivo Y50",
    "Vivo Y12",
    "Reno2 F",
    "Oppo A12",
    "Oppo F15",
    "Oppo A31",
    "Samsung A71",
    "Samsung A51",
    "Samsung A31",
    "Realme X2",
    "iPhone 11",
    "iPhone 11 Pro",
    "iPhone 11 Pro Max",
    "Mobile Offers",
    "iphone x4G Mobile",
    "Nokia Mobile",
    "Samsung Mobile",
    "iphone",
    "Oppo Mobile",
    "Vivo Mobile"
  ]
}
  let Laptop={
    Heading:"LAPTOP",
    Details:[
    "MacBook Pro M2",
    "acer Ryzen 3 Dual Core 3250U - (8 GB/256 GB SSD/Windows 11 Home) Z2-493 Thin and Light Laptop",
    "ASUS Vivobook S14 OLED (2022)",
    "ASUS Zenbook 14 OLED (2022)",
    "Realme Book Prime Core i5 11th Gen",
    "Microsoft Surface Go Pentium 128GB",
    "Branded Laptops",
    "Apple Laptops",
    "Acer Laptops",
    "Lenovo Laptops",
    "Dell Laptops",
    "Asus Laptops",
    "HP Laptops",
    "Gaming Laptops",
    "2 in 1 Laptops",
    "Laptops",
    "Dell latest laptops 2022",
    "HP latest laptops 2022",
    "Infinix INBook X1 Neo Series Celeron Quad Core - (8 GB/256 GB SSD/Windows 11 Home) XL22 Thin and Light Laptop",
    "Microsoft Laptops",
    "12th Gen Intel Core Laptops"
  ]
}

let Clothes={
    Heading:"Clothes",
    Details:[
        "Men Shirts",
        "Kurta Pajama",
        "Kurtas",
        "Men T-Shirts",
        "Jeans",
        "Saree",
        "Dresses",
        "Kids Dresses",
        "Designer Salwar Suits",
        "Bra",
        "Designer Kurtis",
        "Track Pant",
        "Men Kurtas",
        "Gym Wear",
        "Party Dresses",
        "Palazzo Suits",
        "Boys Clothing",
        "Gloves",
        "Nighty",
        "Maxi Dresses",
        "Anarkali",
        "Gowns",
        "Culottes",
        "Salwar Suits",
        "Kurtis",
        "Designer Sarees",
        "Leggings",
        "Shorts",
        "Georgette Sarees",
        "Ethnic Wear",
        "Briefs & Trunks",
        "Nike Watches",
        "Ascot Tie",
        "Corset Tops Tunics",
        "Leather PU Skirts",
        "Corset tops camisoles",
        "Women magenta earrings",
        "No collar jackets",
        "Green dress material",
        "Black patiala kurta set",
        "Men camel shoes casual",
        "Black pathani",
        "Tassel Sarees",
        "Khaki dresses",
        "Kids formal dresses",
        "Mauve shirts",
        "Women henley",
        "uppada pattu sarees",
        "Leopard dresses",
        "Sleeveless shrugs",
        "Kurta Pajama",
        "Kurtas",
        "Men T-Shirts",
        "Jeans",
        "Saree",
        "Dresses",
        "Kids Dresses",
        "Designer Salwar Suits",
        "Bra",
        "Designer Kurtis",
        "Track Pant",
        "Men Kurtas",
        "Gym Wear",
        "Party Dresses",
        "Palazzo Suits",
        "Boys Clothing",
        "Gloves",
        "Nighty",
        "Maxi Dresses",
        "Anarkali",
        "Gowns",
        "Culottes",
        "Salwar Suits",
        "Kurtis",
        "Designer Sarees",
        "Leggings",
        "Shorts",
        "Georgette Sarees",
        "Ethnic Wear",
        "Briefs & Trunks",
        "Nike Watches",
        "Ascot Tie",
        "Corset Tops Tunics",
        "Leather PU Skirts",
        "Corset tops camisoles",
        "Women magenta earrings",
        "No collar jackets",
        "Green dress material",
        "Black patiala kurta set",
        "Men camel shoes casual",
        "Black pathani",
        "Tassel Sarees",
        "Khaki dresses",
        "Kids formal dresses",
        "Mauve shirts",
        "Women henley",
        "uppada pattu sarees",
        "Leopard dresses",
        "Sleeveless shrugs"
      ]
}
let furniture ={
    Heading:"FURNITURE",
    Details: [
      "Furniture",
      "Sofas",
      "Beds",
      "Dining sets",
      "Wardrobes",
      "Mattresses",
      "TV Units",
      "Tables",
      "Chairs",
      "Shelves",
      "Bean Bags",
      "Office Chairs",
      "Computer Table",
      "Office Tables",
      "Red Sofa",
      "Wakefit Beds",
      "White Sofa",
      "Wakefit Mattress",
      "Green Sofa",
      "Black Sofa",
      "Brown Sofa",
      "BGMH:Whey Protein",
      "Homeopathy",
      "Bounce Infinity",
      "Christmas Gifts",
      "Calendar 2023",
      "Online Guitar",
      "Books Store",
      "Musical Instrument Store",
      "Dabur Chyawanprash",
      "Baidyanath Chyawanprash",
      "Energy Drinks",
      "Toys",
      "Milk Drink Mixes",
      "Rakhi",
      "Chyawanprash",
      "Indian Flag",
      "Protein Supplements",
      "Sofas",
      "Beds",
      "Dining sets",
      "Wardrobes",
      "Mattresses",
      "TV Units",
      "Tables",
      "Chairs",
      "Shelves",
      "Bean Bags",
      "Office Chairs",
      "Computer Table",
      "Office Tables",
      "Red Sofa",
      "Wakefit Beds",
      "White Sofa",
      "Wakefit Mattress",
      "Green Sofa",
      "Black Sofa",
      "Brown Sofa",
      "BGMH:Whey Protein",
      "Homeopathy",
      "Bounce Infinity",
      "Christmas Gifts",
      "Calendar 2023",
      "Online Guitar",
      "Books Store",
      "Musical Instrument Store",
      "Dabur Chyawanprash",
      "Baidyanath Chyawanprash",
      "Energy Drinks",
      "Toys",
      "Milk Drink Mixes",
      "Rakhi",
      "Chyawanprash",
      "Indian Flag",
      "Protein Supplements"
    ]
  }
  return (
   <Box style={{paddingTop:40,paddingBottom:40}}>
    <h4>Top Stories:Brand Directory</h4>
    <DetailFetch props={Top_search}/>
    <DetailFetch props={mobile}/>
    <DetailFetch props={Laptop}/>
    <DetailFetch props={Clothes}/>
    <DetailFetch props={furniture}/>
   </Box>
  )
}

export default details