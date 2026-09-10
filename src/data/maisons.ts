export type MaisonArea = 'Côte des Blancs' | 'Vallée de la Marne' | 'Montagne de Reims' | 'Côte des Bar';

export interface Maison {
  name: string;
  area: MaisonArea;
  logo?: string;
  /** Added as each official source is verified. Never infer a website URL. */
  website?: string;
  /** Official white logo supplied by the producer, shown on an ink background. */
  logoTone?: 'light-on-dark';
}

export const maisonAreas: MaisonArea[] = ['Côte des Blancs', 'Vallée de la Marne', 'Montagne de Reims', 'Côte des Bar'];

export const maisonSlug = (name: string) => name
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase()
  .replace(/&/g, ' e ')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)/g, '');

export const maisons: Maison[] = [
  {
    "name": "Petit & Bajan",
    "area": "Côte des Blancs",
    "website": "https://champagne-petit-et-bajan.fr/",
    "logo": "https://champagne-petit-et-bajan.fr/images/logo-black.png"
  },
  {
    "name": "Lanson",
    "area": "Montagne de Reims",
    "website": "https://www.lanson.com/",
    "logo": "https://lanson.com/cdn/shop/files/logo.svg?v=1711461687&width=600"
  },
  {
    "name": "Piollot",
    "area": "Côte des Bar",
    "website": "https://www.piollot.com/",
    "logo": "https://www.piollot.com/content/uploads/2021/11/LOGO-21.png"
  },
  {
    "name": "Trudon",
    "area": "Vallée de la Marne",
    "website": "https://www.champagne-trudon.com/",
    "logo": "https://www.champagne-trudon.com/www/img/logo-trudon.png"
  },
  {
    "name": "André Robert",
    "area": "Côte des Blancs",
    "website": "https://champagne-andre-robert.com/",
    "logo": "https://champagne-andre-robert.com/wp-content/uploads/2026/06/andre-robert-logo-header-800px.webp"
  },
  {
    "name": "Bliard-Moriset",
    "area": "Côte des Blancs",
    "website": "https://www.champagne-bliard-moriset.fr/accueil/",
    "logo": "https://www.champagne-bliard-moriset.fr/wp-content/uploads/2020/04/logotype-champagne-bliard-moriset-le-mesnil-sur-oger-2020.png"
  },
  {
    "name": "Duval-Leroy",
    "area": "Côte des Blancs",
    "website": "https://www.duval-leroy.com/",
    "logo": "https://www.duval-leroy.com/wp-content/uploads/2024/04/logo_newsletter.png"
  },
  {
    "name": "J. L. Vergnon",
    "area": "Côte des Blancs",
    "website": "https://champagne-jl-vergnon.com/",
    "logo": "https://champagne-jl-vergnon.com/wp-content/themes/champagnevergnon2-0/img/Badge-home-2.svg"
  },
  {
    "name": "Launois Père et Fils",
    "area": "Côte des Blancs",
    "website": "https://www.champagne-launois.fr/",
    "logo": "https://www.champagne-launois.fr/wp-content/uploads/2018/04/logo-v2.png"
  },
  {
    "name": "Le Brun de Neuville",
    "area": "Côte des Blancs",
    "website": "https://www.lebrundeneuville.fr/fr",
    "logo": "https://www.lebrundeneuville.fr/sites/all/themes/framework/img/logo.png"
  },
  {
    "name": "Le Mesnil",
    "area": "Côte des Blancs",
    "website": "https://champagnelemesnil.com/",
    "logo": "https://champagnelemesnil.com/cdn/shop/files/logo-upr.png?height=100&v=1771862423"
  },
  {
    "name": "Philippe Gonet",
    "area": "Côte des Blancs",
    "website": "https://www.champagne-philippe-gonet.com/",
    "logo": "https://www.champagne-philippe-gonet.com/wp-content/uploads/2023/05/logo-blanc.svg",
    "logoTone": "light-on-dark"
  },
  {
    "name": "Pierre Moncuit",
    "area": "Côte des Blancs",
    "website": "https://www.pierre-moncuit.fr/",
    "logo": "https://www.pierre-moncuit.fr/sites/default/files/Logo1.png"
  },
  {
    "name": "Champagne Chapuy",
    "area": "Côte des Blancs",
    "website": "https://www.champagne-chapuy.com/",
    "logo": "https://www.champagne-chapuy.com/wp-content/uploads/2024/02/logo-1.png"
  },
  {
    "name": "Doyard",
    "area": "Côte des Blancs",
    "website": "https://champagnedoyard.fr/",
    "logo": "https://champagnedoyard.fr/wp-content/uploads/2017/08/logo_doyard.jpg"
  },
  {
    "name": "Doyard-Mahé",
    "area": "Côte des Blancs",
    "website": "https://www.champagnedoyard-mahe.com/",
    "logo": "https://www.champagnedoyard-mahe.com/images/d2969655d80432b1.png"
  },
  {
    "name": "A.D. Coutelas",
    "area": "Vallée de la Marne",
    "website": "https://champagne-adcoutelas.com/",
    "logo": "https://champagne-adcoutelas.com/wp-content/uploads/2023/11/logo-blanc.png",
    "logoTone": "light-on-dark"
  },
  {
    "name": "Alfred Gratien",
    "area": "Vallée de la Marne",
    "website": "https://www.alfredgratien.com/",
    "logo": "https://www.alfredgratien.com/wp-content/themes/atm-theme/library/images/logo-gris.png"
  },
  {
    "name": "Boizel",
    "area": "Vallée de la Marne",
    "website": "https://www.boizel.com/fr/",
    "logo": "https://www.boizel.com/wp-content/themes/boizel/build/main/assets/logo-white-ac76c69f.png",
    "logoTone": "light-on-dark"
  },
  {
    "name": "Charlier & Fils",
    "area": "Vallée de la Marne",
    "website": "https://www.champagne-charlier.com/en/index",
    "logo": "https://www.champagne-charlier.com/assets/images/logo.png"
  },
  {
    "name": "Laherte Frères",
    "area": "Vallée de la Marne",
    "website": "https://www.champagne-laherte.com/",
    "logo": "https://www.champagne-laherte.com/images/logo.svg"
  },
  {
    "name": "Cattier",
    "area": "Montagne de Reims",
    "website": "https://www.cattier.com/fr/",
    "logo": "https://www.cattier.com/content/uploads/2019/11/logo.svg"
  },
  {
    "name": "Pierre Paillard",
    "area": "Montagne de Reims",
    "website": "https://www.champagne-pierre-paillard.com/fr/",
    "logo": "https://www.champagne-pierre-paillard.com/wp-content/uploads/2024/01/logo-champagne-pierre-paillard-blanc.png",
    "logoTone": "light-on-dark"
  },
  {
    "name": "Larnaudie-Hirault",
    "area": "Montagne de Reims",
    "website": "https://www.champagne-larnaudie-hirault.com/",
    "logo": "https://www.champagne-larnaudie-hirault.com/images/logo.png"
  },
  {
    "name": "Ployez-Jacquemart",
    "area": "Montagne de Reims",
    "website": "https://www.ployez-jacquemart.fr/",
    "logo": "https://www.ployez-jacquemart.fr/wp-content/themes/ployez-jacquemart/img/LogoPloyez.png"
  },
  {
    "name": "Vilmart & Cie",
    "area": "Montagne de Reims",
    "website": "https://www.champagnevilmart.fr/",
    "logo": "https://www.champagnevilmart.fr/wp-content/themes/vilmart/assets/images/logo-white.png",
    "logoTone": "light-on-dark"
  },
  {
    "name": "Cheurlin-Dangin",
    "area": "Côte des Bar",
    "website": "https://www.cheurlin-dangin.fr/",
    "logo": "https://www.cheurlin-dangin.fr/storage/files/configuration10/favicons/logo.png"
  },
  {
    "name": "Coessens",
    "area": "Côte des Bar",
    "website": "https://champagne-coessens.com/",
    "logo": "https://champagne-coessens.com/wp-content/uploads/2020/03/Logo-coessens-noir.png"
  },
  {
    "name": "Étienne Fourrier",
    "area": "Côte des Bar",
    "website": "https://champagne-fourrier.com/",
    "logo": "https://champagne-fourrier.com/wp-content/uploads/2026/06/Logo-BLANC-fourrier-512x313.webp",
    "logoTone": "light-on-dark"
  },
  {
    "name": "Gautherot",
    "area": "Côte des Bar",
    "website": "https://www.champagne-gautherot.com/fr",
    "logo": "https://www.champagne-gautherot.com/files/front/images/logo.png"
  },
  {
    "name": "Ruppert-Leroy",
    "area": "Côte des Bar",
    "website": "https://www.champagne-ruppert-leroy.com/fr/index.html",
    "logo": "https://www.champagne-ruppert-leroy.com/images/logo-ruppert-leroy.png"
  },
  {
    "name": "Apollonis Michel Loriot",
    "area": "Vallée de la Marne",
    "website": "http://champagneapollonis.com",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2025/06/Champagne-Apollonis-Michel-Loriot_2025-06-uai-258x258.jpg"
  },
  {
    "name": "Francis Orban",
    "area": "Vallée de la Marne",
    "website": "http://champagne-francis-orban.fr",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2023/07/Champagne-Francis-Orban_2023-07-uai-258x258.jpg"
  },
  {
    "name": "Pascal Lejeune",
    "area": "Vallée de la Marne",
    "website": "https://www.champagne-pascal-lejeune.com/fr/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2021/09/Champagne-Pascal-Lejeune_2021-09-uai-258x258.jpg"
  },
  {
    "name": "Henri Giraud",
    "area": "Vallée de la Marne",
    "website": "https://champagne-giraud.com/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2023/03/Champagne-Henri-Giraud_2023-03-uai-258x258.jpg"
  },
  {
    "name": "H. Goutorbe",
    "area": "Vallée de la Marne",
    "website": "https://www.champagne-henri-goutorbe.com/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2023/07/Champagne-H-Goutorbe_2023-07-uai-258x258.jpg"
  },
  {
    "name": "Jacquesson",
    "area": "Vallée de la Marne",
    "website": "http://champagnejacquesson.com",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2024/04/Champagne-Jacquesson_2024-04-uai-258x258.jpg"
  },
  {
    "name": "Jeaunaux-Robin",
    "area": "Vallée de la Marne",
    "website": "https://www.champagne-jr.fr/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2022/06/Champagne-Jeaunaux-Robin_2022-06-uai-258x258.jpg"
  },
  {
    "name": "Dom Caudron",
    "area": "Vallée de la Marne",
    "website": "https://domcaudron.com/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2021/05/Champagne-Dom-Caudron_2021-04-uai-258x258.jpg"
  },
  {
    "name": "Geoffroy",
    "area": "Vallée de la Marne",
    "website": "https://www.champagne-geoffroy.com/en/champagne-geoffroy/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2026/05/Champagne-Geoffroy_2026-05-uai-258x258.jpg"
  },
  {
    "name": "R. Pouillon & Fils",
    "area": "Vallée de la Marne",
    "website": "http://champagne-pouillon.com/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2021/09/Champagne-R-Pouillon-Fils_2021-04-uai-258x258.jpg"
  },
  {
    "name": "Françoise Bedel",
    "area": "Vallée de la Marne",
    "website": "https://www.champagne-bedel.fr/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2022/04/Champagne-Francoise-Bedel_2022-04-uai-258x258.jpg"
  },
  {
    "name": "Régis Poissinet",
    "area": "Vallée de la Marne",
    "website": "https://champagne-regis-poissinet.com/fr/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2022/06/Champagne-Regis-Poissinet_2022-06-uai-258x258.jpg"
  },
  {
    "name": "Roulot-Fournier",
    "area": "Vallée de la Marne",
    "website": "http://www.champagne-roulot-fournier.fr/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2023/04/Champagne-Roulot-Fournier_2023-04-uai-258x258.jpg"
  },
  {
    "name": "Durdon Bouval",
    "area": "Vallée de la Marne",
    "website": "https://champagne-durdonbouval.com/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2023/07/Champagne-Durdon-Bouval_2023-07-uai-258x258.jpg"
  },
  {
    "name": "Collard-Picard",
    "area": "Vallée de la Marne",
    "website": "https://www.champagnecollardpicard.fr/en",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2024/07/Champagne-Collard-Picard_2024-07-uai-258x258.jpg"
  },
  {
    "name": "Francis Boulard & Fille",
    "area": "Vallée de la Marne",
    "website": "https://francis-boulard.com/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2023/07/Champagne-Francis-Boulard-Fille_2023-07-uai-258x258.jpg"
  },
  {
    "name": "Villa Bon Accueil",
    "area": "Vallée de la Marne",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2024/08/Champagne-Villa-Bon-Accueil_2024-08-uai-258x258.jpg"
  },
  {
    "name": "Paul Berthelot",
    "area": "Vallée de la Marne",
    "website": "https://www.champagne-berthelot-paul.com/verification-age",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2025/06/Champagne-Paul-Berthelot_2025-06-uai-258x258.jpg"
  },
  {
    "name": "Autréau-Lasnot",
    "area": "Vallée de la Marne",
    "website": "https://www.champagne-autreau-lasnot.com/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2024/08/Champagne-Autreau-Lasnot_2024-08-uai-258x258.jpg"
  },
  {
    "name": "Pierre Mignon",
    "area": "Vallée de la Marne",
    "website": "https://www.champagne-pierre-mignon.com/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2026/06/Champagne-Pierre-Mignon_2026-06b-uai-258x258.jpg"
  },
  {
    "name": "Michel Nicaise",
    "area": "Vallée de la Marne",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2026/06/Champagne-Michel-Nicaise_2026-06-uai-258x258.jpg"
  },
  {
    "name": "Tribaut Schloesser",
    "area": "Vallée de la Marne",
    "website": "https://champagne.tribaut.wine/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2025/06/Champagne-Tribaut-Schloesser_2025-06-uai-258x258.jpg"
  },
  {
    "name": "Demière",
    "area": "Vallée de la Marne",
    "website": "https://www.champagnedemiere.com/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2023/03/Champagne-Demiere_2023-03-uai-258x258.jpg"
  },
  {
    "name": "O. Belin",
    "area": "Vallée de la Marne",
    "website": "https://www.champagne-belin.fr/#",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2025/06/Champagne-O-Belin_2025-06-uai-258x258.jpg"
  },
  {
    "name": "Moussé",
    "area": "Vallée de la Marne",
    "website": "https://champagnemousse.fr/en/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2026/07/Champagne-Mousse_2026-07-uai-258x258.jpg"
  },
  {
    "name": "Telmont",
    "area": "Vallée de la Marne",
    "website": "https://champagne-telmont.com/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2026/07/Champagne-Telmont_2026-07-uai-258x258.jpg"
  },
  {
    "name": "Julien Chopin",
    "area": "Vallée de la Marne",
    "website": "https://champagnejulienchopin.com/en/the-classiques-julien-chopin/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2021/06/Champagne-Julien-Chopin_2021-04-uai-258x258.jpg"
  },
  {
    "name": "Bruno Paillard",
    "area": "Montagne de Reims",
    "website": "http://champagnebrunopaillard.com",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2021/04/Champagne-Bruno-Paillard_2021-04-1-uai-258x258.jpg"
  },
  {
    "name": "de Venoge",
    "area": "Côte des Blancs",
    "website": "http://champagnedevenoge.com",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2021/04/Champagne-de-Venoge_2021-04-uai-258x258.jpg"
  },
  {
    "name": "Charles Heidsieck",
    "area": "Montagne de Reims",
    "website": "http://charlesheidsieck.com",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2021/04/Champagne-Charles-Heidsieck_2021-04-uai-258x258.jpg"
  },
  {
    "name": "Palmer & Co",
    "area": "Montagne de Reims",
    "website": "https://www.champagne-palmer.fr/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2024/09/Champagne-Palmer-Co_2024-09-uai-258x258.jpg"
  },
  {
    "name": "Pannier",
    "area": "Vallée de la Marne",
    "website": "http://champagnepannier.com",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2026/06/Champagne-Pannier_2026-06-uai-258x258.jpg"
  },
  {
    "name": "Mandois",
    "area": "Côte des Blancs",
    "website": "http://champagne-mandois.fr",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2021/04/Champagne-Mandois_2021-04-uai-258x258.jpg"
  },
  {
    "name": "Louis Roederer",
    "area": "Montagne de Reims",
    "website": "http://louis-roederer.com",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2021/04/Champagne-Louis-Roederer_2021-04-uai-258x258.jpg"
  },
  {
    "name": "Taittinger",
    "area": "Montagne de Reims",
    "website": "https://www.taittinger.com/en",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2023/07/Champagne-Taittinger_2023-07-uai-258x258.jpg"
  },
  {
    "name": "Virginie T.",
    "area": "Montagne de Reims",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2025/06/Champagne-Virginie-T_2025-06-uai-258x258.jpg"
  },
  {
    "name": "Bollinger",
    "area": "Vallée de la Marne",
    "website": "https://www.champagne-bollinger.com/en/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2023/03/Champagne-Bollinger_2023-03-uai-258x258.jpg"
  },
  {
    "name": "Abelé 1757",
    "area": "Montagne de Reims",
    "website": "https://www.abele1757.com/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2023/03/Champagne-Abele-1757_2023-03-uai-258x258.jpg"
  },
  {
    "name": "Ayala",
    "area": "Vallée de la Marne",
    "website": "https://www.champagne-ayala.fr/it/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2021/04/Champagne-Ayala_2021-04-uai-258x258.jpg"
  },
  {
    "name": "Deutz",
    "area": "Vallée de la Marne",
    "website": "https://www.champagne-deutz.com/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2021/04/Champagne-Deutz_2021-04-uai-258x258.jpg"
  },
  {
    "name": "Leclerc Briant",
    "area": "Vallée de la Marne",
    "website": "https://leclercbriant.fr/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2025/06/Champagne-Leclerc-Briant_2025-06-uai-258x258.jpg"
  },
  {
    "name": "Pol Roger",
    "area": "Vallée de la Marne",
    "website": "https://www.polroger.com/?",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2021/04/Champagne-Pol-Roger_2021-04-uai-258x258.jpg"
  },
  {
    "name": "Joseph Perrier",
    "area": "Vallée de la Marne",
    "website": "https://www.josephperrier.com/en/?v=0d149b90e739",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2025/05/Champagne-Joseph-Perrier_2025-05-uai-258x258.jpg"
  },
  {
    "name": "Piper-Heidsieck",
    "area": "Montagne de Reims",
    "website": "https://www.piper-heidsieck.com/en/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2021/04/Champagne-Piper-Heidsieck_2021-04-uai-258x258.jpg"
  },
  {
    "name": "Collet",
    "area": "Vallée de la Marne",
    "website": "https://champagne-collet.com/en/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2025/05/Champagne-Collet_2025-05-uai-258x258.jpg"
  },
  {
    "name": "Jacquart",
    "area": "Montagne de Reims",
    "website": "https://www.champagne-jacquart.com/en/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2021/04/Champagne-Jacquart_2021-04-uai-258x258.jpg"
  },
  {
    "name": "Henriot",
    "area": "Montagne de Reims",
    "website": "https://www.champagne-henriot.com/en/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2025/08/Champagne-Henriot_2025-08-uai-258x258.jpg"
  },
  {
    "name": "Besserat de Bellefon",
    "area": "Vallée de la Marne",
    "website": "https://www.besseratdebellefon.com/index-en.php",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2022/05/Champagne-Besserat-de-Bellefon_2022-05-uai-258x258.jpg"
  },
  {
    "name": "Vollereaux",
    "area": "Vallée de la Marne",
    "website": "https://www.champagne-vollereaux.fr/it/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2024/05/Champagne-Vollereaux_2024-05-uai-258x258.jpg"
  },
  {
    "name": "Château de Bligny",
    "area": "Côte des Bar",
    "website": "https://champagnechateaudebligny.com/accueil",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2023/05/Champagne-Chateau-de-Bligny_2023-05-uai-258x258.jpg"
  },
  {
    "name": "Tsarine",
    "area": "Montagne de Reims",
    "website": "https://tsarine.com/it/home-it/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2024/06/Champagne-Tsarine_2024-06-uai-258x258.jpg"
  },
  {
    "name": "Billecart-Salmon",
    "area": "Vallée de la Marne",
    "website": "https://www.champagne-billecart.fr/en/verification-age-legal-en?en",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2026/07/Champagne-Billecart-Salmon_2026-07-uai-258x258.jpg"
  },
  {
    "name": "Robert Moncuit",
    "area": "Côte des Blancs",
    "website": "https://www.champagne-robert-moncuit.com/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2026/08/Champagne-Robert-Moncuit_2026-08-uai-258x258.jpg"
  },
  {
    "name": "Autréau de Champillon",
    "area": "Montagne de Reims",
    "website": "https://www.champagneautreau.com/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2021/04/Champagne-Autreau_2021-04-uai-258x258.jpg"
  },
  {
    "name": "Paul Bara",
    "area": "Montagne de Reims",
    "website": "http://champagnepaulbara.com",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2021/04/Champagne-Paul-Bara_2021-04-uai-258x258.jpg"
  },
  {
    "name": "Gonet-Medeville",
    "area": "Montagne de Reims",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2021/04/Champagne-Gonet-Medeville_2021-04-uai-258x258.jpg"
  },
  {
    "name": "Rodez",
    "area": "Montagne de Reims",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2024/07/Champagne-Rodez_2024-07-uai-258x258.jpg"
  },
  {
    "name": "Monmarthe",
    "area": "Montagne de Reims",
    "website": "http://champagne-monmarthe.com",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2021/04/Champagne-Monmarthe_2021-04-uai-258x258.jpg"
  },
  {
    "name": "Domaine Lagille",
    "area": "Montagne de Reims",
    "website": "https://domainelagille.com/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2023/04/Champagne-Domaine-Lagille_2023-04-uai-258x258.jpg"
  },
  {
    "name": "Secondé-Simon",
    "area": "Montagne de Reims",
    "website": "https://www.champagne-seconde-simon.fr/site/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2022/09/Champagne-Seconde-Simon_2021-04a-uai-258x258.jpg"
  },
  {
    "name": "Jacques Rousseaux",
    "area": "Montagne de Reims",
    "website": "https://www.champagne-jacquesrousseaux.com/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2023/04/Champagne-Jacques-Rousseaux_2023-04-uai-258x258.jpg"
  },
  {
    "name": "Alexandre Penet e Penet-Chardonnet",
    "area": "Montagne de Reims",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2025/08/Champagne-Alexandre-Penet-e-Penet-Chardonnet_2025-08-uai-258x258.jpg"
  },
  {
    "name": "Paul Clouet",
    "area": "Montagne de Reims",
    "website": "http://champagne-paul-clouet.com",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2021/09/Champagne-Paul-Clouet_2021-04-uai-258x258.jpg"
  },
  {
    "name": "Delavenne",
    "area": "Montagne de Reims",
    "website": "https://champagne-delavenne.fr/en/contact",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2023/04/Champagne-Delavenne_2023-04-uai-258x258.jpg"
  },
  {
    "name": "Coustheur-Bonnard",
    "area": "Montagne de Reims",
    "website": "https://www.champagnecoustheurbonnard.fr/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2022/06/Champagne-Coustheur-Bonnard_2022-06-uai-258x258.jpg"
  },
  {
    "name": "Crucifix Père & Fils",
    "area": "Montagne de Reims",
    "website": "http://champagne-crucifix.fr",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2023/03/Champagne-Crucifix-Pere-Fils_2023-03-uai-258x258.jpg"
  },
  {
    "name": "Bertrand-Delespierre",
    "area": "Montagne de Reims",
    "website": "https://bertrand-delespierre.fr/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2026/04/Champagne-Bertrand-Delespierre_2026-04-uai-258x258.jpg"
  },
  {
    "name": "Sylvie Moreau",
    "area": "Montagne de Reims",
    "website": "https://www.champagne-sylvie-moreau.com/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2023/04/Champagne-Sylvie-Moreau_2023-04-uai-258x258.jpg"
  },
  {
    "name": "Huré Frères",
    "area": "Montagne de Reims",
    "website": "http://www.champagne-hure-freres.com/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2025/07/Champagne-Hure-Freres_2025-07-uai-258x258.jpg"
  },
  {
    "name": "Louis Brochet",
    "area": "Montagne de Reims",
    "website": "https://www.champagne-brochet.com/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2024/07/Champagne-Louis-Brochet_2024-07-uai-258x258.jpg"
  },
  {
    "name": "Ullens - Domaine de Marzilly",
    "area": "Montagne de Reims",
    "website": "https://www.domainedemarzilly.fr/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2025/06/Champagne-Ullens-Domaine-de-Marzilly_2025-06-uai-258x258.jpg"
  },
  {
    "name": "Lafalise Froissart",
    "area": "Montagne de Reims",
    "website": "https://www.lafalisefroissart.com/en/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2026/04/Champagne-Lafalise-Froissart_2026-04-uai-258x258.jpg"
  },
  {
    "name": "Martin des Orsyn",
    "area": "Montagne de Reims",
    "website": "https://martindesorsyn.it/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2024/09/Champagne-Martin-des-Orsyn_2024-09-uai-258x258.jpg"
  },
  {
    "name": "Bonvalet",
    "area": "Montagne de Reims",
    "website": "https://champagne-bonvalet.com/en/home/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2025/05/Champagne-Bonvalet_2025-05-uai-258x258.jpg"
  },
  {
    "name": "Maxime Blin",
    "area": "Montagne de Reims",
    "website": "https://www.champagne-maxime-blin.com/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2024/04/Champagne-Maxime-Blin_2024-04-uai-258x258.jpg"
  },
  {
    "name": "De Vilmont",
    "area": "Montagne de Reims",
    "website": "https://www.champagnedevilmont.com/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2021/04/Champagne-De-Vilmont_2021-04-uai-258x258.jpg"
  },
  {
    "name": "Jean Philippe Trousset",
    "area": "Montagne de Reims",
    "website": "https://www.champagnetrousset.fr/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2024/04/Champagne-Jean-Philippe-Trousset_2024-04-uai-258x258.jpg"
  },
  {
    "name": "Bonnevie Bocart",
    "area": "Montagne de Reims",
    "website": "https://champagne-bonnevie-bocart.com/age-verification?return=%252F",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2022/05/Champagne-Bonnevie-Bocart_2022-05-uai-258x258.jpg"
  },
  {
    "name": "Marie Angèle",
    "area": "Montagne de Reims",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2026/08/Champagne-Marie-Angele_2026-08-uai-258x258.jpg"
  },
  {
    "name": "Mailly Grand Cru",
    "area": "Montagne de Reims",
    "website": "https://www.champagne-mailly.com/fr/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2021/04/Champagne-Mailly-Grand-Cru_2021-04-uai-258x258.jpg"
  },
  {
    "name": "Barnaut",
    "area": "Montagne de Reims",
    "website": "https://www.champagne-barnaut-bouzy.com/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2021/06/Champagne-Barnaut_2021-06-uai-258x258.jpg"
  },
  {
    "name": "Heidsieck Héritage",
    "area": "Montagne de Reims",
    "website": "https://www.piper-heidsieck.com/it/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2026/06/Champagne-Heidsieck-Heritage_2026-06-uai-258x258.jpg"
  },
  {
    "name": "Alain Vesselle",
    "area": "Montagne de Reims",
    "website": "https://www.champagne-alainvesselle.fr/?utm_source=gmb",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2023/03/Champagne-Alain-Vesselle_2023-03-uai-258x258.jpg"
  },
  {
    "name": "Roger Coulon",
    "area": "Montagne de Reims",
    "website": "https://www.champagne-coulon.com/en",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2021/04/Champagne-Roger-Coulon_2021-04-uai-258x258.jpg"
  },
  {
    "name": "G.H.Mumm",
    "area": "Montagne de Reims",
    "website": "https://www.mumm.com/it-it/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2026/08/Champagne-GHMumm_2026-08-uai-258x258.jpg"
  },
  {
    "name": "Perondé",
    "area": "Montagne de Reims",
    "website": "https://champagneperonde.fr/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2026/08/Champagne-Peronde_2026-08-uai-258x258.jpg"
  },
  {
    "name": "Fumey-Tassin",
    "area": "Côte des Bar",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2024/06/Champagne-Fumey-Tassin_2024-06-uai-258x258.jpg"
  },
  {
    "name": "Alexandre Bonnet",
    "area": "Côte des Bar",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2022/09/Champagne-Alexandre-Bonnet_2022-09-uai-258x258.jpg"
  },
  {
    "name": "Erick Schreiber",
    "area": "Côte des Bar",
    "website": "http://champagne-schreiber.fr",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2022/09/Champagne-Erick-Schreiber_2022-06-uai-258x258.jpg"
  },
  {
    "name": "Devaux",
    "area": "Côte des Bar",
    "website": "http://www.champagne-devaux.com/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2021/04/Champagne-Devaux_2021-04-uai-258x258.jpg"
  },
  {
    "name": "Amaury Beaufort",
    "area": "Côte des Bar",
    "website": "https://www.amaury-beaufort.com/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2023/07/Champagne-Amaury-Beaufort_2023-07-uai-258x258.jpg"
  },
  {
    "name": "Morel Père & Fils",
    "area": "Côte des Bar",
    "website": "https://champagnemorel.com/fr/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2022/06/Champagne-Morel-Pere-e-Fils_2022-06-uai-258x258.jpg"
  },
  {
    "name": "Stéphane Breton",
    "area": "Côte des Bar",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2026/05/Champagne-Stephane-Breton_2026-05-uai-258x258.jpg"
  },
  {
    "name": "Rémi Leroy",
    "area": "Côte des Bar",
    "website": "http://champagne-remi-leroy.fr",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2021/04/Champagne-Remi-Leroy_2021-04-uai-258x258.jpg"
  },
  {
    "name": "Jean Velut",
    "area": "Côte des Bar",
    "website": "http://www.champagne-velut.fr/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2026/04/Champagne-Jean-Velut_2026-04-uai-258x258.jpg"
  },
  {
    "name": "Chassenay D’Arce",
    "area": "Côte des Bar",
    "website": "https://chassenay.com/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2022/09/Champagne-Chassenay-DArce_2022-09-uai-258x258.jpg"
  },
  {
    "name": "Fleury",
    "area": "Côte des Bar",
    "website": "https://www.champagne-fleury.fr/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2021/04/Champagne-Fleury_2021-04-uai-258x258.jpg"
  },
  {
    "name": "Cottet-Dubreuil",
    "area": "Côte des Bar",
    "website": "https://cottet-dubreuil.com/en/home-uk/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2026/08/Champagne-Cottet-Dubreuil_2026-08-uai-258x258.jpg"
  },
  {
    "name": "Pascal Agrapart",
    "area": "Côte des Blancs",
    "website": "http://www.champagne-agrapart.com/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2025/08/Champagne-Pascal-Agrapart_2025-08-uai-258x258.jpg"
  },
  {
    "name": "Albert Lebrun",
    "area": "Côte des Blancs",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2021/04/Champagne-Albert-Lebrun_2021-04-uai-258x258.jpg"
  },
  {
    "name": "R&L Legras",
    "area": "Côte des Blancs",
    "website": "http://champagne-legras.fr",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2021/04/Champagne-RL-Legras_2021-04-uai-258x258.jpg"
  },
  {
    "name": "Claude Cazals",
    "area": "Côte des Blancs",
    "website": "https://www.champagne-cazals.fr/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2021/05/Champagne-Claude-Cazals_2021-04-uai-258x258.jpg"
  },
  {
    "name": "Bolieu",
    "area": "Côte des Blancs",
    "website": "http://www.champagne-bolieu.com/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2021/04/Champagne-Bolieu_2021-04-uai-258x258.jpg"
  },
  {
    "name": "Bonnaire",
    "area": "Côte des Blancs",
    "website": "http://bonnaire.com",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2021/09/Champagne-Bonnaire_2021-04-uai-258x258.jpg"
  },
  {
    "name": "De Sousa",
    "area": "Côte des Blancs",
    "website": "https://www.champagnedesousa.com/en/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2021/04/Champagne-De-Sousa_2021-04-uai-258x258.jpg"
  },
  {
    "name": "Demière-Ansiot",
    "area": "Côte des Blancs",
    "website": "https://www.champagne-demiere-ansiot.com/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2023/04/Champagne-Demiere-Ansiot_2023-04-uai-258x258.jpg"
  },
  {
    "name": "Louis Massing",
    "area": "Côte des Blancs",
    "website": "https://champagne-louis-massing.com/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2024/04/Champagne-Louis-Massing_2024-04-uai-258x258.jpg"
  },
  {
    "name": "Guiborat",
    "area": "Côte des Blancs",
    "website": "http://champagne-guiborat.fr",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2021/04/Champagne-Guiborat_2021-04-uai-258x258.jpg"
  },
  {
    "name": "Guy Charlemagne",
    "area": "Côte des Blancs",
    "website": "http://champagne-guy-charlemagne.com",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2025/07/Champagne-Guy-Charlemagne_2025-07-uai-258x258.jpg"
  },
  {
    "name": "Franck Bonville",
    "area": "Côte des Blancs",
    "website": "http://champagne-franck-bonville.com/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2024/04/Champagne-Franck-Bonville_2024-04-uai-258x258.jpg"
  },
  {
    "name": "Veuve Fourny & Fils",
    "area": "Côte des Blancs",
    "website": "https://www.champagne-veuve-fourny.com/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2022/09/Champagne-Veuve-Fourny_2022-08-uai-258x258.jpg"
  },
  {
    "name": "Pierre Gimonnet & Fils",
    "area": "Côte des Blancs",
    "website": "http://champagne-gimonnet.com",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2021/09/Champagne-Pierre-Gimonnet-Fils_2021-04-uai-258x258.jpg"
  },
  {
    "name": "Pierre Legras",
    "area": "Côte des Blancs",
    "website": "http://champagne-pierre-legras.com",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2021/04/Champagne-Pierre-Legras_2021-04-uai-258x258.jpg"
  },
  {
    "name": "Encry Veuve Blanche Estelle",
    "area": "Côte des Blancs",
    "website": "https://www.champagne-encry.com/?lang=it",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2026/08/Champagne-Encry-Veuve-Blanche-Estelle_2026-08-uai-258x258.jpg"
  },
  {
    "name": "Colin",
    "area": "Côte des Blancs",
    "website": "https://www.champagne-colin.com/en/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2023/04/Champagne-Colin_2023-04-uai-258x258.jpg"
  },
  {
    "name": "Alberto Massucco",
    "area": "Côte des Blancs",
    "website": "https://maisonmassucco.it/gli-champagnes-importati/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2022/05/Champagne-Alberto-Massucco_2022-05-uai-258x258.jpg"
  },
  {
    "name": "Nicolas Feuillatte",
    "area": "Côte des Blancs",
    "website": "https://nicolas-feuillatte.com/en",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2022/05/Champagne-Nicolas-Feuillatte_2022-05-uai-258x258.jpg"
  },
  {
    "name": "Paul Goerg",
    "area": "Côte des Blancs",
    "website": "https://www.champagne-goerg.com/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2023/04/Champagne-Paul-Goerg_2023-04b-uai-258x258.jpg"
  },
  {
    "name": "Crété Chamberlin",
    "area": "Côte des Blancs",
    "website": "https://www.cretechamberlin.com/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2026/05/Champagne-Crete-Chamberlin_2026-05-uai-258x258.jpg"
  },
  {
    "name": "Gonet Sulcova",
    "area": "Côte des Blancs",
    "website": "https://www.champagne-gonet-sulcova.fr/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2021/06/Champagne-Gonet-Sulcova_2021-04-uai-258x258.jpg"
  },
  {
    "name": "Legras & Haas",
    "area": "Côte des Blancs",
    "website": "https://www.legras-et-haas.com/en/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2025/05/Champagne-Legras-Haas_2025-05-uai-258x258.jpg"
  },
  {
    "name": "André Jacquart",
    "area": "Côte des Blancs",
    "website": "https://www.champagne-andre-jacquart.com/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2021/05/Champagne-Andre-Jacquart_2021-04-uai-258x258.jpg"
  },
  {
    "name": "A. Bergère",
    "area": "Côte des Blancs",
    "website": "https://www.champagne-andrebergere.com/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2022/04/Champagne-A-Bergere_2022-04-uai-258x258.jpg"
  },
  {
    "name": "Mallol",
    "area": "Côte des Blancs",
    "website": "https://www.champagne-mallol.com/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2025/06/Champagne-Mallol_2025-06-uai-258x258.jpg"
  },
  {
    "name": "Larmandier-Bernier",
    "area": "Côte des Blancs",
    "website": "https://larmandier.fr/fr/",
    "logo": "https://www.champagneexperience.it/wp-content/uploads/2021/04/Champagne-Larmandier-Bernier_2021-04-uai-258x258.jpg"
  }
];
