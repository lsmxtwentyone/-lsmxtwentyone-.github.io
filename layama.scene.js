// Created with Motiva Layama v1.22 LITE https://www.motivacg.com

function getLayamaCameras()
{
   var layamaCameras = new BABYLON.SmartArray(0);
   layamaCameras.push({n: "layamatest0000", a: "InitialCamera", p: new BABYLON.Vector3(1673.38, 144.937, 106.942), l: new BABYLON.Vector3(1672.5, 144.859, 106.475)});
   layamaCameras.push({n: "layamatest0001", a: "C_L_002", p: new BABYLON.Vector3(1319.04, 144.937, 282.276), l: new BABYLON.Vector3(1319.13, 144.859, 281.283)});
   layamaCameras.push({n: "layamatest0002", a: "C_L_003", p: new BABYLON.Vector3(1061.51, 144.937, -63.7238), l: new BABYLON.Vector3(1062.49, 144.859, -63.5516)});
   layamaCameras.push({n: "layamatest0003", a: "C_L_004", p: new BABYLON.Vector3(1384.38, 144.937, -372.75), l: new BABYLON.Vector3(1384.44, 144.859, -371.755)});
   return layamaCameras;
}

function getLayamaResolutions()
{
   var layamaResolutions = new BABYLON.SmartArray(0);
   layamaResolutions.push("1024");
   layamaResolutions.push("1024");
   return layamaResolutions;
}

function getLayamaControls()
{
   return {defMove: true, defRot: 1, altMove: true, altRot: 2};
}

