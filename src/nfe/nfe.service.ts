import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { parseStringPromise } from 'xml2js';

@Injectable()
export class NfeService {
  async parseNfeXml(): Promise<any> {
    const xml = fs.readFileSync('src/nfe/data/nfe-test.xml', 'utf-8');
    const json = await parseStringPromise(xml);
    return json;
  }
}
