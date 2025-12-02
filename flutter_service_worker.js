'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "888483df48293866f9f41d3d9274a779",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"manifest.json": "58bea3b86e9ad5a354e9aeed21a38fa2",
"index.html": "aafe041ea42f71b5cac3a09e1e6e73a2",
"/": "aafe041ea42f71b5cac3a09e1e6e73a2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "bd16d340998d59c099db9768021769cf",
"assets/assets/webtoon_kor/webtoon4/10.png": "bc20a4d4bb392ef6be2114f63710ab71",
"assets/assets/webtoon_kor/webtoon4/8.png": "06fb018db952898d6cc96fd396bfda73",
"assets/assets/webtoon_kor/webtoon4/3.png": "58e251b554db1217ceb9f09926e59371",
"assets/assets/webtoon_kor/webtoon4/23.png": "b036a89537c13c540b110e6758e4b3cf",
"assets/assets/webtoon_kor/webtoon4/22.png": "7772545470691ea832c49da898b7f7c6",
"assets/assets/webtoon_kor/webtoon4/25.png": "47c3c6d0612186e84f45714d77c3ef98",
"assets/assets/webtoon_kor/webtoon4/1.png": "0bb370635958be3c6dc5615de3d79fc6",
"assets/assets/webtoon_kor/webtoon4/2.png": "b34dcebc6dd2a264e8cf5792d7ecba73",
"assets/assets/webtoon_kor/webtoon4/9.png": "1e9b014a8712f301290274b44e621db6",
"assets/assets/webtoon_kor/webtoon4/15.png": "37a85832ec2b549cfac18f7e891be6a4",
"assets/assets/webtoon_kor/webtoon4/18.png": "74cc405abc99cf8c27829946caac38da",
"assets/assets/webtoon_kor/webtoon4/4.png": "72a9932b4a941f2085d2a08353113162",
"assets/assets/webtoon_kor/webtoon4/24.png": "8c67ffd0f43bb70d60de097139c62080",
"assets/assets/webtoon_kor/webtoon4/21.png": "267569a42bd5c21f27fceb9dc081e3e6",
"assets/assets/webtoon_kor/webtoon4/14.png": "b07b7b3804f0841ae61d9942ae5d5839",
"assets/assets/webtoon_kor/webtoon4/11.png": "9eb1240fe5fe6e26b7ed82d485ae1294",
"assets/assets/webtoon_kor/webtoon4/19.png": "7cc96d5961a2449f8bb3d8710adcadaf",
"assets/assets/webtoon_kor/webtoon4/17.png": "e9bd3aeb99ee4e6de7174cf27fac9447",
"assets/assets/webtoon_kor/webtoon4/16.png": "cddef400778eb6cdf5a70272d9633546",
"assets/assets/webtoon_kor/webtoon4/20.png": "ad218a750dbc288c07be99c8caf80b46",
"assets/assets/webtoon_kor/webtoon4/7.png": "3c499868c84573db52e7d5bdf3cb7d35",
"assets/assets/webtoon_kor/webtoon4/6.png": "3009808418354e8bf54bfb11763e675a",
"assets/assets/webtoon_kor/webtoon4/13.png": "43b240b1c01693b89988795723cb099e",
"assets/assets/webtoon_kor/webtoon4/5.png": "baeaa5edc733f4a781620d889df28b8b",
"assets/assets/webtoon_kor/webtoon4/12.png": "83ecd0e0a72277dcb7b0b81f4c8cdd1c",
"assets/assets/webtoon_kor/webtoon2/10.png": "2e179cc898f6b3f5fe4e5e0d4bb2ee9e",
"assets/assets/webtoon_kor/webtoon2/8.png": "600dc30c36dd5a572a9fdabb640ba20d",
"assets/assets/webtoon_kor/webtoon2/3.png": "c6a0c6ce723eacc4db397bf37438f8e6",
"assets/assets/webtoon_kor/webtoon2/1.png": "272c50541c13a90417007841dd32a663",
"assets/assets/webtoon_kor/webtoon2/2.png": "3d441c13a7fbede23060dd3bae75c999",
"assets/assets/webtoon_kor/webtoon2/9.png": "100ee7bb4425ba6960d420875d3a22a7",
"assets/assets/webtoon_kor/webtoon2/4.png": "aac8830eb1b16bf61042d1ad7123c8f6",
"assets/assets/webtoon_kor/webtoon2/7.png": "81800036590a6e7daf7e0a27a7ec1ef8",
"assets/assets/webtoon_kor/webtoon2/6.png": "670d8e96b5e6e37155f623bc5bb5e7e5",
"assets/assets/webtoon_kor/webtoon2/5.png": "92f144b8df6cc1895e455fd3b9b8d5dd",
"assets/assets/webtoon_kor/webtoon1/3.png": "f7586e09b139f28a2d8a83ed5262f3bb",
"assets/assets/webtoon_kor/webtoon1/1.png": "3f40e5e854a6057933e990735947b0a5",
"assets/assets/webtoon_kor/webtoon1/2.png": "ae2ecdb25f3ee4aaba05e0a6e085de94",
"assets/assets/webtoon_kor/webtoon1/4.png": "e3e3e9d919ba4221c1dbdaf975ad10e3",
"assets/assets/webtoon_kor/webtoon1/6.png": "fa090453d785030bd06f5764dc1c8c66",
"assets/assets/webtoon_kor/webtoon1/5.png": "bd749caf8c14073f5626f1cb8d78a829",
"assets/assets/webtoon_kor/webtoon0/3.png": "71b93b39108a3bf19749a62bba55688c",
"assets/assets/webtoon_kor/webtoon0/1.png": "3af59b55afc62b2d85601587c19bf216",
"assets/assets/webtoon_kor/webtoon0/2.png": "5f8f1b99746c203feb720d7441ef8223",
"assets/assets/webtoon_kor/webtoon3/10.png": "85dabdbc371e6235b2e2f2f1240df554",
"assets/assets/webtoon_kor/webtoon3/8.png": "f7c74772f97ba34295d766b4e2396360",
"assets/assets/webtoon_kor/webtoon3/3.png": "c7ddc3e7f200f616bc340cc39304b191",
"assets/assets/webtoon_kor/webtoon3/1.png": "d6bbbed9af05b6e08a9c4ef0b33f38d5",
"assets/assets/webtoon_kor/webtoon3/2.png": "93cf0a088f77982a8fbba42dbbe45ee9",
"assets/assets/webtoon_kor/webtoon3/9.png": "c3d6d78082c78114f6b592b19c76dc5a",
"assets/assets/webtoon_kor/webtoon3/4.png": "88f1c7ec412abd13f46ab782bca80c70",
"assets/assets/webtoon_kor/webtoon3/7.png": "8340cfb532ca8cbedf0d575494242faf",
"assets/assets/webtoon_kor/webtoon3/6.png": "0878b507f5f2e655ad8403cf1b94fd89",
"assets/assets/webtoon_kor/webtoon3/5.png": "1a4856919a69ea0061125399ee3aab59",
"assets/assets/webtoon_eng/webtoon4/10.png": "eb98493d2a9b9ac5349ec567dcb7fcf3",
"assets/assets/webtoon_eng/webtoon4/8.png": "94e7983cfd8a82e00ec7f73acf8921e4",
"assets/assets/webtoon_eng/webtoon4/3.png": "3e5937a197d318906ed457e1cc03909e",
"assets/assets/webtoon_eng/webtoon4/23.png": "2f701facc5b2fdbe6adc0f340e542787",
"assets/assets/webtoon_eng/webtoon4/22.png": "4bf9826ca5db2d9e95ab945965e9900d",
"assets/assets/webtoon_eng/webtoon4/25.png": "56fe4f63542a44f62bb3cec96941e7d8",
"assets/assets/webtoon_eng/webtoon4/1.png": "f7cde392fd09962c1a2c4bff225e20fc",
"assets/assets/webtoon_eng/webtoon4/2.png": "458d97832ae013e7336350d4011a291c",
"assets/assets/webtoon_eng/webtoon4/9.png": "2979ba9f1a1de5eeda1ca0a1d3e85353",
"assets/assets/webtoon_eng/webtoon4/15.png": "dd3b4c8e8357fe83a4c842118686f353",
"assets/assets/webtoon_eng/webtoon4/18.png": "e3c09268e49dbd86aeb96c9acfa009e5",
"assets/assets/webtoon_eng/webtoon4/4.png": "c94e18fc3b552a5d8f5244a64945c630",
"assets/assets/webtoon_eng/webtoon4/24.png": "a77ee260b1bfe34c3ed7fdf8f77b1c9e",
"assets/assets/webtoon_eng/webtoon4/21.png": "bef859170532c5d6948bcdb46110143b",
"assets/assets/webtoon_eng/webtoon4/14.png": "c69b42e20560aeab29f3977e94a2f65e",
"assets/assets/webtoon_eng/webtoon4/11.png": "e508c05bcf94dbdcecea89432e60a1c7",
"assets/assets/webtoon_eng/webtoon4/19.png": "615790a105d807fc39f6f623a7774cf7",
"assets/assets/webtoon_eng/webtoon4/17.png": "039b02e456e1b876f4c4ded2733d7e96",
"assets/assets/webtoon_eng/webtoon4/16.png": "ec3bb86d5c38ab7281c5544ffd2d531c",
"assets/assets/webtoon_eng/webtoon4/20.png": "73f35cd19fd1e310519d2d37ac87332a",
"assets/assets/webtoon_eng/webtoon4/7.png": "2eadba26d053bde670f20cab95671dda",
"assets/assets/webtoon_eng/webtoon4/6.png": "4f2c0d3d5219f4b32d5998e21bed57f9",
"assets/assets/webtoon_eng/webtoon4/13.png": "9ce541a52393bea619d091c139e6aaae",
"assets/assets/webtoon_eng/webtoon4/5.png": "5b4fbfca5d692d579721ed670520352e",
"assets/assets/webtoon_eng/webtoon4/12.png": "a6e28e60f9e7d3a1cfd9fe86253929e7",
"assets/assets/webtoon_eng/webtoon2/10.png": "a53e8382408568c7eb489dffd2bf9166",
"assets/assets/webtoon_eng/webtoon2/8.png": "545553127efffec731acbd9178deb846",
"assets/assets/webtoon_eng/webtoon2/3.png": "86145573cc680d444a0f251951305a13",
"assets/assets/webtoon_eng/webtoon2/1.png": "b1f06439c6f2244414272282696a9f49",
"assets/assets/webtoon_eng/webtoon2/2.png": "5b2deb3842d7393f0c780b05e29f986a",
"assets/assets/webtoon_eng/webtoon2/9.png": "0cf94fb00ed445a9c0e9aa511e6bd928",
"assets/assets/webtoon_eng/webtoon2/4.png": "b225e5ffee3efb97abea193b42891999",
"assets/assets/webtoon_eng/webtoon2/7.png": "98e14407fe7456ef973b77cd1e257550",
"assets/assets/webtoon_eng/webtoon2/6.png": "3a10116ab348b9233d2e28dc9f64d346",
"assets/assets/webtoon_eng/webtoon2/5.png": "2c9b4eab3c2334c4743055146c9abf2d",
"assets/assets/webtoon_eng/webtoon1/3.png": "8810e749a39e68090bf191399bc21e8f",
"assets/assets/webtoon_eng/webtoon1/1.png": "598486f19265022ffe8652ff08930f1b",
"assets/assets/webtoon_eng/webtoon1/2.png": "980d62c62204029d0419342282ccc734",
"assets/assets/webtoon_eng/webtoon1/4.png": "1e05f52345e1c5e15ea8120b660e843e",
"assets/assets/webtoon_eng/webtoon1/7.png": "b9f425ffc306519b5b465f495bdc260d",
"assets/assets/webtoon_eng/webtoon1/6.png": "5d488fb0e7960f252b683b7185fac972",
"assets/assets/webtoon_eng/webtoon1/5.png": "d45c01650b30288a5d75f353bcc0b05a",
"assets/assets/webtoon_eng/webtoon0/3.png": "71b93b39108a3bf19749a62bba55688c",
"assets/assets/webtoon_eng/webtoon0/1.png": "3af59b55afc62b2d85601587c19bf216",
"assets/assets/webtoon_eng/webtoon0/2.png": "5f8f1b99746c203feb720d7441ef8223",
"assets/assets/webtoon_eng/webtoon3/10.png": "811a1bba784da952cd9dbefbf0440f67",
"assets/assets/webtoon_eng/webtoon3/8.png": "21e0ec37a5b4d268e9ff8c3b504a8d7a",
"assets/assets/webtoon_eng/webtoon3/3.png": "8b6f425c8d84df1465074a6534bb7aa6",
"assets/assets/webtoon_eng/webtoon3/1.png": "d5ef5b97342a61b181a4f0e5f28723f1",
"assets/assets/webtoon_eng/webtoon3/2.png": "53300fc7e84796ed207f69683e985f4b",
"assets/assets/webtoon_eng/webtoon3/9.png": "2dbc379d88552e4d6ffa38cf1942639e",
"assets/assets/webtoon_eng/webtoon3/4.png": "af98833f5f9d63a97e3c38637efa7107",
"assets/assets/webtoon_eng/webtoon3/7.png": "0be2c9f87a6040da2464596deaf385a8",
"assets/assets/webtoon_eng/webtoon3/6.png": "46eafb10b148a290c74345b82ae0ebbb",
"assets/assets/webtoon_eng/webtoon3/5.png": "1b180ec901b48d1191ca085e0ecb3952",
"assets/fonts/MaterialIcons-Regular.otf": "6097e659685ea69c5d45de4d630bd24f",
"assets/NOTICES": "0a85a3fbd2bc99f296b82e2f4d8c73a7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "8146bb187396332250222fea8c183121",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin": "30a260da34e16fa99ca96e29467fbfc5",
"assets/AssetManifest.json": "85a2844e7e1b55e512d03b09a350c1e8",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter_bootstrap.js": "12b0a14cc7307b75d948ba1b04529b48",
"version.json": "a8b9aff5d63fcdb7a5d60ecb5b69f958",
"main.dart.js": "15641abb7db1995fd32ea0fe8f4bbeee"};
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
