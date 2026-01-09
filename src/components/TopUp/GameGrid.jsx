import React from "react";
import { motion } from "framer-motion";

const games = [
    { id: "ml", name: "Mobile Legends", image: "https://img.dtv.co.id/Games/Games_20230414163953.webp", developer: "Moonton" },
    { id: "ff", name: "Free Fire", image: "https://img.dtv.co.id/Games/Games_20230414164102.webp", developer: "Garena" },
    { id: "pubgm", name: "PUBG Mobile", image: "https://img.dtv.co.id/Games/Games_20230414164124.webp", developer: "Tencent" },
    { id: "genshin", name: "Genshin Impact", image: "https://img.dtv.co.id/Games/Games_20230414164408.webp", developer: "Hoyoverse" },
    { id: "val", name: "Valorant", image: "https://img.dtv.co.id/Games/Games_20230414164434.webp", developer: "Riot Games" },
    { id: "hok", name: "Honor of Kings", image: "https://img.dtv.co.id/Games/Games_20240718105021.jpg", developer: "Level Infinite" },
];

const GameGrid = ({ onSelect, selectedId }) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {games.map((game, idx) => (
                <motion.div
                    key={game.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ y: -5 }}
                    onClick={() => onSelect(game)}
                    className={`group cursor-pointer rounded-3xl overflow-hidden bg-white/5 border transition-all duration-300 ${selectedId === game.id ? "border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.3)]" : "border-white/10"
                        }`}
                >
                    <div className="aspect-[4/5] overflow-hidden relative">
                        <img
                            src={game.image}
                            alt={game.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />

                        <div className="absolute bottom-4 left-4 right-4 text-white">
                            <h4 className="font-bold text-sm sm:text-base line-clamp-1" style={{ fontFamily: 'satoshi-bold' }}>{game.name}</h4>
                            <p className="text-gray-400 text-xs mt-1" style={{ fontFamily: 'satoshi-medium' }}>{game.developer}</p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default GameGrid;
