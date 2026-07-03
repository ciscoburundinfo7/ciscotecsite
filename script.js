/*==========================================================
        CISCOTEC FOR IT SOLUTIONS BURUNDI
        SCRIPT PROFESSIONNEL
        Développé par Ir IT Daniel CIRAGIYE
==========================================================*/

"use strict";

/*==========================================================
                    CONFIGURATION
==========================================================*/

const whatsappNumber = "25761408819";

const AUTO_SLIDE_TIME = 5000;

/*==========================================================
                BASE DES RÉALISATIONS
==========================================================*/
/*
Ajoutez toutes les réalisations ici.

Une seule modification dans ce tableau mettra automatiquement
à jour :

✔ index.html
✔ realisations.html
✔ recherche
✔ filtres
✔ WhatsApp
✔ Slider
*/

const realisations = [

{

id:1,

titre:"Installation professionnelle de caméras de vidéosurveillance",

categorie:"camera",

image:"camera1.jpg",

resume:"Installation complète de caméras IP et analogiques.",

description:"Installation des systèmes modernes de vidéosurveillance pour entreprises, institutions, commerces et résidences avec configuration DVR/NVR, accès à distance et maintenance.",

whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite comprendre davantage votre service d'installation professionnelle de caméras de vidéosurveillance.")}`

},

{

id:2,

titre:"Déploiement de réseau informatique LAN",

categorie:"lan",

image:"lan1.jpg",

resume:"Conception et câblage réseau professionnel.",

description:"Installation complète de réseaux locaux filaires avec baies de brassage, switches Cisco, routeurs, prises RJ45 et certification du câblage.",

whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite obtenir des informations sur vos réseaux LAN.")}`

},

{

id:3,

titre:"Infrastructure réseau WLAN",

categorie:"wlan",

image:"wlan1.jpg",

resume:"Couverture Wi-Fi professionnelle.",

description:"Étude de couverture radio, installation des points d'accès, configuration sécurisée et optimisation des performances Wi-Fi.",

whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite comprendre davantage vos solutions WLAN.")}`

},

{

id:4,

titre:"Développement Web",

categorie:"web",

image:"web1.jpg",

resume:"Création des applications web modernes.",

description:"Développement de sites Internet, plateformes de gestion, applications administratives et solutions numériques adaptées aux besoins des clients.",

whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite développer une application Web.")}`

},

{

id:5,

titre:"Développement Mobile",

categorie:"mobile",

image:"mobile1.jpg",

resume:"Applications Android professionnelles.",

description:"Développement d'applications mobiles Android performantes, intuitives et sécurisées.",

whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite développer une application mobile.")}`

},

{

id:6,

titre:"Formation Informatique",

categorie:"formation",

image:"formation1.jpg",

resume:"Formation pratique et professionnelle.",

description:"Cours en réseaux informatiques, bureautique, développement Web, cybersécurité, Cisco et maintenance informatique.",

whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite connaître vos formations informatiques.")}`

},

{

id:7,

titre:"Graphic Design",

categorie:"design",

image:"design1.jpg",

resume:"Création graphique professionnelle.",

description:"Invitations de mariage, affiches, logos, branding, cartes de visite, brochures et supports de communication.",

whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite des informations sur vos services de Graphic Design.")}`

},

{

id:8,

titre:"Services d'Imprimerie",

categorie:"print",

image:"print1.jpg",

resume:"Impression et finition.",

description:"Impression couleur, reliure, plastification, mise en page et finition professionnelle des documents.",

whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite connaître vos services d'impression.")}`

},

{

id:9,

titre:"Équipements Networking",

categorie:"network",

image:"network1.jpg",

resume:"Équipements Cisco et réseaux.",

description:"Configuration et fourniture de routeurs, switches, points d'accès, baies de brassage et accessoires réseau.",

whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite des informations sur vos équipements réseau.")}`

},

{

id:10,

titre:"Door Access Control",

categorie:"access",

image:"access1.jpg",

resume:"Contrôle d'accès sécurisé.",

description:"Installation des systèmes biométriques, badges RFID, contrôle d'accès et gestion des présences.",

whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite comprendre vos solutions Door Access Control.")}`

},

{

id:11,

titre:"Installation de caméras IP Hikvision",

categorie:"camera",

image:"camera2.jpg",

resume:"Installation de caméras IP haute définition.",

description:"Déploiement professionnel de caméras IP Hikvision avec accès à distance, enregistrement sécurisé et surveillance 24h/24.",

whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite comprendre davantage votre installation de caméras IP Hikvision.")}`

},

{

id:12,

titre:"Installation de caméras PTZ",

categorie:"camera",

image:"camera3.jpg",

resume:"Caméras motorisées PTZ.",

description:"Installation de caméras PTZ permettant la rotation, le zoom optique et la surveillance intelligente des grands espaces.",

whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite des informations sur les caméras PTZ.")}`

},

{

id:13,

titre:"Centre de surveillance CCTV",

categorie:"camera",

image:"camera4.jpg",

resume:"Salle de contrôle CCTV.",

description:"Conception et mise en œuvre de centres de surveillance avec écrans multiples et systèmes NVR professionnels.",

whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite installer un centre de surveillance CCTV.")}`

},

{

id:14,

titre:"Câblage réseau structuré",

categorie:"lan",

image:"lan2.jpg",

resume:"Installation de câblage RJ45.",

description:"Conception et installation d'infrastructures LAN conformes aux normes internationales.",

whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite des informations sur votre câblage réseau structuré.")}`

},

{

id:15,

titre:"Baie de brassage informatique",

categorie:"lan",

image:"lan3.jpg",

resume:"Organisation professionnelle des réseaux.",

description:"Installation de baies de brassage avec panneaux de connexion, switches Cisco et gestion des câbles.",

whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite installer une baie de brassage.")}`

},

{

id:16,

titre:"Maintenance des réseaux LAN",

categorie:"lan",

image:"lan4.jpg",

resume:"Diagnostic et optimisation réseau.",

description:"Maintenance préventive et corrective des infrastructures LAN afin d'assurer leur disponibilité.",

whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite la maintenance de mon réseau LAN.")}`

},

{

id:17,

titre:"Installation Wi-Fi professionnelle",

categorie:"wlan",

image:"wlan2.jpg",

resume:"Points d'accès Wi-Fi.",

description:"Installation de points d'accès Wi-Fi performants avec couverture optimale.",

whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite installer un réseau Wi-Fi professionnel.")}`

},

{

id:18,

titre:"Étude de couverture radio",

categorie:"wlan",

image:"wlan3.jpg",

resume:"Analyse de couverture sans fil.",

description:"Étude complète de couverture radio permettant un déploiement Wi-Fi efficace.",

whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite réaliser une étude de couverture Wi-Fi.")}`

},

{

id:19,

titre:"Optimisation des performances Wi-Fi",

categorie:"wlan",

image:"wlan4.jpg",

resume:"Optimisation des réseaux WLAN.",

description:"Amélioration des performances des réseaux Wi-Fi grâce aux bonnes pratiques d'ingénierie radio.",

whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite optimiser mon réseau Wi-Fi.")}`

},

{

id:20,

titre:"Développement d'applications Web & Mobile",

categorie:"web",

image:"web2.jpg",

resume:"Solutions numériques sur mesure.",

description:"Conception d'applications Web et Mobile modernes répondant aux besoins des entreprises et institutions.",

whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite développer une application Web ou Mobile.")}`

},

{

id:21,

titre:"Développement d'applications Android",

categorie:"mobile",

image:"mobile2.jpg",

resume:"Applications Android modernes.",

description:"Développement d'applications Android sécurisées, intuitives et performantes adaptées aux entreprises, écoles et organisations.",

whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite développer une application Android.")}`

},

{

id:22,

titre:"Plateforme de gestion en ligne",

categorie:"web",

image:"web3.jpg",

resume:"Applications de gestion professionnelles.",

description:"Conception de plateformes de gestion en ligne pour entreprises, institutions publiques, écoles et microfinances.",

whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite développer une plateforme de gestion en ligne.")}`

},

{

id:23,

titre:"Formation Cisco CCNA",

categorie:"formation",

image:"formation2.jpg",

resume:"Formation Cisco Networking.",

description:"Formation professionnelle Cisco CCNA avec travaux pratiques sur Packet Tracer et équipements réels.",

whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite suivre la formation Cisco CCNA.")}`

},

{

id:24,

titre:"Formation Développement Web",

categorie:"formation",

image:"formation3.jpg",

resume:"HTML5, CSS3, JavaScript, PHP.",

description:"Formation pratique en développement Web moderne avec réalisation de projets professionnels.",

whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite suivre une formation en Développement Web.")}`

},

{

id:25,

titre:"Formation Maintenance Informatique",

categorie:"formation",

image:"formation4.jpg",

resume:"Maintenance des ordinateurs.",

description:"Formation sur le diagnostic, la réparation, l'installation et la maintenance des équipements informatiques.",

whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite suivre une formation en maintenance informatique.")}`

},

{

id:26,

titre:"Création de Logos professionnels",

categorie:"design",

image:"design2.jpg",

resume:"Identité visuelle moderne.",

description:"Création de logos professionnels adaptés aux entreprises, associations et institutions.",

whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite créer un logo professionnel.")}`

},

{

id:27,

titre:"Conception d'affiches publicitaires",

categorie:"design",

image:"design3.jpg",

resume:"Affiches et flyers.",

description:"Création graphique de supports publicitaires modernes destinés aux entreprises et événements.",

whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite créer une affiche publicitaire.")}`

},

{

id:28,

titre:"Invitations de mariage personnalisées",

categorie:"design",

image:"design4.jpg",

resume:"Design élégant.",

description:"Conception d'invitations de mariage modernes, personnalisées et adaptées aux besoins des clients.",

whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite réaliser des invitations de mariage.")}`

},

{

id:29,

titre:"Branding et identité visuelle",

categorie:"design",

image:"design5.jpg",

resume:"Image professionnelle.",

description:"Développement d'une identité visuelle complète comprenant logo, couleurs, cartes de visite et charte graphique.",

whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite développer mon identité visuelle.")}`

},

{

id:30,

titre:"Impression numérique haute qualité",

categorie:"print",

image:"print2.jpg",

resume:"Impression couleur professionnelle.",

description:"Impression haute résolution de documents, brochures, affiches et supports administratifs.",

whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite obtenir un devis pour une impression numérique.")}`

},

{

id:31,

titre:"Reliure professionnelle de documents",

categorie:"print",

image:"print3.jpg",

resume:"Reliure et finition de qualité.",

description:"Reliure spirale, thermique et couverture professionnelle pour mémoires, rapports et livres.",

whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite faire relier mes documents.")}`

},

{

id:32,

titre:"Impression et plastification",

categorie:"print",

image:"print4.jpg",

resume:"Protection durable des documents.",

description:"Impression couleur et plastification de cartes, certificats, attestations et autres documents importants.",

whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite imprimer et plastifier mes documents.")}`

},

{

id:33,

titre:"Mise en page et impression de livres",

categorie:"print",

image:"print5.jpg",

resume:"Publication professionnelle.",

description:"Mise en page professionnelle, correction, impression et finition des mémoires, livres et rapports.",

whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite imprimer un livre ou un mémoire.")}`

},

{

id:34,

titre:"Configuration des routeurs Cisco",

categorie:"network",

image:"network2.jpg",

resume:"Configuration avancée Cisco.",

description:"Configuration professionnelle des routeurs Cisco, routage statique, dynamique, NAT, ACL et sécurité réseau.",

whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite configurer un routeur Cisco.")}`

},

{

id:35,

titre:"Configuration des switches Cisco",

categorie:"network",

image:"network3.jpg",

resume:"Gestion des VLAN.",

description:"Configuration des switches Cisco, VLAN, Trunk, STP, EtherChannel et optimisation des réseaux.",

whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite configurer un switch Cisco.")}`

},

{

id:36,

titre:"Installation d'armoires réseau",

categorie:"network",

image:"network4.jpg",

resume:"Baies informatiques.",

description:"Installation d'armoires réseau avec organisation des équipements et gestion professionnelle des câbles.",

whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite installer une armoire réseau.")}`

},

{

id:37,

titre:"Installation de fibres optiques",

categorie:"network",

image:"network5.jpg",

resume:"Connectivité haut débit.",

description:"Installation, raccordement et tests de réseaux à fibre optique pour entreprises et institutions.",

whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite installer un réseau fibre optique.")}`

},

{

id:38,

titre:"Maintenance des équipements réseau",

categorie:"network",

image:"network6.jpg",

resume:"Diagnostic et dépannage.",

description:"Maintenance préventive et corrective des équipements réseau afin d'assurer leur disponibilité permanente.",

whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite la maintenance de mes équipements réseau.")}`

},

{

id:39,

titre:"Audit et sécurité réseau",

categorie:"network",

image:"network7.jpg",

resume:"Audit de sécurité.",

description:"Audit complet des infrastructures réseau, identification des vulnérabilités et recommandations de sécurité.",

whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite réaliser un audit de sécurité réseau.")}`

},

{

id:40,

titre:"Contrôle d'accès biométrique",

categorie:"access",

image:"access2.jpg",

resume:"Sécurité biométrique.",

description:"Installation de systèmes biométriques avec empreintes digitales et reconnaissance faciale.",

whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite installer un système biométrique.")}`

},

{

id:41,

titre:"Gestion intelligente des accès",

categorie:"access",

image:"access3.jpg",

resume:"Contrôle d'accès sécurisé.",

description:"Installation de lecteurs RFID, serrures électroniques, contrôle des présences et gestion des accès sécurisés.",

whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite installer un système de contrôle d'accès.")}`

},

{

id:42,

titre:"Système de contrôle d'accès par badge RFID",

categorie:"access",

image:"access4.jpg",

resume:"Gestion sécurisée des accès par badge.",

description:"Installation de systèmes RFID professionnels permettant le contrôle des accès, la gestion des utilisateurs et l'enregistrement des événements pour les entreprises, écoles et institutions.",

whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite obtenir des informations sur votre système de contrôle d'accès par badge RFID.")}`

},
{

id:43,

titre:"Connexion satélitaire STARLINK",

categorie:"WLAN",

image:"starlink1.jpg",

resume:"Gestion sécurisée des accès par badge.",

description:"Installation de STARLINK professionnels et extension en cas de besoin permettant de couvrir une grande zone, la gestion des accès  pour les utilisateurs et l'enregistrement des événements pour les entreprises, écoles et institutions.",

whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite obtenir des informations sur STARLINK.")}`

},
{
id:44,
titre:"Switch PoE HIKVISION DS-3E0318P-E/M",
categorie:"network",
image:"hik_switch_poe.jpg",
resume:"Alimentation + data sur 1 seul câble.",
description:"Switch 16 ports PoE+ pour alimenter caméras, points d’accès et téléphones IP sans prises multiples.\nRéduit 50% des coûts d’installation et évite les pannes d’alim.\nGère 250m en mode Extend pour couvrir entrepôts et parkings.",
whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite obtenir des informations sur le Switch PoE HIKVISION DS-3E0318P-E/M.")}`
},
{
id:45,
titre:"Routeur 4G/5G HIKVISION DS-3WR04G-4G",
categorie:"network",
image:"hik_4g_router.jpg",
resume:"Internet partout sans fibre.",
description:"Routeur 4G/5G avec failover automatique sur SIM pour sites isolés ou chantiers.\nGarde le réseau actif 24/7 même si la fibre tombe.\nDébit stable pour caméras IP, pointage et visio d’entreprise.",
whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite obtenir des informations sur le Routeur 4G/5G HIKVISION DS-3WR04G-4G.")}`
},
{
id:46,
titre:"Point d’Accès Wi-Fi 6 HIKVISION EAP260",
categorie:"network",
image:"hik_wifi6.jpg",
resume:"Wi-Fi dense et ultra-rapide.",
description:"AP Wi-Fi 6 pour salles de classe, bureaux open space et hôtels.\nGère 200+ appareils sans ralentir grâce au OFDMA.\nCouverture large = moins d’AP à acheter pour couvrir tout le bâtiment.",
whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite obtenir des informations sur le Point d’Accès Wi-Fi 6 HIKVISION EAP260.")}`
},
{
id:47,
titre:"NVR HIKVISION DS-7616NX-I2/16P",
categorie:"camera",
image:"hik_nvr_16p.jpg",
resume:"Le cerveau de votre vidéosurveillance.",
description:"NVR 16 canaux PoE intégré + IA AcuSense pour filtrer les fausses alertes.\nStockage 2x10To, lecture instantanée et recherche par humain/véhicule.\nVous gagnez des heures d’investigation et vous réagissez 3x plus vite.",
whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite obtenir des informations sur le NVR HIKVISION DS-7616NX-I2/16P.")}`
},
{
id:48,
titre:"Caméra Bullet 4MP HIKVISION DS-2CD2046G2-I",
categorie:"camera",
image:"hik_bullet_4mp.jpg",
resume:"Détails nets jour comme nuit.",
description:"Bullet IP 4MP avec IR 30m et WDR 120dB pour parkings et façades.\nImage ultra nette même contre-jour ou la nuit.\nDissuasion visible + preuves exploitables par la police.",
whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite obtenir des informations sur la Caméra Bullet 4MP HIKVISION DS-2CD2046G2-I.")}`
},
{
id:49,
titre:"Caméra Dôme ColorVu 4MP HIKVISION DS-2CD1347G2-LU",
categorie:"camera",
image:"hik_colorvu.jpg",
resume:"Couleur 24h/24 sans projecteur.",
description:"Dôme ColorVu avec lumière blanche et micro intégré pour entrées et bureaux.\nIdentifie vêtements, couleurs de voiture même de nuit.\nMoins de zones d’ombre = moins d’intrusions non détectées.",
whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite obtenir des informations sur la Caméra Dôme ColorVu HIKVISION.")}`
},
{
id:50,
titre:"Caméra PTZ 8MP HIKVISION DS-2DE4A425IW-AE",
categorie:"camera",
image:"hik_ptz_25x.jpg",
resume:"Zoom 25x pour couvrir large.",
description:"PTZ 4MP 25x avec suivi auto d’intrus pour périmètres et stades.\nUne seule caméra remplace 4 fixes grâce au balayage 360°.\nRéduit le budget matériel tout en gardant zéro angle mort.",
whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite obtenir des informations sur la Caméra PTZ HIKVISION DS-2DE4A425IW-AE.")}`
},
{
id:51,
titre:"Caméra Thermique HIKVISION DS-2TD1217B",
categorie:"camera",
image:"hik_thermal.jpg",
resume:"Détection avant intrusion.",
description:"Bi-spectrale thermique + optique pour clôtures et sites sensibles.\nDétecte une présence à 150m même dans le brouillard ou noir total.\nAlerte préventive = intervention avant effraction.",
whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite obtenir des informations sur la Caméra Thermique HIKVISION DS-2TD1217B.")}`
},
{
id:52,
titre:"Interphone Vidéo IP HIKVISION DS-KIS701P",
categorie:"network",
image:"hik_intercom.jpg",
resume:"Contrôle d’accès visuel.",
description:"Visiophone IP 2 fils avec déverrouillage à distance via mobile.\nFiltre visiteurs et livreurs sans ouvrir la porte.\nSécurité + confort pour écoles, bureaux et résidences.",
whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite obtenir des informations sur l’Interphone Vidéo IP HIKVISION DS-KIS701P.")}`
},
{
id:53,
titre:"Lecteur de Badge HIKVISION DS-K1104MK",
categorie:"network",
image:"hik_badge.jpg",
resume:"Accès traçable et sécurisé.",
description:"Contrôle d’accès Mifare avec journalisation de chaque passage.\nBloque les badges perdus en 1 clic depuis le logiciel.\nAudit complet pour RH et conformité sécurité.",
whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite obtenir des informations sur le Lecteur de Badge HIKVISION DS-K1104MK.")}`
},
{
id:54,
titre:"Switch Core 10G HIKVISION DS-3E3526P-EI",
categorie:"network",
image:"hik_core_switch.jpg",
resume:"Backbone réseau sans goulot.",
description:"Switch Layer 3 24x Gigabit + 2x10G SFP pour interconnexion de bâtiments.\nAgrégation et VLAN pour isoler vidéosurveillance, invités, serveurs.\nRéseau fluide même à pleine charge caméra 4K.",
whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite obtenir des informations sur le Switch Core HIKVISION DS-3E3526P-EI.")}`
},
{
id:55,
titre:"Disque Dur Surveillance HIKVISION 6To",
categorie:"camera",
image:"hik_hdd_6to.jpg",
resume:"Archivage fiable 24/7.",
description:"HDD SkyHawk conçu pour écriture continue NVR 7j/7.\nTolère vibrations et chaleur de salle technique.\nZéro perte d’images = preuves disponibles quand vous en avez besoin.",
whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite obtenir des informations sur le Disque Dur Surveillance HIKVISION 6To.")}`
},
{
id:56,
titre:"Caméra Fisheye 12MP HIKVISION DS-2CD6365G0-IVS",
categorie:"camera",
image:"hik_fisheye.jpg",
resume:"1 caméra = 4 angles.",
description:"Fisheye 360° pour magasins, halls et open space.\nMode déwarping pour voir chaque zone en détail sur 1 écran.\nDivise par 4 le nombre de caméras à installer et câbler.",
whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite obtenir des informations sur la Caméra Fisheye HIKVISION DS-2CD6365G0-IVS.")}`
},
{
id:57,
titre:"Encodeur IP HIKVISION DS-6708HI",
categorie:"camera",
image:"hik_encoder.jpg",
resume:"Analogique devient IP + IA.",
description:"Encodeur 8 canaux pour recycler vos caméras coax existantes en IP.\nAjoute l’analyse IA AcuSense sans changer tout le parc.\nÉconomise 70% vs remplacement complet du système.",
whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite obtenir des informations sur l’Encodeur IP HIKVISION DS-6708HI.")}`
},
{
id:58,
titre:"Décodeur Vidéo HIKVISION DS-6908UD",
categorie:"camera",
image:"hik_decoder.jpg",
resume:"Mur d’images pro.",
description:"Décodeur 8 sorties HDMI pour salle de contrôle et PCC.\nAffiche 64 flux 4K en temps réel sans PC.\nSupervision plus rapide des incidents sur grand écran.",
whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite obtenir des informations sur le Décodeur Vidéo HIKVISION DS-6908UD.")}`
},
{
id:59,
titre:"Caméra LPR HIKVISION DS-2CD7A26G0/P-IZHS",
categorie:"camera",
image:"hik_lpr.jpg",
resume:"Lit les plaques auto.",
description:"Caméra reconnaissance de plaques pour parking et portail.\nOuvre la barrière automatiquement aux véhicules autorisés.\nZéro file d’attente + traçabilité totale des entrées/sorties.",
whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite obtenir des informations sur la Caméra LPR HIKVISION DS-2CD7A26G0/P-IZHS.")}`
},
{
id:60,
titre:"Switch Industriel HIKVISION DS-3E1526P-SI",
categorie:"network",
image:"hik_industrial_switch.jpg",
resume:"Réseau qui résiste.",
description:"Switch industriel -40°C à +75°C, étanche IP40 pour usines et extérieur.\nPoE 60W pour caméras PTZ chauffantes.\nPas de panne réseau à cause de la poussière ou l’humidité.",
whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite obtenir des informations sur le Switch Industriel HIKVISION DS-3E1526P-SI.")}`
},
{
id:61,
titre:"Caméra Panoramique Multi-capteur HIKVISION DS-2CD6D54G1-IZS",
categorie:"camera",
image:"hik_multi_sensor.jpg",
resume:"4 caméras en 1 boîtier.",
description:"Multi-senseur 4x5MP orientable pour carrefours et toitures.\nCouvre 180° sans distorsion fisheye.\n1 câble, 1 licence NVR = budget optimisé.",
whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite obtenir des informations sur la Caméra Multi-capteur HIKVISION.")}`
},
{
id:62,
titre:"Haut-parleur Réseau HIKVISION DS-I121",
categorie:"camera",
image:"hik_speaker.jpg",
resume:"Parlez à distance.",
description:"Haut-parleur IP 2 voies pour alerte audio et dissuasion.\nSe déclenche auto sur détection intrusion NVR.\nFait fuir 80% des intrus avant même l’intervention.",
whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite obtenir des informations sur le Haut-parleur Réseau HIKVISION DS-I121.")}`
},
{
id:63,
titre:"Serveur de Gestion HIK-Central Lite",
categorie:"network",
image:"hik_central.jpg",
resume:"Pilotez tout depuis 1 appli.",
description:"Logiciel centralisé pour 1000+ caméras, NVR, contrôle d’accès et alarme.\nCartographie, alertes push et rapports auto.\nVous administrez plusieurs sites sans vous déplacer.",
whatsapp:`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour CISCOTEC, je souhaite obtenir des informations sur HIK-Central Lite.")}`
}
];


/*==========================================================
                VARIABLES GLOBALES
==========================================================*/

let currentSlide = 0;

let filteredData = [...realisations];

document.addEventListener("DOMContentLoaded", () => {

initSite();

});
/*==========================================================
                INITIALISATION GÉNÉRALE
==========================================================*/

function initSite(){

    initMenu();

    initScrollButton();

    initSearch();

    initCounters();

    initAnimations();

    initPortfolio();

}

/*==========================================================
            DÉTECTION DES PAGES
==========================================================*/

const homeSlider=document.getElementById("portfolioSlides");

const portfolioGallery=document.getElementById("portfolioGallery");

const modal=document.getElementById("portfolioModal");

const modalImage=document.getElementById("modalImage");

const modalTitle=document.getElementById("modalTitle");

const modalDescription=document.getElementById("modalDescription");

const modalWhatsapp=document.getElementById("modalWhatsapp");


/*==========================================================
            GÉNÉRATION AUTOMATIQUE
==========================================================*/

function initPortfolio(){

    if(homeSlider){

        generateHomeSlider();

    }

    if(portfolioGallery){

        generateGallery(filteredData);

    }

}

/*==========================================================
            SLIDER ACCUEIL
==========================================================*/

function generateHomeSlider(){

    homeSlider.innerHTML="";

    realisations.forEach(item=>{

        homeSlider.innerHTML += `

<div class="portfolio-card">

<img
src="${item.image}"
alt="${item.titre}"

onclick="openModal(${item.id})"

loading="lazy">

<div class="portfolio-description">

<h2>${item.titre}</h2>

<p>

${item.resume}

</p>

<div class="portfolio-buttons">

<a id="portfolioLink" href="realisations.html">

Voir les détails

</a>

<a

id="portfolioWhatsapp"

href="${item.whatsapp}"

target="_blank">

<i class="fab fa-whatsapp"></i>

Je veux comprendre plus

</a>

</div>

</div>

</div>

`;

    });

    startSlider();

}

/*==========================================================
            GÉNÉRATION GALERIE
==========================================================*/

function generateGallery(data){

    portfolioGallery.innerHTML="";

    data.forEach(item=>{

portfolioGallery.innerHTML += `

<div

class="gallery-card"

data-category="${item.categorie}"

data-title="${item.titre.toLowerCase()}">

<img

src="${item.image}"

alt="${item.titre}"

loading="lazy"

onclick="openModal(${item.id})">

<div class="gallery-content">

<h3>

${item.titre}

</h3>

<p>

${item.resume}

</p>

<button

onclick="openModal(${item.id})">

Voir plus

</button>

</div>

</div>

`;

    });

}
/*==========================================================
                SLIDER AUTOMATIQUE
==========================================================*/

let slideInterval = null;

function startSlider(){

    if(!homeSlider) return;

    showSlide(currentSlide);

    clearInterval(slideInterval);

    slideInterval = setInterval(nextSlide, AUTO_SLIDE_TIME);

}

function showSlide(index){

    const cards = document.querySelectorAll("#portfolioSlides .portfolio-card");

    if(cards.length===0) return;

    if(index >= cards.length){

        currentSlide = 0;

    }

    if(index < 0){

        currentSlide = cards.length-1;

    }

    homeSlider.style.transform =
    `translateX(-${currentSlide*100}%)`;

}

function nextSlide(){

    currentSlide++;

    showSlide(currentSlide);

}

function previousSlide(){

    currentSlide--;

    showSlide(currentSlide);

}

/*==========================================================
            BOUTONS SUIVANT / PRÉCÉDENT
==========================================================*/

const nextButton=document.getElementById("nextSlide");

const previousButton=document.getElementById("previousSlide");

if(nextButton){

nextButton.addEventListener("click",()=>{

clearInterval(slideInterval);

nextSlide();

startSlider();

});

}

if(previousButton){

previousButton.addEventListener("click",()=>{

clearInterval(slideInterval);

previousSlide();

startSlider();

});

}

/*==========================================================
                MODAL
==========================================================*/

function openModal(id){

const item=realisations.find(r=>r.id===id);

if(!item) return;

modal.style.display="flex";

modalImage.src=item.image;

modalImage.alt=item.titre;

modalTitle.textContent=item.titre;

modalDescription.textContent=item.description;

modalWhatsapp.href=item.whatsapp;

document.body.style.overflow="hidden";

}

/*==========================================================
            FERMETURE MODAL
==========================================================*/

function closeModal(){

if(!modal) return;

modal.style.display="none";

document.body.style.overflow="auto";

}

const closeIcon=document.getElementById("closeModal");

const closeButton=document.getElementById("closeModalBtn");

if(closeIcon){

closeIcon.addEventListener("click",closeModal);

}

if(closeButton){

closeButton.addEventListener("click",closeModal);

}

window.addEventListener("click",(e)=>{

if(e.target===modal){

closeModal();

}

});

/*==========================================================
        TOUCHES CLAVIER
==========================================================*/

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

closeModal();

}

if(e.key==="ArrowRight"){

nextSlide();

}

if(e.key==="ArrowLeft"){

previousSlide();

}

});

/*==========================================================
                RECHERCHE INSTANTANÉE
==========================================================*/

function initSearch(){

    const searchInputs = document.querySelectorAll(
        "#searchInput, #portfolioSearch"
    );

    if(searchInputs.length===0) return;

    searchInputs.forEach(input=>{

        input.addEventListener("keyup",function(){

            const keyword=this.value.toLowerCase().trim();

            filteredData=realisations.filter(item=>{

                return(

                    item.titre.toLowerCase().includes(keyword)

                    ||

                    item.resume.toLowerCase().includes(keyword)

                    ||

                    item.description.toLowerCase().includes(keyword)

                    ||

                    item.categorie.toLowerCase().includes(keyword)

                );

            });

            if(portfolioGallery){

                generateGallery(filteredData);

            }

        });

    });

}

/*==========================================================
                FILTRES
==========================================================*/

const filterButtons=document.querySelectorAll(".filter-btn");

filterButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        filterButtons.forEach(btn=>{

            btn.classList.remove("active");

        });

        button.classList.add("active");

        const category=button.dataset.filter;

        if(category==="all"){

            filteredData=[...realisations];

        }

        else{

            filteredData=realisations.filter(item=>{

                return item.categorie===category;

            });

        }

        if(portfolioGallery){

            generateGallery(filteredData);

        }

    });

});

/*==========================================================
        NAVIGATION ENTRE LES RÉALISATIONS
==========================================================*/

let currentModalIndex=0;

function openModal(id){

    currentModalIndex=
    realisations.findIndex(item=>item.id===id);

    updateModal();

}

function updateModal(){

    const item=realisations[currentModalIndex];

    if(!item) return;

    modal.style.display="flex";

    modalImage.src=item.image;

    modalImage.alt=item.titre;

    modalTitle.textContent=item.titre;

    modalDescription.textContent=item.description;

    modalWhatsapp.href=item.whatsapp;

    document.body.style.overflow="hidden";

}

function nextProject(){

    currentModalIndex++;

    if(currentModalIndex>=realisations.length){

        currentModalIndex=0;

    }

    updateModal();

}

function previousProject(){

    currentModalIndex--;

    if(currentModalIndex<0){

        currentModalIndex=realisations.length-1;

    }

    updateModal();

}

/*==========================================================
            BOUTONS MODAL
==========================================================*/

const nextProjectButton=document.getElementById("nextProject");

const previousProjectButton=document.getElementById("previousProject");

if(nextProjectButton){

    nextProjectButton.addEventListener(

        "click",

        nextProject

    );

}

if(previousProjectButton){

    previousProjectButton.addEventListener(

        "click",

        previousProject

    );

}

/*==========================================================
        TOUCHES CLAVIER MODAL
==========================================================*/

document.addEventListener("keydown",(event)=>{

    if(modal.style.display!=="flex") return;

    if(event.key==="ArrowRight"){

        nextProject();

    }

    if(event.key==="ArrowLeft"){

        previousProject();

    }

});

/*==========================================================
                MENU RESPONSIVE
==========================================================*/

function initMenu(){

    const menuBtn=document.getElementById("menu-btn");

    const navbar=document.getElementById("navbar");

    if(!menuBtn || !navbar) return;

    menuBtn.addEventListener("click",()=>{

        navbar.classList.toggle("active");

    });

    document.querySelectorAll("#navbar a").forEach(link=>{

        link.addEventListener("click",()=>{

            navbar.classList.remove("active");

        });

    });

}

/*==========================================================
            BOUTON RETOUR EN HAUT
==========================================================*/

function initScrollButton(){

    const scrollButton=document.getElementById("scrollTop");

    if(!scrollButton) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY>400){

            scrollButton.style.display="flex";

        }

        else{

            scrollButton.style.display="none";

        }

    });

    scrollButton.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}

/*==========================================================
            COMPTEURS ANIMÉS
==========================================================*/

function initCounters(){

    const counters=document.querySelectorAll(".counter");

    if(counters.length===0) return;

    counters.forEach(counter=>{

        const target=Number(counter.dataset.target);

        let value=0;

        const step=Math.max(1,Math.ceil(target/120));

        const timer=setInterval(()=>{

            value+=step;

            if(value>=target){

                value=target;

                clearInterval(timer);

            }

            counter.textContent=value;

        },20);

    });

}

/*==========================================================
            ANIMATIONS AU DÉFILEMENT
==========================================================*/

function initAnimations(){

    const elements=document.querySelectorAll(

        ".fade-up,.zoom-in,.slide-left,.slide-right"

    );

    if(elements.length===0) return;

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:0.15

    });

    elements.forEach(el=>observer.observe(el));

}

/*==========================================================
            PRÉCHARGEMENT DES IMAGES
==========================================================*/

function preloadImages(){

    realisations.forEach(item=>{

        const img=new Image();

        img.src=item.image;

    });

}

preloadImages();

/*==========================================================
            FORMULAIRE CONTACT
==========================================================*/

const contactForm=document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener("submit",function(e){

        e.preventDefault();

        alert(

"Merci de nous avoir contactés.\n\nNotre équipe CISCOTEC vous répondra dans les meilleurs délais."

        );

        contactForm.reset();

    });

}

/*==========================================================
            ANNÉE AUTOMATIQUE
==========================================================*/

document.querySelectorAll(".currentYear").forEach(el=>{

    el.textContent=new Date().getFullYear();

});

/*==========================================================
            MESSAGE CONSOLE
==========================================================*/

console.log(

"%cBienvenue chez CISCOTEC FOR IT SOLUTIONS BURUNDI",

"color:#D9A404;font-size:18px;font-weight:bold;"

);

console.log(

"%cDéveloppé par Ir IT Daniel CIRAGIYE",

"color:#072B5A;font-size:14px;"

);

/*==========================================================
                FIN DU SCRIPT
==========================================================*/
;