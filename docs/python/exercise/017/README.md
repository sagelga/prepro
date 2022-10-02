# Temperature Converter
เป้าหมายคือการเปลี่ยนแปลงค่าเซลเซียส (Celsius) หรือ ฟาเรนไฮต์ (Fahrenheit) ที่ได้รับจาก Input มาเป็น Fahrenheit (หากรับมาเป็น Celsius) หรือ Celsius (หากรับมาเป็น Fahrenheit)

ซึ่งเราสามารถใช้สูตรในการแปลงค่าได้ดังนี้

![](./img/to_celsius.png)

![](./img/to_fahrenheit.png)

โดยที่
- T_C คือค่าอุณหภูมิแบบ Celsius
- T_F คือค่าอุณหภูมิแบบ Fahrenheit

## ข้อกำหนดและเงื่อนไข
- Input (integer) ค่าอุณหภูมิ โดยมีค่าตั้งแต่ -200 ถึง 200
- Input (string) ประเภทหน่วยอุณหภูมิของค่าที่รับเข้า (Input) โดยจะใช้
  - C สำหรับ Celsius และ
  - F สำหรับ Fahrenheit
- Output (float) ผลลัพท์จากการแปลง โดยปัดให้เหลือ 2 ตำแหน่งสุดท้าย พร้อมกับระบุประเภทหน่วยของอุณหภูมิ

## ตัวอย่าง Input / Output
```text
Input
100
C

Output
212.0 Fahrenheit
```

```text
Input
-40
F

Output
-40.0 Celsius
```
