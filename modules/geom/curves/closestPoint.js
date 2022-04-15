import * as vec from 'math/vec';
import newtonIterations, {newtonIterationsOnInterval} from './newtonIterations';
import {curveTessParams} from '../impl/curve/curve-tess';

export function closestToCurveParam(curve, pt) {
  let [intMin, intMax] = findClosestToCurveInterval(curve, pt)
  return solveClosestToCurveParamExactly(curve, pt, intMin, intMax)
}

export function findClosestToCurveInterval(curve, pt) {
  let [uMin, uMax] = curve.domain();
  let chunks = curveTessParams(curve, uMin, uMax, 10);
  let heroDist = -1;
  let hero = -1;
  for (let i = 1; i < chunks.length; ++i) {
    let startParam = chunks[i - 1];
    let endParam = chunks[i];
    let a = curve.point(startParam);
    let b = curve.point(endParam);

    let dist = distanceSqToSegment(a, b, pt);
    if (hero === -1 || dist < heroDist) {
      heroDist = dist;
      hero = i;
    }
  }
  return [chunks[hero - 1], chunks[hero]];
}

function distanceSqToSegment(a, b, pt) {
  let ab = vec.sub(b, a);
  let test = vec.sub(pt, a);
  let abLength = vec.length(ab);
  let abUnit = vec._div(ab, abLength);
  let proj = vec.dot(abUnit, test);
  if (proj <= 0) {
    return vec.distanceSq(a, pt);
  } else if (proj >= abLength) {
    return vec.distanceSq(b, pt);
  } else {
    let projV = vec._mul(abUnit, proj);
    return vec.distanceSq(test, projV)
  }
}


export function solveClosestToCurveParamExactly(curve, pt, intMin, intMax, tol) {

  function boundParam(u) {
    return Math.min(max, Math.max(min, u));
  }

  //solving minimization problem of squared distance 
  
  //f(u) = (fx(u) - x)^2 + (fy(u) - y)^2 + (fz(u) - z)^2 = fx^2 - 2*fx*x + x^2 ...  

  //f'(u) = 2*fx*f'x - 2*x*f'x ...  
  //f''(u) = 2*fx*f''x + 2*f'x*f'x - 2*x*f''x...  

  const X=0, Y=1, Z=2;
  function squareDistanceFn(u) {
    
    let [f, d1, d2] = curve.eval(u, 2);
    
    let r1Comp = i => 2 * f[i] * d1[i] - 2 * pt[i] * d1[i];
    let r2Comp = i => 2 * f[i] * d2[i] + 2 * d1[i] * d1[i] - 2 * pt[i] * d2[i];

    let r1 = r1Comp(X) + r1Comp(Y) + r1Comp(Z); 
    let r2 = r2Comp(X) + r2Comp(Y) + r2Comp(Z);
    
    return [r1, r2];
  }
  
  return newtonIterationsOnInterval(squareDistanceFn, intMin, intMax, tol);
}

