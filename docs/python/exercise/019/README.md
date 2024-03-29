# Least Commmon Multiple
Least Common Multiple หรือคูณร่วมน้อย (มักเรียกแบบย่อว่า ค.ร.น.) หมายถึงจำนวนที่น้อยที่สุดที่จำนวนเหล่านั้นมาหารได้ลงตัว หรือจำนวนที่น้อยที่สุดที่มีจำนวนเหล่านั้นเป็นตัวประกอบ

เราสามารถหาค่า ค.ร.น. ของค่าสองจำนวนขึ้นไปได้หลายวิธี ซึ่งเราจะเสนอหนึ่งในวิธีเป็นวิธีการหาจากตัวประกอบของค่าตัวเลข โดยหาได้โดยการทำดังต่อไปนี้
1. หาว่าจำนวนนับที่กำหนดมาให้เป็นตัวประกอบของจำนวนใดบ้าง
2. หาตัวคูณร่วมของข้อ 1
3. นำตัวคูณร่วมที่มีค่าน้อยที่สุดในข้อ 2 เป็น ค.ร.น.

ตัวอย่าง จงหา ค.ร.น. ของ 12 , 18
- 12 เป็นตัวประกอบของ 12 , 24 , 36 , 48 , 60 , 72 , ...
- 18 เป็นตัวประกอบของ 18 , 36 , 54 , 72 , 90 , ...
- ตัวคูณร่วมของ 12 และ 18 คือ 36 ,72 , ...
- ดังนั้น ค.ร.น. ของ 12 และ 18 คือ 36
<!-- ![](./img/greatest_common_divisor.svg) -->

## ข้อกำหนดและเงื่อนไข
- Input (integer) ค่าตัวเลขจำนวนบวกลำดับที่หนึ่ง มีค่าตั้งแต่ 1 ถึง 1000
- Input (integer) ค่าตัวเลขจำนวนบวกลำดับที่สอง มีค่าตั้งแต่ 1 ถึง 1000
- Output (float) ผลลัพท์ตัวคูณสูงสุดที่มีค่าน้อยที่สุด

## ตัวอย่าง Input / Output
```text
Input
16
24

Output
48
```

```text
Input
10
12

Output
60
```
