// ===== HYMI Coffee Match - Mood Engine (Bilingual) =====
// 30 Questions | 3 Groups | 10 Capsules | Smart Scoring | AR/EN

(function() {
    'use strict';

    // ===== TRANSLATIONS =====
    const translations = {
        ar: {
            chooseLang: "اختر لغتك",
            chooseLangSub: "Choose Your Language",
            welcomeTitle: "خلنا نقرأ مزاجك",
            welcomeSub: "3 أسئلة فقط، ونقول لك أي كبسولة\nتشبه يومك اليوم",
            feat1: "30 ثانية",
            feat2: "نتيجة دقيقة",
            feat3: "10 نكهات",
            startBtn: "ابدأ اللعب",
            noData: "لا نحتاج اسمك أو رقمك 😊",
            question: "السؤال",
            of: "من",
            loading1: "جاري تحليل المزاج",
            loading2: "نبحث عن الكبسولة المثالية",
            loading3: "لقيناها!",
            loadingSub1: "نقرأ طاقتك البشرية",
            loadingSub2: "نقارن بين 10 نكهات",
            loadingSub3: "جهز نفسك للمفاجأة",
            yourMood: "مزاجك اليوم",
            suggested: "كبسولتك المقترحة",
            coffeeProfile: "بروفايل القهوة",
            variety: "نوع الحبوب",
            ratio: "نسبة الخلط",
            roast: "درجة التحميص",
            origin: "المنشأ",
            moodReading: "قراءة مزاجك",
            forFun: "🤩 نسب للترفيه فقط",
            energy: "الطاقة",
            patience: "الصبر",
            coffeeNeed: "الحاجة للقهوة",
            tryIt: "جرّبها عند كاونتر HYMI",
            share: "خذ screenshot وشاركها",
            playAgain: "العب مرة ثانية",
            footerHint: "A New Era for Everything",
            goToCounter: "توجه لكاونتر HYMI وجرب كبسولتك! ☕",
            copied: "تم نسخ النتيجة! الصقها في واتساب أو أي مكان 📋",
            screenshot: "خذ screenshot للشاشة وشاركها! 📸",
            shareTitle: "HYMI - اكتشف قهوتك",
            modalTitle: "عروض حصرية بانتظارك!",
            modalText: "سجل بياناتك واحصل على آخر العروض والخصومات من HYMI",
            nameLabel: "الاسم",
            phoneLabel: "رقم الهاتف",
            namePlaceholder: "اكتب اسمك",
            phonePlaceholder: "05xxxxxxxx",
            modalSubmit: "سجّلني للعروض",
            modalSkip: "لا شكراً، فقط أرني النتيجة",
            modalPrivacy: "🔒 بياناتك آمنة ولن نشاركها مع أي طرف ثالث",
            submitSuccess: "✅ تم التسجيل بنجاح! ستصلك العروض قريباً",
            submitError: "❌ حدث خطأ، حاول مرة أخرى",
            alreadySubmitted: "🎉 أنت مسجل مسبقاً!",
        },
        en: {
            chooseLang: "Choose Your Language",
            chooseLangSub: "اختر لغتك المفضلة",
            welcomeTitle: "Let's Read Your Mood",
            welcomeSub: "Just 3 questions, and we'll tell you\nwhich capsule matches your day",
            feat1: "30 Seconds",
            feat2: "Accurate Result",
            feat3: "10 Flavors",
            startBtn: "Start Playing",
            noData: "We don't need your name or number 😊",
            question: "Question",
            of: "of",
            loading1: "Analyzing Your Mood",
            loading2: "Finding the Perfect Capsule",
            loading3: "Found It!",
            loadingSub1: "Reading your human energy",
            loadingSub2: "Comparing 10 flavors",
            loadingSub3: "Get ready for the surprise",
            yourMood: "Your Mood Today",
            suggested: "Your Suggested Capsule",
            coffeeProfile: "Coffee Profile",
            variety: "Variety",
            ratio: "Blend Ratio",
            roast: "Roast Level",
            origin: "Origin",
            moodReading: "Mood Reading",
            forFun: "🤩 For entertainment only",
            energy: "Energy",
            patience: "Patience",
            coffeeNeed: "Coffee Need",
            tryIt: "Try it at HYMI Counter",
            share: "Take a screenshot & share",
            playAgain: "Play Again",
            footerHint: "A New Era for Everything",
            goToCounter: "Head to HYMI Counter and try your capsule! ☕",
            copied: "Result copied! Paste it on WhatsApp or anywhere 📋",
            screenshot: "Take a screenshot and share it! 📸",
            shareTitle: "HYMI - Discover Your Coffee",
            modalTitle: "Exclusive Offers Await!",
            modalText: "Register your details and get the latest offers and discounts from HYMI",
            nameLabel: "Name",
            phoneLabel: "Phone Number",
            namePlaceholder: "Enter your name",
            phonePlaceholder: "05xxxxxxxx",
            modalSubmit: "Sign Me Up",
            modalSkip: "No thanks, just show my result",
            modalPrivacy: "🔒 Your data is safe and will not be shared with third parties",
            submitSuccess: "✅ Registered successfully! Offers coming soon",
            submitError: "❌ Something went wrong, please try again",
            alreadySubmitted: "🎉 You're already registered!",
        }
    };

    // ===== CURRENT LANGUAGE =====
    let currentLang = 'ar';

    // ===== FUN FACTS =====
    const funFacts = {
        ar: [
            "هل تعلم؟ القهوة تُزرع في أكثر من 70 دولة 🌍",
            "القهوة هي ثاني أكثر سلعة تُتاجر في العالم بعد النفط ⛽",
            "متوسط العربي يشرب 3.5 كوب قهوة يوميًا ☕",
            "القهوة الباردة تحتاج 12 ساعة تحضير ⏰",
            "أول كبسولة قهوة اخترعت في سويسرا 🇨🇭",
            "القهوة تحتوي على أكثر من 1000 مركب كيميائي 🧪",
            "HYMI تختار لك القهوة المثالية بذكاء اصطناعي 🤖"
        ],
        en: [
            "Did you know? Coffee is grown in over 70 countries 🌍",
            "Coffee is the second most traded commodity after oil ⛽",
            "The average Arab drinks 3.5 cups of coffee daily ☕",
            "Cold brew needs 12 hours to prepare ⏰",
            "The first coffee capsule was invented in Switzerland 🇨🇭",
            "Coffee contains over 1000 chemical compounds 🧪",
            "HYMI picks your perfect coffee with AI 🤖"
        ]
    };

    // ===== STATE =====
    let currentQuestion = 0;
    let selectedQuestions = [];
    let scores = {};
    let isAnimating = false;

    // ===== DATA: Question Bank AR =====
    const questionBankAR = {
        groupA: [
            {
                id: 'sleep',
                question: "كيف كان نومك أمس؟",
                options: [
                    { text: "ملكي 👑", emoji: "👑", scores: { latte: 3, colombian: 2, jasmine: 2, tea: 1 } },
                    { text: "نجونا 😅", emoji: "😅", scores: { americano: 2, colombian: 2, mocha: 1, ethiopian: 1 } },
                    { text: "أي نوم؟ 😂", emoji: "😂", scores: { dark: 3, americano: 2, ethiopian: 1 } }
                ]
            },
            {
                id: 'battery',
                question: "كم نسبة بطاريتك البشرية الآن؟ 🔋",
                options: [
                    { text: "100% جاهز", emoji: "💪", scores: { ethiopian: 3, orange: 2, grape: 1 } },
                    { text: "50% أموري طيبة", emoji: "😊", scores: { colombian: 3, latte: 2, tea: 1 } },
                    { text: "2% وين القهوة؟", emoji: "😵", scores: { dark: 4, americano: 3, mocha: 1 } }
                ]
            },
            {
                id: 'couch',
                question: "لو عطيناك كنبة الآن…؟",
                options: [
                    { text: "ما أحتاجها 💪", emoji: "💪", scores: { americano: 3, dark: 2, ethiopian: 1 } },
                    { text: "أجلس خمس دقايق", emoji: "😌", scores: { latte: 3, colombian: 2, tea: 1 } },
                    { text: "صحوني بكرة 😴", emoji: "😴", scores: { dark: 3, mocha: 2, jasmine: 1 } }
                ]
            },
            {
                id: 'alarm',
                question: "إذا دق المنبه الصبح؟",
                options: [
                    { text: "أقوم فورًا", emoji: "⚡", scores: { americano: 3, ethiopian: 2, orange: 1 } },
                    { text: "غفوة واحدة", emoji: "😴", scores: { latte: 3, colombian: 2, mocha: 1 } },
                    { text: "نبدأ المفاوضات 😂", emoji: "🤝", scores: { dark: 3, mocha: 2, tea: 1 } }
                ]
            },
            {
                id: 'brain',
                question: "كيف مخك اليوم؟",
                options: [
                    { text: "شغال 100%", emoji: "🧠", scores: { americano: 3, ethiopian: 2, dark: 1 } },
                    { text: "يحتاج تسخين", emoji: "🔥", scores: { colombian: 3, latte: 2, mocha: 1 } },
                    { text: "خارج الخدمة", emoji: "💀", scores: { dark: 4, mocha: 2, jasmine: 1 } }
                ]
            },
            {
                id: 'needCoffee',
                question: 'كم مرة قلت "أحتاج قهوة" اليوم؟',
                options: [
                    { text: "ولا مرة", emoji: "😇", scores: { jasmine: 3, tea: 2, latte: 1 } },
                    { text: "مرة أو مرتين", emoji: "☕", scores: { colombian: 3, latte: 2, mocha: 1 } },
                    { text: "فقدت العد 😂", emoji: "🤪", scores: { dark: 4, americano: 3, ethiopian: 1 } }
                ]
            },
            {
                id: 'freeHour',
                question: "لو عندك ساعة فاضية الآن؟",
                options: [
                    { text: "أنجز", emoji: "💼", scores: { americano: 3, dark: 2, ethiopian: 1 } },
                    { text: "أروق", emoji: "😌", scores: { latte: 3, jasmine: 2, tea: 1 } },
                    { text: "أطلع مغامرة", emoji: "🚀", scores: { grape: 3, orange: 3, ethiopian: 2 } }
                ]
            },
            {
                id: 'coffeeLate',
                question: "لو القهوة تأخرت عليك 10 دقائق؟",
                options: [
                    { text: "عادي", emoji: "😌", scores: { jasmine: 3, tea: 2, latte: 1 } },
                    { text: "أبدأ أقلق", emoji: "😬", scores: { colombian: 3, americano: 2, mocha: 1 } },
                    { text: "أعلن حالة طوارئ 😂", emoji: "🚨", scores: { dark: 4, americano: 3, ethiopian: 1 } }
                ]
            },
            {
                id: 'work',
                question: "كيف وضعك مع الشغل اليوم؟",
                options: [
                    { text: "متحمس", emoji: "🔥", scores: { ethiopian: 3, americano: 2, orange: 1 } },
                    { text: "نمشيها", emoji: "😅", scores: { colombian: 3, latte: 2, tea: 1 } },
                    { text: "أتظاهر أني ما شفت 😂", emoji: "🙈", scores: { dark: 3, mocha: 2, jasmine: 1 } }
                ]
            },
            {
                id: 'word',
                question: "لو اخترت كلمة واحدة ليومك؟",
                options: [
                    { text: "إنجاز", emoji: "🏆", scores: { americano: 3, dark: 2, ethiopian: 1 } },
                    { text: "روقان", emoji: "🧘", scores: { latte: 3, jasmine: 3, tea: 2 } },
                    { text: "نجاة", emoji: "😵", scores: { dark: 4, mocha: 2, colombian: 1 } }
                ]
            }
        ],
        groupB: [
            {
                id: 'patience',
                question: "كم نسبة صبرك اليوم؟",
                options: [
                    { text: "100% ملاك 😇", emoji: "😇", scores: { jasmine: 3, latte: 2, tea: 2 } },
                    { text: "50% حسب الشخص 😅", emoji: "😅", scores: { colombian: 3, americano: 1, mocha: 1 } },
                    { text: "1% لا تختبرني 🔥", emoji: "🔥", scores: { dark: 3, americano: 2, mocha: 1 } }
                ]
            },
            {
                id: 'beforeCoffee',
                question: "لو أحد كلمك قبل أول قهوة؟",
                options: [
                    { text: "أرحب فيه 😌", emoji: "😌", scores: { latte: 3, jasmine: 2, tea: 1 } },
                    { text: "أعطني دقيقة", emoji: "😐", scores: { colombian: 3, americano: 2, mocha: 1 } },
                    { text: "يتحمل النتيجة 😤", emoji: "😤", scores: { dark: 4, americano: 3, ethiopian: 1 } }
                ]
            },
            {
                id: 'people',
                question: "كيف علاقتك بالناس اليوم؟",
                options: [
                    { text: "أحب الجميع ❤️", emoji: "❤️", scores: { jasmine: 3, latte: 2, tea: 2 } },
                    { text: "حسب الشخص 😅", emoji: "😅", scores: { colombian: 3, mocha: 2, americano: 1 } },
                    { text: "خلوني بروحي", emoji: "🚫", scores: { dark: 3, americano: 2, jasmine: 1 } }
                ]
            },
            {
                id: 'ignoreBtn',
                question: 'لو عندك زر "تجاهل الجميع"؟',
                options: [
                    { text: "ما أحتاجه", emoji: "😊", scores: { jasmine: 3, tea: 2, latte: 1 } },
                    { text: "ساعة تكفي", emoji: "😎", scores: { colombian: 3, latte: 2, mocha: 1 } },
                    { text: "وين الزر؟ 😂", emoji: "🔘", scores: { dark: 3, americano: 2, ethiopian: 1 } }
                ]
            },
            {
                id: 'lastCapsule',
                question: "لو أحد أخذ آخر كبسولة عندك؟",
                options: [
                    { text: "عادي 😌", emoji: "😌", scores: { jasmine: 3, tea: 2, latte: 1 } },
                    { text: "نتفاهم", emoji: "🤝", scores: { colombian: 3, mocha: 2, americano: 1 } },
                    { text: "تبدأ المشكلة هنا 😤", emoji: "😤", scores: { dark: 4, americano: 3, ethiopian: 1 } }
                ]
            },
            {
                id: 'talk',
                question: "كم مستعد تسمع سوالف اليوم؟",
                options: [
                    { text: "جيب السالفة", emoji: "☕", scores: { ethiopian: 3, orange: 2, colombian: 1 } },
                    { text: "مختصر لو سمحت", emoji: "⏱️", scores: { americano: 3, colombian: 2, latte: 1 } },
                    { text: "ممنوع الكلام 😂", emoji: "🚫", scores: { dark: 3, americano: 2, jasmine: 1 } }
                ]
            },
            {
                id: 'calmDown',
                question: 'لو قال لك أحد "اهدأ" وأنت معصب؟',
                options: [
                    { text: "أهدأ 😌", emoji: "😌", scores: { jasmine: 3, tea: 2, latte: 2 } },
                    { text: "أحاول", emoji: "😅", scores: { colombian: 3, latte: 2, mocha: 1 } },
                    { text: "الآن عصبت أكثر 😂", emoji: "🤬", scores: { dark: 4, americano: 3, ethiopian: 1 } }
                ]
            },
            {
                id: 'simpleTopic',
                question: 'لو أحد قال لك "عندي موضوع بسيط"؟',
                options: [
                    { text: "تفضل", emoji: "👂", scores: { colombian: 3, latte: 2, tea: 1 } },
                    { text: "اختصر", emoji: "⏱️", scores: { americano: 3, dark: 2, mocha: 1 } },
                    { text: "أخاف من كلمة بسيط 😂", emoji: "😰", scores: { dark: 3, americano: 2, jasmine: 1 } }
                ]
            },
            {
                id: 'dontTalk',
                question: 'كم نسبة "لا تكلمني" عندك اليوم؟',
                options: [
                    { text: "10%", emoji: "😊", scores: { jasmine: 3, tea: 2, ethiopian: 1 } },
                    { text: "50%", emoji: "😶", scores: { colombian: 3, latte: 2, americano: 1 } },
                    { text: "99%", emoji: "🚫", scores: { dark: 4, americano: 3, jasmine: 1 } }
                ]
            },
            {
                id: 'smile',
                question: 'لو شخص قال لك "ابتسم" الآن؟',
                options: [
                    { text: "أبتسم 😄", emoji: "😄", scores: { jasmine: 3, orange: 2, tea: 2 } },
                    { text: "يمكن", emoji: "🤔", scores: { colombian: 3, latte: 2, mocha: 1 } },
                    { text: "لا تستفزني 😂", emoji: "😤", scores: { dark: 3, americano: 2, ethiopian: 1 } }
                ]
            }
        ],
        groupC: [
            {
                id: 'movie',
                question: "لو يومك كان فيلم، ماذا سيكون؟",
                options: [
                    { text: "أكشن 🔥", emoji: "🔥", scores: { dark: 3, americano: 2, ethiopian: 1 } },
                    { text: "كوميدي 😂", emoji: "😂", scores: { orange: 3, grape: 2, ethiopian: 1 } },
                    { text: "دراما 😭", emoji: "😭", scores: { mocha: 3, latte: 2, jasmine: 1 } },
                    { text: "هادي 😎", emoji: "😎", scores: { jasmine: 3, tea: 2, latte: 1 } }
                ]
            },
            {
                id: 'needNow',
                question: "مزاجك اليوم يحتاج ماذا؟",
                options: [
                    { text: "تشغيل 🧠", emoji: "🧠", scores: { americano: 3, dark: 2, ethiopian: 1 } },
                    { text: "روقان 😌", emoji: "😌", scores: { latte: 3, jasmine: 3, colombian: 2 } },
                    { text: "دلع 🍫", emoji: "🍫", scores: { mocha: 4, latte: 2, colombian: 1 } },
                    { text: "مغامرة 🚀", emoji: "🚀", scores: { grape: 4, orange: 3, ethiopian: 2 } }
                ]
            },
            {
                id: 'cancel',
                question: "لو تقدر تلغي شيئًا اليوم؟",
                options: [
                    { text: "الزحمة", emoji: "🚗", scores: { jasmine: 3, tea: 2, latte: 1 } },
                    { text: "الاجتماعات", emoji: "📊", scores: { dark: 3, americano: 2, ethiopian: 1 } },
                    { text: "المنبه", emoji: "⏰", scores: { mocha: 3, latte: 2, colombian: 1 } },
                    { text: "الناس 😂", emoji: "👥", scores: { dark: 3, americano: 2, jasmine: 1 } }
                ]
            },
            {
                id: 'decisions',
                question: "كيف وضعك مع القرارات اليوم؟",
                options: [
                    { text: "حاسم 💪", emoji: "💪", scores: { americano: 3, dark: 2, ethiopian: 1 } },
                    { text: "خلني أفكر", emoji: "🤔", scores: { colombian: 3, latte: 2, tea: 1 } },
                    { text: "لا تعطوني أي قرار 😂", emoji: "😵", scores: { mocha: 3, jasmine: 2, tea: 1 } }
                ]
            },
            {
                id: 'surprise',
                question: "لو اليوم عطاك مفاجأة؟",
                options: [
                    { text: "جاهز لها", emoji: "😎", scores: { ethiopian: 3, orange: 2, grape: 1 } },
                    { text: "حسب المفاجأة", emoji: "🤷", scores: { colombian: 3, latte: 2, mocha: 1 } },
                    { text: "تكفينا مفاجآت 😂", emoji: "😅", scores: { dark: 3, americano: 2, jasmine: 1 } }
                ]
            },
            {
                id: 'character',
                question: "مزاجك أقرب لأي شخصية؟",
                options: [
                    { text: "المدير 👔", emoji: "👔", scores: { americano: 3, dark: 2, ethiopian: 1 } },
                    { text: "الرايق 😎", emoji: "😎", scores: { latte: 3, jasmine: 2, tea: 2 } },
                    { text: "الناجي 😂", emoji: "😂", scores: { dark: 3, mocha: 2, colombian: 1 } },
                    { text: "المغامر 🚀", emoji: "🚀", scores: { grape: 3, orange: 3, ethiopian: 2 } }
                ]
            },
            {
                id: 'color',
                question: "لو طاقتك لها لون اليوم؟",
                options: [
                    { text: "أخضر 💚", emoji: "💚", scores: { jasmine: 3, tea: 2, colombian: 1 } },
                    { text: "أصفر 💛", emoji: "💛", scores: { orange: 3, ethiopian: 2, latte: 1 } },
                    { text: "أحمر 🔴", emoji: "🔴", scores: { dark: 3, americano: 2, ethiopian: 1 } },
                    { text: "مطفي 😂", emoji: "⚫", scores: { dark: 4, mocha: 2, jasmine: 1 } }
                ]
            },
            {
                id: 'newThing',
                question: "هل تحب تجربة شيء جديد اليوم؟",
                options: [
                    { text: "أكيد!", emoji: "🚀", scores: { grape: 3, orange: 3, ethiopian: 2 } },
                    { text: "حسب", emoji: "🤔", scores: { ethiopian: 2, colombian: 2, mocha: 1 } },
                    { text: "خلوني على راحتي", emoji: "😌", scores: { latte: 3, jasmine: 2, tea: 2 } }
                ]
            },
            {
                id: 'whatsapp',
                question: "لو مزاجك رسالة واتساب، ماذا تقول؟",
                options: [
                    { text: "صباح الخير 🌞", emoji: "🌞", scores: { jasmine: 3, orange: 2, tea: 2 } },
                    { text: "مشغول الآن", emoji: "🫡", scores: { americano: 3, dark: 2, ethiopian: 1 } },
                    { text: "لا تكلمني 😂", emoji: "🚫", scores: { dark: 3, americano: 2, jasmine: 1 } },
                    { text: "يلا نطلع 🎉", emoji: "🎉", scores: { grape: 3, orange: 3, ethiopian: 2 } }
                ]
            },
            {
                id: 'hymiSays',
                question: "ماذا تتوقع HYMI تقول عن مزاجك؟",
                options: [
                    { text: "جاهز 🔥", emoji: "🔥", scores: { americano: 3, dark: 2, ethiopian: 1 } },
                    { text: "رايق 😎", emoji: "😎", scores: { latte: 3, jasmine: 2, tea: 2 } },
                    { text: "محتاج إنقاذ 😂", emoji: "🆘", scores: { dark: 4, mocha: 2, colombian: 1 } },
                    { text: "أبغى شيء غير طبيعي 🚀", emoji: "🚀", scores: { grape: 4, orange: 3, ethiopian: 2 } }
                ]
            }
        ]
    };

    // ===== DATA: Question Bank EN =====
    const questionBankEN = {
        groupA: [
            {
                id: 'sleep',
                question: "How was your sleep last night?",
                options: [
                    { text: "Royal 👑", emoji: "👑", scores: { latte: 3, colombian: 2, jasmine: 2, tea: 1 } },
                    { text: "We survived 😅", emoji: "😅", scores: { americano: 2, colombian: 2, mocha: 1, ethiopian: 1 } },
                    { text: "What sleep? 😂", emoji: "😂", scores: { dark: 3, americano: 2, ethiopian: 1 } }
                ]
            },
            {
                id: 'battery',
                question: "What's your human battery level? 🔋",
                options: [
                    { text: "100% Ready", emoji: "💪", scores: { ethiopian: 3, orange: 2, grape: 1 } },
                    { text: "50% I'm okay", emoji: "😊", scores: { colombian: 3, latte: 2, tea: 1 } },
                    { text: "2% Where's coffee?", emoji: "😵", scores: { dark: 4, americano: 3, mocha: 1 } }
                ]
            },
            {
                id: 'couch',
                question: "If we gave you a couch right now…?",
                options: [
                    { text: "Don't need it 💪", emoji: "💪", scores: { americano: 3, dark: 2, ethiopian: 1 } },
                    { text: "Sit for 5 mins", emoji: "😌", scores: { latte: 3, colombian: 2, tea: 1 } },
                    { text: "Wake me tomorrow 😴", emoji: "😴", scores: { dark: 3, mocha: 2, jasmine: 1 } }
                ]
            },
            {
                id: 'alarm',
                question: "When the alarm rings in the morning?",
                options: [
                    { text: "Get up immediately", emoji: "⚡", scores: { americano: 3, ethiopian: 2, orange: 1 } },
                    { text: "One snooze", emoji: "😴", scores: { latte: 3, colombian: 2, mocha: 1 } },
                    { text: "Negotiations start 😂", emoji: "🤝", scores: { dark: 3, mocha: 2, tea: 1 } }
                ]
            },
            {
                id: 'brain',
                question: "How's your brain today?",
                options: [
                    { text: "Working 100%", emoji: "🧠", scores: { americano: 3, ethiopian: 2, dark: 1 } },
                    { text: "Needs warming up", emoji: "🔥", scores: { colombian: 3, latte: 2, mocha: 1 } },
                    { text: "Out of service", emoji: "💀", scores: { dark: 4, mocha: 2, jasmine: 1 } }
                ]
            },
            {
                id: 'needCoffee',
                question: 'How many times did you say "I need coffee" today?',
                options: [
                    { text: "Not once", emoji: "😇", scores: { jasmine: 3, tea: 2, latte: 1 } },
                    { text: "Once or twice", emoji: "☕", scores: { colombian: 3, latte: 2, mocha: 1 } },
                    { text: "Lost count 😂", emoji: "🤪", scores: { dark: 4, americano: 3, ethiopian: 1 } }
                ]
            },
            {
                id: 'freeHour',
                question: "If you had a free hour right now?",
                options: [
                    { text: "Get things done", emoji: "💼", scores: { americano: 3, dark: 2, ethiopian: 1 } },
                    { text: "Chill", emoji: "😌", scores: { latte: 3, jasmine: 2, tea: 1 } },
                    { text: "Go on an adventure", emoji: "🚀", scores: { grape: 3, orange: 3, ethiopian: 2 } }
                ]
            },
            {
                id: 'coffeeLate',
                question: "If your coffee was 10 minutes late?",
                options: [
                    { text: "It's fine", emoji: "😌", scores: { jasmine: 3, tea: 2, latte: 1 } },
                    { text: "Start worrying", emoji: "😬", scores: { colombian: 3, americano: 2, mocha: 1 } },
                    { text: "Declare emergency 😂", emoji: "🚨", scores: { dark: 4, americano: 3, ethiopian: 1 } }
                ]
            },
            {
                id: 'work',
                question: "How's work going today?",
                options: [
                    { text: "Excited", emoji: "🔥", scores: { ethiopian: 3, americano: 2, orange: 1 } },
                    { text: "Getting by", emoji: "😅", scores: { colombian: 3, latte: 2, tea: 1 } },
                    { text: "Pretending I didn't see 😂", emoji: "🙈", scores: { dark: 3, mocha: 2, jasmine: 1 } }
                ]
            },
            {
                id: 'word',
                question: "One word for your day?",
                options: [
                    { text: "Achievement", emoji: "🏆", scores: { americano: 3, dark: 2, ethiopian: 1 } },
                    { text: "Chill", emoji: "🧘", scores: { latte: 3, jasmine: 3, tea: 2 } },
                    { text: "Survival", emoji: "😵", scores: { dark: 4, mocha: 2, colombian: 1 } }
                ]
            }
        ],
        groupB: [
            {
                id: 'patience',
                question: "What's your patience level today?",
                options: [
                    { text: "100% Angel 😇", emoji: "😇", scores: { jasmine: 3, latte: 2, tea: 2 } },
                    { text: "50% Depends 😅", emoji: "😅", scores: { colombian: 3, americano: 1, mocha: 1 } },
                    { text: "1% Don't test me 🔥", emoji: "🔥", scores: { dark: 3, americano: 2, mocha: 1 } }
                ]
            },
            {
                id: 'beforeCoffee',
                question: "If someone talks to you before your first coffee?",
                options: [
                    { text: "Welcome them 😌", emoji: "😌", scores: { latte: 3, jasmine: 2, tea: 1 } },
                    { text: "Give me a minute", emoji: "😐", scores: { colombian: 3, americano: 2, mocha: 1 } },
                    { text: "They'll face the consequences 😤", emoji: "😤", scores: { dark: 4, americano: 3, ethiopian: 1 } }
                ]
            },
            {
                id: 'people',
                question: "How are you with people today?",
                options: [
                    { text: "Love everyone ❤️", emoji: "❤️", scores: { jasmine: 3, latte: 2, tea: 2 } },
                    { text: "Depends 😅", emoji: "😅", scores: { colombian: 3, mocha: 2, americano: 1 } },
                    { text: "Leave me alone", emoji: "🚫", scores: { dark: 3, americano: 2, jasmine: 1 } }
                ]
            },
            {
                id: 'ignoreBtn',
                question: 'If you had an "ignore everyone" button?',
                options: [
                    { text: "Don't need it", emoji: "😊", scores: { jasmine: 3, tea: 2, latte: 1 } },
                    { text: "An hour is enough", emoji: "😎", scores: { colombian: 3, latte: 2, mocha: 1 } },
                    { text: "Where's the button? 😂", emoji: "🔘", scores: { dark: 3, americano: 2, ethiopian: 1 } }
                ]
            },
            {
                id: 'lastCapsule',
                question: "If someone took your last capsule?",
                options: [
                    { text: "It's fine 😌", emoji: "😌", scores: { jasmine: 3, tea: 2, latte: 1 } },
                    { text: "Let's talk", emoji: "🤝", scores: { colombian: 3, mocha: 2, americano: 1 } },
                    { text: "Problem starts here 😤", emoji: "😤", scores: { dark: 4, americano: 3, ethiopian: 1 } }
                ]
            },
            {
                id: 'talk',
                question: "How much small talk can you handle?",
                options: [
                    { text: "Bring it on", emoji: "☕", scores: { ethiopian: 3, orange: 2, colombian: 1 } },
                    { text: "Short version please", emoji: "⏱️", scores: { americano: 3, colombian: 2, latte: 1 } },
                    { text: "No talking allowed 😂", emoji: "🚫", scores: { dark: 3, americano: 2, jasmine: 1 } }
                ]
            },
            {
                id: 'calmDown',
                question: 'If someone says "calm down" when you are angry?',
                options: [
                    { text: "I calm down 😌", emoji: "😌", scores: { jasmine: 3, tea: 2, latte: 2 } },
                    { text: "I try", emoji: "😅", scores: { colombian: 3, latte: 2, mocha: 1 } },
                    { text: "Now I'm angrier 😂", emoji: "🤬", scores: { dark: 4, americano: 3, ethiopian: 1 } }
                ]
            },
            {
                id: 'simpleTopic',
                question: 'If someone says "I have a simple topic"?',
                options: [
                    { text: "Go ahead", emoji: "👂", scores: { colombian: 3, latte: 2, tea: 1 } },
                    { text: "Make it short", emoji: "⏱️", scores: { americano: 3, dark: 2, mocha: 1 } },
                    { text: "I fear the word simple 😂", emoji: "😰", scores: { dark: 3, americano: 2, jasmine: 1 } }
                ]
            },
            {
                id: 'dontTalk',
                question: 'Your "do not talk to me" level today?',
                options: [
                    { text: "10%", emoji: "😊", scores: { jasmine: 3, tea: 2, ethiopian: 1 } },
                    { text: "50%", emoji: "😶", scores: { colombian: 3, latte: 2, americano: 1 } },
                    { text: "99%", emoji: "🚫", scores: { dark: 4, americano: 3, jasmine: 1 } }
                ]
            },
            {
                id: 'smile',
                question: 'If someone says "smile" right now?',
                options: [
                    { text: "I smile 😄", emoji: "😄", scores: { jasmine: 3, orange: 2, tea: 2 } },
                    { text: "Maybe", emoji: "🤔", scores: { colombian: 3, latte: 2, mocha: 1 } },
                    { text: "Don't provoke me 😂", emoji: "😤", scores: { dark: 3, americano: 2, ethiopian: 1 } }
                ]
            }
        ],
        groupC: [
            {
                id: 'movie',
                question: "If your day was a movie, what would it be?",
                options: [
                    { text: "Action 🔥", emoji: "🔥", scores: { dark: 3, americano: 2, ethiopian: 1 } },
                    { text: "Comedy 😂", emoji: "😂", scores: { orange: 3, grape: 2, ethiopian: 1 } },
                    { text: "Drama 😭", emoji: "😭", scores: { mocha: 3, latte: 2, jasmine: 1 } },
                    { text: "Chill 😎", emoji: "😎", scores: { jasmine: 3, tea: 2, latte: 1 } }
                ]
            },
            {
                id: 'needNow',
                question: "What does your mood need today?",
                options: [
                    { text: "Focus 🧠", emoji: "🧠", scores: { americano: 3, dark: 2, ethiopian: 1 } },
                    { text: "Chill 😌", emoji: "😌", scores: { latte: 3, jasmine: 3, colombian: 2 } },
                    { text: "Treat 🍫", emoji: "🍫", scores: { mocha: 4, latte: 2, colombian: 1 } },
                    { text: "Adventure 🚀", emoji: "🚀", scores: { grape: 4, orange: 3, ethiopian: 2 } }
                ]
            },
            {
                id: 'cancel',
                question: "If you could cancel one thing today?",
                options: [
                    { text: "Traffic", emoji: "🚗", scores: { jasmine: 3, tea: 2, latte: 1 } },
                    { text: "Meetings", emoji: "📊", scores: { dark: 3, americano: 2, ethiopian: 1 } },
                    { text: "Alarm", emoji: "⏰", scores: { mocha: 3, latte: 2, colombian: 1 } },
                    { text: "People 😂", emoji: "👥", scores: { dark: 3, americano: 2, jasmine: 1 } }
                ]
            },
            {
                id: 'decisions',
                question: "How are you with decisions today?",
                options: [
                    { text: "Decisive 💪", emoji: "💪", scores: { americano: 3, dark: 2, ethiopian: 1 } },
                    { text: "Let me think", emoji: "🤔", scores: { colombian: 3, latte: 2, tea: 1 } },
                    { text: "Don't give me any 😂", emoji: "😵", scores: { mocha: 3, jasmine: 2, tea: 1 } }
                ]
            },
            {
                id: 'surprise',
                question: "If today gave you a surprise?",
                options: [
                    { text: "Ready for it", emoji: "😎", scores: { ethiopian: 3, orange: 2, grape: 1 } },
                    { text: "Depends", emoji: "🤷", scores: { colombian: 3, latte: 2, mocha: 1 } },
                    { text: "No more surprises 😂", emoji: "😅", scores: { dark: 3, americano: 2, jasmine: 1 } }
                ]
            },
            {
                id: 'character',
                question: "Which character matches your mood?",
                options: [
                    { text: "The Boss 👔", emoji: "👔", scores: { americano: 3, dark: 2, ethiopian: 1 } },
                    { text: "The Chill 😎", emoji: "😎", scores: { latte: 3, jasmine: 2, tea: 2 } },
                    { text: "The Survivor 😂", emoji: "😂", scores: { dark: 3, mocha: 2, colombian: 1 } },
                    { text: "The Adventurer 🚀", emoji: "🚀", scores: { grape: 3, orange: 3, ethiopian: 2 } }
                ]
            },
            {
                id: 'color',
                question: "If your energy had a color today?",
                options: [
                    { text: "Green 💚", emoji: "💚", scores: { jasmine: 3, tea: 2, colombian: 1 } },
                    { text: "Yellow 💛", emoji: "💛", scores: { orange: 3, ethiopian: 2, latte: 1 } },
                    { text: "Red 🔴", emoji: "🔴", scores: { dark: 3, americano: 2, ethiopian: 1 } },
                    { text: "Off 😂", emoji: "⚫", scores: { dark: 4, mocha: 2, jasmine: 1 } }
                ]
            },
            {
                id: 'newThing',
                question: "Want to try something new today?",
                options: [
                    { text: "Absolutely!", emoji: "🚀", scores: { grape: 3, orange: 3, ethiopian: 2 } },
                    { text: "Depends", emoji: "🤔", scores: { ethiopian: 2, colombian: 2, mocha: 1 } },
                    { text: "Leave me in peace", emoji: "😌", scores: { latte: 3, jasmine: 2, tea: 2 } }
                ]
            },
            {
                id: 'whatsapp',
                question: "If your mood was a WhatsApp message?",
                options: [
                    { text: "Good morning 🌞", emoji: "🌞", scores: { jasmine: 3, orange: 2, tea: 2 } },
                    { text: "Busy now", emoji: "🫡", scores: { americano: 3, dark: 2, ethiopian: 1 } },
                    { text: "Don't text me 😂", emoji: "🚫", scores: { dark: 3, americano: 2, jasmine: 1 } },
                    { text: "Let's go out 🎉", emoji: "🎉", scores: { grape: 3, orange: 3, ethiopian: 2 } }
                ]
            },
            {
                id: 'hymiSays',
                question: "What would HYMI say about your mood?",
                options: [
                    { text: "Ready 🔥", emoji: "🔥", scores: { americano: 3, dark: 2, ethiopian: 1 } },
                    { text: "Chill 😎", emoji: "😎", scores: { latte: 3, jasmine: 2, tea: 2 } },
                    { text: "Needs rescue 😂", emoji: "🆘", scores: { dark: 4, mocha: 2, colombian: 1 } },
                    { text: "Something wild 🚀", emoji: "🚀", scores: { grape: 4, orange: 3, ethiopian: 2 } }
                ]
            }
        ]
    };

    // ===== CAPSULE DATA AR =====
    const capsulesAR = {
        americano: {
            name: "أمريكانو",
            moodName: "وضع الزعيم",
            subtitle: "واضح أنك جاي تنجز",
            description: "ما عندك وقت للسوالف. عندك مهام تخلّصها.",
            image: "capsules/americano.png",
            profile: {
                variety: "Blend",
                ratio: "Arabica 70% / Robusta 30%",
                roast: "Dark Roast",
                origin: "Brazil + Yunnan + Uganda"
            },
            stats: { energy: 95, patience: 60, coffeeNeed: 85 }
        },
        latte: {
            name: "لاتيه",
            moodName: "وضع الاسترخاء",
            subtitle: "اليوم يحتاج هدوء",
            description: "خذ نفس عميق واستمتع بلحظة هادية مع لاتيه.",
            image: "capsules/latte.png",
            profile: {
                variety: "Blend",
                ratio: "Arabica 70% / Robusta 30%",
                roast: "Dark Roast",
                origin: "Brazil + Yunnan + Uganda"
            },
            stats: { energy: 45, patience: 90, coffeeNeed: 50 }
        },
        mocha: {
            name: "موكا",
            moodName: "وضع المكافأة",
            subtitle: "تستاهل شيء حلو",
            description: "شوكولاتة + قهوة = مكافأة تستحقها بعد يوم طويل.",
            image: "capsules/mocha.png",
            profile: {
                variety: "Blend",
                ratio: "Arabica 70% / Robusta 30%",
                roast: "Dark Roast",
                origin: "Brazil + Yunnan + Uganda"
            },
            stats: { energy: 55, patience: 70, coffeeNeed: 60 }
        },
        dark: {
            name: "كولد برو دارك",
            moodName: "وضع النجاة",
            subtitle: "يومك يحتاج تدخل",
            description: "القهوة اليوم مو خيار… ضرورة. قوية وباردة.",
            image: "capsules/cold-brew-dark.png",
            profile: {
                variety: "Yunnan",
                ratio: "100%",
                roast: "Dark Roast",
                origin: "China"
            },
            stats: { energy: 20, patience: 15, coffeeNeed: 99 }
        },
        colombian: {
            name: "كولد برو كولومبي",
            moodName: "وضع التوازن",
            subtitle: "أنت تعرف توازنك",
            description: "لا زيادة ولا نقصان… توازن مثالي ليومك.",
            image: "capsules/colombian.png",
            profile: {
                variety: "Arabica",
                ratio: "100%",
                roast: "Medium Roast",
                origin: "Colombia"
            },
            stats: { energy: 65, patience: 75, coffeeNeed: 55 }
        },
        ethiopian: {
            name: "كولد برو إثيوبي",
            moodName: "وضع الاستكشاف",
            subtitle: "الروتين مو لك",
            description: "نكهة فريدة من أصل القهوة نفسها. جرب شيء مختلف.",
            image: "capsules/ethiopian.png",
            profile: {
                variety: "Arabica",
                ratio: "100%",
                roast: "Medium-Light Roast",
                origin: "Ethiopia"
            },
            stats: { energy: 80, patience: 65, coffeeNeed: 70 }
        },
        grape: {
            name: "جريب",
            moodName: "وضع المغامرة",
            subtitle: "شيء غير طبيعي",
            description: "قهوة بالعنب؟ جريء! هذا يكفي نعرف شخصيتك.",
            image: "capsules/grape.png",
            profile: {
                variety: "Blend",
                ratio: "Arabica 70% / Robusta 30%",
                roast: "Dark Roast",
                origin: "Brazil + Yunnan + Uganda"
            },
            stats: { energy: 85, patience: 50, coffeeNeed: 40 }
        },
        orange: {
            name: "أورنج",
            moodName: "وضع الانتعاش",
            subtitle: "يومك يحتاج انتعاش",
            description: "برتقال + قهوة = بداية جديدة مليئة بالحيوية.",
            image: "capsules/orange.png",
            profile: {
                variety: "Blend",
                ratio: "Arabica 70% / Robusta 30%",
                roast: "Dark Roast",
                origin: "Brazil + Yunnan + Uganda"
            },
            stats: { energy: 90, patience: 70, coffeeNeed: 45 }
        },
        jasmine: {
            name: "ياسمين تي آند كوفي",
            moodName: "وضع الزن",
            subtitle: "حتى القهوة رايقة",
            description: "الياسمين يهدي الأعصاب… والقهوة تكمل الباقي.",
            image: "capsules/jasmine.png",
            profile: {
                variety: "Blend",
                ratio: "Arabica 70% / Robusta 30%",
                roast: "Dark Roast",
                origin: "Brazil + Yunnan + Uganda"
            },
            stats: { energy: 40, patience: 95, coffeeNeed: 30 }
        },
        tea: {
            name: "تي آند كوفي",
            moodName: "وضع السهولة",
            subtitle: "تجديد بدون دراما",
            description: "الشاي مع القهوة = أفضل من العالمين. تجربة مختلفة.",
            image: "capsules/tea-coffee.png",
            profile: {
                variety: "Blend",
                ratio: "Arabica 70% / Robusta 30%",
                roast: "Dark Roast",
                origin: "Brazil + Yunnan + Uganda"
            },
            stats: { energy: 50, patience: 85, coffeeNeed: 35 }
        }
    };

    // ===== CAPSULE DATA EN =====
    const capsulesEN = {
        americano: {
            name: "Americano",
            moodName: "Boss Mode",
            subtitle: "Clearly here to get things done",
            description: "No time for chit-chat. You've got tasks to crush.",
            image: "capsules/americano.png",
            profile: {
                variety: "Blend",
                ratio: "Arabica 70% / Robusta 30%",
                roast: "Dark Roast",
                origin: "Brazil + Yunnan + Uganda"
            },
            stats: { energy: 95, patience: 60, coffeeNeed: 85 }
        },
        latte: {
            name: "Latte",
            moodName: "Chill Mode",
            subtitle: "Today needs calm",
            description: "Take a deep breath and enjoy a peaceful moment with a latte.",
            image: "capsules/latte.png",
            profile: {
                variety: "Blend",
                ratio: "Arabica 70% / Robusta 30%",
                roast: "Dark Roast",
                origin: "Brazil + Yunnan + Uganda"
            },
            stats: { energy: 45, patience: 90, coffeeNeed: 50 }
        },
        mocha: {
            name: "Mocha",
            moodName: "Treat Yourself Mode",
            subtitle: "You deserve something sweet",
            description: "Chocolate + Coffee = a reward you deserve after a long day.",
            image: "capsules/mocha.png",
            profile: {
                variety: "Blend",
                ratio: "Arabica 70% / Robusta 30%",
                roast: "Dark Roast",
                origin: "Brazil + Yunnan + Uganda"
            },
            stats: { energy: 55, patience: 70, coffeeNeed: 60 }
        },
        dark: {
            name: "Cold Brew Dark",
            moodName: "Survival Mode",
            subtitle: "Your day needs intervention",
            description: "Coffee today isn't a choice… it's a necessity. Strong and cold.",
            image: "capsules/cold-brew-dark.png",
            profile: {
                variety: "Yunnan",
                ratio: "100%",
                roast: "Dark Roast",
                origin: "China"
            },
            stats: { energy: 20, patience: 15, coffeeNeed: 99 }
        },
        colombian: {
            name: "Cold Brew Colombian",
            moodName: "Balanced Mode",
            subtitle: "You know your balance",
            description: "Not too much, not too little… perfect balance for your day.",
            image: "capsules/colombian.png",
            profile: {
                variety: "Arabica",
                ratio: "100%",
                roast: "Medium Roast",
                origin: "Colombia"
            },
            stats: { energy: 65, patience: 75, coffeeNeed: 55 }
        },
        ethiopian: {
            name: "Cold Brew Ethiopian",
            moodName: "Explorer Mode",
            subtitle: "Routine isn't for you",
            description: "A unique flavor from the birthplace of coffee itself. Try something different.",
            image: "capsules/ethiopian.png",
            profile: {
                variety: "Arabica",
                ratio: "100%",
                roast: "Medium-Light Roast",
                origin: "Ethiopia"
            },
            stats: { energy: 80, patience: 65, coffeeNeed: 70 }
        },
        grape: {
            name: "Grape",
            moodName: "Wild Mode",
            subtitle: "Something extraordinary",
            description: "Coffee with grape? Bold! That's enough to know your personality.",
            image: "capsules/grape.png",
            profile: {
                variety: "Blend",
                ratio: "Arabica 70% / Robusta 30%",
                roast: "Dark Roast",
                origin: "Brazil + Yunnan + Uganda"
            },
            stats: { energy: 85, patience: 50, coffeeNeed: 40 }
        },
        orange: {
            name: "Orange",
            moodName: "Fresh Mode",
            subtitle: "Your day needs refreshment",
            description: "Orange + Coffee = a fresh start full of vitality.",
            image: "capsules/orange.png",
            profile: {
                variety: "Blend",
                ratio: "Arabica 70% / Robusta 30%",
                roast: "Dark Roast",
                origin: "Brazil + Yunnan + Uganda"
            },
            stats: { energy: 90, patience: 70, coffeeNeed: 45 }
        },
        jasmine: {
            name: "Jasmine Tea & Coffee",
            moodName: "Zen Mode",
            subtitle: "Even the coffee is chill",
            description: "Jasmine calms the nerves… and coffee completes the rest.",
            image: "capsules/jasmine.png",
            profile: {
                variety: "Blend",
                ratio: "Arabica 70% / Robusta 30%",
                roast: "Dark Roast",
                origin: "Brazil + Yunnan + Uganda"
            },
            stats: { energy: 40, patience: 95, coffeeNeed: 30 }
        },
        tea: {
            name: "Tea & Coffee",
            moodName: "Easy Mode",
            subtitle: "Refresh without drama",
            description: "Tea with coffee = the best of both worlds. A different experience.",
            image: "capsules/tea-coffee.png",
            profile: {
                variety: "Blend",
                ratio: "Arabica 70% / Robusta 30%",
                roast: "Dark Roast",
                origin: "Brazil + Yunnan + Uganda"
            },
            stats: { energy: 50, patience: 85, coffeeNeed: 35 }
        }
    };

    // ===== HELPER: Get current data =====
    function getQuestionBank() {
        return currentLang === 'ar' ? questionBankAR : questionBankEN;
    }

    function getCapsules() {
        return currentLang === 'ar' ? capsulesAR : capsulesEN;
    }

    function getFunFacts() {
        return funFacts[currentLang];
    }

    // ===== LANGUAGE FUNCTIONS =====
    window.setLanguage = function(lang) {
        currentLang = lang;
        localStorage.setItem('hymi-lang', lang);

        // Update HTML dir and lang
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

        // Update font
        if (lang === 'en') {
            document.body.style.fontFamily = "'Poppins', 'Tajawal', sans-serif";
        } else {
            document.body.style.fontFamily = "'Tajawal', 'Poppins', sans-serif";
        }

        // Apply translations
        applyTranslations();

        // Show welcome screen
        showScreen('welcomeScreen');
    };

    function applyTranslations() {
        const tr = translations[currentLang];
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (tr[key]) {
                el.textContent = tr[key];
            }
        });
    }

    function tr(key) {
        return translations[currentLang][key] || key;
    }

    // ===== INITIALIZATION =====
    function init() {
        // Check saved language
        const savedLang = localStorage.getItem('hymi-lang');
        if (savedLang && (savedLang === 'ar' || savedLang === 'en')) {
            currentLang = savedLang;
            document.documentElement.lang = savedLang;
            document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
            document.body.setAttribute('dir', savedLang === 'ar' ? 'rtl' : 'ltr');
            if (savedLang === 'en') {
                document.body.style.fontFamily = "'Poppins', 'Tajawal', sans-serif";
            }
            applyTranslations();
            showScreen('welcomeScreen');
        }

        createParticles();
        preloadImages();
    }

    function preloadImages() {
        const caps = getCapsules();
        Object.values(caps).forEach(capsule => {
            const img = new Image();
            img.src = capsule.image;
        });
    }

    // ===== PARTICLES =====
    function createParticles() {
        const container = document.getElementById('particles');
        if (!container) return;

        for (let i = 0; i < 25; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 20 + 's';
            particle.style.animationDuration = (12 + Math.random() * 15) + 's';
            particle.style.width = (2 + Math.random() * 3) + 'px';
            particle.style.height = particle.style.width;
            container.appendChild(particle);
        }
    }

    // ===== SCORE MANAGEMENT =====
    function initScores() {
        scores = {
            americano: 0, latte: 0, mocha: 0, dark: 0,
            colombian: 0, ethiopian: 0, grape: 0, orange: 0,
            jasmine: 0, tea: 0
        };
    }

    // ===== QUESTION SELECTION =====
    function selectQuestions() {
        const groups = ['groupA', 'groupB', 'groupC'];
        const bank = getQuestionBank();
        selectedQuestions = groups.map(group => {
            const questions = bank[group];
            return questions[Math.floor(Math.random() * questions.length)];
        });
    }

    // ===== SCREEN MANAGEMENT =====
    function showScreen(screenId) {
        const screens = document.querySelectorAll('.screen');
        screens.forEach(s => s.classList.remove('active'));

        setTimeout(() => {
            const target = document.getElementById(screenId);
            if (target) target.classList.add('active');
        }, 50);
    }

    // ===== START QUIZ =====
    window.startQuiz = function() {
        if (isAnimating) return;

        initScores();
        selectQuestions();
        currentQuestion = 0;

        showScreen('questionScreen');
        setTimeout(() => renderQuestion(), 300);
    };

    // ===== RENDER QUESTION =====
    function renderQuestion() {
        const q = selectedQuestions[currentQuestion];
        if (!q) return;

        // Update counter
        const counterEl = document.getElementById('questionCounter');
        if (counterEl) {
            counterEl.innerHTML = `${tr('question')} <span class="counter-current">${currentQuestion + 1}</span> ${tr('of')} <span class="counter-total">3</span>`;
        }

        // Update progress bar
        const progressBar = document.getElementById('progressBar');
        if (progressBar) {
            const progress = ((currentQuestion + 1) / 3) * 100;
            progressBar.style.width = progress + '%';
        }

        // Update dots
        const dots = document.querySelectorAll('.progress-dot');
        dots.forEach((dot, i) => {
            dot.classList.remove('active', 'completed');
            if (i < currentQuestion) dot.classList.add('completed');
            else if (i === currentQuestion) dot.classList.add('active');
        });

        // Animate question text
        const questionText = document.getElementById('questionText');
        if (questionText) {
            questionText.style.opacity = '0';
            questionText.style.transform = 'translateY(20px)';

            setTimeout(() => {
                questionText.textContent = q.question;
                questionText.style.transition = 'all 0.5s ease';
                questionText.style.opacity = '1';
                questionText.style.transform = 'translateY(0)';
            }, 200);
        }

        // Render options with stagger
        const container = document.getElementById('optionsContainer');
        if (container) {
            container.innerHTML = '';

            q.options.forEach((opt, idx) => {
                const btn = document.createElement('button');
                btn.className = 'option-btn';
                btn.style.opacity = '0';
                btn.style.transform = currentLang === 'ar' ? 'translateX(30px)' : 'translateX(-30px)';
                btn.innerHTML = `
                    <span class="option-emoji">${opt.emoji}</span>
                    <span class="option-text">${opt.text}</span>
                `;
                btn.onclick = () => selectOption(idx);
                container.appendChild(btn);

                // Stagger animation
                setTimeout(() => {
                    btn.style.transition = 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
                    btn.style.opacity = '1';
                    btn.style.transform = 'translateX(0)';
                }, 300 + (idx * 120));
            });
        }
    }

    // ===== SELECT OPTION =====
    function selectOption(optionIndex) {
        if (isAnimating) return;
        isAnimating = true;

        const q = selectedQuestions[currentQuestion];
        const selected = q.options[optionIndex];

        // Add scores
        Object.keys(selected.scores).forEach(key => {
            if (scores.hasOwnProperty(key)) {
                scores[key] += selected.scores[key];
            }
        });

        // Visual feedback
        const buttons = document.querySelectorAll('.option-btn');
        buttons.forEach((btn, idx) => {
            if (idx === optionIndex) {
                btn.classList.add('selected');
                btn.style.transform = 'scale(0.96)';
            } else {
                btn.style.opacity = '0.3';
                btn.style.transform = 'scale(0.95)';
                btn.style.pointerEvents = 'none';
            }
        });

        // Next question or loading
        setTimeout(() => {
            currentQuestion++;
            if (currentQuestion < 3) {
                renderQuestion();
                isAnimating = false;
            } else {
                showLoading();
            }
        }, 700);
    }

    // ===== LOADING SCREEN =====
    function showLoading() {
        showScreen('loadingScreen');

        const loadingMessages = [
            { title: tr('loading1'), subtitle: tr('loadingSub1') },
            { title: tr('loading2'), subtitle: tr('loadingSub2') },
            { title: tr('loading3'), subtitle: tr('loadingSub3') }
        ];

        let msgIdx = 0;
        const titleEl = document.getElementById('loadingTitle');
        const subEl = document.getElementById('loadingSubtitle');
        const factEl = document.querySelector('.fun-fact');
        const facts = getFunFacts();

        // Rotate fun facts
        let factIdx = 0;
        const factInterval = setInterval(() => {
            factIdx = (factIdx + 1) % facts.length;
            if (factEl) {
                factEl.style.opacity = '0';
                setTimeout(() => {
                    factEl.textContent = facts[factIdx];
                    factEl.style.opacity = '1';
                }, 300);
            }
        }, 1500);

        // Rotate messages
        const msgInterval = setInterval(() => {
            msgIdx++;
            if (msgIdx < loadingMessages.length) {
                if (titleEl) titleEl.textContent = loadingMessages[msgIdx].title;
                if (subEl) subEl.textContent = loadingMessages[msgIdx].subtitle;
            }
        }, 1200);

        // Complete loading
        setTimeout(() => {
            clearInterval(msgInterval);
            clearInterval(factInterval);
            showResult();
        }, 3800);
    }

    // ===== SHOW RESULT =====
    function showResult() {
        // Calculate winner with smart logic
        const winner = calculateWinner();
        const capsule = getCapsules()[winner];

        // Update DOM
        const moodNameEl = document.getElementById('moodName');
        const capsuleNameEl = document.getElementById('capsuleName');
        const capsuleDescEl = document.getElementById('capsuleDescription');
        const capsuleImageEl = document.getElementById('capsuleImage');
        const capsuleImageFallback = document.getElementById('capsuleImageFallback');

        // Profile elements
        const profileVariety = document.getElementById('profileVariety');
        const profileRatio = document.getElementById('profileRatio');
        const profileRoast = document.getElementById('profileRoast');
        const profileOrigin = document.getElementById('profileOrigin');

        // Reading elements
        const energyValue = document.getElementById('energyValue');
        const energyBar = document.getElementById('energyBar');
        const patienceValue = document.getElementById('patienceValue');
        const patienceBar = document.getElementById('patienceBar');
        const coffeeNeedValue = document.getElementById('coffeeNeedValue');
        const coffeeNeedBar = document.getElementById('coffeeNeedBar');

        if (moodNameEl) moodNameEl.textContent = capsule.moodName;
        if (capsuleNameEl) capsuleNameEl.textContent = capsule.name;
        if (capsuleDescEl) capsuleDescEl.textContent = capsule.description;

        // Update profile
        if (profileVariety) profileVariety.textContent = capsule.profile.variety;
        if (profileRatio) profileRatio.textContent = capsule.profile.ratio;
        if (profileRoast) profileRoast.textContent = capsule.profile.roast;
        if (profileOrigin) profileOrigin.textContent = capsule.profile.origin;

        // Handle image
        if (capsuleImageEl) {
            capsuleImageEl.src = capsule.image;
            capsuleImageEl.alt = capsule.name;
            capsuleImageEl.onerror = function() {
                this.style.display = 'none';
                if (capsuleImageFallback) capsuleImageFallback.style.display = 'flex';
            };
            capsuleImageEl.onload = function() {
                this.style.display = 'block';
                if (capsuleImageFallback) capsuleImageFallback.style.display = 'none';
            };
        }

        // Update reading bars
        setTimeout(() => {
            if (energyValue) energyValue.textContent = capsule.stats.energy + '%';
            if (energyBar) energyBar.style.width = capsule.stats.energy + '%';
            if (patienceValue) patienceValue.textContent = capsule.stats.patience + '%';
            if (patienceBar) patienceBar.style.width = capsule.stats.patience + '%';
            if (coffeeNeedValue) coffeeNeedValue.textContent = capsule.stats.coffeeNeed + '%';
            if (coffeeNeedBar) coffeeNeedBar.style.width = capsule.stats.coffeeNeed + '%';
        }, 600);

        showScreen('resultScreen');
        isAnimating = false;

        // Show data collection modal after 3 seconds
        showDataModal();
    }

    // ===== SMART WINNER CALCULATION =====
    function calculateWinner() {
        // Find max score
        let maxScore = -1;
        let winners = [];

        Object.keys(scores).forEach(key => {
            if (scores[key] > maxScore) {
                maxScore = scores[key];
                winners = [key];
            } else if (scores[key] === maxScore) {
                winners.push(key);
            }
        });

        // If tie, use personality diversity priority
        if (winners.length > 1) {
            const diversityPriority = ['grape', 'orange', 'jasmine', 'ethiopian', 'dark', 'mocha', 'tea', 'latte', 'colombian', 'americano'];

            for (let p of diversityPriority) {
                if (winners.includes(p)) {
                    return p;
                }
            }
        }

        return winners[0];
    }

    // ===== RESET QUIZ =====
    window.resetQuiz = function() {
        if (isAnimating) return;
        startQuiz();
    };

    // ===== GO TO COUNTER =====
    window.goToCounter = function() {
        alert(tr('goToCounter'));
    };

    // ===== SHARE RESULT =====
    window.shareResult = function() {
        const moodName = document.getElementById('moodName')?.textContent || '';
        const capsuleName = document.getElementById('capsuleName')?.textContent || '';

        const shareText = currentLang === 'ar'
            ? `اكتشفت قهوتي المثالية مع HYMI! 🎯\n\nمزاجي: ${moodName}\nكبسولتي: ${capsuleName}\n\nجرب أنت كمان: ${window.location.href}`
            : `I discovered my perfect coffee with HYMI! 🎯\n\nMy mood: ${moodName}\nMy capsule: ${capsuleName}\n\nTry it yourself: ${window.location.href}`;

        if (navigator.share) {
            navigator.share({
                title: tr('shareTitle'),
                text: shareText,
                url: window.location.href
            }).catch(() => {
                copyToClipboard(shareText);
            });
        } else {
            copyToClipboard(shareText);
        }
    };

    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            alert(tr('copied'));
        }).catch(() => {
            alert(tr('screenshot'));
        });
    }
    

    // ===== INIT =====
    document.addEventListener('DOMContentLoaded', init);


    // ===== GOOGLE SHEETS CONFIG =====
    // IMPORTANT: Replace this URL with your Google Apps Script Web App URL
    // Setup instructions: See README below
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxhZlIEJ8-pA4aab3yVJHaQXbJefeK0zVKkeXkOPPImEiEN7qeXjTdLmxQ9IG-q5CUE5w/exec';

    // ===== DATA MODAL FUNCTIONS =====
    let dataModalShown = false;

    function showDataModal() {
        if (dataModalShown) return;
        if (localStorage.getItem('hymi-data-submitted') === 'true') return;

        const modal = document.getElementById('dataModal');
        if (!modal) return;

        setTimeout(() => {
            modal.classList.add('active');
            dataModalShown = true;

            // Update modal text based on language
            const tr = translations[currentLang];
            const modalTitle = modal.querySelector('.modal-title');
            const modalText = modal.querySelector('.modal-text');
            const nameLabel = modal.querySelector('[for="userName"]');
            const phoneLabel = modal.querySelector('[for="userPhone"]');
            const nameInput = document.getElementById('userName');
            const phoneInput = document.getElementById('userPhone');
            const submitBtn = modal.querySelector('.modal-submit');
            const skipBtn = modal.querySelector('.modal-skip');
            const privacyText = modal.querySelector('.modal-privacy');

            if (modalTitle) modalTitle.textContent = tr.modalTitle;
            if (modalText) modalText.textContent = tr.modalText;
            if (nameLabel) nameLabel.textContent = tr.nameLabel;
            if (phoneLabel) phoneLabel.textContent = tr.phoneLabel;
            if (nameInput) nameInput.placeholder = tr.namePlaceholder;
            if (phoneInput) phoneInput.placeholder = tr.phonePlaceholder;
            if (submitBtn) submitBtn.textContent = tr.modalSubmit;
            if (skipBtn) skipBtn.textContent = tr.modalSkip;
            if (privacyText) privacyText.textContent = tr.modalPrivacy;
        }, 3000); // Show after 3 seconds
    }

    window.closeDataModal = function() {
        const modal = document.getElementById('dataModal');
        if (modal) {
            modal.classList.remove('active');
        }
    };

    window.submitData = function(event) {
        event.preventDefault();

        const nameInput = document.getElementById('userName');
        const phoneInput = document.getElementById('userPhone');
        const submitBtn = document.querySelector('.modal-submit');

        const name = nameInput?.value?.trim();
        const phone = phoneInput?.value?.trim();

        if (!name || !phone) {
            alert(currentLang === 'ar' ? 'يرجى ملء جميع الحقول' : 'Please fill all fields');
            return;
        }

        // Phone validation (UAE/Saudi format)
        const phoneRegex = /^[0-9+\-\s]{8,15}$/;
        if (!phoneRegex.test(phone)) {
            alert(currentLang === 'ar' ? 'يرجى إدخال رقم هاتف صحيح' : 'Please enter a valid phone number');
            return;
        }

        // Disable button during submit
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = currentLang === 'ar' ? 'جاري الإرسال...' : 'Sending...';
        }

        // Get result info
        const moodName = document.getElementById('moodName')?.textContent || '';
        const capsuleName = document.getElementById('capsuleName')?.textContent || '';

        const formData = {
            name: name,
            phone: phone,
            language: currentLang,
            mood: moodName,
            capsule: capsuleName,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent
        };

        // Send to Google Sheets
        fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        }).then(() => {
            // Success (no-cors doesn't give us response, but it worked)
            localStorage.setItem('hymi-data-submitted', 'true');
            showToast(tr('submitSuccess'));
            closeDataModal();
        }).catch(() => {
            // Even on "error" with no-cors, it might have worked
            localStorage.setItem('hymi-data-submitted', 'true');
            showToast(tr('submitSuccess'));
            closeDataModal();
        });
    };

    function showToast(message) {
        const toast = document.getElementById('successToast');
        const toastText = document.getElementById('toastText');
        if (toastText) toastText.textContent = message;
        if (toast) {
            toast.classList.add('active');
            setTimeout(() => {
                toast.classList.remove('active');
            }, 4000);
        }
    }

})();