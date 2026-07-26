/* =========================================================================
   GATE CS MISSION CONTROL — CONTENT DATA
   All static content lives here as data, rendered by script.js.
   Edit this file to update text without touching layout logic.
   ========================================================================= */

const DATA = {};

/* -------------------------------------------------------------------------
   SIDEBAR NAV STRUCTURE
   ------------------------------------------------------------------------- */
DATA.nav = [
  { group: "Mission Brief", items: [
    { id: "intro", label: "Introduction", icon: "◎" },
    { id: "about-gate", label: "About GATE", icon: "▣" },
    { id: "exam-pattern", label: "Exam Pattern", icon: "▦" },
    { id: "marking-scheme", label: "Marking Scheme", icon: "±" },
    { id: "negative-marking", label: "Negative Marking", icon: "−" },
    { id: "question-types", label: "Question Types", icon: "?" },
    { id: "eligibility", label: "Eligibility", icon: "✓" },
    { id: "score-vs-marks", label: "Score vs Marks", icon: "≈" },
    { id: "rank-vs-marks", label: "Rank vs Marks", icon: "#" },
    { id: "psu", label: "PSU Opportunities", icon: "⚙" },
    { id: "mtech", label: "M.Tech Opportunities", icon: "🎓".slice(0,1)==="🎓"?"⌂":"⌂", icon2:"" },
    { id: "scholarships", label: "Scholarships", icon: "$" },
    { id: "foreign", label: "Foreign Universities", icon: "✈" },
  ]},
  { group: "Strategy", items: [
    { id: "study-strategy", label: "Study Strategy", icon: "⌘" },
    { id: "revision-strategy", label: "Revision Strategy", icon: "↻" },
    { id: "pyq-strategy", label: "Previous Year Questions", icon: "▤" },
    { id: "mock-strategy", label: "Mock Tests", icon: "◷" },
  ]},
  { group: "Subject Roadmap", items: [
    { id: "sub-maths", label: "Engineering Mathematics", icon: "∑" },
    { id: "sub-aptitude", label: "General Aptitude", icon: "✎" },
    { id: "sub-programming", label: "Programming & DS Basics", icon: "{}" },
    { id: "sub-ds", label: "Data Structures", icon: "☰" },
    { id: "sub-algo", label: "Algorithms", icon: "λ" },
    { id: "sub-dbms", label: "DBMS", icon: "▧" },
    { id: "sub-os", label: "Operating Systems", icon: "⌥" },
    { id: "sub-cn", label: "Computer Networks", icon: "◈" },
    { id: "sub-coa", label: "COA", icon: "▮" },
    { id: "sub-dl", label: "Digital Logic", icon: "◧" },
    { id: "sub-toc", label: "Theory of Computation", icon: "Ω" },
    { id: "sub-compiler", label: "Compiler Design", icon: "▷" },
  ]},
  { group: "Resources & Tools", items: [
    { id: "resources", label: "Free Resources Hub", icon: "🔗".slice(0,1)==="🔗"?"⤴":"⤴" },
    { id: "faq", label: "FAQ", icon: "i" },
    { id: "motivation", label: "Motivation", icon: "♥" },
    { id: "dashboard", label: "Progress Dashboard", icon: "▲" },
  ]},
];

/* -------------------------------------------------------------------------
   MARKS ANALYSIS TABLE
   ------------------------------------------------------------------------- */
DATA.marksTable = [
  { marks: "20-25", rank: "~8000-12000", score: "~500-550", colleges: "Very few / lower-tier NITs (general cat., specific branches)", opportunity: "PSU screening cutoffs rarely met; weak M.Tech options" },
  { marks: "30-35", rank: "~4500-7000", score: "~560-600", colleges: "Some new NITs, private universities", opportunity: "A few state PSUs; low-demand M.Tech seats" },
  { marks: "40-45", rank: "~2500-4000", score: "~610-650", colleges: "Mid-tier NITs (relevant branch), IIITs", opportunity: "Several PSU GATE-recruiters' cutoffs met" },
  { marks: "50-55", rank: "~1200-2200", score: "~660-700", colleges: "Good NITs, top IIITs, some new IITs", opportunity: "Most core PSU cutoffs cleared; solid M.Tech calls" },
  { marks: "60-65", rank: "~500-1000", score: "~710-750", colleges: "Top NITs, older IIITs, several IITs", opportunity: "Strong PSU shortlist odds; scholarship-grade M.Tech" },
  { marks: "70-75", rank: "~150-450", score: "~760-800", colleges: "Top IITs (CSE at many, depending on year)", opportunity: "Excellent PSU + IIT M.Tech/PhD prospects" },
  { marks: "80-85", rank: "~40-140", score: "~810-850", colleges: "IIT Bombay/Delhi/Madras/Kanpur CSE range", opportunity: "Near-guaranteed top PSU + top IIT seat" },
  { marks: "90+", rank: "Top 40", score: "860+", colleges: "IIT Bombay/Delhi CSE, research fellowships", opportunity: "Full pick of PSU + IISc/IIT research seats" },
];

/* -------------------------------------------------------------------------
   FAQ DATA — grouped, ~80 entries
   ------------------------------------------------------------------------- */
DATA.faq = [
{cat:"General",q:"Can I crack GATE while working a full-time job?",a:"Yes. Thousands of working professionals clear GATE every year. The key differences from a full-time student are that you have less raw study time but more discipline and real engineering context (you already understand APIs, databases, and systems from work). Success depends on a fixed daily routine (2-3 hrs weekday, 5-7 hrs weekend), ruthless topic prioritization, and starting 8-10 months in advance rather than 3."},
{cat:"General",q:"Is 60 marks enough for GATE CS?",a:"60+ marks typically lands an All India Rank in the 500-1000 range (varies by year/normalization), which is enough for most NITs, several IIITs, PSU shortlists, and M.Tech admission with a fee waiver. It is a very reasonable, achievable target for a working professional. 70+ opens IIT CSE and premium PSU doors."},
{cat:"General",q:"Should I skip Mathematics entirely since I'm weak in it?",a:"No — Engineering Mathematics is roughly 13-15% of the paper and many topics (Probability, Linear Algebra) overlap conceptually with things you already touch in AI/ML work. Skipping it caps your ceiling. Instead, rebuild it from the basics (this portal's Mathematics module assumes zero prior recall) rather than skipping it."},
{cat:"General",q:"How much coding is required for GATE CS?",a:"GATE CS does not ask you to write full programs. It tests your ability to trace C-like pseudocode, compute time/space complexity, and predict outputs. Your professional coding background is a strong asset here — you already read code fluently; you mainly need to get comfortable with C-style syntax quirks (pointers, recursion traces, operator precedence) since GATE code snippets are usually in C."},
{cat:"General",q:"Can Python/C# developers crack GATE without knowing much C?",a:"Yes. You do not need to write C, only read and trace it. Spend 3-4 days mapping C syntax (pointers, structs, arrays-as-pointers, bitwise ops) to concepts you already know from Python/C#. This is a translation task, not a new skill."},
{cat:"General",q:"Can AI/automation engineers crack GATE, or is core CS too different?",a:"AI and automation engineers usually have strong grounding in Probability, Linear Algebra, and Python logic already — a real advantage in the Mathematics and Programming sections. The gap is usually in COA, Digital Logic, TOC, and Compiler Design, which are rarely touched in day-to-day AI/backend work and need to be built from scratch."},
{cat:"General",q:"How many hours should I study per week as a working professional?",a:"A realistic sustainable target is 20-24 hours/week: about 2-3 hours on 5 weekdays (12-15 hrs) and 5-7 hours across the weekend (10-14 hrs). This portal's dashboard tracks your actual logged hours against this target."},
{cat:"General",q:"What if I consistently fail mock tests?",a:"Mocks before you've finished a subject WILL feel bad — that is expected and not a signal to panic. Treat every wrong answer as data: log it in an error notebook (which topic, which mistake type — concept gap, silly error, time pressure), and revisit that specific micro-topic. Mock scores should trend upward over 8-10 weeks, not be perfect from day one."},
{cat:"General",q:"How should I revise once I've completed a subject?",a:"Use spaced repetition: revise a completed subject after 3 days, then 10 days, then 30 days, using only your short notes and formula sheet (not the full material). Each revision pass should be faster than the last — that speed increase IS the learning."},
{cat:"General",q:"Should I solve PYQs before or after finishing theory?",a:"After a first theory pass of a topic, always attempt its PYQs immediately — this is the fastest way to calibrate what 'GATE level' actually means for that topic. Don't wait until the whole subject or whole syllabus is done."},
{cat:"General",q:"Is my 2023 attempt (19 marks, unserious) a bad sign for this attempt?",a:"No — a low score from an unfocused, half-serious attempt tells you almost nothing about your ceiling. It tells you that random guessing without a strategy underperforms even a modest amount of structured prep. This time you have a full roadmap, a time-boxed plan, and negative-marking discipline, which alone typically adds 15-25 marks over an unstructured attempt."},
{cat:"Exam",q:"What is the exam duration and total marks?",a:"GATE CS is a 3-hour computer-based test worth 100 marks with 65 questions, covering General Aptitude (15 marks), Engineering Mathematics (~13 marks) and the Core CS/IT subjects (~72 marks)."},
{cat:"Exam",q:"Is GATE CS conducted online or offline?",a:"It is a Computer Based Test (CBT) conducted at designated centres, not a pen-paper exam. Practicing on an on-screen mock interface (not just paper) is important."},
{cat:"Exam",q:"Are calculators allowed?",a:"Only the on-screen virtual scientific calculator provided within the exam software is allowed. No physical calculators are permitted."},
{cat:"Exam",q:"What are MSQ, MCQ and NAT question types?",a:"MCQ = single correct option out of four (has negative marking). MSQ = Multiple Select Question, one or more correct options out of four (no negative marking). NAT = Numerical Answer Type, you type a numeric value (no negative marking, tighter/exact or ranged evaluation)."},
{cat:"Exam",q:"Does GATE have negative marking on all questions?",a:"No. Negative marking applies only to MCQs (typically -1/3 for 1-mark MCQs and -2/3 for 2-mark MCQs). MSQ and NAT questions have zero negative marking."},
{cat:"Exam",q:"What is a good guessing strategy given negative marking?",a:"For MCQs: only guess if you can eliminate at least 2 of 4 options confidently (expected value turns positive). For MSQ/NAT: always attempt, since there's no penalty — even a partial elimination-based guess costs nothing."},
{cat:"Exam",q:"How is the GATE score different from marks?",a:"Marks are your raw performance out of 100 on your specific paper/shift. Score is a normalized value (typically on a scale up to ~1000) that accounts for difficulty differences between multiple shifts of the same subject, making cross-shift candidates comparable."},
{cat:"Exam",q:"What is normalization and why does it exist?",a:"Since GATE CS may be conducted across multiple sessions/shifts with different question sets, normalization statistically adjusts raw marks using the mean and standard deviation of each shift so that no candidate is disadvantaged by getting a harder shift."},
{cat:"Exam",q:"What is AIR?",a:"AIR (All India Rank) is your rank among all candidates who appear for that paper, based on normalized score, used for admissions and PSU shortlisting."},
{cat:"Exam",q:"Who is eligible for GATE CS?",a:"Candidates who have completed or are in the final year of a Bachelor's degree in Engineering/Technology/Architecture, or a Master's in a relevant science subject, are eligible. There is no strict age limit and no limit on the number of attempts."},
{cat:"Exam",q:"Is there a validity period for the GATE score?",a:"The GATE score is valid for 3 years from the date of announcement of results, used for M.Tech admissions and PSU recruitment during that window."},
{cat:"Exam",q:"Can I use my GATE score for a job directly?",a:"Many PSUs (like ONGC, BHEL, IOCL, NTPC, GAIL, NHPC, and others) recruit directly through GATE scores, skipping their own written exam, though each PSU sets its own cutoffs and process (interviews, group discussions) after the GATE shortlist."},
{cat:"Exam",q:"What are common myths about GATE?",a:"Common myths: 'You must be a topper to clear GATE' (false — consistent moderate performers clear it every year); 'Working professionals can't compete with full-time students' (false — professionals often have better focus and real-world context); 'You need coaching to crack it' (false — free resources like NPTEL and GeeksforGeeks are sufficient for most aspirants)."},
{cat:"Exam",q:"What mistakes do most GATE aspirants make?",a:"Most common mistakes: ignoring Mathematics until the last month, not doing timed mocks until 2 weeks before the exam, revising a subject only once, guessing MCQs randomly, and spending disproportionate time on 'favorite' subjects while neglecting weaker ones."},
{cat:"Exam",q:"How do toppers typically prepare?",a:"Toppers generally follow: (1) one full syllabus pass with notes, (2) topic-wise PYQ practice right after each topic, (3) 15-25+ full-length mocks in the last 3 months, (4) a maintained error notebook, and (5) at least 3 full revision cycles of short notes before the exam."},
{cat:"Exam",q:"How should working professionals prepare differently from students?",a:"Professionals should compress the 'explore many resources' phase (pick ONE primary source per subject and stick with it), study in tight time-boxed sessions (Pomodoro), and prioritize high-weightage topics first since total available hours are more limited than a full-time student's."},
{cat:"Marks",q:"Do exact rank/score numbers shown in the marks table apply every year?",a:"No — these are approximate historical ranges for calibration only. Exact cutoffs, ranks and scores shift every year based on paper difficulty, number of candidates and normalization. Always check the official GATE website for the current year's numbers."},
{cat:"Marks",q:"What score is typically needed for IIT CSE M.Tech?",a:"Historically, competitive IIT CSE seats have needed marks roughly in the 65-85+ range depending on the IIT, category and year — treat this as a directional target, not a guarantee."},
{cat:"Marks",q:"What score is typically needed for major PSU shortlists?",a:"PSU cutoffs vary hugely by company and vacancy count in a given year, but historically core-branch PSU shortlists for CS/IT candidates have often required marks somewhere in the 55-75 range. Always verify against the specific PSU's current notification."},
{cat:"Strategy",q:"How many months of preparation do I need starting from a weak base?",a:"For a working professional targeting 70+ with a weak mathematics base, 8-10 months of structured, consistent preparation (following this portal's month-wise roadmap) is a realistic and comfortable timeline."},
{cat:"Strategy",q:"Which subject should I start with?",a:"Start with Programming Basics and Digital Logic — both build confidence quickly and don't require heavy prerequisite knowledge, while Mathematics is rebuilt in parallel from the very first week (little and often, not in one big block)."},
{cat:"Strategy",q:"How do I balance office work and GATE prep without burning out?",a:"Protect a fixed, non-negotiable daily slot (even 90 minutes) rather than 'whenever I'm free', batch weekday sessions around single-topic goals, and reserve deep, multi-hour focus work for weekends. See the Motivation module for burnout-prevention specifics."},
{cat:"Strategy",q:"What if I miss several days of study due to office deadlines?",a:"Do not try to 'catch up' by cramming double hours — resume at your next scheduled slot exactly where you left off, and treat the missed days as sunk. Consistency over the full 8-10 months matters far more than any single week."},
{cat:"Strategy",q:"Which subjects give the best marks-per-hour-invested ratio?",a:"Historically strong ROI subjects are Digital Logic, Computer Organization, and Discrete Mathematics — compact syllabi with very consistent, learnable question patterns. Algorithms and Operating Systems have high weightage but need more hours to master."},
{cat:"Strategy",q:"Should I make my own notes or use someone else's?",a:"Making your own short notes (even brief bullet-point ones) during your first pass massively improves retention and gives you a fast, personalized revision asset later. Reading someone else's notes alone is a weaker strategy."},
{cat:"Strategy",q:"How do I decide which topics to skip if I run out of time?",a:"Never skip a topic entirely; instead depth-triage: for low-weightage/high-difficulty topics, learn only the definitions and standard PYQ patterns rather than deep derivations. Full skipping of any core subject area is rarely worth the marks lost."},
{cat:"Mathematics",q:"I haven't touched maths since my B.Tech — where do I even start?",a:"Start from absolute zero with Set Theory and basic Propositional Logic in Discrete Mathematics (Week 1-2 of the Mathematics module here), which needs no prior recall. Linear Algebra and Calculus are rebuilt next using visual, intuition-first resources (3Blue1Brown, Khan Academy) before any GATE-level problem solving."},
{cat:"Mathematics",q:"Is Linear Algebra actually useful for someone doing AI work?",a:"Yes — matrices, eigenvalues and vector spaces in GATE Linear Algebra are the same mathematical objects behind PCA, embeddings and neural network weight matrices. Your AI exposure should make the intuition land faster, even though GATE tests it in a pure-math, calculation-heavy way."},
{cat:"Mathematics",q:"How much weightage does Mathematics carry?",a:"Engineering Mathematics is typically around 13 marks (about 13% of the paper), spread across Discrete Math, Linear Algebra, Calculus, and Probability & Statistics."},
{cat:"Mathematics",q:"Which Mathematics topic should I prioritize if short on time?",a:"Prioritize Discrete Mathematics (Graph theory, Set theory, Propositional logic) and Probability first — both have high PYQ frequency and are more procedural/pattern-based than Calculus, which needs more practice volume for the same marks."},
{cat:"Programming",q:"Do I need to memorize C syntax deeply?",a:"No — you need reading fluency, not writing fluency. Focus on: pointer arithmetic, array-pointer equivalence, structure/union basics, recursion tracing, and operator precedence/associativity, since these are what GATE code-tracing questions test."},
{cat:"Programming",q:"My job never uses recursion this deeply. Will that hurt me?",a:"It's a fixable gap, not a blocker. Recursion tracing (recurrence relations, call-stack visualization) needs deliberate practice regardless of background — plan 2-3 focused weeks on it early in the Algorithms module."},
{cat:"Resources",q:"Are free resources really enough, or do I need paid coaching?",a:"Free resources (NPTEL, GeeksforGeeks, GateOverflow, VisuAlgo, CP-Algorithms) are used by many top-ranking GATE CS candidates every year. Paid coaching mainly buys structure and accountability — which this portal's roadmap and dashboard are designed to replace for free."},
{cat:"Resources",q:"Which single resource should I trust most for theory?",a:"NPTEL video lectures (by IIT faculty) for deep theory, and GeeksforGeeks/GateOverflow for quick concept refreshers and PYQ-style practice — use NPTEL for first-pass learning, GfG/GateOverflow for revision and doubt-solving."},
{cat:"Resources",q:"Are the previous year GATE papers freely available?",a:"Yes, official GATE PYQ papers and answer keys are published on the official GATE website (gate.iitX.ac.in each year) and archived at gateoverflow.in with community-verified solutions."},
{cat:"Mocks",q:"When should I start taking full-length mock tests?",a:"Start topic-wise/subject-wise mocks as soon as you finish each subject (don't wait), and begin full-length 3-hour mocks about 10-12 weeks before the exam, once 60-70% of the syllabus is covered."},
{cat:"Mocks",q:"How many full mocks should I take in total?",a:"Aim for 15-20 full-length mocks in the final 3 months, roughly 1-2 per week, increasing to 2-3/week in the final month."},
{cat:"Mocks",q:"How do I analyse a mock properly?",a:"For every mock: categorize each wrong/skipped question as (a) concept gap, (b) silly/calculation error, (c) time-pressure guess, or (d) unfamiliar pattern. Log it in your error notebook with the exact topic, then schedule a 20-30 min fix session for the worst category within 48 hours."},
{cat:"Mocks",q:"What's a sane time-allocation strategy during the exam?",a:"A common approach: spend the first 20-25 minutes on Aptitude + easy 1-mark questions across subjects to bank quick marks, then move subject by subject in your strongest-to-weakest order, flagging (not skipping) tough questions for a final 15-minute sweep."},
{cat:"Motivation",q:"How do I avoid burnout while working full-time?",a:"Protect one full rest day per week with zero GATE guilt, keep weekday sessions short and boundaried (a timer that ends the session, win or not), and track progress by hours/topics completed rather than by comparing yourself to full-time-student study vlogs."},
{cat:"Motivation",q:"How do I restart after falling off track for two weeks?",a:"Don't try to mentally 'punish' yourself with a marathon catch-up session — restart at 70% of your normal daily target for 3 days to rebuild the habit loop, then return to full intensity. Motivation follows momentum, not the other way around."},
{cat:"Motivation",q:"How do I manage the stress of a demanding job alongside GATE prep?",a:"Separate 'office mode' and 'GATE mode' with a small physical or mental transition ritual (a short walk, closing the laptop lid fully) so office stress doesn't bleed into study focus, and keep GATE sessions short enough (25-50 min blocks) that they feel achievable even on a hard work day."},
{cat:"General",q:"Is it too late to start if the exam is a few months away?",a:"Even 4-5 focused months, using a tight subject-priority order (high-weightage subjects first, Mathematics rebuilt in parallel) and disciplined negative-marking-aware mocks, can realistically reach the 55-65 mark range for a working professional with a strong existing programming background."},
{cat:"General",q:"Do I need to solve every single previous year question?",a:"No — prioritize the last 10-12 years first (most repeated patterns live there), then expand further back only for subjects where you still feel shaky after that first pass."},
{cat:"General",q:"How important is General Aptitude really?",a:"General Aptitude is 15 marks — the single largest 'subject' block on the paper — and is highly learnable with practice since it doesn't require deep CS prerequisite knowledge. Treat it as a near-guaranteed high-scoring section, not an afterthought."},
{cat:"General",q:"Should I attempt every question in the exam?",a:"Attempt every MSQ and NAT question (zero penalty), and attempt MCQs only when you can eliminate at least two options — blind guessing across all MCQs is what hurt scores like an unfocused first attempt."},
{cat:"General",q:"What's the single biggest lever to go from ~20 marks to 70+ marks?",a:"Structure: a written month-wise plan, one primary resource per subject (not a dozen), PYQ practice immediately after each topic, and mocks with real error analysis — technical ability is rarely the bottleneck for someone with your engineering background; unstructured effort is."},
{cat:"Subjects",q:"Which core subject has the highest weightage overall?",a:"Algorithms and Operating Systems are typically among the highest-weightage core subjects (roughly 10-14 marks each historically), alongside Data Structures and DBMS/Computer Networks/COA in the 8-12 mark range each."},
{cat:"Subjects",q:"Is Compiler Design worth studying given its lower weightage?",a:"Yes — its syllabus is small (FIRST/FOLLOW sets, LL/LR parsing basics, syntax-directed translation), so even 15-20 focused hours captures most of its available marks, making it one of the best marks-per-hour subjects despite its lower total weight."},
{cat:"Subjects",q:"Should I study Theory of Computation before or after Compiler Design?",a:"Before — TOC's grammar and automata concepts (CFGs, pushdown automata) are direct prerequisites for understanding Compiler Design's parsing sections."},
{cat:"Subjects",q:"How does Digital Logic connect to Computer Organization?",a:"Digital Logic (gates, K-maps, flip-flops) provides the building blocks that Computer Organization uses to explain the data path, control unit, and memory circuits — study Digital Logic first or in parallel with COA."},
{cat:"Subjects",q:"I'm strong in SQL from work — can I skip the DBMS theory sections?",a:"No, but you can move faster through them. Practical SQL fluency doesn't automatically cover GATE's theory-heavy areas like functional dependency closures, normal form proofs, and formal relational algebra notation — these need dedicated (though quicker-than-average) practice."},
{cat:"Subjects",q:"Does my ASP.NET/REST API background help with Computer Networks?",a:"It helps mainly with the Application layer (HTTP semantics, client-server models) and gives useful mental anchors, but the Data Link, Network, and Transport layer theory (subnetting, routing algorithms, TCP internals) still needs to be built from the ground up."},
{cat:"Subjects",q:"Is Discrete Mathematics the same as what I studied in B.Tech first year?",a:"Largely yes, in scope — sets, relations, logic, graph theory, combinatorics. The difference is GATE tests it at a faster, more pattern-recognition-oriented pace, so the rebuild should focus on speed and PYQ familiarity, not just re-learning definitions."},
{cat:"Subjects",q:"How deep does GATE go into Machine Learning or AI topics?",a:"GATE CS's core syllabus does not include Machine Learning or AI as a dedicated subject — your AI/automation background is a bonus for Probability/Linear Algebra intuition, but won't be directly tested as an AI topic."},
{cat:"Score",q:"What was the approximate qualifying cutoff for GATE CS historically?",a:"Qualifying cutoffs for GATE CS (the minimum score to be considered 'qualified', separate from competitive cutoffs for admission/PSU shortlisting) have historically been noticeably lower than competitive cutoffs — always check the specific current year's official cutoff, since it varies annually by category and paper difficulty."},
{cat:"Score",q:"Does category (General/OBC/SC/ST/EWS/PwD) affect the marks needed?",a:"Yes — qualifying cutoffs and often institute-specific admission/PSU cutoffs are typically set differently per category. Check the specific year's official notification for category-wise cutoffs."},
{cat:"Score",q:"If I retake GATE, does my previous score affect the new attempt?",a:"No — each GATE attempt is scored independently based on that year's performance and normalization; a previous low score (such as an unfocused 19-mark attempt) has no bearing on a new attempt's score or eligibility."},
{cat:"Score",q:"Can I use my best of two GATE scores if I attempt twice?",a:"Score validity generally applies per exam year (typically 3 years from that year's result), and institutes/PSUs generally ask for your most recent valid score for a given recruitment/admission cycle — check the specific requirement of the institute/PSU you're applying to, as practices can vary."},
{cat:"Resources",q:"Is GeeksforGeeks enough on its own, or do I need NPTEL too?",a:"Use both for different purposes: NPTEL (IIT/IISc faculty lectures) for deep first-pass conceptual learning, and GeeksforGeeks for fast revision, structured notes, and practice questions. Relying on only one tends to leave either depth or speed underdeveloped."},
{cat:"Resources",q:"Are YouTube 'GATE crash course' videos from unofficial channels reliable?",a:"Quality varies widely and isn't vetted the way NPTEL/official university content is. Prefer NPTEL, university OpenCourseWare, and well-established free platforms (GeeksforGeeks, CS50) as your primary sources, using other channels only as supplementary explanations for topics you're still stuck on."},
{cat:"Resources",q:"Should I buy a physical GATE preparation book?",a:"Not required — free resources cover the full syllabus adequately. If you already own or can borrow a standard reference (e.g., CLRS, Silberschatz, Galvin) from your B.Tech years, use it as a reference for depth, but it isn't necessary to purchase new material."},
{cat:"Resources",q:"Where can I find official previous year GATE question papers?",a:"The official GATE website (organizing institute's site each year, e.g. gate.iisc.ac.in or the relevant year's IIT GATE site) publishes official question papers and answer keys; GateOverflow hosts an accessible archive with community-verified solutions and discussion."},
{cat:"Exam",q:"Can I choose my own exam center?",a:"You typically select from a list of available exam cities/centers during the application process, subject to seat availability at each center — confirm the current process on the official GATE application portal."},
{cat:"Exam",q:"What documents do I need to carry to the exam center?",a:"Typically your admit card and a valid original photo ID matching the details on the admit card — always check the specific current-year instructions on your admit card, as requirements can be updated."},
{cat:"Exam",q:"Can I skip a question and come back to it later?",a:"Yes — the CBT interface allows you to mark questions for review and navigate freely between questions within the allotted 3 hours, so you can skip and return to any question before time runs out."},
{cat:"Exam",q:"Is there a sectional time limit within the 3 hours?",a:"No — GATE CS does not impose separate time limits per section (Aptitude/Mathematics/Core); you manage the full 3 hours across all 65 questions as you choose."},
{cat:"Exam",q:"What happens if I finish early?",a:"You may submit early once you're confident in your answers, but it's generally better to use the full time for review — reserving the last 10-15 minutes specifically for flagged/marked questions rather than submitting immediately after your first pass."},
{cat:"Strategy",q:"Should I study multiple subjects in parallel or one at a time?",a:"A hybrid approach works best for working professionals: focus on one 'main' core subject at a time for depth, while running Mathematics and General Aptitude as small parallel daily/weekend tracks throughout, since they benefit more from spaced practice than concentrated blocks."},
{cat:"Strategy",q:"How do I know when a subject is 'done enough' to move on?",a:"A subject is reasonably 'done' when you can solve at least 70-80% of its last-10-year PYQs correctly under timed conditions and your self-rated confidence meter sits consistently above 70% — full mastery isn't required before moving to the next subject; a later revision pass will deepen it further."},
{cat:"Strategy",q:"Is it better to study weak or strong subjects first each week?",a:"Tackle your weakest pending subject during your highest-energy weekend block, and use lower-energy weekday slots for reinforcing subjects you're already moderately comfortable with — this matches task difficulty to available focus."},
{cat:"Strategy",q:"How should I adjust the roadmap if my exam date changes?",a:"Recompute backward from the new exam date using the same relative structure (foundation months → core build → systems/theory → mocks/revision → final 30/15/7-day tapers) rather than compressing every phase equally; the final revision and mock phases should not be shortened below roughly 8-10 weeks even if earlier phases get tightened."},
{cat:"Mocks",q:"Should I take mocks on paper or on a computer?",a:"On a computer, ideally using a CBT-style mock interface — GATE is a computer-based test, and practicing the on-screen navigation, virtual calculator, and marking-for-review flow removes a source of exam-day friction."},
{cat:"Mocks",q:"My mock scores are inconsistent week to week — is that normal?",a:"Yes, especially in the first several mocks and when mocks cover different subject mixes — look at a rolling 4-5 mock trendline rather than any single score, and cross-check inconsistency against which subjects each specific mock emphasized."},
{cat:"Mocks",q:"Should I review the correct answers I got right, not just the wrong ones?",a:"Briefly, yes — especially checking if a correct answer was a confident, fast solve versus a lucky guess or a slow struggle; slow-but-correct answers reveal topics that need more fluency practice even though they didn't cost marks yet."},
{cat:"Motivation",q:"How do I stay motivated when colleagues aren't preparing for GATE and don't understand the goal?",a:"Anchor motivation to your own tracked progress (dashboard streaks, completed checklists, rising mock scores) rather than external validation — the goal doesn't need to be understood by colleagues to be worth pursuing consistently."},
{cat:"Motivation",q:"Is it normal to doubt whether this is worth it midway through prep?",a:"Yes, this is common around the middle of any long preparation — it often coincides with the hardest, most abstract subjects (like TOC) rather than reflecting your actual trajectory. Revisit your original reasons (PSU/M.Tech/fundamentals) and check your dashboard's actual progress data rather than your in-the-moment feeling."},
{cat:"Motivation",q:"How do I handle comparison with full-time student aspirants who study 10+ hours a day?",a:"Compare your trajectory only to your own past weeks, not to a fundamentally different situation — a working professional's 20-24 focused weekly hours, sustained consistently for 8-10 months, is a completely different (and viable) path to the same outcome."},
];

/* -------------------------------------------------------------------------
   RESOURCE LINKS (used across subject pages + resources hub)
   ------------------------------------------------------------------------- */
DATA.resourceLinks = {
  general: [
    { title: "Official GATE Website (IISc/IITs consortium)", url: "https://www.gate.iisc.ac.in/" },
    { title: "NPTEL — Free video lectures by IIT/IISc faculty", url: "https://nptel.ac.in/" },
    { title: "SWAYAM — Government free MOOC platform", url: "https://swayam.gov.in/" },
    { title: "GateOverflow — PYQs with verified community solutions", url: "https://gateoverflow.in/" },
    { title: "GeeksforGeeks GATE corner", url: "https://www.geeksforgeeks.org/gate-cs-notes-gq/" },
  ],
  maths: [
    { title: "Khan Academy — Math from first principles", url: "https://www.khanacademy.org/math" },
    { title: "3Blue1Brown — Essence of Linear Algebra (visual intuition)", url: "https://www.3blue1brown.com/topics/linear-algebra" },
    { title: "3Blue1Brown — Essence of Calculus", url: "https://www.3blue1brown.com/topics/calculus" },
    { title: "StatQuest — Probability & Statistics explained simply", url: "https://statquest.org/" },
    { title: "NPTEL — Discrete Mathematics", url: "https://nptel.ac.in/courses/106106094" },
  ],
  programming: [
    { title: "CS50 — Harvard's free intro to CS (C fundamentals)", url: "https://cs50.harvard.edu/x/" },
    { title: "GeeksforGeeks — C Programming", url: "https://www.geeksforgeeks.org/c-programming-language/" },
  ],
  ds: [
    { title: "VisuAlgo — Visualize data structures & algorithms", url: "https://visualgo.net/en" },
    { title: "OpenDSA — Free interactive DS/Algo textbook", url: "https://opendsa-server.cs.vt.edu/" },
    { title: "GeeksforGeeks — Data Structures", url: "https://www.geeksforgeeks.org/data-structures/" },
  ],
  algo: [
    { title: "CP-Algorithms — Rigorous algorithm reference", url: "https://cp-algorithms.com/" },
    { title: "VisuAlgo — Sorting & graph algorithm visualizations", url: "https://visualgo.net/en" },
    { title: "MIT OpenCourseWare — Introduction to Algorithms", url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/" },
  ],
  dbms: [
    { title: "NPTEL — Database Management System", url: "https://nptel.ac.in/courses/106105175" },
    { title: "GeeksforGeeks — DBMS", url: "https://www.geeksforgeeks.org/dbms/" },
  ],
  os: [
    { title: "NPTEL — Operating System Fundamentals", url: "https://nptel.ac.in/courses/106105214" },
    { title: "GeeksforGeeks — Operating Systems", url: "https://www.geeksforgeeks.org/operating-systems/" },
  ],
  cn: [
    { title: "NPTEL — Computer Networks", url: "https://nptel.ac.in/courses/106105183" },
    { title: "GeeksforGeeks — Computer Networks", url: "https://www.geeksforgeeks.org/computer-network-tutorials/" },
  ],
  coa: [
    { title: "NPTEL — Computer Organization and Architecture", url: "https://nptel.ac.in/courses/106103068" },
    { title: "GeeksforGeeks — Computer Organization", url: "https://www.geeksforgeeks.org/computer-organization-and-architecture-tutorials/" },
  ],
  dl: [
    { title: "NPTEL — Digital Logic Design", url: "https://nptel.ac.in/courses/117106114" },
    { title: "GeeksforGeeks — Digital Logic", url: "https://www.geeksforgeeks.org/digital-electronics-logic-design-tutorials/" },
  ],
  toc: [
    { title: "NPTEL — Theory of Computation", url: "https://nptel.ac.in/courses/106104148" },
    { title: "GeeksforGeeks — Theory of Computation", url: "https://www.geeksforgeeks.org/theory-of-computation-automata-tutorials/" },
  ],
  compiler: [
    { title: "NPTEL — Compiler Design", url: "https://nptel.ac.in/courses/106108113" },
    { title: "GeeksforGeeks — Compiler Design", url: "https://www.geeksforgeeks.org/compiler-design-tutorials/" },
  ],
  aptitude: [
    { title: "GeeksforGeeks — Quantitative Aptitude", url: "https://www.geeksforgeeks.org/quantitative-aptitude-topics/" },
    { title: "Khan Academy — Arithmetic & Ratios", url: "https://www.khanacademy.org/math/arithmetic" },
  ],
};

/* -------------------------------------------------------------------------
   SUBJECT DATA — generic schema rendered by renderSubjectPage()
   ------------------------------------------------------------------------- */
DATA.subjects = {

"sub-maths": {
  name: "Engineering Mathematics", weightage: "~13 marks (13%)", difficulty: "Medium (High for a rusty base — rebuild from zero)",
  prerequisites: "None assumed. This module starts from 10th/12th-grade fundamentals and rebuilds upward.",
  intro: "Mathematics is the section most working professionals neglect — and the one with the highest 'rebuild ROI' since you already had a strong 10th/12th/B.Tech base, it just needs reactivation, not fresh learning.",
  importance: "13 marks may look small, but Discrete Math and Probability overlap directly with backend/AI intuition you already use, making this some of the fastest marks-per-hour on the entire syllabus once rebuilt.",
  syllabus: [
    "Discrete Math: Propositional & first-order logic, Sets, Relations, Functions, Partial orders & lattices, Graph theory (connectivity, isomorphism, trees, colouring), Combinatorics (counting, recurrence relations, generating functions), Group theory basics",
    "Linear Algebra: Matrices, determinants, system of linear equations, eigenvalues & eigenvectors, LU decomposition, rank",
    "Calculus: Limits & continuity, differentiation, maxima/minima, Mean Value Theorem, integration, partial derivatives, definite integrals",
    "Probability & Statistics: Random variables, uniform/normal/binomial/Poisson/exponential distributions, mean/median/mode/variance, conditional probability, Bayes' theorem",
  ],
  studyOrder: ["Set Theory & Propositional Logic (Week 1-2)", "Graph Theory basics (Week 2-3)", "Combinatorics & Recurrence (Week 3-4)", "Probability fundamentals (Week 4-5)", "Linear Algebra (Week 5-6)", "Calculus (Week 6-7)", "Distributions & Bayes (Week 7-8)", "Full PYQ sweep + revision (Week 8+)"],
  commonMistakes: ["Trying to 're-derive everything' instead of pattern-recognizing GATE-style questions", "Skipping graph theory because it 'feels like CS not maths' — it is heavily tested", "Ignoring units/edge cases in probability (independent vs mutually exclusive)", "Not practicing NAT-style numeric calculus questions under time pressure"],
  formulaSheet: [
    "Permutations: nPr = n!/(n-r)! | Combinations: nCr = n!/(r!(n-r)!)",
    "Bayes' Theorem: P(A|B) = P(B|A)P(A) / P(B)",
    "Variance: Var(X) = E(X²) − [E(X)]² ; Std Dev = √Var(X)",
    "Eigenvalues: det(A − λI) = 0 ; Trace(A) = Σλᵢ ; det(A) = Πλᵢ",
    "Graph: sum of degrees = 2 × number of edges ; tree has (n−1) edges for n vertices",
    "Mean Value Theorem: f'(c) = [f(b) − f(a)] / (b − a) for some c in (a,b)",
  ],
  shortNotes: ["A partial order is reflexive + antisymmetric + transitive; a lattice needs every pair to have a join & meet.", "A graph is bipartite iff it has no odd-length cycle.", "Binomial approximates Poisson when n is large and p is small (np constant).", "Rank of a matrix = number of linearly independent rows/columns; full-rank square matrix ⇒ invertible."],
  memoryTricks: ["'SEE-TAP' for partial order: reflexive, antiSymmetric, Transitive.", "Remember Bayes as 'flip the condition, weight by priors, normalize by total probability.'", "For eigenvalues of a triangular matrix: they're just the diagonal entries — no computation needed."],
  pyqTrend: "Graph theory, counting/recurrence, and probability distributions are the most consistently repeated topics historically; calculus questions tend to be more computation-heavy NAT types.",
  importantPYQs: ["GATE CS PYQs 2015-2024: Graph theory (connectivity, chromatic number)", "GATE CS PYQs 2016-2023: Conditional probability / Bayes' theorem word problems", "GATE CS PYQs 2018-2024: Eigenvalue / rank NAT questions", "GATE CS PYQs 2014-2022: Recurrence relation solving (linear, non-homogeneous)"],
  youtube: [{title:"NPTEL — Discrete Mathematics (IIT)",url:"https://nptel.ac.in/courses/106106094"},{title:"3Blue1Brown — Essence of Linear Algebra",url:"https://www.3blue1brown.com/topics/linear-algebra"},{title:"3Blue1Brown — Essence of Calculus",url:"https://www.3blue1brown.com/topics/calculus"},{title:"StatQuest — Probability fundamentals",url:"https://statquest.org/"}],
  notes: [{title:"GeeksforGeeks — Engineering Mathematics",url:"https://www.geeksforgeeks.org/engineering-mathematics-gq/"}],
  books: ["Kenneth Rosen — Discrete Mathematics and its Applications (library/free-preview chapters)", "Any standard B.Tech 1st-year Engineering Mathematics textbook you already own"],
  practiceLinks: [{title:"GateOverflow — Mathematics PYQs",url:"https://gateoverflow.in/"},{title:"Khan Academy practice exercises",url:"https://www.khanacademy.org/math"}],
  estimatedHours: 90,
  checklist: ["Propositional & first-order logic","Set theory, relations, functions","Partial orders & lattices","Graph theory fundamentals","Combinatorics & counting","Recurrence relations","Group theory basics","Matrices & determinants","Eigenvalues & eigenvectors, rank","Limits, continuity, differentiation","Maxima/minima, Mean Value Theorem","Integration & partial derivatives","Random variables & distributions","Bayes' theorem & conditional probability","Mean/median/mode/variance","Full Mathematics PYQ sweep"],
},

"sub-aptitude": {
  name: "General Aptitude", weightage: "15 marks (15% — largest single block)", difficulty: "Low-Medium (highly trainable)",
  prerequisites: "Basic school-level arithmetic and English comprehension.",
  intro: "General Aptitude is common across ALL GATE papers and is the single highest-weightage 'subject'. It rewards daily short practice far more than long study sessions.",
  importance: "At 15 marks, Aptitude alone can be worth more than an entire core CS subject like COA or Digital Logic — treat it as a guaranteed-marks section, not a side activity.",
  syllabus: ["Verbal: reading comprehension, sentence completion, synonyms/antonyms, verbal analogies, grammar-based error spotting","Quantitative: ratio-proportion, percentages, profit-loss, speed-time-distance, permutation-combination basics, probability basics, data interpretation (tables/charts)","Analytical: logical reasoning, number/letter series, statement-conclusion, puzzles, blood relations","Spatial: figure series, pattern folding/unfolding, spatial visualization"],
  studyOrder: ["Quantitative fundamentals (Week 1)","Data interpretation (Week 1-2)","Verbal & grammar (parallel, ongoing)","Logical reasoning & puzzles (Week 2-3)","Spatial reasoning (Week 3)","Daily mixed practice sets thereafter"],
  commonMistakes: ["Treating Aptitude as 'easy, can do it last-minute' and then rushing it", "Not timing practice sets — Aptitude questions are designed to be fast, and slow solving eats exam time budget", "Ignoring reading comprehension because 'English is fine' — GATE RC passages are intentionally dense"],
  formulaSheet: ["Speed-Distance-Time: Speed = Distance / Time","Percentage change: ((New − Old)/Old) × 100","Simple Interest = (P×R×T)/100 ; Compound Interest = P(1+R/100)^T − P","Profit % = (Profit/Cost Price) × 100"],
  shortNotes: ["For data interpretation, always read the axis/units before reading the question — most errors come from unit confusion.", "In statement-conclusion questions, only what MUST logically follow counts — plausible-but-not-certain conclusions are traps."],
  memoryTricks: ["'PEMDAS-in-context' — re-check operator order in every DI table calculation.", "For blood relation puzzles, always sketch a quick family tree diagram rather than solving mentally."],
  pyqTrend: "Data interpretation and logical reasoning (series, statement-conclusion) are the most consistently appearing categories; verbal analogies and RC appear nearly every year too.",
  importantPYQs: ["GATE PYQs — Data interpretation table/bar-chart sets (2015-2024)","GATE PYQs — Number & letter series (recurring every year)","GATE PYQs — Statement-conclusion & syllogism sets"],
  youtube: [{title:"GeeksforGeeks — Quantitative Aptitude",url:"https://www.geeksforgeeks.org/quantitative-aptitude-topics/"}],
  notes: [{title:"GeeksforGeeks — GATE Aptitude notes",url:"https://www.geeksforgeeks.org/quantitative-aptitude-topics/"}],
  books: ["R.S. Aggarwal — Quantitative Aptitude (library copy is fine, purely for practice sets)"],
  practiceLinks: [{title:"GeeksforGeeks Aptitude practice",url:"https://www.geeksforgeeks.org/quantitative-aptitude-topics/"}],
  estimatedHours: 40,
  checklist: ["Ratio, percentage, profit-loss","Speed-time-distance","Data interpretation (tables/charts)","Permutation-combination & probability basics","Reading comprehension practice","Verbal analogies & grammar","Number/letter series","Statement-conclusion & syllogism","Blood relations & puzzles","Spatial visualization","Timed mixed practice sets (daily, 15 min)"],
},

"sub-programming": {
  name: "Programming & DS Basics (C)", weightage: "Embedded across Programming/DS/Algo (~8-10 marks direct)", difficulty: "Low for you (strong existing background)",
  prerequisites: "Any one programming language — you already have Python, C#, backend experience.",
  intro: "GATE tests C-style pseudocode reading, not writing. This module is a translation layer from your existing Python/C# fluency to C syntax and semantics.",
  importance: "Every Algorithms, Data Structures, and even some OS/COA question embeds a C code snippet — fluency here is a multiplier for every other subject's marks.",
  syllabus: ["Variables, data types, operators, precedence & associativity","Control flow: loops, conditionals, switch-case","Functions, recursion, call stack, scope","Arrays, strings, pointers, pointer arithmetic","Structures, unions, typedef","Storage classes (static/extern/register/auto)","Standard input/output basics for tracing"],
  studyOrder: ["Syntax mapping from Python/C# (Week 1)","Pointers & arrays (Week 1-2)","Recursion tracing (Week 2)","Structures & storage classes (Week 2)","Code-tracing PYQ practice (ongoing)"],
  commonMistakes: ["Skipping pointer arithmetic because 'my language handles memory automatically' — this is the #1 gap for professionals from managed languages", "Not practicing manual recursion tracing / recurrence writing", "Misreading operator precedence in tricky expressions (a classic GATE trap)"],
  formulaSheet: ["Array-pointer equivalence: arr[i] ≡ *(arr + i)","Pointer to pointer: **pp dereferences twice","sizeof(int)=4, sizeof(char)=1, sizeof(double)=8 (typical GATE assumption, x86)"],
  shortNotes: ["In C, arrays decay to pointers when passed to functions — sizeof() behaves differently inside vs outside the function.", "Static local variables retain value across function calls; this is the #1 recursion/trace trick."],
  memoryTricks: ["'Left-to-right unless unary/assignment' — a quick rule of thumb for most GATE precedence traps.", "Trace recursion by literally drawing the call stack as boxes — never do it mentally past 3 levels."],
  pyqTrend: "C code-tracing questions (output prediction) and pointer/array questions appear almost every year, usually as 1 or 2-mark MCQs.",
  importantPYQs: ["GATE PYQs — Pointer arithmetic & array decay questions","GATE PYQs — Recursive function output tracing","GATE PYQs — Operator precedence & short-circuit evaluation traps"],
  youtube: [{title:"CS50 — C programming fundamentals",url:"https://cs50.harvard.edu/x/"}],
  notes: [{title:"GeeksforGeeks — C Programming",url:"https://www.geeksforgeeks.org/c-programming-language/"}],
  books: ["Kernighan & Ritchie — The C Programming Language (reference only, skim relevant chapters)"],
  practiceLinks: [{title:"GeeksforGeeks C quizzes",url:"https://www.geeksforgeeks.org/c-programming-language/"}],
  estimatedHours: 30,
  checklist: ["Operators, precedence, associativity","Loops, conditionals, switch-case","Functions & scope","Recursion & call-stack tracing","Arrays & strings","Pointers & pointer arithmetic","Structures, unions, typedef","Storage classes","Code-tracing PYQ set"],
},

"sub-ds": {
  name: "Data Structures", weightage: "~8-10 marks", difficulty: "Medium",
  prerequisites: "Programming & DS Basics module.",
  intro: "Data Structures underlie almost every Algorithms question, so mastery here compounds directly into your Algorithms score.",
  importance: "High-frequency topic with clean, learnable patterns — arrays, linked lists, trees, and hashing show up nearly every year.",
  syllabus: ["Arrays & strings","Stacks & queues (array/linked implementations, applications)","Linked lists (singly, doubly, circular)","Trees (binary trees, BST, traversals, balanced trees — AVL, B-Trees)","Heaps & priority queues","Hashing (collision resolution, load factor)","Graphs (representations: adjacency list/matrix)"],
  studyOrder: ["Arrays, stacks, queues (Week 1)","Linked lists (Week 1-2)","Trees & BST (Week 2-3)","Heaps (Week 3)","Hashing (Week 3-4)","Graph representations (Week 4)","PYQ sweep (Week 4-5)"],
  commonMistakes: ["Memorizing traversal code instead of understanding recursive structure", "Not practicing BST insert/delete edge cases (deleting a node with two children)", "Confusing min-heap and max-heap array-index formulas under time pressure"],
  formulaSheet: ["Heap parent/child index (0-indexed): parent=(i−1)/2, left=2i+1, right=2i+2","Complete binary tree height: h = ⌊log₂ n⌋","BST search/insert/delete average: O(log n); worst-case (skewed): O(n)"],
  shortNotes: ["Inorder traversal of a BST always yields sorted output — a fast way to sanity-check BST properties.", "AVL trees rebalance via rotations to guarantee O(log n) height; B-Trees are the disk-friendly generalization used in databases (link to your DBMS module)."],
  memoryTricks: ["'Pre-In-Post = Root position' — Preorder: Root first; Inorder: Root middle; Postorder: Root last.", "Stack = 'Plates' (LIFO), Queue = 'Line at a counter' (FIFO) — recall via daily-life analogy under pressure."],
  pyqTrend: "Tree traversal + BST property questions and heap-based priority queue questions are extremely consistent across years; hashing/collision questions appear as steady 1-markers.",
  importantPYQs: ["GATE PYQs — BST insertion/deletion sequences","GATE PYQs — Heap construction & extraction trace","GATE PYQs — Hashing collision resolution (linear/quadratic probing, chaining)"],
  youtube: [{title:"VisuAlgo — visualize DS operations",url:"https://visualgo.net/en"},{title:"OpenDSA — free interactive DS textbook",url:"https://opendsa-server.cs.vt.edu/"}],
  notes: [{title:"GeeksforGeeks — Data Structures",url:"https://www.geeksforgeeks.org/data-structures/"}],
  books: ["Narasimha Karumanchi — Data Structures and Algorithms Made Easy (library copy)"],
  practiceLinks: [{title:"VisuAlgo interactive practice",url:"https://visualgo.net/en"}],
  estimatedHours: 55,
  checklist: ["Arrays & strings","Stacks & queues","Linked lists (all variants)","Binary trees & traversals","BST insert/search/delete","AVL trees & B-Trees","Heaps & priority queues","Hashing & collision resolution","Graph representations","Data Structures PYQ sweep"],
},

"sub-algo": {
  name: "Algorithms", weightage: "~12-14 marks (high weightage)", difficulty: "Medium-High",
  prerequisites: "Data Structures module, basic recursion comfort.",
  intro: "Algorithms is one of the highest-weightage subjects and rewards deep, deliberate practice more than any other core subject.",
  importance: "Complexity analysis alone appears in nearly every year's paper, and greedy/DP/graph algorithms together form a large, very learnable cluster.",
  syllabus: ["Asymptotic notation & complexity analysis (recurrences, Master theorem)","Sorting (comparison-based & non-comparison, complexity, stability)","Searching","Greedy algorithms (activity selection, Huffman, MST — Kruskal/Prim)","Dynamic Programming (knapsack, LCS, matrix chain, edit distance)","Graph algorithms (BFS/DFS, shortest path — Dijkstra/Bellman-Ford/Floyd-Warshall, topological sort)","Divide & conquer","NP-completeness basics"],
  studyOrder: ["Complexity analysis & recurrences (Week 1)","Sorting & searching (Week 1-2)","Divide & conquer (Week 2)","Greedy algorithms (Week 2-3)","Graph algorithms (Week 3-4)","Dynamic Programming (Week 4-5)","NP-completeness basics (Week 5)","Full PYQ sweep (Week 5-6)"],
  commonMistakes: ["Memorizing DP solutions instead of practicing the recurrence-formulation process from scratch", "Confusing when greedy works vs when DP is required (a classic conceptual trap)", "Not memorizing Master theorem cases cold — this costs easy marks under time pressure"],
  formulaSheet: ["Master theorem: T(n) = aT(n/b) + f(n) — compare f(n) to n^(log_b a)","Dijkstra: O((V+E) log V) with a binary heap","Floyd-Warshall: O(V³), handles negative edges (no negative cycles)","Merge sort/Heap sort: O(n log n) worst-case guaranteed; Quicksort: O(n log n) avg, O(n²) worst"],
  shortNotes: ["Greedy works when the problem has 'optimal substructure' AND the 'greedy choice property' — if greedy choice property fails, default to DP.", "Bellman-Ford handles negative weights (not negative cycles); Dijkstra cannot handle negative weights at all."],
  memoryTricks: ["'MST = Kruskal sorts edges, Prim grows a tree' — a one-line differentiator.", "For Master theorem, remember it as 'who wins: the recursive work or the combine work?'"],
  pyqTrend: "Complexity/recurrence analysis, DP (knapsack/LCS variants), and shortest-path graph algorithms are the most consistent high-frequency categories.",
  importantPYQs: ["GATE PYQs — Recurrence relation & Master theorem application","GATE PYQs — 0/1 Knapsack & LCS variants","GATE PYQs — Dijkstra/Bellman-Ford trace questions","GATE PYQs — MST (Kruskal/Prim) construction"],
  youtube: [{title:"MIT OCW — Introduction to Algorithms",url:"https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/"},{title:"CP-Algorithms reference",url:"https://cp-algorithms.com/"}],
  notes: [{title:"GeeksforGeeks — Algorithms",url:"https://www.geeksforgeeks.org/fundamentals-of-algorithms/"}],
  books: ["CLRS — Introduction to Algorithms (reference chapters as needed)"],
  practiceLinks: [{title:"VisuAlgo — algorithm visualizations",url:"https://visualgo.net/en"}],
  estimatedHours: 75,
  checklist: ["Asymptotic notation & recurrences","Master theorem practice","Sorting algorithms (all + stability)","Searching algorithms","Divide & conquer","Greedy algorithms","Dynamic Programming patterns","Graph traversal (BFS/DFS)","Shortest path algorithms","MST algorithms","NP-completeness basics","Algorithms PYQ sweep"],
},

"sub-dbms": {
  name: "DBMS", weightage: "~8-10 marks", difficulty: "Low-Medium (strong overlap with your SQL/backend experience)",
  prerequisites: "None heavy — your SQL and ASP.NET backend experience gives real head start here.",
  intro: "Your professional SQL and backend experience is directly transferable — this module mostly formalizes what you already do intuitively into GATE's academic framing (ER diagrams, normalization proofs, relational algebra).",
  importance: "A comparatively 'easy A' subject given your background — prioritize converting practical SQL intuition into exam-pattern fluency (normalization theory, relational algebra syntax, transaction/concurrency theory).",
  syllabus: ["ER model & ER-to-relational mapping","Relational model, keys, constraints","Relational algebra & calculus","SQL (queries, joins, aggregation, nested queries) — largely a formalization of what you already know","Normalization (1NF-BCNF, functional dependencies, decomposition)","Transactions, ACID properties, concurrency control (locking, timestamp ordering)","Indexing (B/B+ trees), file organization"],
  studyOrder: ["ER modeling & relational model (Week 1)","Relational algebra/calculus (Week 1-2)","Normalization & functional dependencies (Week 2-3)","Transactions & concurrency control (Week 3)","Indexing & file organization (Week 3-4)","PYQ sweep (Week 4)"],
  commonMistakes: ["Assuming SQL fluency covers relational algebra syntax — GATE tests the formal notation directly, practice it explicitly", "Weak grasp of functional dependency closure computation and lossless-join decomposition proofs", "Not distinguishing conflict-serializability from view-serializability precisely"],
  formulaSheet: ["BCNF: for every non-trivial FD X→Y, X must be a superkey","3NF: X→Y trivial, OR X is a superkey, OR Y−X is part of some candidate key","B+ tree order n: max n−1 keys per node, min ⌈n/2⌉−1 (non-root)"],
  shortNotes: ["A decomposition is lossless-join if the common attribute is a superkey of at least one of the two resulting relations.", "Two schedules are conflict-equivalent if one can be transformed into the other by swapping non-conflicting operations."],
  memoryTricks: ["ACID = Atomicity, Consistency, Isolation, Durability — 'a transaction is like a promise: all-or-nothing, always valid, private until done, permanent once done.'", "Remember normalization order: 1NF (atomic values) → 2NF (no partial dependency) → 3NF (no transitive dependency) → BCNF (every determinant is a key)."],
  pyqTrend: "Functional dependency closure/normalization and relational algebra query-writing are the most consistent high-frequency categories; transaction serializability appears steadily too.",
  importantPYQs: ["GATE PYQs — FD closure & candidate key computation","GATE PYQs — Normal form identification given a set of FDs","GATE PYQs — Relational algebra expression evaluation","GATE PYQs — Schedule serializability (conflict/view)"],
  youtube: [{title:"NPTEL — Database Management System",url:"https://nptel.ac.in/courses/106105175"}],
  notes: [{title:"GeeksforGeeks — DBMS",url:"https://www.geeksforgeeks.org/dbms/"}],
  books: ["Silberschatz, Korth, Sudarshan — Database System Concepts (reference chapters)"],
  practiceLinks: [{title:"GeeksforGeeks DBMS practice",url:"https://www.geeksforgeeks.org/dbms/"}],
  estimatedHours: 45,
  checklist: ["ER model & mapping to relations","Keys & constraints","Relational algebra & calculus","SQL query practice (formal syntax)","Functional dependencies & closures","Normalization 1NF-BCNF","Transactions & ACID","Concurrency control & serializability","Indexing (B/B+ trees)","DBMS PYQ sweep"],
},

"sub-os": {
  name: "Operating Systems", weightage: "~10-12 marks", difficulty: "Medium",
  prerequisites: "Programming basics, basic understanding of processes (helpful from backend/deployment experience).",
  intro: "OS concepts (processes, memory, concurrency) appear constantly in backend engineering — this module formalizes practical intuition (e.g. deadlocks, scheduling) you've likely brushed against in production systems.",
  importance: "Consistently high-weightage with very learnable numerical patterns (scheduling, page replacement, disk scheduling) that reward direct practice.",
  syllabus: ["Process concept, process states, PCB","CPU scheduling (FCFS, SJF, Round Robin, Priority, multilevel queues)","Process synchronization (critical section, semaphores, monitors, classic problems)","Deadlocks (conditions, prevention, avoidance — Banker's algorithm, detection)","Memory management (paging, segmentation, page replacement — FIFO/LRU/Optimal)","Virtual memory, thrashing","File systems & disk scheduling (FCFS, SSTF, SCAN, C-SCAN)"],
  studyOrder: ["Process concept & states (Week 1)","CPU scheduling algorithms (Week 1-2)","Synchronization & classic problems (Week 2-3)","Deadlocks (Week 3)","Memory management & paging (Week 3-4)","Page replacement & virtual memory (Week 4)","Disk scheduling & file systems (Week 4-5)","PYQ sweep (Week 5)"],
  commonMistakes: ["Memorizing scheduling algorithm definitions without practicing Gantt-chart numericals under time pressure", "Confusing deadlock prevention vs avoidance vs detection strategies", "Not practicing page-replacement trace tables (FIFO/LRU/Optimal) by hand"],
  formulaSheet: ["Average waiting time = Σ(waiting times) / n ; Average turnaround time = Σ(completion − arrival) / n","Belady's anomaly: FIFO can have MORE page faults with MORE frames (a named exception to test)","SSTF/SCAN disk scheduling: total head movement = sum of absolute differences along the serviced order"],
  shortNotes: ["Round Robin's performance is highly time-quantum dependent — too small increases context-switch overhead, too large approaches FCFS.", "Banker's algorithm is for deadlock avoidance (needs max-need matrix in advance), not detection (which works from the actual current allocation graph)."],
  memoryTricks: ["Remember producer-consumer/readers-writers/dining-philosophers as 'the synchronization hall of fame' — always know which primitive (semaphore/monitor) solves which.", "Disk scheduling = 'the elevator problem' for SCAN/C-SCAN — visualize it as an elevator that doesn't reverse until it hits the end."],
  pyqTrend: "CPU scheduling numericals and page-replacement trace questions are extremely consistent; synchronization (semaphore code correctness) and deadlock detection also appear steadily.",
  importantPYQs: ["GATE PYQs — Gantt chart scheduling (Round Robin/SJF/Priority) numericals","GATE PYQs — Page replacement trace (FIFO/LRU/Optimal) fault counting","GATE PYQs — Semaphore-based synchronization code correctness","GATE PYQs — Banker's algorithm safe-sequence questions"],
  youtube: [{title:"NPTEL — Operating System Fundamentals",url:"https://nptel.ac.in/courses/106105214"}],
  notes: [{title:"GeeksforGeeks — Operating Systems",url:"https://www.geeksforgeeks.org/operating-systems/"}],
  books: ["Galvin, Gagne, Silberschatz — Operating System Concepts (reference chapters)"],
  practiceLinks: [{title:"GeeksforGeeks OS practice",url:"https://www.geeksforgeeks.org/operating-systems/"}],
  estimatedHours: 60,
  checklist: ["Process concept & PCB","CPU scheduling algorithms + numericals","Synchronization & critical section","Semaphores & classic sync problems","Deadlock conditions & prevention","Banker's algorithm (avoidance)","Deadlock detection","Paging & segmentation","Page replacement algorithms","Virtual memory & thrashing","Disk scheduling algorithms","File systems basics","OS PYQ sweep"],
},

"sub-cn": {
  name: "Computer Networks", weightage: "~8-10 marks", difficulty: "Medium (light overlap with REST API/backend networking)",
  prerequisites: "Basic familiarity with HTTP/REST is a helpful mental anchor for the application layer topics.",
  intro: "Your REST API and backend experience gives you real intuition for the Application layer — this module builds the lower layers (Data Link, Network, Transport theory) systematically underneath that.",
  importance: "Steady weightage with several very numerical, practice-friendly topics (subnetting, sliding window, routing).",
  syllabus: ["OSI & TCP/IP reference models","Data link layer: framing, error detection (CRC, checksum), flow control (sliding window)","Medium access control: CSMA/CD, CSMA/CA","Network layer: IP addressing, subnetting, routing algorithms (distance vector, link state)","Transport layer: TCP vs UDP, TCP flow/congestion control, three-way handshake","Application layer: DNS, HTTP, email protocols","Network security basics"],
  studyOrder: ["OSI/TCP-IP models (Week 1)","Data link layer & error detection (Week 1-2)","MAC protocols (Week 2)","Network layer & subnetting (Week 2-3)","Routing algorithms (Week 3)","Transport layer & TCP (Week 3-4)","Application layer (Week 4)","PYQ sweep (Week 4-5)"],
  commonMistakes: ["Weak subnetting arithmetic speed — this needs drilled numerical practice, not just conceptual understanding", "Confusing TCP congestion control phases (slow start vs congestion avoidance vs fast recovery)", "Not practicing CRC/checksum calculation by hand"],
  formulaSheet: ["Subnetting: number of usable hosts = 2^(32−prefix) − 2","Sliding window: max throughput utilization = (window size × frame time) vs (frame time + 2×propagation delay)","TCP slow start: cwnd doubles each RTT until ssthresh, then grows linearly (congestion avoidance)"],
  shortNotes: ["Distance vector routing (e.g. RIP) suffers from count-to-infinity; link state routing (e.g. OSPF) converges faster with full topology knowledge.", "CSMA/CD is for wired shared media (detects collision after the fact); CSMA/CA is for wireless (avoids collision proactively since collision detection isn't reliable there)."],
  memoryTricks: ["OSI 7 layers mnemonic: 'All People Seem To Need Data Processing' (Physical, Data Link, Network, Transport, Session, Presentation, Application).", "TCP = reliable, connection-oriented, ordered ('Truck delivery with tracking'); UDP = fast, connectionless ('Postcard — no guarantee, no delay')."],
  pyqTrend: "Subnetting/IP addressing numericals and TCP flow/congestion control questions are the most consistent; routing algorithm trace questions and sliding window numericals appear steadily too.",
  importantPYQs: ["GATE PYQs — Subnetting & number of subnets/hosts numericals","GATE PYQs — Sliding window protocol efficiency calculations","GATE PYQs — TCP three-way handshake & congestion control phase questions","GATE PYQs — Distance vector / link state routing table trace"],
  youtube: [{title:"NPTEL — Computer Networks",url:"https://nptel.ac.in/courses/106105183"}],
  notes: [{title:"GeeksforGeeks — Computer Networks",url:"https://www.geeksforgeeks.org/computer-network-tutorials/"}],
  books: ["Forouzan — Data Communications and Networking (reference chapters)"],
  practiceLinks: [{title:"GeeksforGeeks CN practice",url:"https://www.geeksforgeeks.org/computer-network-tutorials/"}],
  estimatedHours: 55,
  checklist: ["OSI & TCP/IP models","Framing & error detection (CRC/checksum)","Sliding window flow control","CSMA/CD & CSMA/CA","IP addressing & subnetting numericals","Routing algorithms (DV & LS)","TCP vs UDP","TCP handshake & congestion control","Application layer protocols (DNS/HTTP)","CN PYQ sweep"],
},

"sub-coa": {
  name: "Computer Organization & Architecture (COA)", weightage: "~10-12 marks", difficulty: "Medium (excellent marks-per-hour)",
  prerequisites: "Digital Logic basics (recommend studying alongside or just before).",
  intro: "COA has a compact, self-contained syllabus with very consistent GATE question patterns — one of the best return-on-study-hours subjects available.",
  importance: "High weightage with numerical, formula-driven questions (pipelining, cache, memory hierarchy) that are extremely practice-friendly.",
  syllabus: ["Machine instructions & addressing modes","ALU, data path, control unit (hardwired & microprogrammed)","Instruction pipelining, hazards (structural, data, control) & hazard resolution","Memory hierarchy: cache (mapping, replacement, write policies), main memory, secondary storage","I/O interfacing (interrupt-driven, DMA)"],
  studyOrder: ["Machine instructions & addressing modes (Week 1)","Data path & control unit (Week 1-2)","Pipelining & hazards (Week 2-3)","Cache memory (Week 3-4)","Memory hierarchy & I/O (Week 4)","PYQ sweep (Week 4-5)"],
  commonMistakes: ["Not practicing pipeline speedup/CPI numericals with hazards included", "Weak cache mapping numericals (direct/associative/set-associative hit-rate calculations)", "Confusing write-through vs write-back cache policies under exam pressure"],
  formulaSheet: ["Speedup (ideal pipelining) = number of stages (k) for large instruction counts; actual speedup = (k × n) / (k + n − 1)","Average memory access time = Hit time + Miss rate × Miss penalty","Cache: number of sets = Cache size / (block size × associativity)"],
  shortNotes: ["Data hazards are resolved via forwarding/bypassing or stalling; control hazards via branch prediction or pipeline flush.", "Write-back writes to main memory only on eviction (faster, needs a dirty bit); write-through writes immediately (simpler, more memory traffic)."],
  memoryTricks: ["Remember hazard types via 'S-D-C': Structural (resource clash), Data (dependency), Control (branch uncertainty).", "For addressing modes, always ask 'where does the CPU look next — a register, memory, or the instruction itself?'"],
  pyqTrend: "Pipeline hazard/speedup numericals and cache hit-rate/access-time numericals are the most consistent categories; microprogrammed control and addressing mode questions appear steadily.",
  importantPYQs: ["GATE PYQs — Pipeline speedup & CPI with hazard numericals","GATE PYQs — Cache mapping & average access time calculations","GATE PYQs — Addressing mode identification from instruction encoding"],
  youtube: [{title:"NPTEL — Computer Organization & Architecture",url:"https://nptel.ac.in/courses/106103068"}],
  notes: [{title:"GeeksforGeeks — Computer Organization",url:"https://www.geeksforgeeks.org/computer-organization-and-architecture-tutorials/"}],
  books: ["Hennessy & Patterson / Morris Mano — Computer Organization (reference chapters)"],
  practiceLinks: [{title:"GeeksforGeeks COA practice",url:"https://www.geeksforgeeks.org/computer-organization-and-architecture-tutorials/"}],
  estimatedHours: 50,
  checklist: ["Machine instructions & addressing modes","Data path & ALU basics","Hardwired vs microprogrammed control","Instruction pipelining","Pipeline hazards & resolution","Cache mapping techniques","Cache numericals (hit rate, AMAT)","Memory hierarchy","I/O interfacing (interrupt/DMA)","COA PYQ sweep"],
},

"sub-dl": {
  name: "Digital Logic", weightage: "~8-10 marks", difficulty: "Low-Medium (great early-confidence subject)",
  prerequisites: "None — a great subject to start your prep with.",
  intro: "Digital Logic is compact, procedural, and has very little conceptual ambiguity — an excellent early-week confidence builder.",
  importance: "Highly consistent question patterns (K-maps, number systems, sequential circuits) with strong marks-per-hour ROI.",
  syllabus: ["Number systems & codes (binary, octal, hex, BCD, Gray code, 1's/2's complement)","Boolean algebra & minimization (K-maps, Quine-McCluskey)","Combinational circuits (adders, multiplexers, decoders, encoders)","Sequential circuits (latches, flip-flops, counters, shift registers, FSM design)","Number representation & arithmetic (fixed/floating point, IEEE-754)"],
  studyOrder: ["Number systems & codes (Week 1)","Boolean algebra & K-maps (Week 1-2)","Combinational circuits (Week 2)","Sequential circuits & flip-flops (Week 2-3)","Counters, FSM, floating point (Week 3)","PYQ sweep (Week 3-4)"],
  commonMistakes: ["Slow/error-prone manual K-map grouping — needs timed drilling, not just understanding", "Confusing Mealy vs Moore machine output timing", "Weak IEEE-754 floating point representation numericals"],
  formulaSheet: ["2's complement of N-bit number: invert bits, add 1","IEEE-754 single precision: 1 sign + 8 exponent (bias 127) + 23 mantissa bits","Number of flip-flops for mod-N counter: ⌈log₂ N⌉"],
  shortNotes: ["Moore machine output depends only on current state; Mealy machine output depends on current state AND input — Mealy can react one cycle faster.", "A K-map essential prime implicant covers at least one minterm not covered by any other prime implicant — always mark these first."],
  memoryTricks: ["'Moore = More delay, output only from state.' Mnemonic to distinguish Mealy/Moore quickly under pressure.", "For 2's complement subtraction, remember: 'A − B = A + (2's complement of B), discard final carry.'"],
  pyqTrend: "K-map minimization and number system/representation numericals are extremely consistent; sequential circuit (flip-flop excitation table, counter design) questions appear steadily.",
  importantPYQs: ["GATE PYQs — K-map simplification to minimal SOP/POS","GATE PYQs — 2's complement arithmetic & overflow detection","GATE PYQs — Flip-flop excitation table & counter design","GATE PYQs — IEEE-754 floating point representation numericals"],
  youtube: [{title:"NPTEL — Digital Logic Design",url:"https://nptel.ac.in/courses/117106114"}],
  notes: [{title:"GeeksforGeeks — Digital Logic",url:"https://www.geeksforgeeks.org/digital-electronics-logic-design-tutorials/"}],
  books: ["Morris Mano — Digital Design (reference chapters)"],
  practiceLinks: [{title:"GeeksforGeeks Digital Logic practice",url:"https://www.geeksforgeeks.org/digital-electronics-logic-design-tutorials/"}],
  estimatedHours: 45,
  checklist: ["Number systems & codes","1's/2's complement arithmetic","Boolean algebra basics","K-map minimization","Quine-McCluskey method","Combinational circuits (adders, MUX, decoders)","Latches & flip-flops","Counters & shift registers","FSM design (Mealy/Moore)","IEEE-754 floating point","Digital Logic PYQ sweep"],
},

"sub-toc": {
  name: "Theory of Computation (TOC)", weightage: "~8-10 marks", difficulty: "Medium-High (most conceptually unfamiliar for a backend engineer)",
  prerequisites: "Discrete Mathematics (Set theory, basic proofs) helps significantly.",
  intro: "TOC is the most abstract subject relative to daily backend/AI work — treat it as a fresh academic subject and lean heavily on visual automaton diagrams rather than pure symbolic manipulation.",
  importance: "Compact syllabus, consistent question style (construct/identify automata, prove regularity/non-regularity) once the core mental models click.",
  syllabus: ["Regular languages & finite automata (DFA, NFA, NFA-to-DFA conversion)","Regular expressions & regular grammars","Pumping lemma for regular languages","Context-free languages & grammars (CFG, ambiguity, CNF)","Pushdown automata (PDA)","Turing machines & decidability","Recursively enumerable & recursive languages, halting problem"],
  studyOrder: ["Finite automata (DFA/NFA) & conversions (Week 1-2)","Regular expressions & grammars (Week 2)","Pumping lemma (Week 2-3)","CFGs & CNF (Week 3)","Pushdown automata (Week 3-4)","Turing machines & decidability (Week 4-5)","PYQ sweep (Week 5)"],
  commonMistakes: ["Trying to memorize automaton diagrams instead of practicing constructing them from scratch for new languages", "Weak pumping lemma proof structure — practice the standard proof template repeatedly", "Confusing decidable vs recognizable (recursively enumerable) language classes"],
  formulaSheet: ["NFA with n states → equivalent DFA has at most 2ⁿ states (subset construction)","Chomsky hierarchy: Regular ⊂ Context-Free ⊂ Context-Sensitive ⊂ Recursively Enumerable","A language is regular iff some DFA/NFA accepts it iff some regular expression generates it"],
  shortNotes: ["Use the pumping lemma to prove a language is NOT regular (proof by contradiction) — it can never prove a language IS regular.", "Every context-free language can be generated by a grammar in Chomsky Normal Form (CNF): productions of form A→BC or A→a."],
  memoryTricks: ["Chomsky hierarchy mnemonic: 'Really Cool Cats Rule' for Regular ⊂ Context-Free ⊂ Context-Sensitive ⊂ Recursively-enumerable (increasing power).", "PDA = 'finite automaton + a stack memory' — one added feature over DFA/NFA, which is why it recognizes exactly context-free languages."],
  pyqTrend: "DFA/NFA construction and minimization, pumping lemma application, and CFG-to-CNF/ambiguity questions are the most consistent; decidability (halting-problem-style) questions appear steadily as conceptual MCQs.",
  importantPYQs: ["GATE PYQs — DFA/NFA construction for a given language","GATE PYQs — Pumping lemma proof of non-regularity","GATE PYQs — CFG ambiguity & CNF conversion","GATE PYQs — Decidability/undecidability conceptual MCQs"],
  youtube: [{title:"NPTEL — Theory of Computation",url:"https://nptel.ac.in/courses/106104148"}],
  notes: [{title:"GeeksforGeeks — Theory of Computation",url:"https://www.geeksforgeeks.org/theory-of-computation-automata-tutorials/"}],
  books: ["Hopcroft, Ullman, Motwani — Introduction to Automata Theory, Languages and Computation (reference chapters)"],
  practiceLinks: [{title:"GeeksforGeeks TOC practice",url:"https://www.geeksforgeeks.org/theory-of-computation-automata-tutorials/"}],
  estimatedHours: 55,
  checklist: ["DFA construction & minimization","NFA & NFA-to-DFA conversion","Regular expressions & regular grammars","Pumping lemma (regular languages)","Context-free grammars & ambiguity","Chomsky Normal Form conversion","Pushdown automata","Turing machine basics","Decidability & halting problem","TOC PYQ sweep"],
},

"sub-compiler": {
  name: "Compiler Design", weightage: "~4-6 marks (compact)", difficulty: "Medium",
  prerequisites: "Theory of Computation (grammars), basic programming.",
  intro: "Compiler Design has a smaller weightage but a very compact, learnable syllabus — good for a late-stage high-efficiency revision push.",
  importance: "Lower weightage than most subjects, but the syllabus is small enough that even 15-20 focused hours yields most of the available marks.",
  syllabus: ["Compiler phases overview (lexical, syntax, semantic analysis, code generation, optimization)","Lexical analysis (tokens, regular expressions, finite automata link)","Parsing: top-down (recursive descent, LL(1)) and bottom-up (LR(0), SLR, LALR)","Syntax-directed translation, intermediate code (three-address code)","Basic code optimization techniques"],
  studyOrder: ["Compiler phases overview (Week 1)","Lexical analysis (Week 1)","Top-down parsing & LL(1) (Week 1-2)","Bottom-up parsing (LR/SLR/LALR) (Week 2)","Syntax-directed translation & intermediate code (Week 2)","PYQ sweep (Week 2-3)"],
  commonMistakes: ["Not practicing FIRST/FOLLOW set computation until it's fast and error-free", "Confusing LL(1) vs SLR(1) parsing table construction steps", "Skipping this subject entirely due to low weightage — it's high ROI precisely because it's small"],
  formulaSheet: ["FIRST(α): first terminal that can begin a string derived from α","FOLLOW(A): terminals that can immediately follow A in some derivation","A grammar is LL(1) if FIRST/FOLLOW sets of alternative productions for any non-terminal don't overlap (roughly)"],
  shortNotes: ["LL(1) parsers are top-down and read input Left-to-right building a Leftmost derivation with 1 lookahead token; LR parsers are bottom-up building a Rightmost derivation in reverse.", "LALR(1) has the same table size as SLR(1) but the power of a (merged) canonical LR(1) parser — the practical standard used by real parser generators."],
  memoryTricks: ["'LL = Left-to-right, Leftmost derivation' vs 'LR = Left-to-right, Rightmost derivation (in reverse)' — say it out loud once to lock it in.", "Compiler phase order mnemonic: 'Lex Parses Semantics, Then Codes & Optimizes' (Lexical, Syntax/Parsing, Semantic, Intermediate Code, Optimization, Code generation)."],
  pyqTrend: "FIRST/FOLLOW set computation and LL(1)/LR parsing table construction are the most consistent categories; three-address code generation appears steadily as a smaller-weight topic.",
  importantPYQs: ["GATE PYQs — FIRST/FOLLOW set computation for a given grammar","GATE PYQs — LL(1) parsing table construction & conflict identification","GATE PYQs — SLR/LALR parsing action-goto table construction"],
  youtube: [{title:"NPTEL — Compiler Design",url:"https://nptel.ac.in/courses/106108113"}],
  notes: [{title:"GeeksforGeeks — Compiler Design",url:"https://www.geeksforgeeks.org/compiler-design-tutorials/"}],
  books: ["Aho, Sethi, Ullman ('Dragon Book') — Compilers: Principles, Techniques and Tools (reference chapters)"],
  practiceLinks: [{title:"GeeksforGeeks Compiler Design practice",url:"https://www.geeksforgeeks.org/compiler-design-tutorials/"}],
  estimatedHours: 25,
  checklist: ["Compiler phases overview","Lexical analysis & tokens","FIRST & FOLLOW sets","Top-down parsing & LL(1)","Bottom-up parsing (LR/SLR/LALR)","Syntax-directed translation","Three-address code","Basic code optimization","Compiler Design PYQ sweep"],
},

};

/* -------------------------------------------------------------------------
   MONTH / WEEK ROADMAP (assuming an 8-month plan, adaptable)
   ------------------------------------------------------------------------- */
DATA.roadmap = {
  months: [
    { m: "Month 1", focus: "Foundation", detail: "Digital Logic + Programming/C basics + Discrete Math (Set theory, Propositional logic) started in parallel. Build the daily/weekend routine habit before intensity increases." },
    { m: "Month 2", focus: "Core Build 1", detail: "Data Structures fully, Discrete Math (Graph theory, Combinatorics) continued, General Aptitude daily 20-min practice begins." },
    { m: "Month 3", focus: "Core Build 2", detail: "Algorithms (Complexity, Sorting, Divide & Conquer, Greedy) + Linear Algebra + first topic-wise PYQ sets for completed subjects." },
    { m: "Month 4", focus: "Core Build 3", detail: "Algorithms (DP, Graph algorithms) completed. COA started. Calculus + Probability & Statistics." },
    { m: "Month 5", focus: "Systems Subjects", detail: "Operating Systems fully + Computer Networks started. Continue PYQ practice for every completed subject." },
    { m: "Month 6", focus: "Systems + Theory", detail: "Computer Networks completed. DBMS (fast, given your background). Theory of Computation started." },
    { m: "Month 7", focus: "Theory + Compact Subjects", detail: "TOC completed. Compiler Design (compact). Begin full-length mocks (1/week). First full revision cycle of all subjects." },
    { m: "Month 8", focus: "Mocks + Revision", detail: "2-3 full mocks/week, error notebook review, second full revision cycle, weak-topic deep dives only." },
    { m: "Final 30 Days", focus: "Peak Mocks", detail: "Daily timed sectional practice + mocks every 2-3 days. Formula sheets reviewed daily. No new topics." },
    { m: "Final 15 Days", focus: "Consolidation", detail: "Only revision + PYQs + short notes. 1 mock every 3 days max (avoid burnout). Sleep schedule normalized to match exam-day timing." },
    { m: "Final 7 Days", focus: "Taper & Calm", detail: "Light revision only, formula sheets, 1 short mock mid-week, full rest the last 1-2 days before the exam. No new content." },
  ],
  weekly: "Weekday (Mon-Fri): 1 focused 2-3 hr session — 60% new content / 40% practice. Weekend (Sat-Sun): 5-7 hrs each — one long deep-work block for hardest topic + one PYQ/mock block + one light revision block.",
  daily: "Suggested weekday split (2.5 hrs): 15 min warm-up revision of yesterday's topic → 90 min new content (Pomodoro: 25 min work / 5 min break ×3) → 30 min PYQ practice on that topic → 15 min log progress in dashboard.",
  weekend: "Suggested weekend split (6 hrs): 2.5 hrs deep-work new content (hardest pending subject) → 1 hr Aptitude + Mathematics practice → 1.5 hrs PYQ/mock → 1 hr revision of an older subject's short notes.",
  examDay: [
    "Sleep 7+ hours the night before; avoid any new topic the morning of the exam.",
    "Reach the centre at least 45-60 minutes early; carry admit card + valid photo ID.",
    "First 20-25 minutes: attempt General Aptitude + easy 1-mark questions across subjects to bank quick, safe marks.",
    "Move subject-by-subject in your strongest-to-weakest order; flag (don't skip) hard questions for a final sweep.",
    "Attempt every MSQ and NAT question (zero negative marking) — never leave these blank.",
    "Only attempt an MCQ if you can eliminate at least 2 of the 4 options; otherwise flag and move on.",
    "Reserve the last 10-15 minutes purely for review of flagged/marked questions, not new ones.",
  ],
};

DATA.revisionStrategy = {
  intro: "Revision is where marks are actually locked in — first-pass learning alone rarely survives to exam day without structured repetition.",
  cycle: ["Pass 1 (Day 0): Full theory + your own short notes while learning the topic.", "Pass 2 (Day 3): Re-read only your short notes + solve 5-10 mixed PYQs.", "Pass 3 (Day 10): Formula sheet + timed PYQ set only, no theory re-reading.", "Pass 4 (Day 30): Formula sheet + one mini-mock on that subject alone.", "Pass 5 (Final 30 days): Formula sheets across ALL subjects, rotated daily."],
  tips: ["Each revision pass should take noticeably less time than the last — if it doesn't, that topic needs a deeper Pass 1 redo, not more repetition.", "Keep a single master 'formula & short-notes' document per subject — this becomes your only material in the final 30 days.", "Revise weak topics more frequently than strong ones — don't apply the same cycle uniformly."],
};

DATA.pyqStrategy = {
  intro: "Previous Year Questions (PYQs) are the closest thing to a syllabus of what GATE actually rewards — theory alone, without PYQ calibration, consistently underperforms.",
  points: [
    "Solve topic-wise PYQs immediately after finishing that topic's theory (not after the whole subject).",
    "Prioritize the last 10-12 years first; expand further back only for subjects where you still feel shaky.",
    "For every PYQ you get wrong, write down WHY in one line: concept gap / silly error / time pressure / unfamiliar pattern.",
    "Re-attempt previously wrong PYQs after 2 weeks — if you get them wrong again, that topic needs a full re-study, not just re-reading the solution.",
    "Track difficulty trend: harder-tending years should be attempted only after you're comfortable with moderate-difficulty years for that subject.",
  ],
  distribution: "Historically, Algorithms, OS, DBMS, COA, and Digital Logic together contribute the bulk of core-subject PYQ volume, with Mathematics and Aptitude contributing a smaller but very consistent, high-repetition set.",
};

DATA.mockStrategy = {
  intro: "Mocks convert theoretical knowledge into exam-day performance under real constraints: 3 hours, negative marking, and fatigue.",
  when: "Begin subject-wise mocks as soon as each subject is done. Begin full-length 3-hour mocks around 10-12 weeks before the exam (roughly once 60-70% of syllabus is covered).",
  count: "Target 15-20 full-length mocks in the final 3 months: about 1/week initially, rising to 2-3/week in the final month.",
  analysis: ["Categorize every miss: concept gap / silly error / time pressure / unfamiliar pattern.", "Maintain a single running error notebook across ALL mocks, not a fresh one each time.", "Re-solve every wrong question after 1 week without looking at the solution first.", "Track accuracy AND speed separately — a correct answer that took too long is still a problem to fix."],
  negativeMarking: "MCQs only: eliminate at least 2 of 4 options before attempting, else skip. MSQ/NAT: always attempt (zero penalty).",
  timeAllocation: "Roughly: 20-25 min Aptitude/easy 1-markers first, then strongest-to-weakest subject order, with the last 10-15 min reserved purely for flagged-question review.",
};

/* -------------------------------------------------------------------------
   STATIC KNOWLEDGE PAGES (Mission Brief group)
   ------------------------------------------------------------------------- */
DATA.pages = {

"intro": {
  title: "Welcome to Mission Control",
  body: `
  <p class="lead">This is a personal, offline mentor built for one specific mission: taking a working software engineer from an unfocused 19-mark attempt to a disciplined 70+ mark performance in the next GATE CS exam.</p>
  <div class="callout">
    <strong>Your starting point:</strong> 2+ years as a Software Engineer (Python, C#, SQL, ASP.NET, REST APIs, backend, AI/automation), one previous GATE CS attempt (19 marks, not seriously prepared), strong 10th/12th/B.Tech math foundation that needs reactivation, and roughly 20-24 study hours/week available.
  </div>
  <h3>How this portal is organized</h3>
  <ul>
    <li><strong>Mission Brief</strong> — everything about how GATE actually works: pattern, marking, scoring, eligibility, and what a given score gets you.</li>
    <li><strong>Strategy</strong> — the month-by-month, week-by-week, and exam-day plan.</li>
    <li><strong>Subject Roadmap</strong> — all 12 subjects, each with syllabus, formula sheets, PYQ trends, free resources, and a personal checklist.</li>
    <li><strong>Resources & Tools</strong> — a curated free-resource hub, 80+ FAQ answers, a motivation module for working professionals, and your live Progress Dashboard.</li>
  </ul>
  <h3>How to use it day to day</h3>
  <p>Open a subject page, work through its checklist top to bottom, tick items off as you master them, log your study hours, and check the Dashboard weekly to see overall trajectory. Everything is saved locally in your browser — nothing leaves your machine.</p>
  `},

"about-gate": {
  title: "About GATE",
  body: `
  <p class="lead">GATE (Graduate Aptitude Test in Engineering) is a national-level exam, jointly conducted by the IITs and IISc on behalf of the National Coordination Board, that tests comprehensive understanding of undergraduate-level engineering/science subjects.</p>
  <h3>Why should a software engineer give GATE?</h3>
  <ul>
    <li><strong>PSU recruitment:</strong> Many Public Sector Undertakings (ONGC, BHEL, NTPC, IOCL, GAIL, NHPC and others) hire directly through GATE scores, often skipping their own separate written exam.</li>
    <li><strong>M.Tech admission:</strong> Access to M.Tech programs at IITs/NITs/IIITs, often with a stipend (typically funded via MHRD/AICTE for GATE-qualified candidates).</li>
    <li><strong>Career reset / specialization:</strong> A structured way to deepen core CS fundamentals that day-to-day backend/API work doesn't always exercise (algorithms, OS internals, networks theory).</li>
    <li><strong>PhD & research pathways:</strong> A strong GATE score/rank strengthens applications to research programs at IITs and IISc.</li>
  </ul>
  <h3>Benefits beyond the score itself</h3>
  <p>The preparation itself sharpens problem-solving speed, deepens system-level understanding (useful even for senior backend/architecture roles), and is respected by many employers as a marker of strong fundamentals.</p>
  <h3>Common myths</h3>
  <ul>
    <li>"Only full-time students can crack it" — false; many working professionals qualify every year with a disciplined evening/weekend routine.</li>
    <li>"You need paid coaching" — false; NPTEL, GeeksforGeeks, GateOverflow and similar free resources are sufficient for the vast majority of aspirants.</li>
    <li>"One bad attempt means you're not capable" — false; an unfocused, unstructured first attempt (like a 19-mark attempt with random guessing) predicts almost nothing about a serious, structured second attempt.</li>
  </ul>
  `},

"exam-pattern": {
  title: "Exam Pattern",
  body: `
  <p class="lead">GATE CS is a 3-hour Computer Based Test (CBT) worth 100 marks across 65 questions.</p>
  <table class="data-table">
    <thead><tr><th>Section</th><th>Approx. Marks</th><th>Notes</th></tr></thead>
    <tbody>
      <tr><td>General Aptitude</td><td>15</td><td>Common across all GATE papers</td></tr>
      <tr><td>Engineering Mathematics</td><td>~13</td><td>Discrete Math, Linear Algebra, Calculus, Probability & Stats</td></tr>
      <tr><td>Core CS/IT Subjects</td><td>~72</td><td>Programming, DS, Algorithms, OS, DBMS, CN, COA, Digital Logic, TOC, Compiler Design</td></tr>
    </tbody>
  </table>
  <h3>Question types</h3>
  <p>The paper mixes MCQ, MSQ and NAT questions (see the dedicated Question Types page), each worth 1 or 2 marks.</p>
  <h3>Mode</h3>
  <p>Fully computer-based — practicing on an on-screen mock interface (not paper) is important so the interaction pattern feels familiar on exam day.</p>
  <div class="callout warn">Exact section-wise marks distribution can shift slightly year to year — always cross-check the current year's official brochure on the official GATE website.</div>
  `},

"marking-scheme": {
  title: "Marking Scheme",
  body: `
  <p class="lead">GATE CS questions are worth either 1 or 2 marks each, and the marking scheme differs by question type.</p>
  <table class="data-table">
    <thead><tr><th>Question Type</th><th>Marks Awarded (Correct)</th><th>Negative Marking</th></tr></thead>
    <tbody>
      <tr><td>MCQ (1 mark)</td><td>+1</td><td>−1/3</td></tr>
      <tr><td>MCQ (2 marks)</td><td>+2</td><td>−2/3</td></tr>
      <tr><td>MSQ (1 or 2 marks)</td><td>+1 or +2</td><td>None</td></tr>
      <tr><td>NAT (1 or 2 marks)</td><td>+1 or +2</td><td>None</td></tr>
    </tbody>
  </table>
  <p>Total = 100 marks across General Aptitude + Engineering Mathematics + Core Subjects, in a 3-hour window.</p>
  `},

"negative-marking": {
  title: "Negative Marking",
  body: `
  <p class="lead">Negative marking exists only for MCQs — it is designed to discourage blind guessing, not to punish genuine attempts.</p>
  <ul>
    <li>1-mark MCQ wrong: −1/3 mark</li>
    <li>2-mark MCQ wrong: −2/3 mark</li>
    <li>MSQ and NAT: zero penalty regardless of correctness</li>
  </ul>
  <h3>Strategic implication</h3>
  <p>Expected value of guessing an MCQ blindly among 4 options: (1/4 × mark) − (3/4 × penalty) is negative for pure random guessing. Once you can eliminate at least 2 of 4 options, the expected value typically turns positive — this is the practical threshold to use during the exam.</p>
  <div class="callout">This is exactly the discipline that was missing in a rushed, "attempt everything randomly" first try — applying this single rule alone typically recovers meaningful marks.</div>
  `},

"question-types": {
  title: "Question Types",
  body: `
  <h3>MCQ — Multiple Choice Question</h3>
  <p>Exactly one correct option among four. Carries negative marking if wrong.</p>
  <h3>MSQ — Multiple Select Question</h3>
  <p>One, two, three, or all four options may be correct; you must select all correct options for credit. No negative marking, so always attempt if you have any partial elimination.</p>
  <h3>NAT — Numerical Answer Type</h3>
  <p>No options are given — you type a numeric value (integer or up to a specified decimal precision). No negative marking. These reward calculation accuracy and careful unit-handling.</p>
  <div class="callout">Since MSQ and NAT have zero penalty, never leave these blank — always give your best-reasoned attempt.</div>
  `},

"eligibility": {
  title: "Eligibility",
  body: `
  <ul>
    <li>Bachelor's degree holders (or final-year students) in Engineering/Technology/Architecture/relevant Bachelor's programs.</li>
    <li>Master's degree holders in a relevant Science/Mathematics/Statistics/Computer Applications subject are also eligible.</li>
    <li>No strict upper age limit.</li>
    <li>No limit on the number of attempts — you can appear as many times as you wish.</li>
  </ul>
  <div class="callout warn">Eligibility rules are set by the organizing institute each year — always verify against the current year's official brochure before applying.</div>
  `},

"score-vs-marks": {
  title: "Score vs Marks",
  body: `
  <p class="lead">Marks and Score are two different numbers on your scorecard, and they serve different purposes.</p>
  <h3>Marks</h3>
  <p>Your raw performance out of 100 on the specific question paper/shift you attempted.</p>
  <h3>Score</h3>
  <p>A normalized value (historically on a scale up to roughly 1000) computed from your marks using the mean and standard deviation of your specific shift, so that candidates across different shifts (which may have different difficulty levels) can be fairly compared.</p>
  <div class="callout">Score, not raw marks, is what's typically used for AIR computation and cutoff comparisons — this is why two candidates with the same raw marks in different shifts can end up with different scores.</div>
  `},

"rank-vs-marks": {
  title: "Rank vs Marks",
  body: `
  <p class="lead">All India Rank (AIR) is derived from your normalized Score, not directly from raw marks — which is why the same marks can correspond to slightly different ranks across years.</p>
  <p>Roughly speaking, higher marks push your score up, which pushes your rank down (better) — but the exact mapping shifts every year based on the total number of candidates, the paper's overall difficulty, and the score distribution of that year's cohort.</p>
  <div class="callout warn">Use the Marks Analysis table (Study Strategy / Dashboard area) only as a rough calibration tool, not a guarantee — always check the official GATE result statistics for the exact current-year mapping.</div>
  `},

"psu": {
  title: "PSU Opportunities",
  body: `
  <p class="lead">Several Public Sector Undertakings recruit CS/IT engineers directly through GATE scores, usually skipping their own separate written exam.</p>
  <ul>
    <li>Recruiting PSUs vary by year and vacancy — companies like ONGC, BHEL, NTPC, IOCL, GAIL, NHPC, NLC, and others have historically used GATE CS scores for recruitment in relevant roles.</li>
    <li>Each PSU sets its own cutoff (often varying significantly year to year) and typically follows GATE shortlisting with a Group Discussion and/or Personal Interview.</li>
    <li>PSU jobs generally offer strong pay scales, job security, and structured career growth compared to many private-sector roles.</li>
  </ul>
  <div class="callout warn">Always check each PSU's own current-year recruitment notification (usually published on their careers page) for exact eligibility, cutoffs, and process — these are not standardized across PSUs.</div>
  `},

"mtech": {
  title: "M.Tech Opportunities",
  body: `
  <p class="lead">A qualifying GATE score opens M.Tech admission at IITs, NITs, IIITs, and other centrally/state-funded institutes, often with a monthly stipend for GATE-qualified students.</p>
  <ul>
    <li>Higher scores/ranks open access to more competitive institutes and specializations (e.g., CSE at top IITs vs newer NITs).</li>
    <li>Working professionals can also consider part-time/executive M.Tech programs at some IITs, which may have separate criteria.</li>
    <li>An M.Tech can be a path to research roles, PSU seniority tracks, academia, or a specialization pivot (e.g., into AI/ML research) building on your current AI/automation work.</li>
  </ul>
  `},

"scholarships": {
  title: "Scholarships",
  body: `
  <p class="lead">GATE-qualified M.Tech students at recognized institutes are typically eligible for a Government of India stipend (through MHRD/AICTE) during their program, subject to institute-specific rules and academic performance requirements.</p>
  <p>Some institutes and specific departments may additionally offer merit-based fee waivers or research assistantships for high-ranking GATE candidates — check each institute's current financial aid page directly.</p>
  `},

"foreign": {
  title: "Foreign Universities",
  body: `
  <p class="lead">While GATE itself is an Indian examination, a strong GATE score/performance can meaningfully strengthen applications for some international opportunities.</p>
  <ul>
    <li>Some universities in Germany, Singapore, and a few other countries have historically referenced GATE scores as one input for certain Master's admissions or scholarship schemes — policies vary by institute and change over time, so always verify directly with the specific university's current admissions page.</li>
    <li>A disciplined GATE preparation (strong fundamentals in Algorithms, OS, Networks, Math) also directly strengthens applications for foreign Master's programs that require GRE/coursework-equivalent fundamentals.</li>
  </ul>
  <div class="callout warn">This area changes often and varies by country/university — treat it as a secondary benefit of strong preparation, not a primary planning input.</div>
  `},

"resources": {
  title: "Free Resources Hub",
  body: `<p class="lead">Every resource recommended across this portal, gathered in one place. All are free.</p>`,
},

};

DATA.motivation = {
  intro: "Preparing for GATE while working full-time is a marathon of consistency, not a sprint of intensity — the biggest risk isn't lack of ability, it's burnout-driven inconsistency.",
  burnout: ["Protect one full rest day per week with zero GATE guilt — this is what makes the other six days sustainable.", "Keep weekday sessions short and boundaried (a timer that ends the session regardless of whether you 'feel done').", "Watch for early burnout signs: dreading your study slot, rereading the same page repeatedly without absorbing it, irritability. Treat these as a signal to shorten the next session, not push through."],
  consistency: ["Track streaks, not perfection — a 90-minute session on a bad day beats a skipped day every time.", "Anchor study to a fixed time-of-day (e.g., right after dinner) so it becomes automatic rather than negotiated daily.", "Use the dashboard's streak counter as a visible commitment device."],
  recovery: ["After missing days, resume at ~70% of your normal target for 2-3 days to rebuild the habit loop before returning to full intensity.", "Never try to 'make up' lost time by doubling sessions — this reliably causes burnout and a second, longer drop-off."],
  officeStress: ["Use a short physical transition ritual (a walk, closing your laptop fully) between 'office mode' and 'GATE mode' so work stress doesn't bleed into study focus.", "On unusually heavy office days, permit a reduced-but-nonzero session (even 30 minutes of revision) rather than a full skip — this preserves the streak and the habit."],
  quotes: [
    "Consistency compounds — 90 minutes daily for 8 months outperforms sporadic 8-hour weekend cram sessions.",
    "Your engineering job is not a distraction from GATE prep — the systems intuition you use daily is a genuine head start in DBMS, OS, and Networks.",
    "A structured, mediocre-feeling plan followed daily will outperform an ambitious plan followed inconsistently.",
    "Progress hides in repetition — the fifth time you revise a topic is where it actually sticks, not the first.",
    "You don't need to feel ready to start a session. Starting is what makes you ready.",
  ],
};
