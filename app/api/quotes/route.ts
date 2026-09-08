import {NextResponse} from 'next/server';
import {quoteData} from '../../../lib/data';
export async function GET(){return NextResponse.json({ok:true,count:quoteData.length,data:quoteData,generatedAt:new Date().toISOString(),source:'MVP synthetic demonstration dataset'});}
