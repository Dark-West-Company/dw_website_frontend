/** Pass user data from layout to sheets page using SvelteKit's load function */
export function load({ parent }) {
  return parent().then(({ characterInfo }) => ({
    sheets: characterInfo ?? [],
    characters:
      characterInfo?.map((sheet) => ({
        id: sheet.character_id,
        name: sheet.name,
        type: sheet.character_type,
      })) ?? [],
  }));
}
