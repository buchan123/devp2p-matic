import { Common } from "@ethereumjs/common";
import { DPT } from "@ethereumjs/devp2p";
import { randomBytes } from "crypto";
import { polygonChainConfig } from "./common";

const PRIVATE_KEY = randomBytes(32);

const common = new Common({
  chain: "polygon-mainnet",
  customChains: [polygonChainConfig],
});

// Genesis Hash for Polygon
common.setForkHashes(
  Buffer.from(
    "0xa9c28ce2141b56c474f1dc504bee9b01eb1bd7d1a507580d5519d4437a97de1b"
  )
);

console.log("Chain Setup Done", common.chainId());

const bootstrapNodes = common.bootstrapNodes();

const BOOTNODES = bootstrapNodes.map((node: any) => {
  return {
    address: node.ip,
    udpPort: node.port,
    tcpPort: node.port,
  };
});

const dpt = new DPT(PRIVATE_KEY, {
  refreshInterval: 30000,
  timeout: 60 * 1000,
  endpoint: {
    address: "0.0.0.0",
    udpPort: null,
    tcpPort: null,
  },
});

/* eslint-disable no-console */
dpt.on("error", (err) => console.error(err.stack ?? err));

dpt.on("peer:added", (peer) => {
  const info = `(${peer.id.toString("hex")},${peer.address},${peer.udpPort},${
    peer.tcpPort
  })`;
  console.log(`New peer: ${info} (total: ${dpt.getPeers().length})`);
});

dpt.on("peer:removed", (peer) => {
  console.log(
    `Remove peer: ${peer.id.toString("hex")} (total: ${dpt.getPeers().length})`
  );
});

// for accept incoming connections uncomment next line
dpt.bind(30303, "0.0.0.0");

for (const bootnode of BOOTNODES) {
  dpt.bootstrap(bootnode).catch((err) => console.error(err.stack ?? err));
}
