//ITPM Assignment 01 - Positive and negative functional test cases

import { test, expect } from "@playwright/test";

const testCases = [
  {
    id: "Pos_Fun_001",
    input: "meeka hariyata vaeda karanavaadha?",
    expectedOutput: "මේක හරියට වැඩ කරනවාද?",
  },
  {
    id: "Pos_Fun_002",
    input: "aayuboovan!",
    expectedOutput: "ආයුබෝවන්!",
  },
  {
    id: "Pos_Fun_003",
    input: "mata bath oonee.",
    expectedOutput: "මට බත් ඕනේ.",
  },
  {
    id: "Pos_Fun_004",
    input: "oyaa hari, ehenam api yamu.",
    expectedOutput: "ඔයා හරි, එහෙනම් අපි යමු.",
  },
  {
    id: "Pos_Fun_005",
    input: "hari, mama yannam",
    expectedOutput: "හරි, මම යන්නම්",
  },
  {
    id: "Pos_Fun_006",
    input: "oyaa enavaanam mama balan innavaa.",
    expectedOutput: "ඔයා එනවානම් මම බලන් ඉන්නවා.",
  },
  {
    id: "Pos_Fun_007",
    input: "veelava kiyadha?",
    expectedOutput: "වේලව කියද?",
  },
  {
    id: "Pos_Fun_008",
    input: "vahaama enna.",
    expectedOutput: "වහාම එන්න.",
  },
  {
    id: "Pos_Fun_009",
    input: "mama ehema karanavaa.",
    expectedOutput: "මම එහෙම කරනවා.",
  },
  {
    id: "Pos_Fun_010",
    input: "mama ehema karannee naehae.",
    expectedOutput: "මම එහෙම කරන්නේ නැහැ.",
  },
  {
    id: "Pos_Fun_011",
    input: "karuNaakaralaa eeka dhenna",
    expectedOutput: "කරුණාකරලා ඒක දෙන්න",
  },
  {
    id: "Pos_Fun_012",
    input: "mata udhavvak karanna puLuvandha?",
    expectedOutput: "මට උදව්වක් කරන්න පුළුවන්ද?",
  },
  {
    id: "Pos_Fun_013",
    input: "eeyi,ooka dhiipan.",
    expectedOutput: "ඒයි,ඕක දීපන්.",
  },
  {
    id: "Pos_Fun_014",
    input: "mata baya hithenavaa.",
    expectedOutput: "මට බය හිතෙනවා.",
  },
  {
    id: "Pos_Fun_015",
    input: "hariyata vaeda karanna.",
    expectedOutput: "හරියට වැඩ කරන්න.",
  },
  {
    id: "Pos_Fun_016",
    input: "mata vathura bonna oonee.",
    expectedOutput: "මට වතුර බොන්න ඕනේ.",
  },
  {
    id: "Pos_Fun_017",
    input: "mama iiyee gaallee giyaa.",
    expectedOutput: "මම ඊයේ ගාල්ලේ ගියා.",
  },
  {
    id: "Pos_Fun_018",
    input: "mama heta kadeeta yanavaa.",
    expectedOutput: "මම හෙට කඩේට යනවා.",
  },
  {
    id: "Pos_Fun_019",
    input: "api supermarket yamu.",
    expectedOutput: "අපි supermarket යමු.",
  },
  {
    id: "Pos_Fun_020",
    input: "api imu.",
    expectedOutput: "අපි ඉමු. ",
  },
  {
    id: "Pos_Fun_021",
    input: "zoom meeting ekak thiyenavaa.",
    expectedOutput: "zoom meeting එකක් තියෙනවා. ",
  },
  {
    id: "Pos_Fun_022",
    input: "ooka dhenna!",
    expectedOutput: "ඕක දෙන්න!",
  },
  {
    id: "Pos_Fun_023",
    input: "mata Rs. 2000 dhenna.",
    expectedOutput: "මට Rs. 2000 දෙන්න.",
  },
  {
    id: "Pos_Fun_024",
    input: "Rs 1000 January 15 amathakayi.",
    expectedOutput: "Rs 1000 January 15 අමතකයි.",
  },
  {
    id: "Neg_Fun_001",
    input: "mamagedharayanavaa",
    expectedOutput: "මම ගෙදර යනවා",
  },
  {
    id: "Neg_Fun_002",
    input: "Thx machan",
    expectedOutput: "(Should remain unchanged or incorrectly transliterated)",
  },
  {
    id: "Neg_Fun_003",
    input: "aBcDeFgHiJ",
    expectedOutput: "(Should produce no meaningful output)",
  },
  {
    id: "Neg_Fun_004",
    input: "I am campus yanavaa and mata paan oonee",
    expectedOutput: "මම campus යනවා සහ මට පාන් ඕනේ",
  },
  {
    id: "Neg_Fun_005",
    input: "@^&*$mama enavaa",
    expectedOutput: "(Should remain unchanged or cause error)",
  },
  {
    id: "Neg_Fun_006",
    input: "mam geder yanwa",
    expectedOutput: "(Should produce incorrect or no output)",
  },
  {
    id: "Neg_Fun_007",
    input: "MaMa GeDhArA YaNaVaA",
    expectedOutput: "(May produce inconsistent output)",
  },
  {
    id: "Neg_Fun_008",
    input: "ASAP message ekak evanna.",
    expectedOutput: "(Abbreviation may not be recognized)",
  },
  {
    id: "Neg_Fun_009",
    input: "meeka dhenna!!!???",
    expectedOutput: "(May break formatting or produce odd output)",
  },
  {
    id: "Neg_Fun_010",
    input: "mamagedharayanavaamataooneekaeemahadhanne",
    expectedOutput: "(Should fail to segment or translate)",
  },
  {
    id: "Pos_UI_001",
    input: "mama gedhara yanavaa.",
    expectedOutput: "Output updates character-by-character during backspacing",
  },
];

for (const tc of testCases) {
  test(tc.id, async ({ page }) => {
    await page.goto("https://www.swifttranslator.com/");
    const inputBox = page.locator(
      'textarea[placeholder="Input Your Singlish Text Here."]',
    );
    const outputBox = page
      .locator('div:has(> div.panel-title:has-text("Sinhala")) div.w-full.h-80')
      .first();
    await inputBox.fill(tc.input);
    //In here check expected output exactly matches the output
    await expect(outputBox).toContainText(tc.expectedOutput, {
      timeout: 15000,
    });
  });
}
