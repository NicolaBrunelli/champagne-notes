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
  { "name": "Forget Chemin", "area": "Montagne de Reims", "website": "https://champagne-forget-chemin.fr/", "logo": "https://champagne-forget-chemin.fr/wp-content/uploads/2025/10/logo-header.svg" },
  { "name": "Franck Debut", "area": "Montagne de Reims", "website": "https://www.champagne-franck-debut.com/", "logo": "https://www.champagne-franck-debut.com/wp-content/uploads/2021/01/logo-franck-debut-white.png", "logoTone": "light-on-dark" },
  { "name": "Fresne Ducret", "area": "Montagne de Reims", "website": "https://www.champagne-fresne-ducret.com/", "logo": "https://www.champagne-fresne-ducret.com/img/champagne-fresne-ducret-logo.png" },
  { "name": "Fresnet-Juillet", "area": "Montagne de Reims", "website": "https://www.champagne-fresnet-juillet.com/", "logo": "https://www.champagne-fresnet-juillet.com/img/www1champagne-fresnet-juilletcom-logo-1562917440.jpg" },
  { "name": "G. Richomme", "area": "Côte des Blancs", "website": "https://champagnerichomme.com/verification-de-lage/", "logo": "https://champagnerichomme.com/wp-content/uploads/2026/04/10x10cm-LOGO-BASELINE-GRICHOMME-TYPOBLANCHE-1.svg", "logoTone": "light-on-dark" },
  { "name": "G. Tribaut", "area": "Vallée de la Marne", "website": "https://www.champagne-tribaut-hautvillers.com/?v=82a9e4d26595", "logo": "https://www.champagne-tribaut-hautvillers.com/wp-content/uploads/2025/02/logo-g-tribaut-header.svg", "logoTone": "light-on-dark" },
  { "name": "G. X. Crochet", "area": "Côte des Blancs", "website": "https://www.champagnegxcrochet.fr/", "logo": "https://www.champagnegxcrochet.fr/wp-content/uploads/2020/05/logo-haut.png" },
  { "name": "G.H. Martel & Co", "area": "Montagne de Reims", "website": "https://champagnemartel.com/accueil", "logo": "https://champagnemartel.com/img/logo_champagne-martel.svg" },
  { "name": "Gabriel-Pagin Fils", "area": "Montagne de Reims", "website": "https://www.champagne-gabriel-pagin-fils.com/", "logo": "https://www.champagne-gabriel-pagin-fils.com/wp-content/uploads/2023/02/Toplogo.svg" },
  { "name": "Gaidoz-Forget", "area": "Montagne de Reims", "website": "https://www.champagne-gaidoz-forget.com/fr/", "logo": "https://www.champagne-gaidoz-forget.com/img/GF-Logo-Full-Blanc-Or.png", "logoTone": "light-on-dark" },
  { "name": "Gaston Chiquet", "area": "Vallée de la Marne", "website": "https://www.gastonchiquet.com/", "logo": "https://www.gastonchiquet.com/img/agrements/chiquet_logo-Bloc-Marque.png" },
  { "name": "Gaston Collard", "area": "Montagne de Reims", "website": "https://www.champagnegastoncollard.org/", "logo": "https://le-cdn.website-editor.net/109c6dba2f144560874368850308d034/dms3rep/multi/opt/logo-1920w.png" },
  { "name": "Dominique Jarry", "area": "Côte des Blancs", "website": "https://champagne-jarrydominique.fr/", "logo": "https://champagne-jarrydominique.fr/wp-content/uploads/2021/08/logo-vecto-Entier-3.png" },
  { "name": "Doré-Léguillette", "area": "Vallée de la Marne", "website": "https://www.champagne-doreleguillette.com/", "logo": "https://www.champagne-doreleguillette.com/template/images/Logo%20DL%20bloc%20marque_24-04-2024.png" },
  { "name": "Dourdon-Vieillard", "area": "Vallée de la Marne", "website": "https://www.champagne-dourdon-vieillard.fr/fr/", "logo": "https://www.champagne-dourdon-vieillard.fr/templates/champagne-dourdon-vieillard/images/designer/f599347700c87a1781dd386cdcad198e_DourdonVieillardlogo2017seul.png" },
  { "name": "Dumenil", "area": "Montagne de Reims", "website": "http://www.champagne-dumenil.com/fr", "logo": "http://www.champagne-dumenil.com/assets/logo-header.svg" },
  { "name": "E. Jamart & Cie", "area": "Vallée de la Marne", "website": "https://www.champagnejamart.com/fr/", "logo": "https://www.champagnejamart.com/images/JAMART-LOGO-N-B.png" },
  { "name": "Edmond Bourdelat", "area": "Côte des Blancs", "website": "https://www.champagne-edmond-bourdelat.fr/", "logo": "https://static.wixstatic.com/media/1bea30_14d10dcffec04797ad99ea4309263b7a~mv2.png/v1/fill/w_49,h_75,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LOGO%20EDMOND%20BOURDELAT%20%2B%20BM.png" },
  { "name": "Egrot & Filles", "area": "Vallée de la Marne", "website": "https://www.champagne-egrot.com/", "logo": "https://ik.imagekit.io/egrot/wp-content/themes/champagne-egrot-v2/build/main/assets/images/logo-667f417e.png" },
  { "name": "Elodie D.", "area": "Vallée de la Marne", "website": "https://champagneelodied.com/", "logo": "https://champagneelodied.com/storage/2022/11/LOGO-ELODIE-D.-V5_blanc.png", "logoTone": "light-on-dark" },
  { "name": "Emmanuel Boucant", "area": "Vallée de la Marne", "website": "https://www.champagne-boucant.fr/", "logo": "https://www.champagne-boucant.fr/Logo.svg" },
  { "name": "Eric Isselée", "area": "Côte des Blancs", "website": "https://www.champagne-eric-isselee.com/", "logo": "https://www.champagne-eric-isselee.com/wp-content/uploads/2021/07/newlogo2.png" },
  { "name": "Eric Taillet", "area": "Vallée de la Marne", "website": "https://www.champagne-eric-taillet.fr/", "logo": "https://static.wixstatic.com/media/1bea30_4bffd489cbc343eab661f9c3d90443d6~mv2.png/v1/fill/w_210,h_108,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Eric%20Taillet_Logo.png" },
  { "name": "Ernest Remy", "area": "Montagne de Reims", "website": "https://www.ernest-remy.fr/", "logo": "https://www.ernest-remy.fr/assets/img/logo.svg", "logoTone": "light-on-dark" },
  { "name": "Etienne Oudart", "area": "Côte des Blancs", "website": "https://champagne-oudart.com/", "logo": "https://champagne-oudart.com/wp-content/uploads/2020/09/cropped-logo-theme-white-1.png", "logoTone": "light-on-dark" },
  { "name": "Fallet Dart", "area": "Vallée de la Marne", "website": "https://www.champagne-fallet-dart.fr/", "logo": "https://www.champagne-fallet-dart.fr/wp-content/themes/tete-chercheuse/assets/img/logo-white-small.png", "logoTone": "light-on-dark" },
  { "name": "Fallet Jean-Luc", "area": "Vallée de la Marne", "website": "https://www.champagne-fallet.fr/", "logo": "https://www.champagne-fallet.fr/UserDesign/Logo-index.svg" },
  { "name": "Faniel et Fils", "area": "Vallée de la Marne", "website": "http://www.champagne-faniel.fr/", "logo": "http://www.champagne-faniel.fr/wp-content/uploads/2016/05/logo_home.png" },
  { "name": "Feneuil Pointillart", "area": "Montagne de Reims", "website": "https://champagne-feneuil-pointillart.com/", "logo": "https://champagne-feneuil-pointillart.com/wp-content/uploads/2022/10/Champagne-Feneuil-Pointillart-logo-150x150.png" },
  { "name": "Fernand Lemaire", "area": "Vallée de la Marne", "website": "https://champagne-fernand-lemaire.com/", "logo": "https://champagne-fernand-lemaire.com/wp-content/uploads/2025/03/LOGO-FERNAND-LEMAIRE-PREMIER-CRU-2024-2.png" },
  { "name": "Fleury Gille", "area": "Vallée de la Marne", "website": "https://champagne-fleury-gille.fr/", "logo": "https://champagne-fleury-gille.fr/UserDesign/Logo-index.svg" },
  { "name": "Florent Bergeronneau-Marion", "area": "Montagne de Reims", "website": "http://champagne-bergeronneau-marion.fr/", "logo": "http://champagne-bergeronneau-marion.fr/wp-content/themes/marion/images/logo.jpg" },
  {
    "name": "Dagonet & Fils",
    "area": "Vallée de la Marne",
    "website": "https://www.champagne-dagonet.fr/",
    "logo": "https://www.champagne-dagonet.fr/wp-content/uploads/2022/02/logo-1.png"
  },
  {
    "name": "Daniel Dumont",
    "area": "Montagne de Reims",
    "website": "https://www.champagne-danieldumont.com/",
    "logo": "https://www.champagne-danieldumont.com/img/champagne-Daniel-Dumont_logo.png"
  },
  {
    "name": "Daniel Gerbaux",
    "area": "Vallée de la Marne",
    "website": "https://www.champagne-daniel-gerbaux.com/",
    "logo": "https://static.wixstatic.com/media/9c70ca_d43736a942004c158bd2e3e363d55a4f~mv2.png/v1/fill/w_119,h_77,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LOGO%20G.png"
  },
  {
    "name": "Daubanton",
    "area": "Côte des Bar",
    "website": "https://champagnedaubanton.com/",
    "logo": "https://champagnedaubanton.com/wp-content/uploads/2018/10/LOGO.png"
  },
  {
    "name": "Dauby Mère et Fille",
    "area": "Vallée de la Marne",
    "website": "https://champagne-dauby.fr/",
    "logo": "https://champagne-dauby.fr/wp-content/uploads/2018/07/logo-dauby.jpg"
  },
  {
    "name": "Dautreville",
    "area": "Montagne de Reims",
    "website": "https://www.champagne-dautreville.com/",
    "logo": "https://www.champagne-dautreville.com/wp-content/uploads/2021/02/LOGO-22.png"
  },
  {
    "name": "de Barfontarc",
    "area": "Côte des Bar",
    "website": "https://www.champagne-barfontarc.com/",
    "logo": "https://www.champagne-barfontarc.com/wp-content/uploads/2024/05/logo-db-min.png"
  },
  {
    "name": "Decotte-Augé",
    "area": "Montagne de Reims",
    "website": "https://www.champagne-decotte-auge.com/",
    "logo": "https://www.champagne-decotte-auge.com/wp-content/uploads/2022/03/logoage.jpg"
  },
  {
    "name": "Dekeyne & Fils",
    "area": "Côte des Blancs",
    "website": "https://champagnedekeyneetfils.com/",
    "logo": "https://champagnedekeyneetfils.com/wp-content/themes/dekeyne/assets/img/logo-champagne-dekeyne.svg",
    "logoTone": "light-on-dark"
  },
  {
    "name": "Delagarde-Delozanne",
    "area": "Montagne de Reims",
    "website": "https://www.champagne-delagarde-delozanne.fr/",
    "logo": "https://www.champagne-delagarde-delozanne.fr/images/vi_logo.jpg"
  },
  {
    "name": "Delahaie",
    "area": "Vallée de la Marne",
    "website": "https://www.champagne-delahaie.fr/",
    "logo": "https://www.champagne-delahaie.fr/wp-content/uploads/2016/11/logo-champagne-delahaie-epernay1.png"
  },
  {
    "name": "Delhomme",
    "area": "Vallée de la Marne",
    "website": "https://champagne-delhomme.fr/",
    "logo": "https://champagne-delhomme.fr/Logo.svg"
  },
  {
    "name": "Delong Marlène",
    "area": "Côte des Blancs",
    "website": "https://www.champagne-delong-marlene.com/",
    "logo": "https://www.champagne-delong-marlene.com/wp-content/themes/delongmarlene-v2/img/logo.svg"
  },
  {
    "name": "Derot-Delugny",
    "area": "Vallée de la Marne",
    "website": "https://champagne-derot-delugny.com/",
    "logo": "https://champagne-derot-delugny.com/wp-content/uploads/2023/03/Logotype-Derot-Delugny-Blanc-512.png",
    "logoTone": "light-on-dark"
  },
  {
    "name": "Didier Dépit",
    "area": "Vallée de la Marne",
    "website": "https://www.didier-depit.fr/",
    "logo": "https://www.didier-depit.fr/themes/themefd24030/images/logo.png"
  },
  {
    "name": "Didier Goussard",
    "area": "Côte des Bar",
    "website": "https://www.champagnedidiergoussard.com/",
    "logo": "https://www.champagnedidiergoussard.com/uploads/4KucJYTq/Logo-ChampagneGOUSSARD-01__msi___png.png"
  },
  {
    "name": "Diogène Tissier",
    "area": "Côte des Blancs",
    "website": "https://www.champagne-diogene-tissier.com/",
    "logo": "https://www.champagne-diogene-tissier.com/img/logo-champagne-diogene-tissier2.png"
  },
  {
    "name": "Champion",
    "area": "Vallée de la Marne",
    "website": "http://www.champagne-champion.com/",
    "logo": "http://www.champagne-champion.com/champagne-daniel-champion_images/agrements/champagne-champion-logo.png"
  },
  {
    "name": "Charles Clément",
    "area": "Côte des Bar",
    "website": "https://champagne-charles-clement.fr/",
    "logo": "https://champagne-charles-clement.fr/cdn/shop/files/imgi_4_LOGO_BLANC.png?height=360&v=1765793436",
    "logoTone": "light-on-dark"
  },
  {
    "name": "Charles Collin",
    "area": "Côte des Bar",
    "website": "https://champagne-charles-collin.com/fr",
    "logo": "https://champagne-charles-collin.com/sites/all/themes/framework/img/logo.png"
  },
  {
    "name": "Charles de Cazanove",
    "area": "Montagne de Reims",
    "website": "https://champagnedecazanove.com/",
    "logo": "https://champagnedecazanove.com/wp-content/uploads/2023/11/logo_agegate.svg"
  },
  {
    "name": "Charles Ellner",
    "area": "Vallée de la Marne",
    "website": "https://champagne-ellner.com/",
    "logo": "https://champagne-ellner.com/wp-content/uploads/2025/04/NOUVEAU-LOGO-ELLNER-blanc-499x1024.png",
    "logoTone": "light-on-dark"
  },
  {
    "name": "Charles Mignon",
    "area": "Vallée de la Marne",
    "website": "http://www.champagne-mignon.fr/",
    "logo": "http://www.champagne-mignon.fr/wp-content/themes/champagne-mignon/images/logo.png"
  },
  {
    "name": "Charles Orban",
    "area": "Vallée de la Marne",
    "website": "https://champagnecharlesorban.com/",
    "logo": "https://champagnecharlesorban.com/wp-content/uploads/2025/01/logo_orban2.png"
  },
  {
    "name": "Charles Pougeoise",
    "area": "Côte des Blancs",
    "website": "https://www.champagne-charles-pougeoise.com/",
    "logo": "https://www.champagne-charles-pougeoise.com/smarty/wireframe20/media/images/logo.png"
  },
  {
    "name": "Christelle Salomon",
    "area": "Vallée de la Marne",
    "website": "https://champagne-christellesalomon.com/",
    "logo": "https://champagne-christellesalomon.com/wp-content/uploads/2015/06/CS-logo.png"
  },
  {
    "name": "Christian Douard",
    "area": "Vallée de la Marne",
    "website": "https://champagnedouard.fr/",
    "logo": "https://2355240e.delivery.rocketcdn.me/wp-content/uploads/2020/09/logo1_125-100x100.jpg"
  },
  {
    "name": "Christian Naudé",
    "area": "Vallée de la Marne",
    "website": "https://www.champagne-christian-naude.fr/en/index",
    "logo": "https://www.champagne-christian-naude.fr/assets/images/logo.png"
  },
  {
    "name": "Christophe",
    "area": "Côte des Bar",
    "website": "https://champagne-christophe.com/",
    "logo": "https://champagne-christophe.com/wp-content/uploads/2024/06/logo-champagne-christophe-w.svg",
    "logoTone": "light-on-dark"
  },
  {
    "name": "Christophe Lefèvre",
    "area": "Vallée de la Marne",
    "website": "https://www.champagne-bio-lefevre.com/",
    "logo": "https://www.champagne-bio-lefevre.com/assets/images/logo.png"
  },
  {
    "name": "Christophe Varlot",
    "area": "Montagne de Reims",
    "website": "https://www.champagne-christophe-varlot.com/verification-age",
    "logo": "https://www.champagne-christophe-varlot.com/images/varlot-logo3.svg"
  },
  {
    "name": "Claude Beaufort",
    "area": "Montagne de Reims",
    "website": "https://champagneclaudebeaufort.fr/",
    "logo": "https://champagneclaudebeaufort.fr/wp-content/uploads/2020/09/logo-CB-CHAMPAGNE2-150x150.png"
  },
  {
    "name": "Claude Corbon",
    "area": "Côte des Blancs",
    "website": "http://www.champagne-corbon.fr/",
    "logo": "http://www.champagne-corbon.fr/wp-content/uploads/2022/07/logo-champagne-corbon-blanc.png",
    "logoTone": "light-on-dark"
  },
  {
    "name": "Claude Michez",
    "area": "Vallée de la Marne",
    "website": "https://www.champagne-michez.com/",
    "logo": "https://www.champagne-michez.com/wp-content/uploads/2024/03/logo.png"
  },
  {
    "name": "Couvent-Lémery",
    "area": "Vallée de la Marne",
    "website": "https://www.champagne-couvent-lemery.fr/",
    "logo": "https://www.champagne-couvent-lemery.fr/Logo.svg"
  },
  {
    "name": "Bernard Bijotat",
    "area": "Vallée de la Marne",
    "website": "https://www.champagne-bernard-bijotat.fr/",
    "logo": "https://www.champagne-bernard-bijotat.fr/wp-content/uploads/2016/05/Champagne-Bijotat-Logo.png"
  },
  {
    "name": "Bernard Figuet",
    "area": "Vallée de la Marne",
    "website": "https://champagne-bernard-figuet.fr/",
    "logo": "https://champagne-bernard-figuet.fr/wp-content/themes/cbf/img/logo.png"
  },
  {
    "name": "Bernard Lonclas",
    "area": "Côte des Blancs",
    "website": "https://champagne-lonclas.com/",
    "logo": "https://champagne-lonclas.com/wp-content/uploads/2026/01/logo.svg"
  },
  {
    "name": "Bernard Naudé",
    "area": "Vallée de la Marne",
    "website": "https://www.champagne-bernard-naude.com/",
    "logo": "https://www.champagne-bernard-naude.com/assets/images/logo.png"
  },
  {
    "name": "Bernard Tornay",
    "area": "Montagne de Reims",
    "website": "https://www.champagne-tornay.fr/",
    "logo": "https://www.champagne-tornay.fr/local/cache-vignettes/L220xH62/logo-tornay-blanc-e2702.png?1773052260",
    "logoTone": "light-on-dark"
  },
  {
    "name": "Bertrand Charton",
    "area": "Montagne de Reims",
    "website": "https://www.champagne-bertrand-charton.com/",
    "logo": "https://www.champagne-bertrand-charton.com/wp-content/uploads/2025/04/LOGO-CHARTON-NOIR-1.png"
  },
  {
    "name": "Bertrand-Lapie",
    "area": "Vallée de la Marne",
    "website": "https://www.champagne-bertrandlapie.com/",
    "logo": "https://www.champagne-bertrandlapie.com/images/Champagne_Bertrand-Lapie_logo.png"
  },
  {
    "name": "Biard-Loyaux",
    "area": "Vallée de la Marne",
    "website": "https://www.champagne-biard-loyaux.fr/",
    "logo": "https://www.champagne-biard-loyaux.fr/assets/images/logo.png"
  },
  {
    "name": "Binon Coquard",
    "area": "Côte des Bar",
    "website": "https://champagne-binoncoquard.fr/",
    "logo": "https://champagne-binoncoquard.fr/wp-content/uploads/2019/05/logo-champagne-binon-coquard-wh.png",
    "logoTone": "light-on-dark"
  },
  {
    "name": "Blaise-Lourdez",
    "area": "Vallée de la Marne",
    "website": "https://www.blaiselourdez.fr/",
    "logo": "https://static.wixstatic.com/media/86881f_ede39442bcd14a708a277f70b89e08a8~mv2.png/v1/fill/w_320,h_111,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%20Champagne%20et%20BL%20algerian%20simple.png"
  },
  {
    "name": "Borel-Lucas",
    "area": "Côte des Blancs",
    "website": "https://champagne-borel-lucas.com/",
    "logo": "https://champagne-borel-lucas.com/wp-content/uploads/Champagne-Borel-Lucas-logo-150x150.png"
  },
  {
    "name": "Boude-Baudin",
    "area": "Vallée de la Marne",
    "website": "https://www.champagneboudebaudin.fr/",
    "logo": "https://www.champagneboudebaudin.fr/cdn/shop/files/logo-champagne-boude-baudin-WH.png?height=270&v=1761910271",
    "logoTone": "light-on-dark"
  },
  {
    "name": "Bouquet",
    "area": "Vallée de la Marne",
    "website": "https://champagne-bouquet.com/",
    "logo": "https://champagne-bouquet.com/wp-content/uploads/2024/06/logo-7.png"
  },
  {
    "name": "Bourgeois-Diaz",
    "area": "Vallée de la Marne",
    "website": "https://bourgeois-diaz.com/",
    "logo": "https://bourgeois-diaz.com/wp-content/uploads/2019/02/champagnebourgeois-diaz_logotype_3.svg",
    "logoTone": "light-on-dark"
  },
  {
    "name": "Boutillez-Guer",
    "area": "Montagne de Reims",
    "website": "https://www.champagne-boutillez-guer.fr/",
    "logo": "https://www.champagne-boutillez-guer.fr/wp-content/uploads/2024/05/logo_noir.png"
  },
  {
    "name": "Boutillez-Marchand",
    "area": "Montagne de Reims",
    "website": "https://www.champagne-boutillez-marchand.fr/",
    "logo": "https://www.champagne-boutillez-marchand.fr/assets/images/logo.png"
  },
  {
    "name": "Briaux Lenique",
    "area": "Vallée de la Marne",
    "website": "https://www.champagne-briaux-lenique.com/fr/",
    "logo": "https://www.champagne-briaux-lenique.com/wp-content/themes/champagnebriauxlenique/assets/images/logo_homepage.png"
  },
  {
    "name": "Brice",
    "area": "Montagne de Reims",
    "website": "https://champagne-brice.com/",
    "logo": "https://champagne-brice.com/wp-content/uploads/2021/11/logo_champagne_brice_bouzy.png"
  },
  {
    "name": "Brigitte Beaufort",
    "area": "Montagne de Reims",
    "website": "http://www.champagnebrigittebeaufort.fr/",
    "logo": "http://www.champagnebrigittebeaufort.fr/content/logo-couleur.svg"
  },
  {
    "name": "Abel Jobart",
    "area": "Montagne de Reims",
    "website": "https://www.champagne-abeljobart.com/",
    "logo": "https://www.champagne-abeljobart.com/uploads/n8lmhQuC/320x0_320x0/ChampagneAbelJobart_Sarcy_logo.png"
  },
  {
    "name": "Alain Bedel",
    "area": "Vallée de la Marne",
    "website": "https://www.champagne-bedel.com/",
    "logo": "https://www.champagne-bedel.com/UserDesign/Logo-index.svg"
  },
  {
    "name": "Alain Bernard",
    "area": "Vallée de la Marne",
    "website": "https://www.champagne-alain-bernard.com/fr/index",
    "logo": "https://www.champagne-alain-bernard.com/assets/images/logo.png"
  },
  {
    "name": "Alain Lallement",
    "area": "Montagne de Reims",
    "website": "https://www.champagne-alain-lallement.net/en/index",
    "logo": "https://www.champagne-alain-lallement.net/assets/images/logo.png"
  },
  {
    "name": "Alfred Tritant",
    "area": "Montagne de Reims",
    "website": "https://www.champagne-tritant.fr/",
    "logo": "https://www.champagne-tritant.fr/images/logo-atmg-g.png"
  },
  {
    "name": "Amyot",
    "area": "Côte des Bar",
    "website": "https://champagne-amyot.com/",
    "logo": "https://champagne-amyot.com/wp-content/uploads/2017/10/logo-noir.png"
  },
  {
    "name": "André Heucq",
    "area": "Vallée de la Marne",
    "website": "https://champagne-heucq.com/fr/",
    "logo": "https://champagne-heucq.com/wp-content/uploads/2019/02/logo-transparent.png"
  },
  {
    "name": "André Lenique",
    "area": "Vallée de la Marne",
    "website": "http://www.champagne-andre-lenique.com/",
    "logo": "http://www.champagne-andre-lenique.com/img/logo.png"
  },
  {
    "name": "Anthony Betouzet",
    "area": "Vallée de la Marne",
    "website": "https://www.champagne-ab.com/",
    "logo": "https://static.wixstatic.com/media/f7373b_d3a1e3e722494ca984605c1bea6109a8~mv2.png/v1/fill/w_111,h_130,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%20White.png",
    "logoTone": "light-on-dark"
  },
  {
    "name": "Ariston Jean-Antoine",
    "area": "Montagne de Reims",
    "website": "https://www.champagnearistonja.com/",
    "logo": "https://www.champagnearistonja.com/wp-content/uploads/2022/07/logo.png"
  },
  {
    "name": "Aspasie",
    "area": "Montagne de Reims",
    "website": "https://www.champagneaspasie.com/",
    "logo": "https://www.champagneaspasie.com/wp-content/uploads/2020/10/logo-champagne-aspasie.svg"
  },
  {
    "name": "Augustin",
    "area": "Montagne de Reims",
    "website": "https://www.champagne-augustin.com/fr/",
    "logo": "https://www.champagne-augustin.com/templates/untitled/images/designer/ea0179f7b200dd571bd9b02cda19762a_empreintelogo.png"
  },
  {
    "name": "B. Hennequin",
    "area": "Vallée de la Marne",
    "website": "https://champagnebhennequin.com/",
    "logo": "https://champagnebhennequin.com/wp-content/uploads/2019/07/Logo_Light.png",
    "logoTone": "light-on-dark"
  },
  {
    "name": "Baron Albert",
    "area": "Vallée de la Marne",
    "website": "https://www.champagnebaronalbert.fr/index-fr",
    "logo": "https://www.champagnebaronalbert.fr/www/img/logo.png"
  },
  {
    "name": "Beaumont des Crayères",
    "area": "Vallée de la Marne",
    "website": "https://www.champagne-beaumont.com/",
    "logo": "https://www.champagne-beaumont.com/wp-content/uploads/2022/09/logo_principal.svg"
  },
  {
    "name": "Belouis Gricourt",
    "area": "Vallée de la Marne",
    "website": "https://www.champagne-belouis.com/",
    "logo": "https://www.champagne-belouis.com/img/belouis-gricourt-logo-1541423280.jpg"
  },
  {
    "name": "Benoit Cocteaux",
    "area": "Côte des Blancs",
    "website": "https://www.champagnebenoitcocteaux.com/",
    "logo": "https://www.champagnebenoitcocteaux.com/wp-content/uploads/2020/01/logo-horizontal.png"
  },
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
    "name": "Canard-Duchêne",
    "area": "Montagne de Reims",
    "website": "https://canard-duchene.fr/",
    "logo": "https://canard-duchene.fr/cdn/shop/files/canard-logo.svg?v=1717162319&width=600"
  },
  {
    "name": "J. Lassalle",
    "area": "Montagne de Reims",
    "website": "https://jlassalle.com/",
    "logo": "https://jlassalle.com/wp-content/themes/champagne-lassalle/img/LogoLassalleBlanc.svg",
    "logoTone": "light-on-dark"
  },
  {
    "name": "Nicolas Maillart",
    "area": "Montagne de Reims",
    "website": "https://champagne-maillart.fr/",
    "logo": "https://champagne-maillart.fr/wp-content/themes/theme_modele/img/logo.png"
  },
  {
    "name": "Bérêche & Fils",
    "area": "Montagne de Reims",
    "website": "https://www.bereche.com/",
    "logo": "https://www.bereche.com/images/logo.svg"
  },
  {
    "name": "Thierry Collin Père & Fils",
    "area": "Montagne de Reims",
    "website": "https://www.champagne-collin.fr/",
    "logo": "https://www.champagne-collin.fr/wp-content/uploads/2022/05/Champagne-Collin-Logo-Header.svg"
  },
  {
    "name": "Mouzon-Leroux",
    "area": "Montagne de Reims",
    "website": "https://www.champagne-mouzon-leroux.com/fr",
    "logo": "https://www.champagne-mouzon-leroux.com/sites/all/themes/framework/img/logo_couleur.png"
  },
  {
    "name": "Bonnet-Ponson",
    "area": "Montagne de Reims",
    "website": "https://www.champagne-bonnet-ponson.com/",
    "logo": "https://www.champagne-bonnet-ponson.com/wp-content/uploads/2024/11/Champagnebonnetponson_logo_FAF8F8_300px_2.svg",
    "logoTone": "light-on-dark"
  },
  {
    "name": "Piollot",
    "area": "Côte des Bar",
    "website": "https://www.piollot.com/",
    "logo": "https://www.piollot.com/content/uploads/2021/11/LOGO-21.png",
    "logoTone": "light-on-dark"
  },
  {
    "name": "Domaine La Borderie",
    "area": "Côte des Bar",
    "website": "https://www.champagne-domaine-la-borderie.fr/",
    "logo": "https://www.champagne-domaine-la-borderie.fr/wp-content/uploads/2020/06/logo.jpg"
  },
  {
    "name": "Thomas De Marne",
    "area": "Côte des Bar",
    "website": "https://www.champagne-thomas-de-marne.com/blank-1",
    "logo": "https://static.wixstatic.com/media/fdb6b8_d8d77ce1cafa43fcb6b7a8bbf4215b38~mv2.png/v1/fill/w_130,h_114,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/CH%20TDM-LOGO%202024-SEUL_Plan%20de%20travail%201.png"
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
    "logo": "https://www.lebrundeneuville.fr/sites/all/themes/framework/img/logo.png",
    "logoTone": "light-on-dark"
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
    "logo": "https://www.champagne-chapuy.com/wp-content/uploads/2024/02/logo-1.png",
    "logoTone": "light-on-dark"
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
    "name": "Guy Larmandier",
    "area": "Côte des Blancs",
    "website": "https://www.champagneguylarmandier.com/fr",
    "logo": "https://www.champagneguylarmandier.com/logos/larmandier.svg"
  },
  {
    "name": "Jean Milan",
    "area": "Côte des Blancs",
    "website": "https://www.champagne-milan.com/accueil/",
    "logo": "https://www.champagne-milan.com/wp-content/uploads/2023/10/logo-champagne-jean-milan.png"
  },
  {
    "name": "Pertois-Lebrun",
    "area": "Côte des Blancs",
    "website": "https://www.champagne-pertoislebrun.com/",
    "logo": "https://champagne-pertoislebrun.com/wp-content/themes/pertois-lebrun/assets/img/age-verification-logo.png"
  },
  {
    "name": "Lancelot-Royer",
    "area": "Côte des Blancs",
    "website": "https://champagne-lancelot-royer.fr/",
    "logo": "https://champagne-lancelot-royer.fr/wp-content/uploads/2026/01/PLR_Brand_Blason_Noir_100_-scaled.png"
  },
  {
    "name": "Bernard Rémy",
    "area": "Côte des Blancs",
    "website": "https://www.champagnebernardremy.com/",
    "logo": "https://www.champagnebernardremy.com/img/logo.png?1598953992"
  },
  {
    "name": "A.D. Coutelas",
    "area": "Vallée de la Marne",
    "website": "https://champagne-adcoutelas.com/",
    "logo": "https://champagne-adcoutelas.com/wp-content/uploads/2023/11/logo-blanc.png",
    "logoTone": "light-on-dark"
  },
  {
    "name": "Mercier",
    "area": "Vallée de la Marne",
    "website": "https://www.champagnemercier.com/fr",
    "logo": "https://www.champagnemercier.com/logo.svg"
  },
  {
    "name": "J.M. Sélèque",
    "area": "Vallée de la Marne",
    "website": "https://www.jmseleque.fr/accueil/",
    "logo": "https://www.jmseleque.fr/wp-content/themes/jmseleque/dist/images/Logo_JMS.svg"
  },
  {
    "name": "Bouché Père & Fils",
    "area": "Vallée de la Marne",
    "website": "https://www.champagne-bouche.fr/accueil/",
    "logo": "https://www.champagne-bouche.fr/wp-content/uploads/2022/04/logon.png"
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
    "website": "https://champagneapollonis.com/",
    "logo": "https://champagneapollonis.com/local/cache-vignettes/L200xH100/logo-apollonis-2024-94c21.png?1730281838"
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
    "logo": "https://francis-boulard.com/wp-content/uploads/2023/12/Logo-Champagne-blanc-dore-1024x282.png",
    "logoTone": "light-on-dark"
  },
  {
    "name": "François Heucq",
    "area": "Vallée de la Marne",
    "website": "https://www.champagneheucq.fr/",
    "logo": "https://www.champagneheucq.fr/wp-content/uploads/2022/03/cropped-BlocMarque-francois-heucq.png"
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
    "website": "https://www.champagne-nicaise.com/fr/",
    "logo": "https://www.champagne-nicaise.com/smarty/wireframe23/media/images/logo.png"
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
    "website": "https://www.champagne-belin.fr/",
    "logo": "https://www.champagne-belin.fr/Logo.svg"
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
    "logo": "https://charlesheidsieck.com/sites/all/themes/champ/logo_charles_heidsieck.png"
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
    "logo": "https://www.taittinger.com/_nuxt/logo-taittinger.BDXUrb-k.svg"
  },
  {
    "name": "Virginie T.",
    "area": "Montagne de Reims",
    "website": "https://www.champagnevirginiet.com/",
    "logo": "https://www.champagnevirginiet.com/cdn/shop/files/Logo-VirgineT.svg?v=1755783445&width=600"
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
    "logo": "https://www.piper-heidsieck.com/wp-content/uploads/2024/06/logo.svg"
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
    "logo": "https://www.champagneautreau.com/wp-content/uploads/2023/02/Logo-Noir-HD.svg"
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
    "website": "https://gonet-medeville.com/",
    "logo": "https://gonet-medeville.com/wp-content/uploads/2021/11/logo-vignobles-gonet-medeville-2021.png"
  },
  {
    "name": "Rodez",
    "area": "Montagne de Reims",
    "website": "https://www.champagne-rodez.com/",
    "logo": "https://www.champagne-rodez.com/wp-content/uploads/2022/03/Logo-B-rodez.png"
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
    "website": "https://famillepenet.com/",
    "logo": "https://famillepenet.com/wp-content/themes/cochetconcept/svg/logo-maison-penet-terroir-sublime.svg"
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
    "name": "Camille Savès",
    "area": "Montagne de Reims",
    "website": "https://www.champagne-saves.com/",
    "logo": "https://www.champagne-saves.com/wp-content/themes/saves/svg/logo_saves.svg",
    "logoTone": "light-on-dark"
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
    "website": "https://www.heidsieckandco-monopole.com/",
    "logo": "https://www.heidsieckandco-monopole.com/build/images/logo-monopole.68e0ec36.svg"
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
    "website": "https://www.champagnefumeytassin.com/",
    "logo": "https://www.champagnefumeytassin.com/wp-content/uploads/2025/03/logo-FUMEY-TASSIN.png"
  },
  {
    "name": "Alexandre Bonnet",
    "area": "Côte des Bar",
    "website": "https://alexandrebonnet.com/",
    "logo": "https://alexandrebonnet.com/sites/Bonnet/themes/tweme/img/bloc-marque-old.svg"
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
    "website": "https://champagne-breton-stephane.fr/",
    "logo": "https://champagne-breton-stephane.fr/wp-content/uploads/2025/11/BRETON-CORENTIN-logo.png"
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
    "name": "Drappier",
    "area": "Côte des Bar",
    "website": "https://www.champagne-drappier.com/fr/",
    "logo": "https://www.champagne-drappier.com/sites/drappier/themes/drappier/img/logo.png"
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
    "logo": "https://www.legras-et-haas.com/wp-content/themes/legras-et-haas/assets/images/logo-noir.svg"
  },
  {
    "name": "André Jacquart",
    "area": "Côte des Blancs",
    "website": "https://www.champagne-andre-jacquart.com/",
    "logo": "https://www.champagne-andre-jacquart.com/image/catalog/logo_jacquart.png"
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
  },
  {
    "name": "Jacques Selosse",
    "area": "Côte des Blancs",
    "website": "https://www.selosse-lesavises.com/",
    "logo": "https://www.selosse-lesavises.com/fichiers/favicon-150x150.png"
  },
  {
    "name": "Salon",
    "area": "Côte des Blancs",
    "website": "https://www.champagne-salon.fr/fr/",
    "logo": "https://www.champagne-salon.fr/user/themes/salon-champagne/img/champagne-salon.svg",
    "logoTone": "light-on-dark"
  },
  {
    "name": "Pierre Péters",
    "area": "Côte des Blancs",
    "website": "https://www.champagne-peters.com/fr",
    "logo": "https://www.champagne-peters.com/sites/all/themes/best_responsive/images/logo-peters.png"
  },
  {
    "name": "Étienne Calsac",
    "area": "Côte des Blancs",
    "website": "https://champagne-etienne-calsac.com/",
    "logo": "https://champagne-etienne-calsac.com/wp-content/uploads/2020/10/EC.svg"
  },
  {
    "name": "Suenen",
    "area": "Côte des Blancs",
    "website": "https://champagne-suenen.fr/?lang=en",
    "logo": "https://champagne-suenen.fr/images/logo.png",
    "logoTone": "light-on-dark"
  },
  {
    "name": "Stéphane Regnault",
    "area": "Côte des Blancs",
    "website": "https://www.champagne-stephane-regnault.com/",
    "logo": "https://static.wixstatic.com/media/80d4d2_6ce9581156d141648e3b1e8ef48470a0~mv2.png/v1/fill/w_216,h_17,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo-stephaneregnault.png"
  },
  {
    "name": "François Girard",
    "area": "Côte des Blancs",
    "website": "https://www.champagne-francois-girard.com/",
    "logo": "https://www.champagne-francois-girard.com/img/510091www1-logo-1537965727.jpg"
  },
  {
    "name": "Gimonnet-Gonet",
    "area": "Côte des Blancs",
    "website": "https://www.champagne-gimonnet-gonet.com/",
    "logo": "https://www.champagne-gimonnet-gonet.com/wp-content/uploads/2025/12/logo.svg",
    "logoTone": "light-on-dark"
  },
  {
    "name": "Michel Turgy",
    "area": "Côte des Blancs",
    "website": "https://champagne-turgy.com/",
    "logo": "https://champagne-turgy.com/uploads/media/images/cms/medias/thumb_/cms/medias/6853cde63f204_images_medium.webp"
  },
  {
    "name": "Lancelot-Pienne",
    "area": "Côte des Blancs",
    "website": "https://www.champagne-lancelot-pienne.fr/",
    "logo": "https://www.champagne-lancelot-pienne.fr/wp-content/uploads/2024/01/logo-c24.png"
  },
  {
    "name": "Moët & Chandon",
    "area": "Vallée de la Marne",
    "website": "https://www.moet.com/en-int",
    "logo": "https://www.moet.com/themes/custom/moet/images/logo-red-header.png"
  },
  {
    "name": "A. R. Lenoble",
    "area": "Vallée de la Marne",
    "website": "https://champagne-lenoble.com/",
    "logo": "https://champagne-lenoble.com/wp-content/uploads/2024/11/LOGO-small.svg"
  },
  {
    "name": "Dehours",
    "area": "Vallée de la Marne",
    "website": "https://champagne-dehours.fr/",
    "logo": "https://champagne-dehours.fr/wp-content/uploads/2025/07/logo-champagne-dehours.svg",
    "logoTone": "light-on-dark"
  },
  {
    "name": "Marguet",
    "area": "Montagne de Reims",
    "website": "https://champagne-marguet.fr/",
    "logo": "https://champagne-marguet.fr/wp-content/uploads/2025/03/Logo-Marguet.png"
  },
  {
    "name": "Charles Dufour",
    "area": "Côte des Bar",
    "website": "https://www.charlesdufour.fr/",
    "logo": "https://www.charlesdufour.fr/images/logo-blanc.png",
    "logoTone": "light-on-dark"
  },
  {
    "name": "Krug",
    "area": "Montagne de Reims",
    "website": "https://www.krug.com/en-gb",
    "logo": "https://www.krug.com/themes/custom/krug_base/logo.svg"
  },
  {
    "name": "Ruinart",
    "area": "Montagne de Reims",
    "website": "https://www.ruinart.com/fr-fr/home",
    "logo": "https://www.ruinart.com/on/demandware.static/-/Library-Sites-Ruinart-shared/default/dw03fd216e/ruinart-logo-v1.svg"
  },
  {
    "name": "Veuve Clicquot",
    "area": "Montagne de Reims",
    "website": "https://www.veuveclicquot.com/en-int/home",
    "logo": "https://www.veuveclicquot.com/on/demandware.static/-/Library-Sites-VeuveClicquot-shared/default/dw0cbe8a21/images/header/logo-default.svg"
  },
  {
    "name": "Pommery",
    "area": "Montagne de Reims",
    "website": "https://www.champagnepommery.com/",
    "logo": "https://www.champagnepommery.com/build/images/logo-white2.6013fb44.svg",
    "logoTone": "light-on-dark"
  },
  {
    "name": "Lallier",
    "area": "Vallée de la Marne",
    "website": "https://www.champagne-lallier.com/fr-fr/",
    "logo": "https://www.champagne-lallier.com/app/uploads/wdf-champagne-lallier-development/sites/3/2025/12/lallier-logo-secondary.webp"
  },
  {
    "name": "Gosset",
    "area": "Vallée de la Marne",
    "website": "https://www.champagne-gosset.com/",
    "logo": "https://www.champagne-gosset.com/site/assets/img/gosset_logo_full.svg"
  },
  {
    "name": "Philipponnat",
    "area": "Vallée de la Marne",
    "website": "https://www.philipponnat.com/",
    "logo": "https://ik.imagekit.io/philipponnat/wp-content/uploads/2026/04/logo.png"
  },
  {
    "name": "Delamotte",
    "area": "Côte des Blancs",
    "website": "https://www.champagne-delamotte.com/fr/",
    "logo": "https://www.champagne-delamotte.com/img/logo/logo-delamotte.svg"
  },
  {
    "name": "Diebolt-Vallois",
    "area": "Côte des Blancs",
    "website": "https://www.diebolt-vallois.com/",
    "logo": "https://www.diebolt-vallois.com/images/logo.svg"
  }
];
