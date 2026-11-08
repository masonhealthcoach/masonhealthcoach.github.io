const {chromium}=require('playwright');(async()=>{const b=await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});const p=await b.newPage({viewport:{width:1080,height:1920}});
p.on('pageerror',e=>console.log('ERR',e.message));p.on('console',m=>{if(m.type()=='error')console.log('CON',m.text())});
await p.goto('http://127.0.0.1:8765/story.html');await p.waitForFunction(()=>window.ready===true,{timeout:60000});
for(const t of (process.argv[2]||'1,7,12.5,16,20.5').split(',').map(Number)){const s=Date.now();await p.evaluate(t=>render(t),t);await p.screenshot({path:`st_${t}.png`});console.log(t,Date.now()-s,'ms');}
await b.close()})();
