import { EntityModel } from "../abs.db";

export interface AppItem extends EntityModel {
  icon: string;
  name: string;
  description: string;
  attributes: { [key: string]: string }
  id?: string; // Optional for new entities
  seqNo?: number;
  deleted?: boolean;
  sync?: boolean;
}
