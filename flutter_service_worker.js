'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2530e9d99150c9c81ca16ecc5318361a",
"assets/AssetManifest.bin.json": "50b939e7d60e92ccadfb039305be84b4",
"assets/AssetManifest.json": "e6e5f15f61e5780e9c3cc4bfc64c3e60",
"assets/assets/images/done.png": "04eeb614446eb4d42786a2afbfb2410c",
"assets/assets/images/hard/ballon.png": "0a98afa5cf52615df77d907742b15e70",
"assets/assets/images/hard/fahrrad.png": "e3862b2a6e661a4762d6a6b75d518340",
"assets/assets/images/hard/fuchs.png": "f0ab4637045879268faa19292054f7a2",
"assets/assets/images/hard/gitarre.png": "8bb079dd6ed30aa722a8f5442d466470",
"assets/assets/images/hard/hamster.png": "c98e1a774b98216802a2bb263a5b846a",
"assets/assets/images/hard/kamera.png": "6f4e48b49f58f95ad95db01be61fb839",
"assets/assets/images/hard/kerze.png": "372e50b90e257917861585d96d917c4f",
"assets/assets/images/hard/kuchen.png": "2747d977288128249f13ae5518de7336",
"assets/assets/images/hard/lampe.png": "b6b11fc09227f693500d6bd76dfc448a",
"assets/assets/images/hard/panda.png": "6f37767092167c03f9fcc3721a501bae",
"assets/assets/images/hard/schiff.png": "51628da4ce50b212c6c3f03fe7aa5624",
"assets/assets/images/hard/schwamm.png": "5c49d57ca2d92bb0661a0a8865142dbd",
"assets/assets/images/hard/trampolin.png": "bb9ff407e397ce6e3bd44257e0e6690b",
"assets/assets/images/medium/blume.png": "94fc5bbf5da5954cc92e6de9751fe3ce",
"assets/assets/images/medium/brot.png": "43f014823499d417ebc35d90257d3c8d",
"assets/assets/images/medium/fisch.png": "54605a75054814faaa8ee0a6189a11d5",
"assets/assets/images/medium/flasche.png": "f589e46a2f47d962366dc9ae714c9929",
"assets/assets/images/medium/katze.png": "3a50d97cc18299657e1cdab18b808aea",
"assets/assets/images/medium/keks.png": "fa2e0f307722d5fb4db5d5bfcffcc52a",
"assets/assets/images/medium/schuh.png": "bfbc49521201182e2f9524379ea96735",
"assets/assets/images/medium/stein.png": "2af8ecbb0a12fa542e4a1190385eb7c6",
"assets/assets/images/medium/stern.png": "a173b2f7bfc4ace3d844590aa357feb5",
"assets/assets/images/medium/stuhl.png": "1324b3c1807741974eaf618feae2cda6",
"assets/assets/images/medium/tasse.png": "3c41e3dc91d532fd341fb947d7f87eb9",
"assets/assets/images/medium/vogel.png": "d9cd0457f1a1b715f2a62169281dcf9b",
"assets/assets/images/medium/wurm.png": "270803cc92aaca38331e634b2968cfc5",
"assets/assets/images/simple/affe.png": "9d5dd390c3cf8141a88fe957a9cc79f5",
"assets/assets/images/simple/apfel.png": "ab25c15a3b9ffe0859f2cfe87bc2fef5",
"assets/assets/images/simple/auto.png": "588d9f0a28ec76db8d399ad2e2ff36eb",
"assets/assets/images/simple/ball.png": "94d562aaffbb4a53082a5b3859f224f5",
"assets/assets/images/simple/baum.png": "0f6c7065ccc123fa649634a38055b39d",
"assets/assets/images/simple/buch.png": "28228a7bd4d38d2fc99d6f8141e27c9d",
"assets/assets/images/simple/ei.png": "d41fa571555d3a21f95d8d5e69e5d966",
"assets/assets/images/simple/hand.png": "a8f6fa9f865c17df390ab497a5a3b5b3",
"assets/assets/images/simple/hase.png": "7fe183fce928f2e91de6d1669cb9d3ee",
"assets/assets/images/simple/haus.png": "9a87ad6607617e2a7c752f9be35f8958",
"assets/assets/images/simple/hund.png": "d4b8c3f02569744bfbb53782b7b69dd7",
"assets/assets/images/simple/lila.png": "0b7524a44549568901bae31dfc790217",
"assets/assets/images/simple/maus.png": "eb3bea1c175f014f971526460c82de80",
"assets/assets/images/simple/oma.png": "8e6fe249518261714df2f2d297c2914e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "d04822a72a3d5465360b305c187f199d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
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
"index.html": "35c18d347a7884c7c196906bf6070543",
"/": "35c18d347a7884c7c196906bf6070543",
"main.dart.js": "47fd17813d21eec91f78cb301123df53",
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
