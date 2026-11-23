/* Edit the profile and project content here. No framework or server is needed. */
const CV_PROFILE = {
  name: { ar: 'هبة خالد الزين', en: 'Hiba Khaled Al-Zein' },
  role: { ar: 'مطوّرة برمجيات', en: 'Software Developer' },
  email: 'hiba.khaled.alzein@example.com',
  location: { ar: 'دمشق، سوريا', en: 'Damascus, Syria' }
};

/* These are illustrative academic project concepts, not deployed products. */
const PROJECTS = [
  {
    id: 'studyflow', category: 'app', image: 'studyflow',
    title: { ar: 'ستدي فلو — يومك الدراسي، أبسط', en: 'Studyflow — make room to learn' },
    short: { ar: 'تطبيق لتنظيم الدراسة والمهام اليومية في مساحة واحدة.', en: 'A thoughtful home for study plans, tasks and small wins.' },
    description: { ar: 'تصوّر لتطبيق يساعد الطلبة على تنظيم المواد ومواعيد التسليم وتقسيم أهدافهم إلى مهام يومية قابلة للإنجاز. صُمّمت التجربة لتقلّل التشتّت وتعرض ما يحتاجه الطالب في اللحظة المناسبة.', en: 'A study planner concept that brings courses, deadlines and daily tasks together. The experience prioritizes clarity and helps students turn a large goal into a manageable next step.' },
    features: { ar: ['تقويم أسبوعي مع عرض المواد ومواعيد التسليم.', 'إنشاء مهام وتنظيمها حسب المادة والأولوية.', 'ملخّص بصري للتقدّم ومساحة لملاحظات الدراسة.', 'تصميم مناسب للشاشات الصغيرة مع تنقّل واضح.'], en: ['Weekly calendar for classes and deadlines.', 'Tasks grouped by course and priority.', 'A clear progress overview and space for study notes.', 'Mobile-first layouts and straightforward navigation.'] },
    alt: { ar: 'هاتفان يعرضان تصورًا بنفسجيًا لتطبيق تنظيم الدراسة', en: 'Two phones showing a lavender study planner concept' },
    tech: ['React', 'CSS', 'Local Storage']
  },
  {
    id: 'dashboard', category: 'dashboard', image: 'dashboard',
    title: { ar: 'إنسايت — البيانات تحكي حكاية', en: 'Insight — data with a point of view' },
    short: { ar: 'لوحة تحكّم تجعل قراءة البيانات واتخاذ القرار أوضح.', en: 'An analytics dashboard that puts the useful details first.' },
    description: { ar: 'نموذج واجهة لتحويل بيانات تجريبية إلى مؤشرات ورسوم قابلة للفهم. يركّز المشروع على التسلسل البصري، وتنظيم الجداول، وتسهيل المقارنة بين الفترات دون ازدحام الشاشة.', en: 'An interface concept for turning sample data into understandable charts and indicators. The project explores visual hierarchy, well-organized tables and comparisons that fit naturally on screen.' },
    features: { ar: ['مؤشرات رئيسية وملخّص للبيانات في أول نظرة.', 'مخطّطات للمقارنة بين الفترات والاتجاهات.', 'تصوّر لجدول بيانات مع بحث وتصفية.', 'نظام ألوان متناسق وحالات واضحة للعناصر.'], en: ['At-a-glance indicators and useful summaries.', 'Charts for period comparisons and trends.', 'A table concept with search and filter controls.', 'Consistent colors and clear interface states.'] },
    alt: { ar: 'شاشة حاسوب تعرض لوحة بيانات باللونين الكحلي والفيروزي', en: 'A desktop monitor displaying a navy and teal analytics dashboard' },
    tech: ['JavaScript', 'Chart.js', 'CSS Grid']
  },
  {
    id: 'store', category: 'web', image: 'store',
    title: { ar: 'فورما — مساحة للأشياء الجميلة', en: 'Forma — a place for beautiful things' },
    short: { ar: 'واجهة متجر أثاث بتجربة تصفّح بسيطة ومدروسة.', en: 'A furniture storefront with a calm, considered shopping flow.' },
    description: { ar: 'تصوّر لمتجر إلكتروني للأثاث يوازن بين صور المنتجات ووضوح المعلومات. تشمل الفكرة صفحة رئيسية، وعرض المنتجات، وتفاصيل المنتج، وتصميمًا مقترحًا لسلّة التسوّق.', en: 'A furniture storefront concept balancing expressive product imagery with clear information. It covers a homepage, product browsing, product details and a proposed shopping cart experience.' },
    features: { ar: ['مساحة عرض للمنتجات مع تصنيف حسب الفئة.', 'صفحة تفاصيل تركّز على الصور والمواصفات.', 'تصميم لتجربة سلّة تسوّق واضحة.', 'واجهة متجاوبة للحاسوب والهاتف.'], en: ['Product browsing organized by category.', 'Product details built around imagery and specifications.', 'A clear proposed cart experience.', 'Responsive desktop and mobile layouts.'] },
    alt: { ar: 'حاسوب محمول يعرض متجر أثاث مع كرسي بلون طيني وخلفية مشمشية', en: 'A laptop showing a furniture store with a terracotta chair on a peach backdrop' },
    tech: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: 'coffee', category: 'web', image: 'coffee',
    title: { ar: 'رواق — للقهـوة حكاية', en: 'Riwaq — a story in every cup' },
    short: { ar: 'موقع تعريفي لمقهى بهوية دافئة وتفاصيل هادئة.', en: 'A welcoming coffee website with warmth in every detail.' },
    description: { ar: 'فكرة لموقع تعريفي يترجم أجواء المقهى إلى تجربة رقمية. يقدّم حكاية المكان وقائمة المشروبات ومساحة للتواصل، مع الاهتمام بسرعة التصفّح على الهاتف.', en: 'A café website concept translating the atmosphere of a physical space into a digital experience. It introduces the story, menu and contact information, with special care for browsing on a phone.' },
    features: { ar: ['صفحة رئيسية تعكس هوية المقهى وأجواءه.', 'تصوّر لقائمة مشروبات سهلة التصفّح.', 'أقسام للقصة والموقع ومعلومات التواصل.', 'صور واضحة وتفاصيل تفاعلية خفيفة.'], en: ['A homepage that expresses the café identity.', 'An easy-to-browse drinks menu concept.', 'Story, location and contact sections.', 'Expressive photography and subtle interactions.'] },
    alt: { ar: 'تصور موقع رواق للقهوة مع كوب وكيس بن بألوان خضراء وبنية', en: 'A Riwaq coffee website mockup with a sage cup and kraft coffee bag' },
    tech: ['HTML', 'CSS', 'Responsive Design']
  }
];

const COPY = {
  ar: {
    skip: 'انتقل إلى المحتوى', name: CV_PROFILE.name.ar, roleShort: CV_PROFILE.role.ar,
    navHome: 'الرئيسية', navAbout: 'عنّي', navWork: 'أعمالي', navSkills: 'مهاراتي', navJourney: 'رحلتي', navContact: 'تواصل معي',
    available: 'منفتحة على فرص التدريب', downloadCV: 'تحميل السيرة الذاتية', sidebarNote: 'القليل من الفضول،<br>والكثير من الشغف.',
    topCaption: 'مساحتي الصغيرة على الإنترنت', heroName: `${CV_PROFILE.name.ar}<span class="accent">.</span>`, heroLine1: 'أحوّل الأفكار إلى', heroLine2: 'تجارب رقمية.',
    heroRole: 'مطوّرة برمجيات، بعقلٍ منطقي وعينٍ إبداعية.',
    heroDescription: 'أكتب الشيفرة لأصنع شيئًا مفيدًا وجميلًا. أهتم ببناء مواقع وتطبيقات سهلة الاستخدام، وأؤمن أن التفاصيل الصغيرة تصنع تجربة مختلفة.',
    exploreWork: 'اكتشف أعمالي', downloadShort: 'تحميل CV', location: CV_PROFILE.location.ar, openRemote: 'أصنع من أي مكان',
    heroAlt: 'حاسوب بنفسجي محاط بأشكال زجاجية، رسم ثلاثي الأبعاد مولّد', visualTitle: 'فكرة. شيفرة. أثر.', visualNote: 'هنا تبدأ الحكاية', stripCopy: 'فضول يقودني. شغف يحرّكني. وشيفرة تعبّر عنّي.',
    aboutTitle: 'أكثر من مجرد شيفرة<span class="accent">.</span>', aboutNote: 'تعرّف إليّ عن قرب',
    aboutLead: 'أنا هبة خالد الزين، مطوّرة برمجيات أجد متعتي في تحويل الأسئلة المعقّدة إلى حلول بسيطة.',
    aboutText: 'بدأت رحلتي بفضول: كيف تتحوّل فكرة صغيرة إلى تطبيق نستخدمه كل يوم؟ ومنذ ذلك الوقت، أصبحت البرمجة طريقتي في الاستكشاف والبناء. أركّز على تطوير الويب، وأجمع بين التفكير التحليلي والاهتمام بتجربة المستخدم.',
    aboutText2: 'أحب أن أفهم المشكلة أولًا، ثم أصمّم حلًا واضحًا وأطوّره خطوة بخطوة. وفي كل مشروع، أترك مساحة للتعلّم والتجربة والتحسين.',
    value1: 'شيفرة مرتّبة', value2: 'تفاصيل مدروسة', value3: 'تعلّم مستمر',
    workTitle: 'أفكار أخذت شكلًا<span class="accent">.</span>', workDescription: 'مختارات من مشاريع تطبيقية تجمع الفكرة والتصميم والبرمجة.', projectsLabel: 'مشاريع',
    filterAll: 'كل الأعمال', filterWeb: 'مواقع ويب', filterApp: 'تطبيقات', filterDash: 'لوحات بيانات',
    demoNote: 'مشاريع تصوّرية للعرض الجامعي، مع صور مولّدة بالذكاء الاصطناعي.', details: 'استكشاف المشروع',
    projectFeatures: 'ما الذي تستكشفه الفكرة؟', conceptNote: 'هذا عرض تصوّري للمشروع. الميزات المذكورة مقترحة، والصورة مولّدة؛ لا يتضمّن العرض تطبيقًا منشورًا.',
    skillsTitle: 'أدواتي لصناعة الفرق<span class="accent">.</span>', skillsDescription: 'أختار الأداة التي تخدم الفكرة، وأتعلّم ما يجعلها أفضل.',
    skillFrontend: 'تطوير الواجهات', skillFrontendDesc: 'واجهات حيّة تتكيّف مع كل شاشة', skillLogic: 'البرمجة والمنطق', skillLogicDesc: 'أساس متين لحلول يمكن تطويرها', skillDesign: 'التصميم وطريقة العمل', skillDesignDesc: 'تجربة واضحة، من التخطيط إلى الاختبار',
    journeyTitle: 'كل خطوة،<br>تفتح احتمالًا جديدًا<span class="accent">.</span>', journeyDescription: 'رحلة تعلّم تبدأ بالأساسيات، وتنمو مع كل فكرة تتحوّل إلى مشروع.', journeyStamp: 'التعلّم لا يتوقّف عند التخرّج',
    phase1: 'بناء الأساس', journey1Title: 'التفكير مثل المبرمجين', journey1Desc: 'فهم الخوارزميات وهياكل البيانات ومبادئ البرمجة، والتدرّب على تقسيم المشكلات إلى خطوات واضحة.', journey1Tag: 'أساسيات علوم الحاسوب',
    phase2: 'من المعرفة إلى التطبيق', journey2Title: 'أول فكرة تعمل على الشاشة', journey2Desc: 'بناء واجهات متجاوبة وإضافة التفاعل وإدارة البيانات، مع الاهتمام بإمكانية الوصول وتجربة الاستخدام.', journey2Tag: 'مشاريع جامعية وتعلّم ذاتي',
    phase3: 'الخطوة القادمة', journey3Title: 'مساحة لتحدٍ جديد', journey3Desc: 'أسعى إلى فرصة تدريب أتعلم خلالها من فريق، وأساهم في تطوير منتجات تعالج مشكلات حقيقية.', journey3Tag: 'جاهزة للتعلّم والمشاركة',
    contactTitle: 'لديك فكرة؟<br>لنبنِ شيئًا رائعًا<span class="accent">.</span>', contactDescription: 'فرصة تدريب، مشروع جامعي، أو حتى حديث عن فكرة جديدة… يسعدني أن أسمع منك.', exampleEmail: 'بريد توضيحي — استبدله ببريدك الشخصي',
    formName: 'الاسم', formEmail: 'البريد الإلكتروني', formMessage: 'أخبرني عن فكرتك', namePlaceholder: 'كيف أناديك؟', messagePlaceholder: 'كل مشروع جميل يبدأ بمحادثة…',
    prepareMessage: 'تجهيز الرسالة', formNote: 'تُجهَّز محليًا، دون إرسال تلقائي.', readyMessage: 'رسالتك جاهزة للمشاركة', copyMessage: 'نسخ الرسالة', openMail: 'فتح تطبيق البريد',
    footerMade: 'صُنعت بشغف وتفاصيل تُشبهني.', footerDemo: 'نموذج تعليمي ببيانات وأعمال توضيحية · 2026', backTop: 'إلى البداية',
    darkMode: 'تفعيل الوضع الداكن', lightMode: 'تفعيل الوضع الفاتح', openMenu: 'فتح القائمة', closeMenu: 'إغلاق القائمة', mainNav: 'التنقل الرئيسي', closeDialog: 'إغلاق التفاصيل', filterLabel: 'تصفية المشاريع',
    copied: 'تم النسخ إلى الحافظة', copyFailed: 'تعذّر النسخ التلقائي. حدّد النص وانسخه يدويًا.', readyToast: 'الرسالة جاهزة. لم تُرسَل تلقائيًا.', nameError: 'اكتب اسمًا من حرفين على الأقل.', emailError: 'اكتب عنوان بريد إلكتروني صحيحًا.', messageError: 'أخبرني عن فكرتك في 10 أحرف على الأقل.', subject: 'لنتحدث عن فكرة جديدة', printNote: 'اختر «حفظ بتنسيق PDF» في نافذة الطباعة.',
    printAbout: 'نبذة', printProjects: 'مشاريع تصوّرية', printSkills: 'مجالات وأدوات', printFooter: 'سيرة لمشروع جامعي باسم هبة خالد الزين. النبذة والمهارات والأعمال بيانات توضيحية قابلة للاستبدال. بريد التواصل تجريبي.'
  },
  en: {
    skip: 'Skip to content', name: CV_PROFILE.name.en, roleShort: CV_PROFILE.role.en,
    navHome: 'Home', navAbout: 'About me', navWork: 'Selected work', navSkills: 'My toolkit', navJourney: 'My journey', navContact: 'Get in touch',
    available: 'Open to internship opportunities', downloadCV: 'Download my CV', sidebarNote: 'A little curiosity.<br>A lot of heart.',
    topCaption: 'My little corner of the internet', heroName: `${CV_PROFILE.name.en}<span class="accent">.</span>`, heroLine1: 'Turning ideas into', heroLine2: 'digital experiences.',
    heroRole: 'A developer with a logical mind and a creative eye.', heroDescription: 'I write code to make things that are useful and beautiful. I build approachable websites and applications, with a belief that small details make a meaningful difference.',
    exploreWork: 'Explore my work', downloadShort: 'Download CV', location: CV_PROFILE.location.en, openRemote: 'Creating from anywhere',
    heroAlt: 'A lavender laptop with sculptural glass shapes, an AI-generated 3D illustration', visualTitle: 'Idea. Code. Impact.', visualNote: 'Every story starts somewhere', stripCopy: 'Led by curiosity. Driven by purpose. Expressed in code.',
    aboutTitle: 'A little more than code<span class="accent">.</span>', aboutNote: 'A closer introduction', aboutLead: 'I’m Hiba Khaled Al-Zein, a software developer who enjoys turning complex questions into simple, thoughtful solutions.',
    aboutText: 'It started with a question: how does a small idea become something we use every day? Since then, programming has become my way of exploring and building. I focus on web development, combining analytical thinking with care for the people using the result.',
    aboutText2: 'I like to understand the problem first, design a clear solution and build it step by step. Every project leaves room to learn, experiment and improve.', value1: 'Clean code', value2: 'Considered details', value3: 'Always learning',
    workTitle: 'Ideas, taking shape<span class="accent">.</span>', workDescription: 'A selection of academic concepts, from the first sketch to the interface.', projectsLabel: 'projects',
    filterAll: 'All work', filterWeb: 'Websites', filterApp: 'Applications', filterDash: 'Dashboards', demoNote: 'Illustrative university project concepts with AI-generated visuals.', details: 'Explore project',
    projectFeatures: 'What does the concept explore?', conceptNote: 'This is an illustrative project concept. The listed features are proposed and the image is AI-generated; a deployed application is not included.',
    skillsTitle: 'My tools for making things<span class="accent">.</span>', skillsDescription: 'I choose tools to serve the idea, then learn what makes it better.',
    skillFrontend: 'Frontend development', skillFrontendDesc: 'Thoughtful interfaces for every screen', skillLogic: 'Programming & logic', skillLogicDesc: 'A strong foundation for growing ideas', skillDesign: 'Design & workflow', skillDesignDesc: 'Clarity, from the first sketch to the last test',
    journeyTitle: 'Every step opens<br>a new possibility<span class="accent">.</span>', journeyDescription: 'A learning path built on solid foundations, growing with every idea that becomes a project.', journeyStamp: 'Learning goes beyond graduation',
    phase1: 'Building foundations', journey1Title: 'Learning to think like a developer', journey1Desc: 'Exploring algorithms, data structures and programming principles, and breaking complex problems into clear, manageable steps.', journey1Tag: 'Computer science foundations',
    phase2: 'Putting ideas into practice', journey2Title: 'The first idea that comes to life', journey2Desc: 'Creating responsive interfaces, adding interaction and managing data, while thinking carefully about usability and accessibility.', journey2Tag: 'Academic projects & self-directed learning',
    phase3: 'The next chapter', journey3Title: 'Room for a new challenge', journey3Desc: 'Looking for an internship where I can learn from a team and contribute to products that solve real problems.', journey3Tag: 'Ready to learn and contribute',
    contactTitle: 'Have an idea?<br>Let’s make it happen<span class="accent">.</span>', contactDescription: 'An internship, a university project, or a conversation about a new idea. I’d love to hear from you.', exampleEmail: 'Example address — replace it with your own',
    formName: 'Your name', formEmail: 'Email address', formMessage: 'Tell me about your idea', namePlaceholder: 'What should I call you?', messagePlaceholder: 'Good projects start with a conversation…',
    prepareMessage: 'Prepare message', formNote: 'Prepared locally. Never sent automatically.', readyMessage: 'Your message is ready to share', copyMessage: 'Copy message', openMail: 'Open email app',
    footerMade: 'Made with care and a little personality.', footerDemo: 'Educational sample with illustrative details and work · 2026', backTop: 'Back to top',
    darkMode: 'Enable dark mode', lightMode: 'Enable light mode', openMenu: 'Open navigation', closeMenu: 'Close navigation', mainNav: 'Main navigation', closeDialog: 'Close project details', filterLabel: 'Filter projects',
    copied: 'Copied to clipboard', copyFailed: 'Automatic copy is unavailable. Select the text and copy it manually.', readyToast: 'Message prepared. It has not been sent.', nameError: 'Please enter at least two characters.', emailError: 'Please enter a valid email address.', messageError: 'Please describe your idea in at least 10 characters.', subject: 'Let’s talk about a new idea', printNote: 'Choose “Save as PDF” in the print dialog.',
    printAbout: 'Profile', printProjects: 'Illustrative project concepts', printSkills: 'Interests & toolkit', printFooter: 'University CV for Hiba Khaled Al-Zein. The biography, skills and work are editable illustrative content. The email address is a placeholder.'
  }
};

(() => {
  'use strict';
  const $ = selector => document.querySelector(selector);
  const $$ = selector => [...document.querySelectorAll(selector)];
  const html = document.documentElement;
  const escapeHTML = value => String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
  const readPreference = (key, fallback) => { try { return localStorage.getItem(key) || fallback; } catch { return fallback; } };
  const savePreference = (key, value) => { try { localStorage.setItem(key, value); } catch { /* File mode and privacy settings may block storage. */ } };
  let language = readPreference('hiba-lang', 'ar') === 'en' ? 'en' : 'ar';
  let theme = readPreference('hiba-theme', 'light') === 'dark' ? 'dark' : 'light';
  let activeFilter = 'all';
  let activeProject = null;
  let lastProjectTrigger = null;
  let toastTimer;
  const t = key => COPY[language][key] || key;
  const icon = name => `<svg class="icon" aria-hidden="true"><use href="#i-${name}"/></svg>`;
  const categories = { web: 'filterWeb', app: 'filterApp', dashboard: 'filterDash' };

  function toast(message) {
    const target = $('#toast');
    clearTimeout(toastTimer);
    target.textContent = message;
    target.classList.add('visible');
    toastTimer = setTimeout(() => target.classList.remove('visible'), 3600);
  }

  function renderProjects() {
    $('#projects-grid').innerHTML = PROJECTS.map(project => `<article class="project-card"${activeFilter !== 'all' && project.category !== activeFilter ? ' hidden' : ''}><button class="project-open" data-project="${project.id}" aria-label="${escapeHTML(t('details') + ': ' + project.title[language])}"><div class="project-image"><img src="assets/images/${project.image}.webp" alt="${escapeHTML(project.alt[language])}" width="1200" height="900" loading="lazy" decoding="async"><span class="project-category">${t(categories[project.category])}</span><span class="project-view">${icon('eye')}${t('details')}</span></div><div class="project-body"><div class="project-title-row"><h3>${escapeHTML(project.title[language])}</h3><span class="project-detail-icon">${icon('eye')}</span></div><p>${escapeHTML(project.short[language])}</p><div class="project-tech">${project.tech.map(tech => `<span>${escapeHTML(tech)}</span>`).join('')}</div></div></button></article>`).join('');
    $('#project-count').textContent = PROJECTS.filter(project => activeFilter === 'all' || project.category === activeFilter).length;
  }

  function renderProjectDetails(project) {
    $('#dialog-content').innerHTML = `<img class="dialog-image" src="assets/images/${project.image}.webp" alt="${escapeHTML(project.alt[language])}" width="1200" height="900"><div class="dialog-body"><h2 id="dialog-title">${escapeHTML(project.title[language])}</h2><p>${escapeHTML(project.description[language])}</p><div class="project-tech">${project.tech.map(tech => `<span>${escapeHTML(tech)}</span>`).join('')}</div><h3>${t('projectFeatures')}</h3><ul class="dialog-features">${project.features[language].map(feature => `<li>${escapeHTML(feature)}</li>`).join('')}</ul><p class="demo-note">${icon('spark')}<span>${t('conceptNote')}</span></p></div>`;
  }

  function renderPrintResume() {
    $('#print-resume').innerHTML = `<h1>${escapeHTML(CV_PROFILE.name[language])}</h1><p class="print-role">${escapeHTML(CV_PROFILE.role[language])}</p><p>${escapeHTML(CV_PROFILE.location[language])} · <bdi>${escapeHTML(CV_PROFILE.email)}</bdi></p><h2>${t('printAbout')}</h2><p>${t('aboutLead')} ${t('aboutText2')}</p><h2>${t('printSkills')}</h2><p class="print-skills">HTML5 · CSS3 · JavaScript · React · Python · Node.js · SQL · Git · Figma · UI/UX · Responsive Design</p><h2>${t('printProjects')}</h2>${PROJECTS.map(project => `<div class="print-project"><h3>${escapeHTML(project.title[language])}</h3><p>${escapeHTML(project.short[language])}</p><p class="print-tech">${project.tech.join(' · ')}</p></div>`).join('')}<p class="print-footer">${t('printFooter')}</p>`;
  }

  function updateTheme() {
    html.dataset.theme = theme;
    $('#theme-icon').setAttribute('href', theme === 'dark' ? '#i-sun' : '#i-moon');
    $('#theme-toggle').setAttribute('aria-label', t(theme === 'dark' ? 'lightMode' : 'darkMode'));
    $('#theme-toggle').setAttribute('aria-pressed', String(theme === 'dark'));
    $('meta[name="theme-color"]').setAttribute('content', theme === 'dark' ? '#18161f' : '#7855d8');
  }

  function updateLanguage() {
    html.lang = language;
    html.dir = language === 'ar' ? 'rtl' : 'ltr';
    $$('[data-i18n]').forEach(element => { element.innerHTML = t(element.dataset.i18n); });
    $$('[data-placeholder]').forEach(element => { element.placeholder = t(element.dataset.placeholder); });
    $$('[data-alt]').forEach(element => { element.alt = t(element.dataset.alt); });
    $('#language-label').textContent = language === 'ar' ? 'EN' : 'عربي';
    $('#language-toggle').setAttribute('aria-label', language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
    $('#sidebar').setAttribute('aria-label', t('mainNav'));
    $('.filter-bar').setAttribute('aria-label', t('filterLabel'));
    $('#menu-toggle').setAttribute('aria-label', t($('#sidebar').classList.contains('is-open') ? 'closeMenu' : 'openMenu'));
    $('#close-dialog').setAttribute('aria-label', t('closeDialog'));
    $('#email-address').textContent = CV_PROFILE.email;
    $('#open-mail').href = `mailto:${CV_PROFILE.email}`;
    document.title = `${CV_PROFILE.name[language]} | ${CV_PROFILE.role[language]}`;
    $('meta[name="description"]').content = language === 'ar' ? 'هبة خالد الزين — مطوّرة برمجيات. سيرة ذاتية تفاعلية ومعرض مشاريع جامعية في تطوير الويب وتصميم التجارب الرقمية.' : 'Hiba Khaled Al-Zein — software developer. An interactive CV and illustrative university portfolio.';
    renderProjects();
    renderPrintResume();
    updateTheme();
    if (activeProject) renderProjectDetails(activeProject);
    if (!$('#message-preview').hidden) prepareMessage(false);
    ['name', 'email', 'message'].forEach(field => { if ($('#contact-' + field).getAttribute('aria-invalid') === 'true') validateField(field); });
  }

  $('#theme-toggle').addEventListener('click', () => {
    theme = theme === 'light' ? 'dark' : 'light';
    savePreference('hiba-theme', theme);
    updateTheme();
  });
  $('#language-toggle').addEventListener('click', () => {
    language = language === 'ar' ? 'en' : 'ar';
    savePreference('hiba-lang', language);
    updateLanguage();
  });

  $$('.filter-button').forEach(button => button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    $$('.filter-button').forEach(filter => {
      const selected = filter === button;
      filter.classList.toggle('active', selected);
      filter.setAttribute('aria-pressed', String(selected));
    });
    renderProjects();
  }));

  const dialog = $('#project-dialog');
  $('#projects-grid').addEventListener('click', event => {
    const trigger = event.target.closest('[data-project]');
    if (!trigger) return;
    activeProject = PROJECTS.find(project => project.id === trigger.dataset.project);
    if (!activeProject) return;
    lastProjectTrigger = trigger;
    renderProjectDetails(activeProject);
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    $('#close-dialog').focus({ preventScroll: true });
  });
  $('#close-dialog').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.style.overflow = '';
    activeProject = null;
    if (lastProjectTrigger?.isConnected) lastProjectTrigger.focus({ preventScroll: true });
  });

  const mobile = matchMedia('(max-width: 850px)');
  function setMenu(open, returnFocus = true) {
    const effectiveOpen = open && mobile.matches;
    $('#sidebar').classList.toggle('is-open', effectiveOpen);
    $('#nav-overlay').hidden = !effectiveOpen;
    $('#menu-toggle').setAttribute('aria-expanded', String(effectiveOpen));
    $('#menu-toggle').setAttribute('aria-label', t(effectiveOpen ? 'closeMenu' : 'openMenu'));
    $('#menu-toggle use').setAttribute('href', effectiveOpen ? '#i-close' : '#i-menu');
    $('#sidebar').inert = mobile.matches && !effectiveOpen;
    document.body.style.overflow = effectiveOpen ? 'hidden' : '';
    if (effectiveOpen) $('.nav-link').focus();
    else if (returnFocus && mobile.matches) $('#menu-toggle').focus({ preventScroll: true });
  }
  $('#menu-toggle').addEventListener('click', () => setMenu(!$('#sidebar').classList.contains('is-open')));
  $('#nav-overlay').addEventListener('click', () => setMenu(false));
  $$('.nav-link').forEach(link => link.addEventListener('click', () => setMenu(false, false)));
  mobile.addEventListener('change', () => setMenu(false, false));
  document.addEventListener('keydown', event => {
    if (!$('#sidebar').classList.contains('is-open')) return;
    if (event.key === 'Escape') { setMenu(false); return; }
    if (event.key !== 'Tab') return;
    const focusables = [$('#menu-toggle'), ...$('#sidebar').querySelectorAll('a[href],button')];
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  });
  setMenu(false, false);

  const sections = $$('.section-anchor');
  let scrollScheduled = false;
  function updateActiveSection() {
    const line = scrollY + innerHeight * .3;
    const current = [...sections].reverse().find(section => section.offsetTop <= line) || sections[0];
    $$('.nav-link').forEach(link => {
      const active = link.hash === '#' + current.id;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    scrollScheduled = false;
  }
  addEventListener('scroll', () => { if (!scrollScheduled) { requestAnimationFrame(updateActiveSection); scrollScheduled = true; } }, { passive: true });
  updateActiveSection();

  async function copyText(value, fallbackField = null) {
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(value);
      toast(t('copied'));
    } catch {
      const temporary = fallbackField || document.createElement('textarea');
      if (!fallbackField) { temporary.value = value; temporary.style.position = 'fixed'; temporary.style.insetInlineStart = '-9999px'; document.body.append(temporary); }
      temporary.focus(); temporary.select();
      let copied = false;
      try { copied = document.execCommand('copy'); } catch { /* Manual selection remains available. */ }
      if (!fallbackField) temporary.remove();
      toast(t(copied ? 'copied' : 'copyFailed'));
    }
  }
  $('#copy-email').addEventListener('click', () => copyText(CV_PROFILE.email));
  $('#copy-message').addEventListener('click', () => copyText($('#message-output').value, $('#message-output')));

  function validateField(field) {
    const input = $('#contact-' + field);
    const value = input.value.trim();
    const valid = field === 'name' ? value.length >= 2 : field === 'email' ? value.length > 0 && input.validity.valid : value.length >= 10;
    input.setAttribute('aria-invalid', String(!valid));
    input.setAttribute('aria-describedby', field + '-error');
    $('#' + field + '-error').textContent = valid ? '' : t(field + 'Error');
    return valid;
  }

  function prepareMessage(announce = true) {
    const name = $('#contact-name').value.trim();
    const email = $('#contact-email').value.trim();
    const message = $('#contact-message').value.trim();
    const body = `${t('formName')}: ${name}\n${t('formEmail')}: ${email}\n\n${message}`;
    $('#message-output').value = body;
    $('#open-mail').href = `mailto:${CV_PROFILE.email}?subject=${encodeURIComponent(t('subject'))}&body=${encodeURIComponent(body)}`;
    $('#message-preview').hidden = false;
    if (announce) { toast(t('readyToast')); $('#message-output').focus({ preventScroll: true }); }
  }

  $('#contact-form').addEventListener('submit', event => {
    event.preventDefault();
    const fields = ['name', 'email', 'message'];
    const results = fields.map(validateField);
    if (results.some(valid => !valid)) { $('#contact-' + fields[results.indexOf(false)]).focus(); return; }
    prepareMessage();
  });
  ['name', 'email', 'message'].forEach(field => $('#contact-' + field).addEventListener('input', () => {
    if ($('#contact-' + field).getAttribute('aria-invalid') === 'true') validateField(field);
    if (!$('#message-preview').hidden) $('#message-preview').hidden = true;
  }));
  $$('[data-print]').forEach(button => button.addEventListener('click', () => {
    renderPrintResume();
    window.print();
  }));
  $$('[data-year]').forEach(element => { element.textContent = new Date().getFullYear(); });
  updateLanguage();
})();
