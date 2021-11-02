import frontPage from "../../frontPage.json";

export type informationCardContent = {
    readonly card_slug: string;
    readonly card_title: string;
    readonly card_subtitle: string;
    readonly card_summary: string;
    readonly card_image: string;

  };
  
  const cardMap: { [key: string]: informationCardContent } = generateCardMap();
  
  function generateCardMap(): { [key: string]: informationCardContent } {
    let result: { [key: string]: informationCardContent } = {};
    for (const card of frontPage.information_cards) {
      result[card.card_slug] = card;
    }
    return result;
  }
  
  export function getCard(slug: string) {
    return cardMap[slug];
  }
  
  export function listCards(): informationCardContent[] {
    return frontPage.information_cards;
  }
  