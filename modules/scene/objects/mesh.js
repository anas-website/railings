import {createMeshGeometry} from '../geoms';

export function createMesh(geometry, material) {
  console.log('function createMesh');
  return new THREE.Mesh(geometry, material);
}

export function createMeshFromTriangles(triangles, material) {
  console.log('function createMeshFromTriangles(triangles, material)');
  return createMesh(createMeshGeometry(triangles), material);
}
