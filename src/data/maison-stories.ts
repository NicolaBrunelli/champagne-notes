export type MaisonStory = {
  history: string[];
  curiosities: string[];
};

// Testi editoriali volutamente senza dati di assemblaggio o di dosaggio, che cambiano
// da una cuvée all'altra e, talvolta, da un'edizione all'altra.
export const maisonStories: Record<string, MaisonStory> = {
  "Alfred Gratien": {
    history: ["Fondata a Épernay nel 1864, Alfred Gratien conserva il carattere di una maison familiare costruita attorno al lavoro paziente in cantina.", "La sua identità è legata a una vinificazione attenta e a un'impronta classica, più raccolta che spettacolare."],
    curiosities: ["La Maison porta ancora il nome del suo fondatore.", "È una delle firme storiche di Épernay, città cuore commerciale della Champagne."],
  },
  "Ayala": {
    history: ["Ayala nasce ad Aÿ nel 1860, in un villaggio profondamente legato al Pinot Noir e alla storia delle grandi Maison.", "Dopo un lungo percorso internazionale, la maison è entrata nella famiglia Bollinger e continua a interpretare uno stile netto e contemporaneo."],
    curiosities: ["Aÿ compare nel nome stesso della Maison e ne dichiara le radici territoriali.", "La sua cuvée d'ingresso è conosciuta come Brut Majeur."],
  },
  "Bérêche & Fils": {
    history: ["La storia della famiglia Bérêche comincia a Ludes nel 1847. Oggi il domaine lavora vigne distribuite tra Montagne de Reims e Vallée de la Marne.", "Il progetto contemporaneo è diventato un riferimento per chi cerca Champagne di vigneron, legati ai villaggi e a una lettura personale dell'annata."],
    curiosities: ["Ludes è un Premier Cru della Montagne de Reims.", "Le Bérêche sono spesso associate a cuvée dalla forte impronta territoriale."],
  },
  "Billecart-Salmon": {
    history: ["Billecart-Salmon viene fondata a Mareuil-sur-Aÿ nel 1818, in occasione del matrimonio fra Nicolas François Billecart ed Élisabeth Salmon.", "La maison è rimasta familiare per generazioni e ha costruito la propria reputazione su precisione, equilibrio e finezza."],
    curiosities: ["Il nome unisce i cognomi delle due famiglie fondatrici.", "Mareuil-sur-Aÿ è uno dei luoghi chiave della Vallée de la Marne."],
  },
  "Boizel": {
    history: ["La Maison Boizel è nata a Épernay nel 1834 e conserva un racconto familiare che attraversa più generazioni.", "Il suo archivio di vini di riserva è parte essenziale della memoria stilistica della casa."],
    curiosities: ["La sede storica si trova lungo l'Avenue de Champagne di Épernay.", "Le annate di riserva sono una biblioteca liquida per lo chef de cave."],
  },
  "Bollinger": {
    history: ["Bollinger fu fondata nel 1829 ad Aÿ da Hennequin de Villermont, Paul Renaudin e Jacques Bollinger.", "La Maison ha mantenuto nel tempo un forte legame con Aÿ e con l'idea di uno Champagne strutturato, gastronomico e longevo."],
    curiosities: ["L'immagine della Maison è inseparabile da Madame Bollinger, figura simbolo del Novecento champenois.", "Special Cuvée è il nome della sua cuvée emblematica."],
  },
  "Bruno Paillard": {
    history: ["Bruno Paillard ha fondato la propria Maison a Reims nel 1981, scegliendo una via indipendente nel panorama delle grandi firme.", "Il progetto si distingue per un linguaggio contemporaneo e per una forte attenzione alla precisione dell'assemblaggio."],
    curiosities: ["È una delle Maison più giovani della Champagne moderna.", "La bottiglia riporta la data della sboccatura per rendere leggibile il percorso del vino."],
  },
  "Canard-Duchêne": {
    history: ["Canard-Duchêne nasce a Ludes nel 1868 dall'incontro tra Victor Canard e Léonie Duchêne.", "La Maison conserva così una radice diretta nella Montagne de Reims, fra vigne e foreste che circondano il villaggio."],
    curiosities: ["Il suo emblema è un'aquila, richiamo alla storia imperiale francese.", "Ludes è un villaggio Premier Cru."],
  },
  "Cattier": {
    history: ["La famiglia Cattier coltiva vigne a Chigny-les-Roses dal XVIII secolo e ha costruito qui la propria Maison.", "Il lavoro famigliare si muove tra Montagne de Reims e una rete di parcelle selezionate."],
    curiosities: ["Chigny-les-Roses è un Premier Cru della Montagne de Reims.", "La Maison è conosciuta anche per le sue profonde cantine sotterranee."],
  },
  "Charles Heidsieck": {
    history: ["Charles-Camille Heidsieck fondò la Maison a Reims nel 1851. La sua personalità avventurosa contribuì a far conoscere lo Champagne negli Stati Uniti.", "La casa è celebre per una lettura ampia e matura del tempo in cantina, custodita nelle crayères di Reims."],
    curiosities: ["Il fondatore fu soprannominato Champagne Charlie dagli americani.", "Le crayères della Maison fanno parte del paesaggio sotterraneo storico di Reims."],
  },
  "de Venoge": {
    history: ["La Maison de Venoge fu fondata a Épernay nel 1837 da Henri-Marc de Venoge.", "Il suo nome richiama il fiume Venoge, in Svizzera, terra d'origine della famiglia."],
    curiosities: ["La storica etichetta Cordon Bleu è una delle sue immagini più riconoscibili.", "La Maison mantiene la propria sede sulla Avenue de Champagne."],
  },
  "Delamotte": {
    history: ["Delamotte fu fondata a Le Mesnil-sur-Oger nel 1760, nel cuore della Côte des Blancs.", "La Maison condivide oggi una stessa famiglia di valori e una vicinanza storica con Salon, pur mantenendo una propria identità."],
    curiosities: ["Le Mesnil-sur-Oger è uno dei grandi villaggi dello Chardonnay.", "La sua gamma è volutamente concentrata e leggibile."],
  },
  "Deutz": {
    history: ["Deutz nasce ad Aÿ nel 1838 dall'incontro fra William Deutz e Pierre-Hubert Geldermann.", "La Maison ha sviluppato uno stile di sintesi: precisione, finezza e profondità, con Aÿ come centro storico."],
    curiosities: ["I due fondatori erano originari di Aquisgrana, in Germania.", "Aÿ è un Grand Cru storico della Champagne."],
  },
  "Drappier": {
    history: ["La famiglia Drappier è legata a Urville, nella Côte des Bar, dal 1808. Qui la viticoltura ha un volto più meridionale e borgognone.", "La Maison ha reso riconoscibile una voce di territorio che mette spesso il Pinot Noir al centro del racconto."],
    curiosities: ["Urville si trova nell'Aube, nella parte meridionale della denominazione.", "La cuvée Carte d'Or è uno dei nomi storici della Maison."],
  },
  "Duval-Leroy": {
    history: ["Duval-Leroy fu fondata nel 1859 da Armand Duval e Henri Leroy. La Maison ha sede a Vertus, nella Côte des Blancs.", "La lunga storia familiare lega la casa allo Chardonnay e alle vigne gessose della zona."],
    curiosities: ["Vertus è un villaggio importante della Côte des Blancs meridionale.", "Il doppio cognome ricorda i due fondatori."],
  },
  "Fleury": {
    history: ["Fleury nasce a Courteron, nella Côte des Bar, alla fine dell'Ottocento. È una delle voci agricole più riconoscibili dell'Aube.", "La famiglia ha scelto presto la biodinamica, facendo del rapporto con suolo e vigna il centro della propria identità."],
    curiosities: ["Courteron è nel territorio della Côte des Bar.", "La Maison è considerata una pioniera della biodinamica in Champagne."],
  },
  "G.H. Mumm": {
    history: ["G.H. Mumm fu fondata a Reims nel 1827 dai fratelli Mumm, famiglia con radici nel commercio del vino.", "La Maison è diventata uno dei simboli internazionali della Champagne, con una storia fortemente legata alla città di Reims."],
    curiosities: ["Il nastro rosso dell'etichetta richiama la Legion d'onore.", "Cordon Rouge è il nome della sua cuvée più celebre."],
  },
  "Gosset": {
    history: ["La famiglia Gosset è attestata ad Aÿ come viticoltrice fin dal 1584. La Maison rivendica così una delle genealogie più antiche della Champagne.", "Nel corso dei secoli il nome Gosset è rimasto associato a una cultura del vino prima ancora che alla notorietà delle bollicine."],
    curiosities: ["Aÿ è la culla storica della famiglia Gosset.", "Il proprio emblema richiama lo stemma medievale della famiglia."],
  },
  "Henri Giraud": {
    history: ["Henri Giraud è una Maison di Aÿ con radici familiari antiche e un'identità costruita attorno a Pinot Noir, legno e tempo.", "Il suo racconto unisce il villaggio Grand Cru a una ricerca personale sui contenitori e sull'affinamento."],
    curiosities: ["Aÿ è uno dei Grand Cru più celebri per il Pinot Noir.", "Il nome Argonne ricorre nelle cuvée e richiama la foresta da cui proviene il legno scelto dalla Maison."],
  },
  "Jacques Selosse": {
    history: ["Il domaine Jacques Selosse ha sede ad Avize, nella Côte des Blancs. Con Anselme Selosse è diventato uno dei riferimenti più influenti della Champagne di vigneron.", "La sua storia contemporanea ha dato valore a vigne, legno, ossigeno e letture molto personali dello Chardonnay."],
    curiosities: ["Avize è un Grand Cru della Côte des Blancs.", "Initial e Substance sono nomi diventati iconici fra gli appassionati."],
  },
  "Jacquesson": {
    history: ["Jacquesson fu fondata a Châlons-sur-Marne nel 1798 da Memmie Jacquesson. È una delle Maison storiche che ha scelto nel tempo una strada molto personale.", "Il progetto contemporaneo privilegia edizioni numerate e una lettura puntuale delle vendemmie."],
    curiosities: ["La bottiglia a numero della serie 700 sostituisce la logica della cuvée senza annata tradizionale.", "La Maison è legata storicamente a innovazioni tecniche del XIX secolo."],
  },
  "Joseph Perrier": {
    history: ["Joseph Perrier fu fondata a Châlons-en-Champagne nel 1825. La Maison mantiene un profilo discreto e una relazione stretta con le proprie cantine di gesso.", "Il suo stile è costruito attorno alla finezza e alla maturazione lenta, lontano dall'enfasi."],
    curiosities: ["Le sue crayères si estendono per chilometri nel sottosuolo di Châlons.", "Cuvée Royale è il nome storico della linea della Maison."],
  },
  "Krug": {
    history: ["Joseph Krug fondò la Maison a Reims nel 1843 con l'idea di offrire ogni anno uno Champagne di grande generosità, indipendente dalle difficoltà di una singola vendemmia.", "La famiglia ha trasformato questa intuizione in un archivio di vini e in un metodo di assemblaggio tramandato per generazioni."],
    curiosities: ["Ogni bottiglia Krug porta un numero di edizione che ne racconta l'identità.", "Clos du Mesnil e Clos d'Ambonnay sono due rarissime espressioni di singolo clos della Maison."],
  },
  "Laherte Frères": {
    history: ["Laherte Frères è un domaine familiare di Chavot, nella Vallée de la Marne, fondato nel 1889.", "Sette generazioni hanno costruito una lettura ampia dei vitigni champenois e delle parcelle di famiglia."],
    curiosities: ["La cuvée Les 7 riunisce i sette vitigni autorizzati in Champagne.", "Chavot è una frazione affacciata su Épernay."],
  },
  "Lanson": {
    history: ["Lanson nacque a Reims nel 1760 per iniziativa di François Delamotte. È una delle grandi Maison la cui storia accompagna l'espansione internazionale della Champagne.", "La croce di Malta è rimasta il suo segno distintivo, in memoria dell'appartenenza del fondatore all'Ordine di Malta."],
    curiosities: ["Le Black Label e Le Rosé sono fra i nomi chiave della Maison.", "La croce rossa in etichetta è un segno storico, non un semplice elemento decorativo."],
  },
  "Larmandier-Bernier": {
    history: ["Larmandier-Bernier è un domaine familiare di Vertus, nella Côte des Blancs, con vigne in alcuni dei villaggi più vocati allo Chardonnay.", "Il progetto mette al centro parcella, suolo gessoso e una vinificazione di precisione."],
    curiosities: ["Vertus è il paese dove la famiglia ha il proprio centro operativo.", "Terre de Vertus racconta esplicitamente il legame con questo villaggio."],
  },
  "Leclerc Briant": {
    history: ["Leclerc Briant è una Maison fondata a Cumières nel 1872, oggi con sede a Épernay. La sua identità contemporanea è profondamente legata alla viticoltura biologica e biodinamica.", "La casa lavora su parcelle e singoli luoghi, con un linguaggio molto attento alla materia agricola."],
    curiosities: ["Cumières è uno dei villaggi importanti della Vallée de la Marne.", "Abyss è una cuvée pensata per affinare parte del proprio percorso sott'acqua."],
  },
  "Louis Roederer": {
    history: ["La Maison nacque nel 1776 come Dubois Père & Fils e prese il nome Louis Roederer nel 1833. Da Reims ha costruito un modello fondato anche su un importante patrimonio di vigne proprie.", "La sua storia intreccia il lavoro di maison con una forte attenzione ai lieux-dits e alle grandi annate."],
    curiosities: ["Cristal fu creato nel 1876 per lo zar Alessandro II di Russia.", "La bottiglia trasparente di Cristal è diventata un'icona del lusso enologico."],
  },
  "Moët & Chandon": {
    history: ["Claude Moët fondò la Maison a Épernay nel 1743. Jean-Rémy Moët ne allargò presto il prestigio presso le corti e nei mercati europei.", "La casa è oggi una delle immagini più conosciute dello Champagne nel mondo e conserva a Épernay una storia profondamente legata all'Avenue de Champagne."],
    curiosities: ["Napoleone Bonaparte fu ospite della famiglia Moët e contribuì alla leggenda della Maison.", "Dom Pérignon è la sua cuvée di prestigio più celebre."],
  },
  "Nicolas Feuillatte": {
    history: ["Nicolas Feuillatte nasce negli anni Settanta dall'iniziativa dell'omonimo imprenditore e da una rete di viticoltori della Champagne.", "La sua crescita racconta un modello cooperativo moderno, capace di portare molte vigne della regione sotto un'unica firma."],
    curiosities: ["Il nome della Maison è quello del suo fondatore, noto anche per la sua vita internazionale.", "Il centro produttivo è a Chouilly, nella Côte des Blancs."],
  },
  "Palmer & Co": {
    history: ["Palmer & Co è nata a Reims nel 1948 dall'unione di sette famiglie di viticoltori, soprattutto della Montagne de Reims.", "La Maison sviluppa un'identità collettiva, fatta di conferimenti selezionati e memoria condivisa delle annate."],
    curiosities: ["Il numero sette è parte del racconto fondativo della Maison.", "La cantina si trova a Reims, città delle grandi crayères."],
  },
  "Pascal Agrapart": {
    history: ["Pascal Agrapart lavora le vigne di famiglia ad Avize, nel cuore della Côte des Blancs. Il domaine è diventato un riferimento per la precisione con cui racconta i diversi cru di Chardonnay.", "La sua storia è quella di una maison-vigneron radicata in pochi villaggi e in una lettura molto diretta del gesso."],
    curiosities: ["Avizoise è un nome che dichiara il legame con Avize.", "Le parcelle di Avize, Cramant, Oger e Oiry sono al centro del suo universo."],
  },
  "Philipponnat": {
    history: ["La famiglia Philipponnat è documentata in Champagne da secoli e la Maison ha il proprio centro a Mareuil-sur-Aÿ.", "La sua identità contemporanea è inseparabile da Clos des Goisses, una vigna murata di forte pendenza affacciata sulla Marna."],
    curiosities: ["Clos des Goisses è uno dei clos più celebrati della Champagne.", "La pendenza del vigneto è eccezionalmente ripida per la regione."],
  },
  "Pierre Péters": {
    history: ["Pierre Péters è una maison-vigneron di Le Mesnil-sur-Oger, costruita attorno allo Chardonnay della Côte des Blancs.", "Il domaine ha dato continuità a una storia familiare concentrata in alcuni tra i cru più vocati del gesso."],
    curiosities: ["Le Mesnil-sur-Oger è un Grand Cru.", "Cuvée de Réserve è una delle etichette che ha reso noto il domaine."],
  },
  "Piper-Heidsieck": {
    history: ["Piper-Heidsieck si sviluppa a Reims nel XVIII secolo, nella stagione in cui la Champagne comincia a diventare un linguaggio internazionale.", "La Maison porta il doppio nome di Florens-Louis Heidsieck e Henri Piper, figure centrali della sua espansione commerciale."],
    curiosities: ["La Maison è presente da tempo nel mondo del cinema e della cultura popolare.", "La bottiglia dal profilo rosso è uno dei suoi segni visivi più riconoscibili."],
  },
  "Pol Roger": {
    history: ["Pol Roger fondò la sua Maison a Épernay nel 1849. Rimasta indipendente e familiare, è cresciuta mantenendo un carattere elegante e misurato.", "La storia della casa è legata al mercato britannico e a una lunga attenzione per le cuvée capaci di maturare nel tempo."],
    curiosities: ["Sir Winston Churchill fu un grande estimatore della Maison.", "La cuvée Sir Winston Churchill è un omaggio alla sua relazione con Pol Roger."],
  },
  "Pommery": {
    history: ["La Maison Pommery nasce a Reims nel 1836, ma il suo volto decisivo fu quello di Louise Pommery, che ne prese la guida nel 1858.", "Madame Pommery contribuì a rendere popolare uno stile più secco e moderno, con un immaginario visivo inconfondibile."],
    curiosities: ["Le immense crayères Pommery sono aperte anche come luogo d'arte contemporanea.", "Cuvée Louise porta il nome di Madame Pommery."],
  },
  "Ruinart": {
    history: ["Ruinart fu fondata nel 1729 da Nicolas Ruinart ed è considerata la prima Maison de Champagne. La sua storia è inseparabile da Reims e dalle crayères che custodiscono il vino.", "Il legame con lo Chardonnay e con la luce del gesso ha dato alla Maison un linguaggio particolarmente riconoscibile."],
    curiosities: ["Le sue crayères sono antiche cave di gesso, patrimonio UNESCO con il paesaggio champenois.", "Blanc Singulier è una delle sue interpretazioni contemporanee dello Chardonnay."],
  },
  "Ruppert-Leroy": {
    history: ["Ruppert-Leroy è un domaine della Côte des Bar fondato da Bénédicte Ruppert ed Emmanuel Leroy. Il progetto ha una scala volutamente artigianale e agricola.", "Le vigne dell'Aube, lavorate con sensibilità biodinamica, sono il punto di partenza di un racconto molto libero e personale."],
    curiosities: ["Il domaine si trova a Essoyes, nell'Aube.", "Le etichette parlano spesso attraverso il nome delle parcelle."],
  },
  "Salon": {
    history: ["Salon nasce dal sogno di Eugène-Aimé Salon: realizzare uno Champagne solo quando l'annata è all'altezza, da Chardonnay di un unico cru, Le Mesnil-sur-Oger.", "La prima annata fu il 1905 e la Maison ha mantenuto una produzione rarissima, fatta di attese e selezioni severe."],
    curiosities: ["Salon esiste soltanto come millesimato.", "Nel Novecento furono prodotti soltanto 37 millesimi Salon."],
  },
  "Taittinger": {
    history: ["La Maison Taittinger porta il nome della famiglia che la acquisì nel 1932. Con Reims come centro, ha costruito un'identità elegante e molto legata allo Chardonnay.", "La storia della casa comprende anche il Château de la Marquetterie, luogo simbolico per la famiglia."],
    curiosities: ["Comtes de Champagne è la cuvée di prestigio della Maison.", "Le cantine Taittinger occupano antiche cave gallo-romane sotto Reims."],
  },
  "Telmont": {
    history: ["Telmont fu fondata a Damery nel 1912 da Henri Lhôpital. È una maison con radici nella Vallée de la Marne e uno sguardo molto esplicito alle scelte ambientali.", "Il progetto contemporaneo lega la qualità del vino alla conversione dei vigneti e a una riduzione dell'impatto dei materiali."],
    curiosities: ["Damery si trova nella Vallée de la Marne, vicino a Épernay.", "La Maison ha scelto una bottiglia verde, più leggera e riciclabile, come gesto concreto di sostenibilità."],
  },
  "Veuve Clicquot": {
    history: ["La Maison fu fondata a Reims nel 1772. Nel 1805 Barbe-Nicole Ponsardin, vedova Clicquot, ne prese la guida e ne trasformò il destino.", "Madame Clicquot rese la maison una potenza commerciale e tecnica, lasciando un'impronta indelebile nella storia dello Champagne."],
    curiosities: ["Le pupitres per il remuage furono sviluppate dalla Maison nel 1816.", "L'etichetta gialla è uno dei segni visivi più riconoscibili dello Champagne."],
  },
  "Vilmart & Cie": {
    history: ["Vilmart & Cie è un domaine familiare fondato a Rilly-la-Montagne nel 1890. Il suo cuore è la Montagne de Reims, con vigneti in villaggi selezionati.", "La famiglia ha costruito una reputazione discreta e solida, molto amata dagli appassionati per la precisione delle proprie cuvée."],
    curiosities: ["Rilly-la-Montagne è un Premier Cru della Montagne de Reims.", "Coeur de Cuvée è una delle etichette emblematiche del domaine."],
  },
  "Dom Pérignon": {
    history: ["Dom Pérignon prende il nome dal monaco benedettino Pierre Pérignon, cellerario dell'abbazia di Hautvillers dal 1668 al 1715. La cuvée contemporanea ne raccoglie l'ambizione: inseguire l'armonia soltanto quando una vendemmia la rende possibile.", "La Maison non produce una cuvée sans année: ogni uscita è un millesimo e, se la vendemmia non risponde ai suoi criteri, semplicemente non viene dichiarata."],
    curiosities: ["Hautvillers, il villaggio dell'abbazia, si trova sui versanti settentrionali della Vallée de la Marne.", "Le Plénitudes raccontano diversi momenti di maturazione di uno stesso millesimo."],
  },
  "Franck Pascal": {
    history: ["Franck Pascal guida con Isabelle un domaine familiare di Baslieux-sous-Châtillon, sulla riva destra della Marna. La famiglia coltiva qui da generazioni e il progetto porta il nome evocativo Des Champagnes pour la Vie.", "Dal 1994 il domaine ha progressivamente scelto agricoltura biologica e biodinamica, ponendo il rapporto con il suolo e con il vivente al centro del lavoro."],
    curiosities: ["Il Meunier è il vitigno-simbolo del territorio di Baslieux-sous-Châtillon.", "Fluence, Reliance e Pacifiance sono nomi che riflettono il linguaggio umano e naturale della maison."],
  },
  "Aurore Casanova": {
    history: ["Aurore Casanova ha creato il domaine con Jean-Baptiste Robinet a partire dalle vigne familiari della Montagne de Reims e da parcelle nelle altre zone della Champagne. La storia nasce dall'incontro fra una ex danzatrice internazionale e il lavoro quotidiano in vigna.", "Il progetto, con sede a Mardeuil, privilegia l'osservazione delle parcelle, il rispetto dell'ambiente e una lettura molto personale dei cru."],
    curiosities: ["Puisieulx, da cui provengono alcune cuvée, è un Grand Cru della Montagne de Reims.", "Il cuore nel segno grafico della Maison rappresenta la cura dedicata alla terra e alle vigne."],
  },
  "Élise Bougy": {
    history: ["Élise Bougy ha ripreso il piccolo domaine di famiglia a Les Mesneux nel 2016, dopo gli studi di enologia. Il suo lavoro collega la Montagne de Reims con alcune parcelle di Le Mesnil-sur-Oger, nella Côte des Blancs.", "La vigna è il punto di partenza di una produzione artigianale, biologica e sempre più orientata a restituire la precisione di ogni singolo lieu-dit."],
    curiosities: ["Le Mont-Chainqueux è una parcella Premier Cru di Les Mesneux, piantata dai nonni di Élise nel 1965.", "Les Coullemets e Chétillon de Haut raccontano invece due luoghi di Le Mesnil-sur-Oger."],
  },
};
