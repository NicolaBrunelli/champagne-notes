export const aromas = [
  ['mela', 'Mela', '🍏'], ['pera', 'Pera', '🍐'], ['pesca-bianca', 'Pesca bianca', '🍑'], ['limone', 'Limone', '🍋'],
  ['pompelmo', 'Pompelmo', '🍊'], ['cedro', 'Cedro', '🍋'], ['arancia-amara', 'Arancia amara', '🍊'], ['ananas', 'Ananas', '🍍'],
  ['mango', 'Mango', '🥭'], ['albicocca', 'Albicocca', '🍑'], ['susina', 'Susina', '🟣'], ['fragola', 'Fragola', '🍓'],
  ['lampone', 'Lampone', '🫐'], ['ciliegia', 'Ciliegia', '🍒'], ['ribes', 'Ribes', '🔴'], ['biancospino', 'Biancospino', '🌿'],
  ['acacia', 'Acacia', '🌼'], ['tiglio', 'Tiglio', '🌿'], ['fiore-arancio', "Fiore d'arancio", '🌼'], ['crosta-pane', 'Crosta di pane', '🍞'],
  ['pane-fresco', 'Pane fresco', '🥖'], ['brioche', 'Brioche', '🥐'], ['croissant', 'Croissant', '🥐'], ['biscotto', 'Biscotto', '🍪'],
  ['pasta-frolla', 'Pasta frolla', '🥧'], ['burro', 'Burro', '🧈'], ['nocciola-tostata', 'Nocciola tostata', '🌰'], ['mandorla', 'Mandorla', '🌰'],
  ['noce', 'Noce', '🌰'], ['fichi-secchi', 'Fichi secchi', '🫓'], ['datteri', 'Datteri', '🟤'], ['vaniglia', 'Vaniglia', '🌱'],
  ['cannella', 'Cannella', '🪵'], ['liquirizia', 'Liquirizia', '🖤'], ['miele', 'Miele', '🍯'], ['cera-api', "Cera d'api", '🐝'],
  ['panpepato', 'Panpepato', '🍰'], ['sottobosco', 'Sottobosco', '🌲'], ['funghi', 'Funghi', '🍄'], ['torrefazione', 'Note di torrefazione', '🔥'],
  ['cacao', 'Cacao', '🍫'], ['pietra-focaia', 'Pietra focaia', '🪨'], ['gesso', 'Gesso', '⬜'], ['grafite', 'Grafite', '✏️'],
  ['saline', 'Note saline', '🌊'], ['iodate', 'Note iodate', '🦪'], ['zenzero', 'Zenzero fresco', '🫚'], ['lemongrass', 'Lemongrass / citronella', '🌾'],
  ['te-verde', 'Tè verde o tè matcha', '🍵'], ['verbena', 'Verbena / erba luigia', '🌿'], ['fieno', 'Fieno secco / paglia', '🌾'], ['tabacco', 'Tabacco biondo', '🍂'],
  ['cuoio', 'Cuoio / pelle scamosciata', '🧤'], ['zafferano', 'Zafferano', '🟠'], ['toffee', 'Caramello salato / toffee', '🍬'], ['moka', 'Moka / caffè in grani', '☕'],
  ['guscio-ostrica', "Guscio d'ostrica", '🦪'], ['pietra-bagnata', 'Pietra bagnata / idrocarburo', '💧'], ['smalto', 'Smalto / acetato', '🧪'], ['ceralacca', 'Cera da mobili / ceralacca', '🕯️'],
  ['chinotto', 'Scorza di chinotto', '🍊'], ['rabarbaro', 'Rabarbaro', '🌱'], ['tartufo-bianco', 'Tartufo bianco', '🍄'], ['parmigiano', 'Formaggio a pasta dura / parmigiano', '🧀'],
  ['fumogeno', 'Fumogeno / polvere da sparo', '💨'], ['gelsomino', 'Gelsomino', '🌸'], ['melagrana', 'Melagrana', '🔴'], ['malto', "Malto d'orzo / birra artigianale", '🍺'],
  ['lanolina', 'Lanolina', '🐑'], ['mela-cotogna', 'Mela cotogna / confettura di mela', '🍎'],
] as const;

export type AromaId = (typeof aromas)[number][0];
export const aromaIds = new Set<string>(aromas.map(([id]) => id));
export const aromaById = new Map<string, { label: string; emoji: string }>(aromas.map(([id, label, emoji]) => [id, { label, emoji }]));
