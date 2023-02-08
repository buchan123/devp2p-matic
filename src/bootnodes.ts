import { BootstrapNodeConfig } from "@ethereumjs/common";

// From https://wiki.polygon.technology/docs/develop/network-details/full-node-deployment/
export const bootstrapNodesPolygonMainet: BootstrapNodeConfig[] = [
  {
    id: "0cb82b395094ee4a2915e9714894627de9ed8498fb881cec6db7c65e8b9a5bd7f2f25cc84e71e89d0947e51c76e85d0847de848c7782b13c0255247a6758178c",
    ip: "44.232.55.71",
    port: "30303",
    location: "IDK",
    comment: "bootnode-1",
    chainId: 137,
    network: "bor-mainnet",
  },
  {
    id: "88116f4295f5a31538ae409e4d44ad40d22e44ee9342869e7d68bdec55b0f83c1530355ce8b41fbec0928a7d75a5745d528450d30aec92066ab6ba1ee351d710",
    ip: "159.203.9.164",
    port: "30303",
    location: "IDK",
    comment: "bootnode-2",
    chainId: 137,
    network: "bor-mainnet",
  },
  {
    id: "4be7248c3a12c5f95d4ef5fff37f7c44ad1072fdb59701b2e5987c5f3846ef448ce7eabc941c5575b13db0fb016552c1fa5cca0dda1a8008cf6d63874c0f3eb7",
    ip: "3.93.224.197",
    port: "30303",
    location: "IDK",
    comment: "bootnode-3",
    chainId: 137,
    network: "bor-mainnet",
  },
  {
    id: "32dd20eaf75513cf84ffc9940972ab17a62e88ea753b0780ea5eca9f40f9254064dacb99508337043d944c2a41b561a17deaad45c53ea0be02663e55e6a302b2",
    ip: "3.212.183.151",
    port: "30303",
    location: "IDK",
    comment: "bootnode-4",
    chainId: 137,
    network: "bor-mainnet",
  },
];
