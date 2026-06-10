/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface PitchSlide {
  number: number;
  title: string;
  subtitle?: string;
  points: string[];
  notes?: string;
  visualHighlight?: string;
  metrics?: { label: string; value: string }[];
}

export interface ProductTier {
  id: string;
  name: string;
  tagline: string;
  cardCount: string;
  boxType: string;
  finish: string;
  basePricePerDeck: number;
  minOrder: number;
  features: string[];
}

export interface DemoCard {
  id: string;
  cardNumber: number;
  title: string;
  subtitle: string;
  story: string;
  illustrationType: string;
  bgColor: string;
  accentColor: string;
}

export interface CustomBriefResponse {
  tagline: string;
  colorTheme: string;
  colorHex: string;
  categories: {
    categoryName: string;
    cardCount: number;
    cardItems: {
      title: string;
      description: string;
    }[];
  }[];
  gameMechanic: {
    rulesTitle: string;
    rulesText: string;
  };
  rationale: string;
}
