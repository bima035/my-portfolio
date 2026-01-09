import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, CreditCard, User, Box, ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";

const OrderForm = ({ game, onBack }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        userId: "",
        serverId: "",
        nominal: null,
        payment: null,
    });

    const nominals = [
        { id: 1, label: "5 Diamonds", price: "Rp 1.500" },
        { id: 2, label: "12 Diamonds", price: "Rp 3.500" },
        { id: 3, label: "28 Diamonds", price: "Rp 8.000" },
        { id: 4, label: "59 Diamonds", price: "Rp 16.000" },
        { id: 5, label: "170 Diamonds", price: "Rp 48.000" },
        { id: 6, label: "296 Diamonds", price: "Rp 84.000" },
    ];

    const payments = [
        { id: "dana", name: "DANA", icon: "https://upload.wikimedia.org/wikipedia/commons/7/72/Logo_dana_blue.svg" },
        { id: "ovo", name: "OVO", icon: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Logo_ovo_purple.svg" },
        { id: "shopeepay", name: "ShopeePay", icon: "https://upload.wikimedia.org/wikipedia/commons/f/fe/ShopeePay_logo.svg" },
        { id: "qris", name: "QRIS", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo_QRIS.svg" },
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4 mb-8">
                <button
                    onClick={onBack}
                    className="p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-gray-400 hover:text-white"
                >
                    <ArrowLeft size={20} />
                </button>
                <div>
                    <h2 className="text-2xl font-bold" style={{ fontFamily: 'satoshi-bold' }}>Beli {game.name}</h2>
                    <p className="text-gray-400 text-sm" style={{ fontFamily: 'satoshi-medium' }}>Lengkapi data di bawah ini untuk melanjutkan</p>
                </div>
            </div>

            {/* Step Indicators */}
            <div className="flex items-center gap-2 mb-8">
                {[1, 2, 3].map((s) => (
                    <div key={s} className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${step >= s ? "bg-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.5)]" : "bg-white/5 text-gray-500"
                            }`}>
                            {s}
                        </div>
                        {s < 3 && <div className={`w-12 h-0.5 rounded-full ${step > s ? "bg-cyan-500" : "bg-white/5"}`} />}
                    </div>
                ))}
            </div>

            {/* Step 1: ID Pemain */}
            <section className={`p-8 rounded-3xl bg-white/5 border transition-all duration-300 ${step === 1 ? "border-cyan-500/50 bg-white/10" : "border-white/10 opacity-60"
                }`}>
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                        <User size={20} />
                    </div>
                    <h3 className="text-lg font-bold" style={{ fontFamily: 'satoshi-bold' }}>Langkah 1: Masukkan ID</h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-xs text-gray-400 uppercase tracking-wider" style={{ fontFamily: 'satoshi-bold' }}>User ID</label>
                        <input
                            type="text"
                            placeholder="Contoh: 12345678"
                            className="w-full bg-slate-900 border border-white/10 rounded-xl p-3 focus:outline-none focus:ring-1 focus:ring-cyan-500/50"
                            value={formData.userId}
                            onChange={(e) => setFormData({ ...formData, userId: e.target.value })}
                            disabled={step !== 1}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs text-gray-400 uppercase tracking-wider" style={{ fontFamily: 'satoshi-bold' }}>Server ID</label>
                        <input
                            type="text"
                            placeholder="(1234)"
                            className="w-full bg-slate-900 border border-white/10 rounded-xl p-3 focus:outline-none focus:ring-1 focus:ring-cyan-500/50"
                            value={formData.serverId}
                            onChange={(e) => setFormData({ ...formData, serverId: e.target.value })}
                            disabled={step !== 1}
                        />
                    </div>
                </div>
                {step === 1 && formData.userId && (
                    <Button
                        className="mt-6 w-full bg-cyan-500 hover:bg-cyan-600 text-white"
                        onClick={() => setStep(2)}
                    >
                        Lanjutkan ke Nominal
                    </Button>
                )}
            </section>

            {/* Step 2: Pilih Nominal */}
            <section className={`p-8 rounded-3xl bg-white/5 border transition-all duration-300 ${step === 2 ? "border-cyan-500/50 bg-white/10" : "border-white/10 opacity-60"
                }`}>
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                        <Box size={20} />
                    </div>
                    <h3 className="text-lg font-bold" style={{ fontFamily: 'satoshi-bold' }}>Langkah 2: Pilih Nominal</h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {nominals.map((n) => (
                        <div
                            key={n.id}
                            onClick={() => step === 2 && setFormData({ ...formData, nominal: n })}
                            className={`p-4 rounded-2xl border cursor-pointer transition-all duration-300 ${formData.nominal?.id === n.id
                                    ? "bg-cyan-500/20 border-cyan-500 text-cyan-400"
                                    : "bg-slate-900 border-white/5 hover:border-white/20"
                                } ${step !== 2 ? "pointer-events-none" : ""}`}
                        >
                            <div className="font-bold text-sm mb-1">{n.label}</div>
                            <div className="text-xs opacity-60">{n.price}</div>
                        </div>
                    ))}
                </div>

                {step === 2 && formData.nominal && (
                    <Button
                        className="mt-6 w-full bg-cyan-500 hover:bg-cyan-600 text-white"
                        onClick={() => setStep(3)}
                    >
                        Lanjutkan ke Pembayaran
                    </Button>
                )}
            </section>

            {/* Step 3: Pembayaran */}
            <section className={`p-8 rounded-3xl bg-white/5 border transition-all duration-300 ${step === 3 ? "border-cyan-500/50 bg-white/10" : "border-white/10 opacity-60"
                }`}>
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                        <CreditCard size={20} />
                    </div>
                    <h3 className="text-lg font-bold" style={{ fontFamily: 'satoshi-bold' }}>Langkah 3: Pembayaran</h3>
                </div>

                <div className="space-y-3">
                    {payments.map((p) => (
                        <div
                            key={p.id}
                            onClick={() => step === 3 && setFormData({ ...formData, payment: p })}
                            className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-all duration-300 ${formData.payment?.id === p.id
                                    ? "bg-cyan-500/20 border-cyan-500"
                                    : "bg-slate-900 border-white/5 hover:border-white/20"
                                } ${step !== 3 ? "pointer-events-none" : ""}`}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-6 flex items-center justify-center p-1 bg-white rounded-lg">
                                    <img src={p.icon} alt={p.name} className="h-full object-contain" />
                                </div>
                                <span className="font-bold text-sm tracking-wide">{p.name}</span>
                            </div>
                            <div className="text-sm font-bold text-cyan-400">{formData.nominal?.price}</div>
                        </div>
                    ))}
                </div>

                {step === 3 && formData.payment && (
                    <Button
                        className="mt-6 w-full bg-gradient-to-r from-blue-500 via-green-500 to-cyan-500 hover:shadow-lg hover:shadow-cyan-500/30 text-white font-bold h-14"
                    >
                        Bayar Sekarang
                    </Button>
                )}
            </section>
        </div>
    );
};

export default OrderForm;
