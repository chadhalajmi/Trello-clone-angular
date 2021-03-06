import { Injectable } from "@angular/core";
import { CardSchema } from "./cardschema";
@Injectable({
  providedIn: 'root'
})
export class CardStore {
  cards: any = {};
  lastid = -1;
  _addCard(card: CardSchema) {
    card.id = String(++this.lastid);
    this.cards[card.id] = card;
    return card.id;
  }
  getCard(cardId: string) {
    return this.cards[cardId];
  }
  newCard(description: string): string {
    const card = new CardSchema();
    card.description = description;
    return this._addCard(card);
  }
}
