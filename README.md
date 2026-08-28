# ☕ HYMI Coffee Match

> **"Don't choose your coffee. Let HYMI choose it for you."**

موقع تفاعلي للمعرض يحدد كبسولة القهوة المثالية للعميل بناءً على 3 أسئلة مرحة عن مزاجه.

## 🎯 الفكرة

- العميل يمسح **QR Code** → يفتح الموقع
- يجاوب على **3 أسئلة** فقط (يُختارون عشوائيًا من 30 سؤال)
- يظهر له **كبسولة واحدة** مناسبة لمزاجه
- يتوجه لكاونتر HYMI ليتذوقها

## 🏗️ الهيكل

```
hymi-coffee-match/
├── index.html          ← الموقع الرئيسي
├── style.css           ← التصميم والأنيميشن
├── app.js              ← المنطق والأسئلة
├── capsules/           ← 📸 صور الكبسولات (ضعها هنا)
│   ├── americano.png
│   ├── latte.png
│   ├── mocha.png
│   ├── cold-brew-dark.png
│   ├── colombian.png
│   ├── ethiopian.png
│   ├── grape.png
│   ├── orange.png
│   ├── jasmine.png
│   └── tea-coffee.png
└── assets/             ← الشعار والأصول
    ├── logo.png
    └── logo-icon.png
```

## 🚀 الرفع على Vercel

### 1. أنشئ Repository على GitHub

```bash
# افتح Terminal في مجلد المشروع
cd hymi-coffee-match

# Initialize Git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: HYMI Coffee Match"

# Create repository on GitHub (hymi-coffee-match)
# Then:
git remote add origin https://github.com/YOUR_USERNAME/hymi-coffee-match.git
git branch -M main
git push -u origin main
```

### 2. اربط بـ Vercel

1. اذهب إلى [vercel.com](https://vercel.com)
2. سجل دخول بحساب GitHub
3. انقر **"Add New Project"**
4. اختر `hymi-coffee-match`
5. Framework Preset: **Other** (أو اتركها Auto)
6. انقر **Deploy** 🎉

### 3. أضف الصور

بعد النشر الأول:

```bash
# ضع صورك في مجلد capsules/
# ثم:
git add capsules/
git commit -m "Add capsule images"
git push
```

Vercel ينشر التحديث تلقائيًا!

## 📱 الاستخدام في المعرض

1. **QR Code** على الكاونتر → العميل يمسحه
2. **iPad** مثبت على حامل → العميل يلعب مباشرة
3. **شاشة كبيرة** تعرض النتائج

## 🎨 الكبسولات (10 أنواع)

| الكبسولة | شخصية المزاج | الصورة |
|---------|-------------|--------|
| Americano | Boss Mode 👔 | `americano.png` |
| Latte | Chill Mode 😎 | `latte.png` |
| Mocha | Treat Yourself 🍫 | `mocha.png` |
| Cold Brew Dark | Survival Mode 🔥 | `cold-brew-dark.png` |
| Cold Brew Colombian | Balanced Mode ⚖️ | `colombian.png` |
| Cold Brew Ethiopian | Explorer Mode 🌍 | `ethiopian.png` |
| Grape | Wild Mode 🍇 | `grape.png` |
| Orange | Fresh Mode 🍊 | `orange.png` |
| Jasmine Tea & Coffee | Zen Mode 🌸 | `jasmine.png` |
| Tea & Coffee | Easy Mode ☕🌿 | `tea-coffee.png` |

## ⚙️ المنطق

- **30 سؤال** مقسمة على 3 مجموعات (طاقة / عصبية / شخصية)
- الموقع يختار **سؤال واحد عشوائي** من كل مجموعة = 3 أسئلة
- كل إجابة تضيف **نقاط** للكبسولات
- الكبسولة ذات **أعلى مجموع** تظهر
- في حالة التعادل: **تنوع الشخصية** يحدد الفائز

## 📐 أبعاد الصور المثالية

- **الكبسولات:** 400×400 بكسل، PNG مع خلفية شفافة
- **الشعار:** 200×200 بكسل، PNG مع خلفية شفافة
- **الأيقونة:** 32×32 بكسل، PNG

## 🔧 تخصيص

### تغيير الأسئلة
عدل ملف `app.js` في قسم `questionBank`

### تغيير النقاط
في كل سؤال، عدل `scores` لكل إجابة

### إضافة كبسولة جديدة
1. أضفها في `capsules` في `app.js`
2. أضف صورتها في `capsules/`
3. أضف نقاطها في كل سؤال

## 📞 الدعم

للأسئلة أو التعديلات، تواصل مع فريق التطوير.

---

**صنع بـ ❤️ بواسطة HYMI**
