import { Resolver, Query } from '@nestjs/graphql';
import { Nfe } from './nfe.model';
import { NfeService } from './nfe.service';

@Resolver(() => Nfe)
export class NfeResolver {
  constructor(private readonly nfeService: NfeService) {}

  @Query(() => Nfe)
  async nfe(): Promise<Nfe> {
    const parsed = await this.nfeService.parseNfeXml();

    const emitente = parsed.nfeProc.NFe[0].infNFe[0].emit[0].xNome[0];
    const produtos = parsed.nfeProc.NFe[0].infNFe[0].det.map((p) => ({
      cProd: p.prod[0].cProd[0],
      xProd: p.prod[0].xProd[0],
      qCom: parseFloat(p.prod[0].qCom[0]),
    }));

    return {
      id: '123',
      emitente,
      produtos,
    };
  }
}
