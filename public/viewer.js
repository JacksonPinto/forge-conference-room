async function getToken() {
  const res = await fetch('/api/forge/token');
  const data = await res.json();
  return { accessToken: data.access_token, expiresIn: data.expires_in };
}

function launchViewer(urn) {
  const options = {
    env: 'AutodeskProduction',
    getAccessToken: async (onTokenReady) => {
      const tokenData = await getToken();
      onTokenReady(tokenData.accessToken, tokenData.expiresIn);
    }
  };

  Autodesk.Viewing.Initializer(options, () => {
    const viewerDiv = document.getElementById('viewer');
    const viewer = new Autodesk.Viewing.GuiViewer3D(viewerDiv);
    viewer.start();
    Autodesk.Viewing.Document.load(`urn:${urn}`, (doc) => {
      const defaultModel = doc.getRoot().getDefaultGeometry();
      viewer.loadDocumentNode(doc, defaultModel);
    });

    // Simple visibility control (dummy names, adjust to your model)
    document.getElementById('showTV').onchange = (e) => {
      const show = e.target.checked;
      viewer.setThemingColor(1234, show ? null : new THREE.Color(0x888888)); // Example dbId
    };
  });
}

launchViewer('YOUR_URN_HERE');
