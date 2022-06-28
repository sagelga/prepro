# ตัวอักษรและสตริง
น้องๆ ก็ได้เรียนไปแล้วถึงประเภทของตัวแปร วันนี้จะมาเรียนรู้ว่าเราจะทำอะไรได้กับตัวแปรแบบ String กันบ้าง

แต่พี่มงต้องอธิบายก่อนนะครับว่า String คืออะไร

String คือ**กลุ่ม**ของตัวอักษร (Character) อย่างน้อย 2 ตัวอักษรเป็นต้นไป (หมายความว่า String จะถูกเรียกว่า Character เมื่อมีตัวอักษรเพียงตัวเดียวเท่านั้น)

::: tip
ความหมายและการใช้งานของ Character นั้นคล้ายกับ String มากเลย
ในภาษา Python นั้นก็ถือว่าเทียบเป็นประเภทเดียวกันเลยด้วยซำ้ครับ
:::

# String Concatination
Concatenation นั้นหมายถึงการนำ string มาแปะเข้าด้วยกัน [[Wikipedia.com]](https://en.wikipedia.org/wiki/Concatenation)

น้องสามารถทำการเอา String มาแปะกันได้ โดยการใช้เครื่องหมายบวก (`+`)

ตัวอย่างเช่น
```python
text = "Hello"
text2 = "World"
print(text + text2) # Returns "HelloWorld"
```

หรือน้องๆสามารถใช้เครื่องหมาย , เพื่อทำการเอามาแปะกัน <br>
แต่ว่าจะแตกต่างจาก + นั่นคือ **เอาไปแปะแล้วมี Space ด้วย 1 ตัว**

ตัวอย่างเช่น
```python
text = "Hello"
text2 = "World"
print(text, text2) # Returns "Hello World"
```

แต่ในตัวอย่างนี้
```python
text1 = "Hello"
text2 = "World"
text3 = text1, text2 # Returns ('Hello', 'World')
```

แล้วทำไมมันไม่ได้เหมือน `print(text1, text2)` หล่ะครับ<br>
นั่นก็เพราะว่า เขียนแบบนั้น ก็หมายถึงการให้ตัวแปร `text1` และ `text2` ไปจัดเก็บอยู่ในตัวแปร `text3` นั่นเอง

แต่เอาเป็นว่า มันได้ค่าไม่เท่ากันครับ ไว้ใน lecture หน้าๆจะมาอธิบายครับ

## Integer Concatination
พี่มงบอกเองไม่ใช่เหรอ ว่าเอา String มาทำอะไรกับตัวเลขไม่ได้<br>
แต่ก็ยังมีข้อยกเว้นอยู่นะครับ เมื่อเอา String มายุ่งกับ Integer ตัวอย่างเช่น
```python
text = "Kumamon"
print(text * 5) # Returns "KumamonKumamonKumamonKumamonKumamon"
```

ซึ่งการคูณแบบนี้ Python จะคิดว่าให้ทำการ copy และแปะตัว string นั้น 5 รอบ

::: tip Challenge
น้องลองคิดดูซิ ว่าถ้าพี่เขียนแบบนี้
```python
text = "Kumamon"
print(5 * text)
```
แล้วจะรันผ่าน และได้ผลลัพท์เหมือน `print(text * 5)` หรือเปล่า
:::

แล้วทำไมอันนี้ มันไม่ทำงานหล่ะครับ ???
```python
text = "kuma"
text2 = "mon"
print(text + text2 + 555)
```

มันแสดงข้อความนี้ออกมาอ่ะครับ
```text
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: must be str, not int
```

นั่นก็เพราะว่า Python นึกว่าน้องจะเอาไป Concatinate นั่นเอง ซึ่งเลข 555 นั้นไม่ใช่ String แต่เป็น Integer จึงไม่สามารถทำการ Concat ได้<br>
วิธีการแก้ไขจึงต้องแปลงค่า Integer ไปเป็น String ซะก่อน เลยได้เป็น

```python
text = "kuma"
text2 = "mon"
print(text + text2 + str(555)) # Returns kumamon555
```

### วิธีให้ตัวแปรเก็บค่า String
น้องสามารถใช้ "" เพื่อครอบตัวอักษร เพื่อบอกว่ามันเป็น String ก็ได้<br>
หรือน้องจะใช้ฟังก์ชั่น `str()` เพื่อทำการ Data Type Casting ก็ได้ครับ

ตัวอย่างการให้มันเก็บแบบ string แน่นอน
```python
text1 = "" # ขอบอกไว้ก่อนว่า Python ไม่ต้องทำการจองตัวแปรนะครับ
text2 = "Hello World"
text3 = "Not that much 555"
text4 = "12" # ค่า '12' (string) จะไม่เท่ากับ 12 (integer) นะครับ ต้องระวังให้ดี
```

# String Format
เนื่องจากว่า บางครั้ง น้องๆอยากที่จะใช้ Python เพื่อการแสดงผลลัพท์ แต่ก็อยากให้มันเป็น Format หรือ การเรียงตัวอักษรที่น้องต้องการ<br>
จึงทำให้ น้องขี้เกียจมาพิมพ์แบบนี้

```python
var1 = 21
print("Kumamon is already", var1, "years old")
```
เพื่อจะได้ผลลัพท์ "Kumamon is already 21 years old"

วันนี้ พี่มงจึงมาสอนการใข้ `%` และ `.format()` และ `f string` ครับ

## F string method
::: tip NOTE
การใช้ F String นี้ได้เพื่มมาใน Python เวอร์ชั่น 3.6 ครับ (Reference [PIP 498](https://www.python.org/dev/peps/pep-0498/)) ดังนั้นน้องๆจำเป็นที่จะต้องใช้ Python เวอร์ชั่นอย่างน้อย 3.6 ขึ้นไป เพื่อจะใช้ method นี้ได้ครับ
:::

ในวิธีนี้ เป็นฟีเจอร์ของ Python3 ที่ต้องการที่จะผู้ใช้งานไม่ต้องไปดูว่าในลำดับไหน ใช้ค่าผลลัพท์ตัวแปรอันไหน

ตัวอย่างการใช้งาน
```python
text = "Kumamon"
number_one = 2
number_two = 1
number_three = 2.99

print(f"The answer is {number_one} + {number_two} = {number_three}. Calculated by {text}")
```

โอ้โห อ่านง่ายขึ้นเยอะเลย แต่ปัญหาคือ จะได้ผลลัพท์ที่ถูกต้องหรือเปล่าเอ่ย?
```
Python 3.7.0 (default, Oct  2 2018, 09:18:58)
[Clang 10.0.0 (clang-1000.11.45.2)] on darwin

>>> text = "Kumamon"
>>> number_one = 2
>>> number_two = 1
>>> number_three = 2.99
>>> print(f"The answer is {number_one} + {number_two} = {number_three}. Calculated by {text}")

The answer is 2 + 1 = 2.99. Calculated by Kumamon
```

โอ้ววววว ใช้ง่ายแบบนี้ต้องสอนวิธีการใช้ซะแล้ว

### How to use F String
การใช้ก็ง่ายมากเลย โดยให้ใส่ตัวอักษร `f` (เอฟ) โดยจะเป็นตัวพิมพ์เล็ก หรือ พิมพ์ใหญ่ก็ได้ครับก่อนหน้า string `""` หรือ `''`

และการเอาตัวแปรไปยัด ก็ให้ใช้ปีกกา `{}` เพื่อบอกว่าจุดนั้นคือจุดที่ตัวแปรจะไปอยู่นั่นเอง

หากใช่ง่ายแบบนี้ ก็ลองไปใช้ดูนะครับ

## `.format()` method
การใช้ method นี้ก็เพื่อทำการนำค่าในตัวแปรไปอยู่ใน string โดยที่ไม่ต้องไปทำอะไรเยอะแยะ แต่เราก็ยังต้องทำการบอกว่า ตัวแปรไหน มีค่าเท่าไหร่ และอยู่ในลำดับไหน

### How to use `.format()`
::: tip
ตอนนี้พี่มงขอไม่เขียนก็แล้วกันนะครับ เพราะว่าอยากให้น้องไปใช้ F String กัน อิอิ
:::

## `%` formatting
เอาจริงๆ มันก็คือเครื่องหมายเปอร์เซ็นต์นั่นแหละครับ แต่ก็ทำให้มันเป็น **ที่วางตัวแปร** ได้เช่นเดียวกัน

อันนี้เป็นวิธีการใช้งานครับ น้องๆอาจจะยังไม่เข้าใจก็ไม่เป็นไร ค่อยกลับมาดูก็ได้ครับ

| **ใช้**      | %s     | %d      | %f    | %e                     |
| :------------ | ------ | ------- | ----- | ---------------------- |
| **เพื่อแสดงตัวแปรประเภท** | String | Integer | Float | เลขฐานในหลักวิทยาศาสตร์<br>(Scientific Significant) |

ตัวอย่างการใช้งาน
```python
age = 21
print("Kumamon is already %d years old" %age)
```
ก็จะได้ผลลัพท์ "Kumamon is already 21 years old" เช่นเดียวกันครับ

โดยหลักการคร่าวๆนั่นก็คือ Python จะทำการเอาตัวแปร `age` เข้าไปยัดในจุดที่ `%d` อ ยู่ ทำให้ได้ผลลัพท์ได้ออกมาแบบนั้นครับ

แล้วถ้าพี่อยากใส่มากกว่า 1 ตัวหล่ะ เช่น "My name is `<first_name>` and my age is `<age>` years old" โดยตัวแปร `<first_name>` และ `<age>` พี่จะกำหนดค่าตัวแปรเอง

หากว่าพี่ใช้วิธีโบราณ ด้วยการเอาไปแปะ (Concat) ก็ได้เขียนได้ดังนี้ครับ

```python
first_name = "Kumamon"
age = 21

print("My name is", first_name, "and my age is", age, "years old")
```

ซึ่งก็เขียนยากซะเหลือเกิน อิอิ

แต่เมื่อน้องเรียนการใช้ `%` แล่้ว น้องๆก็สามารถใช้ `%` ได้ดังนี้ครับ

```python
first_name = "Kumamon"
age = 21

print("My name is %s and my age is %d years old" %(first_name, age))
```

ก็จะได้ผลลัพท์เป็น "My name is Kumamon and my age is 21 years old" นั่นเอง

เห็นมั้ยครับ ว่ามันง่ายขึ้นเยอะ<br>
ส่วนน้องๆที่บอกว่า "พี่มงขี้โม้ มันยากกว่าเดิมหนิพี่" ก็คิดว่ามันง่ายกว่าเดิมละกันครับ และพี่ก็ไม่ได้โม้ เพราะเรายังไม่จบแค่นี้ครับ

### ตั้งการมี Space
และโจทย์ต่อไปก็คือการกำหนดขนาดของมันนั่นเอง
เพราะถ้าเราสามารถกำหนดขนาด โดยการใช้ [] ได้แล้ว พี่มงก็ว่า เราสามารถทำกับ % ได้เช่นเดียวกัน

แต่เนื่องจากว่า Python ก็ได้จัดการทำ Aligment มาให้ด้วย<br>
เช่นต้องการให้เป็นแบบนี้
```
My Name is Kumamon              naja
My Name is              Kumamon naja
```
นั่นก็คือการให้มันชิดขวา และ ชิดซ้ายนั่นเอง

น้องๆก็สามารถทำให้มันชิดได้ โดยการใส่ตัวเลขไปด้วย<br>
ตัวอย่างเช่น
```python
first_name = "Kumamon"
print("My Name is %-20s naja" %first_name)
print("My Name is %20s naja" %first_name)
```
ก็จะได้ผลลัพท์เหมือนด้านบนครับ

โดยหลักการนั่นก็คือ Python จะเว้นที่ไว้ x ช่อง (ซึ่งในตัวอย่างเว้นไว้ 20 ช่่อง)<br>
แล้วค่อยใส่ String ไปตรงนั้น

โดยหากว่า
- เป็นเลขจำนวนเป็นบวก ก็จะชิดขวา
- เป็นเลขจำนวนเป็นลบ ก็จะชิดซ้าย

### ตัดความยาว String
หลังจากได้เรียนการ align กันมาแล้ว ก็จะบอกว่ายังมี function นึงที่น้องๆอาจจะยังไม่เคยเจอ นั่นก็คือการตัดให้ได้ขนาด x ตัว

ไปดูตัวอย่างกันครับ

โดยปกติแล้ว เราก็จะใช้ [] แบบนี้
```python
first_name = "Kumamon"
print("My name is", first_name[:4])
```
ก็จะได้ผลออกมาเป็น "My name is Kuma" นั่นเอง

ซึ่งตัว `%` ก็ทำได้เช่นกันครับ ดังตัวอย่างข้างล่าง
```python
first_name = "Kumamon"
print("My name is %s", %first_name[:4])
```

แต่ก็ยังไม่[สุดๆไปเลย เหมือนเพลงของนูโว](https://www.youtube.com/watch?v=LKLH2E7uaMY) เพราะยังทำแบบนี้ได้อีกครับ
```python
first_name = "Kumamon"
print("My name is %.4s", %first_name)
```

แต่ต้องเตือนไว้ก่อน ว่าถ้าใส่ตัวเลขไปมากกว่าที่ array string มีอยู่ ก็จะเป็นแบบนี้ครับ
```python

```

## String with ASCII
![https://i.stack.imgur.com/X4yts.png](https://i.stack.imgur.com/X4yts.png)
*Reference : https://i.stack.imgur.com/X4yts.png*

ต้องอธิบายก่อนว่า ปกติแล้วโปรแกรมคอมพิวเตอร์ทุกอัน ได้ทำการเปลี่ยนการจัดเก็บข้อมูลแบบ string หรือ character ให้มาเป็นตัวเลขทั้งหมด เพื่อจะเอาไปเก็บเป็น binary ทีหลัง

ดังนั้น ASCII จึงเกิดขึ้น โดยการบอกให้ว่า เลขนี้ เท่ากับตัวอักษรอะไร และตัว Python จึงไปทำการคำนวณต่อ ว่าให้ทำอะไรต่อไป

ดังนั้นวันนี้เราจะมาลองเล่นดูครับ

### การเปลี่ยน String ไปเป็น ASCII โดยใช้ `ord()`
การเปลี่ยน character ไปเป็น ASCII ก็สามารถทำได้ง่ายๆ โดยการใช้ function `ord()` ครับ และใส่ character ไปเป็น input parameter ของฟังก์ชั่น
```python
print(ord('A'))         # Print out 65
print(ord('B'))         # Print out 66
print(ord('A') + 1)     # Print out 66
```

### การเปลี่ยน ASCII ไปเป็น String โดยใช้ `chr()`
เปลี่ยนตัวเลข (ย้ำว่าควรเป็นประเภท integer อยู่) ก็สามารถทำได้โดยการใช้ฟังก์ชั่น `chr()` และใส่ตัวเลขเข้าไปเป็น input parameter ของฟังก์ชั่น
```python
print(chr(65))      # Print out 'A'
print(chr(65+1))    # Print out 'B'
print(chr(65+2))    # Print out 'C'

var = 65
print(chr(var)) # Print out 'A'
```

## String to change case
เปลี่ยนตัวอักษรไปเป็น lowercase     `.lower()` <br>
เปลี่ยนตัวอักษรไปเป็น uppercase     `.upper()` <br>
สลับตัวอักษรระหว่าง lower/upper    `.swapcase()` <br>

เช็คว่าตัวอักษรนั้นเป็น lowercase ทั้งหมดหรือไม่    `.islower()` <br>
เช็คว่าตัวอักษรนั้นเป็น uppercase ทั้งหมดหรือไม่    `.isupper()` <br>
เช็คว่าตัวอักษรนั้นเป็นตัวเลขทั้งหมดหรือไม่          `.isdigit()` <br>
เช็คว่าตัวอักษรนั้นเป็นตัวอักษรทั้งหมดหรือไม่         `.isalpha()` <br>

### Using .lower()
```python
return text.lower()
# If text = "KUMAMON", returns "kumamon"
# If text = "KuMaMoN", returns "kumamon"
# If text = "kumamon", returns "kumamon"
```

### Using .upper()
```python
return text.upper()
# If text = "KUMAMON", returns "KUMAMON"
# If text = "KuMaMoN", returns "KUMAMON"
# If text = "kumamon", returns "KUMAMON"
```

### Using .swapcase()
```python
return text.swapcase()
# If text = "KUMAMON", returns "kumamon"
# If text = "KuMaMoN", returns "kUmAmOn"
# If text = "kumamon", returns "KUMAMON"
```

### Using .isupper() & .islower()
```python
<string>.islower()
<string>.isupper()

text = "K"
return text.islower() # Returns false
return text.isupper() # Returns true

text = "k"
return text.islower() # Returns true
return text.isupper() # Returns false
```

### Using .isdigit() & .isalpha()
```python
How to use:
<input variable>.isdigit()
-> Returns True or False

<input variable>.isalpha()
-> Returns True or False

text = "12"
return text.isdigit() # Returns true
return text.isalpha() # Returns false

text = "ABC"
return text.isdigit() # Returns false
return text.isalpha() # Returns true
```

# String Array
Python นั้น จะเก็บข้อมูล String ไว้ในแบบ Array หรือว่าลัง (ถ้าจะให้เข้าใจง่ายๆ) โดยลังๆนึง มี character อยู่หนึ่งตัว (นั่นก็คือกล่อง)

และ โกดังคือตัวแปรที่เก็บข้อมูล String ที่มีหน้าที่เก็บลังนั่นเอง<br>
แต่ว่าโกดังอันนี้สามารถยืดหดขนาดได้ครับ ทำให้เก็บข้อมูลได้เยอะแยะเต็มไปหมดเลย<br> โดยผู้จัดการขนาดโกดังก็คือตัว Python นั่นเอง
ดังนั้นน้องๆเลยไม่ต้องสนใจเรื่องการเปลี่ยนขนาดโกดัง เหมือนหลายๆ ภาษาคอมพิวเตอร์ครับ

อ่ะ เรามาเข้าเรื่องเกี่ยวกับภาษา Python กันต่อ<br>
ภายในตัวอย่างด้านล่าง พี่มงจะใช้ตัวอย่างเป็นคำว่า "@55_kumamon" ครับ

ขั้นแรกก็จะต้องแตกออกมาเป็นกล่องที่ใส่ตัวอักษรได้ 1 ตัวอักษรซะก่อน<br>
น้องก็จะได้ประมาณนี้ครับ
```
| ตัวอักษร       | @ | 5 | 5 | _ | k | u | m | a | m | o  | n  |
|--------------|---|---|---|---|---|---|---|---|---|----|----|
| ลำดับที่        | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 |
```

น้องก็จะเห็นว่าตัวอักษร '@' นั้นเป็นตัวแรก และ 'n' เป็นตัวสุดท้าย

ปกติแล้ว **คนที่ยังไม่เคยเขียนโปรแกรม** เค้าก็จะเรียกตัวแรกว่าตัวที่ 1 เนอะ ตามหลักการทางคณิตศาสตร์เลย<br>
แต่นี่มันคอมพิวเตอร์นิ ก็ต้องทำให้โลกจำ โดยการสอนคนเขียนโปรแกรมว่า **เรื่มนับ Array ที่เลข 0 ครับ**

![](https://i.redd.it/iwnqgrrbls5z.png)<br>
*ขอบคุณ meme จาก reddit.com*

## How Python keeps data
เพราะอะไรหน่ะเหรอ??? [StackOverflow.com](https://stackoverflow.com/questions/7320686/why-does-the-indexing-start-with-zero-in-c) สิครับ รออะไร<br>(ขอโน้ตไว้ก่อนว่า Python นั้นเขียนมาจากภาษา C นะครับ)

ถ้าอ่านไม่เข้าใจ พี่ก็จะอธิบายให้เองครับ<br>
โดยปกติแล้ว เวลาหน่วยความจำเอาอะไรไปเก็บ ก็จะต้องมีเลขกำกับ เพื่อให้ตัว CPU เรียกใช้ข้อมูลได้ถูกอัน และรู้ว่าอันไหนคืออะไร และมีการเก็บข้อมูลได้เรียงตัวถูกต้อง (ให้คิดว่าเก็บไว้ใน locker และใน locker มีข้อมูลอยู่) เวลาที่น้องเอาข้อมูลไปเก็บในตัวแปร ข้อมูลนั้นก็จะถูกเก็บไว้ใน locker ครับ แต่ตู้นึงเก็บข้อมูลได้นิดเดียว เลยต้องแบ่งเก็บเป็นล็อคครับ ตัวอย่างเช่น เก็บตั้งแต่ตู้ที่ 11 จนถึงตู้ที่ 20

พอจะเรียกเพื่อดูข้อมูล ระบบก็จำได้ว่าเก็บตู้แรกที่ตู้เบอร์ 11 ครับ และมีข้อมูลที่อยู่ถัดไปอีก 9 ตู้ รวมเป็น 10 ตู้นั่นเอง

และระบบก็รู้ว่าตัวเองจะเก็บข้อมูลแบบเรียงต่อกัน (เพื่อประโยชน์ในการเรียกข้อมูลได้เร็ว) ทำให้ระบบเลือกเอาข้อมูลในตู้ที่ 11, 12, 13, 14, 15, 16, ..., 20 นั่นเอง

การเก็บแบบนี้ ทำให้ระบบไม่จำเป็นที่จะต้องจำว่า เก็บตู้ 11, 12, 13, 14, 15... หรือเรื่มตู้ที่ 11 และจบที่ 20 ครับ เพราะกินค่าจำเยอะเหมือนกันนะ เพราะในความจริงต้องจำเป็นหลักพันหลักหมื่นเลย การคำนวณแบบนี้ (ตู้แรก และจำนวนตู้ที่มีหลังจากนั้น) จึงทำให้เรียกดูง่าย และใช้ทรัพยากรในการเก็บข้อมูลน้อยลงครับ

จึงทำให้ เวลาเขียนโปรแกรม เค้าก็เลยใช้หลักการณ์เหมือนกันครับ <br>
เช่น น้องอยากได้ตู้ที่ 11 นั่นก็คือตู้ที่ 11 + **0** หรือตู้ที่ 20 ก็คือตู้ที่ 11 + **9** ครับ

ด้วยเหตุผลอันไม่น่าเข้าใจได้ดังเกล่า ทำให้ array จึงเรื่มต้นที่ 0 ครับ

หากเข้าใจแล้ว String "@55_kumamon" ก็จะมีการเรียงดังนี้ครับ
```
| ตัวอักษร       | @ | 5 | 5 | _ | k | u | m | a | m | o  | n  |
|--------------|---|---|---|---|---|---|---|---|---|----|----|
| ลำดับใน array | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9  | 10 |
```

แต่ถ้าน้องๆไม่อยากนับ ว่ามันมีกี่ตัวกันแน่ ก็สามารถใช้ `len()` ซึ่งก็ย่อมาจากคำว่า length หรือความยาวนั่นเอง โดยก็จะนับจำนวนตัวอักษรใน array string ให้นั่นเอง

ตัวอย่างเช่น
```python
first_name = "@55_kumamon"
first_name_len = len(first_name)
print(first_name_len)
```

::: warning คำเตือน

String ไม่จัดว่าเป็นการเก็บข้อมูลแบบ Array แต่ในการใช้งานหลายๆอย่างที่ใช้งานร่วมกันได้
```python
first_name_string = "kuma"
first_name_array = ['k', 'u', 'm', 'a']

first_name_string == first_name_array
>>> False
```
:::

## เลือกตัวอักษรตัวเรื่มต้น (Start)
หากน้องต้องการเอาตัวอักษร '@' มาจาก string ก็สามารถเขียนได้ดังนี้ครับ
```python
text = "@55_kumamon"
print(text[0])
```

จุดที่ต้องสังเกตอยู่ที่ `text[0]` ครับ เป็นการบอกว่าจะเอาตัวที่ 0 (`[@]`) มาจากตัวแปร `text` นั่นเอง

วิธีการเรียก นั่นก็คือ มีตัวแปร และก็ตามด้วยกล่อง `[]` ครับ โดยน้องใส่หมายเลขกล่อง (ตัวอักษร) เข้าไปครับ และผลลัพท์ก็จะออกมา

แล้วถ้าต้องการเรียกหลายอัน เหมือนเป็นกลุ่มหล่ะ

## การเลือกตัวอักษรตัวสิ้นสุด (Stop)
น้องสามารถเขียนเหมือนอันด้านบนหล่ะครับ แต่น้องเพื่มขั้นตอนขึ้นมาอีกนิดนึง<br>
โดยการเขียนเครื่องหมาย `:` ไปขั้นครับ

วิธีการใช้งานก็คือ `[<ตัวอักษรตัวแรก> : <ตัวอักษรหลังตัวสุดท้ายที่เลือก>]`

อาจจะยังไม่เก็ท ก็ดูตัวอย่างเอาละกันครับ

ตัวอย่างการใช้งาน
```python
text = "@55_kumamon"
print(text[0:8])
```
ก็จะแสดงคำว่า "@55_kuma" บนหน้าจอนะครับ<br>
จุดสังเกตนั่นก็คือ พี่ได้เลือกตั้งแต่ตัวที่ 0 นั่นก็คือ @ จนถึงตัวที่ 8 นั่นก็คือ m แต่ทำไมมันออกมาเป็น "@55_kumam" หล่ะ

เอาเป็นว่ามันเป็นหลักของเค้าอ่ะครับ ระวังด้วยละกัน 😙

แต่หากว่าจะเลือกตั้งแต่ตัวแรกจนถึงตัวที่ 8 อยู่แล้หล่ะ น้องๆก็สามารถละเว้นไว้ได้<br>
ตัวอย่างเช่น
```python
text = "@55_kumamon"
print(text[:8])
```
เพราะ Python ถือว่าน้องไม่ยอมบอกเอง ก็จะถึือว่าอยู่ ณ ที่ความเข้าใจเดียวกัน (default) ไปว่าต้องเรื่มจากตัวแรก

## การเลือกข้ามเลือกตัวอักษร (Step)
หากน้องต้องการที่จะเลือกเพียงบางตัว เช่นเลือกตัวแรก แล้วก็ข้าม 2 ตัว แล้วก็ค่อยเลือก<br>
น้องก็สามารถทำได้โดยการเพื่ม `:` เข้ามาอีกตัวนึง ก็จะได้เป็น
```python
text = "@55_kumamon"
text[::2]
```

และเนื่องจากน้องก็รู้ว่า หากไม่มีตัวเลขเรื่ม (Start) และตัวสุดท้าย (Stop) ก็จะถือในความเข้าใจเหมือนกันว่า เลือกทุกตัวนั่นเอง

## สรุปการใช้งาน Start : Stop : Step
```python
<variable_name>[start:stop:step]

# Start -> ให้เรื่มตั้งแต่ตัวอักษรไหน       ( Default : ตัวแรกของบรรทัด )
# Stop  -> ให้หยุดที่ตัวอักษรไหน          ( Default : ตัวสุดท้ายของบรรทัด )
โดยจะลบค่านั้นไปอีก 1 หากมีการเขียน start ด้วย
# Step  -> ข้ามตัวอักษรเมื่อครบทุกๆ n ตัว  ( Default : 1 )
```
หากน้องไม่ได้ใส่ข้อมูล ตัว Python ก็จะทำการใช้ค่า default ให้ครับ แม้น้องๆจะเขียนระบุใว้ใน [] หรือไม่ก็ตาม

### ตัวอย่างการใช้งานย่อๆ
```python
text = '12345'
text[0]  ได้ผลลัพท์เท่ากับการเขียน text[0:1] หรือ text[0:1:1]
text[:4] ได้ผลลัพท์เท่ากับการเขียน text[0:4]
text[1:] ได้ผลลัพท์เท่ากับการเขียน text[1:5]
```

## เล่นผานโผนกับ Start Stop Step
**โจทย์คำถาม** หาก Stop เป็นตัวเลขติดลบหล่ะ
```python
var = "ABCD"
print(var[-1])
```
ก็จะปรี้นท์ "D" ออกมา เนื่องจากว่าถ้าใส่ตัวเลขเป็นเลขติดลบ จะทำให้ Python เลือกจากข้างหลังนั่นเอง (เหมือนตัวอักษรเป็น "DCBA" แล้วเลือกตัวที่ 1-1 = 0 นั่นเอง)

**โจทย์คำถาม** ถ้า Array จริงน้อยกว่าที่เราต้องการเรียก
```python
var = "ABCD"
print(var[50])
```
ก็จะเกิด error (IndexError) เนื่องจากว่า array ตัวที่ 50 ไม่มีอยู่จริง

**โจทย์คำถาม** ถ้าเราเลือกเอาตั้งแต่ตัวที่ 4 ไปจนถึงตัวที่ 50 (ที่ไม่มีอยู่จริง) หล่ะ
```python
var = "My name is Kumamon, and I love eating"
print(var[3:50])
```
ก็ยังออกมาเหมือนกับการใช้ `var[3:]` เลยครับ เพราะจะอยู่ในฐานความเข้าใจเดียวกันว่า ถ้าเลือกเกินก็ไม่เป็นไร ก็จะเลือกถึงตัวสุดท้ายอยู่ดี แต่อย่าทำเลยครับ ไม่ค่อยจะดีซะเท่าไหร่ อิอิ

**โจทย์คำถาม** อยากเลือกเอาตัวอักษรตั้งแต่ตัวที่ 1 จนถึงตัวที่ 2 (เลือกเพียงบางช่วง)
```python
var = "ABCD"
print(var[0:2])
```
ก็จะแสดงออกมาเป็น "AB" (โดยเรื่มเอาจากตัวที่ 0 จนถึงตัวที่ 2-1 = 1)<br>
**อย่าลืมว่าต้องไป -1 ด้วยนะครับ**

**โจทย์คำถาม** อยากเรื่มตั้งแต่ตัวที่ 3 ไปจนสุดตัวสุดท้ายเลย
```python
var = "My name is Kumamon, and I love eating"
print(var[3:])
```
ก็จะแสดงออกมาเป็น "name is Kumamon, and I love eating" เพราะเรื่มตั้งแต่ตัวที่ 3 และ Stop ถูกละไว้ ทำให้อยู่ในฐานความเข้าใจเดียวกันว่าเลือกจนถึงตัวสุดท้าย

**โจทย์คำถาม** อยากเรื่มตั้งแต่ตัวแรก จนถึงตัวที่ 6
```python
var = "My name is Kumamon, and I love eating"
print(var[:7])
# Prints out "My name" (Starting from 0th array number to the 7th)
```

**โจทย์คำถาม** อยากเลือกทีละ x ตัว แต่เลือกจากหลังมาหน้า
```python
var = "ABABABAB"
print(var[::-2])
# Prints out BBBB (Skips after logical number hits every -2, which is A)
```

## String with array counts and find
```
Finding character in text -> .find()
Count character in text that satisfies search query -> .count()
Finding text in array -> .index()

Count all character in text -> len()
```

### Using .find()
```python
How to use:
<variable name>.find("<character/text you want to find>")
-> Return as the lowest array number

# 1 occurence character
var = "ABCDE"
return var.find("A") # Returns 0

# 2 occurence character
var = "ABCDEAAAAA"
return var.find("A") # Returns 0

# Non occurence character
var = "ABCDE"
return var.find("F") # Returns -1

# Using more than 1 character
var = "Kumamon is happy"
return var.find("Kuma") # Returns 0

# Using more than 1 character + 2 occurrence
var = "Kumamon is happy, Kumamon is happy"
return var.find("Kuma") # Returns 0
```

### Using .count()
```python
How to use:
<variable name>.count("<character/text you want to count>")
-> Returns the amount of character count.

# 1 occurence character
var = "ABCDE"
return var.count("A") # Returns 1

# 2 occurence character
var = "ABCDEAAAAA"
return var.count("A") # Returns 6

# Non occurence character
var = "ABCDE"
return var.count("F") # Returns 0

# Using more than 1 character
var = "Kumamon is happy"
return var.count("Kuma") # Returns 1

# Using more than 1 character + 2 occurrence
var = "Kumamon is happy, Kumamon is happy"
return var.count("Kuma") # Returns 2
```

### Using len()
```python
How to use:
len(<variable you want to count character>)
Returns number of elements/character in array/text

# Using to count strings
return len("Kumamon") # Returns 7

# Using to count strings in variable
var = "Kumamon"
return len(var) # Returns 7

# Using to count elements in array
var = [11,12,13,14,15]
return len(var) # Retuns 5
```
---
