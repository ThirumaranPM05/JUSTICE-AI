import { Scale } from "lucide-react";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
}

export const ChatMessage = ({ role, content }: ChatMessageProps) => {
  const isAssistant = role === "assistant";

  return (
    <div className={`flex gap-3 mb-4 ${isAssistant ? "" : "flex-row-reverse"}`}>
      <div
        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
          isAssistant ? "bg-primary text-primary-foreground" : "bg-secondary"
        }`}
      >
        {isAssistant ? <Scale className="w-4 h-4" /> : <span className="text-sm font-semibold">You</span>}
      </div>
      <div
        className={`flex-1 rounded-lg p-4 ${
          isAssistant
            ? "bg-card border border-border"
            : "bg-primary text-primary-foreground"
        }`}
      >
        <div className="prose prose-sm max-w-none dark:prose-invert">
          {content.split('\n').map((line, i) => (
            <p key={i} className="mb-2 last:mb-0">{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
};