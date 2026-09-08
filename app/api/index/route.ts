import {NextResponse} from 'next/server';
import {indexSeries,routeIndex,leadElasticity,stats} from '../../../lib/data';
export async function GET(){return NextResponse.json({ok:true,stats,indexSeries,routeIndex,leadElasticity,methodology:{formula:'Laspeyres-style weighted price relatives',basePeriod:'100',frequencies:['daily','weekly','monthly']}});}
