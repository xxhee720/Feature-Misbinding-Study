'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "70fe77b657ce162a93d83683d3fe87e5",
"version.json": "a8b9aff5d63fcdb7a5d60ecb5b69f958",
"index.html": "aafe041ea42f71b5cac3a09e1e6e73a2",
"/": "aafe041ea42f71b5cac3a09e1e6e73a2",
"main.dart.js": "47f599ff2407271c67fa972a0cfbbf0e",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "58bea3b86e9ad5a354e9aeed21a38fa2",
"assets/NOTICES": "6bfd14c0110f89f35df407ff909db43b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "f1aad5d66f9bb0be2a0c88f3077b41a1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "8146bb187396332250222fea8c183121",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "861efb892e62d43e7a53b61a1074380b",
"assets/fonts/MaterialIcons-Regular.otf": "6097e659685ea69c5d45de4d630bd24f",
"assets/assets/webtoon_kor/webtoon2/8.png": "600dc30c36dd5a572a9fdabb640ba20d",
"assets/assets/webtoon_kor/webtoon2/9.png": "100ee7bb4425ba6960d420875d3a22a7",
"assets/assets/webtoon_kor/webtoon2/10.png": "2e179cc898f6b3f5fe4e5e0d4bb2ee9e",
"assets/assets/webtoon_kor/webtoon2/4.png": "aac8830eb1b16bf61042d1ad7123c8f6",
"assets/assets/webtoon_kor/webtoon2/5.png": "92f144b8df6cc1895e455fd3b9b8d5dd",
"assets/assets/webtoon_kor/webtoon2/7.png": "81800036590a6e7daf7e0a27a7ec1ef8",
"assets/assets/webtoon_kor/webtoon2/6.png": "670d8e96b5e6e37155f623bc5bb5e7e5",
"assets/assets/webtoon_kor/webtoon2/2.png": "3d441c13a7fbede23060dd3bae75c999",
"assets/assets/webtoon_kor/webtoon2/3.png": "c6a0c6ce723eacc4db397bf37438f8e6",
"assets/assets/webtoon_kor/webtoon2/1.png": "272c50541c13a90417007841dd32a663",
"assets/assets/webtoon_kor/webtoon3/8.png": "f7c74772f97ba34295d766b4e2396360",
"assets/assets/webtoon_kor/webtoon3/9.png": "c3d6d78082c78114f6b592b19c76dc5a",
"assets/assets/webtoon_kor/webtoon3/10.png": "85dabdbc371e6235b2e2f2f1240df554",
"assets/assets/webtoon_kor/webtoon3/4.png": "88f1c7ec412abd13f46ab782bca80c70",
"assets/assets/webtoon_kor/webtoon3/5.png": "1a4856919a69ea0061125399ee3aab59",
"assets/assets/webtoon_kor/webtoon3/7.png": "8340cfb532ca8cbedf0d575494242faf",
"assets/assets/webtoon_kor/webtoon3/6.png": "0878b507f5f2e655ad8403cf1b94fd89",
"assets/assets/webtoon_kor/webtoon3/2.png": "93cf0a088f77982a8fbba42dbbe45ee9",
"assets/assets/webtoon_kor/webtoon3/3.png": "c7ddc3e7f200f616bc340cc39304b191",
"assets/assets/webtoon_kor/webtoon3/1.png": "d6bbbed9af05b6e08a9c4ef0b33f38d5",
"assets/assets/webtoon_kor/webtoon4/8.png": "7441fea31d1457349a8877838d1a73a6",
"assets/assets/webtoon_kor/webtoon4/9.png": "fe8025e4dfdfcda6c8f156233d7970c8",
"assets/assets/webtoon_kor/webtoon4/14.png": "54d1860fb7ddcc2ea0bdb4792ae1ea95",
"assets/assets/webtoon_kor/webtoon4/15.png": "c3c08719d3ef3b675aee7a9a9b257aa2",
"assets/assets/webtoon_kor/webtoon4/12.png": "4fbd2927f40138fb18ad567e908e9da6",
"assets/assets/webtoon_kor/webtoon4/13.png": "29d900deafe4e8986c29087ea1f2d641",
"assets/assets/webtoon_kor/webtoon4/11.png": "9aa913246cf77f28ffe6fdd1fe4af914",
"assets/assets/webtoon_kor/webtoon4/10.png": "8d0ffdbf9076e4244b3505ae3cd7be41",
"assets/assets/webtoon_kor/webtoon4/4.png": "af37517af0e194d17f83353437a72e9c",
"assets/assets/webtoon_kor/webtoon4/5.png": "98bd2b9e6ff0f5520f716017bc97d88c",
"assets/assets/webtoon_kor/webtoon4/7.png": "b1db4fe4b48695d6fa37a2d47245b609",
"assets/assets/webtoon_kor/webtoon4/6.png": "2ae29a7fcfc2ce7f476446aed9f168c4",
"assets/assets/webtoon_kor/webtoon4/2.png": "5798605e044287725e572d4587ed8754",
"assets/assets/webtoon_kor/webtoon4/3.png": "5707f1426266d6fdacdca964f57e4b49",
"assets/assets/webtoon_kor/webtoon4/1.png": "c04a8194cff8dbe4a884a0842768d838",
"assets/assets/webtoon_kor/webtoon1/4.png": "e3e3e9d919ba4221c1dbdaf975ad10e3",
"assets/assets/webtoon_kor/webtoon1/5.png": "bd749caf8c14073f5626f1cb8d78a829",
"assets/assets/webtoon_kor/webtoon1/6.png": "fa090453d785030bd06f5764dc1c8c66",
"assets/assets/webtoon_kor/webtoon1/2.png": "ae2ecdb25f3ee4aaba05e0a6e085de94",
"assets/assets/webtoon_kor/webtoon1/3.png": "f7586e09b139f28a2d8a83ed5262f3bb",
"assets/assets/webtoon_kor/webtoon1/1.png": "3f40e5e854a6057933e990735947b0a5",
"assets/assets/webtoon_kor/webtoon0/2.png": "5f8f1b99746c203feb720d7441ef8223",
"assets/assets/webtoon_kor/webtoon0/3.png": "71b93b39108a3bf19749a62bba55688c",
"assets/assets/webtoon_kor/webtoon0/1.png": "3af59b55afc62b2d85601587c19bf216",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
