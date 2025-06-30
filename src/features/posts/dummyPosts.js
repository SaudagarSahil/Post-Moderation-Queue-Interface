export const dummyPosts = [
  {
    id: "post_001",
    title: "How to center a div in CSS?",
    content: "I've tried margin auto, flexbox, and grid. What's the best approach in 2025?",
    author: { username: "frontend_ninja", id: "user_101" },
    reportedReason: "Duplicate question",
    reportedAt: "2025-06-25T10:30:00Z",
    status: "pending",
    reportCount: 2
  },
  {
    id: "post_002",
    title: "Explain closures in JavaScript",
    content: "Can someone explain closures with a relatable real-life example?",
    author: { username: "js_dev", id: "user_102" },
    reportedReason: "Spam",
    reportedAt: "2025-06-24T09:15:00Z",
    status: "pending",
    reportCount: 3
  },
  {
    id: "post_003",
    title: "React vs Vue in 2025",
    content: "Which framework is better for large-scale apps in 2025?",
    author: { username: "framework_warrior", id: "user_103" },
    reportedReason: "Off-topic",
    reportedAt: "2025-06-23T16:45:00Z",
    status: "approved",
    reportCount: 1
  },
  {
    id: "post_004",
    title: "CSS Grid not aligning items properly",
    content: "I'm using grid-template-areas but the layout breaks on mobile.",
    author: { username: "grid_guru", id: "user_104" },
    reportedReason: "Poor formatting",
    reportedAt: "2025-06-26T12:10:00Z",
    status: "rejected",
    reportCount: 4
  },
  {
    id: "post_005",
    title: "Best laptop for coding in 2025?",
    content: "Should I go with M3 MacBook Air or wait for M3 Pro?",
    author: { username: "hardware_hunter", id: "user_105" },
    reportedReason: "Not programming related",
    reportedAt: "2025-06-26T14:25:00Z",
    status: "pending",
    reportCount: 1
  },
  {
    id: "post_006",
    title: "TypeError: undefined is not a function",
    content: "Getting this error in React Native. What could be causing it?",
    author: { username: "rn_coder", id: "user_106" },
    reportedReason: "Misleading title",
    reportedAt: "2025-06-27T10:05:00Z",
    status: "pending",
    reportCount: 5
  },
  {
    id: "post_007",
    title: "How do Promises work internally?",
    content: "I understand the syntax but want to know how the JS engine handles them.",
    author: { username: "promise_master", id: "user_107" },
    reportedReason: "Too broad",
    reportedAt: "2025-06-22T08:50:00Z",
    status: "pending",
    reportCount: 3
  },
  {
    id: "post_008",
    title: "Why is my Flexbox layout breaking?",
    content: "Using justify-content: space-between, but elements still overlap.",
    author: { username: "flexbox_fan", id: "user_108" },
    reportedReason: "Inappropriate language",
    reportedAt: "2025-06-21T11:40:00Z",
    status: "approved",
    reportCount: 1
  },
  {
    id: "post_009",
    title: "What is the cleanest way to debounce input in React?",
    content: "Trying to implement debounce without external libraries.",
    author: { username: "clean_coder", id: "user_109" },
    reportedReason: "Already answered",
    reportedAt: "2025-06-20T13:30:00Z",
    status: "pending",
    reportCount: 2
  },
  {
    id: "post_010",
    title: "HTML tag for side notes?",
    content: "What's the correct semantic tag for side notes or asides?",
    author: { username: "semantic_guru", id: "user_110" },
    reportedReason: "Low quality",
    reportedAt: "2025-06-19T07:15:00Z",
    status: "rejected",
    reportCount: 4
  },
  // Additional generated dummy posts
  ...Array.from({ length: 120 }, (_, i) => {
    const id = i + 11;
    const statuses = ["pending", "approved", "rejected"];
    const reasons = [
      "Spam",
      "Duplicate",
      "Inappropriate language",
      "Off-topic",
      "Already answered",
      "Low quality",
      "Too broad",
      "Misleading title"
    ];
    const sampleTitles = [
      "How to learn TypeScript effectively?",
      "What's new in ES2025?",
      "Why my API fetch returns undefined?",
      "React Server Components vs Client Components?",
      "Dark mode toggle using Tailwind?",
      "Deploying React app on Vercel",
      "Redux Toolkit setup for beginners",
      "Best practices for RESTful APIs",
      "How does useMemo work?",
      "When to use useLayoutEffect?"
    ];
    return {
      id: `post_${id.toString().padStart(3, "0")}`,
      title: sampleTitles[i % sampleTitles.length],
      content: `This is a sample post content for "${sampleTitles[i % sampleTitles.length]}"`,
      author: {
        username: `user_${id}`,
        id: `user_${200 + id}`
      },
      reportedReason: reasons[i % reasons.length],
      reportedAt: new Date(2025, 5, 18 + (i % 10), 8 + (i % 10), i * 3).toISOString(),
      status: statuses[i % statuses.length],
      reportCount: Math.floor(Math.random() * 5) + 1
    };
  })
];
