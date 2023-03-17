import { ethers } from "ethers";
import JetCharterL2ABI from "../abis/JetCharterL2.json";
import WireTransferTokenL2ABI from "../abis/WireTransferTokenL2.json";
import L2GatewayABI from "../abis/L2Gateway.json";

const getProvider = () => {
  const provider = new ethers.providers.JsonRpcProvider(
    process.env.REACT_APP_NETWORK_URL
  );
  return provider;
};

const getSigner = async () => {
  const provider = getProvider();
  const signer = provider.getSigner();
  return signer;
};

const getJetCharterL2Instance = async () => {
  const provider = getProvider();
  const jetCharterL2Instance = new ethers.Contract(
    process.env.REACT_APP_L2_JET_CHARTER_ADDRESS,
    JetCharterL2ABI,
    provider
  );
  return jetCharterL2Instance;
};

const getWireTransferTokenL2Instance = async () => {
  const provider = getProvider();
  const wireTransferTokenL2Instance = new ethers.Contract(
    process.env.REACT_APP_L2_WIRE_TRANSFER_TOKEN_ADDRESS,
    WireTransferTokenL2ABI,
    provider
  );
  return wireTransferTokenL2Instance;
};

const getL2GatewayInstance = async () => {
  const provider = getProvider();
  const l2GatewayInstance = new ethers.Contract(
    process.env.REACT_APP_L2_GATEWAY_ADDRESS,
    L2GatewayABI,
    provider
  );
  return l2GatewayInstance;
};

const toEther = (wei) => {
  return ethers.utils.formatEther(wei);
};

const toWei = (ether) => {
  return ethers.utils.parseEther(ether);
};

export {
  getProvider,
  getSigner,
  getJetCharterL2Instance,
  getWireTransferTokenL2Instance,
  getL2GatewayInstance,
  toEther,
  toWei,
};
