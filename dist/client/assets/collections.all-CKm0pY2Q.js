import{u as i,j as t,L as r}from"./components-gtVk4ANr.js";import{u as n}from"./variants-B0lodqrA.js";import{P as o}from"./PaginatedResourceSection-BKRDoL7y.js";import{I as m}from"./Image-CkDhqclR.js";import{M as l}from"./Money-BidXu4eo.js";import"./index-DIWb1Ox1.js";const g=()=>[{title:"Hydrogen | Products"}];function p(){const{products:e}=i();return t.jsxs("div",{className:"collection",children:[t.jsx("h1",{children:"Products"}),t.jsx(o,{connection:e,resourcesClassName:"products-grid",children:({node:a,index:s})=>t.jsx(c,{product:a,loading:s<8?"eager":void 0},a.id)})]})}function c({product:e,loading:a}){const s=n(e.handle);return t.jsxs(r,{className:"product-item",prefetch:"intent",to:s,children:[e.featuredImage&&t.jsx(m,{alt:e.featuredImage.altText||e.title,aspectRatio:"1/1",data:e.featuredImage,loading:a,sizes:"(min-width: 45em) 400px, 100vw"}),t.jsx("h4",{children:e.title}),t.jsx("small",{children:t.jsx(l,{data:e.priceRange.minVariantPrice})})]},e.id)}export{p as default,g as meta};