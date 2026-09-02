import type { ProductCategory } from "@/data/products";

export type CategoryGuide = {
  eyebrow: string;
  intro: string;
  sizingTitle: string;
  sizingPoints: string[];
  qcPoints: string[];
  commonIssues: string[];
  filterSteps: string[];
};

export const categoryGuides: Record<ProductCategory, CategoryGuide> = {
  shoes: {
    eyebrow: "Footwear research guide",
    intro:
      "Shoes are the least forgiving category for size errors. Treat the tagged size as a starting point, then compare insole length, toe shape, heel structure, and sole alignment before you judge a listing.",
    sizingTitle: "Sizing: work from measurements, not the box label",
    sizingPoints: [
      "Measure the removable insole of a pair that already fits you and compare heel-to-toe length in millimetres.",
      "Allow for toe shape: a narrow or sharply tapered toe box can feel smaller at the same stated length.",
      "If no insole measurement is visible, ask for one during warehouse QC; do not infer fit from EU/US conversion tables alone.",
    ],
    qcPoints: [
      "Compare the left and right shoe from the front, side, heel, and outsole.",
      "Check toe-box height, panel shape, stitch spacing, sole bonding, heel-tab height, and logo placement.",
      "Look for glue overflow, warped soles, uneven eyelets, colour mismatch, or crushed structure from packing.",
    ],
    commonIssues: [
      "Inconsistent size conversion between batches",
      "Asymmetric toe boxes or heel counters",
      "Uneven sole paint, glue lines, or panel stitching",
      "Materials and colour that differ under warehouse lighting",
    ],
    filterSteps: [
      "Shortlist only listings with multiple buyer QC sets and clear side-profile photos.",
      "Compare the recorded CNY price only after checking that the model and material appear comparable.",
      "Prefer listings where the silhouette and construction can be evaluated before requesting extra measurements.",
    ],
  },
  hoodies: {
    eyebrow: "Hoodie research guide",
    intro:
      "For hoodies, fabric weight and garment measurements matter more than the letter size. Photos can reveal print and construction problems, but they cannot prove fabric composition or how the item changes after washing.",
    sizingTitle: "Sizing: compare the garment flat",
    sizingPoints: [
      "Compare chest width, body length, shoulder width, and sleeve length with a hoodie you own.",
      "Ask whether measurements are garment measurements or body recommendations; they are not interchangeable.",
      "Consider intended fit and possible shrinkage instead of automatically sizing up from the label.",
    ],
    qcPoints: [
      "Check print or embroidery position against seams, pockets, and the centre line.",
      "Inspect hood shape, drawcord exits, ribbing, cuffs, zipper alignment, and pocket symmetry.",
      "Use close-ups to look for skipped stitches, loose threads, print cracking, staining, and uneven dye.",
    ],
    commonIssues: [
      "Short body or sleeves despite a large size label",
      "Thin fleece or fabric weight that is not shown",
      "Crooked prints, uneven embroidery, or misaligned zippers",
      "Ribbing and body fabric with visibly different colour",
    ],
    filterSteps: [
      "Eliminate listings without usable flat measurements or enough detail to request them later.",
      "Compare price together with construction type: pullover, zip, embroidery, and fabric weight are different cost drivers.",
      "Use QC sets to check repeatability across buyers, not to assume your batch will be identical.",
    ],
  },
  tshirts: {
    eyebrow: "T-shirt research guide",
    intro:
      "T-shirts look simple, but small differences in shoulder width, body length, fabric weight, and print placement strongly affect fit. A clear size chart and flat QC photos are more useful than the stated S–XL label.",
    sizingTitle: "Sizing: check the shape as well as the size",
    sizingPoints: [
      "Compare pit-to-pit width, shoulder width, body length, and sleeve opening with a well-fitting T-shirt.",
      "Boxy and oversized cuts need different target measurements from a regular fit; do not compare labels alone.",
      "Allow for cotton shrinkage when the seller does not state whether the fabric is pre-shrunk.",
    ],
    qcPoints: [
      "Check that the neck rib sits flat and that shoulder and side seams are not twisting.",
      "Measure graphic position from the collar and side seams; inspect edges for blur, cracking, or incomplete ink.",
      "Look for fabric show-through, stains, needle holes, puckering, and uneven sleeve openings.",
    ],
    commonIssues: [
      "Body length or shoulder width unlike the advertised fit",
      "Thin fabric and visible underlayers",
      "Off-centre graphics or inconsistent print scale",
      "Wavy collars, twisted seams, or shrinkage after washing",
    ],
    filterSteps: [
      "Start with the cut you want, then narrow by measurements and only then compare price.",
      "Prefer QC sets that show the whole shirt laid flat plus a close-up of the print and collar.",
      "Treat colour under warehouse lights as approximate and look across several buyer sets for consistency.",
    ],
  },
  accessories: {
    eyebrow: "Accessory research guide",
    intro:
      "Accessories cover very different products, so one checklist cannot fit every item. First identify the functional measurement—belt length, hat circumference, lens width, or jewellery dimensions—then inspect the relevant hardware and finish.",
    sizingTitle: "Sizing: identify the dimension that controls fit",
    sizingPoints: [
      "For belts, compare usable hole range rather than total strap length; for hats, use internal circumference.",
      "For glasses, compare lens width, bridge, and temple length with a frame that fits.",
      "For jewellery and small goods, confirm scale with a ruler photo because isolated product images can be misleading.",
    ],
    qcPoints: [
      "Inspect clasps, hinges, screws, edge paint, engraving, plating, and repeated pattern alignment.",
      "Check paired or symmetrical parts from straight-on views and request a ruler photo when scale is unclear.",
      "Look for scratches, oxidation, rough edges, loose hardware, uneven coating, and missing components.",
    ],
    commonIssues: [
      "Ambiguous dimensions or one-size claims",
      "Lightweight hardware and loose hinges or clasps",
      "Uneven plating, engraving, edge paint, or pattern placement",
      "Colour and reflectivity that shift under strong lighting",
    ],
    filterSteps: [
      "Separate accessories by function before comparing prices; a cap, belt, and pendant are not meaningful price peers.",
      "Keep listings with a measurable fit range and QC close-ups of the working parts.",
      "Reject items whose use depends on a material or safety claim that cannot be verified visually.",
    ],
  },
  bags: {
    eyebrow: "Bag research guide",
    intro:
      "A bag should be judged as a structure, not only as a front photo. Dimensions, strap drop, opening size, base shape, lining, and hardware determine whether it is practical and whether defects will be obvious in use.",
    sizingTitle: "Sizing: translate dimensions into capacity",
    sizingPoints: [
      "Compare width, height, depth, handle drop, and adjustable strap range with a bag you already use.",
      "Check whether listed dimensions are external; thick walls and narrow openings reduce usable capacity.",
      "Use the dimensions of the largest item you intend to carry—such as a laptop—not a generic small/medium label.",
    ],
    qcPoints: [
      "Compare front, back, side gussets, base, and handle attachment points for symmetry.",
      "Inspect zipper tracks, snaps, buckles, stitching turns, edge paint, lining, and repeated pattern alignment.",
      "Look for collapsed corners, wavy seams, scratched hardware, glue marks, colour transfer, and uneven handle height.",
    ],
    commonIssues: [
      "Dimensions that do not match the expected capacity",
      "Weak structure or misshapen corners after shipping",
      "Rough zippers, scratched hardware, or uneven edge paint",
      "Misaligned patterns, handles, pockets, or stitching",
    ],
    filterSteps: [
      "Filter first by required capacity and carry method, then by material and construction.",
      "Compare prices only between similar sizes and structures; hardware-heavy or lined bags are not direct peers of simple pouches.",
      "Prefer QC evidence showing the base, interior, hardware, and side profile—not only the front panel.",
    ],
  },
  pants: {
    eyebrow: "Pants research guide",
    intro:
      "Pants sizing is multi-dimensional: waist alone cannot predict fit. Rise, thigh, inseam, leg opening, stretch, and intended silhouette all need to work together.",
    sizingTitle: "Sizing: build a full measurement profile",
    sizingPoints: [
      "Compare flat waist, front rise, back rise, thigh, inseam, and leg opening with pants that fit the way you want.",
      "Confirm whether the waist measurement is laid flat or a full circumference and whether an elastic range is relaxed or stretched.",
      "For washed denim and cotton, allow for possible shrinkage; for track pants, check cuff and rise proportions.",
    ],
    qcPoints: [
      "Check the waistband, fly, pockets, side seams, hems, and left-right leg symmetry.",
      "For denim, inspect wash placement and puckering; for track pants, inspect panel and stripe alignment.",
      "Look for twisted legs, uneven hems, skipped stitches, broken hardware, stains, and mismatched fabric panels.",
    ],
    commonIssues: [
      "Waist fits while thigh, rise, or inseam does not",
      "Inconsistent wash or colour between panels",
      "Twisted seams, uneven hems, or misaligned stripes",
      "Elastic and fabric recovery that cannot be judged from photos",
    ],
    filterSteps: [
      "Choose the intended silhouette first—straight, relaxed, cargo, or tapered—then compare a complete measurement set.",
      "Use QC photos to assess construction and symmetry, not to infer stretch or comfort.",
      "Compare recorded prices within the same fabric and construction type, and budget for alteration if the inseam is uncertain.",
    ],
  },
};
