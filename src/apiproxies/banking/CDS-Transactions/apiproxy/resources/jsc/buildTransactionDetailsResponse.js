 /*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

/**
 * @file
 * buildTransactionDetailsResponse.js
 * Format response according to Get Transaction Details spec
 */


// The result of the JSONPath expression is always an array (of TransactionDetails in this case),
// but the transaction details response needs the transactionDetails element
var theTransactionDetails = JSON.parse(context.getVariable("theTransactionDetails"));

// Verify that the accountId this tx belongs to matches the acctId found in the request URI
var accountMatches =  ((typeof theTransactionDetails !== 'undefined') && (theTransactionDetails.length > 0 ) && (theTransactionDetails[0].accountId == context.getVariable("theAccountId")));

var txDetails = {};
if (accountMatches) {
    txDetails.data = theTransactionDetails[0];
}
context.setVariable("response.content",JSON.stringify(txDetails));
    