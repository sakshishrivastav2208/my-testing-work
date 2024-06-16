##SOME MANUAL TESTING TEST CASES##
There is one page containing distance input field, floors input field , weekend radio button (yes or no)  and submit button and the requirement /acceptance criteria points are - 
ABC Delivery Pricing:(all fields are required fields)
If the dist is < 10 km from office the base cost of the delivery is Rs 10.00
If the dist is >= 10 km from office the base cost of the delivery is Rs. 25.00
If the delivery person has to climb more than 3 floors, there is an additional charge of Rs. 10.00
If the delivery occurs on the weekend the cost of the delivery is a flat rate of Rs. 50.00

TC01: Test with distance < 10 km, floors ≤ 3, and not on a weekend.
(Distance: 5 km,Floors: 1,Weekend: No )
Expected Output: Rs. 10.00

TC02: Test with distance >= 10 km, floors ≤ 3, and not on a weekend.
(Distance: 15 km,Floors: 2,Weekend: No )
Expected Output: Rs. 25.00

TC03: Test with distance < 10 km, floors > 3, and not on a weekend.
(Distance: 8 km,Floors: 4,Weekend: No )
Expected Output: Rs. 20.00

TC04: Test with distance >= 10 km, floors > 3, and not on a weekend.
(Distance: 12 km,Floors: 5,Weekend: No )
Expected Output: Rs. 35.00

TC05: Test with distance < 10 km, floors ≤ 3, and on a weekend.
(Distance: 7 km,Floors: 2,Weekend: Yes )
Expected Output: Rs. 50.00

TC06: Test with distance >= 10 km, floors > 3, and on a weekend.
(Distance: 15 km,,Floors: 5,Weekend: Yes )
Expected Output: Rs. 50.00

TC07:Test with distance exactly 10 km, floors ≤ 3, and not on a weekend.
(Distance: 10 km,Floors: 3,Weekend: No )
Expected Output: Rs. 25.00

TC08: Test with distance exactly 10 km, floors > 3, and not on a weekend.
(Distance: 10 km,Floors: 4,Weekend: No )
Expected Output: Rs. 35.00

TC09: Test with distance 0 km, floors 0, and not on a weekend.
(Distance: 0 km,Floors: 0,Weekend: No )
Expected Output: Rs. 10.00

TC10: Test with distance 0 km, floors > 3, and on a weekend.
(Distance: 0 km,Floors: 4,Weekend: Yes )
Expected Output: Rs. 50.00





