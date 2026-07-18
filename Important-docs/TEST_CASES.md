| StoreFront Application Test Tracker |                                 |                                                     |                                            |        |
|-------------------------------------|---------------------------------|-----------------------------------------------------|--------------------------------------------|--------|
|                                     |                                 |                                                     |                                            |        |
| TC ID                               | Module                          | Test Scenario                                       | Expected Result                            | Status |
| TC-001                              | Module 1 – Application Launch   | Verify launch web application                       | Home page loads successfully               | Passed |
| TC-002                              | Module 1 – Application Launch   | Verify page title Shop                              | Correct page title displayed               | Passed |
| TC-004                              | Module 1 – Application Launch   | Verify default cart count                           | Cart displays (0)                          | Failed |
| TC-005                              | Module 1 – Application Launch   | Verify refresh application                          | Application reloads without errors         | Passed |
| TC-006                              | Module 2 – Product Listing      | Verify all products displayed                       | All 5 products visible                     | Passed |
| TC-007                              | Module 2 – Product Listing      | Verify product name                                 | Correct product names displayed            | Passed |
| TC-008                              | Module 2 – Product Listing      | Verify product prices                               | Prices match specification                 | Passed |
| TC-009                              | Module 2 – Product Listing      | Verify inventory count                              | Inventory displayed correctly              | Passed |
| TC-010                              | Module 2 – Product Listing      | Verify Add to Cart button                           | Button available for every product         | Passed |
| TC-011                              | Module 2 – Product Listing      | Verify product cards alignment                      | Cards aligned properly                     | Passed |
| TC-012                              | Module 2 – Product Listing      | Verify duplicate products                           | No duplicate products                      | Passed |
| TC-013                              | Module 2 – Product Listing      | Verify product ordering                             | Products appear in expected order          | Passed |
| TC-014                              | Module 3 – Product Inventory    | Verify Product with stock >0                        | Add button enabled                         | Failed |
| TC-015                              | Module 3 – Product Inventory    | Verify Product with stock =0                        | Cannot add to cart                         | Failed |
| TC-016                              | Module 3 – Product Inventory    | Verify stock label updates                          | Stock decreases after add                  | Passed |
| TC-017                              | Module 3 – Product Inventory    | Verify Add last available item                      | Inventory becomes zero                     | Passed |
| TC-018                              | Module 3 – Product Inventory    | Verify Attempt exceeding stock                      | Not allowed                                | Passed |
| TC-019                              | Module 3 – Product Inventory    | Verify Refresh page after stock update              | Stock persists if expected                 | Passed |
| TC-020                              | Module 3 – Product Inventory    | Verify inventory never negative                     | Stock never below zero                     | Passed |
| TC-021                              | Module 4 – Add to Cart          | Verify Add first item                               | Item added                                 | Passed |
| TC-022                              | Module 4 – Add to Cart          | Verify Add multiple different items                 | All appear in cart                         | Passed |
| TC-023                              | Module 4 – Add to Cart          | Verify Add same product twice                       | Quantity increases                         | Passed |
| TC-024                              | Module 4 – Add to Cart          | Verify Add every product                            | All items added                            | Passed |
| TC-025                              | Module 4 – Add to Cart          | Verify Add unavailable item                         | Cannot add                                 | Failed |
| TC-026                              | Module 4 – Add to Cart          | Verify Rapid multiple clicks                        | Quantity never exceeds inventory           | Passed |
| TC-027                              | Module 4 – Add to Cart          | Verify Cart opens correctly                         | Added items visible                        | Passed |
| TC-028                              | Module 4 – Add to Cart          | Verify item subtotal                                | Correct calculation                        | Passed |
| TC-029                              | Module 5 – Cart Indicator       | Verify Empty cart                                   | Cart(0)                                    | Failed |
| TC-030                              | Module 5 – Cart Indicator       | Verify Add one item                                 | Cart(1)                                    | Failed |
| TC-031                              | Module 5 – Cart Indicator       | Verify Add multiple quantities                      | Count equals total quantity                | Passed |
| TC-032                              | Module 5 – Cart Indicator       | Verify Remove one item                              | Count decreases                            | Passed |
| TC-033                              | Module 5 – Cart Indicator       | Verify Remove all items                             | Cart(0)                                    | Passed |
| TC-034                              | Module 5 – Cart Indicator       | Verify Refresh cart page                            | Count remains accurate                     | Passed |
| TC-035                              | Module 6 – Cart Page            | Verify Open cart                                    | Cart page loads                            | Passed |
| TC-036                              | Module 6 – Cart Page            | Verify Empty cart view                              | Empty state shown                          | Passed |
| TC-037                              | Module 6 – Cart Page            | Verify product rows                                 | Products listed correctly                  | Passed |
| TC-038                              | Module 6 – Cart Page            | Verify quantity controls                            | + and - visible                            | Passed |
| TC-039                              | Module 6 – Cart Page            | Verify Remove button                                | Remove visible                             | Passed |
| TC-040                              | Module 6 – Cart Page            | Verify subtotal display                             | Correct subtotal                           | Passed |
| TC-041                              | Module 7 – Quantity Update      | Verify Increase quantity                            | Quantity increases                         | Passed |
| TC-042                              | Module 7 – Quantity Update      | Verify Decrease quantity                            | Quantity decreases                         | Passed |
| TC-043                              | Module 7 – Quantity Update      | Verify Quantity reaches zero                        | Item removed or zero handled               | Passed |
| TC-044                              | Module 7 – Quantity Update      | Verify Increase beyond inventory                    | Not allowed                                | Passed |
| TC-045                              | Module 7 – Quantity Update      | Verify Rapid increment                              | Inventory respected                        | Passed |
| TC-046                              | Module 7 – Quantity Update      | Verify Rapid decrement                              | No negative quantity                       | Passed |
| TC-047                              | Module 7 – Quantity Update      | Verify Update multiple items                        | Totals update correctly                    | Passed |
| TC-048                              | Module 7 – Quantity Update      | Verify subtotal after update                        | Correct calculation                        | Passed |
| TC-049                              | Module 8 – Remove Item          | Verify Remove one item                              | Item removed                               | Passed |
| TC-050                              | Module 8 – Remove Item          | Verify Remove last item                             | Cart empty                                 | Passed |
| TC-051                              | Module 8 – Remove Item          | Verify Remove middle item                           | Remaining items unchanged                  | Passed |
| TC-052                              | Module 8 – Remove Item          | Verify Remove repeatedly                            | No errors                                  | Passed |
| TC-053                              | Module 8 – Remove Item          | Verify Remove updates total                         | Total recalculated                         | Passed |
| TC-054                              | Module 9 – Discount Code        | Verify Apply SAVE10                                 | 10% discount applied                       | Passed |
| TC-055                              | Module 9 – Discount Code        | Verify Discount recalculates subtotal               | Correct                                    | Passed |
| TC-056                              | Module 9 – Discount Code        | Verify Total updated                                | Correct                                    | Passed |
| TC-057                              | Module 9 – Discount Code        | Verify Tax recalculated                             | Correct                                    | Passed |
| TC-058                              | Module 9 – Discount Code        | Verify Shipping unchanged                           | $5                                         | Passed |
| TC-059                              | Module 9 – Discount Code        | Verify Invalid code                                 | Error displayed                            | Passed |
| TC-060                              | Module 9 – Discount Code        | Verify Empty code                                   | Validation shown                           | Passed |
| TC-061                              | Module 9 – Discount Code        | Verify Spaces only                                  | Invalid                                    | Passed |
| TC-062                              | Module 9 – Discount Code        | Verify Lowercase save10                             | Case behavior verified                     | Passed |
| TC-063                              | Module 9 – Discount Code        | Verify Mixed case                                   | Correct handling                           | Passed |
| TC-064                              | Module 9 – Discount Code        | Verify Special characters                           | Invalid                                    | Passed |
| TC-065                              | Module 9 – Discount Code        | Verify SQL injection string                         | Safe rejection                             | Passed |
| TC-066                              | Module 9 – Discount Code        | Verify HTML input                                   | Escaped safely                             | Passed |
| TC-067                              | Module 9 – Discount Code        | Verify Apply twice                                  | No stacking                                | Passed |
| TC-068                              | Module 9 – Discount Code        | Verify Multiple discount attempts                   | Only one valid discount                    | Passed |
| TC-069                              | Module 10 – Price Calculation   | Verify Single product subtotal                      | Correct                                    | Passed |
| TC-070                              | Module 10 – Price Calculation   | Verify Multiple products subtotal                   | Correct                                    | Passed |
| TC-071                              | Module 10 – Price Calculation   | Verify Large quantities                             | Correct                                    | Passed |
| TC-072                              | Module 10 – Price Calculation   | Verify Decimal calculations                         | Accurate                                   | Passed |
| TC-073                              | Module 10 – Price Calculation   | Verify Discount applied                             | Correct                                    | Passed |
| TC-074                              | Module 10 – Price Calculation   | Verify Tax applied                                  | 8%                                         | Passed |
| TC-075                              | Module 10 – Price Calculation   | Verify Shipping added                               | $5                                         | Passed |
| TC-076                              | Module 10 – Price Calculation   | Verify Final total                                  | Formula correct                            | Failed |
| TC-077                              | Module 10 – Price Calculation   | Verify Total updates after remove                   | Correct                                    | Failed |
| TC-078                              | Module 10 – Price Calculation   | Verify Total updates after quantity change          | Correct                                    | Failed |
| TC-079                              | Module 11 – Tax                 | Verify tax rate                                     | 8%                                         | Passed |
| TC-080                              | Module 11 – Tax                 | Verify Tax after discount                           | Correct                                    | Failed |
| TC-081                              | Module 11 – Tax                 | Verify Tax with one item                            | Correct                                    | Failed |
| TC-082                              | Module 11 – Tax                 | Verify Tax with many items                          | Correct                                    | Failed |
| TC-083                              | Module 11 – Tax                 | Verify Decimal rounding                             | Correct                                    | Failed |
| TC-084                              | Module 12 – Shipping            | Verify Fixed shipping                               | $5                                         | Failed |
| TC-085                              | Module 12 – Shipping            | Verify Shipping with discount                       | Still $5                                   | Passed |
| TC-086                              | Module 12 – Shipping            | Verify Shipping after remove                        | Still $5                                   | Passed |
| TC-087                              | Module 12 – Shipping            | Verify Shipping empty cart                          | Business rule verified                     | Passed |
| TC-088                              | Module 13 – Checkout Page       | Verify Checkout page loads                          | Success                                    | Passed |
| TC-089                              | Module 13 – Checkout Page       | Verify Full Name field visible                      | Yes                                        | Passed |
| TC-090                              | Module 13 – Checkout Page       | Verify Email field visible                          | Yes                                        | Passed |
| TC-091                              | Module 13 – Checkout Page       | Verify Gift message visible                         | Yes                                        | Passed |
| TC-092                              | Module 13 – Checkout Page       | Verify Place Order button                           | Visible                                    | Passed |
| TC-093                              | Module 14 – Checkout Validation | Verify Empty name                                   | Validation                                 | Passed |
| TC-094                              | Module 14 – Checkout Validation | Verify Spaces only                                  | Validation                                 | Passed |
| TC-095                              | Module 14 – Checkout Validation | Verify Valid name                                   | Accepted                                   | Passed |
| TC-096                              | Module 14 – Checkout Validation | Verify Long name                                    | Accepted                                   | Passed |
| TC-097                              | Module 14 – Checkout Validation | Verify Numeric name                                 | Validation if required                     | Passed |
| TC-098                              | Module 14 – Checkout Validation | Verify Special characters                           | Expected behavior                          | Passed |
| TC-099                              | Module 14 – Checkout Validation | Verify Empty email                                  | Validation                                 | Passed |
| TC-100                              | Module 14 – Checkout Validation | Verify Valid email                                  | Accepted                                   | Passed |
| TC-101                              | Module 14 – Checkout Validation | Verify Missing @                                    | Invalid                                    | Failed |
| TC-102                              | Module 14 – Checkout Validation | Verify Missing domain                               | Invalid                                    | Passed |
| TC-103                              | Module 14 – Checkout Validation | Verify Invalid format                               | Invalid                                    | Passed |
| TC-104                              | Module 14 – Checkout Validation | Verify Uppercase email                              | Accepted                                   | Passed |
| TC-105                              | Module 14 – Checkout Validation | Verify Leading spaces                               | Trimmed                                    | Passed |
| TC-106                              | Module 14 – Checkout Validation | Verify Trailing spaces                              | Trimmed                                    | Passed |
| TC-107                              | Module 14 – Checkout Validation | Verify Empty message                                | Allowed                                    | Passed |
| TC-108                              | Module 14 – Checkout Validation | Verify Normal text                                  | Saved                                      | Passed |
| TC-109                              | Module 14 – Checkout Validation | Verify Long message                                 | Handled                                    | Passed |
| TC-110                              | Module 14 – Checkout Validation | Verify Emoji                                        | Accepted                                   | Passed |
| TC-111                              | Module 14 – Checkout Validation | Verify HTML                                         | Escaped                                    | Passed |
| TC-112                              | Module 14 – Checkout Validation | Verify SQL injection                                | Safe                                       | Passed |
| TC-113                              | Module 15 – Place Order         | Verify Valid checkout                               | Order placed                               | Passed |
| TC-114                              | Module 15 – Place Order         | Verify Invalid name                                 | Prevent submission                         | Passed |
| TC-115                              | Module 15 – Place Order         | Verify Invalid email                                | Prevent submission                         | Passed |
| TC-116                              | Module 15 – Place Order         | Verify Double click Place Order                     | Single order                               | Passed |
| TC-117                              | Module 15 – Place Order         | Verify Refresh confirmation                         | Expected behavior                          | Passed |
| TC-118                              | Module 15 – Place Order         | Verify Back button                                  | Expected behavior                          | Passed |
| TC-119                              | Module 16 – Order Confirmation  | Verify Confirmation page opens                      | Success                                    | Passed |
| TC-120                              | Module 16 – Order Confirmation  | Verify Customer name shown                          | Correct                                    | Passed |
| TC-121                              | Module 16 – Order Confirmation  | Verify Purchased items listed                       | Correct                                    | Passed |
| TC-122                              | Module 16 – Order Confirmation  | Verify Quantities shown                             | Correct                                    | Passed |
| TC-123                              | Module 16 – Order Confirmation  | Verify Final total shown                            | Correct                                    | Passed |
| TC-124                              | Module 16 – Order Confirmation  | Verify Gift message displayed                       | If provided                                | Passed |
| TC-125                              | Module 17 – UI Testing          | Verify Buttons aligned                              | Yes                                        | Passed |
| TC-126                              | Module 17 – UI Testing          | Verify Inputs aligned                               | Yes                                        | Passed |
| TC-127                              | Module 17 – UI Testing          | Verify Prices aligned                               | Yes                                        | Passed |
| TC-128                              | Module 17 – UI Testing          | Verify Responsive layout                            | No overlap                                 | Passed |
| TC-129                              | Module 17 – UI Testing          | Verify Font consistency                             | Consistent                                 | Passed |
| TC-130                              | Module 17 – UI Testing          | Verify Button hover                                 | Correct                                    | Passed |
| TC-131                              | Module 17 – UI Testing          | Verify Disabled buttons                             | Styled correctly                           | Passed |
| TC-132                              | Module 17 – UI Testing          | Verify Error messages                               | Visible and readable                       | Passed |
| TC-133                              | Module 18 – Boundary Testing    | Verify Quantity = 1                                 | Works                                      | Passed |
| TC-134                              | Module 18 – Boundary Testing    | Verify Quantity = inventory                         | Works                                      | Passed |
| TC-135                              | Module 18 – Boundary Testing    | Verify Quantity = inventory+1                       | Blocked                                    | Passed |
| TC-136                              | Module 18 – Boundary Testing    | Verify Empty cart checkout                          | Prevented                                  | Passed |
| TC-137                              | Module 18 – Boundary Testing    | Verify Max gift message                             | Handled                                    | Passed |
| TC-138                              | Module 18 – Boundary Testing    | Verify Max name length                              | Accepted or validated                      | Passed |
| TC-139                              | Module 18 – Boundary Testing    | Verify Max email length                             | Accepted or validated                      | Passed |
| TC-140                              | Module 19 – Negative Testing    | Verify Browser refresh during checkout              | No corruption                              | Passed |
| TC-141                              | Module 19 – Negative Testing    | Verify Multiple tabs                                | Cart consistency verified                  | Passed |
| TC-142                              | Module 19 – Negative Testing    | Verify Rapid clicking Add                           | Stable                                     | Passed |
| TC-143                              | Module 19 – Negative Testing    | Verify Rapid clicking Checkout                      | Stable                                     | Passed |
| TC-144                              | Module 19 – Negative Testing    | Verify JavaScript console errors                    | None                                       | Passed |
| TC-145                              | Module 19 – Negative Testing    | Verify Invalid discount after valid                 | Correct behavior                           | Passed |
| TC-146                              | Module 19 – Negative Testing    | Verify Remove item during discount                  | Total recalculated                         | Passed |
| TC-147                              | Module 19 – Negative Testing    | Verify Empty all fields                             | Validation                                 | Passed |
| TC-170                              | Module 2 – Product Listing      | Verify no broken images                             | Images load correctly                      | Passed |
| TC-171                              | Module 2 – Product Listing      | Verify price always has 2 decimal places            | Currency formatted correctly               | Passed |
| TC-172                              | Module 2 – Product Listing      | Verify product names are unique                     | No duplicate products                      | Passed |
| TC-173                              | Module 2 – Product Listing      | Verify Add to Cart button text                      | Button label is correct                    | Passed |
| TC-174                              | Module 2 – Product Listing      | Verify inventory label format                       | "In stock: X" displayed correctly          | Passed |
| TC-175                              | Module 2 – Product Listing      | Verify page after browser zoom                      | Layout remains usable                      | Passed |
| TC-176                              | Module 4 – Add to Cart          | Verify Add product until stock exhausted            | Last item can be added                     | Passed |
| TC-177                              | Module 4 – Add to Cart          | Verify Attempt another add after stock exhausted    | Blocked                                    | Passed |
| TC-178                              | Module 4 – Add to Cart          | Verify Add all products one by one                  | Cart updates correctly                     | Passed |
| TC-179                              | Module 4 – Add to Cart          | Verify Navigate away and return                     | Cart retained (if persistence expected)    | Passed |
| TC-180                              | Module 4 – Add to Cart          | Verify Add item after removing same item            | Works correctly                            | Passed |
| TC-181                              | Module 6 – Cart Page            | Verify cart row ordering                            | Matches order added (or defined order)     | Passed |
| TC-182                              | Module 6 – Cart Page            | Verify price per item                               | Correct                                    | Passed |
| TC-183                              | Module 6 – Cart Page            | Verify quantity displayed correctly                 | Accurate                                   | Passed |
| TC-184                              | Module 6 – Cart Page            | Verify subtotal per line item                       | Correct                                    | Passed |
| TC-185                              | Module 6 – Cart Page            | Verify currency symbol                              | "$" displayed consistently                 | Passed |
| TC-186                              | Module 7 – Quantity Update      | Verify Click minus when quantity=1                  | Removes item or prevents decrement below 1 | Passed |
| TC-187                              | Module 7 – Quantity Update      | Verify Hold + button continuously                   | Inventory respected                        | Passed |
| TC-188                              | Module 7 – Quantity Update      | Verify Hold - button continuously                   | Quantity never negative                    | Passed |
| TC-189                              | Module 7 – Quantity Update      | Verify Alternate + and - rapidly                    | Correct quantity maintained                | Passed |
| TC-190                              | Module 7 – Quantity Update      | Verify Quantity update recalculates tax immediately | Tax updated                                | Passed |
| TC-191                              | Module 8 – Remove Item          | Verify Remove first item                            | Remaining items intact                     | Passed |
| TC-192                              | Module 8 – Remove Item          | Verify Remove last item                             | Cart empty                                 | Passed |
| TC-193                              | Module 8 – Remove Item          | Verify Remove all items individually                | Empty cart displayed                       | Passed |
| TC-194                              | Module 8 – Remove Item          | Verify Remove after discount applied                | Discount recalculated correctly            | Passed |
| TC-195                              | Module 8 – Remove Item          | Verify Remove during checkout                       | Application behaves correctly              | Passed |
| TC-196                              | Module 9 – Discount Code        | Verify Leading spaces before SAVE10                 | Trimmed or rejected per requirement        | Passed |
| TC-197                              | Module 9 – Discount Code        | Verify Trailing spaces                              | Same behavior                              | Passed |
| TC-198                              | Module 9 – Discount Code        | Verify SAVE10 twice                                 | Discount applied once                      | Passed |
| TC-199                              | Module 9 – Discount Code        | Verify Invalid then valid                           | Valid works                                | Passed |
| TC-200                              | Module 9 – Discount Code        | Verify Valid then invalid                           | Previous discount handling verified        | Passed |
| TC-201                              | Module 9 – Discount Code        | Verify Apply discount on empty cart                 | Prevented or handled                       | Passed |
| TC-202                              | Module 9 – Discount Code        | Verify Discount after quantity update               | Recalculated                               | Passed |
| TC-203                              | Module 9 – Discount Code        | Verify Discount after remove                        | Recalculated                               | Passed |
| TC-204                              | Module 10 – Price Calculation   | Verify Subtotal becomes zero                        | Total reflects shipping rule               | Passed |
| TC-205                              | Module 10 – Price Calculation   | Verify Large subtotal                               | Correct calculation                        | Passed |
| TC-206                              | Module 10 – Price Calculation   | Verify Decimal multiplication                       | Correct rounding                           | Passed |
| TC-207                              | Module 10 – Price Calculation   | Verify Tax rounded to 2 decimals                    | Currency formatting                        | Passed |
| TC-208                              | Module 10 – Price Calculation   | Verify Total rounded to 2 decimals                  | Currency formatting                        | Passed |
| TC-209                              | Module 13 – Checkout Page       | Verify Open checkout with empty cart                | Blocked                                    | Passed |
| TC-210                              | Module 13 – Checkout Page       | Verify Checkout after removing all items            | Blocked                                    | Passed |
| TC-211                              | Module 13 – Checkout Page       | Verify Checkout after discount                      | Total preserved                            | Passed |
| TC-212                              | Module 13 – Checkout Page       | Verify Checkout after browser refresh               | Data retained or reset as specified        | Passed |
| TC-213                              | Module 13 – Checkout Page       | Verify Back to cart from checkout                   | Cart preserved                             | Passed |
| TC-214                              | Module 14 – Checkout Validation | Verify One character name                           | Validation                                 | Passed |
| TC-215                              | Module 14 – Checkout Validation | Verify Hyphenated name                              | Accepted                                   | Passed |
| TC-216                              | Module 14 – Checkout Validation | Verify Apostrophe in name                           | Accepted                                   | Passed |
| TC-217                              | Module 14 – Checkout Validation | Verify Unicode name                                 | Accepted                                   | Passed |
| TC-218                              | Module 14 – Checkout Validation | Verify Numbers only                                 | Validation                                 | Passed |
| TC-219                              | Module 14 – Checkout Validation | Verify Symbols only                                 | Validation                                 | Passed |
| TC-220                              | Module 14 – Checkout Validation | Verify user@test.com                                | Accepted                                   | Failed |
| TC-221                              | Module 14 – Checkout Validation | Verify user.name@test.com                           | Accepted                                   | Passed |
| TC-222                              | Module 14 – Checkout Validation | Verify user+1@test.com                              | Accepted                                   | Passed |
| TC-223                              | Module 14 – Checkout Validation | Verify user@test                                    | Invalid                                    | Passed |
| TC-224                              | Module 14 – Checkout Validation | Verify @test.com                                    | Invalid                                    | Passed |
| TC-225                              | Module 14 – Checkout Validation | Verify user@.com                                    | Invalid                                    | Passed |
| TC-226                              | Module 14 – Checkout Validation | Verify user@@test.com                               | Invalid                                    | Passed |
| TC-227                              | Module 14 – Checkout Validation | Verify user test@test.com                           | Invalid                                    | Passed |
| TC-228                              | Module 14 – Checkout Validation | Verify Unicode email                                | Validate per implementation                | Passed |
| TC-229                              | Module 14 – Checkout Validation | Verify 1 character gift message                     | Accepted                                   | Passed |
| TC-230                              | Module 14 – Checkout Validation | Verify Very long message                            | Handled                                    | Passed |
| TC-231                              | Module 14 – Checkout Validation | Verify Only spaces                                  | Trimmed or accepted                        | Passed |
| TC-232                              | Module 14 – Checkout Validation | Verify New lines                                    | Preserved if supported                     | Passed |
| TC-235                              | Module 15 – Place Order         | Verify Press Enter to submit                        | Order placed if valid                      | Passed |
| TC-236                              | Module 15 – Place Order         | Verify Double-click Place Order                     | Single order created                       | Passed |
| TC-237                              | Module 15 – Place Order         | Verify Triple-click                                 | Single order                               | Passed |
| TC-238                              | Module 15 – Place Order         | Verify Refresh immediately after submit             | No duplicate orders                        | Passed |
| TC-239                              | Module 16 – Order Confirmation  | Verify thank-you message                            | Displayed                                  | Passed |
| TC-240                              | Module 16 – Order Confirmation  | Verify order summary                                | Correct                                    | Passed |
| TC-241                              | Module 16 – Order Confirmation  | Verify customer name                                | Correct                                    | Passed |
| TC-242                              | Module 16 – Order Confirmation  | Verify quantities                                   | Correct                                    | Passed |
| TC-243                              | Module 16 – Order Confirmation  | Verify total                                        | Correct                                    | Passed |
| TC-244                              | Module 16 – Order Confirmation  | Verify gift message                                 | Displayed if entered                       | Passed |
| TC-245                              | Module 20 - Navigation          | Verify Shop to Cart navigation                      | Navigation works                           | Passed |
| TC-246                              | Module 20 - Navigation          | Verify Cart to Shop navigation                      | Navigation works                           | Passed |
| TC-247                              | Module 20 - Navigation          | Verify Cart to Checkout navigation                  | Works                                      | Passed |
| TC-248                              | Module 20 - Navigation          | Verify Checkout to Shop navigation                  | Works if allowed                           | Passed |
| TC-249                              | Module 20 - Navigation          | Verify Browser Back                                 | Works correctly                            | Passed |
| TC-250                              | Module 20 - Navigation          | Verify Browser Forward                              | Works correctly                            | Passed |
| TC-251                              | Module 21 - Persistence         | Verify Refresh Shop page                            | Cart retained if specified                 | Passed |
| TC-252                              | Module 21 - Persistence         | Verify Refresh Cart page                            | Cart retained                              | Passed |
| TC-253                              | Module 21 - Persistence         | Verify Refresh Checkout                             | Form behavior verified                     | Passed |
| TC-254                              | Module 21 - Persistence         | Verify Open new tab                                 | Cart persistence verified                  | Passed |
| TC-255                              | Module 21 - Persistence         | Verify Close and reopen browser                     | Persistence verified if supported          | Passed |
| TC-256                              | Module 17 – UI Testing          | Verify Button disabled style                        | Correct                                    | Passed |
| TC-257                              | Module 17 – UI Testing          | Verify Focus indicator                              | Visible                                    | Passed |
| TC-258                              | Module 17 – UI Testing          | Verify Tab navigation                               | Logical order                              | Passed |
| TC-259                              | Module 17 – UI Testing          | Verify Error message color                          | Visible                                    | Passed |
| TC-260                              | Module 17 – UI Testing          | Verify Input placeholders                           | Correct                                    | Passed |
| TC-261                              | Module 17 – UI Testing          | Verify Alignment on small screen                    | Correct                                    | Passed |
| TC-262                              | Module 17 – UI Testing          | Verify Alignment on large screen                    | Correct                                    | Passed |
