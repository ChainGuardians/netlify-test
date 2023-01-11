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


           <h1>Deep Linking</h1>
           <ul className={styles.list}>
               <li>
                   <Link href={`/account`}>
                       <span>Account</span>
                   </Link>
               </li><li>
               <Link href={`/account/page1`}>
                   <span>Account 1</span>
               </Link>
           </li>
               <li>
                   <Link href={`/account/page2`}>
                       <span>Account 2</span>
                   </Link>
               </li>
           </ul>

       </>
   )
}

export default List;