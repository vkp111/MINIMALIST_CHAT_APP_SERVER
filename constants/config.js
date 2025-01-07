const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://minimalist-chat-app-client.vercel.app",
    "https://minimalist-chat-app-client-git-master-vijayant-pandeys-projects.vercel.app",
    "https://minimalist-chat-app-client-8g6m548i0-vijayant-pandeys-projects.vercel.app",
    "http://localhost:4173",
    process.env.CLIENT_URL, // Make sure this environment variable is correctly set
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const CHATSHAT_TOKEN = "chatshat-token";

export { corsOptions, CHATSHAT_TOKEN };
