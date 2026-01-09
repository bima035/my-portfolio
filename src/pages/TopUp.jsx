import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GameGrid from "../components/TopUp/GameGrid";
import OrderForm from "../components/TopUp/OrderForm";
import { Search, Flashlight, ShieldCheck, Trophy } from "lucide-react";

const TopUp = () => {
    const [selectedGame, setSelectedGame] = useState(null);

    return (
        <div className="min-h-screen bg-slate-950 text-white overflow-hidden pb-20">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-600/20 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6 lg:px-8">
                {/* Hero Section */}
                <section className="py-12 text-center relative">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-400 via-green-400 to-cyan-400 bg-clip-text text-transparent"
                        style={{ fontFamily: 'satoshi-black' }}
                    >
                        Top Up Game Favoritmu
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10"
                        style={{ fontFamily: 'satoshi-medium' }}
                    >
                        Proses instan, aman, dan terpercaya. Temukan berbagai promo menarik setiap harinya!
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="relative max-w-xl mx-auto"
                    >
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                            <Search className="text-gray-500" size={20} />
                        </div>
                        <input
                            type="text"
                            placeholder="Cari game favoritmu..."
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300 backdrop-blur-sm"
                            style={{ fontFamily: 'satoshi-medium' }}
                        />
                    </motion.div>
                </section>

                {/* Stats Grid */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                    {[
                        { icon: <Flashlight className="text-yellow-400" />, title: "Proses Instan", desc: "Top up masuk dalam hitungan detik" },
                        { icon: <ShieldCheck className="text-green-400" />, title: "100% Aman", desc: "Metode pembayaran resmi dan legal" },
                        { icon: <Trophy className="text-blue-400" />, title: "Rating 4.9/5", desc: "Kepercayaan ribuan gamers Indonesia" },
                    ].map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + (idx * 0.1) }}
                            className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-4 hover:border-cyan-500/50 transition-all duration-300"
                        >
                            <div className="p-3 rounded-2xl bg-white/5">
                                {stat.icon}
                            </div>
                            <div>
                                <h3 className="font-bold text-lg" style={{ fontFamily: 'satoshi-bold' }}>{stat.title}</h3>
                                <p className="text-gray-400 text-sm" style={{ fontFamily: 'satoshi-medium' }}>{stat.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </section>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    <div className={`${selectedGame ? 'lg:col-span-4' : 'lg:col-span-12'} transition-all duration-500`}>
                        <GameGrid onSelect={setSelectedGame} selectedId={selectedGame?.id} />
                    </div>

                    <AnimatePresence>
                        {selectedGame && (
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 50 }}
                                className="lg:col-span-8"
                            >
                                <OrderForm game={selectedGame} onBack={() => setSelectedGame(null)} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default TopUp;
