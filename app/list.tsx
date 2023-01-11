"use client"

import styles from "./page.module.css";
import Link from "next/link";

const List = () => {
   return (
       <>
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

               <li>
                   <Link href={`/test3`}>
                       <span>Page 3</span>
                   </Link>
               </li>
           </ul>

       </>
   )
}

export default List;