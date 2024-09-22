'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9b3a621bb477fba8847dc4171c577729",
"assets/AssetManifest.bin.json": "e6d97e77d0e4fd27146856248e2967da",
"assets/AssetManifest.json": "6c71cd7f5b78ee05e6bbb00dab3fa44f",
"assets/assets/images/done.png": "04eeb614446eb4d42786a2afbfb2410c",
"assets/assets/images/einfach/affe.png": "9d5dd390c3cf8141a88fe957a9cc79f5",
"assets/assets/images/einfach/apfel.png": "ab25c15a3b9ffe0859f2cfe87bc2fef5",
"assets/assets/images/einfach/auto.png": "588d9f0a28ec76db8d399ad2e2ff36eb",
"assets/assets/images/einfach/ball.png": "94d562aaffbb4a53082a5b3859f224f5",
"assets/assets/images/einfach/baum.png": "0f6c7065ccc123fa649634a38055b39d",
"assets/assets/images/einfach/buch.png": "28228a7bd4d38d2fc99d6f8141e27c9d",
"assets/assets/images/einfach/ei.png": "d41fa571555d3a21f95d8d5e69e5d966",
"assets/assets/images/einfach/hand.png": "a8f6fa9f865c17df390ab497a5a3b5b3",
"assets/assets/images/einfach/hase.png": "7fe183fce928f2e91de6d1669cb9d3ee",
"assets/assets/images/einfach/haus.png": "9a87ad6607617e2a7c752f9be35f8958",
"assets/assets/images/einfach/hund.png": "d4b8c3f02569744bfbb53782b7b69dd7",
"assets/assets/images/einfach/lila.png": "0b7524a44549568901bae31dfc790217",
"assets/assets/images/einfach/maus.png": "eb3bea1c175f014f971526460c82de80",
"assets/assets/images/einfach/oma.png": "8e6fe249518261714df2f2d297c2914e",
"assets/assets/images/Kapitel%25201/Hase.png": "1f2c5295126bddb27a533d9cfae532bb",
"assets/assets/images/Kapitel%25201/Hose.png": "9d441bc34f3e5c899a92ef282eba6bca",
"assets/assets/images/Kapitel%25201/Hut.png": "3b3ca0a130463c7adbbaaca2b28ffd3f",
"assets/assets/images/Kapitel%25201/Nase.png": "d327189303e3952757b8d6fb8a60d2e6",
"assets/assets/images/Kapitel%25201/Oma.png": "60a725b97bfabef02d30e15567482088",
"assets/assets/images/Kapitel%25201/Opa.png": "7b4d2767e019fcce159edeee9864f10c",
"assets/assets/images/Kapitel%25201/Ufo.png": "da58e4466b2f340cddc023c92aa98bfd",
"assets/assets/images/Kapitel%25201/Wal.png": "2818f8e63a87a590e3e35b14a612850b",
"assets/assets/images/Kapitel%252010/Stein.png": "c4f7b38310d632a634dd30a2829953e8",
"assets/assets/images/Kapitel%252010/Stelzen.png": "9f4480a904a89575609aab7bf85b0d75",
"assets/assets/images/Kapitel%252010/Stempel.png": "bb2c4b9c30d9f95c15174c0709b20bf6",
"assets/assets/images/Kapitel%252010/Stern.png": "f1b2fbecf8e3db0ea2fb6846bc44e01d",
"assets/assets/images/Kapitel%252010/Stift.png": "cba9d950d8506f26b7401dc25f6f131d",
"assets/assets/images/Kapitel%252011/Besen.png": "d8b0c32f907c554c6204d0d6d4d84685",
"assets/assets/images/Kapitel%252011/Daumen.png": "5e5f0c4fc2450f00aa495d0cbf759cd0",
"assets/assets/images/Kapitel%252011/Knochen.png": "d642a6bd967906b5ccda9c59cab39680",
"assets/assets/images/Kapitel%252011/Knoten.png": "d925e4010caefd2dd08eb1fd40f5b6ba",
"assets/assets/images/Kapitel%252011/Kuchen.png": "baf4c103e58c8affd0cb69dca8670dd7",
"assets/assets/images/Kapitel%252011/Ofen.png": "874b50a49b2dc8931dbf2894e761ceaf",
"assets/assets/images/Kapitel%252011/Regen.png": "7a16fade2e90443b9fdf8362f20657d6",
"assets/assets/images/Kapitel%25202/Blume.png": "228a2c3633993839670db72c01b8bbf4",
"assets/assets/images/Kapitel%25202/Brot.png": "727918e1495c72608b06cd24f78ef0be",
"assets/assets/images/Kapitel%25202/Kamel.png": "ce8d0fbb2eaf928bae48ee3d2a5fa683",
"assets/assets/images/Kapitel%25202/Lego.png": "e1aaf6507ac7174b3156cfca0bf44500",
"assets/assets/images/Kapitel%25202/Palme.png": "16d339fa3f367d2d2200061f9ef04c4f",
"assets/assets/images/Kapitel%25202/Pirat.png": "268f912ea8db25bcd60c46b841b0c29d",
"assets/assets/images/Kapitel%25202/Sofa.png": "9df9fd360f8e6222c999b01b660bfe77",
"assets/assets/images/Kapitel%25202/Wolke.png": "3090054756d115b6cde842ae0dc1aafb",
"assets/assets/images/Kapitel%25203/Dusche.png": "4281df93e57e91b095cd32549d24482e",
"assets/assets/images/Kapitel%25203/Fisch.png": "a54096412002cff611aa6d6b65a2c006",
"assets/assets/images/Kapitel%25203/Flasche.png": "77e5ba7d6aac18fcf3c3ad728619073d",
"assets/assets/images/Kapitel%25203/Frosch.png": "275786425b023a98b4faa63a2456d0e1",
"assets/assets/images/Kapitel%25203/Schaf.png": "968785e0583c397381ece0e0dfaf263e",
"assets/assets/images/Kapitel%25203/Schal.png": "126bfc47ee15d104e58ed98c66569023",
"assets/assets/images/Kapitel%25203/Schere.png": "35dc644224105ee9b35ba0c75b57405f",
"assets/assets/images/Kapitel%25203/Schwan.png": "ecfac011ea4ab03d8c456c0034bf2d70",
"assets/assets/images/Kapitel%25203/Tasche.png": "7e50ac547ebc7f23843e179993c2969d",
"assets/assets/images/Kapitel%25203/Tisch.png": "1467fed906be18b4239767bf7729a004",
"assets/assets/images/Kapitel%25204/Auge.png": "e2e0c5e5a41a18bc6b62624b18a6da47",
"assets/assets/images/Kapitel%25204/Auto.png": "6972bd4adf019604fe086e599aabb966",
"assets/assets/images/Kapitel%25204/Baum.png": "3089cce8a1ab02919c26bbacf56ee9a3",
"assets/assets/images/Kapitel%25204/Frau.png": "651a5ba91a47b396289828203fe3f1ca",
"assets/assets/images/Kapitel%25204/Maus.png": "de36e7577b4a7906d822151686da2f29",
"assets/assets/images/Kapitel%25204/Raupe.png": "7b9395b4b56092da189f460cd7fae32f",
"assets/assets/images/Kapitel%25204/Schaum.png": "a91706ae9511b4b0c61d5304fae6f310",
"assets/assets/images/Kapitel%25204/Zaun.png": "3b41e6ba997a84eb0da6d311f8aae831",
"assets/assets/images/Kapitel%25205/Bein.png": "989618e10b41c577ca47390c2adbb861",
"assets/assets/images/Kapitel%25205/Drei.png": "2681b4405246202e1b4bca07ffe78cef",
"assets/assets/images/Kapitel%25205/Ei.png": "b7ee7460fcc179b62b3a0faacee3ef69",
"assets/assets/images/Kapitel%25205/Eimer.png": "e53aa0790be8b034446f0f01c5188be4",
"assets/assets/images/Kapitel%25205/Eis.png": "72c53186d9f7c29f0537341657884c1f",
"assets/assets/images/Kapitel%25205/Leine.png": "5ce1e4a26fbb0da2ed28a59a37f61e32",
"assets/assets/images/Kapitel%25205/Leiter.png": "7f981052eed88ead51fccfe31b881601",
"assets/assets/images/Kapitel%25205/Schleife.png": "cbc2d13ae7e9ca5a0d69ae17283e00e5",
"assets/assets/images/Kapitel%25205/Schwein.png": "0c0321d7a7548087d4ab5ed70103dee2",
"assets/assets/images/Kapitel%25205/Zwei.png": "21f2a1a550d575f1bee1a0c50b295a56",
"assets/assets/images/Kapitel%25206/Acht.png": "a7ea8272a0c4e8c068fbf714373b9194",
"assets/assets/images/Kapitel%25206/Buch.png": "5138bc819889d5f2ad4ef9aad2102f5b",
"assets/assets/images/Kapitel%25206/Dach.png": "3dff79b7197acb375b15c0ade44cfb22",
"assets/assets/images/Kapitel%25206/Drache.png": "e5361a79460958508c3b519e39cf33ee",
"assets/assets/images/Kapitel%25206/Koch.png": "9d98bcbb34daf122adedc13d6b3300f8",
"assets/assets/images/Kapitel%25206/Milch.png": "3b6f475233ee00c7d4cb9f8346ca505b",
"assets/assets/images/Kapitel%25206/Nacht.png": "e672c1501c58e71d3055ecb7d9433e7b",
"assets/assets/images/Kapitel%25207/Junge.png": "1efe0a56cf7ce37dac4c8d9ee0fc52c6",
"assets/assets/images/Kapitel%25207/Ring.png": "b38df3193a0ca198c10dedbf4e37e775",
"assets/assets/images/Kapitel%25207/Schlange.png": "64f7d6da9e23281434144c01391bc757",
"assets/assets/images/Kapitel%25207/Zange.png": "02d02b128a1abc0e2c21cb5b37165821",
"assets/assets/images/Kapitel%25207/Zunge.png": "14e31d027ef9ede36a1410250aceb0cd",
"assets/assets/images/Kapitel%25208/Eule.png": "103ced03be897549222e999b502f3961",
"assets/assets/images/Kapitel%25208/Euro.png": "c8f9a06bed035adda8dccd9949ab4156",
"assets/assets/images/Kapitel%25208/Feuer.png": "0a07b8811c003be13ec426e30d164066",
"assets/assets/images/Kapitel%25208/Kreuz.png": "24734a86fac8cba3341d94cdf931e809",
"assets/assets/images/Kapitel%25208/Neun.png": "b708076b61ca49ac796c9dc0e66757b7",
"assets/assets/images/Kapitel%25209/Anker.png": "a8dd7ce901366561448947a9bf6175ac",
"assets/assets/images/Kapitel%25209/Bank.png": "d9da54986f1eeaf5e69a8cc987472d34",
"assets/assets/images/Kapitel%25209/Geschenk.png": "e371b0b30f35353380ac559c56a9286e",
"assets/assets/images/Kapitel%25209/Schrank.png": "2ad7d0269a1a27011de0105cc91f6f21",
"assets/assets/images/mittel/blume.png": "94fc5bbf5da5954cc92e6de9751fe3ce",
"assets/assets/images/mittel/brot.png": "43f014823499d417ebc35d90257d3c8d",
"assets/assets/images/mittel/fisch.png": "54605a75054814faaa8ee0a6189a11d5",
"assets/assets/images/mittel/flasche.png": "f589e46a2f47d962366dc9ae714c9929",
"assets/assets/images/mittel/katze.png": "3a50d97cc18299657e1cdab18b808aea",
"assets/assets/images/mittel/keks.png": "fa2e0f307722d5fb4db5d5bfcffcc52a",
"assets/assets/images/mittel/schuh.png": "bfbc49521201182e2f9524379ea96735",
"assets/assets/images/mittel/stein.png": "2af8ecbb0a12fa542e4a1190385eb7c6",
"assets/assets/images/mittel/stern.png": "a173b2f7bfc4ace3d844590aa357feb5",
"assets/assets/images/mittel/stuhl.png": "1324b3c1807741974eaf618feae2cda6",
"assets/assets/images/mittel/tasse.png": "3c41e3dc91d532fd341fb947d7f87eb9",
"assets/assets/images/mittel/vogel.png": "d9cd0457f1a1b715f2a62169281dcf9b",
"assets/assets/images/mittel/wurm.png": "270803cc92aaca38331e634b2968cfc5",
"assets/assets/images/schwer/ballon.png": "0a98afa5cf52615df77d907742b15e70",
"assets/assets/images/schwer/fahrrad.png": "e3862b2a6e661a4762d6a6b75d518340",
"assets/assets/images/schwer/fuchs.png": "f0ab4637045879268faa19292054f7a2",
"assets/assets/images/schwer/gitarre.png": "8bb079dd6ed30aa722a8f5442d466470",
"assets/assets/images/schwer/hamster.png": "c98e1a774b98216802a2bb263a5b846a",
"assets/assets/images/schwer/kamera.png": "6f4e48b49f58f95ad95db01be61fb839",
"assets/assets/images/schwer/kerze.png": "372e50b90e257917861585d96d917c4f",
"assets/assets/images/schwer/kuchen.png": "2747d977288128249f13ae5518de7336",
"assets/assets/images/schwer/lampe.png": "b6b11fc09227f693500d6bd76dfc448a",
"assets/assets/images/schwer/panda.png": "6f37767092167c03f9fcc3721a501bae",
"assets/assets/images/schwer/schiff.png": "51628da4ce50b212c6c3f03fe7aa5624",
"assets/assets/images/schwer/schwamm.png": "5c49d57ca2d92bb0661a0a8865142dbd",
"assets/assets/images/schwer/trampolin.png": "bb9ff407e397ce6e3bd44257e0e6690b",
"assets/assets/sounds/error.mp3": "5867132cc93a7d6fd78a4da06327414b",
"assets/assets/sounds/finish.mp3": "b7da9a7f0a9656fb59ff7810e9197768",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9b17a7d71dcbe11658fb0db083b128e6",
"assets/NOTICES": "0eafed24ab348aa7e8de2f9e9e26d5c7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3f986886dc876af76418e2604540082a",
"/": "3f986886dc876af76418e2604540082a",
"main.dart.js": "e53c59c79c4f3146de6a32b76dedc7b3",
"manifest.json": "19913adab3f1b95d4aa86584651108f7",
"version.json": "5bbb4289c32d4ac505c373541db49109"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
