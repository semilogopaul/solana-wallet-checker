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
    <div>
      <h1>Check your wallet balance</h1>
      <div className="relative w-1/2 mb-4 mx-auto my-auto">
        <div className="relative flex items-center bg-[#1e1e1e] rounded-full p-2 overflow-hidden transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] focus-within:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
          <input
            type="text"
            className="w-full border-none bg-transparent text-white text-base px-2 py-2 outline-none placeholder-gray-400"
            placeholder="Search..."
          />
          <div className="flex items-center justify-center p-2 bg-black rounded-full ml-2 cursor-pointer transition-colors duration-300 ease-in-out hover:bg-gray-950">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              className="fill-white"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 w-full h-[200%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.1),transparent)] transition-all duration-500 ease-in-out transform scale-0 z-[-1] hover:scale-100 focus-within:scale-[1.2]"></div>
      </div>
    </div>
  );
};

export default WalletChecker;
