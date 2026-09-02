export type VerifiedCategory = "shoes" | "hoodies" | "tshirts" | "accessories" | "bags" | "pants";

export type ProductVerificationSeed = {
  priceCny: number;
  qcPhotoSets: number;
  selectionReason: string;
};

export const verificationShared = {
  dataSource: "StreetStyle by MaisonLooks",
  priceSource: "Price displayed on the StreetStyle product page",
  priceCurrency: "CNY" as const,
  lastVerifiedAt: "2026-09-02T17:50:01+08:00",
  editor: "CSSFinds Editorial Desk",
  verificationMethod:
    "Opened the StreetStyle product page, confirmed that it resolved, recorded the displayed CNY price, and confirmed a visible QC Reviews section with buyer photo sets. Inventory, shipping, returns, and authenticity were not verified.",
};

export const categoryRiskNotes: Record<VerifiedCategory, string> = {
  shoes:
    "Sizing and sole shape can vary by batch. Confirm insole measurements, outsole details, and the exact colorway in the latest QC photos before ordering.",
  hoodies:
    "Measurements, fabric weight, print or embroidery placement, and shrinkage can vary. Request measurements for the exact size and compare the latest QC set.",
  tshirts:
    "Chest width, length, fabric weight, print placement, and color can differ from the listing. Check garment measurements and the latest QC set.",
  accessories:
    "Materials, dimensions, hardware finish, and branding can differ from listing imagery. Confirm compatibility where relevant and inspect the latest QC set.",
  bags:
    "Check dimensions, strap drop, hardware, lining, stitching, and pattern alignment. QC photos are visual evidence and do not authenticate branded goods.",
  pants:
    "Waist, inseam, rise, and fabric can vary. Use garment measurements and inspect seams, pockets, and the latest QC set before ordering.",
};

export const productVerification: Record<string, ProductVerificationSeed> = {
  "shoes-001": {
    priceCny: 238,
    qcPhotoSets: 6,
    selectionReason: "Selected for its distinctive lime-green colorway and six QC sets that make color consistency, panel shape, and finishing easier to compare.",
  },
  "shoes-002": {
    priceCny: 350,
    qcPhotoSets: 5,
    selectionReason: "Selected because the unusual black-and-green color blocking is easy to identify across five QC sets, reducing the chance of comparing the wrong variant.",
  },
  "shoes-004": {
    priceCny: 348,
    qcPhotoSets: 8,
    selectionReason: "Selected for eight QC sets covering a recognizable white-and-navy design where distressing, star placement, and heel finishing deserve close comparison.",
  },
  "shoes-005": {
    priceCny: 153,
    qcPhotoSets: 8,
    selectionReason: "Selected as a straightforward white-and-brown low-top with eight QC sets, useful for comparing toe-box shape, leather texture, and color blocking.",
  },
  "shoes-010": {
    priceCny: 193,
    qcPhotoSets: 2,
    selectionReason: "Selected because the all-black Air Max 95 profile has clear panel and sole details that can be checked across two QC sets.",
  },
  "shoes-011": {
    priceCny: 290,
    qcPhotoSets: 12,
    selectionReason: "Selected for one of the strongest shoe evidence sets in this edit: twelve QC groups for comparing the white base, orange accents, stitching, and shape.",
  },
  "shoes-012": {
    priceCny: 328,
    qcPhotoSets: 2,
    selectionReason: "Selected as a bold red oversized sneaker with two direct QC sets that allow a focused check of color, proportions, and heel construction.",
  },
  "shoes-013": {
    priceCny: 180,
    qcPhotoSets: 3,
    selectionReason: "Selected because three QC sets show the light Hyperspace colorway, knit pattern, sole translucency, and overall silhouette from multiple orders.",
  },
  "shoes-014": {
    priceCny: 185,
    qcPhotoSets: 5,
    selectionReason: "Selected for a simple white-and-red design with five QC sets, making side profile, heel tab, stitching, and red accent consistency easy to compare.",
  },
  "shoes-016": {
    priceCny: 280,
    qcPhotoSets: 8,
    selectionReason: "Selected because denim texture and panel alignment are central to this colorway, and eight QC sets provide useful comparison points.",
  },
  "shoes-017": {
    priceCny: 100,
    qcPhotoSets: 4,
    selectionReason: "Selected as a lower-priced university-blue option with four QC sets for checking the blue tone, toe-box perforations, and panel symmetry.",
  },
  "hoodies-001": {
    priceCny: 196,
    qcPhotoSets: 3,
    selectionReason: "Selected because three QC sets make the beige tone, front lettering, spacing, and garment proportions directly comparable.",
  },
  "hoodies-003": {
    priceCny: 108,
    qcPhotoSets: 5,
    selectionReason: "Selected as a restrained black crewneck with five QC sets that help assess embroidery placement, ribbing, and fabric appearance.",
  },
  "hoodies-004": {
    priceCny: 235,
    qcPhotoSets: 2,
    selectionReason: "Selected for the clear black-and-green contrast and two QC sets that show logo placement and sweatshirt construction without relying on promotional imagery alone.",
  },
  "hoodies-007": {
    priceCny: 189,
    qcPhotoSets: 4,
    selectionReason: "Selected because the light cream color exposes stitching and fabric issues clearly, with four QC sets available for comparison.",
  },
  "hoodies-008": {
    priceCny: 109,
    qcPhotoSets: 12,
    selectionReason: "Selected for twelve QC sets, a deep apparel evidence pool covering grey tone, chest marking, cuffs, and overall fit.",
  },
  "hoodies-013": {
    priceCny: 218,
    qcPhotoSets: 8,
    selectionReason: "Selected because this two-piece tracksuit has eight QC sets that let readers compare both garments, the graffiti placement, and color consistency.",
  },
  "hoodies-014": {
    priceCny: 155,
    qcPhotoSets: 2,
    selectionReason: "Selected as a simple black hoodie where two QC sets still provide direct evidence for badge placement, fabric surface, and proportions.",
  },
  "hoodies-016": {
    priceCny: 158,
    qcPhotoSets: 2,
    selectionReason: "Selected for its practical zip-up construction and two QC sets showing zipper alignment, hood shape, cuffs, and grey fabric tone.",
  },
  "hoodies-017": {
    priceCny: 99,
    qcPhotoSets: 8,
    selectionReason: "Selected as a vivid red option with eight QC sets, useful for checking color consistency, crocodile embroidery, seams, and ribbing.",
  },
  "tshirts-001": {
    priceCny: 86,
    qcPhotoSets: 1,
    selectionReason: "Selected because the navy base and front graphic can be checked in one current QC set, especially for print scale and placement.",
  },
  "tshirts-002": {
    priceCny: 128,
    qcPhotoSets: 8,
    selectionReason: "Selected for eight QC sets that make the large SJ-23 graphic, white fabric tone, collar, and print alignment straightforward to assess.",
  },
  "tshirts-006": {
    priceCny: 89,
    qcPhotoSets: 2,
    selectionReason: "Selected for a detail-heavy football jersey with two QC sets covering sponsor graphics, crest placement, stripes, and color blocking.",
  },
  "tshirts-007": {
    priceCny: 89,
    qcPhotoSets: 10,
    selectionReason: "Selected because ten QC sets provide unusually strong evidence for the safety-pin graphic, black fabric, collar shape, and print consistency.",
  },
  "tshirts-008": {
    priceCny: 69,
    qcPhotoSets: 1,
    selectionReason: "Selected as a clean white-and-gold jersey with one current QC set showing the key graphic, trim, and construction details.",
  },
  "tshirts-013": {
    priceCny: 89,
    qcPhotoSets: 8,
    selectionReason: "Selected for eight QC sets covering a blue Brazil football design where badge, number, trim, and blue tone can be compared.",
  },
  "tshirts-016": {
    priceCny: 103,
    qcPhotoSets: 5,
    selectionReason: "Selected because five QC sets make the yellow trim, logo placement, and multiple color panels easy to verify visually.",
  },
  "tshirts-017": {
    priceCny: 139,
    qcPhotoSets: 2,
    selectionReason: "Selected as a coordinated shorts-and-shirt set with two QC groups that show whether both pieces match in color, embroidery, and scale.",
  },
  "tshirts-018": {
    priceCny: 49,
    qcPhotoSets: 2,
    selectionReason: "Selected as the lowest-priced T-shirt in the edit, with two QC sets that still allow a direct check of cloud print, color, and cut.",
  },
  "accessories-003": {
    priceCny: 490,
    qcPhotoSets: 3,
    selectionReason: "Selected because three QC sets expose the plastic construction, ear-cup finish, headband, packaging, and included parts for comparison.",
  },
  "accessories-005": {
    priceCny: 247,
    qcPhotoSets: 2,
    selectionReason: "Selected for a clearly patterned black-and-grey scarf with two QC sets showing weave, edge finishing, dimensions, and pattern consistency.",
  },
  "accessories-008": {
    priceCny: 69,
    qcPhotoSets: 3,
    selectionReason: "Selected as a simple metal accessory with three QC sets that make link shape, clasp, finish, and packaging easier to inspect.",
  },
  "accessories-016": {
    priceCny: 49,
    qcPhotoSets: 3,
    selectionReason: "Selected because three QC sets show the goggle detail, knit texture, patch placement, and black color consistency on a compact item.",
  },
  "accessories-019": {
    priceCny: 79,
    qcPhotoSets: 8,
    selectionReason: "Selected for eight QC sets that document the bracelet, clasp, metal finish, scale, and boxed presentation across multiple buyer uploads.",
  },
  "bags-001": {
    priceCny: 180,
    qcPhotoSets: 1,
    selectionReason: "Selected because one current QC set shows the tote silhouette, grey pattern alignment, handles, edge paint, and interior more directly than the catalog image.",
  },
  "bags-003": {
    priceCny: 130,
    qcPhotoSets: 1,
    selectionReason: "Selected as a compact blue crossbody with one current QC set covering strap hardware, logo placement, zipper, dimensions, and color.",
  },
  "pants-001": {
    priceCny: 180,
    qcPhotoSets: 8,
    selectionReason: "Selected for eight QC sets that make the pink-and-white panel alignment, waistband, leg shape, and fabric appearance easy to compare.",
  },
  "pants-002": {
    priceCny: 340,
    qcPhotoSets: 6,
    selectionReason: "Selected because six QC sets cover the black track-pant silhouette, Shooters graphics, seams, and waistband construction.",
  },
  "pants-003": {
    priceCny: 119,
    qcPhotoSets: 8,
    selectionReason: "Selected as a practical black short with eight QC sets for checking woven fabric, logo placement, pockets, waistband, and length.",
  },
  "pants-005": {
    priceCny: 158,
    qcPhotoSets: 1,
    selectionReason: "Selected because the cargo layout and olive tone are visible in one current QC set, allowing a focused check of pockets, seams, and leg shape.",
  },
  "pants-008": {
    priceCny: 69,
    qcPhotoSets: 1,
    selectionReason: "Selected as an affordable embroidered short with one current QC set showing the logo, fabric surface, waistband, and overall cut.",
  },
  "pants-013": {
    priceCny: 169,
    qcPhotoSets: 8,
    selectionReason: "Selected for eight QC sets that document the black track-pant cut, CRTZ graphics, cuff shape, seams, and fabric finish.",
  },
};
