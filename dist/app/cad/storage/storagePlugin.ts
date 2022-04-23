import {stream} from 'lstream';
import {CoreContext} from "context";

const updates$ = stream();

export function defineStreams(ctx) {
  ctx.streams.storage = {
    update: updates$.throttle(100)
  }
}

export function activate(ctx: CoreContext) {

  const {services, streams} = ctx;

  function set(key, value) {
    console.log("Saving: " + key);
    localStorage.setItem(key, value);
    notify(key);
  }

  function get(key) {
    console.log('localStorage function get(key):');
    console.log(key);
    console.log('TCAD.projects.multi.sketch.S:0/SURFACE:');
    if(!(localStorage.getItem('TCAD.projects.multi')))
    {console.log(localStorage.getItem('TCAD.projects.multi'));

    localStorage.setItem('TCAD.projects.multi','{"history":[{"type":"PLANE","params":{"orientation":"XY","depth":0}},{"type":"EXTRUDE","params":{"value":"25","prism":1,"angle":0,"rotation":0,"face":"S:0/SURFACE","flip":false}}],"expressions":"","assembly":[]}');
    localStorage.setItem('TCAD.projects.multi.sketch.S:0/SURFACE','{"version":3,"objects":[{"id":"3","type":"Segment","role":null,"stage":0,"data":{"a":{"x":0,"y":0},"b":{"x":0,"y":985.5662432702594}}},{"id":"75","type":"Segment","role":null,"stage":0,"data":{"a":{"x":-25,"y":1000},"b":{"x":-25,"y":0}}},{"id":"84","type":"Segment","role":null,"stage":0,"data":{"a":{"x":-25,"y":0},"b":{"x":0,"y":0}}},{"id":"308","type":"Segment","role":null,"stage":0,"data":{"a":{"x":99.10254037844388,"y":957.2168783648704},"b":{"x":-1260.7050807568878,"y":1742.3021744734585}}},{"id":"317","type":"Segment","role":null,"stage":0,"data":{"a":{"x":-1273.2050807568878,"y":1720.6515393788475},"b":{"x":-1260.7050807568878,"y":1742.3021744734585}}},{"id":"335","type":"Segment","role":null,"stage":0,"data":{"a":{"x":-1273.2050807568878,"y":1720.6515393788475},"b":{"x":-1100,"y":1620.6515393788477}}},{"id":"344","type":"Segment","role":null,"stage":0,"data":{"a":{"x":-1100,"y":1620.6515393788477},"b":{"x":-1100,"y":620.6515393788477}}},{"id":"353","type":"Segment","role":null,"stage":0,"data":{"a":{"x":-1075,"y":1606.217782649106},"b":{"x":-1075,"y":620.6515393788477}}},{"id":"362","type":"Segment","role":null,"stage":0,"data":{"a":{"x":-1100,"y":620.6515393788477},"b":{"x":-1075,"y":620.6515393788477}}},{"id":"371","type":"Segment","role":null,"stage":0,"data":{"a":{"x":-1075,"y":1606.217782649106},"b":{"x":-25,"y":1000}}},{"id":"394","type":"Segment","role":null,"stage":0,"data":{"a":{"x":0,"y":985.5662432702594},"b":{"x":86.60254037844388,"y":935.5662432702594}}},{"id":"417","type":"Segment","role":null,"stage":0,"data":{"a":{"x":86.60254037844388,"y":935.5662432702594},"b":{"x":99.10254037844388,"y":957.2168783648704}}},{"id":"122","type":"Segment","role":null,"stage":0,"data":{"a":{"x":-25,"y":1000},"b":{"x":-12.500000000000012,"y":1021.650635094611}}},{"id":"144","type":"Segment","role":null,"stage":0,"data":{"a":{"x":-1100,"y":620.6515393788477},"b":{"x":0,"y":620.6515393788477}}},{"id":"142","type":"Segment","role":null,"stage":0,"data":{"a":{"x":-1075,"y":820.9717607930953},"b":{"x":-25,"y":214.7539773797227}}},{"id":"151","type":"Segment","role":null,"stage":0,"data":{"a":{"x":-25,"y":214.7539773797227},"b":{"x":-25,"y":233.22918676003258}}},{"id":"160","type":"Segment","role":null,"stage":0,"data":{"a":{"x":-25,"y":233.22918676003258},"b":{"x":-1075,"y":839.4469694091389}}},{"id":"169","type":"Segment","role":null,"stage":0,"data":{"a":{"x":-1075,"y":839.4469694091389},"b":{"x":-1075,"y":820.9717607930953}}},{"id":"178","type":"Segment","role":null,"stage":0,"data":{"a":{"x":-736.0054073202024,"y":643.7283500716305},"b":{"x":-403.9839057470701,"y":1218.8064600016064}}},{"id":"187","type":"Segment","role":null,"stage":0,"data":{"a":{"x":-25,"y":233.22918676003258},"b":{"x":-33.00000000079664,"y":219.3727802979657}}},{"id":"203","type":"Segment","role":null,"stage":0,"data":{"a":{"x":-1075,"y":820.9717607930953},"b":{"x":-1066.9999999992033,"y":834.8281672551619}}},{"id":"287","type":"Segment","role":null,"stage":0,"data":{"a":{"x":-25,"y":866.0547375480069},"b":{"x":-1075,"y":1472.272520197113}}},{"id":"296","type":"Segment","role":null,"stage":0,"data":{"a":{"x":-1075,"y":1472.272520197113},"b":{"x":-1075,"y":1490.747728811181}}},{"id":"305","type":"Segment","role":null,"stage":0,"data":{"a":{"x":-1075,"y":1490.747728811181},"b":{"x":-25,"y":884.5299461620749}}},{"id":"314","type":"Segment","role":null,"stage":0,"data":{"a":{"x":-25,"y":866.0547375480069},"b":{"x":-25,"y":884.5299461620749}}},{"id":"323","type":"Segment","role":null,"stage":0,"data":{"a":{"x":-25,"y":884.5299461620749},"b":{"x":-32.999999999999986,"y":870.6735397015239}}},{"id":"332","type":"Segment","role":null,"stage":0,"data":{"a":{"x":-1075,"y":1472.272520197113},"b":{"x":-1067,"y":1486.1289266576641}}},{"id":"352","type":"Segment","role":null,"stage":0,"data":{"a":{"x":-505.29283531101345,"y":1161.827143918737},"b":{"x":-455.2928353110135,"y":1248.4296842971808}}}],"dimensions":[],"stages":[{"constraints":[{"typeId":"PCoincident","objects":["84:A","75:B"],"stage":0,"annotations":[]},{"typeId":"PCoincident","objects":["84:B","3:A"],"stage":0,"annotations":[]},{"typeId":"Vertical","objects":["75"],"constants":{"angle":"270.00"},"stage":0,"annotations":[]},{"typeId":"Vertical","objects":["3"],"constants":{"angle":"90.00"},"stage":0,"annotations":[]},{"typeId":"Horizontal","objects":["84"],"constants":{"angle":"0.00"},"stage":0,"annotations":[]},{"typeId":"SegmentLength","objects":["84"],"constants":{"length":"25"},"stage":0,"annotations":[{"offset":20}]},{"typeId":"PCoincident","objects":["ground/ORIGIN","84:B"],"stage":0,"annotations":[]},{"typeId":"PCoincident","objects":["317:B","308:B"],"stage":0,"annotations":[]},{"typeId":"PCoincident","objects":["335:A","317:A"],"stage":0,"annotations":[]},{"typeId":"PCoincident","objects":["362:A","344:B"],"stage":0,"annotations":[]},{"typeId":"PCoincident","objects":["362:B","353:B"],"stage":0,"annotations":[]},{"typeId":"PCoincident","objects":["371:A","353:A"],"stage":0,"annotations":[]},{"typeId":"PCoincident","objects":["371:B","75:A"],"stage":0,"annotations":[]},{"typeId":"PCoincident","objects":["335:B","344:A"],"stage":0,"annotations":[]},{"typeId":"Vertical","objects":["353"],"constants":{"angle":"270.00"},"stage":0,"annotations":[]},{"typeId":"Vertical","objects":["344"],"constants":{"angle":"270.00"},"stage":0,"annotations":[]},{"typeId":"EqualLength","objects":["84","362"],"stage":0,"annotations":[]},{"typeId":"EqualLength","objects":["84","317"],"stage":0,"annotations":[]},{"typeId":"AngleBetween","objects":["353","362"],"constants":{"angle":"90"},"stage":0,"annotations":[{"offset":20}]},{"typeId":"PCoincident","objects":["394:A","3:B"],"stage":0,"annotations":[]},{"typeId":"PCoincident","objects":["417:A","394:B"],"stage":0,"annotations":[]},{"typeId":"PCoincident","objects":["417:B","308:A"],"stage":0,"annotations":[]},{"typeId":"EqualLength","objects":["417","84"],"stage":0,"annotations":[]},{"typeId":"Angle","objects":["308"],"constants":{"angle":"150"},"stage":0,"annotations":[{"offset":220.11361977181568}]},{"typeId":"SegmentLength","objects":["394"],"constants":{"length":"100"},"stage":0,"annotations":[{"offset":-139.94298726929523}]},{"typeId":"PCoincident","objects":["122:A","75:A"],"stage":0,"annotations":[]},{"typeId":"EqualLength","objects":["417","122"],"stage":0,"annotations":[]},{"typeId":"PointOnLine","objects":["122:B","308"],"stage":0,"annotations":[]},{"typeId":"SegmentLength","objects":["335"],"constants":{"length":"200"},"stage":0,"annotations":[{"offset":20}]},{"typeId":"SegmentLength","objects":["75"],"constants":{"length":"1000"},"stage":0,"annotations":[{"offset":134.24650774358167}]},{"typeId":"EqualLength","objects":["344","75"],"stage":0,"annotations":[]},{"typeId":"PCoincident","objects":["144:A","344:B"],"stage":0,"annotations":[]},{"typeId":"Horizontal","objects":["144"],"constants":{"angle":"0.00"},"stage":0,"annotations":[]},{"typeId":"PointOnLine","objects":["144:B","3"],"stage":0,"annotations":[]},{"typeId":"SegmentLength","objects":["144"],"constants":{"length":"1100"},"stage":0,"annotations":[{"offset":64.80000000000094}]},{"typeId":"AngleBetween","objects":["371","122"],"constants":{"angle":"90.00"},"stage":0,"annotations":[{"offset":86.62725945899673}]},{"typeId":"AngleBetween","objects":["122","308"],"constants":{"angle":"90.00"},"stage":0,"annotations":[{"offset":83.45910843177943}]},{"typeId":"AngleBetween","objects":["335","317"],"constants":{"angle":"90.00"},"stage":0,"annotations":[{"offset":20}]},{"typeId":"AngleBetween","objects":["317","308"],"constants":{"angle":"90"},"stage":0,"annotations":[{"offset":20}]},{"typeId":"AngleBetween","objects":["417","308"],"constants":{"angle":"90"},"stage":0,"annotations":[{"offset":20}]},{"typeId":"AngleBetween","objects":["394","417"],"constants":{"angle":"90"},"stage":0,"annotations":[{"offset":20}]},{"typeId":"PCoincident","objects":["151:A","142:B"],"stage":0,"annotations":[]},{"typeId":"PCoincident","objects":["160:A","151:B"],"stage":0,"annotations":[]},{"typeId":"PCoincident","objects":["169:A","160:B"],"stage":0,"annotations":[]},{"typeId":"PCoincident","objects":["169:B","142:A"],"stage":0,"annotations":[]},{"typeId":"PCoincident","objects":["187:A","151:B"],"stage":0,"annotations":[]},{"typeId":"PointOnLine","objects":["187:B","142"],"stage":0,"annotations":[]},{"typeId":"AngleBetween","objects":["187","142"],"constants":{"angle":"90"},"stage":0,"annotations":[{"offset":122.0165355458976}]},{"typeId":"SegmentLength","objects":["187"],"constants":{"length":"16"},"stage":0,"annotations":[{"offset":90.34438971008097}]},{"typeId":"PointOnLine","objects":["142:B","75"],"stage":0,"annotations":[]},{"typeId":"PointOnLine","objects":["151:B","75"],"stage":0,"annotations":[]},{"typeId":"PCoincident","objects":["203:A","142:A"],"stage":0,"annotations":[]},{"typeId":"AngleBetween","objects":["142","203"],"constants":{"angle":"90"},"stage":0,"annotations":[{"offset":84.56901618568402}]},{"typeId":"PointOnLine","objects":["203:B","160"],"stage":0,"annotations":[]},{"typeId":"EqualLength","objects":["187","203"],"stage":0,"annotations":[]},{"typeId":"PointOnLine","objects":["160:B","353"],"stage":0,"annotations":[]},{"typeId":"PointOnLine","objects":["142:A","353"],"stage":0,"annotations":[]},{"typeId":"PointOnLine","objects":["178:A","160"],"stage":0,"annotations":[]},{"typeId":"AngleBetween","objects":["178","160"],"constants":{"angle":"90"},"stage":0,"annotations":[{"offset":20}]},{"typeId":"PointOnLine","objects":["178:B","371"],"stage":0,"annotations":[]},{"typeId":"AngleBetween","objects":["371","178"],"constants":{"angle":"90"},"stage":0,"annotations":[{"offset":20}]},{"typeId":"PCoincident","objects":["296:A","287:B"],"stage":0,"annotations":[]},{"typeId":"PCoincident","objects":["305:A","296:B"],"stage":0,"annotations":[]},{"typeId":"PCoincident","objects":["314:A","287:A"],"stage":0,"annotations":[]},{"typeId":"PCoincident","objects":["314:B","305:B"],"stage":0,"annotations":[]},{"typeId":"PCoincident","objects":["323:A","305:B"],"stage":0,"annotations":[]},{"typeId":"PCoincident","objects":["332:A","287:B"],"stage":0,"annotations":[]},{"typeId":"PointOnLine","objects":["332:B","305"],"stage":0,"annotations":[]},{"typeId":"AngleBetween","objects":["332","287"],"constants":{"angle":"90"},"stage":0,"annotations":[{"offset":20}]},{"typeId":"PointOnLine","objects":["323:B","287"],"stage":0,"annotations":[]},{"typeId":"AngleBetween","objects":["323","287"],"constants":{"angle":"270"},"stage":0,"annotations":[{"offset":114.17787021743872}]},{"typeId":"EqualLength","objects":["332","323"],"stage":0,"annotations":[]},{"typeId":"EqualLength","objects":["332","203"],"stage":0,"annotations":[]},{"typeId":"PointOnLine","objects":["287:A","75"],"stage":0,"annotations":[]},{"typeId":"PointOnLine","objects":["305:B","75"],"stage":0,"annotations":[]},{"typeId":"PointOnLine","objects":["296:B","353"],"stage":0,"annotations":[]},{"typeId":"PointOnLine","objects":["287:B","353"],"stage":0,"annotations":[]},{"typeId":"PointOnLine","objects":["352:A","305"],"stage":0,"annotations":[]},{"typeId":"AngleBetween","objects":["352","305"],"constants":{"angle":"270"},"stage":0,"annotations":[{"offset":20}]},{"typeId":"PointOnLine","objects":["352:B","371"],"stage":0,"annotations":[]},{"typeId":"AngleBetween","objects":["352","371"],"constants":{"angle":"270"},"stage":0,"annotations":[{"offset":20}]},{"typeId":"SegmentLength","objects":["352"],"constants":{"length":"100"},"stage":0,"annotations":[{"offset":20}]}],"generators":[]}],"constants":"","metadata":{"expressionsSignature":"1649498974053"}}')
    }
   // console.log(localStorage.getItem('TCAD.projects.multi.sketch.S:0/SURFACE'));
    
    return localStorage.getItem(key);
  }

  function remove(key) {
    try {
      return localStorage.removeItem(key);  
    } finally {
      notify(key);
    }
  }

  function exists(key) {
    return localStorage.hasOwnProperty(key);
  }
  
  function notify(key) {
    updates$.next({
      key,
      timestamp: Date.now
    });
  }

  function getAllKeysFromNamespace(namespace) {
    let keys = [];
    for(let i = localStorage.length - 1; i >= 0 ; i--) {
      const key = localStorage.key(i);
      if (key.startsWith(namespace)) {
        keys.push(key);
      }
    }
    return keys;
  }

  window.addEventListener('storage', evt => notify(evt.key), false);
  
  const addListener = listener => streams.storage.update.attach(listener);

  ctx.storageService = {
    set, get, remove, addListener, getAllKeysFromNamespace, exists
  };

  services.storage = ctx.storageService;

}


export interface StorageService {

  set(path: string, content: string): void;

  get(path: string): string;

  remove(path: string): void;

  getAllKeysFromNamespace(path: string): string[];

  exists(path: string): boolean;

  addListener(callback: (StorageUpdateEvent) => void);

}

declare module 'context' {
  interface CoreContext {

    storageService: StorageService;
  }
}

