import { ChainConfig } from "@ethereumjs/common";
import { bootstrapNodesPolygonMainet } from "./bootnodes";

// Reference:- https://github.com/maticnetwork/bor/blob/develop/builder/files/genesis-mainnet-v1.json
export const polygonChainConfig: ChainConfig = {
  name: "polygon-mainnet",
  chainId: 137,
  networkId: 137,
  defaultHardfork: "delhi",
  consensus: {
    type: "pos",
    algorithm: "casper",
    casper: {},
  },
  comment: "The Polygon main chain",
  url: "https://polygonscan.com/",
  genesis: {
    timestamp: "0x5ED20F84",
    gasLimit: 10000000,
    difficulty: 1,
    nonce: "0x0",
    extraData: "",
  },
  hardforks: [
    {
      name: "homestead",
      block: 0,
    },
    {
      name: "byzantium",
      block: 0,
    },
    {
      name: "constantinople",
      block: 0,
    },
    {
      name: "petersburg",
      block: 0,
    },
    {
      name: "istanbul",
      block: 3395000,
    },
    {
      name: "muirGlacier",
      block: 3395000,
    },
    {
      name: "berlin",
      block: 14750000,
    },
    {
      name: "london",
      block: 23850000,
    },
    {
      name: "jaipur",
      block: 23850000,
    },
    {
      name: "delhi",
      block: 38189056,
    },
  ],
  bootstrapNodes: bootstrapNodesPolygonMainet,
  dnsNetworks: [],
};
