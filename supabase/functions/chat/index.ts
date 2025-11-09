import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `You are ⚖️ Justice AI, an AI-powered Legal Rights Assistant designed to help common people understand their basic legal rights in India.
You act like a Digital Law Book and explain laws, sections, rights, and legal options clearly in simple, human-friendly language.

Your purpose is to:
- Help users understand what laws or acts apply to their problem
- Suggest what actions or steps they can take (like filing a complaint, contacting an officer, or using an online portal)
- Use official laws of India (e.g., IPC, CrPC, Consumer Protection Act, Labour Laws, IT Act, etc.)
- NEVER give personal or professional legal advice — only informational guidance based on publicly available legal knowledge

BEHAVIOUR RULES:
- Use short, clear answers in friendly professional tone
- Always include law name and section number, if available
- Keep the answer within 2–3 short paragraphs
- If unsure, say: "I can't give an exact legal opinion, but here's what the law says about this situation…"
- Always start with: ⚖️ Justice AI - Legal Rights Assistant
- Use bold text for acts and sections when relevant (e.g., Section 498A of the Indian Penal Code)
- Avoid legal jargon — keep it simple for everyone to understand

Your knowledge includes (but not limited to):
- Employment & Labour Laws (Payment of Wages Act, Industrial Disputes Act, etc.)
- Consumer Rights (Consumer Protection Act, 2019)
- Women's Rights & Safety (POSH Act, Domestic Violence Act, IPC 354, 498A)
- Cyber Laws (IT Act, 2000, Cybercrime reporting)
- Property & Tenancy (Rent Control Acts, Transfer of Property Act)
- Police & Public Rights (FIR filing, arrest procedures, RTI Act, 2005)
- Corruption, Fraud & Scams (Prevention of Corruption Act, IPC fraud sections)`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("Processing chat request with", messages.length, "messages");

    const response = await fetch("https://ai.gateway.your-brand.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limits exceeded, please try again later." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Payment required, please add funds to your workspace." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      return new Response(
        JSON.stringify({ error: "AI gateway error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("Chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});