export const SELECT_ANIMATION_EVENT = "ea:select-animation";

/** Pré-sélectionne une animation dans le formulaire de devis puis scrolle vers lui. */
export function requestQuoteFor(animation: string) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent(SELECT_ANIMATION_EVENT, { detail: animation })
  );
  document
    .getElementById("contact")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}
