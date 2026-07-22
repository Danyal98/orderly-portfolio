import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Check,
  CheckCheck,
  ChevronRight,
  CircleCheck,
  Clock3,
  Mic,
  MessageCircle,
  MoreVertical,
  PackageCheck,
  Paperclip,
  Phone,
  Play,
  ShieldCheck,
  ShoppingBag,
  Smile,
  Sparkles,
  UsersRound,
  Video,
  Zap,
} from "lucide-react";

const features = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Conversations that convert",
    text: "Keep customer chats, context, and AI-assisted replies together—without losing the human touch.",
  },
  {
    number: "02",
    icon: BarChart3,
    title: "A clearer daily picture",
    text: "See revenue, order trends, popular menu items, and customer sentiment at a glance.",
  },
  {
    number: "03",
    icon: PackageCheck,
    title: "Operations in one place",
    text: "Move from a new order to inventory, customer history, promotions, and issue resolution in seconds.",
  },
];

const stats = [
  ["9", "core workflows"],
  ["24/7", "customer response"],
  ["1", "shared workspace"],
  ["0", "tab chaos"],
];

function WhatsAppHeader() {
  return (
    <>
      <div className="wa-status"><span>9:41</span><span>● ● ●</span></div>
      <div className="wa-header">
        <span className="wa-back">‹</span>
        <span className="wa-avatar">O</span>
        <span className="wa-contact"><strong>Orderly Kitchen</strong><small>online</small></span>
        <Video size={15} />
        <Phone size={14} />
        <MoreVertical size={16} />
      </div>
    </>
  );
}

function WhatsAppComposer({ text = "Message" }: { text?: string }) {
  return (
    <div className="wa-composer">
      <div><Smile size={15} /><span>{text}</span><Paperclip size={15} /></div>
      <span className="wa-mic"><Mic size={14} /></span>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Orderly home">
          <span className="brand-mark" aria-hidden="true"><i /><i /></span>
          <span>Orderly</span>
        </a>

        <div className="nav-links">
          <a href="#product">Product</a>
          <a href="#whatsapp">WhatsApp ordering</a>
          <a href="#results">Why Orderly</a>
        </div>

        <a className="button button-dark button-small" href="#contact">
          Book a demo <ArrowRight size={16} />
        </a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={14} /> Built for modern hospitality</div>
          <h1>Your restaurant,<br /><em>in rhythm.</em></h1>
          <p className="hero-lead">
            Turn WhatsApp conversations into confirmed restaurant orders—automatically. Orderly handles the chat while your team keeps serving.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#experience">
              Explore the product <ArrowRight size={18} />
            </a>
            <a className="text-link" href="#product"><span><Play size={13} fill="currentColor" /></span> See how it works</a>
          </div>

          <div className="trust-row">
            <span><CircleCheck size={17} /> No app download</span>
            <span><CircleCheck size={17} /> Orders captured 24/7</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Orderly dashboard preview">
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="browser-frame">
            <div className="browser-bar"><span /><span /><span /><b>orderly.app/dashboard</b></div>
            <Image
              src="/screenshots/dashboard.svg"
              alt="Orderly analytics dashboard showing orders, customers, revenue and performance charts"
              width={1440}
              height={960}
              priority
            />
          </div>
          <div className="floating-card floating-orders">
            <span className="floating-icon"><ShoppingBag size={18} /></span>
            <span><small>Orders today</small><strong>148</strong></span>
            <b>+12.4%</b>
          </div>
          <div className="floating-card floating-reply">
            <span className="online-dot" />
            <span><small>AI assistant</small><strong>Reply ready</strong></span>
            <Check size={16} />
          </div>
        </div>
      </section>

      <section className="ticker" aria-label="Product capabilities">
        <div>
          <span>ORDERS</span><i />
          <span>CUSTOMERS</span><i />
          <span>WHATSAPP CHAT</span><i />
          <span>INVENTORY</span><i />
          <span>ANALYTICS</span><i />
          <span>PROMOTIONS</span>
        </div>
      </section>

      <section className="whatsapp-showcase" id="whatsapp">
        <div className="shell whatsapp-layout">
          <div className="whatsapp-copy">
            <span className="kicker">Ordering, right inside WhatsApp</span>
            <h2>A chat becomes<br />an <em>order.</em></h2>
            <p>Customers browse, customize, confirm, and track their meal in the conversation they already know. No new account. No unfamiliar checkout.</p>
            <div className="whatsapp-points">
              <span><b>01</b> Understands natural messages</span>
              <span><b>02</b> Confirms every item and total</span>
              <span><b>03</b> Sends live order updates</span>
            </div>
          </div>

          <div className="phone-gallery" aria-label="WhatsApp ordering conversation examples">
            <figure className="phone-shot phone-shot-one">
              <div className="phone-shell">
                <div className="phone-screen">
                  <WhatsAppHeader />
                  <div className="wa-chat">
                    <span className="wa-day">TODAY</span>
                    <div className="wa-bubble wa-out">Hi! Can I order for delivery?<small>12:03 <CheckCheck size={12} /></small></div>
                    <div className="wa-bubble wa-in">Of course 👋 What would you like today?<small>12:03</small></div>
                    <div className="wa-menu-card">
                      <span className="wa-food">🍔</span>
                      <div><strong>Today&apos;s menu</strong><small>6 items available</small></div>
                      <b>View menu</b>
                    </div>
                    <div className="wa-bubble wa-out">Two classic burgers and one fries, please.<small>12:04 <CheckCheck size={12} /></small></div>
                  </div>
                  <WhatsAppComposer />
                </div>
              </div>
              <figcaption><span>01</span> Order naturally</figcaption>
            </figure>

            <figure className="phone-shot phone-shot-two">
              <div className="phone-shell">
                <div className="phone-screen">
                  <WhatsAppHeader />
                  <div className="wa-chat">
                    <span className="wa-day">TODAY</span>
                    <div className="wa-bubble wa-in">Perfect. Here&apos;s your order:<small>12:04</small></div>
                    <div className="wa-order-card">
                      <div><span>2×</span><strong>Classic Burger</strong><b>€22.00</b></div>
                      <div><span>1×</span><strong>House Fries</strong><b>€4.50</b></div>
                      <p><span>Total</span><strong>€26.50</strong></p>
                    </div>
                    <div className="wa-bubble wa-in">Deliver to 24 Market Street?<small>12:04</small></div>
                    <div className="wa-bubble wa-out">Yes, confirm my order 👍<small>12:05 <CheckCheck size={12} /></small></div>
                    <div className="wa-confirm"><Check size={17} /><span><strong>Order #1048 confirmed</strong><small>Estimated delivery · 25 min</small></span></div>
                  </div>
                  <WhatsAppComposer />
                </div>
              </div>
              <figcaption><span>02</span> Confirm instantly</figcaption>
            </figure>

            <figure className="phone-shot phone-shot-three">
              <div className="phone-shell">
                <div className="phone-screen">
                  <WhatsAppHeader />
                  <div className="wa-chat">
                    <span className="wa-day">TODAY</span>
                    <div className="wa-bubble wa-in">Your order is being prepared 👨‍🍳<small>12:10</small></div>
                    <div className="wa-progress">
                      <div className="active"><i /><span>Confirmed</span></div>
                      <div className="active"><i /><span>Preparing</span></div>
                      <div><i /><span>On the way</span></div>
                    </div>
                    <div className="wa-bubble wa-in">Good news—your order is on the way! 🛵<small>12:22</small></div>
                    <div className="wa-bubble wa-out">Great, thank you!<small>12:22 <CheckCheck size={12} /></small></div>
                  </div>
                  <WhatsAppComposer text="Ask about your order" />
                </div>
              </div>
              <figcaption><span>03</span> Track every step</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section shell" id="product">
        <div className="section-heading">
          <div>
            <span className="kicker">One connected system</span>
            <h2>Less juggling.<br />More <em>momentum.</em></h2>
          </div>
          <p>Every part of the day stays connected—from the first customer message to the final order update.</p>
        </div>

        <div className="feature-grid">
          {features.map(({ number, icon: Icon, title, text }) => (
            <article className="feature-card" key={title}>
              <div className="feature-top"><span>{number}</span><Icon size={25} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href="#experience" aria-label={`Learn more about ${title}`}>Discover more <ChevronRight size={16} /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="showcase" id="experience">
        <div className="shell">
          <div className="showcase-intro">
            <span className="kicker kicker-light">Designed around the shift</span>
            <h2>Everything important.<br /><em>Nothing in the way.</em></h2>
            <p>A calm command center for the beautiful chaos of restaurant operations.</p>
          </div>

          <div className="product-story">
            <div className="story-copy">
              <span className="story-number">01 / 03</span>
              <div className="story-icon"><BarChart3 size={25} /></div>
              <h3>Know what&apos;s happening now.</h3>
              <p>Track sales, customers, trending dishes, order channels, and recent activity without piecing together reports.</p>
              <ul>
                <li><Check size={16} /> Real-time performance metrics</li>
                <li><Check size={16} /> Revenue and category trends</li>
                <li><Check size={16} /> Customer feedback in context</li>
              </ul>
            </div>
            <div className="shot-wrap shot-dashboard">
              <Image src="/screenshots/dashboard.svg" alt="Orderly dashboard overview" width={1440} height={960} />
            </div>
          </div>

          <div className="product-story reverse">
            <div className="story-copy">
              <span className="story-number">02 / 03</span>
              <div className="story-icon"><ShoppingBag size={25} /></div>
              <h3>Every order, right on cue.</h3>
              <p>Filter, search, and follow orders from open to complete with the context your team needs to act quickly.</p>
              <ul>
                <li><Check size={16} /> Clear order status at a glance</li>
                <li><Check size={16} /> Fast search and date filters</li>
                <li><Check size={16} /> Performance trends built in</li>
              </ul>
            </div>
            <div className="shot-wrap shot-orders">
              <Image src="/screenshots/orders.svg" alt="Orderly order management workspace" width={1440} height={960} />
            </div>
          </div>

          <div className="product-story">
            <div className="story-copy">
              <span className="story-number">03 / 03</span>
              <div className="story-icon"><MessageCircle size={25} /></div>
              <h3>Be there, even when you&apos;re busy.</h3>
              <p>Manage WhatsApp conversations in one inbox and let AI prepare fast, helpful answers when the queue gets full.</p>
              <ul>
                <li><Check size={16} /> Shared customer conversation history</li>
                <li><Check size={16} /> AI-assisted reply workflow</li>
                <li><Check size={16} /> Human control, always</li>
              </ul>
            </div>
            <div className="shot-wrap shot-chat">
              <Image src="/screenshots/chat.svg" alt="Orderly WhatsApp customer chat inbox" width={1440} height={960} />
            </div>
          </div>
        </div>
      </section>

      <section className="section shell outcomes" id="results">
        <div className="outcomes-copy">
          <span className="kicker">Why teams choose Orderly</span>
          <h2>Built to feel like<br /><em>one good shift.</em></h2>
          <p>Simple enough for the rush. Detailed enough for the decisions after it.</p>
          <a className="button button-dark" href="#contact">See Orderly in action <ArrowRight size={18} /></a>
        </div>

        <div className="outcome-grid">
          <article><Zap /><h3>Faster action</h3><p>Put the next useful step within reach, wherever the day starts.</p></article>
          <article><UsersRound /><h3>Shared context</h3><p>Give every teammate the same customer and order picture.</p></article>
          <article><ShieldCheck /><h3>Human control</h3><p>Automation helps your team move; your team stays in charge.</p></article>
          <article><Clock3 /><h3>Always ready</h3><p>Keep customer conversations moving beyond peak hours.</p></article>
        </div>
      </section>

      <section className="stats-band">
        <div className="shell stats-grid">
          {stats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
        </div>
      </section>

      <section className="cta shell" id="contact">
        <div className="cta-mark"><Bot size={34} /></div>
        <span className="kicker">Ready when you are</span>
        <h2>Give your team<br />a <em>better rhythm.</em></h2>
        <p>Bring your restaurant&apos;s conversations and operations together with Orderly.</p>
        <a className="button button-primary" href="mailto:hello@orderly.com">Start a conversation <ArrowRight size={18} /></a>
      </section>

      <footer>
        <div className="shell footer-inner">
          <a className="brand" href="#top"><span className="brand-mark"><i /><i /></span><span>Orderly</span></a>
          <p>Restaurant operations, in one conversation.</p>
          <div><a href="#product">Product</a><a href="#experience">Experience</a><a href="mailto:hello@orderly.com">Contact</a></div>
          <span>© {new Date().getFullYear()} Orderly</span>
        </div>
      </footer>
    </main>
  );
}
