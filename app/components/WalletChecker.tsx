"use client";
import React, { useState } from "react";
import { Connection, PublicKey } from "@solana/web3.js";

const WalletChecker: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [solBalance, setSolBalance] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCheckBalance = async () => {
    setError(null); // Clear previous errors
    setSolBalance(null);

    try {
      const publicKey = new PublicKey(walletAddress);

      // Connect to Solana Devnet
      const connection = new Connection(
        "https://api.devnet.solana.com",
        "confirmed"
      );

      // Fetch SOL balance
      const balance = await connection.getBalance(publicKey);
      setSolBalance(balance / 1e9); // Convert lamports to SOL
    } catch (e) {
      setError("Invalid wallet address or network error.");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center px-4 -mt-24">
      <h1 className="sm:text-5xl font-[Georgia] font-bold mb-10 text-white text-center text-3xl">
        Check Your Wallet Balance
      </h1>
      <div className="w-full max-w-md bg-[#2c2c2c] p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label
            htmlFor="walletAddress"
            className="block text-sm font-medium text-gray-400 mb-2"
          >
            Wallet Address
          </label>
          <input
            type="text"
            id="walletAddress"
            className="w-full bg-[#393939] text-white rounded-lg py-2 px-3 outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Enter wallet address..."
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
          />
        </div>
        <button
          onClick={handleCheckBalance}
          className="w-full bg-black hover:bg-gray-950 duration-200 border-yellow-500 text-white font-medium py-2 rounded-lg transition-colors"
        >
          Check Balance
        </button>
        {error && (
          <p className="text-red-500 text-sm font-medium mt-4">{error}</p>
        )}
        {solBalance !== null && (
          <p className="text-green-500 text-sm font-medium mt-4">
            Balance: {solBalance} SOL
          </p>
        )}
      </div>
    </div>
  );
};

export default WalletChecker;
