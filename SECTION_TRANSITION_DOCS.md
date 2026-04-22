# Dark Luxury Automotive Detailing - Section Transition

Světelný přechod mezi sekcemi simulující odlesk na vyleštěném laku automobilu.

## 🎨 Co to dělá

Vytváří realistický efekt světelného odlesku, který:
- Vypadá jako světlo odrážející se od dokonale vyleštěného laku
- Má jemný modrý nádech (nízká saturace)
- Je nejsilnější uprostřed a plynule mizí do stran
- Pod sebou má jemnou "mlhu" (fog effect)
- Jemně "dýchá" (volitelná animace)

## 🚀 Použití

### React / Next.js

```tsx
import SectionTransition from '@/components/ui/SectionTransition';

export default function Page() {
  return (
    <>
      <section className="section-dark">
        {/* Obsah sekce */}
      </section>

      <SectionTransition />

      <section className="section-dark">
        {/* Obsah další sekce */}
      </section>
    </>
  );
}
```

### Čistý HTML

```html
<section class="section section-dark">
  <!-- Obsah -->
</section>

<div class="section-transition"></div>

<section class="section section-dark">
  <!-- Obsah -->
</section>
```

## ⚙️ Varianty

### Intenzita světla

```tsx
// Výchozí (vyvážené)
<SectionTransition />

// Subtilní (jemnější)
<SectionTransition variant="subtle" />

// Výrazné (silnější)
<SectionTransition variant="strong" />
```

### Barevné varianty

```tsx
// Výchozí (chladná modrá)
<SectionTransition />

// Teplá zlatá (premium)
<SectionTransition color="warm" />

// Studená stříbrná
<SectionTransition color="cool" />
```

### Animace

```tsx
// S animací (výchozí)
<SectionTransition />

// Bez animace (statické)
<SectionTransition animated={false} />
```

### Kombinace

```tsx
<SectionTransition 
  variant="strong" 
  color="warm" 
  animated={true} 
/>
```

## 🔧 Vlastní úprava

Můžeš upravit CSS proměnné pro jemnější kontrolu:

```css
.section-transition {
  --glow-intensity: 0.5;      /* 0.2 - 0.8 */
  --glow-width: 70%;           /* 50% - 100% */
  --glow-height: 150px;        /* 80px - 200px */
  --glow-blur: 50px;           /* 25px - 80px */
  --fog-intensity: 0.1;        /* 0.04 - 0.15 */
  --animation-duration: 6s;    /* 5s - 12s */
}
```

## 📐 Jak to funguje

### Vrstva 1: Hlavní světelný odlesk
- Používá `radial-gradient` s ellipse tvarem
- Simuluje horizontální světelný pás
- `filter: blur()` vytváří měkký přechod
- `scaleY(1.2)` dodává lehké zakřivení
- `mix-blend-mode: screen` pro realistické světlo

### Vrstva 2: Fog efekt
- Širší a rozmazanější gradient pod hlavním světlem
- Silnější blur (60px) pro mlhový efekt
- Pomalejší animace než hlavní světlo
- Propojuje sekce jemným přechodem

### Animace
- `glowPulse`: Jemné "dýchání" hlavního světla
- `fogPulse`: Pomalejší pohyb mlhy
- Obě běží nekonečně s ease-in-out
- Nezasahují do čitelnosti obsahu

## 📱 Responzivita

Efekt se automaticky přizpůsobuje:
- Desktop: plná šířka a intenzita
- Tablet: menší výška, zachovaná šířka
- Mobil: optimalizovaná velikost a blur

## 🎯 Best Practices

### ✅ Doporučeno
- Použij mezi dark sekcemi s podobným pozadím
- Kombinuj s minimalistickým designem
- Nech světlu dostatek prostoru
- Používej konzistentně napříč stránkou

### ❌ Nedoporučeno
- Mezi světlými sekcemi (není vidět)
- S velmi barevným pozadím (ruší efekt)
- Příliš často za sebou (ztrácí se dojem)
- S jinými výraznými efekty (konkuruje si)

## 🎨 Ukázka v prohlížeči

Otevři soubor: `public/section-transition-example.html`

## 📊 Výkon

- Čisté CSS, žádný JavaScript
- Využívá GPU akceleraci (transform, filter)
- Minimální vliv na výkon stránky
- Vhodné i pro mobilní zařízení

## 🔍 Technické detaily

**Použité techniky:**
- CSS Custom Properties (proměnné)
- Radial gradients (ellipse)
- Filter: blur()
- Transform: scale()
- Mix-blend-mode: screen
- CSS animations
- Pseudo-elementy (::before, ::after)

**Proč to funguje:**
1. Elliptický gradient vytváří horizontální tvar
2. Blur rozmazává hrany jako skutečné světlo
3. Multiple gradient stops simulují fade-out
4. Screen blend mode zesvětluje jako světlo
5. Scale transform dodává zakřivení
6. Animace přidává živost bez rušení

## 💡 Tipy pro integraci

### V Next.js projektu (app router)
```tsx
// page.tsx
import SectionTransition from '@/components/ui/SectionTransition';

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionTransition />
      <Services />
      <SectionTransition variant="subtle" />
      <About />
    </main>
  );
}
```

### S Tailwind CSS
```tsx
<SectionTransition className="my-8 lg:my-16" />
```

### Podmíněné zobrazení
```tsx
{showTransition && <SectionTransition />}
```

## 🎭 Varianty pro různé situace

```tsx
// Hero -> Services: výrazné
<SectionTransition variant="strong" />

// Services -> About: jemné
<SectionTransition variant="subtle" />

// Premium sekce: zlatá
<SectionTransition color="warm" variant="strong" />

// Tech sekce: stříbrná
<SectionTransition color="cool" />

// Mobile/Accessibility: bez animace
<SectionTransition animated={false} />
```

---

**Vytvořeno pro:** MN-Shine Dark Luxury Detailing  
**Styl:** Automotive Premium  
**Účel:** Elegantní přechody mezi sekcemi
