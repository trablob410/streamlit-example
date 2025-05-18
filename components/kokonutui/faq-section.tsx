"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ChevronDown, ChevronUp } from "lucide-react"
import { V31Button } from "../ui/v31-button"

interface FAQItem {
  question: string
  answer: string
  category: string
}

export default function FAQSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})
  const [activeCategory, setActiveCategory] = useState<string>("general")

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const faqItems: FAQItem[] = [
    {
      question: "What is From The Trenches (FTT)?",
      answer:
        "From The Trenches is an elite signal trading bot designed for crypto traders who want an edge in the volatile meme coin and low-cap token markets. Unlike typical trading bots that rely on technical indicators or volume fluctuations, FTT tracks Smart Money wallets with proven track records to identify high-potential trading opportunities before they become widely known.",
      category: "general",
    },
    {
      question: "How is FTT different from other signal providers?",
      answer:
        "FTT differentiates itself through: Smart Money Intelligence (we track wallets with proven 70%+ win rates rather than relying on technical indicators), Multiple Signal Types (we offer different signal categories tailored to various risk profiles and trading styles), Comprehensive Ecosystem (beyond signals, we provide educational content, community support, and trading infrastructure), Military-Inspired Framework (our structured approach emphasizes discipline, preparation, and strategic thinking), and Axiom Integration (our partnership with Axiom.Trade provides one-click trading execution and enhanced tracking capabilities).",
      category: "general",
    },
    {
      question: "What is the track record of FTT signals?",
      answer:
        "FTT maintains a 50-55% winrate across approximately 700 calls since inception, with the following characteristics: Running successfully for 4+ months with stable performance ratio, Top 73 public channel on leaderboard sniper.xyz, Numerous documented 2-10x gains from signals, Higher win rates on specific signal types (Mid-Sized signals show ~60% win rate).",
      category: "general",
    },
    {
      question: "How much does FTT cost?",
      answer: "Free at the moment. In June we'll launch subscription with only 1 SOL/month.",
      category: "general",
    },
    {
      question: "What types of signals does FTT provide?",
      answer:
        "FTT currently offers four main signal types: 1) New Launch Signal: High risk/high reward opportunities with potential for 5-10x returns, targeting very early-stage tokens. 2) Mid-Sized Signal: More stable opportunities with established tokens, offering moderate risk/reward profile. 3) Social-Based Twitter Bot: Tracks when Key Opinion Leaders follow projects, combining social intelligence with Smart Money validation. 4) Volume Spike + Smart Money: Combines volume analysis with Smart Money activity for quick-moving opportunities.",
      category: "signals",
    },
    {
      question: "How many signals should I expect to receive?",
      answer:
        "The number of signals varies based on market conditions and Smart Money activity, but typically: 10+ signals per week for main bot, Higher frequency during active market periods, Quality over quantity – we only send signals meeting strict criteria, Signal distribution is not evenly spread (some days may have multiple signals, others none).",
      category: "signals",
    },
    {
      question: "How quickly do I need to act on signals?",
      answer:
        "The required response time varies by signal type: New Launch Signals: Immediate action (within seconds) is crucial. Mid-Sized Signals: Allow more time for entry (minutes to hours). Social-Based Signals: Variable timing based on narrative development. Volume Spike + SM Signals: Very quick response required (seconds to minutes). We recommend setting up your trading infrastructure in advance to enable rapid execution when needed.",
      category: "signals",
    },
    {
      question: "What is a realistic win rate to expect?",
      answer:
        "Our historical data shows: Overall win rate across all signals: 50-55%. Mid-Sized Signals: ~60% win rate. New Launch Signals: ~50% win rate. Social-Based and Volume Spike signals: Currently in testing phase ~35-45% at the moment. It's important to understand that win rate alone doesn't determine profitability. The magnitude of winning trades typically far exceeds losing trades, resulting in positive overall returns despite win rates below 100%.",
      category: "signals",
    },
    {
      question: "How much capital do I need to start?",
      answer:
        "While there's no minimum requirement, we recommend: At least $1,000 in trading capital to properly diversify across multiple signals. Ideally $5,000+ for optimal position sizing and risk management. Start with smaller positions (1-2% of capital) while learning the system. Never trade with money you cannot afford to lose.",
      category: "implementation",
    },
    {
      question: "What wallets and exchanges should I use?",
      answer:
        "For optimal implementation of FTT signals: All-in-One Solution: Axiom.Trade (recommended for best experience). Telegram Trading Bots: MEVX or Bloom for faster execution.",
      category: "implementation",
    },
    {
      question: "Can I use FTT for chains other than Solana?",
      answer:
        "Currently, our primary focus is Solana due to its speed, low transaction costs, and vibrant meme coin ecosystem. However: We're actively developing tracking for additional chains. Ethereum and its L2s are next in our expansion roadmap. The methodology can be applied to any chain with transparent on-chain data. We'll announce new chain support in the main channel as it becomes available.",
      category: "implementation",
    },
    {
      question: "Can I get access to the wallet addresses you track?",
      answer:
        "We don't publicly share the complete list to prevent overexposure that could impact performance. However, soon we'll provide through: The Axiom.Trade platform integration (for our ref users), Our Tools - Upcoming, Educational content explaining tracking methodology.",
      category: "smart-money",
    },
    {
      question: "How do you verify Smart Money performance?",
      answer: "This is part of our proprietary methodology that gives FTT its edge in the market.",
      category: "smart-money",
    },
    {
      question: "How do I overcome emotional trading decisions?",
      answer:
        "Developing trading discipline requires: 1) Implementing the Soldier Mindset Framework: Focus on process rather than outcome, Follow established protocols regardless of emotional state, Prepare thoroughly before entering positions, Maintain strategic perspective during volatility. 2) Practical Techniques: Use a trading journal to document emotions and decisions, Implement pre-trade checklists to ensure rational decisions, Set position sizes that allow clear thinking, Establish cooling-off periods after losses, Create accountability through community support. 3) Identity Development: Build identity around process excellence rather than outcomes, Measure success by adherence to strategy, not P&L, Develop pride in disciplined execution, Separate self-worth from trading results.",
      category: "psychology",
    },
    {
      question: "What happens if a signal doesn't perform as expected?",
      answer:
        "When signals don't perform as expected: We provide transparent performance tracking, Losing trades are documented and analyzed, Lessons are shared with the community, Strategy adjustments are made when patterns emerge, The focus remains on long-term win rate rather than individual trades. Remember that no trading strategy has a 100% win rate – the goal is positive expectancy over time through proper position sizing and risk management.",
      category: "psychology",
    },
    {
      question: "How do you handle market volatility?",
      answer:
        "Our approach to market volatility includes: Adapting signal criteria based on market conditions, Providing specific guidance for different market phases, Adjusting position sizing recommendations during high volatility, Emphasizing risk management during uncertain periods, Focusing on higher-conviction opportunities in volatile markets.",
      category: "psychology",
    },
    {
      question: "What if I miss a signal?",
      answer:
        "If you miss a signal: Assess the current price relative to the signal price, Check if Smart Money is still in position, Follow the guidelines for late entries in our resources, Consider waiting for the next opportunity if significant movement has occurred, Use the experience to optimize your notification setup. For time-sensitive signals (New Launch and Volume Spike), late entries are generally not recommended. For Mid-Sized signals, later entries may still be viable depending on price action and Smart Money positioning.",
      category: "psychology",
    },
    {
      question: "How do I track my performance with FTT?",
      answer:
        "We recommend: Using our trading journal template to document all trades, Implementing our performance tracking spreadsheet, Calculating key metrics beyond simple P&L (win rate, average R, etc.), Separating performance by signal type, Tracking psychological factors alongside financial results, Reviewing performance regularly to identify improvement areas, Sharing anonymized results in the community for feedback.",
      category: "psychology",
    },
  ]

  const categories = [
    { id: "general", label: "GENERAL" },
    { id: "signals", label: "SIGNALS" },
    { id: "implementation", label: "IMPLEMENTATION" },
    { id: "smart-money", label: "SMART MONEY" },
    { id: "psychology", label: "PSYCHOLOGY" },
  ]

  const filteredItems = faqItems.filter((item) => item.category === activeCategory)

  return (
    <div id="faq" ref={ref} className="w-full py-20 relative overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />
        <div className="scanline"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 neon-text">FREQUENTLY ASKED QUESTIONS</h2>
          <p className="text-xl text-primary/80 max-w-3xl mx-auto">
            GET ANSWERS TO COMMON QUESTIONS ABOUT FROM THE TRENCHES AND OUR SIGNAL SYSTEM
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center mb-8 gap-2 md:gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 text-sm md:text-base rounded-md transition-colors ${
                activeCategory === category.id
                  ? "bg-accent text-white"
                  : "bg-black/40 text-primary/70 hover:text-primary border border-primary/20"
              }`}
              aria-pressed={activeCategory === category.id}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          {filteredItems.map((item, index) => {
            const itemId = `faq-${activeCategory}-${index}`
            const isOpen = openItems[itemId] || false

            return (
              <motion.div
                key={itemId}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="mb-4"
              >
                <button
                  onClick={() => toggleItem(itemId)}
                  className={`w-full text-left p-4 rounded-t-lg flex justify-between items-center transition-colors ${
                    isOpen ? "bg-primary/10 text-primary" : "bg-secondary/40 text-primary/80 hover:bg-primary/5"
                  } border border-primary/20`}
                  aria-expanded={isOpen}
                  aria-controls={`content-${itemId}`}
                >
                  <span className="font-medium">{item.question}</span>
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 flex-shrink-0" />
                  )}
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={`content-${itemId}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden border-x border-b border-primary/20 rounded-b-lg"
                    >
                      <div className="p-4 bg-secondary/20 text-primary/90 text-sm leading-relaxed">
                        {item.answer.split(". ").map((sentence, i) => (
                          <p key={i} className={i > 0 ? "mt-2" : ""}>
                            {sentence.trim() + (i < item.answer.split(". ").length - 1 ? "." : "")}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-primary-100/80 mb-6">
            STILL HAVE QUESTIONS? JOIN OUR TELEGRAM COMMUNITY FOR PERSONALIZED SUPPORT
          </p>
          <V31Button
            variant="primary"
            as="a"
            href="https://t.me/fttrenches_main"
            target="_blank"
            rel="noopener noreferrer"
          >
            JOIN OUR TELEGRAM
          </V31Button>
        </motion.div>
      </div>
    </div>
  )
}
