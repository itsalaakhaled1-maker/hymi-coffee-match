// ===== HYMI Coffee Match - Mood Engine =====
// 30 Questions | 3 Groups | 10 Capsules | Smart Scoring

(function() {
    'use strict';

    // ===== DATA: Question Bank (30 Questions in 3 Groups) =====
    const questionBank = {
        groupA: [ // Energy State - حالتك اليوم
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
        groupB: [ // Mood/Patience - العصبية والتعامل
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
        groupC: [ // Personality - الشخصية والمزاج
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

    // ===== CAPSULE DATA =====
    const capsules = {
        americano: {
            name: "Americano",
            moodName: "Boss Mode 👔",
            subtitle: "واضح أنك جاي تنجز",
            description: "واضح أنك جاي تنجز، مو جاي تسولف. هذه القهوة للناس اللي يبغون يسوون شغل حقيقي.",
            image: "capsules/americano.png",
            tags: ["قوي", "مركز", "سريع"],
            stats: { energy: 95, patience: 60, coffeeNeed: 85 },
            alternatives: ["dark", "ethiopian"]
        },
        latte: {
            name: "Latte",
            moodName: "Chill Mode 😎",
            subtitle: "اليوم يحتاج هدوء",
            description: "اليوم يحتاج هدوء… لا تعقدها. الحليب مع القهوة = توازن، زي توازنك أنت اليوم.",
            image: "capsules/latte.png",
            tags: ["ناعم", "متوازن", "رايق"],
            stats: { energy: 45, patience: 90, coffeeNeed: 50 },
            alternatives: ["colombian", "jasmine"]
        },
        mocha: {
            name: "Mocha",
            moodName: "Treat Yourself 🍫",
            subtitle: "تستاهل شيء حلو",
            description: "واضح أنك تستاهل شيء حلو اليوم. الشوكولاتة مع القهوة = مكافأة تستحقها.",
            image: "capsules/mocha.png",
            tags: ["حلو", "دسم", "مكافأة"],
            stats: { energy: 55, patience: 70, coffeeNeed: 60 },
            alternatives: ["latte", "tea"]
        },
        dark: {
            name: "Cold Brew Dark",
            moodName: "Survival Mode 🔥",
            subtitle: "يومك يحتاج تدخل",
            description: "القهوة اليوم مو خيار… ضرورة. قوية، باردة، وعلى مستوى المزاج اللي أنت فيه.",
            image: "capsules/cold-brew-dark.png",
            tags: ["قوي جدًا", "بارد", "إنقاذ"],
            stats: { energy: 20, patience: 15, coffeeNeed: 99 },
            alternatives: ["americano", "ethiopian"]
        },
        colombian: {
            name: "Cold Brew Colombian",
            moodName: "Balanced Mode ⚖️",
            subtitle: "أنت تعرف توازنك",
            description: "لا زيادة ولا نقصان… أنت تعرف توازن يومك. نكهة كلاسيكية بأسلوب عصري.",
            image: "capsules/colombian.png",
            tags: ["متوازن", "كلاسيكي", "اجتماعي"],
            stats: { energy: 65, patience: 75, coffeeNeed: 55 },
            alternatives: ["latte", "ethiopian"]
        },
        ethiopian: {
            name: "Cold Brew Ethiopian",
            moodName: "Explorer Mode 🌍",
            subtitle: "الروتين مو لك",
            description: "الروتين مو لك. تحب الشيء المختلف. نكهة فريدة من أصل القهوة نفسها.",
            image: "capsules/ethiopian.png",
            tags: ["فريد", "فاكهي", "مغامر"],
            stats: { energy: 80, patience: 65, coffeeNeed: 70 },
            alternatives: ["orange", "grape"]
        },
        grape: {
            name: "Grape",
            moodName: "Wild Mode 🍇",
            subtitle: "شيء غير طبيعي",
            description: "عادي عندك تجرب قهوة بالعنب… وهذا يكفي نعرف شخصيتك. جريء وما يخاف من الجديد.",
            image: "capsules/grape.png",
            tags: ["جريء", "غير تقليدي", "مفاجأة"],
            stats: { energy: 85, patience: 50, coffeeNeed: 40 },
            alternatives: ["orange", "ethiopian"]
        },
        orange: {
            name: "Orange",
            moodName: "Fresh Mode 🍊",
            subtitle: "يومك يحتاج انتعاش",
            description: "يومك يحتاج تغيير وانتعاش. البرتقال مع القهوة = بداية جديدة.",
            image: "capsules/orange.png",
            tags: ["منعش", "حيوي", "مرح"],
            stats: { energy: 90, patience: 70, coffeeNeed: 45 },
            alternatives: ["grape", "ethiopian"]
        },
        jasmine: {
            name: "Jasmine Tea & Coffee",
            moodName: "Zen Mode 🌸",
            subtitle: "حتى القهوة رايقة",
            description: "حتى القهوة عندك لازم تكون رايقة. الياسمين يهدي الأعصاب… والقهوة تكمل الباقي.",
            image: "capsules/jasmine.png",
            tags: ["هادئ", "Zen", "لطيف"],
            stats: { energy: 40, patience: 95, coffeeNeed: 30 },
            alternatives: ["tea", "latte"]
        },
        tea: {
            name: "Tea & Coffee",
            moodName: "Easy Mode ☕🌿",
            subtitle: "تجديد بدون دراما",
            description: "تحب التجديد… بس بدون دراما. الشاي مع القهوة = أفضل من العالمين.",
            image: "capsules/tea-coffee.png",
            tags: ["خفيف", "مختلف", "آمن"],
            stats: { energy: 50, patience: 85, coffeeNeed: 35 },
            alternatives: ["jasmine", "latte"]
        }
    };

    // ===== FUN FACTS FOR LOADING =====
    const funFacts = [
        "هل تعلم؟ القهوة تُزرع في أكثر من 70 دولة 🌍",
        "القهوة هي ثاني أكثر سلعة تُتاجر في العالم بعد النفط ⛽",
        "متوسط العربي يشرب 3.5 كوب قهوة يوميًا ☕",
        "القهوة الباردة تحتاج 12 ساعة تحضير ⏰",
        "أول كبسولة قهوة اخترعت في سويسرا 🇨🇭",
        "القهوة تحتوي على أكثر من 1000 مركب كيميائي 🧪",
        "HYMI تختار لك القهوة المثالية بذكاء اصطناعي 🤖"
    ];

    // ===== STATE =====
    let currentQuestion = 0;
    let selectedQuestions = [];
    let scores = {};
    let isAnimating = false;

    // ===== INITIALIZATION =====
    function init() {
        createParticles();
        preloadImages();
    }

    function preloadImages() {
        Object.values(capsules).forEach(capsule => {
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
        selectedQuestions = groups.map(group => {
            const questions = questionBank[group];
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
            counterEl.innerHTML = `السؤال <span class="counter-current">${currentQuestion + 1}</span> من <span class="counter-total">3</span>`;
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
                btn.style.transform = 'translateX(30px)';
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
            { title: 'جاري تحليل المزاج', subtitle: 'نقرأ طاقتك البشرية' },
            { title: 'نبحث عن الكبسولة المثالية', subtitle: 'نقارن بين 10 نكهات' },
            { title: 'لقيناها!', subtitle: 'جهز نفسك للمفاجأة' }
        ];

        let msgIdx = 0;
        const titleEl = document.getElementById('loadingTitle');
        const subEl = document.getElementById('loadingSubtitle');
        const factEl = document.querySelector('.fun-fact');

        // Rotate fun facts
        let factIdx = 0;
        const factInterval = setInterval(() => {
            factIdx = (factIdx + 1) % funFacts.length;
            if (factEl) {
                factEl.style.opacity = '0';
                setTimeout(() => {
                    factEl.textContent = funFacts[factIdx];
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
        const capsule = capsules[winner];
        const altCapsule = capsules[capsule.alternatives[0]];

        // Update DOM
        const moodNameEl = document.getElementById('moodName');
        const moodSubEl = document.getElementById('moodSubtitle');
        const capsuleNameEl = document.getElementById('capsuleName');
        const capsuleDescEl = document.getElementById('capsuleDescription');
        const capsuleImageEl = document.getElementById('capsuleImage');
        const capsuleImageFallback = document.getElementById('capsuleImageFallback');
        const capsuleTagsEl = document.getElementById('capsuleTags');
        const altNameEl = document.getElementById('altName');

        if (moodNameEl) moodNameEl.textContent = capsule.moodName;
        if (moodSubEl) moodSubEl.textContent = capsule.subtitle;
        if (capsuleNameEl) capsuleNameEl.textContent = capsule.name;
        if (capsuleDescEl) capsuleDescEl.textContent = capsule.description;
        if (altNameEl) altNameEl.textContent = altCapsule ? altCapsule.name : '';

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

        // Tags
        if (capsuleTagsEl) {
            capsuleTagsEl.innerHTML = capsule.tags.map(tag => 
                `<span class="capsule-tag">${tag}</span>`
            ).join('');
        }

        // Stats with animated bars
        const statsContainer = document.getElementById('moodStats');
        if (statsContainer) {
            const stats = [
                { label: 'الطاقة', value: capsule.stats.energy, icon: '⚡' },
                { label: 'الصبر', value: capsule.stats.patience, icon: '🧘' },
                { label: 'الحاجة للقهوة', value: capsule.stats.coffeeNeed, icon: '☕' }
            ];

            statsContainer.innerHTML = stats.map(stat => `
                <div class="stat-item">
                    <div class="stat-label">${stat.icon} ${stat.label}</div>
                    <div class="stat-value">${stat.value}%</div>
                    <div class="stat-bar">
                        <div class="stat-bar-fill" data-width="${stat.value}"></div>
                    </div>
                </div>
            `).join('');
        }

        showScreen('resultScreen');
        isAnimating = false;

        // Animate stat bars after screen shows
        setTimeout(() => {
            document.querySelectorAll('.stat-bar-fill').forEach(bar => {
                bar.style.width = bar.dataset.width + '%';
            });
        }, 800);
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
            // Priority order for variety (most unique first)
            const diversityPriority = ['grape', 'orange', 'jasmine', 'ethiopian', 'dark', 'mocha', 'tea', 'latte', 'colombian', 'americano'];

            for (let p of diversityPriority) {
                if (winners.includes(p)) {
                    return p;
                }
            }
        }

        // Anti-bias: if dark is winning by too much, check if it's really deserved
        if (winners[0] === 'dark' && maxScore >= 10) {
            // Check if user also selected "mood needs" = adventure or chill
            // This is handled by the scoring system naturally
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
        // In real scenario, this could open maps or show location
        alert('توجه لكاونتر HYMI وجرب كبسولتك! ☕');
    };

    // ===== SHARE RESULT =====
    window.shareResult = function() {
        const moodName = document.getElementById('moodName')?.textContent || '';
        const capsuleName = document.getElementById('capsuleName')?.textContent || '';

        const shareText = `اكتشفت قهوتي المثالية مع HYMI! 🎯\\n\\nمزاجي: ${moodName}\\nكبسولتي: ${capsuleName}\\n\\nجرب أنت كمان: [رابط الموقع]`;

        if (navigator.share) {
            navigator.share({
                title: 'HYMI - اكتشف قهوتك',
                text: shareText,
                url: window.location.href
            }).catch(() => {
                // Fallback
                copyToClipboard(shareText);
            });
        } else {
            copyToClipboard(shareText);
        }
    };

    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            alert('تم نسخ النتيجة! الصقها في واتساب أو أي مكان 📋');
        }).catch(() => {
            alert('خذ screenshot للشاشة وشاركها! 📸');
        });
    }

    // ===== INIT =====
    document.addEventListener('DOMContentLoaded', init);

})();