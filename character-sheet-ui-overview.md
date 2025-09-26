# World of Darkness Character Sheet UI — Comprehensive Overview

This Svelte-based UI implements interactive character sheets for World of Darkness, supporting Vampire, Werewolf, Mage, and Human types. For a web project, this module should be placed under `/sheets` (e.g., `domain.com/sheets`).

---

## Architecture

- **Framework:** Svelte + TypeScript
- **Main Entry:** [`App.svelte`](ui-src/src/App.svelte:1), [`main.ts`](ui-src/src/main.ts:1)
- **Styling:** Tailwind CSS ([`app.css`](ui-src/src/app.css:1))
- **Constants & Types:** [`constants.ts`](ui-src/src/constants.ts:1) (interfaces for all sheet types, enums, labels)
- **Sidebar:** Dice roller, roll history ([`Sidebar.svelte`](ui-src/src/Sidebar.svelte:1))

---

## Core Components

- **App.svelte:** Main layout, message/event handling, sheet visibility, routing to type-specific sections.
- **Attributes.svelte:** Physical, Social, Mental attributes (dot-based editing).
- **Skills.svelte:** Talents, Skills, Knowledges (dot-based editing, supports human-specific abilities).
- **VampireSection.svelte:** Clan, generation, blood pool, humanity, disciplines, vampire abilities.
- **WerewolfSection.svelte:** Tribe, auspice, breed, rage, gnosis, renown, gifts, werewolf abilities.
- **MageSection.svelte:** Tradition, essence, spheres, mage stats, focus items, mage abilities.
- **HumanSection.svelte:** Gender, age, willpower, experience, other traits, human abilities.
- **Sidebar.svelte:** Dice roller (attribute/ability selection, pool/difficulty, note), roll history (timestamp, pool, result).

---

## Data Model

- **CharacterSheet:**  
  - Basic info: id, name, type, player, chronicle, concept  
  - Attributes: strength, dexterity, stamina, charisma, manipulation, appearance, perception, intelligence, wits  
  - Talents, Skills, Knowledges (see [`constants.ts`](ui-src/src/constants.ts:44))
  - Health levels, backgrounds, timestamps
  - Type-specific: `vampire`, `werewolf`, `mage`, `human` (each with their own fields)

- **RollResult / FormattedRollResult:**  
  - Dice pool, difficulty, rolls, result, timestamp, note

---

## UI Features

- **Dynamic Sections:** Renders type-specific sheets (Vampire, Werewolf, Mage, Human) based on character type.
- **Dot Controls:** All stats/abilities use dot-based controls for intuitive editing.
- **Dice Roller:** Select attribute/ability, set pool/difficulty, add note, view roll history.
- **Responsive Layout:** Main sheet and sidebar, mobile-friendly.
- **Custom Scrollbars:** Tailwind-based, styled for dark theme.

---

## Integration Notes

- **Event Handling:**  
  - Listens for messages (`window.addEventListener('message', ...)`) for sheet data and updates.
  - Sends updates via `fetch` to game backend (replace with REST API for web).
- **Routing:**  
  - For web, mount this UI under `/sheets` route.
- **Extensibility:**  
  - Add new sheet types or abilities by extending interfaces and components.
  - Styles are modular and can be themed.

---

## Development

- **Setup:**  
  - Install dependencies (`yarn install`)
  - Start dev server (`yarn dev`)
  - Build for production (`yarn build`)
- **Customization:**  
  - Add/modify components in `src/`
  - Update constants/types in `constants.ts`
  - Tailwind config for styling

---

## File Map

- `src/App.svelte` — Main UI logic, routing, event handling
- `src/main.ts` — Entry point
- `src/Attributes.svelte` — Attribute editing
- `src/Skills.svelte` — Ability editing
- `src/VampireSection.svelte` — Vampire sheet
- `src/WerewolfSection.svelte` — Werewolf sheet
- `src/MageSection.svelte` — Mage sheet
- `src/HumanSection.svelte` — Human sheet
- `src/Sidebar.svelte` — Dice roller, roll history
- `src/constants.ts` — Data models, enums, labels
- `src/app.css` — Tailwind and custom styles

---

## Migration Guidance

- **For a web project:**  
  - Move all Svelte components and `constants.ts` under `/sheets` route.
  - Replace game-specific event/fetch logic with REST API calls to backend.
  - Use the provided interfaces for backend/frontend contract.
  - Sidebar dice roller can be adapted for web dice logic or API integration.
