// This snippet file was generated by processing the source file:
// ./firestore-next/test.solution-arrays.js
//
// To make edits to the snippets in this file, please edit the source

// [START modular_query_in_category_timestamp_invalid]
import { collection, query, where, orderBy, FirebaseFirestore } from "@firebase/firestore";

const q = query(collection(db, "posts"),
    where("categories.cats", "==", true),
    orderBy("timestamp"));
// [END modular_query_in_category_timestamp_invalid]