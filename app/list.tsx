"use client"

import styles from "./page.module.css";
import Link from "next/link";

const dynamicList = [
    {
        href: "/",
        label: "Home"
    },
    {
        href: "/test1",
        label: "Page 1"
    },
    {
        href: "/test2",
        label: "Page 2"
    }
]

const List = () => {
   return (
       <>
           <h1>Non Dynamic List</h1>
           <ul className={styles.list}>
               <li>
                   <Link href={`/`}>
                       <span>Home</span>
                   </Link>
               </li><li>
               <Link href={`/test1`}>
                   <span>Page 1</span>
               </Link>
           </li>
               <li>
                   <Link href={`/test2`}>
                       <span>Page 2</span>
                   </Link>
               </li>
           </ul>

           <h1>Dynamic List</h1>
           <ul className={styles.list}>

               {dynamicList.map((element, index) => {
                   return (
                       <li key={index}>
                           <Link href={element.href}>
                               <span>{element.label}</span>
                           </Link>
                       </li>
                   )
               })}
           </ul>
       </>
   )
}

export default List;