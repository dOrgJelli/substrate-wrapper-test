import { Substrate_Module } from "./wrap";

import { PolywrapClient } from "@polywrap/client-js";

const client = new PolywrapClient();

async function main() {
  const result = await Substrate_Module.blockHash({
    url: "http://localhost:9933",
    number: 0
  }, client);

  if (!result.ok) throw result.error;

  console.log("****************************************");
  console.log("Block Hash: ", result.value);
  console.log("****************************************");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
