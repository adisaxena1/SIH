export type Quote={route:string;airline:string;lead:number;base:number;tax:number;fee:number;total:number;captured:string;status:string};
const routes=[['DEL-BOM',1.15],['DEL-BLR',1.12],['BOM-BLR',1.05],['DEL-CCU',.94],['BLR-HYD',.78],['MAA-DEL',.83],['DEL-HYD',.91],['BOM-DEL',1.08]] as const;
const airlines=['IndiGo','Air India','Air India Express','Akasa Air','SpiceJet'];
export const quoteData:Quote[]=Array.from({length:80},(_,i)=>{const [route,w]=routes[i%routes.length];const airline=airlines[i%airlines.length];const lead=[1,7,15,30,45][i%5];const base=Math.round((2200+(i*137)%5600)*w*(lead===1?1.42:lead===7?1.16:lead===15?1.03:lead===30?.94:.9));const tax=Math.round(base*.18);const fee=99+(i%3)*45;return{route,airline,lead,base,tax,fee,total:base+tax+fee,captured:'2026-09-'+String(1+(i%8)).padStart(2,'0'),status:i%13===0?'Sold out':'Available'}});
export const indexSeries=Array.from({length:30},(_,i)=>{const d=new Date(Date.UTC(2026,7,10+i));const season=1+Math.sin(i/3.7)*.055;const event=i>20?1.035:1;return{date:d.toISOString().slice(5,10),value:Number((100*season*event+(i%4)*.35).toFixed(1))}});
export const routeIndex=routes.map(([route,w],i)=>({route,index:Number((96+w*7+(i%3)*1.4).toFixed(1)),change:Number(((-2+i*1.1)%6-2.5).toFixed(1))}));
export const leadElasticity=[1,7,15,30,45].map((lead,i)=>({lead,avg:Math.round(7200*(1.34-i*.13))}));
export const stats={index:indexSeries.at(-1)?.value??100,weekly:2.8,monthly:5.6,quotes:12842,routes:8,sources:10};
