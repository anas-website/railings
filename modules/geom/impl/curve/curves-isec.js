import * as vec from "math/vec";
import {TOLERANCE, TOLERANCE_SQ} from '../../tolerance';
import {fmin_bfgs} from 'math/optim/bfgs';
import {areEqual} from "math/equality";

export default function curveIntersect(curve1, curve2, isecRange1, isecRange2, tesselator) {
  
  let result = [];
  let segs1 = tesselator(curve1, isecRange1[0], isecRange1[1]);
  let segs2 = tesselator(curve2, isecRange2[0], isecRange2[1]);

  for (let i = 0; i < segs1.length - 1; i++) {
    let a1 = segs1[i];
    let b1 = segs1[i + 1];
    for (let j = 0; j < segs2.length - 1; j++) {
      let a2 = segs2[j];
      let b2 = segs2[j + 1];

      let isec = intersectSegs(a1, b1, a2, b2, TOLERANCE);
      if (isec !== null) {
        let {point1, point2, l1, l2} = isec;

        let u1 = curve1.param(point1);
        let u2 = curve2.param(point2);
        [u1, u2] = curveExactIntersection(curve1, curve2, u1, u2);

        if (!isInRange(u1, isecRange1) || !isInRange(u2, isecRange2)) {
          continue;
        }
        
        result.push({
          u0: u1,
          u1: u2,
          p0: point1,
          p1: point2
        });
        if (areEqual(u1, l1, TOLERANCE )) {
          i ++;
        }
        if (areEqual(u2, l2, TOLERANCE )) {
          j ++;
        }
      }
    }
  }
  return result;
}

function curveExactIntersection(curve1, curve2, u1, u2) {

  function f([u1, u2]) {
    return vec.lengthSq( vec.sub(curve1.point(u1), curve2.point(u2)));
  }
  function grad([u1, u2]) {
    let d1 = curve1.eval( u1, 1);
    let d2 = curve2.eval( u2, 1);
    let r = vec.sub(d1[0], d2[0]);
    let drdu = d1[1];
    let drdt = vec.mul(-1, d2[1]);
    return [2 * vec.dot(drdu, r), 2 * vec.dot(drdt,r)];
  }
  let params = [u1, u2];
  return fmin_bfgs(f, params, TOLERANCE_SQ, grad).solution;
}

function lineLineIntersection(p1, p2, v1, v2) {
  let zAx = vec.cross(v1, v2);
  const n1 = vec._normalize(vec.cross(zAx, v1));
  const n2 = vec._normalize(vec.cross(zAx, v2));
  return {
    u1: vec.dot(n2, vec.sub(p2, p1)) / vec.dot(n2, v1),
    u2: vec.dot(n1, vec.sub(p1, p2)) / vec.dot(n1, v2),
  }
}

function intersectSegs(a1, b1, a2, b2) {
  let v1 = vec.sub(b1, a1);
  let v2 = vec.sub(b2, a2);
  let l1 = vec.length(v1);
  let l2 = vec.length(v2);
  vec._div(v1, l1);
  vec._div(v2, l2);

  let {u1, u2} = lineLineIntersection(a1, a2, v1, v2);
  let point1 = vec.add(a1, vec.mul(v1, u1));
  let point2 = vec.add(a2, vec.mul(v2, u2));
  let p2p = vec.lengthSq(vec.sub(point1, point2));
  let eq = (a, b) => areEqual(a, b, TOLERANCE);
  if (u1 !== Infinity && u2 !== Infinity && areEqual(p2p, 0, TOLERANCE_SQ) &&
    ((u1 >0 && u1 < l1) || eq(u1, 0) || eq(u1, l1)) &&
    ((u2 >0 && u2 < l2) || eq(u2, 0) || eq(u2, l2))
  ) {
    return {point1, point2, u1, u2, l1, l2}
  }
  return null;
}

function isInRange(p, range) {
  return p >= range[0] && p <= range[1];
}
