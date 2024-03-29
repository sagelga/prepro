# Number to Roman converter
ให้ทำการสร้างอัลกอริทึมในการแปลงตัวเลขมาเป็นเลขโรมัน โดยจะมีตัวอักษรโรมันทั้งหมด 7 ตัวอักษร


โดยแต่ละค่านั้นมีค่าดังต่อไปนี้

| ตัวเลข | เครื่องหมาย      |
|-------|----------------|
| 1     | I              |
| 5     | V              |
| 10    | X              |
| 50    | L              |
| 100   | C              |
| 500   | D              |
| 1000  | M              |

**เขียนซ้ำตัวอักษร**นั้นเมื่อเราต้องการเลขนั้นมากกว่า 1 ก็สามารถอย่างเช่น

- II = 1 + 1 = 2
- XXX = 10 + 10 + 10 = 30
- XXIII = 10 + 10 + 1 + 1 + 1 = 23

แต่จะมีเงื่อนไขในการเขียนตัวเลขซ้ำดังนี้
- ไม่สามารถเขียนสัญลักษณ์เลขโรมันเดียวกันติดกันได้มากกว่า 3 ตัว
- โดยทั่วไปแล้ว จะเขียนสัญลักษณ์เลขโรมันโดยเริ่มจากค่าสูงสุดไปต่ำสุด
- ไม่ให้ซ้ำเลขจำนวน 5, 50, 500 สองครั้งเพื่อทำให้เป็น 10, 100, 1000

**ถ้าเลขโรมันตัวหน้ามีค่ามากกว่าตัวหลัง** ให้นำ "ค่าตัวหลัง + ตัวหน้า"

- VI → 5 + 1 = 6
- XI → 10 + 1 = 11
- XXI → 10 + 10 + 1 = 21
- MMXXII→ 1000 + 1000 + 10 + 10 + 1 + 1 = 2022

**ถ้าเลขโรมันตัวหน้ามีค่าน้อยกว่าตัวหลัง** ให้นำ "ค่าตัวหลัง - ตัวหน้า"

- IV → 5 - 1 = 4
- IX → 10 - 1 = 9
- XL → 50 - 10 = 40

**หากตัวเลขมากกว่า 3999** ให้ทำการซ้ำตัวอักษร และใช้ overline ในการ x1000 ตัวอักษรนั้น
- <span class="overline">V</span> → 5 x 1000 = 5000
- <span class="overline">M</span> → 1000 x 1000 = 1,000,000
- <span class="overline">CM</span> → (1000 x 1000) - (500 x 1000) = 900,000

และใช้ซ้ำเป็นสองชั้นเพื่อ x1000 อีกหนึ่งครั้ง
## ข้อกำหนดและเงื่อนไข
## ตัวอย่าง Input / Output
## Input / Output
- Input: ตัวเลขจำนวนเต็มบวกระหว่าง 1 ถึง 3999
- Output: ตัวเลขโรมัน

## Sample Input / Output
```text
Input
12

Output
XII
```

```text
Input
69

Output
LXIX
```

```text
Input
2022

Output
MMXXII
```

```text
Input
3999

Output
MMMCMXCIX
```
