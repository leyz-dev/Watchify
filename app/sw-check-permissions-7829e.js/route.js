export async function GET() {
  const fileContent = `
function getYmid() {
  try {
    return new URL(location.href).searchParams.get("ymid");
  } catch (e) {
    console.warn(e);
  }
  return null;
}
function getVar() {
  try {
    return new URL(location.href).searchParams.get("var");
  } catch (e) {
    console.warn(e);
  }
  return null;
}
self.options = {
  domain: "zjkdy.com",
  resubscribeOnInstall: true,
  zoneId: 9676214,
  ymid: getYmid(),
  var: getVar(),
};
self.lary = "";
importScripts("https://zjkdy.com/act/files/sw.perm.check.min.js?r=sw");
`;

  return new Response(fileContent, {
    headers: {
      "Content-Type": "application/javascript",
    },
  });
}
