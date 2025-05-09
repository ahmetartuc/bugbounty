(async function(){
    let scanningDiv = document.createElement("div");
    scanningDiv.style.position = "fixed";
    scanningDiv.style.bottom = "0";
    scanningDiv.style.left = "0";
    scanningDiv.style.width = "100%";
    scanningDiv.style.maxHeight = "50%";
    scanningDiv.style.overflowY = "scroll";
    scanningDiv.style.backgroundColor = "black";
    scanningDiv.style.color = "red";
    scanningDiv.style.padding = "10px";
    scanningDiv.style.zIndex = "9999";
    scanningDiv.style.borderTop = "2px solid black";
    scanningDiv.innerHTML = "<h4>...Scanning...</h4>";
    document.body.appendChild(scanningDiv);

    let e = [], t = new Set;
    async function n(e){
        try {
            const t = await fetch(e);
            return t.ok ? await t.text() : (console.error(`Failed to fetch ${e}: ${t.status}`), null);
        } catch (t) {
            return console.error(`Error fetching ${e}:`, t), null;
        }
    }
    function o(e){
        return (e.startsWith("/") || e.startsWith("./") || e.startsWith("../")) &&
            !e.includes(" ") &&
            !/[^\x20-\x7E]/.test(e) &&
            e.length > 1 && e.length < 200;
    }
    function s(e){
        return [...e.matchAll(/['"]((?:\/|\.\.\/|\.\/)[^'"]+)['"]/g)].map(e => e[1]).filter(o);
    }
    async function c(o){
        if(t.has(o)) return;
        t.add(o);
        console.log(`Fetching and processing: ${o}`);
        const c = await n(o);
        if(c){
            const t = s(c);
            e.push(...t);
        }
    }
    const l = performance.getEntriesByType("resource").map(e => e.name);
    console.log("Resources found:", l);
    for(const e of l) await c(e);
    const i = [...new Set(e)];
    console.log("Final list of unique paths:", i);
    console.log("All scanned resources:", Array.from(t));
    scanningDiv.innerHTML = `<h4>Unique Paths Found:</h4><ul>${i.map(e => `<li>${e}</li>`).join("")}</ul>`;
})();
