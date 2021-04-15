import { BigInt } from "@graphprotocol/graph-ts";
import { Transfer } from "../generated/AnotherEther/AnotherEther";
import { Account } from "../generated/schema";

export function handleTransfer(event: Transfer): void {
  let from = event.params.from.toHex();
  let to = event.params.to.toHex();
  let value = event.params.value;

  let toAccount = Account.load(to);
  if (toAccount == null) {
    toAccount = new Account(to);
    toAccount.balance = BigInt.fromI32(0);
  }
  toAccount.balance = toAccount.balance.plus(value);
  toAccount.save();

  if (from == "0x0000000000000000000000000000000000000000") {
    return;
  }
  let fromAccount = Account.load(from);
  fromAccount.balance = fromAccount.balance.minus(value);
  fromAccount.save();
}
