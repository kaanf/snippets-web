// This snippet file was generated by processing the source file:
// ./firestore-next/test.firestore.js
//
// To make edits to the snippets in this file, please edit the source

// [START modular_order_and_end]
import { query, orderBy, endAt } from "firebase/firestore";  

const q = query(citiesRef, orderBy("population"), endAt(1000000));
// [END modular_order_and_end]