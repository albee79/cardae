import React, { useState } from "react";
import { PRODUCT_TIERS } from "../data";
import { Calculator, Package, Check, ArrowRight, TrendingUp, HelpCircle } from "lucide-react";

export default function QuoteCalculator() {
  const [selectedTierId, setSelectedTierId] = useState<string>("heritage");
  const [quantity, setQuantity] = useState<number>(500);
  const [includePremiumBoxDetail, setIncludePremiumBoxDetail] = useState<boolean>(false);
  const [includeGameMechanics, setIncludeGameMechanics] = useState<boolean>(true);
  const [rushDelivery, setRushDelivery] = useState<boolean>(false);

  const selectedTier = PRODUCT_TIERS.find((t) => t.id === selectedTierId) || PRODUCT_TIERS[1];

  // Adjust quantity dynamically according to min requirement of selected tier
  const handleTierSelect = (id: string) => {
    setSelectedTierId(id);
    const tier = PRODUCT_TIERS.find((t) => t.id === id);
    if (tier && quantity < tier.minOrder) {
      setQuantity(tier.minOrder);
    }
  };

  // Safe manual quantity input handling
  const handleQuantityChange = (val: number) => {
    const min = selectedTier.minOrder;
    if (val < 0) return;
    setQuantity(val);
  };

  // Enforce minimum limit on blur
  const validateQuantityOnBlur = () => {
    if (quantity < selectedTier.minOrder) {
      setQuantity(selectedTier.minOrder);
    }
  };

  // Cost calculations:
  // Base cost multiplier: discounts based on scale volume
  let volumeDiscountFactor = 1.0;
  if (quantity >= 5000) {
    volumeDiscountFactor = 0.8; // 20% discount
  } else if (quantity >= 2500) {
    volumeDiscountFactor = 0.85; // 15% discount
  } else if (quantity >= 1000) {
    volumeDiscountFactor = 0.9; // 10% discount
  } else if (quantity >= 750) {
    volumeDiscountFactor = 0.95; // 5% discount
  }

  const basePriceAdjusted = selectedTier.basePricePerDeck * volumeDiscountFactor;
  let addonPrice = 0;
  
  if (includePremiumBoxDetail) {
    addonPrice += selectedTierId === "story" ? 1.5 : selectedTierId === "heritage" ? 2.5 : 4.0;
  }
  
  // Slide 5 copy: "Optional: light game mechanics (trivia/quiz rules card) at no significant additional cost."
  // So let's keep game mechanics at €0 (or a symbolic €0.05) if toggled
  const gameMechanicsAddon = 0; 

  const finalUnitPrice = basePriceAdjusted + addonPrice + gameMechanicsAddon;
  let totalProjectCost = finalUnitPrice * quantity;

  if (rushDelivery) {
    totalProjectCost *= 1.15; // 15% rush surcharge
  }

  // Estimated retail value (e.g., selling directly)
  // Standard heritage decks retail at €25 to €49 in club shops
  const estimatedRetailPrice = selectedTierId === "story" ? 20 : selectedTierId === "heritage" ? 35 : 60;
  const grossProceeds = estimatedRetailPrice * quantity;
  const netEarnings = grossProceeds - totalProjectCost;
  const calculatedMargin = (netEarnings / grossProceeds) * 100;

  return (
    <div className="w-full max-w-5xl mx-auto rounded-3xl bg-stone-900 border border-stone-800 p-6 md:p-12 shadow-2xl relative">
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="space-y-4 mb-10 text-center">
        <span className="text-amber-500 font-mono tracking-widest text-xs uppercase flex items-center justify-center gap-1.5 font-semibold">
          <Calculator className="w-3.5 h-3.5" /> Budget & Plan Estimator
        </span>
        <h3 className="text-3xl font-serif text-stone-100 font-medium tracking-tight">
          Calculate Your Custom Deck Production
        </h3>
        <p className="text-stone-400 text-sm max-w-xl mx-auto">
          Choose an edition and volume. See live projections, production costs, and expected gross profit based on direct distribution dynamics.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Interactive Panel */}
        <div className="lg:col-span-7 space-y-8">
          {/* 1. Edition Selector */}
          <div className="space-y-3">
            <label className="block text-xs font-mono uppercase tracking-wider text-stone-400 font-semibold">
              Step 1: Choose Your Production Edition Tier
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {PRODUCT_TIERS.map((tier) => (
                <button
                  key={tier.id}
                  onClick={() => handleTierSelect(tier.id)}
                  className={`text-left p-4 rounded-xl border transition-all duration-200 relative ${
                    selectedTierId === tier.id
                      ? "bg-stone-800 border-amber-600 text-stone-100 ring-2 ring-amber-500/15"
                      : "bg-stone-900/40 border-stone-800 hover:border-stone-700 text-stone-400 hover:text-stone-200"
                  }`}
                >
                  {selectedTierId === tier.id && (
                    <span className="absolute top-2 right-2 bg-amber-500 text-stone-950 p-0.5 rounded-full">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                  )}
                  <div className="font-serif text-base font-bold text-stone-100">{tier.name}</div>
                  <div className="text-[10px] uppercase font-mono tracking-wider text-amber-500 mt-1 leading-none font-semibold">
                    {tier.tagline}
                  </div>
                  <div className="text-xs text-stone-500 mt-3 font-mono">
                    Min order: {tier.minOrder} decks
                  </div>
                  <div className="text-sm text-stone-300 font-serif font-bold mt-1">
                    From €{tier.basePricePerDeck} / deck
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Quantity Slider */}
          <div className="space-y-4 bg-stone-950/40 border border-stone-800/80 p-5 rounded-2xl">
            <div className="flex justify-between items-center">
              <label className="text-xs font-mono uppercase tracking-wider text-stone-400 font-semibold">
                Step 2: Total Quantity
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 0)}
                  onBlur={validateQuantityOnBlur}
                  className="w-24 bg-stone-900 border border-stone-700/80 rounded-lg px-2.5 py-1 text-right text-sm font-mono text-stone-100 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-500/20"
                />
                <span className="text-xs font-mono text-stone-500">Decks</span>
              </div>
            </div>

            <input
              type="range"
              min={selectedTier.minOrder}
              max={10000}
              step={selectedTierId === "story" ? 250 : 50}
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="w-full accent-amber-500 h-1 rounded-lg cursor-pointer bg-stone-800"
            />

            <div className="flex justify-between text-[10px] text-stone-500 font-mono">
              <span>Min ({selectedTier.minOrder})</span>
              <span>2,500</span>
              <span>5,000 (20% Vol. Discount)</span>
              <span>10,000+</span>
            </div>
          </div>

          {/* 3. Add-ons & Custom Options */}
          <div className="space-y-3">
            <label className="block text-xs font-mono uppercase tracking-wider text-stone-400 font-semibold">
              Step 3: Custom Packaging & Rule Specifications
            </label>
            <div className="space-y-2">
              {/* Premium Embossing Box add-on */}
              <div
                onClick={() => setIncludePremiumBoxDetail(!includePremiumBoxDetail)}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all duration-150 flex items-center justify-between ${
                  includePremiumBoxDetail
                    ? "bg-amber-600/5 border-amber-600/40 text-stone-100"
                    : "bg-stone-900/20 border-stone-850 text-stone-400 hover:border-stone-800"
                }`}
              >
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={includePremiumBoxDetail}
                    onChange={() => {}} // handled by click div wrapper
                    className="mt-1 accent-amber-500"
                  />
                  <div>
                    <div className="text-sm font-serif text-stone-200">
                      Metallic hot-foil stamping & outer debossing
                    </div>
                    <div className="text-xs text-stone-500 leading-normal">
                      Deep metallic imprint on physical card-backing and custom outer sleeve.
                    </div>
                  </div>
                </div>
                <div className="text-xs font-mono text-amber-500 font-semibold whitespace-nowrap pl-4">
                  +€{selectedTierId === "story" ? "1.50" : selectedTierId === "heritage" ? "2.50" : "4.00"}/deck
                </div>
              </div>

              {/* Game Mechanics Addon */}
              <div
                onClick={() => setIncludeGameMechanics(!includeGameMechanics)}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all duration-150 flex items-center justify-between ${
                  includeGameMechanics
                    ? "bg-amber-600/5 border-amber-600/40 text-stone-100"
                    : "bg-stone-900/20 border-stone-850 text-stone-400 hover:border-stone-800"
                }`}
              >
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={includeGameMechanics}
                    onChange={() => {}} // handled by click div wrapper
                    className="mt-1 accent-amber-500"
                  />
                  <div>
                    <div className="text-sm font-serif text-stone-200 flex items-center gap-1.5">
                      Optional Game Mechanics <span className="text-[10px] bg-amber-500/20 text-amber-400 border border-amber-500/30 px-1.5 py-0.5 rounded font-mono font-medium leading-none">FREE ADDON</span>
                    </div>
                    <div className="text-xs text-stone-500 leading-normal">
                      Includes trivia quiz, custom score layout, or top-trumps gameplay stats printed on Rules Card.
                    </div>
                  </div>
                </div>
                <div className="text-xs font-mono text-stone-500 italic whitespace-nowrap pl-4">
                  €0.00
                </div>
              </div>

              {/* Express Turnaround */}
              <div
                onClick={() => setRushDelivery(!rushDelivery)}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all duration-150 flex items-center justify-between ${
                  rushDelivery
                    ? "bg-amber-600/5 border-amber-600/40 text-stone-100"
                    : "bg-stone-900/20 border-stone-850 text-stone-400 hover:border-stone-800"
                }`}
              >
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={rushDelivery}
                    onChange={() => {}} // handled by click div wrapper
                    className="mt-1 accent-amber-500"
                  />
                  <div>
                    <div className="text-sm font-serif text-stone-200">
                      Expedited Express Turnaround (3 weeks)
                    </div>
                    <div className="text-xs text-stone-500 leading-normal">
                      Reduces standard production time from 4–6 weeks down to 3 weeks.
                    </div>
                  </div>
                </div>
                <div className="text-xs font-mono text-stone-400 font-semibold whitespace-nowrap pl-4">
                  +15% Total
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Right Cost Summary Panel (Calculations Output) */}
        <div className="lg:col-span-5 bg-stone-950 border border-stone-800 rounded-2xl p-6 md:p-8 space-y-6">
          <div className="border-b border-stone-800 pb-4">
            <span className="font-mono text-[9px] uppercase tracking-widest text-stone-500">
              COMMISSION OUTLINE
            </span>
            <div className="text-xl font-serif font-bold text-stone-100 flex items-center gap-2 mt-1">
              <Package className="w-5 h-5 text-amber-500" /> CARDÆ {selectedTier.name}
            </div>
            <p className="text-xs text-stone-400 font-serif italic mt-1 leading-normal">
              "{selectedTier.tagline}" &mdash; {selectedTier.cardCount}
            </p>
          </div>

          <div className="space-y-3.5 text-sm font-mono">
            <div className="flex justify-between text-stone-400">
              <span>Quantity:</span>
              <span className="text-stone-200">{quantity.toLocaleString()} decks</span>
            </div>
            <div className="flex justify-between text-stone-400">
              <span>Standard Base Price:</span>
              <span className="text-stone-200">€{selectedTier.basePricePerDeck.toFixed(2)}/deck</span>
            </div>
            
            {volumeDiscountFactor < 1 && (
              <div className="flex justify-between text-amber-500 text-xs">
                <span>Volume Discount active:</span>
                <span>-{Math.round((1 - volumeDiscountFactor) * 100)}%</span>
              </div>
            )}

            {includePremiumBoxDetail && (
              <div className="flex justify-between text-stone-400 text-xs">
                <span>Box Foiling & Stamp:</span>
                <span className="text-stone-200">
                  +€{selectedTierId === "story" ? "1.50" : selectedTierId === "heritage" ? "2.50" : "4.00"}/deck
                </span>
              </div>
            )}

            <div className="flex justify-between text-stone-400 pb-3 border-b border-stone-850">
              <span>Adjusted Unit Price:</span>
              <span className="text-stone-100 font-semibold">€{finalUnitPrice.toFixed(2)}/deck</span>
            </div>

            {rushDelivery && (
              <div className="flex justify-between text-stone-400 text-xs text-amber-500">
                <span>3-Week Rush Delivery:</span>
                <span>+15%</span>
              </div>
            )}

            <div className="flex justify-between items-baseline pt-2">
              <span className="text-stone-300 font-semibold">Total Production Cost:</span>
              <span className="text-3xl font-serif text-amber-400 font-bold tracking-tight">
                €{Math.round(totalProjectCost).toLocaleString()}
              </span>
            </div>
            <div className="text-[10px] text-right text-stone-500">
              Excluding delivery duties and VAT.
            </div>
          </div>

          {/* Sponsoring / Margin projection info card */}
          <div className="bg-stone-900 border border-stone-800 rounded-xl p-4 space-y-4">
            <div className="flex items-center gap-1.5 text-xs text-amber-400 uppercase font-mono font-bold">
              <TrendingUp className="w-4 h-4" /> Direct Distribution Projection
            </div>
            
            <p className="text-xs text-stone-400 leading-relaxed">
              If sold directly through your club shop or sponsor suites at a typical retail price of <strong className="text-stone-250">€{estimatedRetailPrice}/deck</strong>:
            </p>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <div>
                <span className="text-[9px] text-stone-500 font-mono block uppercase">Gross Revenue</span>
                <span className="text-sm font-bold text-stone-200 font-mono">€{Math.round(grossProceeds).toLocaleString()}</span>
              </div>
              <div>
                <span className="text-[9px] text-stone-500 font-mono block uppercase">Net Profit Margin</span>
                <span className="text-sm font-bold text-emerald-500 font-mono">
                  {calculatedMargin.toFixed(0)}%
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-500 italic border-t border-stone-800 pt-3 leading-normal">
              "We carry zero inventory risk. Middlemen shelf margins are bypassed completely &mdash; keep 100% of the brand control."
            </p>
          </div>

          <div className="pt-2">
            <a
              href="#contact"
              className="w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-sans font-bold text-sm tracking-wide transition-all duration-200 flex items-center justify-center gap-2 group shadow-lg"
            >
              <span>Submit Estimate as Project Brief</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
