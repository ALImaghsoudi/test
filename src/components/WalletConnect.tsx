import React from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

export default function WalletConnect() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({ connector: new InjectedConnector() });
  const { disconnect } = useDisconnect();

  return (
    <div className="mb-4">
      {isConnected ? (
        <div className="flex items-center justify-between bg-gray-100 p-2 rounded">
          <span>Wallet: {address}</span>
          <button onClick={() => disconnect()} className="text-red-500 font-bold">
            Disconnect
          </button>
        </div>
      ) : (
        <button
          onClick={() => connect()}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
}