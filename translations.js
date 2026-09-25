const langData = {
    ar: {
        pageTitle: "dtell - منصة الرسائل المجهولة والسرية الآمنة",
        loginBtn: "تسجيل الدخول بـ Discord",
        panelTitle: "أرسل رسالتك بكل أمان وخصوصية",
        panelSubtitle: "تواصل مع أصدقائك أو مجتمعك في ديسكورد برسائل سرية مجهولة تماماً، أو أظهر هويتك بكل فخر.",
        
        mentionsHeading: "المستهدفون بالرسالة (المنشن)",
        addUserBtn: "إضافة شخص آخر",
        
        contentHeading: "محتوى الرسالة",
        titleLabel: "عنوان الرسالة",
        authorLabel: "اسم المُرسل المخصص (اختياري)",
        authorIconLabel: "رابط أيقونة المُرسل",
        
        inlineCode: "مدمج",
        codeBlock: "صندوق كود",
        spoiler: "سبويلر",
        
        descLabel: "نص الرسالة السرية",
        
        mediaHeading: "الوسائط والصور المرفقة",
        imageLabel: "رابط الصورة الرئيسية الكبيرة",
        thumbLabel: "رابط الصورة المصغرة الجانبية",
        
        fieldsHeading: "بيانات إضافية وتخصيص",
        fieldNameLabel: "عنوان الحقل",
        fieldValueLabel: "قيمة الحقل",
        footerLabel: "التوقيع السفلي",
        footerIconLabel: "رابط أيقونة التوقيع",
        colorLabel: "لون بطاقة الرسالة",
        
        identityLabel: "إظهار حسابي الحقيقي (إرسال الرسالة باسمي وصورتي الفعلية بدل الوضع المجهول)",
        submitBtn: "إرسال الرسالة السرية الآن",
        
        previewTitle: "معاينة حية لشكل الرسالة قبل الإرسال",
        timeText: "اليوم في 12:00 ص",
        prevTitleDefault: "رسالة سرية جديدة",
        prevDescDefault: "اكتب رسالتك السرية هنا، وستظهر بهذا الشكل الجذاب...",
        botDefaultName: "dtell Anonymous",
        
        successMsg: "تم إرسال رسالتك السرية بنجاح إلى السيرفر عبر dtell!",
        errorMsg: "فشل الإرسال، تحقق من صحة البيانات أو الرابط.",
        serverErr: "حدث خطأ في الاتصال بالخادم.",
        sending: "جاري الإرسال...",
        mentionPrefix: "📩 رسالة سرية موجهة لكم:",
        
        phMention: "@username أو ID الحساب",
        phTitle: "عنوان جذاب لرسالتك...",
        phAuthor: "اسم افتراضي...",
        phAuthorIcon: "https://...",
        phDesc: "اكتب ما يدور في ذهنك بكل حرية ووضوح...",
        phImg: "https://...",
        phThumb: "https://...",
        phFieldName: "مثال: ملاحظة",
        phFieldValue: "مثال: هام جداً",
        phFooter: "مدعوم عبر منصة dtell الآمنة",
        phFooterIcon: "https://...",

        // تذييل الصفحة
        footerDesc: "منصة dtell المبتكرة تتيح لك إرسال رسائل سرية ومجهولة بالكامل داخل مجتمعات ديسكورد مع خيار الإفصاح عن الهوية بكل أمان.",
        quickLinks: "روابط سريعة",
        termsLink: "شروط الاستخدام",
        privacyLink: "سياسة الخصوصية",
        rightsLink: "حقوق الملكية",
        systemOperational: "الخدمة تعمل بكفاءة عالية",
        fastWebhook: "تشفير تام وإرسال فوري",
        copyrightText: "جميع الحقوق محفوظة &copy; 2026 <strong>dtell</strong>",

        // النوافذ المنبثقة
        termsTitle: "شروط الاستخدام والأحكام",
        termsText: `<strong>1. الاستخدام المقبول:</strong> منصة dtell مصممة خصيصاً لتعزيز التواصل الإيجابي والمفاجآت اللطيفة والرسائل البناءة داخل مجتمعات ديسكورد.<br><br>
        <strong>2. السلوكيات الممنوعة (ما هو غير صحيح):</strong> يُمنع باتاً استخدام المنصة لأغراض التحرش، التنمر، الابتزاز، نشر الشائعات، إرسال سبام ضار، أو انتحال شخصيات بهدف الإساءة.<br><br>
        <strong>3. المسؤولية القانونية:</strong> المستخدم وحده يتحمل المسؤولية القانونية والأخلاقية الكاملة عن محتوى الرسائل التي يقوم بإرسالها عبر المنصة.`,
        
        privacyTitle: "سياسة الخصوصية والأمان",
        privacyText: `<strong>1. السرية التامة:</strong> نحن في dtell نؤمن بحقك في التعبير والخصوصية. الرسائل المجهولة لا نقوم بربطها بهويتك الشخصية أبداً.<br><br>
        <strong>2. عدم الاحتفاظ بالرسائل:</strong> لا نخزن محتوى رسائلك أو سجلاً لها في قواعد بياناتنا؛ فعملية الإرسال تتم بشكل مباشر وآمن.<br><br>
        <strong>3. مصادقة ديسكورد:</strong> في حال اخترت "إظهار حسابك الحقيقي"، يتم استخدام بيانات حسابك المؤقتة فقط لتضمينها في الرسالة بناءً على رغبتك الصريحة دون حفظها.`,
        
        rightsTitle: "حقوق الملكية الفكرية",
        rightsText: "جميع الهويات البصرية، الشعارات (من 1 إلى 11)، التصاميم، والمحتوى البرمجي الخاص بمنصة <strong>dtell</strong> محمية بموجب حقوق الملكية الفكرية، ولا يُسمح بنسخها أو تقليدها بأي شكل من الأشكال."
    },
    en: {
        pageTitle: "dtell - Secure Anonymous Messaging Platform",
        loginBtn: "Login with Discord",
        panelTitle: "Send Your Message Safely & Securely",
        panelSubtitle: "Connect with friends or your Discord community through completely anonymous secret messages, or reveal your identity with pride.",
        
        mentionsHeading: "Message Recipients (Mentions)",
        addUserBtn: "Add Another User",
        
        contentHeading: "Message Content",
        titleLabel: "Message Title",
        authorLabel: "Custom Sender Name (Optional)",
        authorIconLabel: "Sender Icon URL",
        
        inlineCode: "Inline",
        codeBlock: "Code Block",
        spoiler: "Spoiler",
        
        descLabel: "Secret Message Text",
        
        mediaHeading: "Attached Media & Images",
        imageLabel: "Main Large Image URL",
        thumbLabel: "Side Thumbnail URL",
        
        fieldsHeading: "Additional Data & Customization",
        fieldNameLabel: "Field Title",
        fieldValueLabel: "Field Value",
        footerLabel: "Footer Signature",
        footerIconLabel: "Footer Signature Icon URL",
        colorLabel: "Message Card Color",
        
        identityLabel: "Show my real account (Send with my actual name & avatar instead of anonymous mode)",
        submitBtn: "Send Secret Message Now",
        
        previewTitle: "Live Message Preview",
        timeText: "Today at 12:00 AM",
        prevTitleDefault: "New Secret Message",
        prevDescDefault: "Type your secret message here, and it will appear like this...",
        botDefaultName: "dtell Anonymous",
        
        successMsg: "Secret message successfully sent to the server via dtell!",
        errorMsg: "Failed to send, please check data or link validity.",
        serverErr: "An error occurred connecting to the server.",
        sending: "Sending...",
        mentionPrefix: "📩 New secret message for you:",
        
        phMention: "@username or User ID",
        phTitle: "Catchy title for your message...",
        phAuthor: "Default sender name...",
        phAuthorIcon: "https://...",
        phDesc: "Write what's on your mind freely and clearly...",
        phImg: "https://...",
        phThumb: "https://...",
        phFieldName: "e.g., Note",
        phFieldValue: "e.g., Very Important",
        phFooter: "Powered by secure dtell platform",
        phFooterIcon: "https://...",

        // Footer
        footerDesc: "dtell is an innovative platform empowering you to send secret and completely anonymous messages within Discord communities with optional secure identity disclosure.",
        quickLinks: "Quick Links",
        termsLink: "Terms of Use",
        privacyLink: "Privacy Policy",
        rightsLink: "Copyrights",
        systemOperational: "System Operational",
        fastWebhook: "Full Encryption & Instant Dispatch",
        copyrightText: "All rights reserved &copy; 2026 <strong>dtell</strong>",

        // Modals
        termsTitle: "Terms of Use & Conditions",
        termsText: `<strong>1. Acceptable Use:</strong> dtell is built to foster positive communication, sweet surprises, and constructive messages within Discord communities.<br><br>
        <strong>2. Prohibited Conduct (What is wrong):</strong> Using the platform for harassment, bullying, extortion, spreading rumors, malicious spam, or impersonation to cause harm is strictly prohibited.<br><br>
        <strong>3. Legal Liability:</strong> The user bears full legal and ethical responsibility for the content of messages sent through the platform.`,
        
        privacyTitle: "Privacy Policy & Security",
        privacyText: `<strong>1. Absolute Confidentiality:</strong> At dtell, we believe in your right to expression and privacy. Anonymous messages are never linked back to your personal identity.<br><br>
        <strong>2. No Message Retention:</strong> We do not store your message contents or maintain logs in our databases; dispatch is handled securely and directly.<br><br>
        <strong>3. Discord Authentication:</strong> If you choose to "Show your real account", your temporary profile data is used solely to embed it into your message per your explicit request without persistent storage.`,
        
        rightsTitle: "Intellectual Property Rights",
        rightsText: "All visual identities, logos (1 through 11), designs, and source code belonging to the <strong>dtell</strong> platform are protected under intellectual property laws. Unauthorized copying or imitation is strictly prohibited."
    }
};