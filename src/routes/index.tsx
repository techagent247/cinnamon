import { createFileRoute } from "@tanstack/react-router";
import { CinematicVideo } from "@/components/CinematicVideo";
import { business, heroVideo, foodVideo, experienceVideo } from "@/lib/cinnamon";
import gallery1 from "@/assets/gallery-1.jpg";
import heroPoster from "@/assets/hero-poster.jpg";
import foodPoster from "@/assets/food-poster.jpg";
import experiencePoster from "@/assets/experience-poster.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cinnamon Harpenden — Indian Takeaway & Restaurant" },
      { name: "description", content: "Fresh, hot Indian food with warm, welcoming service at 3 Thompsons Cl, Harpenden. Order online, reserve a table or see today's deals." },
      { property: "og:title", content: "Cinnamon Harpenden — Indian Takeaway & Restaurant" },
      { property: "og:description", content: "Fresh food, warm service and great deals in Harpenden." },
      { property: "og:type", content: "restaurant" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const Ext = { target: "_blank", rel: "noopener noreferrer" } as const;

function Section({ id, eyebrow, title, children, className = "" }: { id?: string; eyebrow: string; title: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-6 py-24 md:py-32 ${className}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-4xl md:text-6xl text-cream">{title}</h2>
      <div className="mt-10">{children}</div>
    </section>
  );
}

const menuGroups = ["Starters", "Tandoori Specialities", "Curries", "Chef's Specials", "Biryani", "Vegetarian", "Rice & Naan", "Sundries"];

function Index() {
  return (
    <main>
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <a href="#" className="font-display text-2xl tracking-[0.3em] text-cream">CINNAMON</a>
          <nav className="hidden gap-8 text-xs uppercase tracking-[0.25em] text-cream/80 md:flex">
            <a href="#menu" className="hover:text-primary">Menu</a>
            <a href="#deals" className="hover:text-primary">Deals</a>
            <a href="#reserve" className="hover:text-primary">Reserve</a>
            <a href="#contact" className="hover:text-primary">Contact</a>
          </nav>
          <a href={business.phoneHref} className="text-xs tracking-[0.2em] text-cream">{business.phone}</a>
        </div>
      </header>

      {/* 01 HERO VIDEO */}
      <CinematicVideo video={heroVideo} eager className="h-screen min-h-[600px]">
        <div className="mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-24 md:pb-32">
          <p className="eyebrow">Takeaway & Restaurant in Harpenden</p>
          <h1 className="mt-4 text-7xl leading-none tracking-[0.08em] text-cream md:text-[11rem]">CINNAMON</h1>
          <p className="mt-6 max-w-xl text-lg text-cream/85">Fresh, hot Indian food with professional, warm and welcoming service.</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a className="btn-gold" href={business.orderUrl} {...Ext}>Order Online</a>
            <a className="btn-ghost-cream" href={business.reserveUrl} {...Ext}>Reserve a Table</a>
            <a className="btn-ghost-cream" href={business.dealsUrl} {...Ext}>View Today's Deals</a>
          </div>
          <p className="mt-14 text-[0.7rem] uppercase tracking-[0.35em] text-cream/60">Fresh Food • Warm Service • Great Deals • Indian Cuisine</p>
        </div>
      </CinematicVideo>

      {/* 02 ABOUT */}
      <Section eyebrow="About Cinnamon" title="Indian cooking, made with care in Harpenden.">
        <div className="grid gap-10 md:grid-cols-2">
          <p className="text-lg leading-relaxed text-muted-foreground">Cinnamon is a takeaway and restaurant at the heart of Harpenden. Every dish leaves our kitchen fresh and hot — whether you're dining with us or ordering in.</p>
          <p className="text-lg leading-relaxed text-muted-foreground">We believe great food is only half the story. The other half is how you're looked after — which is why so many of our guests keep coming back.</p>
        </div>
      </Section>

      {/* 03 SERVICE */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-px px-6 py-20 md:grid-cols-3">
          {[
            ["Fresh & hot", "Cooked to order and served fresh and hot, every time."],
            ["Warm service", "Professional, friendly and welcoming — from first call to last bite."],
            ["Coming back", "Our goal is simple: satisfied customers who return again and again."],
          ].map(([t, d]) => (
            <div key={t} className="p-6">
              <p className="eyebrow">Service that brings you back</p>
              <h3 className="mt-3 text-3xl text-cream">{t}</h3>
              <p className="mt-3 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 04 DEALS */}
      <Section id="deals" eyebrow="Best deal of the day" title="Great food. Even better value.">
        <div className="flex flex-col items-start justify-between gap-8 border border-primary/40 p-10 md:flex-row md:items-center">
          <p className="max-w-xl text-lg text-muted-foreground">Our deals change regularly. See today's offers on our ordering site before you order.</p>
          <a className="btn-gold" href={business.dealsUrl} {...Ext}>View Today's Deals</a>
        </div>
      </Section>

      {/* 05 FOOD VIDEO */}
      <CinematicVideo video={foodVideo} className="h-[75vh] min-h-[520px]">
        <div className="mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6">
          <p className="eyebrow">From our kitchen</p>
          <h2 className="mt-4 max-w-3xl text-5xl text-cream md:text-8xl">Fresh. Hot. Full of flavour.</h2>
          <p className="mt-6 text-lg text-cream/85">Our food is served fresh and hot, every time.</p>
          <a className="btn-gold mt-10" href="#menu">Explore Our Menu</a>
        </div>
      </CinematicVideo>

      {/* 06 MENU */}
      <Section id="menu" eyebrow="Menu preview" title="Classics and specialities.">
        <ul className="grid gap-x-12 sm:grid-cols-2">
          {menuGroups.map((g) => (
            <li key={g} className="flex items-baseline justify-between border-b border-border py-5">
              <span className="font-display text-2xl text-cream">{g}</span>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">See full menu</span>
            </li>
          ))}
        </ul>
        <a className="btn-gold mt-10" href={business.orderUrl} {...Ext}>View Full Menu & Prices</a>
      </Section>

      {/* 07 GALLERY */}
      <section className="grid grid-cols-2 gap-1 md:grid-cols-4">
        {[gallery1, heroPoster, foodPoster, experiencePoster].map((src, i) => (
          <img key={i} src={src} alt="Cinnamon Indian food and dining" loading="lazy" width={1024} height={1024} className="aspect-square h-full w-full object-cover" />
        ))}
      </section>

      {/* 08-10 RESERVE / ORDER / DELIVERY */}
      <section id="reserve" className="mx-auto grid max-w-6xl gap-6 px-6 py-24 md:grid-cols-3">
        <div className="bg-card p-8">
          <p className="eyebrow">Reservation</p>
          <h3 className="mt-3 text-3xl text-cream">Book your table</h3>
          <p className="mt-3 text-muted-foreground">Reserve online or call us on {business.phone}.</p>
          <a className="btn-gold mt-6" href={business.reserveUrl} {...Ext}>Reserve a Table</a>
        </div>
        <div className="bg-card p-8">
          <p className="eyebrow">Order online</p>
          <h3 className="mt-3 text-3xl text-cream">Takeaway & collection</h3>
          <p className="mt-3 text-muted-foreground">Order direct for fresh, hot food from our kitchen.</p>
          <a className="btn-gold mt-6" href={business.orderUrl} {...Ext}>Order Online</a>
        </div>
        <div className="bg-card p-8">
          <p className="eyebrow">Delivery</p>
          <h3 className="mt-3 text-3xl text-cream">To your door</h3>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li>Free delivery up to 2 miles</li>
            <li>£2 delivery charge up to 2.5 miles</li>
          </ul>
        </div>
      </section>

      {/* 11 ALLERGY */}
      <Section eyebrow="Allergy information" title="Please tell us before you order.">
        <p className="max-w-2xl text-lg text-muted-foreground">Some dishes may contain wheat, soya, dairy, nuts and other allergens. Customers with allergies should inform the restaurant before ordering — call {business.phone}.</p>
      </Section>

      {/* 12-13 CREDENTIALS / REVIEWS */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
          <div>
            <p className="eyebrow">Our credentials</p>
            <h3 className="mt-3 text-3xl text-cream">Indian cuisine, done properly.</h3>
            <p className="mt-3 text-muted-foreground">Fresh ingredients, food cooked to order and service our guests remember.</p>
          </div>
          <div>
            <p className="eyebrow">Reviews</p>
            <h3 className="mt-3 text-3xl text-cream">Hear from our guests.</h3>
            <a className="btn-ghost-cream mt-6" href={business.mapsUrl} {...Ext}>Read reviews on Google</a>
          </div>
        </div>
      </section>

      {/* 14 EXPERIENCE VIDEO */}
      <CinematicVideo video={experienceVideo} className="h-[80vh] min-h-[540px]">
        <div className="mx-auto flex h-full max-w-6xl flex-col items-end justify-center px-6 text-right">
          <p className="eyebrow">Hospitality</p>
          <h2 className="mt-4 text-5xl text-cream md:text-8xl">Experience Cinnamon</h2>
          <p className="mt-6 max-w-xl text-lg text-cream/85">Professional, warm and welcoming service designed to make every dining experience memorable.</p>
          <div className="mt-10 flex flex-wrap justify-end gap-3">
            <a className="btn-gold" href={business.reserveUrl} {...Ext}>Reserve a Table</a>
            <a className="btn-ghost-cream" href={business.orderUrl} {...Ext}>Order Online</a>
          </div>
        </div>
      </CinematicVideo>

      {/* 15-16 CONTACT / HOURS */}
      <Section id="contact" eyebrow="Find us" title="Visit Cinnamon.">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-3 text-lg">
            <p className="text-cream">{business.address}</p>
            <p><a className="text-primary" href={business.phoneHref}>{business.phone}</a></p>
            <a className="btn-ghost-cream mt-4" href={business.mapsUrl} {...Ext}>Get Directions</a>
          </div>
          <div>
            <p className="eyebrow">Opening hours</p>
            <p className="mt-3 text-muted-foreground">Please call {business.phone} for today's opening hours.</p>
          </div>
        </div>
      </Section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row md:justify-between">
          <p className="font-display text-xl tracking-[0.3em] text-cream">CINNAMON</p>
          <p>{business.address} · {business.phone}</p>
          <p>© {new Date().getFullYear()} {business.name}</p>
        </div>
      </footer>
    </main>
  );
}
