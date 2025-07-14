import { ObjectType, Field, ID, Float } from '@nestjs/graphql';

@ObjectType()
export class Produto {
  @Field() cProd: string;
  @Field() xProd: string;
  @Field(() => Float) qCom: number;
}

@ObjectType()
export class Nfe {
  @Field(() => ID) id: string;
  @Field() emitente: string;
  @Field(() => [Produto]) produtos: Produto[];
}
