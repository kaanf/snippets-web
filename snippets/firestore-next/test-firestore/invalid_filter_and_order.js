// This snippet file was generated by processing the source file:
// ./firestore-next/test.firestore.js
//
// To make edits to the snippets in this file, please edit the source

// [START modular_invalid_filter_and_order]
import { query, where, orderBy } from "firebase/firestore";  

const q = query(citiesRef, where("population", ">", 100000), orderBy("country"));
// [END modular_invalid_filter_and_order]