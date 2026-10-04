import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import menu from "@/data/menu.json";
import { business } from "@/lib/cinnamon";

type Item = { name: string; price: string; description: string; allergens: string[]; variants?: { name: string; price: string }[] };
const cats = menu as { name: string; items: Item[] }[];

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Cinnamon Harpenden Indian Restaurant" },
      { name: "description", content: "Full menu and prices at Cinnamon Harpenden: starters, chef's specials, house curries, biryani, tandoori breads and more." },
      { property: "og:title", content: "Menu — Cinnamon Harpenden" },
      { property: "og:description", content: "Starters, chef's specials, house curries, biryani, sides and tandoori breads." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [active, setActive] = useState(cats[0]!.name);
  const cat = cats.find((c) => c.name === active)!;
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <div className="flex items-center justify-between">
        <Link to="/" className="font-display text-2xl tracking-[0.3em] text-cream">CINNAMON</Link>
        <a className="btn-gold" href={business.orderUrl} target="_blank" rel="noopener noreferrer">Order Online</a>
      </div>
      <p className="eyebrow mt-16">Our menu</p>
      <h1 className="mt-4 text-5xl text-cream md:text-7xl">Find your favourite.</h1>
      <nav className="sticky top-0 z-10 -mx-6 mt-10 flex gap-2 overflow-x-auto bg-background/95 px-6 py-4">
        {cats.map((c) => (
          <button
            key={c.name}
            onClick={() => setActive(c.name)}
            className={`whitespace-nowrap border px-4 py-2 text-xs uppercase tracking-[0.2em] ${c.name === active ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:text-cream"}`}
          >
            {c.name}
          </button>
        ))}
      </nav>
      <ul className="mt-6 grid gap-x-12 md:grid-cols-2">
        {cat.items.map((it, i) => (
          <li key={it.name + i} className="border-b border-border py-6">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-display text-2xl text-cream">{it.name}</h2>
              <span className="text-primary">{it.price}</span>
            </div>
            {it.description && <p className="mt-2 text-sm text-muted-foreground">{it.description}</p>}
            {it.variants && (
              <p className="mt-2 text-xs text-muted-foreground">
                {it.variants.map((v) => `${v.name} ${v.price}`).join(" · ")}
              </p>
            )}
            {it.allergens.length > 0 && (
              <p className="mt-2 text-[0.7rem] uppercase tracking-[0.2em] text-accent">Contains: {it.allergens.join(", ")}</p>
            )}
          </li>
        ))}
      </ul>
      <p className="mt-12 text-sm text-muted-foreground">
        Some dishes may contain wheat, soya, dairy, nuts and other allergens. Please tell us about any allergies before ordering — {business.phone}.
      </p>
    </main>
  );
}
